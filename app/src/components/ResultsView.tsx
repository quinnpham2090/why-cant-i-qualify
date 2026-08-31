"use client";

import { TIER_LABELS, CONFIDENCE_LABELS, RESULTS_HEADLINE, RESULTS_SUBHEAD } from "@/engine/labels";
import { RESULT_DISCLAIMER_BLOCK } from "@/config/disclosures";
import { LoanPurpose, LoanType, type DiagnosticResult, type EngineInputs } from "@/engine/types";
import { isNonQm } from "@/engine/non-qm";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SoftCaptureBanner } from "@/components/SoftCaptureBanner";

const fmtUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/**
 * Editorial tier treatment — hairline/mono, no alarm red on any tier
 * (RESEARCH_EMPATHY.md invariant preserved). Color is never the only signal:
 * label + icon accompany every badge.
 */
const TIER_BADGE: Record<string, string> = {
  strong_fit: "bg-accent-soft text-ink border border-accent/40",
  good_fit: "bg-accent-soft/60 text-ink border border-accent/25",
  workable: "bg-card text-ink border border-rule",
  some_considerations: "bg-card text-ink border border-rule",
  limited_fit: "bg-card text-ink border border-ink",
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
 * ink-2, free inline SVG — no icon dependency added.
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
  [LoanType.FOREIGN_NATIONAL]: "Foreign national program",
  [LoanType.FN_DSCR]: "Foreign national investor (rent-based)",
  [LoanType.SECTION_184]: "Section 184 (tribal home loan)",
  [LoanType.CHATTEL_MANUFACTURED]: "Home-only (chattel) manufactured loan",
  [LoanType.PHYSICIAN]: "Medical professional program",
  [LoanType.NACA]: "NACA program (via counseling)",
  [LoanType.BRIDGE_HARD_MONEY]: "Bridge / asset-based loan (short-term)",
};

const AGENCY_EXTRA_LABELS: Partial<Record<LoanType, string>> = {
  [LoanType.HOME_READY]: "Conventional affordable (HomeReady / Home Possible)",
  [LoanType.DPA_ASSISTED_FHA]: "FHA with down-payment assistance",
  [LoanType.MCC]: "With mortgage tax credit (MCC)",
  [LoanType.RENOVATION]: "Renovation loan (203k / HomeStyle)",
  [LoanType.CONSTRUCTION_OTC]: "One-time-close construction",
};

const PROGRAM_LABELS: Partial<Record<LoanType, string>> = {
  [LoanType.CONVENTIONAL_CONF]: "Conventional",
  [LoanType.CONVENTIONAL_JUMBO]: "Jumbo",
  [LoanType.FHA]: "FHA",
  [LoanType.VA]: "VA",
  [LoanType.USDA]: "USDA",
  [LoanType.SECTION_184]: "Section 184 (tribal home loan)",
  [LoanType.CHATTEL_MANUFACTURED]: "Home-only (chattel) manufactured loan",
  [LoanType.PHYSICIAN]: "Medical professional program",
  [LoanType.NACA]: "NACA program (via counseling)",
  [LoanType.BRIDGE_HARD_MONEY]: "Bridge / asset-based loan (short-term)",
  ...NON_QM_LABELS,
  ...AGENCY_EXTRA_LABELS,
};

