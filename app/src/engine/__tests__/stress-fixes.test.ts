/**
 * Regression tests for the stress-500 fixes (report sections P1–P4):
 * underwater refi, credit floor, VA occupancy, no-traditional-income paths
 * (DSCR / bank statement / asset depletion), duplicate-key sources, seller
 * credits, waiting-period messaging, and the new conditional inputs.
 *
 * These are the "known dangerous scenarios" from the stress-test report —
 * each previously produced a wrong or misleading result.
 */
import { describe, expect, it } from "vitest";
import { runDiagnostic } from "../index";
import {
  CompositeTier,
  CreditEvent,
  IncomeDocumentation,
  IncomeType,
  LoanPurpose,
  LoanType,
  PropertyType,
  PropertyUse,
  ResidencyStatus,
} from "../types";
import type { EngineInputs } from "../types";
import { defaultQuestionnaireState, validateStepFields } from "@/lib/validation";

function base(overrides: Partial<EngineInputs>): EngineInputs {
  return {
    loanPurpose: LoanPurpose.PURCHASE,
    propertyUse: PropertyUse.PRIMARY,
    loanType: LoanType.CONVENTIONAL_CONF,
    grossMonthlyIncome: 8000,
    incomeType: IncomeType.W2,
    creditScoreSelfReported: null,
    creditTierSelfReported: null,
    totalMonthlyDebtPayments: 600,
    downPaymentAvailable: 30000,
    targetPurchasePrice: 400000,
    state: "FL",
    propertyType: PropertyType.SFR,
    employmentYearsInField: 6,
    employmentMonthsCurrentJob: 30,
    liquidAssetsAfterClose: 20000,
    ...overrides,
  };
}

describe("P1-1 underwater / excessive-CLTV refinance", () => {
  it("payoff above value is LIMITED_FIT with an equity obstacle — never 'nothing major'", () => {
    const r = runDiagnostic(
      base({
        loanPurpose: LoanPurpose.REFI_RATE_TERM,
        estimatedHomeValue: 400000,
        currentPayoffAmount: 520000, // 130% CLTV
        creditScoreSelfReported: 760 + 20,
      }),
    );
    expect(r.compositeTier).toBe(CompositeTier.LIMITED_FIT);
    expect(r.primaryObstacle?.category).toBe("equity");
    expect(r.primaryObstacle?.description).toMatch(/higher than the home|standard refinance/i);
    // CLTV must be disclosed, and non-QM must not be implied as a cure.
    expect(r.assumptionsUsed.some((a) => a.key === "refi_cltv")).toBe(true);
    const all = [r.primaryObstacle?.description ?? "", ...r.secondaryObstacles.map((o) => o.description), r.compositeTierMessage].join(" ");
    expect(all).toMatch(/does not automatically|not a determination|options to discuss/i);
  });

  it("a massive $10M payoff vs $400k value still gates", () => {
    const r = runDiagnostic(
      base({
        loanPurpose: LoanPurpose.REFI_RATE_TERM,
        estimatedHomeValue: 400000,
        currentPayoffAmount: 10000000,
      }),
    );
    expect(r.compositeTier).toBe(CompositeTier.LIMITED_FIT);
    expect(r.primaryObstacle?.category).toBe("equity");
  });

  it("cash-out above 80% CLTV surfaces the cash-out cap obstacle", () => {
    const r = runDiagnostic(
      base({
        loanPurpose: LoanPurpose.REFI_CASH_OUT,
        estimatedHomeValue: 400000,
        currentPayoffAmount: 340000, // 85% CLTV
      }),
    );
    const texts = [r.primaryObstacle?.description ?? "", ...r.secondaryObstacles.map((o) => o.description)].join(" ");
    expect(texts).toMatch(/cash-out/i);
  });

  it("a normal refi (75% CLTV) raises no equity obstacle", () => {
    const r = runDiagnostic(
      base({
        loanPurpose: LoanPurpose.REFI_RATE_TERM,
        estimatedHomeValue: 400000,
        currentPayoffAmount: 300000,
      }),
    );
    const all = [r.primaryObstacle?.category ?? "", ...r.secondaryObstacles.map((o) => o.category)];
    expect(all).not.toContain("equity");
  });
});

