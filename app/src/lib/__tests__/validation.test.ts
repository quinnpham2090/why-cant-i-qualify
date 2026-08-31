/**
 * Unit tests for the pure per-step questionnaire validators (Stage 2 Phase 1).
 * These guard the regression that broke the funnel: validation indices were
 * written for a 4-step wizard and never re-indexed after the wizard grew to
 * 7 steps, leaving "Background" impassable and submit validation a no-op.
 */
import { describe, expect, it } from "vitest";
import {
  defaultQuestionnaireState,
  validateAllSteps,
  validateStepFields,
  type QuestionnaireState,
} from "@/lib/validation";
import { CreditEvent } from "@/engine/types";

/** A fully valid state — every optional field sensible, required fields set. */
function validState(): QuestionnaireState {
  return defaultQuestionnaireState({
    price: "350000",
    yearsEmployed: "5",
    monthsCurrentJob: "14",
    income: "6000",
    creditScore: "700",
    downPayment: "20000",
    liquid: "10000",
    totalAssets: "60000",
    debt: "500",
  });
}

describe("validateStepFields — step 0 (Goal)", () => {
  it("accepts a blank target price (optional field)", () => {
    const s = { ...validState(), price: "" };
    expect(validateStepFields(s, 0)).toEqual({});
  });

  it("rejects a non-numeric or out-of-range target price", () => {
    for (const price of ["abc", "500", "99999999"]) {
      const s = { ...validState(), price };
      expect(Object.keys(validateStepFields(s, 0))).toContain("price");
    }
  });
});

describe("validateStepFields — step 1 (Programs)", () => {
  it("has no validated fields (choice groups with safe defaults only)", () => {
    expect(validateStepFields(validState(), 1)).toEqual({});
  });
});

describe("validateStepFields — step 2 (Background)", () => {
  it("no longer blocks the Background step on the income field (funnel bug)", () => {
    // The regression: this step must never require income > 0 — the income
    // field lives on step 3 — or the wizard becomes impassable for a fresh
    // user.
    const s = { ...validState(), income: "" };
    expect(validateStepFields(s, 2)).toEqual({});
  });

  it("rejects non-numeric employment tenure", () => {
    const s = { ...validState(), yearsEmployed: "abc" };
    expect(Object.keys(validateStepFields(s, 2))).toContain("yearsEmployed");
  });
});

describe("validateStepFields — step 3 (Income)", () => {
  it("requires a positive gross monthly income", () => {
    for (const income of ["", "0", "abc"]) {
      const s = { ...validState(), income };
      expect(Object.keys(validateStepFields(s, 3))).toContain("income");
    }
  });

  it("validates the cash-income share bounds", () => {
    const s = { ...validState(), hasCashIncome: "yes" as const, cashPortion: "150" };
    expect(Object.keys(validateStepFields(s, 3))).toContain("cashPortion");
  });
});

describe("validateStepFields — step 5 (Credit)", () => {
  it("rejects out-of-range and non-numeric credit scores (previously never validated)", () => {
    for (const creditScore of ["", "999", "299", "abc"]) {
      const s = { ...validState(), knowsScore: "yes" as const, creditScore };
      expect(Object.keys(validateStepFields(s, 5))).toContain("creditScore");
    }
  });

  it("requires years-since-event when a credit event is selected", () => {
    const s = { ...validState(), creditEvent: CreditEvent.FORECLOSURE, yearsSinceCreditEvent: "" };
    expect(Object.keys(validateStepFields(s, 5))).toContain("yearsSinceCreditEvent");
  });
});

describe("validateStepFields — step 7 (Debt)", () => {
  it("requires the student-loan balance when student loans are declared", () => {
    const s = { ...validState(), hasStudentLoan: "yes" as const, studentLoanBalance: "" };
    expect(Object.keys(validateStepFields(s, 7))).toContain("studentLoanBalance");
  });

  it("flags a revolving limit lower than the balance", () => {
    const s = { ...validState(), revolvingBalance: "8000", revolvingLimit: "2000" };
    expect(Object.keys(validateStepFields(s, 7))).toContain("revolvingLimit");
  });
});

describe("validateAllSteps", () => {
  it("passes a fully valid state with no first error step", () => {
    const r = validateAllSteps(validState());
    expect(r.firstErrorStep).toBeNull();
    expect(Object.keys(r.errors)).toHaveLength(0);
  });

  it("aggregates errors across steps and reports the first failing step", () => {
    const s = {
      ...validState(),
      income: "", // step 3
      creditScore: "999", // step 5
    };
    const r = validateAllSteps(s);
    expect(r.firstErrorStep).toBe(3);
    expect(r.errors.income).toBeTruthy();
    expect(r.errors.creditScore).toBeTruthy();
  });

  it("reports the earliest failing step, not the first field alphabetically", () => {
    const s = { ...validState(), yearsEmployed: "abc", debt: "abc" };
    const r = validateAllSteps(s);
    expect(r.firstErrorStep).toBe(2); // Background before Debt
  });
});
