"use client";

import { useEffect, useRef, useState } from "react";
import { runDiagnostic } from "@/engine";
import { STEP_INTROS } from "@/engine/labels";
import { CREDIT_TIER_TO_FICO } from "@/engine/tables";
import { trackEvent } from "@/lib/funnel";
import {
  CreditEvent,
  CreditTier,
  IncomeDocumentation,
  IncomeType,
  LoanPurpose,
  LoanType,
  PropertyType,
  PropertyUse,
} from "@/engine/types";
import type { DiagnosticResult, EngineInputs } from "@/engine/types";
import { ResultsView } from "@/components/ResultsView";

const inputCls =
  "w-full rounded-lg border border-sand-200 px-3 py-2.5 text-base text-warm-900 focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-600";
const labelCls = "mb-1.5 block text-sm font-medium text-warm-900";
const helpCls = "mt-1 text-xs text-warm-500";
const errorCls = "mt-1 text-xs font-medium text-rose-700";

/**
 * One questionnaire step (FIX_PLAN V1.6 P10). Each field wires its label,
 * help text, and error message for screen readers (aria-describedby,
 * aria-invalid) so keyboard-only completion is fully announced.
 */
function Field({
  id,
  label,
  help,
  error,
  children,
}: {
  id?: string;
  label: string;
  help?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls} htmlFor={id}>
        {label}
      </label>
      {children}
      {help && <p className={helpCls}>{help}</p>}
      {error && (
        <p id={id ? `${id}-error` : undefined} role="alert" className={errorCls}>
          {error}
        </p>
      )}
    </div>
  );
}

const STEP_NAMES = ["Your goal", "Income", "Credit", "Money"] as const;

/**
 * P10 analytics helper: coarse enum only (loan type + occupancy) so the
 * funnel can segment completion without receiving any financial figure.
 */
function result_composite_hint(inputs: EngineInputs): string {
  return `${inputs.loanType}:${inputs.propertyUse}`;
}

