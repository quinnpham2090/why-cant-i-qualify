import { NextResponse } from "next/server";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { sendConsumerConfirmation, sendMloNotification } from "@/lib/email";
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

/** Verify Cloudflare Turnstile (anti-spam). Skipped if not configured. */
async function verifyTurnstile(token?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured -> allow (dev)
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
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Basic validation
  if (!body.name?.trim() || !body.email?.trim()) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  if (!body.consentGiven) {
    return NextResponse.json({ ok: false, error: "Consent is required to submit." }, { status: 400 });
  }

  // Anti-spam
  const human = await verifyTurnstile(body.turnstileToken);
  if (!human) {
    return NextResponse.json({ ok: false, error: "Spam check failed." }, { status: 422 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const userAgent = request.headers.get("user-agent") ?? null;

  // Persist (degrade gracefully if Supabase not configured yet)
  let leadId: string | null = null;
  if (isSupabaseConfigured()) {
    const db = getSupabaseServer()!;
    const { data: leadRow, error: leadErr } = await db
      .from("leads")
      .insert({
        name: body.name.trim(),
        email: body.email.trim(),
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

  // Emails (non-blocking for the response)
  const emailData = {
    name: body.name.trim(),
    email: body.email.trim(),
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
