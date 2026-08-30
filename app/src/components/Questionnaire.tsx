"use client";

import { useEffect, useRef, useState } from "react";
import { runDiagnostic } from "@/engine";
import { STEP_INTROS } from "@/engine/labels";
import { CREDIT_TIER_TO_FICO } from "@/engine/tables";
import { trackEvent } from "@/lib/funnel";
import { validateAllSteps, validateStepFields, type QuestionnaireState } from "@/lib/validation";
import {
  clearSnapshot,
  loadSnapshot,
  saveSnapshot,
  type SavedSnapshot,
} from "@/lib/save-manager";
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
  "w-full rounded-lg border border-rule bg-card px-3.5 py-3 text-base text-ink placeholder:text-ink-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25";
const labelCls = "mb-2 block text-sm font-medium text-ink";
const helpCls = "mt-1.5 text-xs text-ink-3";
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


/**
 * Tappable choice group (FIX_PLAN V1.6 P10 tunnel redesign). Generic over the
 * option-value union so `onChange` accepts the state setter directly — the
 * previous per-handler `setX` casts (39 lint errors, CI red)
 * are no longer needed and the value type is checked against the options.
 */
function ChoiceGroup<T extends string>({
  id,
  value,
  onChange,
  options,
}: {
  id?: string;
  value: T;
  onChange: (val: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 mt-1" id={id}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`flex flex-col text-left items-start justify-start p-4 rounded-lg border transition-colors ${
            value === opt.value
              ? "border-brand bg-card ring-1 ring-brand"
              : "border-rule bg-card hover:border-ink-3"
          }`}
        >
          <span className={`text-sm font-medium ${value === opt.value ? 'text-ink' : 'text-ink-2'}`}>{opt.label}</span>
        </button>
      ))}
    </div>
  );
}

const STEP_NAMES = ["Goal", "Programs", "Background", "Income", "Co-Borrower", "Credit", "Assets", "Debt"] as const;

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
  // Stage 2 Phase 2: state (V1 = Florida only), buyer timeline, refi inputs
  const [stateCode, setStateCode] = useState<string>("FL");
  const [timeline, setTimeline] = useState<string>(""); // "" = just researching
  const [homeValue, setHomeValue] = useState<string>("");
  const [payoff, setPayoff] = useState<string>("");
  // Stage 2 Phase 2: save/resume
  const [resumeSnapshot, setResumeSnapshot] = useState<SavedSnapshot | null>(null);

  const num = (s: string) => {
    const n = Number(s);
    return Number.isFinite(n) && n > 0 ? n : 0;
  };

  /** Every raw form field, for the localStorage snapshot. */
  const allFields = (): Record<string, unknown> => ({
    loanPurpose, propertyUse, residencyStatus, isTribalMember, isVeteran,
    isMedicalProfessional, incomeAtOrBelow80Ami, loanType, income, incomeType,
    incomeDoc, hasCashIncome, cashPortion, monthlyRent, totalAssets, knowsScore,
    creditScore, creditTier, creditEvent, yearsSinceCreditEvent, hasCoBorrower,
    coBorrowerIncome, coBorrowerCreditTier, debt, downPayment, price, propertyType,
    yearsEmployed, liquid, hoaFee, floodZone, hasGiftFunds, giftFundsAmount,
    isFirstTimeBuyer, incomeTrend, hasSideBusiness, sideBusinessNet, hasStudentLoan,
    studentLoanStatus, studentLoanBalance, studentLoanPayment, hasSupportPayments,
    supportType, supportAmount, supportMonthsLeft, hasCosignedDebt, cosignedPayment,
    cosignedOnTime12mo, revolvingBalance, revolvingLimit, monthsCurrentJob,
    isProbationary, hasRentHistory, reservesSeasoned, isRural, largeDepositCount,
    largeDepositTotal, condoLitigation, condoInvestorHigh, condoDelinquency,
    mfdLeasedLand, mfdSingleWide, mfdPre1976, mfdFoundation,
    stateCode, timeline, homeValue, payoff,
  });

  // Funnel analytics (P10): start fires once per mount; no input values are sent.
  useEffect(() => {
    trackEvent({ event: "questionnaire_start", step: 0 });
    // Save/resume (Stage 2 Phase 2): offer to restore an in-progress session.
    // setState is deferred by one tick — the React Compiler lint forbids
    // synchronous setState inside effects (cascading-render risk).
    const saved = loadSnapshot();
    let restoreTimer: ReturnType<typeof setTimeout> | undefined;
    if (saved && saved.step > 0) {
      restoreTimer = setTimeout(() => setResumeSnapshot(saved), 0);
    }
    return () => {
      if (restoreTimer) clearTimeout(restoreTimer);
    };
  }, []);

  // Persist a snapshot on every step transition so a refresh never loses
  // progress (spec §5.5.1). Data stays in localStorage — nothing is sent.
  // The first (mount) run is skipped so an existing snapshot isn't clobbered
  // by the empty initial state before the user can choose "Continue".
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    saveSnapshot(allFields(), step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  /** Restore a saved snapshot into component state (Stage 2 Phase 2). */
  const restoreFrom = (saved: SavedSnapshot) => {
    const f = saved.fields as Record<string, unknown>;
    const str = (k: string, fallback: string) => (typeof f[k] === "string" ? (f[k] as string) : fallback);
    const pick = <T extends string>(k: string, allowed: readonly T[], fallback: T): T =>
      allowed.includes(f[k] as T) ? (f[k] as T) : fallback;
    setLoanPurpose(pick("loanPurpose", Object.values(LoanPurpose) as LoanPurpose[], LoanPurpose.PURCHASE));
    setPropertyUse(pick("propertyUse", Object.values(PropertyUse) as PropertyUse[], PropertyUse.PRIMARY));
    setResidencyStatus(pick("residencyStatus", Object.values(ResidencyStatus) as ResidencyStatus[], ResidencyStatus.US_CITIZEN));
    setIsTribalMember(pick("isTribalMember", ["no", "yes", "unsure"] as const, "unsure"));
    setIsVeteran(pick("isVeteran", ["no", "yes", "unsure"] as const, "unsure"));
    setIsMedicalProfessional(pick("isMedicalProfessional", ["no", "yes"] as const, "no"));
    setIncomeAtOrBelow80Ami(pick("incomeAtOrBelow80Ami", ["unsure", "yes", "no"] as const, "unsure"));
    setLoanType(pick("loanType", Object.values(LoanType) as LoanType[], LoanType.UNKNOWN));
    setIncome(str("income", ""));
    setIncomeType(pick("incomeType", Object.values(IncomeType) as IncomeType[], IncomeType.W2));
    setIncomeDoc(pick("incomeDoc", Object.values(IncomeDocumentation) as IncomeDocumentation[], IncomeDocumentation.UNKNOWN));
    setHasCashIncome(pick("hasCashIncome", ["yes", "no", "unsure"] as const, "unsure"));
    setCashPortion(str("cashPortion", ""));
    setMonthlyRent(str("monthlyRent", ""));
    setTotalAssets(str("totalAssets", ""));
    setKnowsScore(pick("knowsScore", ["yes", "no"] as const, "no"));
    setCreditScore(str("creditScore", ""));
    setCreditTier(pick("creditTier", Object.values(CreditTier) as CreditTier[], CreditTier.GOOD));
    setCreditEvent(pick("creditEvent", Object.values(CreditEvent) as CreditEvent[], CreditEvent.NONE));
    setYearsSinceCreditEvent(str("yearsSinceCreditEvent", ""));
    setHasCoBorrower(pick("hasCoBorrower", ["no", "yes"] as const, "no"));
    setCoBorrowerIncome(str("coBorrowerIncome", ""));
    setCoBorrowerCreditTier(pick("coBorrowerCreditTier", Object.values(CreditTier) as CreditTier[], CreditTier.GOOD));
    setDebt(str("debt", ""));
    setDownPayment(str("downPayment", ""));
    setPrice(str("price", ""));
    setPropertyType(pick("propertyType", Object.values(PropertyType) as PropertyType[], PropertyType.SFR));
    setYearsEmployed(str("yearsEmployed", "2"));
    setLiquid(str("liquid", ""));
    setHoaFee(str("hoaFee", ""));
    setFloodZone(pick("floodZone", ["unsure", "yes", "no"] as const, "unsure"));
    setHasGiftFunds(pick("hasGiftFunds", ["no", "yes"] as const, "no"));
    setGiftFundsAmount(str("giftFundsAmount", ""));
    setIsFirstTimeBuyer(pick("isFirstTimeBuyer", ["unsure", "yes", "no"] as const, "unsure"));
    setIncomeTrend(pick("incomeTrend", ["unknown", "up", "flat", "down"] as const, "unknown"));
    setHasSideBusiness(pick("hasSideBusiness", ["no", "yes"] as const, "no"));
    setSideBusinessNet(str("sideBusinessNet", ""));
    setHasStudentLoan(pick("hasStudentLoan", ["no", "yes"] as const, "no"));
    setStudentLoanStatus(pick("studentLoanStatus", ["repayment", "deferred"] as const, "repayment"));
    setStudentLoanBalance(str("studentLoanBalance", ""));
    setStudentLoanPayment(str("studentLoanPayment", ""));
    setHasSupportPayments(pick("hasSupportPayments", ["no", "yes"] as const, "no"));
    setSupportType(pick("supportType", ["alimony_paid", "child_support_paid"] as const, "alimony_paid"));
    setSupportAmount(str("supportAmount", ""));
    setSupportMonthsLeft(str("supportMonthsLeft", ""));
    setHasCosignedDebt(pick("hasCosignedDebt", ["no", "yes"] as const, "no"));
    setCosignedPayment(str("cosignedPayment", ""));
    setCosignedOnTime12mo(pick("cosignedOnTime12mo", ["no", "yes"] as const, "no"));
    setRevolvingBalance(str("revolvingBalance", ""));
    setRevolvingLimit(str("revolvingLimit", ""));
    setMonthsCurrentJob(str("monthsCurrentJob", ""));
    setIsProbationary(pick("isProbationary", ["no", "yes", "unsure"] as const, "unsure"));
    setHasRentHistory(pick("hasRentHistory", ["unsure", "yes", "no"] as const, "unsure"));
    setReservesSeasoned(pick("reservesSeasoned", ["unsure", "yes", "no"] as const, "unsure"));
    setIsRural(pick("isRural", ["unsure", "yes", "no"] as const, "unsure"));
    setLargeDepositCount(str("largeDepositCount", ""));
    setLargeDepositTotal(str("largeDepositTotal", ""));
    setCondoLitigation(pick("condoLitigation", ["unsure", "yes", "no"] as const, "unsure"));
    setCondoInvestorHigh(pick("condoInvestorHigh", ["unsure", "yes", "no"] as const, "unsure"));
    setCondoDelinquency(pick("condoDelinquency", ["unsure", "yes", "no"] as const, "unsure"));
    setMfdLeasedLand(pick("mfdLeasedLand", ["unsure", "yes", "no"] as const, "unsure"));
    setMfdSingleWide(pick("mfdSingleWide", ["unsure", "yes", "no"] as const, "unsure"));
    setMfdPre1976(pick("mfdPre1976", ["unsure", "yes", "no"] as const, "unsure"));
    setMfdFoundation(pick("mfdFoundation", ["unsure", "yes", "no"] as const, "unsure"));
    setStateCode(str("stateCode", "FL"));
    setTimeline(str("timeline", ""));
    setHomeValue(str("homeValue", ""));
    setPayoff(str("payoff", ""));
    setResumeSnapshot(null);
    goToStep(Math.min(Math.max(saved.step, 0), STEP_NAMES.length - 1));
  };

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

  /**
   * Snapshot of the raw form fields consumed by the pure validators in
   * `lib/validation.ts` (keys must match the `errors` rendering below).
   */
  const validationState = (): QuestionnaireState => ({
    loanPurpose,
    price,
    homeValue,
    payoff,
    yearsEmployed,
    monthsCurrentJob,
    income,
    hasCashIncome,
    cashPortion,
    hasSideBusiness,
    sideBusinessNet,
    hasCoBorrower,
    coBorrowerIncome,
    knowsScore,
    creditScore,
    creditEvent,
    yearsSinceCreditEvent,
    downPayment,
    liquid,
    totalAssets,
    hoaFee,
    largeDepositCount,
    largeDepositTotal,
    hasGiftFunds,
    giftFundsAmount,
    monthlyRent,
    debt,
    hasStudentLoan,
    studentLoanBalance,
    studentLoanPayment,
    hasSupportPayments,
    supportAmount,
    supportMonthsLeft,
    hasCosignedDebt,
    cosignedPayment,
    revolvingBalance,
    revolvingLimit,
  });

  /**
   * Per-step validation, re-indexed to the 7-step wizard (Stage 2 Phase 1).
   * The old implementation validated step indices 1/2/3 with income/credit/
   * debt checks that belonged to steps 2/4/6 after the wizard grew from 4 to
   * 7 steps — which left "Background" as an impassable dead end (the income
   * check fired there but the income field lives on "Income") and made the
   * submit-time check a no-op.
   */
  const validateStep = (s: number): boolean => {
    const next = validateStepFields(validationState(), s);
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
    // Submit-time safety net (Stage 2 Phase 1): validate every step, not just
    // the visible one. If anything regressed (e.g. the user edited an earlier
    // step via Back), jump to the first step that needs attention.
    const { errors: allErrors, firstErrorStep } = validateAllSteps(validationState());
    if (firstErrorStep != null) {
      setErrors(allErrors);
      goToStep(firstErrorStep);
      return;
    }
    setErrors({});
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
      targetPurchasePrice:
        loanPurpose === LoanPurpose.REFI_RATE_TERM || loanPurpose === LoanPurpose.REFI_CASH_OUT
          ? null // refi: the engine prices from home value / payoff instead
          : price ? num(price) : null,
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
      // Stage 2 Phase 2: refi inputs + timeline + state question. The engine
      // prices refi on home value / payoff instead of the purchase price.
      estimatedHomeValue:
        (loanPurpose === LoanPurpose.REFI_RATE_TERM || loanPurpose === LoanPurpose.REFI_CASH_OUT)
          ? (homeValue.trim() !== "" ? num(homeValue) : null)
          : null,
      currentPayoffAmount:
        (loanPurpose === LoanPurpose.REFI_RATE_TERM || loanPurpose === LoanPurpose.REFI_CASH_OUT)
          ? (payoff.trim() !== "" ? num(payoff) : null)
          : null,
      timelineMonths: timeline.trim() !== "" ? num(timeline) || null : null,
      state: stateCode, // V1 geofenced to Florida (see the Goal-step selector)
    };
    // Auto-select documentation type when cash income is reported
    if (hasCashIncome === "yes" && incomeDoc === IncomeDocumentation.UNKNOWN) {
      inputs.incomeDocumentation = IncomeDocumentation.CASH_UNDOCUMENTED;
    }
    setResult(runDiagnostic(inputs));
    setLastInputs(inputs);
    clearSnapshot(); // session complete — drop the save/resume snapshot
    // Funnel: questionnaire completed + results viewed (no input values sent)
    trackEvent({ event: "questionnaire_complete", step: STEP_NAMES.length - 1, meta: coarseMeta() });
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
            className="btn-ghost px-5 py-2.5 text-sm"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-8 max-w-xl mx-auto" noValidate>
      {/* Save/resume offer (Stage 2 Phase 2) — shown once when a snapshot exists */}
      {resumeSnapshot && (
        <div role="status" className="flex flex-col gap-3 rounded-xl border border-rule bg-accent-soft p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink">
            You have a saved check in progress. Continue where you left off?
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => restoreFrom(resumeSnapshot)}
              className="btn-primary px-4 py-2 text-sm"
            >
              Continue
            </button>
            <button
              type="button"
              onClick={() => {
                clearSnapshot();
                setResumeSnapshot(null);
              }}
              className="btn-ghost px-4 py-2 text-sm"
            >
              Start fresh
            </button>
          </div>
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        {stepAnnouncement}
      </p>

      <nav
        aria-label="Progress"
        className="sticky top-[var(--header-h)] z-10 rounded-xl border border-rule bg-paper/90 p-4 backdrop-blur sm:p-5"
      >
        <ol className="hidden sm:flex items-center gap-2">
          {STEP_NAMES.map((name, idx) => {
            const state = idx === step ? "current" : idx < step ? "done" : "upcoming";
            return (
              <li key={name} className="flex min-w-0 flex-1 items-center gap-1.5 last:flex-none">
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-medium transition-all ${
                    state === "current"
                      ? "bg-brand text-on-brand scale-110 ring-2 ring-brand ring-offset-2 ring-offset-paper"
                      : state === "done"
                        ? "bg-brand-soft text-brand border border-brand/40"
                        : "bg-card text-ink-3 border border-rule"
                  }`}
                >
                  {state === "done" ? "✓" : idx + 1}
                </span>
                <span
                  aria-current={state === "current" ? "step" : undefined}
                  className={`min-w-0 truncate text-[11px] leading-tight ${
                    state === "current" ? "font-semibold text-ink" : "font-medium text-ink-3"
                  } hidden lg:inline`}
                >
                  {name}
                </span>
                {idx < STEP_NAMES.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`hidden h-px min-w-4 flex-1 rounded-full sm:block ${
                      idx < step ? "bg-brand" : "bg-rule"
                    }`}
                  />
                )}
              </li>
            );
          })}
        </ol>
        <div className="sm:hidden flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">
            Step {step + 1} of {STEP_NAMES.length}: {STEP_NAMES[step]}
          </p>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{Math.round(((step + 1) / STEP_NAMES.length) * 100)}%</span>
        </div>
        <div className="sm:hidden mt-3 h-[3px] w-full overflow-hidden rounded-full bg-rule">
          <div className="h-full rounded-full bg-brand transition-all duration-500" style={{ width: `${((step + 1) / STEP_NAMES.length) * 100}%` }} />
        </div>
      </nav>

      {Object.keys(errors).length > 0 && (
        <div
          role="alert"
          className="rounded-lg border border-error/40 bg-error-soft p-4 text-sm text-ink"
        >
          <p className="font-semibold">Please fix the following to continue:</p>
          <ul className="mt-1 list-inside list-disc space-y-0.5">
            {Object.entries(errors).map(([field, msg]) => (
              <li key={field}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      {step === 0 && (
        <fieldset className="rounded-xl border border-rule bg-card p-6 sm:p-8 animate-in fade-in duration-300">
          <legend className="px-2 font-display text-2xl text-ink">What are you looking to do?</legend>
          <p className="mb-6 text-sm text-ink-2">{STEP_INTROS.goal}</p>
          <div className="flex flex-col gap-6">
            {/* Q1: State (spec §5.5.2). V1 serves Florida only; the selector +
                note keep the geofence honest instead of silently hardcoding. */}
            <Field
              id="q-state"
              label="What state is the property in?"
              help="We currently serve Florida — more states are coming soon."
            >
              <select
                id="q-state"
                className={inputCls}
                value={stateCode}
                onChange={(e) => setStateCode(e.target.value)}
              >
                <option value="FL">Florida</option>
              </select>
            </Field>
            <Field id="q-loan-purpose" label="What are you looking to do?">
              <ChoiceGroup id="q-loan-purpose" value={loanPurpose} onChange={setLoanPurpose} options={[{ value: LoanPurpose.PURCHASE, label: "Buy a home" }, { value: LoanPurpose.REFI_RATE_TERM, label: "Refinance (rate/term)" }, { value: LoanPurpose.REFI_CASH_OUT, label: "Refinance (cash-out)" }, { value: LoanPurpose.RENOVATION, label: "Buy and fix up a home (renovation loan)" }, { value: LoanPurpose.CONSTRUCTION_OTC, label: "Build a new home (construction loan)" }]} />
            </Field>
            <Field id="q-property-use" label="How will you use the home?">
              <ChoiceGroup id="q-property-use" value={propertyUse} onChange={setPropertyUse} options={[{ value: PropertyUse.PRIMARY, label: "Primary residence" }, { value: PropertyUse.SECOND_HOME, label: "Second home" }, { value: PropertyUse.INVESTMENT, label: "Investment property" }]} />
            </Field>
            <Field id="q-loan-type" label="Loan type you're considering" help="Choose “Not sure” and we'll suggest options.">
              <ChoiceGroup id="q-loan-type" value={loanType} onChange={setLoanType} options={[{ value: LoanType.UNKNOWN, label: "Not sure yet" }, { value: LoanType.CONVENTIONAL_CONF, label: "Conventional" }, { value: LoanType.FHA, label: "FHA" }, { value: LoanType.VA, label: "VA" }, { value: LoanType.USDA, label: "USDA" }]} />
            </Field>
            <Field id="q-property-type" label="Property type">
              <ChoiceGroup id="q-property-type" value={propertyType} onChange={setPropertyType} options={[{ value: PropertyType.SFR, label: "Single-family home" }, { value: PropertyType.TOWNHOME, label: "Townhome" }, { value: PropertyType.CONDO_WARRANTABLE, label: "Condo" }, { value: PropertyType.MULTI_2_4, label: "Multi-family (2–4 units)" }, { value: PropertyType.MANUFACTURED, label: "Manufactured" }]} />
            </Field>
            {loanPurpose === LoanPurpose.REFI_RATE_TERM || loanPurpose === LoanPurpose.REFI_CASH_OUT ? (
              <>
                {/* Refi: home value + payoff replace the target price. The
                    engine prices the payment on these instead of pretending a
                    purchase-price range applies. */}
                <Field
                  id="q-home-value"
                  label="Estimated current home value"
                  error={errors.homeValue}
                  help="A ballpark is fine."
                >
                  <input id="q-home-value" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 400000" value={homeValue} aria-invalid={errors.homeValue ? true : undefined} aria-describedby={errors.homeValue ? "q-home-value-error" : undefined} onChange={(e) => setHomeValue(e.target.value)} />
                </Field>
                <Field
                  id="q-payoff"
                  label="Current loan balance (optional)"
                  error={errors.payoff}
                  help="Leave blank and we'll estimate it at 80% of the home value."
                >
                  <input id="q-payoff" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 250000" value={payoff} aria-invalid={errors.payoff ? true : undefined} aria-describedby={errors.payoff ? "q-payoff-error" : undefined} onChange={(e) => setPayoff(e.target.value)} />
                </Field>
              </>
            ) : (
              <Field id="q-price" error={errors.price} label="Target purchase price (optional)" help="Leave blank and we'll estimate a range.">
                <input id="q-price" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 350000" value={price} aria-invalid={errors.price ? true : undefined} aria-describedby={errors.price ? "q-price-error" : undefined} onChange={(e) => setPrice(e.target.value)} />
              </Field>
            )}
            <Field
              id="q-timeline"
              label="How soon are you looking to make a move?"
              help="This helps the loan officer know how to prioritize your callback — it never affects your estimate."
            >
              <ChoiceGroup id="q-timeline" value={timeline} onChange={setTimeline} options={[{ value: "30", label: "Within 30 days" }, { value: "90", label: "1–3 months" }, { value: "180", label: "3–6 months" }, { value: "365", label: "6–12 months" }, { value: "", label: "Just researching" }]} />
            </Field>
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="rounded-xl border border-rule bg-card p-6 sm:p-8 animate-in fade-in duration-300">
          <legend className="px-2 font-display text-2xl text-ink">Programs you may qualify for</legend>
          <p className="mb-6 text-sm text-ink-2">{STEP_INTROS.programs}</p>
          <div className="flex flex-col gap-6">
            <Field id="q-residency" label="What is your residency or immigration status?" help="This determines which loan programs you can use — for example FHA is limited to citizens and permanent residents. Nothing is shared with anyone.">
              <ChoiceGroup id="q-residency" value={residencyStatus} onChange={setResidencyStatus} options={[{ value: ResidencyStatus.US_CITIZEN, label: "U.S. citizen" }, { value: ResidencyStatus.PERMANENT_RESIDENT, label: "Permanent resident (green card)" }, { value: ResidencyStatus.NON_PERMANENT_EAD, label: "Work visa / permit" }, { value: ResidencyStatus.NON_PERMANENT_NO_EAD, label: "Visa without work authorization" }, { value: ResidencyStatus.ITIN, label: "ITIN filer (no SSN)" }, { value: ResidencyStatus.FOREIGN_NATIONAL, label: "Foreign national" }, { value: ResidencyStatus.UNKNOWN, label: "Prefer not to say" }]} />
            </Field>
            {residencyStatus !== ResidencyStatus.US_CITIZEN && residencyStatus !== ResidencyStatus.UNKNOWN && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-veteran" label="Have you served in the U.S. military? (veterans and surviving spouses)" help="VA loans are earned through military service, regardless of citizenship status.">
                  <ChoiceGroup id="q-veteran" value={isVeteran} onChange={setIsVeteran} options={[{ value: "unsure", label: "Prefer not to say" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
                </Field>
              </div>
            )}
            {(residencyStatus === ResidencyStatus.US_CITIZEN || residencyStatus === ResidencyStatus.PERMANENT_RESIDENT || residencyStatus === ResidencyStatus.NON_PERMANENT_EAD) && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-tribal" label="Are you an enrolled member of a federally recognized tribe?" help="Section 184 loans offer low down payments for tribal members, on or off tribal land.">
                  <ChoiceGroup id="q-tribal" value={isTribalMember} onChange={setIsTribalMember} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
                </Field>
              </div>
            )}
            <Field id="q-medical" label="Are you a licensed medical professional (MD, DO, DDS, CRNA, PA, PharmD)?" help="Doctor loans offer little or no down payment before your income fully ramps up.">
              <ChoiceGroup id="q-medical" value={isMedicalProfessional} onChange={setIsMedicalProfessional} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            <Field id="q-ami" label="Is your total household income at or below the area average for your county?" help="Some 3%-down programs are reserved for moderate incomes. Not sure is fine — the loan officer can confirm.">
              <ChoiceGroup id="q-ami" value={incomeAtOrBelow80Ami} onChange={setIncomeAtOrBelow80Ami} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes, at or below" }, { value: "no", label: "No, above it" }]} />
            </Field>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="rounded-xl border border-rule bg-card p-6 sm:p-8 animate-in fade-in duration-300">
          <legend className="px-2 font-display text-2xl text-ink">Your background</legend>
          <p className="mb-6 text-sm text-ink-2">A bit about you — helps us match you to the right programs.</p>
          <div className="flex flex-col gap-6">
            <Field id="q-years-employed" error={errors.yearsEmployed} label="Years in your field / self-employment">
              <input id="q-years-employed" className={inputCls} inputMode="numeric" maxLength={3} value={yearsEmployed} aria-invalid={errors.yearsEmployed ? true : undefined} aria-describedby={errors.yearsEmployed ? "q-years-employed-error" : undefined} onChange={(e) => setYearsEmployed(e.target.value)} />
            </Field>
            <Field id="q-months-job" error={errors.monthsCurrentJob} label="Months in your current job (optional)">
              <input id="q-months-job" className={inputCls} inputMode="numeric" maxLength={3} placeholder="e.g. 14" value={monthsCurrentJob} aria-invalid={errors.monthsCurrentJob ? true : undefined} aria-describedby={errors.monthsCurrentJob ? "q-months-job-error" : undefined} onChange={(e) => setMonthsCurrentJob(e.target.value)} />
            </Field>
            <Field id="q-probationary" label="Are you still in a probationary or introductory period at work?" help="Many lenders wait until it ends — or look for a strong history in the same field — before counting the income.">
              <ChoiceGroup id="q-probationary" value={isProbationary} onChange={setIsProbationary} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="rounded-xl border border-rule bg-card p-6 sm:p-8 animate-in fade-in duration-300">
          <legend className="px-2 font-display text-2xl text-ink">Your income</legend>
          <p className="mb-6 text-sm text-ink-2">{STEP_INTROS.income}</p>
          <div className="flex flex-col gap-6">
            <Field id="q-income" label="Gross monthly income (before taxes)" error={errors.income}>
              <input id="q-income" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 6000" value={income} aria-invalid={errors.income ? true : undefined} aria-describedby={errors.income ? "q-income-error" : undefined} onChange={(e) => setIncome(e.target.value)} required />
            </Field>
            <Field id="q-income-type" label="Income type">
              <ChoiceGroup id="q-income-type" value={incomeType} onChange={setIncomeType} options={[{ value: IncomeType.W2, label: "W-2 employee" }, { value: IncomeType.SELF_EMPLOYED, label: "Self-employed" }, { value: IncomeType.COMMISSION, label: "Commission-based" }, { value: IncomeType.VARIABLE_HOURLY, label: "Variable / hourly" }, { value: IncomeType.RETIRED_FIXED, label: "Retirement income" }, { value: IncomeType.SOCIAL_SECURITY, label: "Social Security" }]} />
            </Field>
            <Field id="q-income-doc" label="How is your income documented?" help="Lenders accept many documentation types — not just tax returns.">
              <ChoiceGroup id="q-income-doc" value={incomeDoc} onChange={setIncomeDoc} options={[{ value: IncomeDocumentation.UNKNOWN, label: "Not sure" }, { value: IncomeDocumentation.W2_STUBS, label: "W-2 paystubs" }, { value: IncomeDocumentation.W2_OFFER_LETTER, label: "Job offer letter" }, { value: IncomeDocumentation.FULL_TAX_2YR, label: "Two years of tax returns" }, { value: IncomeDocumentation.FULL_TAX_1YR, label: "One year of tax returns" }, { value: IncomeDocumentation.BANK_STATEMENT_24, label: "Bank statements (24 mo)" }, { value: IncomeDocumentation.BANK_STATEMENT_12, label: "Bank statements (12 mo)" }, { value: IncomeDocumentation.PANDL_CPA, label: "P&L (CPA-signed)" }, { value: IncomeDocumentation.PANDL_PREPARED, label: "P&L (self-prepared)" }, { value: IncomeDocumentation.ONE_O_NINE_NINE, label: "1099 forms" }, { value: IncomeDocumentation.WVOE_ONLY, label: "Employer verification only" }, { value: IncomeDocumentation.ASSET_DEPLETION, label: "Assets" }, { value: IncomeDocumentation.CASH_UNDOCUMENTED, label: "Cash / not documented" }, { value: IncomeDocumentation.NO_DOC, label: "No documentation" }]} />
            </Field>
            <Field id="q-cash-income" label="Is any of your income paid in cash that doesn't show on tax returns?" help="Many programs work with cash-heavy income — this just helps us point you to the right ones.">
              <ChoiceGroup id="q-cash-income" value={hasCashIncome} onChange={setHasCashIncome} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes, some of it" }, { value: "no", label: "No, it's all documented" }]} />
            </Field>
            {hasCashIncome === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-cash-portion" label="Roughly what share is cash? (optional)" error={errors.cashPortion}>
                  <input id="q-cash-portion" className={inputCls} inputMode="numeric" maxLength={3} placeholder="e.g. 30 (for 30%)" value={cashPortion} aria-invalid={errors.cashPortion ? true : undefined} aria-describedby={errors.cashPortion ? "q-cash-portion-error" : undefined} onChange={(e) => setCashPortion(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-income-trend" label="Over the last two years, has your income gone up, stayed about the same, or gone down?" help="Lenders qualify declining income at the recent lower level, not the average — this keeps your estimate honest.">
              <ChoiceGroup id="q-income-trend" value={incomeTrend} onChange={setIncomeTrend} options={[{ value: "unknown", label: "Not sure" }, { value: "up", label: "Gone up" }, { value: "flat", label: "About the same" }, { value: "down", label: "Gone down" }]} />
            </Field>
            <Field id="q-side-business" label="Do you have a side business or self-employment income in addition to your main job?">
              <ChoiceGroup id="q-side-business" value={hasSideBusiness} onChange={setHasSideBusiness} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {hasSideBusiness === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-side-business-net" label="What does that business net per month after expenses, per your tax returns?" help="Enter a negative number for a loss — for example -700. A loss on tax returns reduces qualifying income." error={errors.sideBusinessNet}>
                  <input id="q-side-business-net" className={inputCls} inputMode="numeric" maxLength={10} placeholder="e.g. 500 or -700 for a loss" value={sideBusinessNet} aria-invalid={errors.sideBusinessNet ? true : undefined} aria-describedby={errors.sideBusinessNet ? "q-side-business-net-error" : undefined} onChange={(e) => setSideBusinessNet(e.target.value)} />
                </Field>
              </div>
            )}
          </div>
        </fieldset>
      )}

      {step === 4 && (
        <fieldset className="rounded-xl border border-rule bg-card p-6 sm:p-8 animate-in fade-in duration-300">
          <legend className="px-2 font-display text-2xl text-ink">Anyone applying with you?</legend>
          <p className="mb-6 text-sm text-ink-2">Adding a co-borrower can help with income and programs. If not, just move on.</p>
          <div className="flex flex-col gap-6">
            <Field id="q-co-borrower" label="Applying with someone else?">
              <ChoiceGroup id="q-co-borrower" value={hasCoBorrower} onChange={setHasCoBorrower} options={[{ value: "no", label: "No, just me" }, { value: "yes", label: "Yes, with a co-borrower" }]} />
            </Field>
            {hasCoBorrower === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1 flex flex-col gap-6">
                <Field id="q-co-income" error={errors.coBorrowerIncome} label="Their gross monthly income (before taxes)">
                  <input id="q-co-income" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 4500" value={coBorrowerIncome} aria-invalid={errors.coBorrowerIncome ? true : undefined} aria-describedby={errors.coBorrowerIncome ? "q-co-income-error" : undefined} onChange={(e) => setCoBorrowerIncome(e.target.value)} />
                </Field>
                <Field id="q-co-credit" label="Their credit range" help="Lenders usually price a joint application on the lower of the two credit scores.">
                  <ChoiceGroup id="q-co-credit" value={coBorrowerCreditTier} onChange={setCoBorrowerCreditTier} options={[{ value: CreditTier.EXCELLENT, label: "Excellent (760+)" }, { value: CreditTier.GOOD, label: "Good (700–759)" }, { value: CreditTier.FAIR, label: "Fair (640–699)" }, { value: CreditTier.POOR, label: "Below 640" }, { value: CreditTier.UNKNOWN, label: "Not sure" }]} />
                </Field>
              </div>
            )}
          </div>
        </fieldset>
      )}

      {step === 5 && (
        <fieldset className="rounded-xl border border-rule bg-card p-6 sm:p-8 animate-in fade-in duration-300">
          <legend className="px-2 font-display text-2xl text-ink">Your credit</legend>
          <p className="mb-6 text-sm text-ink-2">{STEP_INTROS.credit}</p>
          <div className="flex flex-col gap-6">
            <Field id="q-knows-score" label="Do you know your credit score?" help="We never pull your credit. This is self-reported and educational.">
              <ChoiceGroup id="q-knows-score" value={knowsScore} onChange={setKnowsScore} options={[{ value: "no", label: "No, I'll pick a range" }, { value: "yes", label: "Yes, I know my score" }]} />
            </Field>
            {knowsScore === "yes" ? (
              <Field id="q-credit-score" label="Your credit score (300–850)" error={errors.creditScore}>
                <input id="q-credit-score" className={inputCls} inputMode="numeric" maxLength={3} placeholder="e.g. 700" value={creditScore} aria-invalid={errors.creditScore ? true : undefined} aria-describedby={errors.creditScore ? "q-credit-score-error" : undefined} onChange={(e) => setCreditScore(e.target.value)} />
              </Field>
            ) : (
              <Field id="q-credit-tier" label="Which range is closest?">
                <ChoiceGroup id="q-credit-tier" value={creditTier} onChange={setCreditTier} options={[{ value: CreditTier.EXCELLENT, label: "Excellent (760+)" }, { value: CreditTier.GOOD, label: "Good (700–759)" }, { value: CreditTier.FAIR, label: "Fair (640–699)" }, { value: CreditTier.POOR, label: "Below 640" }]} />
              </Field>
            )}
            <Field id="q-credit-event" label="Any major credit events in the last 10 years?" help="For example a bankruptcy, foreclosure, short sale, or loan modification. Lender waiting periods differ by event — answering honestly makes your snapshot more accurate.">
              <ChoiceGroup id="q-credit-event" value={creditEvent} onChange={setCreditEvent} options={[{ value: CreditEvent.NONE, label: "No — none of these" }, { value: CreditEvent.BK_CH7, label: "Chapter 7 bankruptcy" }, { value: CreditEvent.BK_CH13, label: "Chapter 13 bankruptcy" }, { value: CreditEvent.FORECLOSURE, label: "Foreclosure" }, { value: CreditEvent.SHORT_SALE, label: "Short sale" }, { value: CreditEvent.DEEDS_IN_LIEU, label: "Deed-in-lieu of foreclosure" }, { value: CreditEvent.MODIFICATION, label: "Loan modification" }]} />
            </Field>
            {creditEvent !== CreditEvent.NONE && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-credit-event-years" label="About how long ago was it? (years)" help="Half-years are fine — for example, 1.5." error={errors.yearsSinceCreditEvent}>
                  <input id="q-credit-event-years" className={inputCls} inputMode="decimal" maxLength={5} placeholder="e.g. 1.5" value={yearsSinceCreditEvent} aria-invalid={errors.yearsSinceCreditEvent ? true : undefined} aria-describedby={errors.yearsSinceCreditEvent ? "q-credit-event-years-error" : undefined} onChange={(e) => setYearsSinceCreditEvent(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-rent-history" label="Have you made 12+ months of on-time rent or housing payments you can document?" help="Bank or app statements showing on-time payments count. Lenders view this as a strong sign, especially with a shorter credit history.">
              <ChoiceGroup id="q-rent-history" value={hasRentHistory} onChange={setHasRentHistory} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
            </Field>
          </div>
        </fieldset>
      )}

      {step === 6 && (
        <fieldset className="rounded-xl border border-rule bg-card p-6 sm:p-8 animate-in fade-in duration-300">
          <legend className="px-2 font-display text-2xl text-ink">Your savings &amp; assets</legend>
          <p className="mb-6 text-sm text-ink-2">{STEP_INTROS.money}</p>
          <div className="flex flex-col gap-6">
            <Field id="q-down-payment" error={errors.downPayment} label="Down payment you have saved">
              <input id="q-down-payment" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 20000" value={downPayment} aria-invalid={errors.downPayment ? true : undefined} aria-describedby={errors.downPayment ? "q-down-payment-error" : undefined} onChange={(e) => setDownPayment(e.target.value)} />
            </Field>
            <Field id="q-liquid" error={errors.liquid} label="Savings left after closing (optional)">
              <input id="q-liquid" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 10000" value={liquid} aria-invalid={errors.liquid ? true : undefined} aria-describedby={errors.liquid ? "q-liquid-error" : undefined} onChange={(e) => setLiquid(e.target.value)} />
            </Field>
            {liquid.trim() !== "" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-reserves-seasoned" label="Has that money been in your account for at least 60 days?" help="Lenders count funds that have been seasoned 60+ days (or fully documented) toward reserves.">
                  <ChoiceGroup id="q-reserves-seasoned" value={reservesSeasoned} onChange={setReservesSeasoned} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes, 60+ days" }, { value: "no", label: "No, some is recent" }]} />
                </Field>
              </div>
            )}
            <Field id="q-total-assets" error={errors.totalAssets} label="Total savings & investments (optional)" help="Some programs qualify you on assets rather than income — this helps us check those.">
              <input id="q-total-assets" className={inputCls} inputMode="numeric" maxLength={15} placeholder="e.g. 150000" value={totalAssets} aria-invalid={errors.totalAssets ? true : undefined} aria-describedby={errors.totalAssets ? "q-total-assets-error" : undefined} onChange={(e) => setTotalAssets(e.target.value)} />
            </Field>
            <Field id="q-hoa" error={errors.hoaFee} label="Monthly HOA fee (optional)" help="Condos and many planned communities charge one. Leave blank if none.">
              <input id="q-hoa" className={inputCls} inputMode="numeric" maxLength={7} placeholder="e.g. 250" value={hoaFee} aria-invalid={errors.hoaFee ? true : undefined} aria-describedby={errors.hoaFee ? "q-hoa-error" : undefined} onChange={(e) => setHoaFee(e.target.value)} />
            </Field>
            <Field id="q-flood" label="Is the home in a flood zone? (optional)" help="Not sure is fine — flood insurance, where required, raises the monthly payment.">
              <ChoiceGroup id="q-flood" value={floodZone} onChange={setFloodZone} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {loanType === LoanType.USDA && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-rural" label="Is the property in a rural area or small town?" help="USDA loans only apply in eligible rural areas — the USDA map online can confirm the address.">
                  <ChoiceGroup id="q-rural" value={isRural} onChange={setIsRural} options={[{ value: "unsure", label: "Not sure" }, { value: "yes", label: "Yes" }, { value: "no", label: "No, it's in a city or suburb" }]} />
                </Field>
              </div>
            )}
            <Field id="q-large-deposits" error={errors.largeDepositCount} label="Any large deposits (over about half a month's income) in the last 2 months? (optional)" help="Lenders ask for paperwork showing where big deposits came from — the count and amount help size that request.">
              <input id="q-large-deposits" className={inputCls} inputMode="numeric" maxLength={3} placeholder="How many? e.g. 2 (0 if none)" value={largeDepositCount} aria-invalid={errors.largeDepositCount ? true : undefined} aria-describedby={errors.largeDepositCount ? "q-large-deposits-error" : undefined} onChange={(e) => setLargeDepositCount(e.target.value)} />
            </Field>
            {largeDepositCount.trim() !== "" && num(largeDepositCount) > 0 && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-large-deposit-total" error={errors.largeDepositTotal} label="Roughly how much in total? (optional)">
                  <input id="q-large-deposit-total" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 15000" value={largeDepositTotal} aria-invalid={errors.largeDepositTotal ? true : undefined} aria-describedby={errors.largeDepositTotal ? "q-large-deposit-total-error" : undefined} onChange={(e) => setLargeDepositTotal(e.target.value)} />
                </Field>
              </div>
            )}
            {(propertyType === PropertyType.CONDO_WARRANTABLE || propertyType === PropertyType.CONDO_NONWARRANTABLE) && (
              <>
                <Field id="q-condo-litigation" label="Is the condo association in any lawsuits or disputes? (optional)" help="Pending litigation is one of the most common reasons a condo building fails lender review.">
                  <ChoiceGroup id="q-condo-litigation" value={condoLitigation} onChange={setCondoLitigation} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
                </Field>
                <Field id="q-condo-investor" label="Are most units owner-occupied, or rented out by investors? (optional)" help="Buildings where more than about a quarter of units are investor-owned or one company owns many units often fail review.">
                  <ChoiceGroup id="q-condo-investor" value={condoInvestorHigh} onChange={setCondoInvestorHigh} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "Mostly owner-occupied" }, { value: "yes", label: "Mostly rented / one owner owns several" }]} />
                </Field>
                <Field id="q-condo-delinquency" label="Are many owners behind on their HOA dues? (optional)">
                  <ChoiceGroup id="q-condo-delinquency" value={condoDelinquency} onChange={setCondoDelinquency} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No / few" }, { value: "yes", label: "Yes, many" }]} />
                </Field>
              </>
            )}
            {propertyType === PropertyType.MANUFACTURED && (
              <>
                <Field id="q-mfd-land" label="Do you own the land, or is it a leased lot / park space?">
                  <ChoiceGroup id="q-mfd-land" value={mfdLeasedLand} onChange={setMfdLeasedLand} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "I own (or am buying) the land" }, { value: "yes", label: "Leased lot or park space" }]} />
                </Field>
                <Field id="q-mfd-width" label="Is it a single-wide or multi-section home?">
                  <ChoiceGroup id="q-mfd-width" value={mfdSingleWide} onChange={setMfdSingleWide} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "Double-wide or larger" }, { value: "yes", label: "Single-wide" }]} />
                </Field>
                <Field id="q-mfd-year" label="Was it built before 1976?">
                  <ChoiceGroup id="q-mfd-year" value={mfdPre1976} onChange={setMfdPre1976} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "No, 1976 or later" }, { value: "yes", label: "Yes" }]} />
                </Field>
                <Field id="q-mfd-foundation" label="Is it attached to a permanent foundation?">
                  <ChoiceGroup id="q-mfd-foundation" value={mfdFoundation} onChange={setMfdFoundation} options={[{ value: "unsure", label: "Not sure" }, { value: "no", label: "Yes, permanent foundation" }, { value: "yes", label: "No, on blocks/wheels" }]} />
                </Field>
              </>
            )}
            <Field id="q-gift" label="Will any of the down payment be a gift? (optional)" help="A documented gift from a relative is allowed on many programs — this just helps the estimate.">
              <ChoiceGroup id="q-gift" value={hasGiftFunds} onChange={setHasGiftFunds} options={[{ value: "no", label: "No, all my own funds" }, { value: "yes", label: "Yes, partly a gift" }]} />
            </Field>
            {hasGiftFunds === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-gift-amount" error={errors.giftFundsAmount} label="Roughly how much is a gift? (optional)">
                  <input id="q-gift-amount" className={inputCls} inputMode="numeric" maxLength={12} placeholder="e.g. 10000" value={giftFundsAmount} aria-invalid={errors.giftFundsAmount ? true : undefined} aria-describedby={errors.giftFundsAmount ? "q-gift-amount-error" : undefined} onChange={(e) => setGiftFundsAmount(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-first-time" label="Is this your first home? (optional)">
              <ChoiceGroup id="q-first-time" value={isFirstTimeBuyer} onChange={setIsFirstTimeBuyer} options={[{ value: "unsure", label: "Prefer not to say" }, { value: "yes", label: "Yes" }, { value: "no", label: "No, I've owned before" }]} />
            </Field>
            {propertyUse === PropertyUse.INVESTMENT && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
                <Field id="q-rent" error={errors.monthlyRent} label="Expected monthly rent from this property" help="Investor programs often qualify on the rent a property produces rather than your personal income.">
                  <input id="q-rent" className={inputCls} inputMode="numeric" maxLength={9} placeholder="e.g. 2200" value={monthlyRent} aria-invalid={errors.monthlyRent ? true : undefined} aria-describedby={errors.monthlyRent ? "q-rent-error" : undefined} onChange={(e) => setMonthlyRent(e.target.value)} />
                </Field>
              </div>
            )}
          </div>
        </fieldset>
      )}

      {step === 7 && (
        <fieldset className="rounded-xl border border-rule bg-card p-6 sm:p-8 animate-in fade-in duration-300">
          <legend className="px-2 font-display text-2xl text-ink">Your monthly debts</legend>
          <p className="mb-6 text-sm text-ink-2">Everything except rent — detailing the type helps, since lenders treat some debts differently.</p>
          <div className="flex flex-col gap-6">
            <Field id="q-debt" error={errors.debt} label="Total monthly debt payments">
              <input id="q-debt" className={inputCls} inputMode="numeric" maxLength={9} placeholder="e.g. 500" value={debt} aria-invalid={errors.debt ? true : undefined} aria-describedby={errors.debt ? "q-debt-error" : undefined} onChange={(e) => setDebt(e.target.value)} />
            </Field>
            <Field id="q-student-loan" label="Do you have student loans?" help="Deferred or income-driven loans are counted differently than standard repayment.">
              <ChoiceGroup id="q-student-loan" value={hasStudentLoan} onChange={setHasStudentLoan} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {hasStudentLoan === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1 flex flex-col gap-6">
                <Field id="q-student-status" label="How are they being paid right now?">
                  <ChoiceGroup id="q-student-status" value={studentLoanStatus} onChange={setStudentLoanStatus} options={[{ value: "repayment", label: "Standard / income-driven repayment" }, { value: "deferred", label: "Deferred or forbearance (not paying yet)" }]} />
                </Field>
                <Field id="q-student-balance" label="Total student loan balance" error={errors.studentLoanBalance}>
                  <input id="q-student-balance" className={inputCls} inputMode="numeric" maxLength={10} placeholder="e.g. 35000" value={studentLoanBalance} aria-invalid={errors.studentLoanBalance ? true : undefined} aria-describedby={errors.studentLoanBalance ? "q-student-balance-error" : undefined} onChange={(e) => setStudentLoanBalance(e.target.value)} />
                </Field>
                <Field id="q-student-payment" error={errors.studentLoanPayment} label="Monthly student loan payment (0 if not paying yet)" help="If deferred, lenders typically count about 1% of the balance — we'll use that rule.">
                  <input id="q-student-payment" className={inputCls} inputMode="numeric" maxLength={7} placeholder="e.g. 280" value={studentLoanPayment} aria-invalid={errors.studentLoanPayment ? true : undefined} aria-describedby={errors.studentLoanPayment ? "q-student-payment-error" : undefined} onChange={(e) => setStudentLoanPayment(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-support" label="Do you pay alimony or child support?">
              <ChoiceGroup id="q-support" value={hasSupportPayments} onChange={setHasSupportPayments} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {hasSupportPayments === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1 flex flex-col gap-6">
                <Field id="q-support-type" label="Which do you pay?">
                  <ChoiceGroup id="q-support-type" value={supportType} onChange={setSupportType} options={[{ value: "alimony_paid", label: "Alimony (spousal support)" }, { value: "child_support_paid", label: "Child support" }]} />
                </Field>
                <Field id="q-support-amount" label="Monthly amount you pay" error={errors.supportAmount}>
                  <input id="q-support-amount" className={inputCls} inputMode="numeric" maxLength={7} placeholder="e.g. 800" value={supportAmount} aria-invalid={errors.supportAmount ? true : undefined} aria-describedby={errors.supportAmount ? "q-support-amount-error" : undefined} onChange={(e) => setSupportAmount(e.target.value)} />
                </Field>
                <Field id="q-support-months" error={errors.supportMonthsLeft} label="How many months until it ends? (optional)" help="Support ending within 10 months is typically left out of the qualifying math — leave blank if there's no end date.">
                  <input id="q-support-months" className={inputCls} inputMode="numeric" maxLength={4} placeholder="e.g. 8" value={supportMonthsLeft} aria-invalid={errors.supportMonthsLeft ? true : undefined} aria-describedby={errors.supportMonthsLeft ? "q-support-months-error" : undefined} onChange={(e) => setSupportMonthsLeft(e.target.value)} />
                </Field>
              </div>
            )}
            <Field id="q-cosigned" label="Is anyone else's debt on your credit because you cosigned for them?">
              <ChoiceGroup id="q-cosigned" value={hasCosignedDebt} onChange={setHasCosignedDebt} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
            </Field>
            {hasCosignedDebt === "yes" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1 flex flex-col gap-6">
                <Field id="q-cosigned-payment" label="Monthly payment on that debt" error={errors.cosignedPayment}>
                  <input id="q-cosigned-payment" className={inputCls} inputMode="numeric" maxLength={7} placeholder="e.g. 420" value={cosignedPayment} aria-invalid={errors.cosignedPayment ? true : undefined} aria-describedby={errors.cosignedPayment ? "q-cosigned-payment-error" : undefined} onChange={(e) => setCosignedPayment(e.target.value)} />
                </Field>
                <Field id="q-cosigned-ontime" label="Has the other person paid it on time for the last 12 months?" help="If yes and you can document it, lenders typically leave it out of your qualifying math.">
                  <ChoiceGroup id="q-cosigned-ontime" value={cosignedOnTime12mo} onChange={setCosignedOnTime12mo} options={[{ value: "no", label: "No / not sure" }, { value: "yes", label: "Yes" }]} />
                </Field>
              </div>
            )}
            <Field id="q-revolving-balance" label="Total balance on your credit cards (optional)" help="Card balances count at least 1-5% of the balance monthly — this refines your debt estimate.">
              <input id="q-revolving-balance" className={inputCls} inputMode="numeric" maxLength={9} placeholder="e.g. 8000" value={revolvingBalance} onChange={(e) => setRevolvingBalance(e.target.value)} />
            </Field>
            {revolvingBalance.trim() !== "" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 border-l border-rule pl-5 ml-1">
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
            className="btn-ghost px-6 py-3 text-sm"
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
            className="btn-primary px-7 py-3 text-sm"
          >
            Next →
          </button>
        ) : (
          <button
            type="submit"
            className="btn-primary"
          >
            See my readiness snapshot
          </button>
        )}
      </div>
      <p className="text-center text-xs text-ink-3">
        Educational estimate only. Not a loan commitment. No credit is pulled.
      </p>
    </form>
  );
}
