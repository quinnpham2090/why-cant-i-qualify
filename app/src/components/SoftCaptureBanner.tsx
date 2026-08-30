"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/funnel";
import { SOFT_CAPTURE_CONSENT_TEXT } from "@/config/disclosures";
import type { DiagnosticResult } from "@/engine/types";

/**
 * Soft capture — "Email my results" (Stage 2 Phase 3, Part 7 §7.2).
 *
 * Stage-1 ask: name + email only, optional, skippable, rendered above the
 * hard-capture form. Sends a compact, server-validated summary to
 * /api/capture-email; the full lead form below remains the stage-2 ask.
 */
export function SoftCaptureBanner({ result }: { result: DiagnosticResult }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  if (status === "done") {
    return (
      <div role="status" className="rounded-xl border border-rule bg-accent-soft p-5">
        <p className="text-sm font-medium text-ink">Your results are on the way.</p>
        <p className="mt-1 text-sm text-ink-2">
          We sent a copy of your snapshot to your email. Want to go a step
          further? The form below books a free 15-minute review.
        </p>
      </div>
    );
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    if (!consent) {
      setError("Please confirm you'd like to receive the email.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/capture-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          consentGiven: consent,
          summary: {
            // Machine-safe enum key ("strong_fit", "workable", …) — the route's
            // TIER_RE validation rejected the long human message (Stage 4 QA fix 5).
            tier: result.compositeTier,
            priceLow: result.affordablePurchasePrice.low,
            priceHigh: result.affordablePurchasePrice.high,
            pitiMid: result.estimatedPiti.mid,
            cashToCloseMid: result.cashToClose.mid,
            dtiBackEndPct: Math.round(result.dtiBackEnd * 100),
          },
        }),
      });
      const j = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !j.ok) {
        setError(j.error ?? "Something went wrong — please try again in a minute.");
        setStatus("idle");
        return;
      }
      setStatus("done");
      trackEvent({ event: "soft_capture_success" });
    } catch {
      setError("Network error — please check your connection and try again.");
      setStatus("idle");
    }
  };

  const inputCls =
    "w-full rounded-lg border border-rule bg-card px-3.5 py-3 text-base text-ink placeholder:text-ink-3 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <section aria-label="Email my results" className="rounded-xl border border-rule bg-paper-2 p-5 sm:p-6">
      <h3 className="font-display text-2xl text-ink">Want a copy of these results?</h3>
      <p className="mt-1 text-sm text-ink-2">
        We&apos;ll email you this snapshot. Totally optional — and you can skip it.
      </p>
      <form onSubmit={submit} className="mt-4 space-y-3" noValidate>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="soft-name" className="mb-2 block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="soft-name"
              className={inputCls}
              autoComplete="name"
              maxLength={60}
              placeholder="Your name"
              value={name}
              aria-invalid={error != null && !name.trim() ? true : undefined}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="soft-email" className="mb-2 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="soft-email"
              type="email"
              className={inputCls}
              autoComplete="email"
              maxLength={254}
              placeholder="you@example.com"
              value={email}
              aria-invalid={error != null && !email.trim() ? true : undefined}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-start gap-2">
          <input
            id="soft-consent"
            type="checkbox"
            className="mt-1"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-describedby="soft-consent-text"
          />
          <label htmlFor="soft-consent" id="soft-consent-text" className="text-xs leading-relaxed text-ink-2">
            {SOFT_CAPTURE_CONSENT_TEXT}
          </label>
        </div>
        {error && (
          <p role="alert" className="text-xs font-medium text-error">
            {error}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" disabled={status === "sending"} className="btn-primary px-6 py-3 text-sm disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Email my results"}
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="text-sm text-ink-2 underline underline-offset-2 hover:text-ink"
          >
            No thanks, just keep my results on screen
          </button>
        </div>
      </form>
    </section>
  );
}
