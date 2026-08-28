import { NextResponse } from "next/server";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

/**
 * Funnel-event sink (FIX_PLAN V1.6 P10 acceptance: "completion rate measured
 * via funnel events — start/complete/capture").
 *
 * Privacy posture (mirrors lib/funnel.ts): the client sends NO PII and no
 * financial figures — only event names, the wizard step, and coarse enum
 * answers. This route validates that shape, rate-limits, and stores to
 * `funnel_events` (schema in supabase/schema.sql). Absent table/creds the
 * route still 204s so the UI is never affected.
 */

interface EventPayload {
  event?: string;
  step?: unknown;
  meta?: unknown;
  ts?: unknown;
}

const ALLOWED_EVENTS = new Set([
  "questionnaire_start",
  "questionnaire_step_complete",
  "questionnaire_complete",
  "results_viewed",
  "lead_capture_start",
  "lead_capture_success",
  "book_click",
]);

const MAX_META_KEYS = 12;
const MAX_STRING_LEN = 40;

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return fwd || request.headers.get("x-real-ip")?.trim() || "unknown";
}

/** Coerce meta into a small, shallow, primitive-only record — drop the rest. */
function sanitizeMeta(raw: unknown): Record<string, string | number | boolean | null> {
  const out: Record<string, string | number | boolean | null> = {};
  if (typeof raw !== "object" || raw == null) return out;
  let count = 0;
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (count >= MAX_META_KEYS) break;
    const safeKey = key.replace(/[^a-zA-Z0-9_]/g, "").slice(0, MAX_STRING_LEN);
    if (!safeKey) continue;
    if (value == null) {
      out[safeKey] = null;
    } else if (typeof value === "boolean") {
      out[safeKey] = value;
    } else if (typeof value === "number" && Number.isFinite(value)) {
      out[safeKey] = value;
    } else if (typeof value === "string") {
      out[safeKey] = value.slice(0, MAX_STRING_LEN);
    }
    count++;
  }
  return out;
}

export async function POST(request: Request) {
  // Batch guard: events are tiny; abuse here shouldn't crowd the lead route.
  const rl = rateLimit(`event:${clientIp(request)}`, 30, 60_000);
  if (!rl.allowed) {
    return new NextResponse(null, { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } });
  }

  let body: EventPayload;
  try {
    body = (await request.json()) as EventPayload;
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const event = typeof body.event === "string" ? body.event : "";
  if (!ALLOWED_EVENTS.has(event)) {
    return new NextResponse(null, { status: 204 });
  }

  const step = typeof body.step === "number" && Number.isInteger(body.step) && body.step >= 0 && body.step < 10
    ? body.step
    : null;
  const meta = sanitizeMeta(body.meta);
  const ts = typeof body.ts === "number" && Number.isFinite(body.ts) ? new Date(body.ts).toISOString() : new Date().toISOString();

  if (isSupabaseConfigured()) {
    const db = getSupabaseServer();
    if (db) {
      const { error } = await db.from("funnel_events").insert({
        event_name: event,
        step,
        meta,
        client_ts: ts,
      });
      if (error) {
        // Sink only — never surface storage failures to the client.
        return new NextResponse(null, { status: 204 });
      }
    }
  }

  return new NextResponse(null, { status: 204 });
}
