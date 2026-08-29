"use client";

import { useEffect, useRef, useState } from "react";
import { TCPA_CONSENT_TEXT, LEAD_TRANSFER_TEXT } from "@/config/disclosures";
import { trackEvent } from "@/lib/funnel";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: { sitekey: string; callback: (token: string) => void }) => void;
    };
  }
}

export interface LeadContext {
  compositeTier?: string;
  engineVersion?: string;
  inputs?: unknown;
  result?: unknown;
}

const inputCls =
  "w-full rounded-lg border border-hairline bg-surface px-3 py-2.5 text-base text-text-strong focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-600";
const labelCls = "mb-1.5 block text-sm font-medium text-text-strong";

export function LeadCaptureForm({ context }: { context?: LeadContext }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [consent, setConsent] = useState(false); // MUST default unchecked
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  // Funnel (P10): a capture form was rendered with the results
  useEffect(() => {
    trackEvent({ event: "lead_capture_start" });
  }, []);

  // Load + render Turnstile when a site key is configured.
  useEffect(() => {
    if (!siteKey || !turnstileRef.current) return;
    const mount = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: (token: string) => setTurnstileToken(token),
        });
      }
    };
    if (window.turnstile) {
      mount();
    } else {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      s.async = true;
      s.onload = mount;
      document.head.appendChild(s);
    }
  }, [siteKey]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? "") || undefined,
          zip: String(fd.get("zip") ?? "") || undefined,
          preferredTime: String(fd.get("preferredTime") ?? "") || undefined,
          consentGiven: consent,
          turnstileToken,
          compositeTier: context?.compositeTier,
          engineVersion: context?.engineVersion,
          inputs: context?.inputs,
          result: context?.result,
        }),
      });
      const j = await res.json();
      if (!res.ok || !j.ok) {
        setError(j.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      trackEvent({ event: "lead_capture_success", meta: { tier: context?.compositeTier ?? null } });
      setStatus("success");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sage-100 bg-sage-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-warm-900">You&rsquo;re all set</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-warm-700">
          We&rsquo;ve received your information. If you&rsquo;d like to talk it through,
          book a free review below — no obligation.
        </p>
        <a
          href="/book"
          onClick={() => trackEvent({ event: "book_click" })}
          className="mt-5 inline-block rounded-full bg-accent px-7 py-3 font-semibold text-accent-text hover:bg-accent-hover"
        >
          Book my free review
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-hairline bg-surface p-6 shadow-sm sm:p-8" noValidate>
      <h3 className="text-xl font-semibold text-text-strong">
        Want a licensed pro to walk through this with you?
      </h3>
      <p className="mt-1.5 text-sm text-text-body">
        Leave your details and {`we'll`} connect you with a licensed loan originator for a
        free, no-obligation review.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="lc-name">Full name</label>
          <input id="lc-name" name="name" required maxLength={120} className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="lc-email">Email</label>
          <input id="lc-email" name="email" type="email" required maxLength={254} className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label className={labelCls} htmlFor="lc-phone">Phone (optional)</label>
          <input id="lc-phone" name="phone" type="tel" maxLength={20} className={inputCls} autoComplete="tel" />
        </div>
        <div>
          <label className={labelCls} htmlFor="lc-zip">ZIP code (optional)</label>
          <input id="lc-zip" name="zip" inputMode="numeric" maxLength={10} className={inputCls} autoComplete="postal-code" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="lc-time">Best time to reach you (optional)</label>
          <select id="lc-time" name="preferredTime" className={inputCls}>
            <option value="">No preference</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
      </div>

      {/* Turnstile (renders only if a site key is configured) */}
      {siteKey && <div ref={turnstileRef} className="mt-4" />}

      {/* Consent — un-pre-checked (TCPA / MAP requirement) */}
      <label className="mt-5 flex items-start gap-3 rounded-lg bg-surface-2 p-4 text-sm text-text-body">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-accent"
          required
        />
        <span>
          {TCPA_CONSENT_TEXT}
          <span className="mt-2 block text-xs text-text-muted">{LEAD_TRANSFER_TEXT}</span>
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="mt-3 text-sm text-error">{error}</p>
      )}

      <button
        type="submit"
        disabled={!consent || status === "submitting"}
        className="mt-5 w-full rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-text transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Request my free review"}
      </button>
      <p className="mt-3 text-center text-xs text-text-muted">
        Consent is not a condition of purchase. You can opt out at any time.
      </p>
    </form>
  );
}