describe("P1-2 credit floor", () => {
  it("self-reported 300 is LIMITED_FIT with the credit-floor obstacle", () => {
    const r = runDiagnostic(
      base({
        grossMonthlyIncome: 12000,
        creditScoreSelfReported: 300,
        downPaymentAvailable: 100000,
        targetPurchasePrice: 400000,
      }),
    );
    expect(r.compositeTier).toBe(CompositeTier.LIMITED_FIT);
    expect(r.primaryObstacle?.category).toBe("credit");
    expect(r.compositeTierMessage).toMatch(/credit improvement/i);
  });

  it("self-reported 499 is LIMITED_FIT", () => {
    const r = runDiagnostic(base({ creditScoreSelfReported: 499 }));
    expect(r.compositeTier).toBe(CompositeTier.LIMITED_FIT);
  });

  it("self-reported 520 (500 after haircut) keeps the FHA 10% path available", () => {
    const r = runDiagnostic(base({ creditScoreSelfReported: 520, loanType: LoanType.FHA, downPaymentAvailable: 40000, targetPurchasePrice: 400000 }));
    expect(r.compositeTier).not.toBe(CompositeTier.LIMITED_FIT);
    expect(r.eligiblePrograms).toContain(LoanType.FHA);
  });
});

describe("P1-3 VA occupancy", () => {
  it("VA is never eligible for a pure investment property", () => {
    const r = runDiagnostic(
      base({
        loanType: LoanType.VA,
        isVeteran: true,
        propertyUse: PropertyUse.INVESTMENT,
        residencyStatus: ResidencyStatus.US_CITIZEN,
        creditScoreSelfReported: 760 + 20,
      }),
    );
    expect(r.eligiblePrograms).not.toContain(LoanType.VA);
    const texts = [r.primaryObstacle?.description ?? "", ...r.secondaryObstacles.map((o) => o.description)].join(" ");
    expect(texts).toMatch(/primary residence/i);
  });

  it("VA stays eligible for a primary residence with the same profile", () => {
    const r = runDiagnostic(
      base({
        loanType: LoanType.VA,
        isVeteran: true,
        propertyUse: PropertyUse.PRIMARY,
        residencyStatus: ResidencyStatus.US_CITIZEN,
        creditScoreSelfReported: 760 + 20,
      }),
    );
    expect(r.eligiblePrograms).toContain(LoanType.VA);
  });
});

describe("P1-4 extreme DTI", () => {
  it("65%+ back-end DTI is LIMITED_FIT (no non-ratio escape)", () => {
    const r = runDiagnostic(
      base({
        grossMonthlyIncome: 6000,
        totalMonthlyDebtPayments: 4200, // ~70% + payment
        creditScoreSelfReported: 700 + 20,
      }),
    );
    expect(r.compositeTier).toBe(CompositeTier.LIMITED_FIT);
  });
});

