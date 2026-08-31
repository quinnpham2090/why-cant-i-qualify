/**
 * Pure per-step validators for the questionnaire (Stage 2 Phase 1).
 *
 * Extracted from `Questionnaire.tsx` so every rule is unit-testable without
 * rendering React. The component builds a `QuestionnaireState` snapshot from
 * its raw form state and calls:
 *   - `validateStepFields(state, step)` when advancing one step, and
 *   - `validateAllSteps(state)` at submit time (safety net: validates every
 *     step and reports the first step that needs attention).
 *
 * Error copy rules (EXECUTION-PLAN §0 constraint #1 — copy-linted upstream):
 * calm, specific, no forbidden words; every message says what to do next.
 * Field keys here MUST match the keys used for `errors` rendering in
 * `Questionnaire.tsx`.
 */

import { CreditEvent } from "@/engine/types";

/** Raw form fields (strings exactly as typed by the user) needed for validation. */
export interface QuestionnaireState {
  // Step 0 — Goal
  loanPurpose: string; // "purchase" | "refinance_rate_term" | "refinance_cash_out" | "renovation" | "construction_otc"
  price: string;
  /** Refi: estimated home value (replaces target price for refi purposes). */
  homeValue: string;
  /** Refi: current loan balance / payoff (optional). */
  payoff: string;
  // Step 1 — Programs
  /** Quoted rate override (optional, programs step). */
  rateOverride: string;
  // Step 2 — Background
  yearsEmployed: string;
  monthsCurrentJob: string;
  // Step 3 — Income
  /** Whether the borrower documents traditional income (drives the required-ness of `income`). */
  hasTraditionalIncome: "yes" | "no";
  /** Alternative path chosen when hasTraditionalIncome === "no". */
  altIncomePath: "unsure" | "dscr" | "bank_statement" | "asset_depletion";
  /** Bank-statement path: average monthly deposits. */
  monthlyDeposits: string;
  income: string;
  /** Combined overtime+bonus amount (optional, W-2 only). */
  overtimeBonusAmount: string;
  hasCashIncome: "yes" | "no" | "unsure";
  cashPortion: string;
  hasSideBusiness: "no" | "yes";
  sideBusinessNet: string;
  // Step 4 — Co-borrower
  hasCoBorrower: "no" | "yes";
  coBorrowerIncome: string;
  // Step 5 — Credit
  knowsScore: "yes" | "no";
  creditScore: string;
  creditEvent: CreditEvent;
  yearsSinceCreditEvent: string;
  // Step 6 — Assets
  downPayment: string;
  liquid: string;
  totalAssets: string;
  hoaFee: string;
  largeDepositCount: string;
  largeDepositTotal: string;
  /** Monthly property-tax override (optional). */
  taxMonthly: string;
  hasGiftFunds: "no" | "yes";
  giftFundsAmount: string;
  monthlyRent: string;
  /** Seller credit (amount) when the borrower says the seller pays costs. */
  sellerCredit: string;
  // Step 7 — Debt
  debt: string;
  hasStudentLoan: "no" | "yes";
  studentLoanBalance: string;
  studentLoanPayment: string;
  hasSupportPayments: "no" | "yes";
  supportAmount: string;
  supportMonthsLeft: string;
  hasCosignedDebt: "no" | "yes";
  cosignedPayment: string;
  revolvingBalance: string;
  revolvingLimit: string;
}

export type StepErrors = Record<string, string>;

export const STEP_COUNT = 8;

const isBlank = (s: string): boolean => s.trim() === "";

