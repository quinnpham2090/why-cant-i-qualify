"use client";

import { TIER_LABELS, CONFIDENCE_LABELS, RESULTS_HEADLINE, RESULTS_SUBHEAD } from "@/engine/labels";
import { RESULT_DISCLAIMER_BLOCK } from "@/config/disclosures";
import { LoanType, type DiagnosticResult, type EngineInputs } from "@/engine/types";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const fmtUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function RangeRow({ label, low, high, mid }: { label: string; low: number; high: number; mid?: number }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-sand-200 py-3 last:border-0">
      <dt className="text-sm text-warm-700">{label}</dt>
      <dd className="text-right">
        <span className="font-semibold text-warm-900">
          {fmtUSD(low)} – {fmtUSD(high)}
        </span>
        {mid != null && <span className="ml-2 text-xs text-warm-500">about {fmtUSD(mid)}</span>}
      </dd>
    </div>
  );
}

/**
 * Warm, low-arousal tier colors (RESEARCH_EMPATHY.md §2) — no alarm red for
 * any tier. Color is never the only signal: label + icon accompany every badge.
 */
const TIER_BADGE: Record<string, string> = {
  strong_fit: "bg-sage-100 text-warm-900 border border-sage-600",
  good_fit: "bg-sage-100 text-warm-900 border border-warm-500",
  workable: "bg-sand-100 text-warm-900 border border-sand-200",
  some_considerations: "bg-sand-100 text-warm-900 border border-warm-500",
  limited_fit: "bg-sand-100 text-warm-900 border border-warm-700",
};

/** Supportive icon per tier — growth framing, never an X or warning triangle. */
function TierIcon({ tier, className = "h-4 w-4" }: { tier: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    strong_fit: <path d="M4 12l5 5L20 6" />,
    good_fit: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.5l2.5 2.5 4.5-5.5" />
      </>
    ),
    workable: <path d="M4 19c4-9 10-11 16-14M6 19h5" />,
    some_considerations: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5M12 16.5h.01" />
      </>
    ),
    // Sprout: growth framing for the weakest tier
    limited_fit: (
      <>
        <path d="M12 21v-8" />
        <path d="M12 13c0-3.5 2.6-5.5 6.5-5.5 0 3.5-2.6 5.5-6.5 5.5z" />
        <path d="M12 16.5c0-2.8-2.2-4.3-5.5-4.3 0 2.9 2.2 4.3 5.5 4.3z" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[tier] ?? paths.some_considerations}
    </svg>
  );
}

/**
 * Distinct line icon per readiness pillar (FIX_PLAN V1.6 P14): briefcase
 * (income), scale (debt), gauge (credit), wallet (cash), house-calendar
 * (payment), home (property), document-check (documentation). 1.8px stroke,
 * warm-700, free inline SVG — no icon dependency added.
 */
function PillarIcon({ pillar, className = "h-4.5 w-4.5" }: { pillar: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    // briefcase — income
    income: (
      <>
        <rect x="3.5" y="8" width="17" height="12" rx="2" />
        <path d="M9 8V6.5A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5V8" />
        <path d="M3.5 13h17" />
      </>
    ),
    // scale — debt
    debt: (
      <>
        <path d="M12 4v16" />
        <path d="M5 7h14" />
        <path d="M5 7l-2.5 5.5a3 3 0 0 0 5 0L5 7z" />
        <path d="M19 7l-2.5 5.5a3 3 0 0 0 5 0L19 7z" />
        <path d="M8.5 20h7" />
      </>
    ),
    // gauge — credit
    credit: (
      <>
        <path d="M4.5 17.5a8.5 8.5 0 1 1 15 0" />
        <path d="M12 14.5 16 9.5" />
        <circle cx="12" cy="15" r="1.4" />
      </>
    ),
    // wallet — cash
    cash: (
      <>
        <rect x="3.5" y="7" width="17" height="12" rx="2" />
        <path d="M16 7V5.5A1.5 1.5 0 0 0 14.5 4H5.5" />
        <circle cx="16.2" cy="13" r="1.2" />
      </>
    ),
    // house-calendar — payment
    payment: (
      <>
        <path d="M4 10.5 12 4l8 6.5" />
        <path d="M6 9.5V20h12V9.5" />
        <path d="M9 13.5h6M9 16.5h6" />
      </>
    ),
    // home — property
    property: (
      <>
        <path d="M4 11 12 4l8 7" />
        <path d="M6 9.5V20h12V9.5" />
        <path d="M10 20v-5.5h4V20" />
      </>
    ),
    // document-check — documentation
    documentation: (
      <>
        <path d="M7 3.5h7L18.5 8v12.5h-11.5z" />
        <path d="M13.5 3.5V8.5h5" />
        <path d="M9.5 14.5l2 2 3.5-4" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[pillar] ?? paths.documentation}
    </svg>
  );
}

