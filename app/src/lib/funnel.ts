"use client";

/**
 * Funnel-event tracking (FIX_PLAN V1.6 P10 acceptance).
 *
 * Client-side educational tool: NO PII is attached to any event — no name,
 * email, phone, ZIP, income, or free-text input values ever reach this module.
 * Events carry only which step the user is on and coarse enum answers
 * (loan purpose, occupancy, income type, credit tier, credit-event flag,
 * co-borrower flag) so drop-off between wizard steps can be measured without
 * building a behavioral shadow profile.
 *
 * Delivery: POST /api/event (keepalive so in-flight events survive page
 * unload). Fails silently when the endpoint is absent — analytics must never
 * break the funnel.
 */

const ENDPOINT = "/api/event";

export type FunnelEventName =
  | "questionnaire_start"
  | "questionnaire_step_complete"
  | "questionnaire_complete"
  | "results_viewed"
  | "lead_capture_start"
  | "lead_capture_success"
  | "book_click";

interface EventPayload {
  event: FunnelEventName;
  /** Wizard step index (0-3) for step-level drop-off. */
  step?: number;
  /** Coarse enum answers — never free text, never financial figures. */
  meta?: Record<string, string | number | boolean | null>;
}

export function trackEvent(payload: EventPayload): void {
  if (typeof window === "undefined") return;
  try {
    void fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, ts: Date.now() }),
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // analytics must never break the funnel
  }
}