describe("P2 — no-traditional-income paths", () => {
  it("bank statement: deposits (not income) drive qualifying income", () => {
    const r = runDiagnostic(
      base({
        grossMonthlyIncome: 0,
        incomeType: IncomeType.SELF_EMPLOYED,
        incomeDocumentation: IncomeDocumentation.BANK_STATEMENT_24,
        monthlyDepositsTotal: 20000, // → 0.75 × 20k = 15k qualifying
        creditScoreSelfReported: 700 + 20,
        downPaymentAvailable: 150000,
        targetPurchasePrice: 500000,
      }),
    );
    expect(r.eligiblePrograms).toContain(LoanType.BANK_STATEMENT);
    expect(r.assumptionsUsed.some((a) => a.key === "bank_statement_income" && /deposits/i.test(a.description))).toBe(true);
    expect(r.dtiBackEnd).toBeLessThan(0.5);
    // Non-QM leads the recommendation for alt-doc files.
    expect(r.recommendedProgram).toBe(LoanType.BANK_STATEMENT);
  });

  it("DSCR: no personal income, rent covers payment — DTI walls do not apply", () => {
    const r = runDiagnostic(
      base({
        loanPurpose: LoanPurpose.PURCHASE,
        propertyUse: PropertyUse.INVESTMENT,
        grossMonthlyIncome: 0,
        incomeType: IncomeType.SELF_EMPLOYED,
        incomeDocumentation: IncomeDocumentation.DSCR_RENT,
        expectedMonthlyRent: 3600,
        creditScoreSelfReported: 720 + 20,
        downPaymentAvailable: 100000,
        targetPurchasePrice: 400000,
        totalMonthlyDebtPayments: 0,
      }),
    );
    expect(r.eligiblePrograms).toContain(LoanType.DSCR);
    // With rent covering PITIA, the DSCR coverage score overrides the debt pillar.
    expect(r.subScores.debt.score).toBeGreaterThanOrEqual(60);
    expect(r.recommendedProgram).toBe(LoanType.DSCR);
    expect(r.compositeTier).not.toBe(CompositeTier.LIMITED_FIT);
  });

  it("asset depletion: qualifying income = assets / 84", () => {
    const r = runDiagnostic(
      base({
        grossMonthlyIncome: 0,
        incomeType: IncomeType.UNKNOWN,
        incomeDocumentation: IncomeDocumentation.ASSET_DEPLETION,
        liquidAssetsTotal: 1_000_000,
        creditScoreSelfReported: 760 + 20,
        downPaymentAvailable: 150000,
        targetPurchasePrice: 500000,
      }),
    );
    expect(r.eligiblePrograms).toContain(LoanType.ASSET_QUALIFIER);
    expect(r.assumptionsUsed.some((a) => /84 month/i.test(a.description))).toBe(true);
  });

  it("no income and no alternative path produces an honest 'no qualifying income' message", () => {
    const r = runDiagnostic(
      base({
        grossMonthlyIncome: 0,
        incomeType: IncomeType.UNKNOWN,
        incomeDocumentation: IncomeDocumentation.NO_DOC,
        downPaymentAvailable: 20000,
        targetPurchasePrice: 300000,
      }),
    );
    const texts = [r.primaryObstacle?.description ?? "", ...r.secondaryObstacles.map((o) => o.description), r.compositeTierMessage].join(" ");
    expect(texts).toMatch(/no qualifying income|alternative-documentation|income/i);
    expect(r.compositeTier).toBe(CompositeTier.LIMITED_FIT);
  });
});

describe("P2 — waiting-period messaging names program timelines", () => {
  it("mentions the typical conventional + FHA waits for a recent Chapter 7", () => {
    const r = runDiagnostic(
      base({
        creditScoreSelfReported: 640 + 20,
        creditEvent: CreditEvent.BK_CH7,
        yearsSinceCreditEvent: 1.5,
        loanType: LoanType.CONVENTIONAL_CONF,
      }),
    );
    const texts = [r.primaryObstacle?.description ?? "", ...r.secondaryObstacles.map((o) => o.description)].join(" ");
    expect(texts).toMatch(/conventional/i);
    expect(texts).toMatch(/FHA/i);
  });
});