/** Strength marker — a rising-steps icon, distinct from the tier checkmark (P14). */
function StrengthIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 20h4v-4h4v-4h4V8h4" />
      <path d="M16.5 4H20v3.5" />
    </svg>
  );
}

/** Non-QM labels (friendly) — mirrors engine/tables-non-qm.ts. */
const NON_QM_LABELS: Partial<Record<LoanType, string>> = {
  [LoanType.BANK_STATEMENT]: "Bank statement (12/24-month deposits)",
  [LoanType.PANDL_ONLY]: "Profit & loss statement",
  [LoanType.DSCR]: "Investor cash flow (rent-based)",
  [LoanType.ASSET_QUALIFIER]: "Asset-based qualification",
  [LoanType.ITIN]: "ITIN borrower program",
  [LoanType.NON_QM_JUMBO]: "Expanded jumbo",
  [LoanType.NON_WARRANTABLE]: "Non-warrantable condo",
};

const NON_QM_SET = new Set<string>(Object.keys(NON_QM_LABELS));

const PROGRAM_LABELS: Partial<Record<LoanType, string>> = {
  [LoanType.CONVENTIONAL_CONF]: "Conventional",
  [LoanType.CONVENTIONAL_JUMBO]: "Jumbo",
  [LoanType.FHA]: "FHA",
  [LoanType.VA]: "VA",
  [LoanType.USDA]: "USDA",
  ...NON_QM_LABELS,
};

