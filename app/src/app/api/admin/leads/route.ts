import { NextResponse } from "next/server";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { adminKeyOk } from "@/lib/admin-auth";

export const runtime = "nodejs";

/**
 * Admin leads API (Stage 2 Phase 4) — list + status update for the operator
 * dashboard. NOT public: every request must present the admin key.
 *
 * Auth: `Authorization: Basic <b64(user:key)>` (the browser prompts for it via
 * the proxy's 401 challenge and resends it automatically) or an explicit
 * `X-API-Key` header. Both styles are enforced with the shared helpers in
 * src/lib/admin-auth.ts (Stage 4 QA fix 2: previously the proxy rejected
 * X-API-Key before this route could accept it).
 *
 * Stage 4 QA fix 4: every successful PATCH appends a structured audit entry
 * to leads.activity_log (migration 005) — who/when/what/old→new.
 */

const STATUSES = new Set([
  "new",
  "contacted",
  "appointment_scheduled",
  "appointment_completed",
  "application_started",
  "pre_approved",
  "in_underwriting",
  "closed_funded",
  "lost",
  "nurture",
  "do_not_contact",
]);

/** Bounded audit trail — keep the most recent 100 entries per lead. */
const MAX_ACTIVITY_ENTRIES = 100;

export async function GET(request: Request) {
  if (!adminKeyOk(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 503 });
  }

  const url = new URL(request.url);
  const tier = url.searchParams.get("tier");
  const limitRaw = Number(url.searchParams.get("limit") ?? "100");
  const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(Math.trunc(limitRaw), 1), 200) : 100;

  const db = getSupabaseServer()!;
  let query = db
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (tier && ["hot", "warm", "nurture", "future_buyer", "low_intent"].includes(tier)) {
    query = query.eq("lead_tier", tier);
  }
  const { data, error } = await query;

  if (error) {
    console.error("[admin/leads] query failed", { error: error.message });
    return NextResponse.json({ ok: false, error: "Query failed" }, { status: 500 });
  }
  return NextResponse.json({ ok: true, leads: data ?? [] });
}

export async function PATCH(request: Request) {
  if (!adminKeyOk(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 503 });
  }

  let body: { id?: unknown; status?: unknown; nextAction?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const id = typeof body.id === "string" && /^[0-9a-f-]{36}$/i.test(body.id) ? body.id : null;
  const status = typeof body.status === "string" && STATUSES.has(body.status) ? body.status : null;
  const nextAction =
    typeof body.nextAction === "string" ? body.nextAction.slice(0, 200) : undefined;

  if (!id || (!status && nextAction === undefined)) {
    return NextResponse.json(
      { ok: false, error: "id and a valid status or nextAction are required." },
      { status: 400 },
    );
  }

  const db = getSupabaseServer()!;
  const update: Record<string, unknown> = {};
  if (status) {
    update.status = status;
    update.last_contacted_at = new Date().toISOString();
  }
  if (nextAction !== undefined) update.next_action = nextAction;

  // Audit trail (Stage 4 QA fix 4): read the current log, append one JSON
  // entry per changed field, keep the newest 100. Single-operator dashboard —
  // read-modify-write (rather than a Postgres array_append RPC) is adequate.
  const { data: currentRow } = await db
    .from("leads")
    .select("status, next_action, activity_log")
    .eq("id", id)
    .single();
  const currentLog = Array.isArray(currentRow?.activity_log)
    ? (currentRow.activity_log as unknown[])
    : [];
  const entry: Record<string, unknown> = { at: new Date().toISOString(), by: "admin" };
  if (status !== null && currentRow?.status !== status) {
    entry.field = "status";
    entry.from = currentRow?.status ?? null;
    entry.to = status;
  }
  if (nextAction !== undefined && currentRow?.next_action !== nextAction) {
    entry.field = entry.field ? "status+next_action" : "next_action";
    entry.from = currentRow?.next_action ?? null;
    entry.to = nextAction;
  }
  update.activity_log = [...currentLog, JSON.stringify(entry)].slice(-MAX_ACTIVITY_ENTRIES);

  const { error } = await db.from("leads").update(update).eq("id", id);
  if (error) {
    console.error("[admin/leads] update failed", { error: error.message });
    return NextResponse.json({ ok: false, error: "Update failed" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
