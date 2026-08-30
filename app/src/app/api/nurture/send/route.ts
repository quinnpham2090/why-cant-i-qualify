import { NextResponse } from "next/server";
import { createHmac } from "node:crypto";
import { Resend } from "resend";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { NURTURE_TEMPLATES } from "@/lib/nurture-templates";

export const runtime = "nodejs";

/**
 * Nurture cron (Stage 2 Phase 5 — Part 8 §8.5). Vercel Cron hits this route
 * daily at 09:00 UTC with `Authorization: Bearer $NURTURE_CRON_SECRET`.
 *
 * Sequence: Day 0/2/5/10/21 then monthly (30-day cadence via last_nurture_at).
 * Status stored in leads.nurture_status doubles as the sequence position.
 * 'unsubscribed' leads are skipped (CAN-SPAM). Unsubscribes are handled by
 * /api/nurture/unsubscribe (HMAC-signed links).
 */

const FROM = process.env.EMAIL_FROM || "Why Can't I Qualify <onboarding@resend.dev>";
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://why-cant-i-qualify.vercel.app";
/** Resend free tier is 100/day — leave headroom for confirmation sends. */
const MAX_SENDS_PER_RUN = 40;

function authorized(request: Request): boolean {
  const secret = process.env.NURTURE_CRON_SECRET;
  if (!secret) return false; // never run open — an accidental trigger spams leads
  const header = request.headers.get("authorization") ?? "";
  return header === `Bearer ${secret}`;
}

/** Offset in days from capture to the next milestone, given the stored status. */
function nextMilestone(status: string): { key: string; day: number } | null {
  const order = NURTURE_TEMPLATES.map((t) => ({ key: t.key, day: t.day }));
  const idx = order.findIndex((m) => m.key === status);
  if (idx === -1) return order[0]; // 'none' or unknown → start at day 0
  if (idx + 1 < order.length) return order[idx + 1];
  return null; // sequence complete (status === 'monthly' handled separately)
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 503 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "RESEND_API_KEY not configured" }, { status: 503 });
  }
  const client = new Resend(apiKey);

  const db = getSupabaseServer()!;
  const now = new Date();
  const sent: { lead: string; template: string }[] = [];
  const failed: { lead: string; error: string }[] = [];

  // Candidates: anyone who captured (soft or hard), not unsubscribed, and not
  // already past the whole sequence. Bounded batch per run.
  const { data: leads, error } = await db
    .from("leads")
    .select("id, name, email, capture_type, nurture_status, last_nurture_at, created_at")
    .in("capture_type", ["soft", "hard"])
    .neq("nurture_status", "unsubscribed")
    .order("created_at", { ascending: true })
    .limit(200);

  if (error) {
    console.error("[nurture/send] query failed", { error: error.message });
    return NextResponse.json({ ok: false, error: "Query failed" }, { status: 500 });
  }

  for (const lead of leads ?? []) {
    if (sent.length + failed.length >= MAX_SENDS_PER_RUN) break;
    if (!lead.email || !lead.created_at) continue;

    const createdAt = new Date(lead.created_at as string);
    const daysSinceCapture = Math.floor((now.getTime() - createdAt.getTime()) / 86_400_000);

    // Pick the milestone: sequence step if one is due, else the monthly
    // evergreen (>= 30 days since the last send, after day_21 completes).
    let templateKey: string | null = null;
    const status = String(lead.nurture_status ?? "none");
    const milestone = nextMilestone(status);
    if (milestone && daysSinceCapture >= milestone.day) {
      templateKey = milestone.key;
    } else if (
      (status === "monthly" || milestone == null) &&
      status !== "none" &&
      lead.last_nurture_at
    ) {
      const lastSend = new Date(lead.last_nurture_at as string);
      if ((now.getTime() - lastSend.getTime()) / 86_400_000 >= 30) templateKey = "monthly";
    }
    if (!templateKey) continue;

    const template = NURTURE_TEMPLATES.find((t) => t.key === templateKey);
    if (!template) continue;

    // Per-recipient unsubscribe link: HMAC(email, cron secret).
    const unsubscribeUrl = buildUnsubscribeUrl(String(lead.email));
    const name = escapeAll(String(lead.name ?? "there"));

    try {
      const { error: sendErr } = await client.emails.send({
        from: FROM,
        to: String(lead.email),
        subject: template.subject,
        html: template.html(name, unsubscribeUrl),
        headers: {
          "List-Unsubscribe": `<mailto:hello@notify.qurealtysol.com>, <${unsubscribeUrl}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
      });
      if (sendErr) {
        failed.push({ lead: lead.id as string, error: sendErr.message });
        continue;
      }
    } catch (e) {
      failed.push({ lead: lead.id as string, error: e instanceof Error ? e.message : "unknown" });
      continue;
    }

    // Record the milestone + timestamp only after a successful send.
    await db
      .from("leads")
      .update({ nurture_status: templateKey, last_nurture_at: now.toISOString() })
      .eq("id", lead.id as string);
    sent.push({ lead: lead.id as string, template: templateKey });
  }

  // Log without PII.
  console.log("[nurture/send] run complete", {
    candidates: leads?.length ?? 0,
    sent: sent.length,
    failed: failed.length,
  });

  return NextResponse.json({
    ok: true,
    candidates: leads?.length ?? 0,
    sent: sent.length,
    failed: failed.length,
  });
}

function buildUnsubscribeUrl(email: string): string {
  const token = createHmac("sha256", process.env.NURTURE_CRON_SECRET ?? "")
    .update(email.toLowerCase())
    .digest("hex");
  return `${SITE}/api/nurture/unsubscribe?e=${encodeURIComponent(email)}&t=${token}`;
}

function escapeAll(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