export function Questionnaire() {
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [lastInputs, setLastInputs] = useState<EngineInputs | null>(null);

  // Wizard state (P10)
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [stepAnnouncement, setStepAnnouncement] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Form state
  const [loanPurpose, setLoanPurpose] = useState<LoanPurpose>(LoanPurpose.PURCHASE);
  const [propertyUse, setPropertyUse] = useState<PropertyUse>(PropertyUse.PRIMARY);
  const [loanType, setLoanType] = useState<LoanType>(LoanType.UNKNOWN);
  const [income, setIncome] = useState<string>("");
  const [incomeType, setIncomeType] = useState<IncomeType>(IncomeType.W2);
  const [incomeDoc, setIncomeDoc] = useState<IncomeDocumentation>(IncomeDocumentation.UNKNOWN);
  const [hasCashIncome, setHasCashIncome] = useState<"yes" | "no" | "unsure">("unsure");
  const [cashPortion, setCashPortion] = useState<string>("");
  const [monthlyRent, setMonthlyRent] = useState<string>("");
  const [totalAssets, setTotalAssets] = useState<string>("");
  const [knowsScore, setKnowsScore] = useState<"yes" | "no">("no");
  const [creditScore, setCreditScore] = useState<string>("");
  const [creditTier, setCreditTier] = useState<CreditTier>(CreditTier.GOOD);
  // P3: credit-event question
  const [creditEvent, setCreditEvent] = useState<CreditEvent>(CreditEvent.NONE);
  const [yearsSinceCreditEvent, setYearsSinceCreditEvent] = useState<string>("");
  // P13: co-borrower
  const [hasCoBorrower, setHasCoBorrower] = useState<"no" | "yes">("no");
  const [coBorrowerIncome, setCoBorrowerIncome] = useState<string>("");
  const [coBorrowerCreditTier, setCoBorrowerCreditTier] = useState<CreditTier>(CreditTier.GOOD);
  const [debt, setDebt] = useState<string>("");
  const [downPayment, setDownPayment] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [propertyType, setPropertyType] = useState<PropertyType>(PropertyType.SFR);
  const [yearsEmployed, setYearsEmployed] = useState<string>("2");
  const [liquid, setLiquid] = useState<string>("");
  // P19: HOA + flood zone
  const [hoaFee, setHoaFee] = useState<string>("");
  const [floodZone, setFloodZone] = useState<"unsure" | "yes" | "no">("unsure");
  // P19: gift funds + first-time buyer
  const [hasGiftFunds, setHasGiftFunds] = useState<"no" | "yes">("no");
  const [giftFundsAmount, setGiftFundsAmount] = useState<string>("");
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState<"unsure" | "yes" | "no">("unsure");

  const num = (s: string) => {
    const n = Number(s);
    return Number.isFinite(n) && n > 0 ? n : 0;
  };

  // Funnel analytics (P10): start fires once per mount; no input values are sent.
  useEffect(() => {
    trackEvent({ event: "questionnaire_start", step: 0 });
  }, []);

  /** Coarse, PII-free enum snapshot for step-drop-off analytics. */
  const coarseMeta = () => ({
    loan_purpose: loanPurpose,
    property_use: propertyUse,
    income_type: incomeType,
    income_doc: incomeDoc,
    credit_event: creditEvent,
    has_co_borrower: hasCoBorrower === "yes",
    knows_score: knowsScore === "yes",
  });

  /** Permissive decimal parse (0.5-year increments for credit events). */
  const decimal = (s: string): number | null => {
    const n = Number(s);
    return s.trim() !== "" && Number.isFinite(n) && n >= 0 ? n : null;
  };

  /** Per-step validation (P10): validate only the visible step's fields. */
  const validateStep = (s: number): boolean => {
    const next: Record<string, string> = {};
    if (s === 1) {
      if (num(income) <= 0) {
        next.income = "Please enter your gross monthly income — a rough number is fine.";
      }
      if (hasCashIncome === "yes" && cashPortion.trim() !== "") {
        const share = Number(cashPortion);
        if (!Number.isFinite(share) || share < 0 || share > 99) {
          next.cashPortion = "Please enter a share between 0 and 99.";
        }
      }
    }
    if (s === 2) {
      if (knowsScore === "yes") {
        const n = Number(creditScore);
        if (creditScore.trim() === "" || !Number.isFinite(n) || n < 300 || n > 850) {
          next.creditScore = "Please enter a score between 300 and 850.";
        }
      }
      if (creditEvent !== CreditEvent.NONE) {
        const years = decimal(yearsSinceCreditEvent);
        if (years == null || years > 10) {
          next.yearsSinceCreditEvent =
            "Please enter how long ago, in years (0–10). Half-years like 1.5 are fine.";
        }
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goToStep = (next: number) => {
    setStep(next);
    setStepAnnouncement(`Step ${next + 1} of ${STEP_NAMES.length}: ${STEP_NAMES[next]}`);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 30);
  };

  const onNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      trackEvent({ event: "questionnaire_step_complete", step, meta: coarseMeta() });
      goToStep(step + 1);
    }
  };

  const onBack = () => {
    setErrors({});
    goToStep(step - 1);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) {
      // Last-step safety net: if credit answers regressed, send the user back.
      goToStep(2);
      return;
    }
    const inputs: EngineInputs = {
      loanPurpose,
      propertyUse,
      loanType,
      grossMonthlyIncome: num(income),
      incomeType,
      incomeDocumentation: incomeDoc,
      cashIncomePortionPct: hasCashIncome === "yes" ? (num(cashPortion) || 100) : 0,
      expectedMonthlyRent: propertyUse === PropertyUse.INVESTMENT && monthlyRent ? num(monthlyRent) : null,
      liquidAssetsTotal: totalAssets ? num(totalAssets) : null,
      creditScoreSelfReported: knowsScore === "yes" ? num(creditScore) : null,
      creditTierSelfReported: knowsScore === "no" ? creditTier : null,
      // P3: credit event + time since it (drives waiting-period seasoning)
      creditEvent,
      yearsSinceCreditEvent:
        creditEvent !== CreditEvent.NONE ? decimal(yearsSinceCreditEvent) : null,
      // P13: co-borrower. Income is added to household income; credit is the
      // representative FICO of the selected range (engine prices joint apps
      // on the lower of the two scores).
      coBorrowerIncome: hasCoBorrower === "yes" && coBorrowerIncome ? num(coBorrowerIncome) : null,
      coBorrowerCredit:
        hasCoBorrower === "yes" && coBorrowerCreditTier !== CreditTier.UNKNOWN
          ? (CREDIT_TIER_TO_FICO[coBorrowerCreditTier] ?? null)
          : null,
      totalMonthlyDebtPayments: num(debt),
      downPaymentAvailable: num(downPayment),
      targetPurchasePrice: price ? num(price) : null,
      propertyType,
      employmentYearsInField: num(yearsEmployed) || 2,
      liquidAssetsAfterClose: liquid ? num(liquid) : null,
      // P19: HOA + flood zone (engine supports both; flood adds an insurance
      // estimate, HOA flows into PITI — each disclosed when applied)
      hasHoa: hoaFee.trim() !== "" && num(hoaFee) > 0,
      monthlyHoaFee: hoaFee.trim() !== "" ? num(hoaFee) : null,
      isInFloodZone: floodZone === "yes",
      // P19: gift funds + first-time buyer (engine credits documented gifts
      // toward cash readiness when the down payment is under 20%)
      hasGiftFundsDocumented: hasGiftFunds === "yes" && num(giftFundsAmount) > 0,
      giftFundsAmount: hasGiftFunds === "yes" && giftFundsAmount.trim() !== "" ? num(giftFundsAmount) : null,
      isFirstTimeBuyer: isFirstTimeBuyer === "yes" ? true : isFirstTimeBuyer === "no" ? false : undefined,
      state: "FL", // V1 geofenced to Florida
    };
    // Auto-select documentation type when cash income is reported
    if (hasCashIncome === "yes" && incomeDoc === IncomeDocumentation.UNKNOWN) {
      inputs.incomeDocumentation = IncomeDocumentation.CASH_UNDOCUMENTED;
    }
    setResult(runDiagnostic(inputs));
    setLastInputs(inputs);
    // Funnel: questionnaire completed + results viewed (no input values sent)
    trackEvent({ event: "questionnaire_complete", step: 3, meta: coarseMeta() });
    trackEvent({ event: "results_viewed", meta: { tier: result_composite_hint(inputs) } });
    // Scroll to results
    setTimeout(() => {
      document.getElementById("results-heading")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const startOver = () => {
    setResult(null);
    setStep(0);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (result && lastInputs) {
    return (
      <div className="space-y-6">
        <ResultsView result={result} inputs={lastInputs} />
        <div className="text-center">
          <button
            type="button"
            onClick={startOver}
            className="rounded-full border border-sand-200 px-6 py-2.5 text-sm font-medium text-warm-700 hover:bg-sand-50"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-6" noValidate>
      {/* Screen-reader step announcements (P10 aria-live) */}
      <p aria-live="polite" className="sr-only">
        {stepAnnouncement}
      </p>

      {/* Sticky progress indicator — current step marked (P10) */}
      <nav
        aria-label="Progress"
        className="sticky top-0 z-10 rounded-2xl border border-sand-200 bg-sand-50/95 p-5 backdrop-blur"
      >
        <ol className="flex items-center justify-between gap-2">
          {STEP_NAMES.map((name, idx) => {
            const state =
              idx === step ? "current" : idx < step ? "done" : "upcoming";
            return (
              <li key={name} className="flex flex-1 items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    state === "current"
                      ? "bg-warm-700 text-white ring-2 ring-sage-600 ring-offset-2 ring-offset-sand-50"
                      : state === "done"
                        ? "bg-sage-600 text-white"
                        : "bg-white text-warm-500 border border-sand-200"
                  }`}
                >
                  {state === "done" ? "✓" : idx + 1}
                </span>
                <span
                  aria-current={state === "current" ? "step" : undefined}
                  className={`hidden text-sm sm:inline ${
                    state === "current" ? "font-semibold text-warm-900" : "font-medium text-warm-500"
                  }`}
                >
                  {name}
                </span>
                {idx < STEP_NAMES.length - 1 && (
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-sage-100 sm:block" />
                )}
              </li>
            );
          })}
        </ol>
        <p className="mt-2 text-xs text-warm-700 sm:hidden">
          {`Step ${step + 1} of ${STEP_NAMES.length}: ${STEP_NAMES[step]}`}
        </p>
      </nav>

      {/* ── Step 1 · About the home ─────────────────────────────── */}
      {step === 0 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
          <legend className="px-2 text-base font-semibold text-warm-900">1 · About your goal</legend>
          <p className="mb-4 text-sm text-warm-700">{STEP_INTROS.goal}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="q-loan-purpose" label="What are you looking to do?">
              <select id="q-loan-purpose" className={inputCls} value={loanPurpose} onChange={(e) => setLoanPurpose(e.target.value as LoanPurpose)}>
                <option value={LoanPurpose.PURCHASE}>Buy a home</option>
                <option value={LoanPurpose.REFI_RATE_TERM}>Refinance (rate/term)</option>
                <option value={LoanPurpose.REFI_CASH_OUT}>Refinance (cash-out)</option>
              </select>
            </Field>
            <Field id="q-property-use" label="How will you use the home?">
              <select id="q-property-use" className={inputCls} value={propertyUse} onChange={(e) => setPropertyUse(e.target.value as PropertyUse)}>
                <option value={PropertyUse.PRIMARY}>Primary residence</option>
                <option value={PropertyUse.SECOND_HOME}>Second home</option>
                <option value={PropertyUse.INVESTMENT}>Investment property</option>
              </select>
            </Field>
            <Field id="q-loan-type" label="Loan type you're considering" help="Choose &ldquo;Not sure&rdquo; and we'll suggest options.">
              <select id="q-loan-type" className={inputCls} value={loanType} onChange={(e) => setLoanType(e.target.value as LoanType)}>
                <option value={LoanType.UNKNOWN}>Not sure yet</option>
                <option value={LoanType.CONVENTIONAL_CONF}>Conventional</option>
                <option value={LoanType.FHA}>FHA</option>
                <option value={LoanType.VA}>VA</option>
                <option value={LoanType.USDA}>USDA</option>
              </select>
            </Field>
            <Field id="q-property-type" label="Property type">
              <select id="q-property-type" className={inputCls} value={propertyType} onChange={(e) => setPropertyType(e.target.value as PropertyType)}>
                <option value={PropertyType.SFR}>Single-family home</option>
                <option value={PropertyType.TOWNHOME}>Townhome</option>
                <option value={PropertyType.CONDO_WARRANTABLE}>Condo</option>
                <option value={PropertyType.MULTI_2_4}>Multi-family (2–4 units)</option>
                <option value={PropertyType.MANUFACTURED}>Manufactured</option>
              </select>
            </Field>
            <Field id="q-price" label="Target purchase price (optional)" help="Leave blank and we'll estimate a range.">
              <input
                id="q-price"
                className={inputCls}
                inputMode="numeric"
                maxLength={12}
                placeholder="e.g. 350000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Field>
          </div>
        </fieldset>
      )}

      {/* ── Step 2 · Income ─────────────────────────────────────── */}
      {step === 1 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
          <legend className="px-2 text-base font-semibold text-warm-900">2 · Income</legend>
          <p className="mb-4 text-sm text-warm-700">{STEP_INTROS.income}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="q-income" label="Gross monthly income (before taxes)" error={errors.income}>
              <input
                id="q-income"
                className={inputCls}
                inputMode="numeric"
                maxLength={12}
                placeholder="e.g. 6000"
                value={income}
                aria-invalid={errors.income ? true : undefined}
                aria-describedby={errors.income ? "q-income-error" : undefined}
                onChange={(e) => setIncome(e.target.value)}
                required
              />
            </Field>
            <Field id="q-income-type" label="Income type">
              <select id="q-income-type" className={inputCls} value={incomeType} onChange={(e) => setIncomeType(e.target.value as IncomeType)}>
                <option value={IncomeType.W2}>W-2 employee</option>
                <option value={IncomeType.SELF_EMPLOYED}>Self-employed / business owner</option>
                <option value={IncomeType.COMMISSION}>Commission-based</option>
                <option value={IncomeType.VARIABLE_HOURLY}>Variable / hourly</option>
                <option value={IncomeType.RETIRED_FIXED}>Retirement income</option>
                <option value={IncomeType.SOCIAL_SECURITY}>Social Security</option>
              </select>
            </Field>
            <Field
              id="q-income-doc"
              label="How is your income documented?"
              help="Lenders accept many documentation types — not just tax returns."
            >
              <select id="q-income-doc" className={inputCls} value={incomeDoc} onChange={(e) => setIncomeDoc(e.target.value as IncomeDocumentation)}>
                <option value={IncomeDocumentation.UNKNOWN}>Not sure</option>
                <option value={IncomeDocumentation.W2_STUBS}>W-2 paystubs</option>
                <option value={IncomeDocumentation.W2_OFFER_LETTER}>Job offer letter (haven&apos;t started yet)</option>
                <option value={IncomeDocumentation.FULL_TAX_2YR}>Two years of tax returns</option>
                <option value={IncomeDocumentation.FULL_TAX_1YR}>One year of tax returns</option>
                <option value={IncomeDocumentation.BANK_STATEMENT_24}>Bank statements (24 months)</option>
                <option value={IncomeDocumentation.BANK_STATEMENT_12}>Bank statements (12 months)</option>
                <option value={IncomeDocumentation.PANDL_CPA}>Profit &amp; loss statement (CPA-signed)</option>
                <option value={IncomeDocumentation.PANDL_PREPARED}>Profit &amp; loss statement (self-prepared)</option>
                <option value={IncomeDocumentation.ONE_O_NINE_NINE}>1099 forms</option>
                <option value={IncomeDocumentation.WVOE_ONLY}>Employer verification letter only</option>
                <option value={IncomeDocumentation.ASSET_DEPLETION}>Assets (savings / investments)</option>
                <option value={IncomeDocumentation.CASH_UNDOCUMENTED}>Cash / not fully documented</option>
                <option value={IncomeDocumentation.NO_DOC}>No documentation</option>
              </select>
            </Field>
            <Field
              id="q-cash-income"
              label="Is any of your income paid in cash that doesn't show on tax returns?"
              help="Many programs work with cash-heavy income — this just helps us point you to the right ones."
            >
              <select id="q-cash-income" className={inputCls} value={hasCashIncome} onChange={(e) => setHasCashIncome(e.target.value as "yes" | "no" | "unsure")}>
                <option value="unsure">Not sure</option>
                <option value="yes">Yes, some of it</option>
                <option value="no">No, it&apos;s all documented</option>
              </select>
            </Field>
            {hasCashIncome === "yes" && (
              <Field id="q-cash-portion" label="Roughly what share is cash? (optional)" error={errors.cashPortion}>
                <input
                  id="q-cash-portion"
                  className={inputCls}
                  inputMode="numeric"
                  maxLength={3}
                  placeholder="e.g. 30 (for 30%)"
                  value={cashPortion}
                  aria-invalid={errors.cashPortion ? true : undefined}
                  aria-describedby={errors.cashPortion ? "q-cash-portion-error" : undefined}
                  onChange={(e) => setCashPortion(e.target.value)}
                />
              </Field>
            )}
            <Field id="q-years-employed" label="Years in your field / self-employment">
              <input
                id="q-years-employed"
                className={inputCls}
                inputMode="numeric"
                maxLength={3}
                value={yearsEmployed}
                onChange={(e) => setYearsEmployed(e.target.value)}
              />
            </Field>
          </div>
        </fieldset>
      )}

      {/* ── Step 3 · Credit ─────────────────────────────────────── */}
      {step === 2 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
          <legend className="px-2 text-base font-semibold text-warm-900">3 · Credit</legend>
          <p className="mb-4 text-sm text-warm-700">A rough range is enough — we never pull your credit.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="q-knows-score" label="Do you know your credit score?" help="We never pull your credit. This is self-reported and educational.">
              <select id="q-knows-score" className={inputCls} value={knowsScore} onChange={(e) => setKnowsScore(e.target.value as "yes" | "no")}>
                <option value="no">No, I&apos;ll pick a range</option>
                <option value="yes">Yes, I know my score</option>
              </select>
            </Field>
            {knowsScore === "yes" ? (
              <Field id="q-credit-score" label="Your credit score (300–850)" error={errors.creditScore}>
                <input
                  id="q-credit-score"
                  className={inputCls}
                  inputMode="numeric"
                  maxLength={3}
                  placeholder="e.g. 700"
                  value={creditScore}
                  aria-invalid={errors.creditScore ? true : undefined}
                  aria-describedby={errors.creditScore ? "q-credit-score-error" : undefined}
                  onChange={(e) => setCreditScore(e.target.value)}
                />
              </Field>
            ) : (
              <Field id="q-credit-tier" label="Which range is closest?">
                <select id="q-credit-tier" className={inputCls} value={creditTier} onChange={(e) => setCreditTier(e.target.value as CreditTier)}>
                  <option value={CreditTier.EXCELLENT}>Excellent (760+)</option>
                  <option value={CreditTier.GOOD}>Good (700–759)</option>
                  <option value={CreditTier.FAIR}>Fair (640–699)</option>
                  <option value={CreditTier.POOR}>Below 640</option>
                </select>
              </Field>
            )}
            {/* P3: the credit-event question — seasoning changes everything */}
            <Field
              id="q-credit-event"
              label="Any major credit events in the last 10 years?"
              help="For example a bankruptcy, foreclosure, short sale, or loan modification. Lender waiting periods differ by event — answering honestly makes your snapshot more accurate."
            >
              <select
                id="q-credit-event"
                className={inputCls}
                value={creditEvent}
                onChange={(e) => setCreditEvent(e.target.value as CreditEvent)}
              >
                <option value={CreditEvent.NONE}>No — none of these</option>
                <option value={CreditEvent.BK_CH7}>Chapter 7 bankruptcy</option>
                <option value={CreditEvent.BK_CH13}>Chapter 13 bankruptcy</option>
                <option value={CreditEvent.FORECLOSURE}>Foreclosure</option>
                <option value={CreditEvent.SHORT_SALE}>Short sale</option>
                <option value={CreditEvent.DEEDS_IN_LIEU}>Deed-in-lieu of foreclosure</option>
                <option value={CreditEvent.MODIFICATION}>Loan modification</option>
              </select>
            </Field>
            {creditEvent !== CreditEvent.NONE && (
              <Field
                id="q-credit-event-years"
                label="About how long ago was it? (years)"
                help="Half-years are fine — for example, 1.5."
                error={errors.yearsSinceCreditEvent}
              >
                <input
                  id="q-credit-event-years"
                  className={inputCls}
                  inputMode="decimal"
                  maxLength={5}
                  placeholder="e.g. 1.5"
                  value={yearsSinceCreditEvent}
                  aria-invalid={errors.yearsSinceCreditEvent ? true : undefined}
                  aria-describedby={errors.yearsSinceCreditEvent ? "q-credit-event-years-error" : undefined}
                  onChange={(e) => setYearsSinceCreditEvent(e.target.value)}
                />
              </Field>
            )}
          </div>
        </fieldset>
      )}

      {/* ── Step 4 · Money ──────────────────────────────────────── */}
      {step === 3 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
          <legend className="px-2 text-base font-semibold text-warm-900">4 · Debts &amp; savings</legend>
          <p className="mb-4 text-sm text-warm-700">{STEP_INTROS.money}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <Field id="q-debt" label="Total monthly debt payments" help="Cars, cards, student loans, etc. Not rent.">
              <input
                id="q-debt"
                className={inputCls}
                inputMode="numeric"
                maxLength={9}
                placeholder="e.g. 500"
                value={debt}
                onChange={(e) => setDebt(e.target.value)}
              />
            </Field>
            <Field id="q-down-payment" label="Down payment you have saved">
              <input
                id="q-down-payment"
                className={inputCls}
                inputMode="numeric"
                maxLength={12}
                placeholder="e.g. 20000"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
              />
            </Field>
            <Field id="q-liquid" label="Savings left after closing (optional)">
              <input
                id="q-liquid"
                className={inputCls}
                inputMode="numeric"
                maxLength={12}
                placeholder="e.g. 10000"
                value={liquid}
                onChange={(e) => setLiquid(e.target.value)}
              />
            </Field>
            {propertyUse === PropertyUse.INVESTMENT && (
              <Field
                id="q-rent"
                label="Expected monthly rent from this property"
                help="Investor programs often qualify on the rent a property produces rather than your personal income."
              >
                <input
                  id="q-rent"
                  className={inputCls}
                  inputMode="numeric"
                  maxLength={9}
                  placeholder="e.g. 2200"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(e.target.value)}
                />
              </Field>
            )}
            <Field
              id="q-total-assets"
              label="Total savings & investments (optional)"
              help="Some programs qualify you on assets rather than income — this helps us check those."
            >
              <input
                id="q-total-assets"
                className={inputCls}
                inputMode="numeric"
                maxLength={15}
                placeholder="e.g. 150000"
                value={totalAssets}
                onChange={(e) => setTotalAssets(e.target.value)}
              />
            </Field>
            {/* P19: HOA + flood zone — both feed the PITI estimate */}
            <Field id="q-hoa" label="Monthly HOA fee (optional)" help="Condos and many planned communities charge one. Leave blank if none.">
              <input
                id="q-hoa"
                className={inputCls}
                inputMode="numeric"
                maxLength={7}
                placeholder="e.g. 250"
                value={hoaFee}
                onChange={(e) => setHoaFee(e.target.value)}
              />
            </Field>
            <Field id="q-flood" label="Is the home in a flood zone? (optional)" help="Not sure is fine — flood insurance, where required, raises the monthly payment.">
              <select
                id="q-flood"
                className={inputCls}
                value={floodZone}
                onChange={(e) => setFloodZone(e.target.value as "unsure" | "yes" | "no")}
              >
                <option value="unsure">Not sure</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </Field>
            {/* P19: gift funds + first-time buyer */}
            <Field id="q-gift" label="Will any of the down payment be a gift? (optional)" help="A documented gift from a relative is allowed on many programs — this just helps the estimate.">
              <select
                id="q-gift"
                className={inputCls}
                value={hasGiftFunds}
                onChange={(e) => setHasGiftFunds(e.target.value as "no" | "yes")}
              >
                <option value="no">No, all my own funds</option>
                <option value="yes">Yes, partly a gift</option>
              </select>
            </Field>
            {hasGiftFunds === "yes" && (
              <Field id="q-gift-amount" label="Roughly how much is a gift? (optional)">
                <input
                  id="q-gift-amount"
                  className={inputCls}
                  inputMode="numeric"
                  maxLength={12}
                  placeholder="e.g. 10000"
                  value={giftFundsAmount}
                  onChange={(e) => setGiftFundsAmount(e.target.value)}
                />
              </Field>
            )}
            <Field id="q-first-time" label="Is this your first home? (optional)">
              <select
                id="q-first-time"
                className={inputCls}
                value={isFirstTimeBuyer}
                onChange={(e) => setIsFirstTimeBuyer(e.target.value as "unsure" | "yes" | "no")}
              >
                <option value="unsure">Prefer not to say</option>
                <option value="yes">Yes</option>
                <option value="no">No, I&apos;ve owned before</option>
              </select>
            </Field>
            {/* P13: co-borrower */}
            <Field id="q-co-borrower" label="Applying with someone else?">
              <select
                id="q-co-borrower"
                className={inputCls}
                value={hasCoBorrower}
                onChange={(e) => setHasCoBorrower(e.target.value as "no" | "yes")}
              >
                <option value="no">No, just me</option>
                <option value="yes">Yes, with a co-borrower</option>
              </select>
            </Field>
            {hasCoBorrower === "yes" && (
              <>
                <Field id="q-co-income" label="Their gross monthly income (before taxes)">
                  <input
                    id="q-co-income"
                    className={inputCls}
                    inputMode="numeric"
                    maxLength={12}
                    placeholder="e.g. 4500"
                    value={coBorrowerIncome}
                    onChange={(e) => setCoBorrowerIncome(e.target.value)}
                  />
                </Field>
                <Field
                  id="q-co-credit"
                  label="Their credit range"
                  help="Lenders usually price a joint application on the lower of the two credit scores."
                >
                  <select
                    id="q-co-credit"
                    className={inputCls}
                    value={coBorrowerCreditTier}
                    onChange={(e) => setCoBorrowerCreditTier(e.target.value as CreditTier)}
                  >
                    <option value={CreditTier.EXCELLENT}>Excellent (760+)</option>
                    <option value={CreditTier.GOOD}>Good (700–759)</option>
                    <option value={CreditTier.FAIR}>Fair (640–699)</option>
                    <option value={CreditTier.POOR}>Below 640</option>
                    <option value={CreditTier.UNKNOWN}>Not sure</option>
                  </select>
                </Field>
              </>
            )}
          </div>
        </fieldset>
      )}

      {/* Wizard navigation (P10) */}
      <div className="flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-sand-200 bg-white px-6 py-3 text-sm font-medium text-warm-700 transition hover:border-sage-600 hover:bg-sand-50 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
          >
            ← Back
          </button>
        ) : (
          <span aria-hidden="true" />
        )}
        {step < STEP_NAMES.length - 1 ? (
          <button
            type="button"
            onClick={onNext}
            className="rounded-full bg-warm-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-warm-900 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
          >
            Next →
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-full bg-warm-700 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-warm-900 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
          >
            See my readiness snapshot
          </button>
        )}
      </div>
      <p className="text-center text-xs text-warm-500">
        Educational estimate only. Not a loan commitment. No credit is pulled.
      </p>
    </form>
  );
}
