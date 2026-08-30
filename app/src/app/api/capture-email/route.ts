import { NextResponse } from "next/server";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { escapeHtml, sendResultsCopyEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { SOFT_CAPTURE_CONSENT_TEXT } from "@/config/disclosures";

export const runtime = "nodejs";

/**
 * Soft capture ("Email my results" — Part 7 §7.2, Stage 2 Phase 3).
 *
 * Name + email only — no phone, no ZIP, no diagnostic payload round-trip.
 * The consumer receives a copy of their snapshot summary; the lead row is
 * created (or deduped against an existing email) with capture_type='soft'.
 * The MLO is NOT notified here (soft leads enter the nurture track; Part 8
 * notification is reserved for scored hard captures).
 */

interface SoftCapturePayload {
  name?: string;
  email?: string;
  consentGiven?: boolean;
  /** Compact snapshot summary for the email body (numbers validated below). */
  summary?: {
    tier?: string;
    priceLow?: number;
    priceHigh?: number;
    pitiMid?: number;
    cashToCloseMid?: number;
    dtiBackEndPct?: number;
  };
}

const MAX_BODY_BYTES = 4_096; // name + email + summary — nothing else needed
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const TIER_RE = /^[A-Za-z_ ]{0,40}$/;

/**
 * Field-level caps (Stage 4 QA fix 6) — same enforced maximums as /api/lead,
 * applied on top of the whole-body cap so a single oversized field is
 * rejected rather than accepted up to the body limit.
 */
const FIELD_CAPS: Record<string, number> = {
  name: 60,
  email: 254, // RFC 5321 maximum
};

/** Clamp a client-supplied number into a sane display band, else null. */
function safeNum(v: unknown, max: number): number | null {
  const n = typeof v === "number" ? v : Number(v);
  if (!Number.isFinite(n) || n < 0 || n > max) return null;
  return Math.round(n);
}

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return fwd || request.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function POST(request: Request) {
  // -- 0. Payload size cap ---------------------------------------------------
  const rawLength = Number(request.headers.get("content-length") ?? "0");
  if (rawLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 });
  }

  let body: SoftCapturePayload;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 });
    }
    body = JSON.parse(raw) as SoftCapturePayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // -- 1. Rate limit per IP: 5/min (shared limiter with /api/lead) -----------
  const ip = clientIp(request);
  const rl = rateLimit(ip);
  if (!rl.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } },
    );
  }

  // -- 2. Validation ----------------------------------------------------------
  for (const [field, cap] of Object.entries(FIELD_CAPS)) {
    const value = (body as unknown as Record<string, unknown>)[field];
    if (value != null && String(value).length > cap) {
      return NextResponse.json({ ok: false, error: `${field} is too long.` }, { status: 400 });
    }
  }
  const rawName = String(body.name ?? "").trim();
  const rawEmail = String(body.email ?? "").trim().toLowerCase();
  if (!rawName) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
  }
  if (!rawEmail || !EMAIL_RE.test(rawEmail)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  if (!body.consentGiven) {
    return NextResponse.json({ ok: false, error: "Consent is required to submit." }, { status: 400 });
  }
  const safeName = escapeHtml(rawName.slice(0, 60));
  const userAgent = request.headers.get("user-agent") ?? null;

  // -- 3. Snapshot summary (validated + clamped; numbers only, never raw text) --
  const s = body.summary ?? {};
  const tier = typeof s.tier === "string" && TIER_RE.test(s.tier) ? s.tier : null;
  const summary = {
    tier,
    priceLow: safeNum(s.priceLow, 10_000_000),
    priceHigh: safeNum(s.priceHigh, 10_000_000),
    pitiMid: safeNum(s.pitiMid, 100_000),
    cashToCloseMid: safeNum(s.cashToCloseMid, 10_000_000),
    dtiBackEndPct: safeNum(s.dtiBackEndPct, 200),
  };

  // -- 4. Persist (dedupe by email; degrade gracefully without Supabase) -----
  let leadId: string | null = null;
  if (isSupabaseConfigured()) {
    const db = getSupabaseServer()!;
    const { data: existing } = await db
      .from("leads")
      .select("id, capture_type")
      .eq("email", rawEmail)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existing?.id) {
      leadId = existing.id as string;
      // Upgrade the existing lead: never downgrade a hard capture to soft.
      if (existing.capture_type !== "hard") {
        await db.from("leads").update({ capture_type: "soft" }).eq("id", leadId);
      }
    } else {
      const { data: leadRow, error } = await db
        .from("leads")
        .insert({
          name: safeName,
          email: rawEmail,
          capture_type: "soft",
          composite_tier: summary.tier,
          state: "FL",
        })
        .select("id")
        .single();
      if (!error && leadRow) leadId = leadRow.id as string;
    }

    // Consent record (exact text + ip + ua, MAP/TCPA recordkeeping).
    if (leadId) {
      await db.from("consents").insert({
        lead_id: leadId,
        consent_type: "soft_capture_email",
        consent_text: SOFT_CAPTURE_CONSENT_TEXT,
        ip,
        user_agent: userAgent,
      });
    }
  }

  // -- 5. Send the results email (awaited — small body, single send) ---------
  let emailSent = false;
  try {
    const result = await sendResultsCopyEmail({
      name: safeName,
      email: rawEmail,
      summary,
    });
    emailSent = result.sent;
    if (!result.sent) {
      // Logged with lead id only — no PII in logs.
      console.error("[capture-email] send failed", { leadId, error: result.error });
    }
  } catch (e) {
    console.error("[capture-email] send threw", {
      leadId,
      error: e instanceof Error ? e.message : "unknown",
    });
  }

  return NextResponse.json({
    ok: true,
    leadId,
    stored: isSupabaseConfigured(),
    emailSent,
  });
}