export function ResultsView({ result, inputs }: { result: DiagnosticResult; inputs: EngineInputs }) {
  // Human-readable pillar names (Stage 2 Phase 2) — raw engine category keys
  // ("income", "debt"…) read as unfinished UI; label them properly and keep
  // color/score as secondary signals.
  const PILLAR_LABELS: Record<string, string> = {
    income: "Income stability",
    debt: "Debt load",
    credit: "Credit profile",
    cash: "Cash & savings",
    payment: "Payment affordability",
    property: "Property fit",
    documentation: "Documentation readiness",
  };
  const isRefi =
    inputs.loanPurpose === LoanPurpose.REFI_RATE_TERM || inputs.loanPurpose === LoanPurpose.REFI_CASH_OUT;
  // Underwater/CLTV (stress-500 P1): derived from the same inputs the engine
  // used, so the banner can never disagree with the engine's gate.
  const refiUnderwater =
    isRefi &&
    inputs.currentPayoffAmount != null &&
    inputs.estimatedHomeValue != null &&
    inputs.currentPayoffAmount > inputs.estimatedHomeValue;
  const refiCltv =
    isRefi && inputs.currentPayoffAmount != null && inputs.estimatedHomeValue
      ? (inputs.currentPayoffAmount / inputs.estimatedHomeValue) * 100
      : null;
  const pillarOrder = ["income", "debt", "credit", "cash", "payment", "property", "documentation"];
  const pillClass = TIER_BADGE[result.compositeTier] ?? "bg-paper-2 text-ink";
  // Stage 2 Phase 1: derive the split from the engine's own `isNonQm` so the
  // UI grouping can never drift from the engine's taxonomy (previously the UI
  // hardcoded Section 184 / Physician / NACA / Chattel / Bridge as "non-QM"
  // while the engine's isNonQm() disagreed, mislabeling government and
  // counseling-based programs under the alternative-documentation caveat).
  const qmPrograms = result.eligiblePrograms.filter((p) => !isNonQm(p));
  const nonQmPrograms = result.eligiblePrograms.filter((p) => isNonQm(p));
  // P7: surface the non-QM pricing note beside the numbers when an investor /
  // alternative-documentation program is in the eligible set.
  const showNonQmRateNote = nonQmPrograms.length > 0;

  return (
    <section aria-labelledby="results-heading" className="space-y-8">
      {/* 1. Tier + empathetic summary */}
      <header className="text-center">
        <h2 id="results-heading" className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          {RESULTS_HEADLINE}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink-2">{RESULTS_SUBHEAD}</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-lg sm:text-xl font-semibold ${pillClass}`}>
            <TierIcon tier={result.compositeTier} className="w-6 h-6 sm:w-7 sm:h-7" />
            {TIER_LABELS[result.compositeTier]}
          </span>
          <span className="rounded-lg border border-rule bg-card px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2">
            {CONFIDENCE_LABELS[result.confidence]}
          </span>
        </div>
        <p className="mx-auto mt-4 max-w-xl font-display text-xl leading-snug text-ink sm:text-2xl">
          {result.compositeTierMessage}
        </p>
      </header>

      {/* 2. Your next step — obstacle + concrete action first (agency before detail) */}
      {(result.primaryObstacle || result.strengths.length > 0) && (
        <div className="rounded-xl border border-rule bg-paper-2 p-6">
          <h3 className="text-base font-semibold text-ink">Where we would start</h3>
          {result.primaryObstacle ? (
            <div className="mt-3 rounded-lg border border-rule bg-card p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                The main thing to look at
              </p>
              <p className="mt-1 text-sm text-ink">{result.primaryObstacle.description}</p>
              <p className="mt-1.5 text-xs text-ink-2">
                Typical timeframe to work on this: {result.primaryObstacle.fixHorizon}. A licensed
                loan originator can walk through the specifics with you.
              </p>
            </div>
          ) : (
            <p className="mt-3 text-sm text-ink-2">
              Nothing major is standing out — the breakdown below shows where your profile is
              strongest and where a lender may look closer.
            </p>
          )}
          {result.secondaryObstacles.length > 0 && (
            <ul className="mt-3 space-y-2">
              {result.secondaryObstacles.map((o, idx) => (
                <li key={`obs-${idx}-${o.category}-${o.description}`} className="rounded-lg bg-card p-3 text-sm text-ink-2">
                  {o.description}
                </li>
              ))}
            </ul>
          )}
          {/* What information is missing (stress-500 results-messaging): the
              confidence reasons double as "how to sharpen this estimate". */}
          {result.confidence !== "high" && result.confidenceReasons.length > 0 && (
            <div className="mt-4 border-t border-rule pt-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                To sharpen this estimate
              </p>
              <ul className="mt-2 space-y-1 text-xs text-ink-2">
                {result.confidenceReasons.map((r, idx) => (
                  <li key={`missing-${idx}`}>• {r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 3. Strengths — what's already working, surfaced early */}
      {result.strengths.length > 0 && (
        <div className="rounded-xl border border-rule bg-paper-2 p-6">
          <h3 className="text-base font-semibold text-ink">What is already working for you</h3>
          <ul className="mt-3 space-y-2">
            {result.strengths.map((s, idx) => (
              <li key={`str-${idx}-${s.category}-${s.description}`} className="flex items-start gap-2 rounded-lg bg-card p-3 text-sm text-ink">
                <span className="mt-0.5 text-accent"><StrengthIcon className="h-4 w-4" /></span>
                {s.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 4. Programs that may fit — agency + non-QM with explicit framing.
              Suppressed for underwater refis: no listed program can finance it
              and a chip list would contradict the equity message above. */}
      {result.eligiblePrograms.length > 0 && result.eligiblePrograms[0] !== LoanType.UNKNOWN && !(isRefi && refiUnderwater) && (
        <div className="rounded-xl border border-rule bg-card p-6">
          <h3 className="text-base font-semibold text-ink">Programs that may fit your situation</h3>
          {/* Closest-match chip (stress-500 P4): the recommendation is the
              profile-based pick, not a generic list — with honest non-QM
              framing when the match is an alternative-documentation program. */}
          {result.recommendedProgram != null && result.recommendedProgram !== LoanType.UNKNOWN && (
            <p className="mt-3 rounded-lg border border-rule bg-paper-2 p-3 text-sm text-ink">
              {isNonQm(result.recommendedProgram)
                ? `Closest potential path worth exploring: ${NON_QM_LABELS[result.recommendedProgram] ?? PROGRAM_LABELS[result.recommendedProgram] ?? result.recommendedProgram} — a specialized-lender product whose availability and terms vary by lender. This is a starting point to discuss, not a qualification.`
                : `Closest match to start with: ${PROGRAM_LABELS[result.recommendedProgram] ?? result.recommendedProgram.replace(/_/g, " ")}. The loan officer confirms the final fit.`}
            </p>
          )}
          {qmPrograms.filter((p) => p !== LoanType.NACA).length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {qmPrograms.filter((p) => p !== LoanType.NACA).map((p) => (
                <li key={p} className="rounded-md border border-rule bg-card px-3 py-1.5 text-sm text-ink">
                  {PROGRAM_LABELS[p] ?? p.replace(/_/g, " ")}
                </li>
              ))}
            </ul>
          )}
          {nonQmPrograms.length > 0 && (
            <div className="mt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                Also worth exploring — alternative documentation programs
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {nonQmPrograms.map((p) => (
                  <li key={p} className="rounded-md border border-rule bg-card px-3 py-1.5 text-sm text-ink">
                    {NON_QM_LABELS[p] ?? p.replace(/_/g, " ")}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-ink-2">
                These are offered by specialized lenders with their own guidelines — being shown
                here is not a determination of eligibility.
              </p>
            </div>
          )}
          {/* NACA demoted from the headline list (stress-500 P4): it is a
              counseling-based membership program, not a lender product — the
              blanket placement previously made ~88% of results list it. */}
          {qmPrograms.includes(LoanType.NACA) && (
            <div className="mt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                Counseling-based option
              </p>
              <p className="mt-2 text-sm text-ink-2">
                NACA (via counseling) — a membership program with its own qualification process
                (counseling and volunteer commitments; no traditional credit-score pricing). It
                requires a longer process than a typical lender, and this tool cannot estimate it.
              </p>
            </div>
          )}
        </div>
      )}

      {/* 4b. Underwater refinance banner (stress-500 P1 C1) — the scenario that
              must never read as a normal "Good fit". */}
      {isRefi && refiUnderwater && (
        <div className="rounded-xl border border-ink bg-paper-2 p-6">
          <h3 className="text-base font-semibold text-ink">About your refinance</h3>
          <p className="mt-2 text-sm text-ink">
            The loan balance you entered is higher than your home&apos;s estimated value
            {refiCltv != null ? ` (about ${Math.round(refiCltv)}% loan-to-value)` : ""}. Refinancing
            in that position does not fit standard refinance programs, and alternative lenders
            generally still require some equity — so this is not automatically solved by a
            non-QM product. A licensed loan originator can walk through the options that do exist
            (payoff negotiation, a modification with your current servicer, or rebuilding equity).
          </p>
        </div>
      )}
      {/* 5. Headline numbers (2x2 Dashboard Grid). For a refinance the
             purchase-shaped max-loan / price ranges would be misleading, so
             they give way to the DTI cards (Stage 2 Phase 2). */}
      <div className="space-y-4">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">Your Estimated Snapshot</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {!isRefi && (
            <>
              <div className="rounded-xl border border-rule bg-card p-6 flex flex-col justify-center">
                <h4 className="text-sm font-medium text-ink-2">Max Loan Amount</h4>
                <div className="mt-2 font-mono tnum text-2xl sm:text-3xl font-semibold text-ink">
                  {fmtUSD(result.maxLoanAmount.low)} – {fmtUSD(result.maxLoanAmount.high)}
                </div>
                <p className="mt-1 text-xs text-ink-3">about {fmtUSD(result.maxLoanAmount.mid)}</p>
              </div>

              <div className="rounded-xl border border-rule bg-card p-6 flex flex-col justify-center">
                <h4 className="text-sm font-medium text-ink-2">Affordable Home Price</h4>
                <div className="mt-2 font-mono tnum text-2xl sm:text-3xl font-semibold text-ink">
                  {fmtUSD(result.affordablePurchasePrice.low)} – {fmtUSD(result.affordablePurchasePrice.high)}
                </div>
                <p className="mt-1 text-xs text-ink-3">about {fmtUSD(result.affordablePurchasePrice.mid)}</p>
              </div>
            </>
          )}

          <div className="rounded-xl border border-rule bg-card p-6 flex flex-col justify-center">
            <h4 className="text-sm font-medium text-ink-2">{isRefi ? "Est. Monthly Payment (PITI)" : "Monthly Payment (PITI)"}</h4>
            <div className="mt-2 font-mono tnum text-2xl sm:text-3xl font-semibold text-ink">
              {fmtUSD(result.estimatedPiti.low)} – {fmtUSD(result.estimatedPiti.high)}
            </div>
            <p className="mt-1 text-xs text-ink-3">about {fmtUSD(result.estimatedPiti.mid)}</p>
          </div>

          <div className="rounded-xl border border-rule bg-card p-6 flex flex-col justify-center">
            <h4 className="text-sm font-medium text-ink-2">Cash to Close</h4>
            <div className="mt-2 font-mono tnum text-2xl sm:text-3xl font-semibold text-ink">
              {fmtUSD(result.cashToClose.low)} – {fmtUSD(result.cashToClose.high)}
            </div>
            <p className="mt-1 text-xs text-ink-3">about {fmtUSD(result.cashToClose.mid)}</p>
          </div>

          {/* DTI — the single most decision-relevant number for this audience,
              previously computed but never rendered outside a collapsed pillar. */}
          <div className="rounded-xl border border-rule bg-card p-6 flex flex-col justify-center">
            <h4 className="text-sm font-medium text-ink-2">Total Debt-to-Income</h4>
            <div className="mt-2 font-mono tnum text-2xl sm:text-3xl font-semibold text-ink">
              {/* Stress-200: with a near-zero income the raw ratio is huge but
                  meaningless (e.g. $1/mo income) — say what it means instead. */}
              {result.dtiBackEnd > 1 ? "Exceeds income" : `${(result.dtiBackEnd * 100).toFixed(1)}%`}
            </div>
            <p className="mt-1 text-xs text-ink-3">
              All monthly debts plus the estimated payment, against gross income
            </p>
          </div>

          <div className="rounded-xl border border-rule bg-card p-6 flex flex-col justify-center">
            <h4 className="text-sm font-medium text-ink-2">Housing Ratio</h4>
            <div className="mt-2 font-mono tnum text-2xl sm:text-3xl font-semibold text-ink">
              {result.dtiFrontEnd > 1 ? "Exceeds income" : `${(result.dtiFrontEnd * 100).toFixed(1)}%`}
            </div>
            <p className="mt-1 text-xs text-ink-3">
              Just the estimated payment, against gross income
            </p>
          </div>
        </div>

        {/* Target price vs estimated range (Stage 2 Phase 2) */}
        {!isRefi && inputs.targetPurchasePrice != null && inputs.targetPurchasePrice > 0 && (
          <p className="rounded-lg border border-rule bg-paper-2 p-3 text-sm text-ink">
            {inputs.targetPurchasePrice >= result.affordablePurchasePrice.low &&
            inputs.targetPurchasePrice <= result.affordablePurchasePrice.high
              ? `Your target of ${fmtUSD(inputs.targetPurchasePrice)} falls inside the estimated range.`
              : inputs.targetPurchasePrice > result.affordablePurchasePrice.high
                ? `Your target of ${fmtUSD(inputs.targetPurchasePrice)} is above the estimated range of ${fmtUSD(result.affordablePurchasePrice.low)}–${fmtUSD(result.affordablePurchasePrice.high)}.`
                : `Your target of ${fmtUSD(inputs.targetPurchasePrice)} is below the estimated range of ${fmtUSD(result.affordablePurchasePrice.low)}–${fmtUSD(result.affordablePurchasePrice.high)}.`}
          </p>
        )}

        {/* Itemized monthly cost breakdown (Stage 2 Phase 2). Point estimates
            at the target price — the range on top spans the DTI targets. */}
        <details className="rounded-lg border border-rule bg-card p-4">
          <summary className="cursor-pointer text-sm font-medium text-ink">
            What makes up the monthly payment
          </summary>
          <table className="mt-3 w-full text-sm" aria-label="Estimated monthly payment breakdown">
            <tbody className="[&_td]:border-b [&_td]:border-rule [&_td]:py-2 [&_tr:last-child_td]:border-0">
              <tr>
                <td className="text-ink-2">Principal &amp; interest</td>
                <td className="text-right tnum font-mono text-ink">{fmtUSD(result.pitiBreakdown.principalInterest)}</td>
              </tr>
              <tr>
                <td className="text-ink-2">Property taxes (estimated)</td>
                <td className="text-right tnum font-mono text-ink">{fmtUSD(result.pitiBreakdown.propertyTax)}</td>
              </tr>
              <tr>
                <td className="text-ink-2">Homeowners insurance (estimated)</td>
                <td className="text-right tnum font-mono text-ink">{fmtUSD(result.pitiBreakdown.insurance)}</td>
              </tr>
              {result.pitiBreakdown.hoa > 0 && (
                <tr>
                  <td className="text-ink-2">HOA dues</td>
                  <td className="text-right tnum font-mono text-ink">{fmtUSD(result.pitiBreakdown.hoa)}</td>
                </tr>
              )}
              {result.pitiBreakdown.mortgageInsurance > 0 && (
                <tr>
                  <td className="text-ink-2">Mortgage insurance</td>
                  <td className="text-right tnum font-mono text-ink">{fmtUSD(result.pitiBreakdown.mortgageInsurance)}</td>
                </tr>
              )}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-ink-3">
            Point estimates at the price you entered. Your actual figures depend
            on the property, the insurer, and the lender.
          </p>
        </details>

        {showNonQmRateNote && (
          <p className="text-xs font-medium text-ink-2 bg-paper-2 p-3 rounded-lg border border-rule">
            Investor and alternative-documentation program rates typically price
            0.5–1.75 points above comparable conventional loans — and for the
            investor cash-flow program, the rent the property produces, not
            your personal income, drives that program.
          </p>
        )}
        {/* Reg Z §1026.24 companion notice (EXECUTION-PLAN §0 constraint #2).
            The PITI figures INCLUDE estimated taxes, insurance, HOA dues, and
            mortgage insurance — the previous footnote said they exclude them,
            which was factually inverted for these numbers. */}
        <p className="text-xs text-ink-3 px-2">
          Payment estimates include principal and interest, estimated property
          taxes, homeowners insurance, HOA dues where applicable, and mortgage
          insurance where applicable. Your actual payment may be higher, and
          your actual rate depends on your full financial picture and the
          lender.
        </p>
      </div>

      {/* 6. Seven pillars — collapsed so detail is available without overwhelming */}
      <details className="rounded-xl border border-rule bg-card p-6">
        <summary className="cursor-pointer text-base font-semibold text-ink">
          Readiness across seven areas (details)
        </summary>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {pillarOrder.map((key) => {
            const s = result.subScores[key];
            if (!s) return null;
            return (
              <li key={key} className="rounded-lg bg-paper-2 p-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-medium text-ink">
                    <span className="text-ink-2">
                      <PillarIcon pillar={key} />
                    </span>
                    {PILLAR_LABELS[key] ?? key}
                  </span>
                  <span className="font-mono tnum text-sm font-semibold text-ink">{s.score}/100</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-rule">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${Math.min(100, Math.max(0, s.score))}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-ink-2">{s.summary}</p>
                {s.redFlags.length > 0 && (
                  <ul className="mt-1 list-inside list-disc text-xs text-ink-2">
                    {s.redFlags.map((f, fi) => (
                      <li key={`flag-${fi}-${f}`}>{f}</li>
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
        <details className="rounded-xl border border-rule bg-card p-6">
          <summary className="cursor-pointer text-base font-semibold text-ink">
            How we calculated this (assumptions we made)
          </summary>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-ink-2">
            {result.assumptionsUsed.map((a, idx) => (
              <li key={`assume-${idx}-${a.key}`}>{a.description}</li>
            ))}
          </ul>
        </details>
      )}

      {/* 8. Disclaimers — in the same viewport as the result */}
      <aside
        aria-label="Important disclosures"
        className="rule-t pt-6 text-xs leading-relaxed text-ink-2"
      >
        <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">Please read</h3>
        <ul className="space-y-1.5">
          {[...RESULT_DISCLAIMER_BLOCK, ...result.disclaimers].map((d, idx) => (
            <li key={`disc-${idx}`}>• {d}</li>
          ))}
        </ul>
      </aside>

      {/* 9. Soft capture — "email my results" (Stage 2 Phase 3), then the
             full lead form. Both are shown for every tier (no gating on the
             outcome); the server dedupes by email so a soft capture followed
             by a hard capture upgrades the same lead. */}
      <SoftCaptureBanner result={result} />
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