export function ResultsView({ result, inputs }: { result: DiagnosticResult; inputs: EngineInputs }) {
  const pillarOrder = ["income", "debt", "credit", "cash", "payment", "property", "documentation"];
  const pillClass = TIER_BADGE[result.compositeTier] ?? "bg-sand-100 text-warm-900";
  const qmPrograms = result.eligiblePrograms.filter((p) => !NON_QM_SET.has(p));
  const nonQmPrograms = result.eligiblePrograms.filter((p) => NON_QM_SET.has(p));
  // P7: surface the non-QM pricing note beside the numbers when an investor /
  // alternative-documentation program is in the eligible set.
  const showNonQmRateNote = nonQmPrograms.length > 0;

  return (
    <section aria-labelledby="results-heading" className="space-y-8">
      {/* 1. Tier + empathetic summary */}
      <header className="text-center">
        <h2 id="results-heading" className="text-2xl font-semibold sm:text-3xl">
          {RESULTS_HEADLINE}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-warm-700">{RESULTS_SUBHEAD}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold ${pillClass}`}>
            <TierIcon tier={result.compositeTier} />
            {TIER_LABELS[result.compositeTier]}
          </span>
          <span className="rounded-full bg-sand-100 px-3 py-1.5 text-xs text-warm-700">
            {CONFIDENCE_LABELS[result.confidence]}
          </span>
        </div>
        <p className="mx-auto mt-4 max-w-xl font-warm-serif text-lg text-warm-900">
          {result.compositeTierMessage}
        </p>
      </header>

      {/* 2. Your next step — obstacle + concrete action first (agency before detail) */}
      {(result.primaryObstacle || result.strengths.length > 0) && (
        <div className="rounded-2xl border border-sand-200 bg-sand-50 p-6">
          <h3 className="text-base font-semibold text-warm-900">Where we would start</h3>
          {result.primaryObstacle ? (
            <div className="mt-3 rounded-xl border border-sand-200 bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-warm-500">
                The main thing to look at
              </p>
              <p className="mt-1 text-sm text-warm-900">{result.primaryObstacle.description}</p>
              <p className="mt-1.5 text-xs text-warm-700">
                Typical timeframe to work on this: {result.primaryObstacle.fixHorizon}. A licensed
                loan originator can walk through the specifics with you.
              </p>
            </div>
          ) : (
            <p className="mt-3 text-sm text-warm-700">
              Nothing major is standing out — the breakdown below shows where your profile is
              strongest and where a lender may look closer.
            </p>
          )}
          {result.secondaryObstacles.length > 0 && (
            <ul className="mt-3 space-y-2">
              {result.secondaryObstacles.map((o) => (
                <li key={`${o.category}-${o.description}`} className="rounded-lg bg-surface p-3 text-sm text-warm-700">
                  {o.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* 3. Strengths — what's already working, surfaced early */}
      {result.strengths.length > 0 && (
        <div className="rounded-2xl border border-sage-100 bg-sage-50 p-6">
          <h3 className="text-base font-semibold text-warm-900">What is already working for you</h3>
          <ul className="mt-3 space-y-2">
            {result.strengths.map((s) => (
              <li key={`${s.category}-${s.description}`} className="flex items-start gap-2 rounded-lg bg-surface p-3 text-sm text-warm-900">
                <span className="mt-0.5 text-sage-600"><StrengthIcon className="h-4 w-4" /></span>
                {s.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 4. Programs that may fit — agency + non-QM with explicit framing */}
      {result.eligiblePrograms.length > 0 && result.eligiblePrograms[0] !== LoanType.UNKNOWN && (
        <div className="rounded-2xl border border-sand-200 bg-surface p-6 shadow-sm">
          <h3 className="text-base font-semibold text-warm-900">Programs that may fit your situation</h3>
          {qmPrograms.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {qmPrograms.map((p) => (
                <li key={p} className="rounded-full bg-sage-50 px-3 py-1.5 text-sm text-warm-900">
                  {PROGRAM_LABELS[p] ?? p.replace(/_/g, " ")}
                </li>
              ))}
            </ul>
          )}
          {nonQmPrograms.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-warm-500">
                Also worth exploring — alternative documentation programs
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {nonQmPrograms.map((p) => (
                  <li key={p} className="rounded-full bg-sand-100 px-3 py-1.5 text-sm text-warm-900">
                    {NON_QM_LABELS[p as LoanType] ?? p.replace(/_/g, " ")}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-warm-700">
                These are offered by specialized lenders with their own guidelines — being shown
                here is not a determination of eligibility.
              </p>
            </div>
          )}
        </div>
      )}

      {/* 5. Headline numbers (always ranges) */}
      <div className="rounded-2xl border border-sand-200 bg-surface p-6 shadow-sm">
        <h3 className="text-base font-semibold text-warm-900">Your estimated ranges</h3>
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
        {showNonQmRateNote && (
          <p className="mt-2 text-xs font-medium text-warm-700">
            Investor and alternative-documentation program rates typically price
            0.75–1.75 points above comparable conventional loans — and for the
            investor cash-flow program, the rent the property produces, not
            your personal income, drives that program.
          </p>
        )}
        <p className="mt-3 text-xs text-warm-500">
          Payment estimates exclude taxes and insurance where noted and may be greater.
          Actual terms depend on your full financial picture and the lender.
        </p>
      </div>

      {/* 6. Seven pillars — collapsed so detail is available without overwhelming */}
      <details className="rounded-2xl border border-sand-200 bg-surface p-6 shadow-sm">
        <summary className="cursor-pointer text-base font-semibold text-warm-900">
          Readiness across seven areas (details)
        </summary>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {pillarOrder.map((key) => {
            const s = result.subScores[key];
            if (!s) return null;
            return (
              <li key={key} className="rounded-xl bg-sand-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-medium capitalize text-warm-900">
                    <span className="text-warm-700">
                      <PillarIcon pillar={key} />
                    </span>
                    {key}
                  </span>
                  <span className="text-sm font-semibold text-warm-900">{s.score}/100</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-sand-200">
                  <div
                    className="h-full rounded-full bg-sage-600"
                    style={{ width: `${Math.min(100, Math.max(0, s.score))}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-warm-700">{s.summary}</p>
                {s.redFlags.length > 0 && (
                  <ul className="mt-1 list-inside list-disc text-xs text-warm-700">
                    {s.redFlags.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </details>

      {/* 7. Assumptions disclosed (audit constraint #11) */}
      {result.assumptionsUsed.length > 0 && (
        <details className="rounded-2xl border border-sand-200 bg-surface p-6 shadow-sm">
          <summary className="cursor-pointer text-base font-semibold text-warm-900">
            How we calculated this (assumptions we made)
          </summary>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-warm-700">
            {result.assumptionsUsed.map((a) => (
              <li key={a.key}>{a.description}</li>
            ))}
          </ul>
        </details>
      )}

      {/* 8. Disclaimers — in the same viewport as the result */}
      <aside
        aria-label="Important disclosures"
        className="rounded-2xl bg-sand-50 p-5 text-xs leading-relaxed text-warm-700"
      >
        <h3 className="mb-2 text-sm font-semibold text-warm-900">Please read</h3>
        <ul className="space-y-1.5">
          {[...RESULT_DISCLAIMER_BLOCK, ...result.disclaimers].map((d) => (
            <li key={d}>• {d}</li>
          ))}
        </ul>
      </aside>

      {/* 9. Lead capture — same for every result (no gating on the outcome) */}
      <LeadCaptureForm
        context={{
          compositeTier: TIER_LABELS[result.compositeTier],
          engineVersion: result.engineVersion,
          inputs,
          result,
        }}
      />
    </section>
  );
}
