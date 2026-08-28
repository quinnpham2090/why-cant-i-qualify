"use client";

import { TIER_LABELS, CONFIDENCE_LABELS, RESULTS_HEADLINE, RESULTS_SUBHEAD } from "@/engine/labels";
import { RESULT_DISCLAIMER_BLOCK } from "@/config/disclosures";
import type { DiagnosticResult } from "@/engine/types";

const fmtUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function RangeRow({ label, low, high, mid }: { label: string; low: number; high: number; mid?: number }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-neutral-100 py-3 last:border-0">
      <dt className="text-sm text-neutral-600">{label}</dt>
      <dd className="text-right">
        <span className="font-semibold text-neutral-900">
          {fmtUSD(low)} – {fmtUSD(high)}
        </span>
        {mid != null && <span className="ml-2 text-xs text-neutral-500">about {fmtUSD(mid)}</span>}
      </dd>
    </div>
  );
}

const TIER_BADGE: Record<string, string> = {
  strong_fit: "bg-emerald-100 text-emerald-900",
  good_fit: "bg-teal-100 text-teal-900",
  workable: "bg-amber-100 text-amber-900",
  some_considerations: "bg-orange-100 text-orange-900",
  limited_fit: "bg-rose-100 text-rose-900",
};

export function ResultsView({ result }: { result: DiagnosticResult }) {
  const pillarOrder = ["income", "debt", "credit", "cash", "payment", "property", "documentation"];
  const pillClass = TIER_BADGE[result.compositeTier] ?? "bg-neutral-100 text-neutral-800";

  return (
    <section aria-labelledby="results-heading" className="space-y-8">
      <header className="text-center">
        <h2 id="results-heading" className="text-2xl font-semibold sm:text-3xl">
          {RESULTS_HEADLINE}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-600">{RESULTS_SUBHEAD}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className={`rounded-full px-4 py-1.5 text-sm font-semibold ${pillClass}`}>
            {TIER_LABELS[result.compositeTier]}
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600">
            {CONFIDENCE_LABELS[result.confidence]}
          </span>
        </div>
        <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-700">{result.compositeTierMessage}</p>
      </header>

      {/* Headline numbers (always ranges) */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold">Your estimated ranges</h3>
        <dl className="mt-2">
          <RangeRow
            label="Home price you may be able to work with"
            low={result.affordablePurchasePrice.low}
            high={result.affordablePurchasePrice.high}
            mid={result.affordablePurchasePrice.mid}
          />
          <RangeRow
            label="Loan amount"
            low={result.maxLoanAmount.low}
            high={result.maxLoanAmount.high}
            mid={result.maxLoanAmount.mid}
          />
          <RangeRow
            label="Estimated monthly payment (PITI)"
            low={result.estimatedPiti.low}
            high={result.estimatedPiti.high}
            mid={result.estimatedPiti.mid}
          />
          <RangeRow
            label="Estimated cash to close"
            low={result.cashToClose.low}
            high={result.cashToClose.high}
            mid={result.cashToClose.mid}
          />
        </dl>
        <p className="mt-3 text-xs text-neutral-500">
          Payment estimates exclude taxes and insurance where noted and may be greater.
          Actual terms depend on your full financial picture and the lender.
        </p>
      </div>

      {/* Seven-pillar scorecard */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold">Readiness across seven areas</h3>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {pillarOrder.map((key) => {
            const s = result.subScores[key];
            if (!s) return null;
            return (
              <li key={key} className="rounded-xl bg-neutral-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium capitalize">{key}</span>
                  <span className="text-sm font-semibold text-neutral-900">{s.score}/100</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className="h-full rounded-full bg-emerald-600"
                    style={{ width: `${Math.min(100, Math.max(0, s.score))}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-neutral-600">{s.summary}</p>
                {s.redFlags.length > 0 && (
                  <ul className="mt-1 list-inside list-disc text-xs text-rose-700">
                    {s.redFlags.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Primary + secondary obstacles */}
      {(result.primaryObstacle || result.secondaryObstacles.length > 0) && (
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold">What may be in the way</h3>
          {result.primaryObstacle && (
            <div className="mt-3 rounded-xl bg-rose-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                Biggest factor
              </p>
              <p className="mt-1 text-sm text-rose-900">{result.primaryObstacle.description}</p>
              <p className="mt-1 text-xs text-rose-700">
                Typical timeframe to address: {result.primaryObstacle.fixHorizon}
              </p>
            </div>
          )}
          {result.secondaryObstacles.length > 0 && (
            <ul className="mt-3 space-y-2">
              {result.secondaryObstacles.map((o) => (
                <li key={`${o.category}-${o.description}`} className="rounded-lg bg-neutral-50 p-3 text-sm text-neutral-700">
                  {o.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Strengths */}
      {result.strengths.length > 0 && (
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold">What may be working for you</h3>
          <ul className="mt-3 space-y-2">
            {result.strengths.map((s) => (
              <li key={`${s.category}-${s.description}`} className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900">
                {s.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Programs */}
      {result.eligiblePrograms.length > 0 && result.eligiblePrograms[0] !== ("unknown" as never) && (
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold">Programs that may fit</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {result.eligiblePrograms.map((p) => (
              <li key={p} className="rounded-full bg-neutral-100 px-3 py-1 text-sm capitalize text-neutral-800">
                {p.replace(/_/g, " ")}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Assumptions disclosed (audit constraint #11) */}
      {result.assumptionsUsed.length > 0 && (
        <details className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <summary className="cursor-pointer text-base font-semibold text-neutral-900">
            How we calculated this (assumptions we made)
          </summary>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-neutral-600">
            {result.assumptionsUsed.map((a) => (
              <li key={a.key}>{a.description}</li>
            ))}
          </ul>
        </details>
      )}

      {/* Disclaimers — in the same viewport as the result */}
      <aside
        aria-label="Important disclosures"
        className="rounded-2xl bg-neutral-50 p-5 text-xs leading-relaxed text-neutral-600"
      >
        <h3 className="mb-2 text-sm font-semibold text-neutral-800">Please read</h3>
        <ul className="space-y-1.5">
          {[...RESULT_DISCLAIMER_BLOCK, ...result.disclaimers].map((d) => (
            <li key={d}>• {d}</li>
          ))}
        </ul>
      </aside>

      {/* CTA — same for every result (no gating) */}
      <div className="rounded-2xl bg-emerald-800 p-6 text-center text-white">
        <h3 className="text-lg font-semibold">Want a human to walk through this with you?</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-emerald-100">
          Book a free, no-obligation review with a licensed loan originator to talk
          about your specific situation.
        </p>
        <a
          href="/book"
          className="mt-4 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-emerald-800 transition hover:bg-emerald-50"
        >
          Book a free review
        </a>
      </div>
    </section>
  );
}