/** Numeric parse: accepts "$350,000"-style formatting; null when blank/invalid. */
function numOrNull(s: string): number | null {
  const cleaned = s.replace(/[$,\s]/g, "");
  if (cleaned === "") return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

/** Optional numeric field: valid when blank, otherwise must sit within [min,max]. */
function checkOptionalRange(
  errors: StepErrors,
  field: string,
  raw: string,
  min: number,
  max: number,
  message: string,
): void {
  if (isBlank(raw)) return;
  const n = numOrNull(raw);
  if (n == null || n < min || n > max) {
    errors[field] = message;
  }
}

/** Required numeric field: must parse and sit within [min,max]. */
function checkRequiredRange(
  errors: StepErrors,
  field: string,
  raw: string,
  min: number,
  max: number,
  message: string,
): void {
  const n = numOrNull(raw);
  if (n == null || n < min || n > max) {
    errors[field] = message;
  }
}

/**
 * Validate a single wizard step (0-based index). Returns a map of
 * field key -> error message; empty when the step is valid.
 */
export function validateStepFields(s: QuestionnaireState, step: number): StepErrors {
  const e: StepErrors = {};

  switch (step) {
    // ── Step 0: Goal ────────────────────────────────────────────────────────
    case 0: {
      const isRefi =
        s.loanPurpose === "refinance_rate_term" || s.loanPurpose === "refinance_cash_out";
      if (isRefi) {
        // Refi: home value takes the place of the target price.
        checkOptionalRange(
          e, "homeValue", s.homeValue, 10_000, 50_000_000,
          "Please enter your estimated home value (a ballpark is fine) — or switch back to a purchase goal.",
        );
        checkOptionalRange(
          e, "payoff", s.payoff, 0, 50_000_000,
          "Please enter your current loan balance as a number (or leave it blank and we will estimate it).",
        );
      } else {
        checkOptionalRange(
          e, "price", s.price, 1_000, 5_000_000,
          "Please enter a target price between $1,000 and $5,000,000 — or leave it blank and we will estimate a range.",
        );
      }
      break;
    }

    // ── Step 1: Programs ─────────────────────────────────────────────────────
    case 1: {
      checkOptionalRange(
        e, "rateOverride", s.rateOverride, 0.5, 20,
        "Please enter the quoted rate as a percentage (for example 6.875), or leave it blank.",
      );
      break;
    }

    // ── Step 2: Background ──────────────────────────────────────────────────
    case 2: {
      checkOptionalRange(
        e, "yearsEmployed", s.yearsEmployed, 0, 50,
        "Please enter years in your field as a number between 0 and 50.",
      );
      checkOptionalRange(
        e, "monthsCurrentJob", s.monthsCurrentJob, 0, 600,
        "Please enter months in your current job as a number between 0 and 600.",
      );
      break;
    }

    // ── Step 3: Income ──────────────────────────────────────────────────────
    case 3: {
      // No-traditional-income path (stress-500 P2): income is NOT required;
      // the chosen alternative path drives what must be collected instead.
      if (s.hasTraditionalIncome === "no") {
        if (s.altIncomePath === "dscr") {
          const rent = numOrNull(s.monthlyRent);
          if (rent == null || rent <= 0) {
            e.monthlyRent =
              "Please enter the monthly rent the property earns (or expect it to earn) — investor cash-flow programs qualify on rent coverage.";
          }
        } else if (s.altIncomePath === "bank_statement") {
          const deposits = numOrNull(s.monthlyDeposits);
          if (deposits == null || deposits <= 0) {
            e.monthlyDeposits =
              "Please enter your average monthly deposits — bank-statement programs qualify on deposits.";
          }
        } else if (s.altIncomePath === "asset_depletion") {
          const assets = numOrNull(s.totalAssets);
          if (assets == null || assets <= 0) {
            e.totalAssets =
              "Enter your total savings & investments on the savings step — asset-based programs qualify on that figure (a rough number is fine).";
          }
        }
      } else {
        const income = numOrNull(s.income);
        if (income == null || income <= 0) {
          e.income = "Please enter your gross monthly income — a rough number is fine.";
        } else if (income > 1_000_000) {
          e.income = "That income looks higher than expected — please double-check the monthly amount.";
        }
        if (s.income != null && s.income.trim() !== "" && income == null) {
          e.income = "Please enter your gross monthly income as a number (commas are fine).";
        }
      }
      if (s.hasTraditionalIncome === "yes" && s.overtimeBonusAmount.trim() !== "") {
        checkOptionalRange(
          e, "overtimeBonusAmount", s.overtimeBonusAmount, 0, 1_000_000,
          "Please enter the combined monthly overtime and bonus as a number.",
        );
      }
      if (s.hasCashIncome === "yes") {
        checkOptionalRange(
          e, "cashPortion", s.cashPortion, 0, 99,
          "Please enter a share between 0 and 99.",
        );
      }
      if (s.hasSideBusiness === "yes" && !isBlank(s.sideBusinessNet)) {
        const n = numOrNull(s.sideBusinessNet);
        if (n == null) {
          e.sideBusinessNet =
            "Please enter the net business income or loss from your tax returns (a number, negative for a loss).";
        }
      }
      break;
    }

    // ── Step 4: Co-borrower ─────────────────────────────────────────────────
    case 4: {
      if (s.hasCoBorrower === "yes") {
        checkOptionalRange(
          e, "coBorrowerIncome", s.coBorrowerIncome, 0, 1_000_000,
          "Please enter their gross monthly income as a number (or 0 if they have none yet).",
        );
      }
      break;
    }

    // ── Step 5: Credit ──────────────────────────────────────────────────────
    case 5: {
      if (s.knowsScore === "yes") {
        checkRequiredRange(
          e, "creditScore", s.creditScore, 300, 850,
          "Please enter a score between 300 and 850.",
        );
      }
      if (s.creditEvent !== CreditEvent.NONE) {
        checkRequiredRange(
          e, "yearsSinceCreditEvent", s.yearsSinceCreditEvent, 0, 10,
          "Please enter how long ago, in years (0–10). Half-years like 1.5 are fine.",
        );
      }
      break;
    }

    // ── Step 6: Assets ──────────────────────────────────────────────────────
    case 6: {
      checkOptionalRange(
        e, "downPayment", s.downPayment, 0, 10_000_000,
        "Please enter your down payment savings as a number (0 if none yet).",
      );
      checkOptionalRange(
        e, "liquid", s.liquid, 0, 10_000_000,
        "Please enter your savings left after closing as a number.",
      );
      checkOptionalRange(
        e, "totalAssets", s.totalAssets, 0, 100_000_000,
        "Please enter your total savings and investments as a number.",
      );
      checkOptionalRange(
        e, "hoaFee", s.hoaFee, 0, 5_000,
        "Please enter the monthly HOA fee as a number (0 if none).",
      );
      checkOptionalRange(
        e, "taxMonthly", s.taxMonthly, 0, 10_000,
        "Please enter the monthly property taxes as a number (0 if unknown).",
      );
      checkOptionalRange(
        e, "largeDepositCount", s.largeDepositCount, 0, 99,
        "Please enter the number of large deposits (0 if none).",
      );
      if (!isBlank(s.largeDepositCount) && (numOrNull(s.largeDepositCount) ?? 0) > 0) {
        checkOptionalRange(
          e, "largeDepositTotal", s.largeDepositTotal, 0, 10_000_000,
          "Please enter the approximate total of those deposits as a number.",
        );
      }
      if (s.hasGiftFunds === "yes") {
        checkOptionalRange(
          e, "giftFundsAmount", s.giftFundsAmount, 1, 10_000_000,
          "Please enter the approximate gift amount as a number.",
        );
      }
      checkOptionalRange(
        e, "monthlyRent", s.monthlyRent, 0, 50_000,
        "Please enter the expected monthly rent as a number.",
      );
      if (s.sellerCredit.trim() !== "") {
        checkOptionalRange(
          e, "sellerCredit", s.sellerCredit, 0, 1_000_000,
          "Please enter the seller's contribution as a number (0 if none).",
        );
      }
      break;
    }

    // ── Step 7: Debt ────────────────────────────────────────────────────────
    case 7: {
      checkOptionalRange(
        e, "debt", s.debt, 0, 1_000_000,
        "Please enter your total monthly debt payments as a number (0 if none).",
      );
      if (s.hasStudentLoan === "yes") {
        checkRequiredRange(
          e, "studentLoanBalance", s.studentLoanBalance, 0, 1_000_000,
          "Please enter the total student loan balance (a rough number is fine).",
        );
        checkOptionalRange(
          e, "studentLoanPayment", s.studentLoanPayment, 0, 100_000,
          "Please enter the monthly student loan payment as a number (0 if not paying yet).",
        );
      }
      if (s.hasSupportPayments === "yes") {
        checkRequiredRange(
          e, "supportAmount", s.supportAmount, 1, 100_000,
          "Please enter the monthly support amount you pay.",
        );
        checkOptionalRange(
          e, "supportMonthsLeft", s.supportMonthsLeft, 0, 600,
          "Please enter the months until it ends as a number (or leave blank if there is no end date).",
        );
      }
      if (s.hasCosignedDebt === "yes") {
        checkRequiredRange(
          e, "cosignedPayment", s.cosignedPayment, 1, 100_000,
          "Please enter the monthly payment on the debt you cosigned.",
        );
      }
      const balance = numOrNull(s.revolvingBalance);
      const limit = numOrNull(s.revolvingLimit);
      if (balance != null && limit != null && limit > 0 && balance > limit) {
        e.revolvingLimit = "The total limit looks lower than the balance — please double-check the numbers.";
      }
      break;
    }

    default:
      break;
  }

  return e;
}

/**
 * A `QuestionnaireState` with every optional string filled to its blank/safe
 * default — used by tests and by the component when a caller lacks the full
 * shape (e.g. restoring a partial snapshot).
 */
export function defaultQuestionnaireState(overrides: Partial<QuestionnaireState> = {}): QuestionnaireState {
  return {
    loanPurpose: "purchase",
    price: "",
    homeValue: "",
    payoff: "",
    rateOverride: "",
    yearsEmployed: "",
    monthsCurrentJob: "",
    hasTraditionalIncome: "yes",
    altIncomePath: "unsure",
    monthlyDeposits: "",
    income: "",
    overtimeBonusAmount: "",
    hasCashIncome: "no",
    cashPortion: "",
    hasSideBusiness: "no",
    sideBusinessNet: "",
    hasCoBorrower: "no",
    coBorrowerIncome: "",
    knowsScore: "yes",
    creditScore: "",
    creditEvent: CreditEvent.NONE,
    yearsSinceCreditEvent: "",
    downPayment: "",
    liquid: "",
    totalAssets: "",
    hoaFee: "",
    largeDepositCount: "",
    largeDepositTotal: "",
    taxMonthly: "",
    hasGiftFunds: "no",
    giftFundsAmount: "",
    monthlyRent: "",
    sellerCredit: "",
    debt: "",
    hasStudentLoan: "no",
    studentLoanBalance: "",
    studentLoanPayment: "",
    hasSupportPayments: "no",
    supportAmount: "",
    supportMonthsLeft: "",
    hasCosignedDebt: "no",
    cosignedPayment: "",
    revolvingBalance: "",
    revolvingLimit: "",
    ...overrides,
  };
}

/**
 * Submit-time safety net: validate every step at once. Returns the merged
 * error map plus the first (lowest-index) step that has an error, so the UI
 * can jump the user straight to what needs fixing.
 */
export function validateAllSteps(
  s: QuestionnaireState,
): { errors: StepErrors; firstErrorStep: number | null } {
  const errors: StepErrors = {};
  let firstErrorStep: number | null = null;

  for (let step = 0; step < STEP_COUNT; step++) {
    const stepErrors = validateStepFields(s, step);
    if (Object.keys(stepErrors).length > 0 && firstErrorStep == null) {
      firstErrorStep = step;
    }
    for (const [key, message] of Object.entries(stepErrors)) {
      if (errors[key] == null) errors[key] = message;
    }
  }

  return { errors, firstErrorStep };
}