describe("P3/P5 — new inputs flow through", () => {
  it("seller credit reduces cash to close", () => {
    const noCredit = runDiagnostic(base({ sellerCreditAmount: null }));
    const withCredit = runDiagnostic(base({ sellerCreditAmount: 10000 }));
    expect(withCredit.cashToClose.mid).toBeLessThan(noCredit.cashToClose.mid);
    expect(withCredit.assumptionsUsed.some((a) => a.key === "seller_credit")).toBe(true);
  });

  it("rate override replaces the assumed rate and is disclosed", () => {
    const r = runDiagnostic(base({ assumedRateOverridePct: 5.5 }));
    expect(r.assumptionsUsed.some((a) => a.description.includes("5.5"))).toBe(true);
  });

  it("VA discloses the funding fee; FHA discloses UFMIP; conventional + MI discloses PMI removal", () => {
    const va = runDiagnostic(base({ loanType: LoanType.VA, isVeteran: true, residencyStatus: ResidencyStatus.US_CITIZEN }));
    expect(va.assumptionsUsed.some((a) => a.key === "va_funding_fee")).toBe(true);
    const fha = runDiagnostic(base({ loanType: LoanType.FHA, downPaymentAvailable: 14000, targetPurchasePrice: 400000, creditScoreSelfReported: 640 + 20 }));
    expect(fha.assumptionsUsed.some((a) => a.key === "fha_ufmip")).toBe(true);
    const conv = runDiagnostic(base({ downPaymentAvailable: 40000, targetPurchasePrice: 400000 }));
    expect(conv.assumptionsUsed.some((a) => a.key === "pmi_removal_note")).toBe(true);
  });

  it("USDA surfaces the area/income caveat whenever USDA is eligible", () => {
    const r = runDiagnostic(base({ loanType: LoanType.USDA, creditScoreSelfReported: 660 + 20, downPaymentAvailable: 5000, targetPurchasePrice: 300000 }));
    expect(r.assumptionsUsed.some((a) => a.key === "usda_area_note")).toBe(true);
  });

  it("partial VA entitlement and interest-only preference are disclosed", () => {
    const r = runDiagnostic(
      base({
        loanType: LoanType.VA, isVeteran: true, residencyStatus: ResidencyStatus.US_CITIZEN,
        vaEntitlement: "partial", prefersInterestOnly: true,
      }),
    );
    expect(r.assumptionsUsed.some((a) => a.key === "va_entitlement_partial")).toBe(true);
    expect(r.assumptionsUsed.some((a) => a.key === "interest_only_note")).toBe(true);
  });

  it("overtime/bonus is credited conservatively (75%)", () => {
    const r = runDiagnostic(base({ overtimeBonusMonthly: 2000 }));
    expect(r.assumptionsUsed.some((a) => a.key === "overtime_bonus_income")).toBe(true);
  });

  it("plausibility disclosures fire for oversized gift / assets / HOA", () => {
    const gift = runDiagnostic(base({ giftFundsAmount: 900000, downPaymentAvailable: 20000 }));
    expect(gift.assumptionsUsed.some((a) => a.key === "gift_plausibility")).toBe(true);
    const assets = runDiagnostic(base({ liquidAssetsTotal: 50_000_000 }));
    expect(assets.assumptionsUsed.some((a) => a.key === "asset_plausibility")).toBe(true);
    const hoa = runDiagnostic(base({ hasHoa: true, monthlyHoaFee: 1500 }));
    expect(hoa.assumptionsUsed.some((a) => a.key === "hoa_plausibility")).toBe(true);
  });

  it("assumption keys are unique (no duplicate React keys downstream)", () => {
    const r = runDiagnostic(
      base({
        incomeType: IncomeType.SELF_EMPLOYED,
        incomeDocumentation: IncomeDocumentation.BANK_STATEMENT_24,
        monthlyDepositsTotal: 15000,
        creditScoreSelfReported: 700 + 20,
      }),
    );
    const keys = r.assumptionsUsed.map((a) => a.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe("general site — state is optional with national averages", () => {
  it("runs with no state and discloses the national-average assumption", () => {
    const r = runDiagnostic(base({ state: undefined }));
    expect(r.assumptionsUsed.some((a) => a.key === "tax_rate_default")).toBe(true);
    expect(r.estimatedPiti.mid).toBeGreaterThan(0);
  });

  it("a chosen state sharpens the payment without changing eligibility logic", () => {
    const tx = runDiagnostic(base({ state: "TX" }));
    const fl = runDiagnostic(base({ state: "FL" }));
    expect(tx.estimatedPiti.mid).not.toBe(fl.estimatedPiti.mid);
  });
});

describe("target-price assessment — stay anchored to the borrower's number", () => {
  it("a strong-income borrower at $440k with 20% down FITS at their own price", () => {
    const r = runDiagnostic(
      base({
        grossMonthlyIncome: 12000,
        creditScoreSelfReported: 760 + 20,
        downPaymentAvailable: 88000,
        targetPurchasePrice: 440000,
      }),
    );
    expect(r.targetPriceAssessment?.status).toBe("fits");
    expect(r.targetPriceAssessment?.dtiAtTarget).toBeLessThanOrEqual(0.45);
    expect(r.targetPriceAssessment?.pitiAtTarget).toBeGreaterThan(0);
  });

  it("a $440k target with modest income is honestly 'no typical fit' — with levers, not a smaller price", () => {
    const r = runDiagnostic(
      base({
        grossMonthlyIncome: 5000,
        creditScoreSelfReported: 760 + 20,
        totalMonthlyDebtPayments: 500,
        downPaymentAvailable: 88000,
        targetPurchasePrice: 440000,
      }),
    );
    const a = r.targetPriceAssessment;
    expect(a?.status).toBe("no_typical_fit");
    expect(a?.priceAt45Dti).toBeLessThan(440000);
    expect(a?.priceAt45Dti).toBeGreaterThan(200000); // sanity: not a 90% haircut
    expect(a?.monthlyIncomeGap).toBeGreaterThan(0);
    expect(a?.extraDownPaymentNeeded).toBeGreaterThan(0);
    // The affordable range is context, not the verdict: it must not gate the
    // tier on its own for this file (DTI 63% is under the 65% hard gate).
    expect(a?.dtiAtTarget).toBeLessThan(0.65);
  });

  it("the hard DTI gate names the borrower's target price when one was set", () => {
    const r = runDiagnostic(
      base({
        grossMonthlyIncome: 4500,
        creditScoreSelfReported: 760 + 20,
        totalMonthlyDebtPayments: 500,
        downPaymentAvailable: 88000,
        targetPurchasePrice: 440000,
      }),
    );
    expect(r.compositeTier).toBe(CompositeTier.LIMITED_FIT);
    expect(r.compositeTierMessage).toMatch(/440,000|target price/i);
    expect(r.targetPriceAssessment?.status).toBe("no_typical_fit");
  });
});

describe("validation — new rules", () => {
  it("income is NOT required on the no-traditional-income path", () => {
    const s = defaultQuestionnaireState({ hasTraditionalIncome: "no", altIncomePath: "asset_depletion", totalAssets: "800000" });
    expect(validateStepFields(s, 3)).toEqual({});
  });

  it("DSCR path requires rent; bank-statement path requires deposits", () => {
    const dscr = defaultQuestionnaireState({ hasTraditionalIncome: "no", altIncomePath: "dscr" });
    expect(Object.keys(validateStepFields(dscr, 3))).toContain("monthlyRent");
    const bank = defaultQuestionnaireState({ hasTraditionalIncome: "no", altIncomePath: "bank_statement", monthlyDeposits: "18000" });
    expect(validateStepFields(bank, 3)).toEqual({});
    const bankMissing = defaultQuestionnaireState({ hasTraditionalIncome: "no", altIncomePath: "bank_statement" });
    expect(Object.keys(validateStepFields(bankMissing, 3))).toContain("monthlyDeposits");
  });

  it("comma-formatted numbers parse everywhere", () => {
    const s = defaultQuestionnaireState({
      price: "350,000",
      income: "6,000",
      creditScore: "740",
      downPayment: "$20,000",
      totalAssets: "60,000",
      debt: "500",
    });
    expect(validateStepFields(s, 0)).toEqual({});
    expect(validateStepFields(s, 3)).toEqual({});
    expect(validateStepFields(s, 5)).toEqual({});
    expect(validateStepFields(s, 6)).toEqual({});
  });

  it("rate override validation bounds", () => {
    expect(validateStepFields(defaultQuestionnaireState({ rateOverride: "6.875" }), 1)).toEqual({});
    expect(Object.keys(validateStepFields(defaultQuestionnaireState({ rateOverride: "45" }), 1))).toContain("rateOverride");
  });
});
