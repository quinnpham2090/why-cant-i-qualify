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
  ResidencyStatus,
} from "@/engine/types";
import type { DiagnosticResult, EngineInputs } from "@/engine/types";
import { ResultsView } from "@/components/ResultsView";

const inputCls =
  "w-full rounded-lg border border-sand-200 px-3 py-2.5 text-base text-warm-900 focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-600";
const labelCls = "mb-1.5 block text-sm font-medium text-warm-900";
const helpCls = "mt-1 text-xs text-warm-500";
const errorCls = "mt-1 text-xs font-medium text-error";

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


function ChoiceGroup({ id, value, onChange, options }: { id?: string, value: string, onChange: (val: string) => void, options: {value: string, label: string}[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 mt-1" id={id}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`flex flex-col text-left items-start justify-start p-4 rounded-xl border transition-all duration-200 ${
            value === opt.value
              ? "border-sage-600 bg-sage-50 ring-1 ring-sage-600 shadow-sm"
              : "border-sand-200 bg-surface hover:border-sage-400 hover:bg-sand-50"
          }`}
        >
          <span className={`text-sm font-medium ${value === opt.value ? 'text-warm-900' : 'text-warm-700'}`}>{opt.label}</span>
        </button>
      ))}
    </div>
  );
}

const STEP_NAMES = ["Goal", "Background", "Income", "Co-Borrower", "Credit", "Assets", "Debt"] as const;

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
  // Catalog §0: residency gates agency programs (FHA blocked for NPR, etc.)
  const [residencyStatus, setResidencyStatus] = useState<ResidencyStatus>(ResidencyStatus.US_CITIZEN);
  const [isTribalMember, setIsTribalMember] = useState<"no" | "yes" | "unsure">("unsure");
  const [isVeteran, setIsVeteran] = useState<"no" | "yes" | "unsure">("unsure");
  const [isMedicalProfessional, setIsMedicalProfessional] = useState<"no" | "yes">("no");
  const [incomeAtOrBelow80Ami, setIncomeAtOrBelow80Ami] = useState<"unsure" | "yes" | "no">("unsure");
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
  // Stress-test P1: income trend + side business
  const [incomeTrend, setIncomeTrend] = useState<"unknown" | "up" | "flat" | "down">("unknown");
  const [hasSideBusiness, setHasSideBusiness] = useState<"no" | "yes">("no");
  const [sideBusinessNet, setSideBusinessNet] = useState<string>("");
  // Stress-test P1: debt itemization (feeds the engine's debts[] rules)
  const [hasStudentLoan, setHasStudentLoan] = useState<"no" | "yes">("no");
  const [studentLoanStatus, setStudentLoanStatus] = useState<"repayment" | "deferred">("repayment");
  const [studentLoanBalance, setStudentLoanBalance] = useState<string>("");
  const [studentLoanPayment, setStudentLoanPayment] = useState<string>("");
  const [hasSupportPayments, setHasSupportPayments] = useState<"no" | "yes">("no");
  const [supportType, setSupportType] = useState<"alimony_paid" | "child_support_paid">("alimony_paid");
  const [supportAmount, setSupportAmount] = useState<string>("");
  const [supportMonthsLeft, setSupportMonthsLeft] = useState<string>("");
  const [hasCosignedDebt, setHasCosignedDebt] = useState<"no" | "yes">("no");
  const [cosignedPayment, setCosignedPayment] = useState<string>("");
  const [cosignedOnTime12mo, setCosignedOnTime12mo] = useState<"no" | "yes">("no");
  const [revolvingBalance, setRevolvingBalance] = useState<string>("");
  // Stress-test P2 additions
  const [revolvingLimit, setRevolvingLimit] = useState<string>("");
  const [monthsCurrentJob, setMonthsCurrentJob] = useState<string>("");
  const [isProbationary, setIsProbationary] = useState<"no" | "yes" | "unsure">("unsure");
  const [hasRentHistory, setHasRentHistory] = useState<"unsure" | "yes" | "no">("unsure");
  const [reservesSeasoned, setReservesSeasoned] = useState<"unsure" | "yes" | "no">("unsure");
  const [isRural, setIsRural] = useState<"unsure" | "yes" | "no">("unsure");
  const [largeDepositCount, setLargeDepositCount] = useState<string>("");
  const [largeDepositTotal, setLargeDepositTotal] = useState<string>("");
  const [condoLitigation, setCondoLitigation] = useState<"unsure" | "yes" | "no">("unsure");
  const [condoInvestorHigh, setCondoInvestorHigh] = useState<"unsure" | "yes" | "no">("unsure");
  const [condoDelinquency, setCondoDelinquency] = useState<"unsure" | "yes" | "no">("unsure");
  const [mfdLeasedLand, setMfdLeasedLand] = useState<"unsure" | "yes" | "no">("unsure");
  const [mfdSingleWide, setMfdSingleWide] = useState<"unsure" | "yes" | "no">("unsure");
  const [mfdPre1976, setMfdPre1976] = useState<"unsure" | "yes" | "no">("unsure");
  const [mfdFoundation, setMfdFoundation] = useState<"unsure" | "yes" | "no">("unsure");

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
    residency: residencyStatus,
    income_type: incomeType,
    income_doc: incomeDoc,
    credit_event: creditEvent,
    has_co_borrower: hasCoBorrower === "yes",
    knows_score: knowsScore === "yes",
    income_trend: incomeTrend,
    has_student_loan: hasStudentLoan === "yes",
    has_support_payments: hasSupportPayments === "yes",
    has_cosigned_debt: hasCosignedDebt === "yes",
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
      if (hasSideBusiness === "yes" && sideBusinessNet.trim() !== "") {
        const n = Number(sideBusinessNet);
        if (!Number.isFinite(n)) {
          next.sideBusinessNet =
            "Please enter the net business income or loss from your tax returns (a number, negative for a loss).";
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
    if (s === 3) {
      if (hasStudentLoan === "yes" && studentLoanBalance.trim() === "") {
        next.studentLoanBalance = "Please enter the total student loan balance (a rough number is fine).";
      }
      if (hasSupportPayments === "yes" && (supportAmount.trim() === "" || !Number.isFinite(Number(supportAmount)))) {
        next.supportAmount = "Please enter the monthly support amount you pay.";
      }
      if (hasCosignedDebt === "yes" && (cosignedPayment.trim() === "" || !Number.isFinite(Number(cosignedPayment)))) {
        next.cosignedPayment = "Please enter the monthly payment on the debt you cosigned.";
      }
      if (revolvingBalance.trim() !== "" && revolvingLimit.trim() !== "") {
        if (Number(revolvingLimit) > 0 && Number(revolvingBalance) > Number(revolvingLimit)) {
          next.revolvingLimit = "The total limit looks lower than the balance — please double-check the numbers.";
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
    if (!validateStep(4)) {
      // Last-step safety net: if credit answers regressed, send the user back.
      goToStep(4);
      return;
    }
    const debtTotal = num(debt);
    // Stress-test P1: itemized debts — the engine applies program rules the
    // aggregate number can't express (deferred student 1%, support <10mo
    // exclusion, cosigned 12mo exclusion, revolving 5% floor). The remainder
    // of the borrower's stated total is carried as an explicit "other" item
    // because the engine treats debts[] as the complete itemization.
    const itemizedDebts: EngineInputs["debts"] = [];
    let otherDebt = debtTotal;
    if (hasStudentLoan === "yes") {
      const bal = num(studentLoanBalance);
      const pay = num(studentLoanPayment);
      itemizedDebts.push(
        studentLoanStatus === "deferred"
          ? { kind: "student_loan_deferred", balance: bal, fullyAmortPayment: pay }
          : { kind: "student_loan_repayment", balance: bal, actualMonthlyPayment: pay },
      );
      otherDebt = Math.max(0, otherDebt - pay);
    }
    if (hasSupportPayments === "yes" && num(supportAmount) > 0) {
      itemizedDebts.push({
        kind: supportType,
        courtOrderedAmount: num(supportAmount),
        monthsUntilTermination: supportMonthsLeft.trim() !== "" ? Number(supportMonthsLeft) : undefined,
      });
      otherDebt = Math.max(0, otherDebt - num(supportAmount));
    }
    if (hasCosignedDebt === "yes" && num(cosignedPayment) > 0) {
      itemizedDebts.push({
        kind: "cosigned_secondary",
        actualMonthlyPayment: num(cosignedPayment),
        otherPartyOnTime12mo: cosignedOnTime12mo === "yes",
      });
      otherDebt = Math.max(0, otherDebt - num(cosignedPayment));
    }
    if (num(revolvingBalance) > 0) {
      itemizedDebts.push({ kind: "revolving_line", balance: num(revolvingBalance) });
      otherDebt = Math.max(0, otherDebt - Math.max(num(revolvingBalance) * 0.05, 0)); // approx 5% floor
    }
    if (otherDebt > 0) {
      itemizedDebts.push({ kind: "other", actualMonthlyPayment: otherDebt });
    }
    // Stress-test P2: property-review flags feed the obstacle engine
    const condoConcerns =
      propertyType === PropertyType.CONDO_WARRANTABLE || propertyType === PropertyType.CONDO_NONWARRANTABLE
        ? {
            pendingLitigation: condoLitigation === "yes",
            investorOwnershipHigh: condoInvestorHigh === "yes",
            ownerDelinquencyHigh: condoDelinquency === "yes",
          }
        : undefined;
    const manufacturedConcerns =
      propertyType === PropertyType.MANUFACTURED
        ? {
            leasedLand: mfdLeasedLand === "yes",
            singleWide: mfdSingleWide === "yes",
            builtBefore1976: mfdPre1976 === "yes",
            noPermanentFoundation: mfdFoundation === "yes",
          }
        : undefined;

    const inputs: EngineInputs = {
      loanPurpose,
      propertyUse,
      loanType,
      residencyStatus,
      isTribalMember: isTribalMember === "yes",
      isVeteran: isVeteran === "yes",
      isMedicalProfessional: isMedicalProfessional === "yes",
      incomeAtOrBelow80Ami: incomeAtOrBelow80Ami === "yes" ? true : incomeAtOrBelow80Ami === "no" ? false : undefined,
      grossMonthlyIncome: num(income),
      incomeType,
      incomeDocumentation: incomeDoc,
      // Stress-test P1: declining income uses the recent level, not the average
      incomeTrend,
      sideBusinessNetMonthlyIncome:
        hasSideBusiness === "yes" && sideBusinessNet.trim() !== ""
          ? Number(sideBusinessNet)
          : null,
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
      totalMonthlyDebtPayments: otherDebt,
      debts: itemizedDebts.length > 0 ? itemizedDebts : undefined,
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
      // Stress-test P2: utilization, tenure, housing history, reserves, rural
      revolvingCreditLimit: revolvingLimit.trim() !== "" ? num(revolvingLimit) : null,
      employmentMonthsCurrentJob: monthsCurrentJob.trim() !== "" ? num(monthsCurrentJob) : null,
      isProbationary: isProbationary === "yes",
      hasOnTimeHousingHistory12mo: hasRentHistory === "yes",
      reservesSeasoned60Days: reservesSeasoned === "yes" ? true : reservesSeasoned === "no" ? false : undefined,
      isRuralArea: isRural,
      largeDepositCount: largeDepositCount.trim() !== "" ? num(largeDepositCount) : null,
      largeDepositTotal: largeDepositTotal.trim() !== "" ? num(largeDepositTotal) : null,
      condoConcerns,
      manufacturedConcerns,
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
      <div className="space-y-6 max-w-2xl mx-auto">
        <ResultsView result={result} inputs={lastInputs} />
        <div className="text-center">
          <button
            type="button"
            onClick={startOver}
            className="rounded-full border border-sand-200 bg-surface px-6 py-2.5 text-sm font-medium text-warm-700 hover:bg-sand-50 transition-colors"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-8 max-w-xl mx-auto" noValidate>
      <p aria-live="polite" className="sr-only">
        {stepAnnouncement}
      </p>

      <nav
        aria-label="Progress"
        className="sticky top-0 z-10 rounded-2xl border border-sand-200 bg-sand-50/95 p-4 sm:p-5 backdrop-blur"
      >
        <ol className="hidden sm:flex items-center justify-between gap-1">
          {STEP_NAMES.map((name, idx) => {
            const state = idx === step ? "current" : idx < step ? "done" : "upcoming";
            return (
              <li key={name} className="flex flex-1 items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    state === "current"
                      ? "bg-accent text-accent-text ring-2 ring-sage-600 ring-offset-2 ring-offset-sand-50 scale-110"
                      : state === "done"
                        ? "bg-accent text-accent-text"
                        : "bg-surface text-warm-500 border border-sand-200"
                  }`}
                >
                  {state === "done" ? "✓" : idx + 1}
                </span>
                <span
                  aria-current={state === "current" ? "step" : undefined}
                  className={`text-[11px] leading-tight ${
                    state === "current" ? "font-semibold text-warm-900" : "font-medium text-warm-500"
                  } hidden lg:inline`}
                >
                  {name}
                </span>
                {idx < STEP_NAMES.length - 1 && (
                  <span aria-hidden="true" className={`hidden h-px flex-1 sm:block ${idx < step ? "bg-sage-300" : "bg-sage-100"}`} />
                )}
              </li>
            );
          })}
        </ol>
        <div className="sm:hidden flex items-center justify-between">
          <p className="text-sm font-semibold text-warm-900">
            Step {step + 1} of {STEP_NAMES.length}: {STEP_NAMES[step]}
          </p>
          <span className="text-xs text-warm-500">{Math.round(((step + 1) / STEP_NAMES.length) * 100)}%</span>
        </div>
        <div className="sm:hidden mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sand-200">
          <div className="h-full rounded-full bg-sage-600 transition-all duration-500" style={{ width: `${((step + 1) / STEP_NAMES.length) * 100}%` }} />
        </div>
      </nav>

      {step === 0 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-surface p-6 sm:p-8 shadow-sm animate-in fade-in duration-300">
          <legend className="px-2 text-lg font-semibold text-warm-900">What are you looking to do?</legend>
          <p className="mb-6 text-sm text-warm-700">{STEP_INTROS.goal}</p>
          <div className="flex flex-col gap-6">
            <Field id="q-loan-purpose" label="What are you looking to do?">
              <ChoiceGroup id="q-loan-purpose" value={loanPurpose} onChange={(v) => setLoanPurpose(v as any)} options={[{ value: LoanPurpose.PURCHASE, label: "Buy a home" }, { value: LoanPurpose.REFI_RATE_TERM, label: "Refinance (rate/term)" }, { value: LoanPurpose.REFI_CASH_OUT, label: "Refinance (cash-out)" }]} />
            </Field>
            <Field id="q-property-use" label="How will you use the home?">
              <ChoiceGroup id="q-property-use" value={propertyUse} onChange={(v) => setPropertyUse(v as any)} options={[{ value: PropertyUse.PRIMARY, label: "Primary residence" }, { value: PropertyUse.SECOND_HOME, label: "Second home" }, { value: PropertyUse.INVESTMENT, label: "Investment property" }]} />
            </Field>
            <Field id="q-residency" label="What is your residency or immigration status?" help="This determines which loan programs you can use — for example FHA is limited to citizens and permanent residents. Nothing is shared with anyone.">
              <ChoiceGroup id="q-residency" value={residencyStatus} onChange={(v) => setResidencyStatus(v as any)} options={[{ value: ResidencyStatus.US_CITIZEN, label: "U.S. citizen" }, { value: ResidencyStatus.PERMANENT_RESIDENT, label: "Permanent resident (green card)" }, { value: ResidencyStatus.NON_PERMANENT_EAD, label: "Work visa / permit" }, { value: ResidencyStatus.NON_PERMANENT_NO_EAD, label: "Visa without work authorization" }, { value: ResidencyStatus.ITIN, label: "ITIN filer (no SSN)" }, { value: ResidencyStatus.FOREIGN_NATIONAL, label: "Foreign national" }, { value: ResidencyStatus.UNKNOWN, label: "Prefer not to say" }]} />
            </Field>
            {residencyStatus !== ResidencyStatus.US_CITIZEN && residencyStatus !== ResidencyStatus.UNKNOWN && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-veteran" label="Have you served in the U.S. military? (veterans and surviving spouses)" help="VA loans are earned through military service, regardless of citizenship status.">
                  <ChoiceGroup id="q-veteran" value={isVeteran} onChange={(v) => setIsVeteran(v as any)} options={[{ value: "unsure", label: "Prefer not to say" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
                </Field>
              </div>
            )}
            {(residencyStatus === ResidencyStatus.US_CITIZEN || residencyStatus === ResidencyStatus.PERMANENT_RESIDENT || residencyStatus === ResidencyStatus.NON_PERMANENT_EAD) && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-tribal" label="Are you an enrolled member of a federally recognized tribe?" help="Section 184 loans offer low down payments for tribal members, on or off tribal land.">
                  <ChoiceGroup id="q-tribal" value={isTribalMember} onChange={(v) => setIsTribalMember(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
                </Field>
              </div>
            )}
            <Field id="q-medical" label="Are you a licensed medical professional (MD, DO, DDS, CRNA, PA, PharmD)?" help="Doctor loans offer little or no down payment before your income fully ramps up.">
              <ChoiceGroup id="q-medical" value={isMedicalProfessional} onChange={(v) => setIsMedicalProfessional(v as any)} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            <Field id="q-ami" label="Is your total household income at or below the area average for your county?" help="Some 3%-down programs are reserved for moderate incomes. Not sure is fine — the loan officer can confirm.">
              <ChoiceGroup id="q-ami" value={incomeAtOrBelow80Ami} onChange={(v) => setIncomeAtOrBelow80Ami(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes, at or below" }, { value: "no", label: "No, above it" }]} />
            </Field>
            <Field id="q-loan-type" label="Loan type you're considering" help="Choose “Not sure” and we'll suggest options.">
              <ChoiceGroup id="q-loan-type" value={loanType} onChange={(v) => setLoanType(v as any)} options={[{ value: LoanType.UNKNOWN, label: "Not sure yet" }, { value: LoanType.CONVENTIONAL_CONF, label: "Conventional" }, { value: LoanType.FHA, label: "FHA" }, { value: LoanType.VA, label: "VA" }, { value: LoanType.USDA, label: "USDA" }]} />
            </Field>
            <Field id="q-property-type" label="Property type">
              <ChoiceGroup id="q-property-type" value={propertyType} onChange={(v) => setPropertyType(v as any)} options={[{ value: PropertyType.SFR, label: "Single-family home" }, { value: PropertyType.TOWNHOME, label: "Townhome" }, { value: PropertyType.CONDO_WARRANTABLE, label: "Condo" }, { value: PropertyType.MULTI_2_4, label: "Multi-family (2–4 units)" }, { value: PropertyType.MANUFACTURED, label: "Manufactured" }]} />
            </Field>
            <Field id="q-price" label="Target purchase price (optional)" help="Leave blank and we'll estimate a range.">
              <input id="q-price" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 350000" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Field>
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-surface p-6 sm:p-8 shadow-sm animate-in fade-in duration-300">
          <legend className="px-2 text-lg font-semibold text-warm-900">Your background</legend>
          <p className="mb-6 text-sm text-warm-700">A bit about you — helps us match you to the right programs.</p>
          <div className="flex flex-col gap-6">
            <Field id="q-years-employed" label="Years in your field / self-employment">
              <input id="q-years-employed" className={inputCls} inputMode="numeric" maxLength={3} value={yearsEmployed} onChange={(e) => setYearsEmployed(e.target.value)} />
            </Field>
            <Field id="q-months-job" label="Months in your current job (optional)">
              <input id="q-months-job" className={inputCls} inputMode="numeric" maxLength={3} placeholder="e.g. 14" value={monthsCurrentJob} onChange={(e) => setMonthsCurrentJob(e.target.value)} />
            </Field>
            <Field id="q-probationary" label="Are you still in a probationary or introductory period at work?" help="Many lenders wait until it ends — or look for a strong history in the same field — before counting the income.">
              <ChoiceGroup id="q-probationary" value={isProbationary} onChange={(v) => setIsProbationary(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-surface p-6 sm:p-8 shadow-sm animate-in fade-in duration-300">
          <legend className="px-2 text-lg font-semibold text-warm-900">Your income</legend>
          <p className="mb-6 text-sm text-warm-700">{STEP_INTROS.income}</p>
          <div className="flex flex-col gap-6">
            <Field id="q-income" label="Gross monthly income (before taxes)" error={errors.income}>
              <input id="q-income" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 6000" value={income} aria-invalid={errors.income ? true : undefined} aria-describedby={errors.income ? "q-income-error" : undefined} onChange={(e) => setIncome(e.target.value)} required />
            </Field>
            <Field id="q-income-type" label="Income type">
              <ChoiceGroup id="q-income-type" value={incomeType} onChange={(v) => setIncomeType(v as any)} options={[{ value: IncomeType.W2, label: "W-2 employee" }, { value: IncomeType.SELF_EMPLOYED, label: "Self-employed" }, { value: IncomeType.COMMISSION, label: "Commission-based" }, { value: IncomeType.VARIABLE_HOURLY, label: "Variable / hourly" }, { value: IncomeType.RETIRED_FIXED, label: "Retirement income" }, { value: IncomeType.SOCIAL_SECURITY, label: "Social Security" }]} />
            </Field>
            <Field id="q-income-doc" label="How is your income documented?" help="Lenders accept many documentation types — not just tax returns.">
              <ChoiceGroup id="q-income-doc" value={incomeDoc} onChange={(v) => setIncomeDoc(v as any)} options={[{ value: IncomeDocumentation.UNKNOWN, label: "Not sure" }, { value: IncomeDocumentation.W2_STUBS, label: "W-2 paystubs" }, { value: IncomeDocumentation.W2_OFFER_LETTER, label: "Job offer letter" }, { value: IncomeDocumentation.FULL_TAX_2YR, label: "Two years of tax returns" }, { value: IncomeDocumentation.FULL_TAX_1YR, label: "One year of tax returns" }, { value: IncomeDocumentation.BANK_STATEMENT_24, label: "Bank statements (24 mo)" }, { value: IncomeDocumentation.BANK_STATEMENT_12, label: "Bank statements (12 mo)" }, { value: IncomeDocumentation.PANDL_CPA, label: "P&L (CPA-signed)" }, { value: IncomeDocumentation.PANDL_PREPARED, label: "P&L (self-prepared)" }, { value: IncomeDocumentation.ONE_O_NINE_NINE, label: "1099 forms" }, { value: IncomeDocumentation.WVOE_ONLY, label: "Employer verification only" }, { value: IncomeDocumentation.ASSET_DEPLETION, label: "Assets" }, { value: IncomeDocumentation.CASH_UNDOCUMENTED, label: "Cash / not documented" }, { value: IncomeDocumentation.NO_DOC, label: "No documentation" }]} />
            </Field>
            <Field id="q-cash-income" label="Is any of your income paid in cash that doesn't show on tax returns?" help="Many programs work with cash-heavy income — this just helps us point you to the right ones.">
              <ChoiceGroup id="q-cash-income" value={hasCashIncome} onChange={(v) => setHasCashIncome(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes, some of it" }, { value: "no", label: "No, it's all documented" }]} />
            </Field>
            {hasCashIncome === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-cash-portion" label="Roughly what share is cash? (optional)" error={errors.cashPortion}>
                  <input id="q-cash-portion" className={inputCls} inputMode="numeric" maxLength={3} placeholder="e.g. 30 (for 30%)" value={cashPortion} aria-invalid={errors.cashPortion ? true : undefined} aria-describedby={errors.cashPortion ? "q-cash-portion-error" : undefined} onChange={(e) => setCashPortion(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-income-trend" label="Over the last two years, has your income gone up, stayed about the same, or gone down?" help="Lenders qualify declining income at the recent lower level, not the average — this keeps your estimate honest.">
              <ChoiceGroup id="q-income-trend" value={incomeTrend} onChange={(v) => setIncomeTrend(v as any)} options={[{ value: "unknown", label: "Not sure" }, { value: "up", label: "Gone up" }, { value: "flat", label: "About the same" }, { value: "down", label: "Gone down" }]} />
            </Field>
            <Field id="q-side-business" label="Do you have a side business or self-employment income in addition to your main job?">
              <ChoiceGroup id="q-side-business" value={hasSideBusiness} onChange={(v) => setHasSideBusiness(v as any)} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {hasSideBusiness === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-side-business-net" label="What does that business net per month after expenses, per your tax returns?" help="Enter a negative number for a loss — for example -700. A loss on tax returns reduces qualifying income." error={errors.sideBusinessNet}>
                  <input id="q-side-business-net" className={inputCls} inputMode="numeric" maxLength={10} placeholder="e.g. 500 or -700 for a loss" value={sideBusinessNet} aria-invalid={errors.sideBusinessNet ? true : undefined} aria-describedby={errors.sideBusinessNet ? "q-side-business-net-error" : undefined} onChange={(e) => setSideBusinessNet(e.target.value)} />
                </Field>
              </div>
            )}
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-surface p-6 sm:p-8 shadow-sm animate-in fade-in duration-300">
          <legend className="px-2 text-lg font-semibold text-warm-900">Anyone applying with you?</legend>
          <p className="mb-6 text-sm text-warm-700">Adding a co-borrower can help with income and programs. If not, just move on.</p>
          <div className="flex flex-col gap-6">
            <Field id="q-co-borrower" label="Applying with someone else?">
              <ChoiceGroup id="q-co-borrower" value={hasCoBorrower} onChange={(v) => setHasCoBorrower(v as any)} options={[{ value: "no", label: "No, just me" }, { value: "yes", label: "Yes, with a co-borrower" }]} />
            </Field>
            {hasCoBorrower === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1 flex flex-col gap-6">
                <Field id="q-co-income" label="Their gross monthly income (before taxes)">
                  <input id="q-co-income" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 4500" value={coBorrowerIncome} onChange={(e) => setCoBorrowerIncome(e.target.value)} />
                </Field>
                <Field id="q-co-credit" label="Their credit range" help="Lenders usually price a joint application on the lower of the two credit scores.">
                  <ChoiceGroup id="q-co-credit" value={coBorrowerCreditTier} onChange={(v) => setCoBorrowerCreditTier(v as any)} options={[{ value: CreditTier.EXCELLENT, label: "Excellent (760+)" }, { value: CreditTier.GOOD, label: "Good (700–759)" }, { value: CreditTier.FAIR, label: "Fair (640–699)" }, { value: CreditTier.POOR, label: "Below 640" }, { value: CreditTier.UNKNOWN, label: "Not sure" }]} />
                </Field>
              </div>
            )}
          </div>
        </fieldset>
      )}

      {step === 4 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-surface p-6 sm:p-8 shadow-sm animate-in fade-in duration-300">
          <legend className="px-2 text-lg font-semibold text-warm-900">Your credit</legend>
          <p className="mb-6 text-sm text-warm-700">A rough range is enough — we never pull your credit.</p>
          <div className="flex flex-col gap-6">
            <Field id="q-knows-score" label="Do you know your credit score?" help="We never pull your credit. This is self-reported and educational.">
              <ChoiceGroup id="q-knows-score" value={knowsScore} onChange={(v) => setKnowsScore(v as any)} options={[{ value: "no", label: "No, I'll pick a range" }, { value: "yes", label: "Yes, I know my score" }]} />
            </Field>
            {knowsScore === "yes" ? (
              <Field id="q-credit-score" label="Your credit score (300–850)" error={errors.creditScore}>
                <input id="q-credit-score" className={inputCls} inputMode="numeric" maxLength={3} placeholder="e.g. 700" value={creditScore} aria-invalid={errors.creditScore ? true : undefined} aria-describedby={errors.creditScore ? "q-credit-score-error" : undefined} onChange={(e) => setCreditScore(e.target.value)} />
              </Field>
            ) : (
              <Field id="q-credit-tier" label="Which range is closest?">
                <ChoiceGroup id="q-credit-tier" value={creditTier} onChange={(v) => setCreditTier(v as any)} options={[{ value: CreditTier.EXCELLENT, label: "Excellent (760+)" }, { value: CreditTier.GOOD, label: "Good (700–759)" }, { value: CreditTier.FAIR, label: "Fair (640–699)" }, { value: CreditTier.POOR, label: "Below 640" }]} />
              </Field>
            )}
            <Field id="q-credit-event" label="Any major credit events in the last 10 years?" help="For example a bankruptcy, foreclosure, short sale, or loan modification. Lender waiting periods differ by event — answering honestly makes your snapshot more accurate.">
              <ChoiceGroup id="q-credit-event" value={creditEvent} onChange={(v) => setCreditEvent(v as any)} options={[{ value: CreditEvent.NONE, label: "No — none of these" }, { value: CreditEvent.BK_CH7, label: "Chapter 7 bankruptcy" }, { value: CreditEvent.BK_CH13, label: "Chapter 13 bankruptcy" }, { value: CreditEvent.FORECLOSURE, label: "Foreclosure" }, { value: CreditEvent.SHORT_SALE, label: "Short sale" }, { value: CreditEvent.DEEDS_IN_LIEU, label: "Deed-in-lieu of foreclosure" }, { value: CreditEvent.MODIFICATION, label: "Loan modification" }]} />
            </Field>
            {creditEvent !== CreditEvent.NONE && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-credit-event-years" label="About how long ago was it? (years)" help="Half-years are fine — for example, 1.5." error={errors.yearsSinceCreditEvent}>
                  <input id="q-credit-event-years" className={inputCls} inputMode="decimal" maxLength={5} placeholder="e.g. 1.5" value={yearsSinceCreditEvent} aria-invalid={errors.yearsSinceCreditEvent ? true : undefined} aria-describedby={errors.yearsSinceCreditEvent ? "q-credit-event-years-error" : undefined} onChange={(e) => setYearsSinceCreditEvent(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-rent-history" label="Have you made 12+ months of on-time rent or housing payments you can document?" help="Bank or app statements showing on-time payments count. Lenders view this as a strong sign, especially with a shorter credit history.">
              <ChoiceGroup id="q-rent-history" value={hasRentHistory} onChange={(v) => setHasRentHistory(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
            </Field>
          </div>
        </fieldset>
      )}

      {step === 5 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-surface p-6 sm:p-8 shadow-sm animate-in fade-in duration-300">
          <legend className="px-2 text-lg font-semibold text-warm-900">Your savings &amp; assets</legend>
          <p className="mb-6 text-sm text-warm-700">{STEP_INTROS.money}</p>
          <div className="flex flex-col gap-6">
            <Field id="q-down-payment" label="Down payment you have saved">
              <input id="q-down-payment" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 20000" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
            </Field>
            <Field id="q-liquid" label="Savings left after closing (optional)">
              <input id="q-liquid" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 10000" value={liquid} onChange={(e) => setLiquid(e.target.value)} />
            </Field>
            {liquid.trim() !== "" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-reserves-seasoned" label="Has that money been in your account for at least 60 days?" help="Lenders count funds that have been seasoned 60+ days (or fully documented) toward reserves.">
                  <ChoiceGroup id="q-reserves-seasoned" value={reservesSeasoned} onChange={(v) => setReservesSeasoned(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes, 60+ days" }, { value: "no", label: "No, some is recent" }]} />
                </Field>
              </div>
            )}
            <Field id="q-total-assets" label="Total savings & investments (optional)" help="Some programs qualify you on assets rather than income — this helps us check those.">
              <input id="q-total-assets" className={inputCls} inputMode="numeric" maxLength={15} placeholder="e.g. 150000" value={totalAssets} onChange={(e) => setTotalAssets(e.target.value)} />
            </Field>
            <Field id="q-hoa" label="Monthly HOA fee (optional)" help="Condos and many planned communities charge one. Leave blank if none.">
              <input id="q-hoa" className={inputCls} inputMode="numeric" maxLength={7} placeholder="e.g. 250" value={hoaFee} onChange={(e) => setHoaFee(e.target.value)} />
            </Field>
            <Field id="q-flood" label="Is the home in a flood zone? (optional)" help="Not sure is fine — flood insurance, where required, raises the monthly payment.">
              <ChoiceGroup id="q-flood" value={floodZone} onChange={(v) => setFloodZone(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {loanType === LoanType.USDA && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-rural" label="Is the property in a rural area or small town?" help="USDA loans only apply in eligible rural areas — the USDA map online can confirm the address.">
                  <ChoiceGroup id="q-rural" value={isRural} onChange={(v) => setIsRural(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes" }, { value: "no", label: "No, it's in a city or suburb" }]} />
                </Field>
              </div>
            )}
            <Field id="q-large-deposits" label="Any large deposits (over about half a month's income) in the last 2 months? (optional)" help="Lenders ask for paperwork showing where big deposits came from — the count and amount help size that request.">
              <input id="q-large-deposits" className={inputCls} inputMode="numeric" maxLength={3} placeholder="How many? e.g. 2 (0 if none)" value={largeDepositCount} onChange={(e) => setLargeDepositCount(e.target.value)} />
            </Field>
            {largeDepositCount.trim() !== "" && num(largeDepositCount) > 0 && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-large-deposit-total" label="Roughly how much in total? (optional)">
                  <input id="q-large-deposit-total" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 15000" value={largeDepositTotal} onChange={(e) => setLargeDepositTotal(e.target.value)} />
                </Field>
              </div>
            )}
            {(propertyType === PropertyType.CONDO_WARRANTABLE || propertyType === PropertyType.CONDO_NONWARRANTABLE) && (
              <>
                <Field id="q-condo-litigation" label="Is the condo association in any lawsuits or disputes? (optional)" help="Pending litigation is one of the most common reasons a condo building fails lender review.">
                  <ChoiceGroup id="q-condo-litigation" value={condoLitigation} onChange={(v) => setCondoLitigation(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
                </Field>
                <Field id="q-condo-investor" label="Are most units owner-occupied, or rented out by investors? (optional)" help="Buildings where more than about a quarter of units are investor-owned or one company owns many units often fail review.">
                  <ChoiceGroup id="q-condo-investor" value={condoInvestorHigh} onChange={(v) => setCondoInvestorHigh(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "Mostly owner-occupied" }, { value: "yes", label: "Mostly rented / one owner owns several" }]} />
                </Field>
                <Field id="q-condo-delinquency" label="Are many owners behind on their HOA dues? (optional)">
                  <ChoiceGroup id="q-condo-delinquency" value={condoDelinquency} onChange={(v) => setCondoDelinquency(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No / few" }, { value: "yes", label: "Yes, many" }]} />
                </Field>
              </>
            )}
            {propertyType === PropertyType.MANUFACTURED && (
              <>
                <Field id="q-mfd-land" label="Do you own the land, or is it a leased lot / park space?">
                  <ChoiceGroup id="q-mfd-land" value={mfdLeasedLand} onChange={(v) => setMfdLeasedLand(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "I own (or am buying) the land" }, { value: "yes", label: "Leased lot or park space" }]} />
                </Field>
                <Field id="q-mfd-width" label="Is it a single-wide or multi-section home?">
                  <ChoiceGroup id="q-mfd-width" value={mfdSingleWide} onChange={(v) => setMfdSingleWide(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "Double-wide or larger" }, { value: "yes", label: "Single-wide" }]} />
                </Field>
                <Field id="q-mfd-year" label="Was it built before 1976?">
                  <ChoiceGroup id="q-mfd-year" value={mfdPre1976} onChange={(v) => setMfdPre1976(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No, 1976 or later" }, { value: "yes", label: "Yes" }]} />
                </Field>
                <Field id="q-mfd-foundation" label="Is it attached to a permanent foundation?">
                  <ChoiceGroup id="q-mfd-foundation" value={mfdFoundation} onChange={(v) => setMfdFoundation(v as any)} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "Yes, permanent foundation" }, { value: "yes", label: "No, on blocks/wheels" }]} />
                </Field>
              </>
            )}
            <Field id="q-gift" label="Will any of the down payment be a gift? (optional)" help="A documented gift from a relative is allowed on many programs — this just helps the estimate.">
              <ChoiceGroup id="q-gift" value={hasGiftFunds} onChange={(v) => setHasGiftFunds(v as any)} options={[{ value: "no", label: "No, all my own funds" }, { value: "yes", label: "Yes, partly a gift" }]} />
            </Field>
            {hasGiftFunds === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-gift-amount" label="Roughly how much is a gift? (optional)">
                  <input id="q-gift-amount" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 10000" value={giftFundsAmount} onChange={(e) => setGiftFundsAmount(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-first-time" label="Is this your first home? (optional)">
              <ChoiceGroup id="q-first-time" value={isFirstTimeBuyer} onChange={(v) => setIsFirstTimeBuyer(v as any)} options={[{ value: "unsure", label: "Prefer not to say" }, { value: "yes", label: "Yes" }, { value: "no", label: "No, I've owned before" }]} />
            </Field>
            {propertyUse === PropertyUse.INVESTMENT && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-rent" label="Expected monthly rent from this property" help="Investor programs often qualify on the rent a property produces rather than your personal income.">
                  <input id="q-rent" className={inputCls} inputMode="numeric" maxLength={9} placeholder="e.g. 2200" value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} />
                </Field>
              </div>
            )}
          </div>
        </fieldset>
      )}

      {step === 6 && (
        <fieldset className="rounded-2xl border border-sand-200 bg-surface p-6 sm:p-8 shadow-sm animate-in fade-in duration-300">
          <legend className="px-2 text-lg font-semibold text-warm-900">Your monthly debts</legend>
          <p className="mb-6 text-sm text-warm-700">Everything except rent — detailing the type helps, since lenders treat some debts differently.</p>
          <div className="flex flex-col gap-6">
            <Field id="q-debt" label="Total monthly debt payments">
              <input id="q-debt" className={inputCls} inputMode="numeric" maxLength={9} placeholder="e.g. 500" value={debt} onChange={(e) => setDebt(e.target.value)} />
            </Field>
            <Field id="q-student-loan" label="Do you have student loans?" help="Deferred or income-driven loans are counted differently than standard repayment.">
              <ChoiceGroup id="q-student-loan" value={hasStudentLoan} onChange={(v) => setHasStudentLoan(v as any)} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {hasStudentLoan === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1 flex flex-col gap-6">
                <Field id="q-student-status" label="How are they being paid right now?">
                  <ChoiceGroup id="q-student-status" value={studentLoanStatus} onChange={(v) => setStudentLoanStatus(v as any)} options={[{ value: "repayment", label: "Standard / income-driven repayment" }, { value: "deferred", label: "Deferred or forbearance (not paying yet)" }]} />
                </Field>
                <Field id="q-student-balance" label="Total student loan balance" error={errors.studentLoanBalance}>
                  <input id="q-student-balance" className={inputCls} inputMode="numeric" maxLength={10} placeholder="e.g. 35000" value={studentLoanBalance} aria-invalid={errors.studentLoanBalance ? true : undefined} aria-describedby={errors.studentLoanBalance ? "q-student-balance-error" : undefined} onChange={(e) => setStudentLoanBalance(e.target.value)} />
                </Field>
                <Field id="q-student-payment" label="Monthly student loan payment (0 if not paying yet)" help="If deferred, lenders typically count about 1% of the balance — we'll use that rule.">
                  <input id="q-student-payment" className={inputCls} inputMode="numeric" maxLength={7} placeholder="e.g. 280" value={studentLoanPayment} onChange={(e) => setStudentLoanPayment(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-support" label="Do you pay alimony or child support?">
              <ChoiceGroup id="q-support" value={hasSupportPayments} onChange={(v) => setHasSupportPayments(v as any)} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {hasSupportPayments === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1 flex flex-col gap-6">
                <Field id="q-support-type" label="Which do you pay?">
                  <ChoiceGroup id="q-support-type" value={supportType} onChange={(v) => setSupportType(v as any)} options={[{ value: "alimony_paid", label: "Alimony (spousal support)" }, { value: "child_support_paid", label: "Child support" }]} />
                </Field>
                <Field id="q-support-amount" label="Monthly amount you pay" error={errors.supportAmount}>
                  <input id="q-support-amount" className={inputCls} inputMode="numeric" maxLength={7} placeholder="e.g. 800" value={supportAmount} aria-invalid={errors.supportAmount ? true : undefined} aria-describedby={errors.supportAmount ? "q-support-amount-error" : undefined} onChange={(e) => setSupportAmount(e.target.value)} />
                </Field>
                <Field id="q-support-months" label="How many months until it ends? (optional)" help="Support ending within 10 months is typically left out of the qualifying math — leave blank if there's no end date.">
                  <input id="q-support-months" className={inputCls} inputMode="numeric" maxLength={4} placeholder="e.g. 8" value={supportMonthsLeft} onChange={(e) => setSupportMonthsLeft(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-cosigned" label="Is anyone else's debt on your credit because you cosigned for them?">
              <ChoiceGroup id="q-cosigned" value={hasCosignedDebt} onChange={(v) => setHasCosignedDebt(v as any)} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {hasCosignedDebt === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1 flex flex-col gap-6">
                <Field id="q-cosigned-payment" label="Monthly payment on that debt" error={errors.cosignedPayment}>
                  <input id="q-cosigned-payment" className={inputCls} inputMode="numeric" maxLength={7} placeholder="e.g. 420" value={cosignedPayment} aria-invalid={errors.cosignedPayment ? true : undefined} aria-describedby={errors.cosignedPayment ? "q-cosigned-payment-error" : undefined} onChange={(e) => setCosignedPayment(e.target.value)} />
                </Field>
                <Field id="q-cosigned-ontime" label="Has the other person paid it on time for the last 12 months?" help="If yes and you can document it, lenders typically leave it out of your qualifying math.">
                  <ChoiceGroup id="q-cosigned-ontime" value={cosignedOnTime12mo} onChange={(v) => setCosignedOnTime12mo(v as any)} options={[{ value: "no", label: "No / not sure" }, { value: "yes", label: "Yes" }]} />
                </Field>
              </div>
            )}
            <Field id="q-revolving-balance" label="Total balance on your credit cards (optional)" help="Card balances count at least 1-5% of the balance monthly — this refines your debt estimate.">
              <input id="q-revolving-balance" className={inputCls} inputMode="numeric" maxLength={9} placeholder="e.g. 8000" value={revolvingBalance} onChange={(e) => setRevolvingBalance(e.target.value)} />
            </Field>
            {revolvingBalance.trim() !== "" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l-2 border-sage-200 pl-5 ml-1">
                <Field id="q-revolving-limit" label="Total credit limit across those cards (optional)" help="Balances near the limits can hold the score down even with perfect payment history — paying below 30% of the limits helps fastest." error={errors.revolvingLimit}>
                  <input id="q-revolving-limit" className={inputCls} inputMode="numeric" maxLength={9} placeholder="e.g. 20000" value={revolvingLimit} aria-invalid={errors.revolvingLimit ? true : undefined} aria-describedby={errors.revolvingLimit ? "q-revolving-limit-error" : undefined} onChange={(e) => setRevolvingLimit(e.target.value)} />
                </Field>
              </div>
            )}
          </div>
        </fieldset>
      )}

      <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-sand-200 bg-surface px-6 py-3 text-sm font-medium text-warm-700 transition hover:border-sage-600 hover:bg-sand-50 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
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
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-text transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
          >
            Next →
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-text transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
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
