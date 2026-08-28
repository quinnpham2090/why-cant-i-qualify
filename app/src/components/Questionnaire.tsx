"use client";

import { useState } from "react";
import { runDiagnostic } from "@/engine";
import { STEP_INTROS } from "@/engine/labels";
import {
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

function Field({ label, help, children }: { label: string; help?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
      {help && <p className={helpCls}>{help}</p>}
    </div>
  );
}

export function Questionnaire() {
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [lastInputs, setLastInputs] = useState<EngineInputs | null>(null);

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
  const [debt, setDebt] = useState<string>("");
  const [downPayment, setDownPayment] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [propertyType, setPropertyType] = useState<PropertyType>(PropertyType.SFR);
  const [yearsEmployed, setYearsEmployed] = useState<string>("2");
  const [liquid, setLiquid] = useState<string>("");

  const num = (s: string) => {
    const n = Number(s);
    return Number.isFinite(n) && n > 0 ? n : 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      totalMonthlyDebtPayments: num(debt),
      downPaymentAvailable: num(downPayment),
      targetPurchasePrice: price ? num(price) : null,
      propertyType,
      employmentYearsInField: num(yearsEmployed) || 2,
      liquidAssetsAfterClose: liquid ? num(liquid) : null,
      state: "FL", // V1 geofenced to Florida
    };
    // Auto-select documentation type when cash income is reported
    if (hasCashIncome === "yes" && incomeDoc === IncomeDocumentation.UNKNOWN) {
      inputs.incomeDocumentation = IncomeDocumentation.CASH_UNDOCUMENTED;
    }
    setResult(runDiagnostic(inputs));
    setLastInputs(inputs);
    // Scroll to results
    setTimeout(() => {
      document.getElementById("results-heading")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const startOver = () => {
    setResult(null);
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

  const stepNames = ["Your goal", "Income", "Credit", "Money"];

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      {/* Progress indicator — orientation for a long single-page form */}
      <nav aria-label="Progress" className="rounded-2xl border border-sand-200 bg-sand-50 p-5">
        <ol className="flex items-center justify-between gap-2">
          {stepNames.map((name, idx) => (
            <li key={name} className="flex flex-1 items-center gap-2">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warm-700 text-xs font-bold text-white"
              >
                {idx + 1}
              </span>
              <span className="hidden text-sm font-medium text-warm-900 sm:inline">{name}</span>
              {idx < stepNames.length - 1 && (
                <span aria-hidden="true" className="hidden h-px flex-1 bg-sage-100 sm:block" />
              )}
            </li>
          ))}
        </ol>
        <p className="mt-2 text-xs text-warm-700 sm:hidden">
          {`Scroll through all 4 sections below — everything is on this one page.`}
        </p>
      </nav>

      {/* About the home */}
      <fieldset className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
        <legend className="px-2 text-base font-semibold text-warm-900">1 · About your goal</legend>
        <p className="mb-4 text-sm text-warm-700">{STEP_INTROS.goal}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="What are you looking to do?">
            <select className={inputCls} value={loanPurpose} onChange={(e) => setLoanPurpose(e.target.value as LoanPurpose)}>
              <option value={LoanPurpose.PURCHASE}>Buy a home</option>
              <option value={LoanPurpose.REFI_RATE_TERM}>Refinance (rate/term)</option>
              <option value={LoanPurpose.REFI_CASH_OUT}>Refinance (cash-out)</option>
            </select>
          </Field>
          <Field label="How will you use the home?">
            <select className={inputCls} value={propertyUse} onChange={(e) => setPropertyUse(e.target.value as PropertyUse)}>
              <option value={PropertyUse.PRIMARY}>Primary residence</option>
              <option value={PropertyUse.SECOND_HOME}>Second home</option>
              <option value={PropertyUse.INVESTMENT}>Investment property</option>
            </select>
          </Field>
          <Field label="Loan type you're considering" help="Choose &ldquo;Not sure&rdquo; and we'll suggest options.">
            <select className={inputCls} value={loanType} onChange={(e) => setLoanType(e.target.value as LoanType)}>
              <option value={LoanType.UNKNOWN}>Not sure yet</option>
              <option value={LoanType.CONVENTIONAL_CONF}>Conventional</option>
              <option value={LoanType.FHA}>FHA</option>
              <option value={LoanType.VA}>VA</option>
              <option value={LoanType.USDA}>USDA</option>
            </select>
          </Field>
          <Field label="Property type">
            <select className={inputCls} value={propertyType} onChange={(e) => setPropertyType(e.target.value as PropertyType)}>
              <option value={PropertyType.SFR}>Single-family home</option>
              <option value={PropertyType.TOWNHOME}>Townhome</option>
              <option value={PropertyType.CONDO_WARRANTABLE}>Condo</option>
              <option value={PropertyType.MULTI_2_4}>Multi-family (2–4 units)</option>
              <option value={PropertyType.MANUFACTURED}>Manufactured</option>
            </select>
          </Field>
          <Field label="Target purchase price (optional)" help="Leave blank and we'll estimate a range.">
            <input className={inputCls} inputMode="numeric" placeholder="e.g. 350000" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Field>
        </div>
      </fieldset>

      {/* Income */}
      <fieldset className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
        <legend className="px-2 text-base font-semibold text-warm-900">2 · Income</legend>
        <p className="mb-4 text-sm text-warm-700">{STEP_INTROS.income}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Gross monthly income (before taxes)">
            <input className={inputCls} inputMode="numeric" placeholder="e.g. 6000" value={income} onChange={(e) => setIncome(e.target.value)} required />
          </Field>
          <Field label="Income type">
            <select className={inputCls} value={incomeType} onChange={(e) => setIncomeType(e.target.value as IncomeType)}>
              <option value={IncomeType.W2}>W-2 employee</option>
              <option value={IncomeType.SELF_EMPLOYED}>Self-employed / business owner</option>
              <option value={IncomeType.COMMISSION}>Commission-based</option>
              <option value={IncomeType.VARIABLE_HOURLY}>Variable / hourly</option>
              <option value={IncomeType.RETIRED_FIXED}>Retirement income</option>
              <option value={IncomeType.SOCIAL_SECURITY}>Social Security</option>
            </select>
          </Field>
          <Field label="How is your income documented?" help="Lenders accept many documentation types — not just tax returns.">
            <select className={inputCls} value={incomeDoc} onChange={(e) => setIncomeDoc(e.target.value as IncomeDocumentation)}>
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
          <Field label="Is any of your income paid in cash that doesn't show on tax returns?" help="Many programs work with cash-heavy income — this just helps us point you to the right ones.">
            <select className={inputCls} value={hasCashIncome} onChange={(e) => setHasCashIncome(e.target.value as "yes" | "no" | "unsure")}>
              <option value="unsure">Not sure</option>
              <option value="yes">Yes, some of it</option>
              <option value="no">No, it&apos;s all documented</option>
            </select>
          </Field>
          {hasCashIncome === "yes" && (
            <Field label="Roughly what share is cash? (optional)">
              <input className={inputCls} inputMode="numeric" placeholder="e.g. 30 (for 30%)" value={cashPortion} onChange={(e) => setCashPortion(e.target.value)} />
            </Field>
          )}
          <Field label="Years in your field / self-employment">
            <input className={inputCls} inputMode="numeric" value={yearsEmployed} onChange={(e) => setYearsEmployed(e.target.value)} />
          </Field>
        </div>
      </fieldset>

      {/* Credit */}
      <fieldset className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
        <legend className="px-2 text-base font-semibold text-warm-900">3 · Credit</legend>
        <p className="mb-4 text-sm text-warm-700">A rough range is enough — we never pull your credit.</p>
        <Field label="Do you know your credit score?" help="We never pull your credit. This is self-reported and educational.">
          <select className={inputCls} value={knowsScore} onChange={(e) => setKnowsScore(e.target.value as "yes" | "no")}>
            <option value="no">No, I&apos;ll pick a range</option>
            <option value="yes">Yes, I know my score</option>
          </select>
        </Field>
        <div className="mt-4">
          {knowsScore === "yes" ? (
            <Field label="Your credit score (300–850)">
              <input className={inputCls} inputMode="numeric" placeholder="e.g. 700" value={creditScore} onChange={(e) => setCreditScore(e.target.value)} />
            </Field>
          ) : (
            <Field label="Which range is closest?">
              <select className={inputCls} value={creditTier} onChange={(e) => setCreditTier(e.target.value as CreditTier)}>
                <option value={CreditTier.EXCELLENT}>Excellent (760+)</option>
                <option value={CreditTier.GOOD}>Good (700–759)</option>
                <option value={CreditTier.FAIR}>Fair (640–699)</option>
                <option value={CreditTier.POOR}>Below 640</option>
              </select>
            </Field>
          )}
        </div>
      </fieldset>

      {/* Money */}
      <fieldset className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
        <legend className="px-2 text-base font-semibold text-warm-900">4 · Debts &amp; savings</legend>
        <p className="mb-4 text-sm text-warm-700">Last section — then your snapshot.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Total monthly debt payments" help="Cars, cards, student loans, etc. Not rent.">
            <input className={inputCls} inputMode="numeric" placeholder="e.g. 500" value={debt} onChange={(e) => setDebt(e.target.value)} />
          </Field>
          <Field label="Down payment you have saved">
            <input className={inputCls} inputMode="numeric" placeholder="e.g. 20000" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
          </Field>
          <Field label="Savings left after closing (optional)">
            <input className={inputCls} inputMode="numeric" placeholder="e.g. 10000" value={liquid} onChange={(e) => setLiquid(e.target.value)} />
          </Field>
          {propertyUse === PropertyUse.INVESTMENT && (
            <Field label="Expected monthly rent from this property" help="Investor programs often qualify on the rent a property produces rather than your personal income.">
              <input className={inputCls} inputMode="numeric" placeholder="e.g. 2200" value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} />
            </Field>
          )}
          <Field label="Total savings & investments (optional)" help="Some programs qualify you on assets rather than income — this helps us check those.">
            <input className={inputCls} inputMode="numeric" placeholder="e.g. 150000" value={totalAssets} onChange={(e) => setTotalAssets(e.target.value)} />
          </Field>
        </div>
      </fieldset>

      <div className="text-center">
        <button
          type="submit"
          className="w-full rounded-full bg-warm-700 px-8 py-4 text-base font-semibold text-white transition hover:bg-warm-900 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2 sm:w-auto"
        >
          See my readiness snapshot
        </button>
        <p className="mt-3 text-xs text-warm-500">
          Educational estimate only. Not a loan commitment. No credit is pulled.
        </p>
      </div>
    </form>
  );
}
