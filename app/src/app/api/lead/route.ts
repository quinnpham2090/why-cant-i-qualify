import { NextResponse } from "next/server";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { sendConsumerConfirmation, sendMloNotification, escapeHtml } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { TCPA_CONSENT_TEXT, LEAD_TRANSFER_TEXT } from "@/config/disclosures";

export const runtime = "nodejs";

interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  zip?: string;
  preferredTime?: string;
  compositeTier?: string;
  engineVersion?: string;
  inputs?: unknown;
  result?: unknown;
  consentGiven: boolean;
  turnstileToken?: string;
}

/** Field-level input caps (FIX_PLAN V1.6 P2) — blocks oversized/bot payloads. */
const FIELD_CAPS: Record<string, number> = {
  name: 120,
  email: 254, // RFC 5321 maximum
  phone: 20,
  zip: 10,
  preferredTime: 20,
  compositeTier: 40,
  engineVersion: 20,
};

/** Whole-body cap: the diagnostic result/inputs JSON a legit client sends is a few KB. */
const MAX_BODY_BYTES = 32_768;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const ZIP_RE = /^\d{5}(-\d{4})?$/;

/** Best-effort client IP (Vercel/Cloudflare provide x-forwarded-for / x-real-ip). */
function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return fwd || request.headers.get("x-real-ip")?.trim() || "unknown";
}

/** Verify Cloudflare Turnstile (anti-spam). Skipped if not configured. */
async function verifyTurnstile(token?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured -> allow (dev); rate limit + caps still apply
  if (!token) return false;
  try {
    const fd = new URLSearchParams();
    fd.set("secret", secret);
    fd.set("response", token);
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: fd,
    });
    const j = (await r.json()) as { success?: boolean };
    return Boolean(j.success);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  // -- 0. Payload size cap (before parsing) --------------------------------
  const rawLength = Number(request.headers.get("content-length") ?? "0");
  if (rawLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Request too large." },
      { status: 413 },
    );
  }

  let body: LeadPayload;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 });
    }
    body = JSON.parse(raw) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // -- 1. Rate limit per IP: 5/min (FIX_PLAN V1.6 P2) ----------------------
  const ip = clientIp(request);
  const rl = rateLimit(ip);
  if (!rl.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } },
    );
  }

  // -- 2. Field caps --------------------------------------------------------
  for (const [field, cap] of Object.entries(FIELD_CAPS)) {
    const value = (body as unknown as Record<string, unknown>)[field];
    if (value != null && String(value).length > cap) {
      return NextResponse.json(
        { ok: false, error: `${field} is too long.` },
        { status: 400 },
      );
    }
  }

  // -- 3. Basic validation ---------------------------------------------------
  const rawName = String(body.name ?? "").trim();
  const rawEmail = String(body.email ?? "").trim().toLowerCase();
  if (!rawName || !rawEmail) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(rawEmail)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  if (body.zip && !ZIP_RE.test(body.zip.trim())) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid ZIP code (e.g. 33101 or 33101-1234)." },
      { status: 400 },
    );
  }
  if (!body.consentGiven) {
    return NextResponse.json({ ok: false, error: "Consent is required to submit." }, { status: 400 });
  }

  // -- 4. Anti-spam (Turnstile; 422 when configured and missing/invalid) -----
  const human = await verifyTurnstile(body.turnstileToken);
  if (!human) {
    return NextResponse.json({ ok: false, error: "Spam check failed." }, { status: 422 });
  }

  // -- 5. Sanitized values for DB + email (FIX_PLAN V1.6 P11/P12) -----------
  // Slice BEFORE escaping so an entity can never be cut in half; escape so a
  // stored name can never execute in the MLO dashboard (defense-in-depth).
  const safeName = escapeHtml(rawName.slice(0, 60));
  const email = rawEmail; // already trimmed + lowercased
  const userAgent = request.headers.get("user-agent") ?? null;

  // -- 6. Persist (degrade gracefully if Supabase not configured yet) -------
  let leadId: string | null = null;
  if (isSupabaseConfigured()) {
    const db = getSupabaseServer()!;
    const { data: leadRow, error: leadErr } = await db
      .from("leads")
      .insert({
        name: safeName,
        email,
        phone: body.phone ?? null,
        zip: body.zip ?? null,
        preferred_time: body.preferredTime ?? null,
        composite_tier: body.compositeTier ?? null,
        engine_version: body.engineVersion ?? null,
        state: "FL",
      })
      .select("id")
      .single();

    if (!leadErr && leadRow) {
      leadId = leadRow.id as string;
      // Record the exact consent text shown (MAP/TCPA recordkeeping).
      await db.from("consents").insert([
        { lead_id: leadId, consent_type: "tcpa", consent_text: TCPA_CONSENT_TEXT, ip, user_agent: userAgent },
        { lead_id: leadId, consent_type: "lead_transfer", consent_text: LEAD_TRANSFER_TEXT, ip, user_agent: userAgent },
      ]);
      // Store diagnostic inputs + outputs for audit/reproducibility.
      if (body.inputs && body.result) {
        await db.from("diagnostic_results").insert({
          lead_id: leadId,
          inputs: body.inputs,
          result: body.result,
          engine_version: body.engineVersion ?? "unknown",
        });
      }
    }
  }

  // -- 7. Emails (non-blocking for the response) -----------------------------
  const emailData = {
    name: safeName,
    email,
    phone: body.phone,
    zip: body.zip,
    preferredTime: body.preferredTime,
    compositeTier: body.compositeTier,
  };
  const consumerEmail = await sendConsumerConfirmation(emailData);
  const mloEmail = await sendMloNotification(emailData, TCPA_CONSENT_TEXT);

  return NextResponse.json({
    ok: true,
    leadId,
    stored: isSupabaseConfigured(),
    emails: { consumer: consumerEmail.sent, mlo: mloEmail.sent },
  });
}
