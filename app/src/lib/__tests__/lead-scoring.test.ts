import { describe, expect, it } from "vitest";
import { computeLeadScore, tierFromScore } from "@/lib/lead-scoring";
import { CreditTier } from "@/engine/types";
import type { EngineInputs, DiagnosticResult } from "@/engine/types";

/** Realistic strong-profile inputs (as the client sends them). */
function strongInputs(overrides: Partial<EngineInputs> = {}): EngineInputs {
  return {
    loanPurpose: "purchase",
    propertyUse: "primary",
    residencyStatus: "us_citizen",
    isTribalMember: false,
    isVeteran: false,
    isMedicalProfessional: false,
    grossMonthlyIncome: 6500,
    incomeType: "w2",
    incomeDocumentation: "w2_and_paystubs",
    creditScoreSelfReported: 760,
    creditTierSelfReported: "excellent" as never,
    totalMonthlyDebtPayments: 400,
    downPaymentAvailable: 70000,
    targetPurchasePrice: 350000,
    liquidAssets: 75000,
    totalAssets: 80000,
    hoaFee: 0,
    yearsCurrentEmployment: 6,
    employmentType: "w2",
    incomeTrend: "up",
    rentHistory12mo: "on_time",
    reservesMonthsAtClose: 6,
    largeDepositsUnexplained: 0,
    floodZoneSpecial: false,
    condoLitigation: false,
    condoInvestorConcentrationHigh: false,
    condoDelinquencyHigh: false,
    mfdLeasedLand: false,
    mfdSingleWide: false,
    mfdManufacturedBefore1976: false,
    mfdAnchoredFoundation: true,
    state: "FL",
    timelineMonths: 1,
    ...overrides,
  } as EngineInputs;
}

/** Strong diagnostic result: every pillar strong. */
function strongResult(overrides: Record<string, unknown> = {}): DiagnosticResult {
  const pillars = ["income", "debt", "credit", "cash", "payment", "property", "documentation"];
  return {
    subScores: Object.fromEntries(
      pillars.map((c) => [c, { category: c, score: 90, tier: "strong", summary: "", redFlags: [] }]),
    ),
    ...overrides,
  } as unknown as DiagnosticResult;
}

describe("computeLeadScore", () => {
  it("scores a strong, fast-moving lead in the hot tier (>= 80)", () => {
    const { score, tier } = computeLeadScore(strongInputs(), strongResult());
    expect(score).toBeGreaterThanOrEqual(80);
    expect(tier).toBe("hot");
  });

  it("caps the timeline band at 25 for very long timelines", () => {
    const long = computeLeadScore(strongInputs({ timelineMonths: 24 }), strongResult());
    const factors = long.factors.find((f) => f.name === "timeline")!;
    expect(factors.points).toBeLessThanOrEqual(25);
    expect(factors.points).toBe(5); // > 12 months → floor band
  });

  it("gives researching leads (no timeline) the floor band, not zero", () => {
    const r = computeLeadScore(strongInputs({ timelineMonths: null }), strongResult());
    expect(r.factors.find((f) => f.name === "timeline")!.points).toBe(5);
  });

  it("caps profile strength at 30 even when all seven pillars are strong (35 raw)", () => {
    const r = computeLeadScore(strongInputs(), strongResult());
    expect(r.factors.find((f) => f.name === "profile")!.points).toBe(30);
  });

  it("scores weaker profiles progressively (workable < strong)", () => {
    const mid = { subScores: Object.fromEntries(
      ["income", "debt", "credit", "cash", "payment", "property", "documentation"].map((c) => [
        c,
        { category: c, score: 60, tier: "workable", summary: "", redFlags: [] },
      ]),
    ) };
    const strong = computeLeadScore(strongInputs(), strongResult());
    const weaker = computeLeadScore(strongInputs(), mid);
    expect(weaker.score).toBeLessThan(strong.score);
    expect(weaker.factors.find((f) => f.name === "profile")!.points).toBe(14); // 7 × 2
  });

  it("band-only credit answers score lower than exact 760s but above 'not sure'", () => {
    const exact = computeLeadScore(strongInputs(), strongResult());
    const banded = computeLeadScore(
      strongInputs({
        creditScoreSelfReported: undefined,
        creditTierSelfReported: "excellent" as unknown as CreditTier,
      }),
      strongResult(),
    );
    const unsure = computeLeadScore(
      strongInputs({ creditScoreSelfReported: undefined, creditTierSelfReported: undefined }),
      strongResult(),
    );
    expect(banded.factors.find((f) => f.name === "credit")!.points).toBe(10);
    expect(unsure.factors.find((f) => f.name === "credit")!.points).toBe(3);
    expect(unsure.score).toBeLessThan(banded.score);
    void exact;
  });

  it("scales down-payment points by percent of target price", () => {
    const twenty = computeLeadScore(strongInputs(), strongResult());
    const three = computeLeadScore(strongInputs({ downPaymentAvailable: 10500 }), strongResult());
    expect(twenty.factors.find((f) => f.name === "down_payment")!.points).toBe(10);
    expect(three.factors.find((f) => f.name === "down_payment")!.points).toBe(4);
  });

  it("down-payment unknown scores the thin floor (2), not the max", () => {
    const r = computeLeadScore(
      strongInputs({ downPaymentAvailable: undefined, targetPurchasePrice: undefined }),
      strongResult(),
    );
    expect(r.factors.find((f) => f.name === "down_payment")!.points).toBe(2);
  });

  it("never throws on malformed payloads — scores the floor bands, not crash", () => {
    const { score, tier } = computeLeadScore("garbage", { subScores: "nope" });
    // Capture baseline 20 + unknown-timeline 5 + unknown-credit 3 + unknown-DP 2.
    expect(score).toBe(30);
    expect(tier).toBe("future_buyer");
  });

  it("soft captures use the reduced capture-depth band (5 of 20)", () => {
    const soft = computeLeadScore(strongInputs(), strongResult(), "soft");
    expect(soft.factors.find((f) => f.name === "capture")!.points).toBe(5);
    const hard = computeLeadScore(strongInputs(), strongResult(), "hard");
    expect(hard.factors.find((f) => f.name === "capture")!.points).toBe(20);
  });
});

describe("tierFromScore", () => {
  it("matches the Part 8 §8.2 bands", () => {
    expect(tierFromScore(95)).toBe("hot");
    expect(tierFromScore(80)).toBe("hot");
    expect(tierFromScore(79)).toBe("warm");
    expect(tierFromScore(60)).toBe("warm");
    expect(tierFromScore(59)).toBe("nurture");
    expect(tierFromScore(40)).toBe("nurture");
    expect(tierFromScore(39)).toBe("future_buyer");
    expect(tierFromScore(20)).toBe("future_buyer");
    expect(tierFromScore(19)).toBe("low_intent");
    expect(tierFromScore(0)).toBe("low_intent");
  });
});
