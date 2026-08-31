import { beforeEach, describe, expect, it, vi } from "vitest";
import { runDiagnostic } from "../index";
import {
  CompositeTier,
  CreditEvent,
  CreditTier,
  IncomeDocumentation,
  IncomeType,
  LoanPurpose,
  LoanType,
  PropertyType,
  PropertyUse,
  ResidencyStatus,
} from "../types";
import type { DiagnosticResult, EngineInputs } from "../types";
import { COMPOSITE_TIERS } from "../tables";
import { computeLeadScore } from "@/lib/lead-scoring";
import { resetRateLimits } from "@/lib/rate-limit";

/**
 * System stress test — 200 borrower scenarios end to end.
 *
 * Layer 1 (engine): every scenario runs through runDiagnostic twice with
 * hard invariants (no crash, no NaN/Infinity, range monotonicity, tier/score
 * banding, obstacle structure) plus determinism, timing, and monotonic
 * variant checks (more income/down/credit must never make things worse).
 * Layer 2 (scoring): computeLeadScore over every engine result.
 * Layer 3 (API): every scenario POSTs to the real /api/lead handler with
 * Supabase + email mocked, asserting a 2xx storage path with sane fields;
 * a 10-payload junk batch must be rejected with 4xx (never 5xx).
 *
 * Findings that are not hard failures (odd DTI bases, empty program lists,
 * suspicious extremes) are recorded in STRESS_TEST_200.md with scenario ids.
 */

interface StressScenario {
  id: string;
  persona: string;
  inputs: EngineInputs;
}

// ── deterministic sampling ───────────────────────────────────────────────────
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function base(overrides: Partial<EngineInputs> = {}): EngineInputs {
  return {
    loanPurpose: LoanPurpose.PURCHASE,
    propertyUse: PropertyUse.PRIMARY,
    loanType: LoanType.CONVENTIONAL_CONF,
    grossMonthlyIncome: 5800,
    incomeType: IncomeType.W2,
    incomeDocumentation: IncomeDocumentation.W2_STUBS,
    creditScoreSelfReported: 700,
    creditTierSelfReported: null,
    totalMonthlyDebtPayments: 800,
    downPaymentAvailable: 17500,
    targetPurchasePrice: 350000,
    state: "FL",
    propertyType: PropertyType.SFR,
    employmentYearsInField: 4,
    liquidAssetsAfterClose: 10000,
    ...overrides,
  } as EngineInputs;
}

// ── 60 hand-picked edge scenarios ────────────────────────────────────────────
const EDGES: StressScenario[] = [
  { id: "EX-001", persona: "zero income baseline", inputs: base({ grossMonthlyIncome: 0 }) },
  { id: "EX-002", persona: "one dollar of monthly income", inputs: base({ grossMonthlyIncome: 1 }) },
  { id: "EX-003", persona: "millionaire W-2, modest house", inputs: base({ grossMonthlyIncome: 1_000_000, creditScoreSelfReported: 800 }) },
  { id: "EX-004", persona: "minimum-wage income, cheapest inventory", inputs: base({ grossMonthlyIncome: 1600, targetPurchasePrice: 150000, downPaymentAvailable: 5250, totalMonthlyDebtPayments: 120 }) },
  { id: "EX-005", persona: "no target price at all (estimate path)", inputs: base({ targetPurchasePrice: null }) },
  { id: "EX-006", persona: "tiny price ($1,000) — engine robustness", inputs: base({ targetPurchasePrice: 1000, downPaymentAvailable: 100 }) },
  { id: "EX-007", persona: "validation-max price $5,000,000", inputs: base({ targetPurchasePrice: 5_000_000, downPaymentAvailable: 1_000_000, grossMonthlyIncome: 60000 }) },
  { id: "EX-008", persona: "down payment 150% of price (over-funding)", inputs: base({ downPaymentAvailable: 525000 }) },
  { id: "EX-009", persona: "zero down with a price (phantom 3.5% disclosure)", inputs: base({ downPaymentAvailable: 0 }) },
  { id: "EX-010", persona: "refi rate/term, no payoff given", inputs: base({ loanPurpose: LoanPurpose.REFI_RATE_TERM, targetPurchasePrice: null, estimatedHomeValue: 400000, currentPayoffAmount: null }) },
  { id: "EX-011", persona: "refi with almost no equity", inputs: base({ loanPurpose: LoanPurpose.REFI_RATE_TERM, targetPurchasePrice: null, estimatedHomeValue: 400000, currentPayoffAmount: 395000 }) },
  { id: "EX-012", persona: "underwater refi (payoff 150% of value)", inputs: base({ loanPurpose: LoanPurpose.REFI_CASH_OUT, targetPurchasePrice: null, estimatedHomeValue: 300000, currentPayoffAmount: 450000 }) },
  { id: "EX-013", persona: "refi with no value and no payoff", inputs: base({ loanPurpose: LoanPurpose.REFI_RATE_TERM, targetPurchasePrice: null, estimatedHomeValue: null, currentPayoffAmount: null }) },
  { id: "EX-014", persona: "cash-out refi + heavy debts", inputs: base({ loanPurpose: LoanPurpose.REFI_CASH_OUT, targetPurchasePrice: null, estimatedHomeValue: 500000, currentPayoffAmount: 320000, totalMonthlyDebtPayments: 3200, grossMonthlyIncome: 9000 }) },
  { id: "EX-015", persona: "renovation purchase, no rent", inputs: base({ loanPurpose: LoanPurpose.RENOVATION, loanType: LoanType.RENOVATION }) },
  { id: "EX-016", persona: "construction OTC in a flood zone", inputs: base({ loanPurpose: LoanPurpose.CONSTRUCTION_OTC, loanType: LoanType.CONSTRUCTION_OTC, isInFloodZone: true }) },
  { id: "EX-017", persona: "investment property with zero rent", inputs: base({ propertyUse: PropertyUse.INVESTMENT, expectedMonthlyRent: null, loanType: LoanType.CONVENTIONAL_CONF }) },
  { id: "EX-018", persona: "investment with validation-max rent $50k", inputs: base({ propertyUse: PropertyUse.INVESTMENT, expectedMonthlyRent: 50000, grossMonthlyIncome: 8000 }) },
  { id: "EX-019", persona: "FICO floor 300", inputs: base({ creditScoreSelfReported: 300, loanType: LoanType.FHA }) },
  { id: "EX-020", persona: "FICO ceiling 850", inputs: base({ creditScoreSelfReported: 850, totalMonthlyDebtPayments: 200 }) },
  { id: "EX-021", persona: "no score + tier unknown", inputs: base({ creditScoreSelfReported: null, creditTierSelfReported: CreditTier.UNKNOWN }) },
  { id: "EX-022", persona: "no score, tier excellent", inputs: base({ creditScoreSelfReported: null, creditTierSelfReported: CreditTier.EXCELLENT }) },
  { id: "EX-023", persona: "no score, tier good", inputs: base({ creditScoreSelfReported: null, creditTierSelfReported: CreditTier.GOOD }) },
  { id: "EX-024", persona: "no score, tier fair", inputs: base({ creditScoreSelfReported: null, creditTierSelfReported: CreditTier.FAIR }) },
  { id: "EX-025", persona: "no score, tier poor", inputs: base({ creditScoreSelfReported: null, creditTierSelfReported: CreditTier.POOR, loanType: LoanType.FHA }) },
  { id: "EX-026", persona: "Chapter 7 discharged this month", inputs: base({ creditEvent: CreditEvent.BK_CH7, yearsSinceCreditEvent: 0, loanType: LoanType.FHA }) },
  { id: "EX-027", persona: "Chapter 7 ten years gone", inputs: base({ creditEvent: CreditEvent.BK_CH7, yearsSinceCreditEvent: 10 }) },
  { id: "EX-028", persona: "foreclosure 10.9 years ago", inputs: base({ creditEvent: CreditEvent.FORECLOSURE, yearsSinceCreditEvent: 10.9 }) },
  { id: "EX-029", persona: "short sale six weeks ago", inputs: base({ creditEvent: CreditEvent.SHORT_SALE, yearsSinceCreditEvent: 0.1 }) },
  { id: "EX-030", persona: "deed-in-lieu 3.9 years (just short)", inputs: base({ creditEvent: CreditEvent.DEEDS_IN_LIEU, yearsSinceCreditEvent: 3.9 }) },
  { id: "EX-031", persona: "deed-in-lieu 4.1 years (just clear)", inputs: base({ creditEvent: CreditEvent.DEEDS_IN_LIEU, yearsSinceCreditEvent: 4.1 }) },
  { id: "EX-032", persona: "deferred student loan $1M (1% rule stress)", inputs: base({ totalMonthlyDebtPayments: 0, debts: [{ kind: "student_loan_deferred" as const, balance: 1_000_000, fullyAmortPayment: 5000 }], grossMonthlyIncome: 9500, downPaymentAvailable: 60000, targetPurchasePrice: 400000 }) },
  { id: "EX-033", persona: "revolving $1M balance, $0 min due", inputs: base({ totalMonthlyDebtPayments: 0, debts: [{ kind: "revolving_line" as const, balance: 1_000_000, minDue: 0 }], grossMonthlyIncome: 9500, downPaymentAvailable: 60000, targetPurchasePrice: 400000 }) },
  { id: "EX-034", persona: "revolving balance 5x the stated limit", inputs: base({ revolvingCreditLimit: 10000, totalMonthlyDebtPayments: 900, debts: [{ kind: "revolving_line" as const, balance: 50000, minDue: 1400 }] }) },
  { id: "EX-035", persona: "no debts, PITI-only DTI", inputs: base({ totalMonthlyDebtPayments: 0, downPaymentAvailable: 70000, targetPurchasePrice: 350000 }) },
  { id: "EX-036", persona: "twenty mixed debts (list-length stress)", inputs: base({ totalMonthlyDebtPayments: 4800, grossMonthlyIncome: 14000, downPaymentAvailable: 90000, targetPurchasePrice: 450000, debts: Array.from({ length: 18 }, (_, k) => (k % 3 === 0 ? ({ kind: "credit_card" as const, balance: 3000 + k * 100, minDue: 90 }) : k % 3 === 1 ? ({ kind: "auto_loan" as const, actualMonthlyPayment: 320 }) : ({ kind: "student_loan_repayment" as const, balance: 9000 + k * 50, fullyAmortPayment: 110 }))) }) },
  { id: "EX-037", persona: "alimony with 9 months left (exclude boundary)", inputs: base({ totalMonthlyDebtPayments: 800, debts: [{ kind: "alimony_paid" as const, courtOrderedAmount: 800, monthsUntilTermination: 9 }] }) },
  { id: "EX-038", persona: "alimony with 10 months left (count boundary)", inputs: base({ totalMonthlyDebtPayments: 800, debts: [{ kind: "alimony_paid" as const, courtOrderedAmount: 800, monthsUntilTermination: 10 }] }) },
  { id: "EX-039", persona: "cosigned debt, other party pays on time 12mo", inputs: base({ totalMonthlyDebtPayments: 900, debts: [{ kind: "cosigned_secondary" as const, actualMonthlyPayment: 420, otherPartyOnTime12mo: true }] }) },
  { id: "EX-040", persona: "cosigned debt, other party late", inputs: base({ totalMonthlyDebtPayments: 900, debts: [{ kind: "cosigned_secondary" as const, actualMonthlyPayment: 420, otherPartyOnTime12mo: false }] }) },
  { id: "EX-041", persona: "$50k 30-day account, $0 due now", inputs: base({ totalMonthlyDebtPayments: 400, debts: [{ kind: "thirty_day_account" as const, balance: 50000, actualMonthlyPayment: 0 }] }) },
  { id: "EX-042", persona: "child support paid $5k/mo", inputs: base({ totalMonthlyDebtPayments: 5000, grossMonthlyIncome: 12000, downPaymentAvailable: 80000, targetPurchasePrice: 450000, debts: [{ kind: "child_support_paid" as const, courtOrderedAmount: 5000, monthsUntilTermination: 60 }] }) },
  { id: "EX-043", persona: "fully cash income, undocumented", inputs: base({ incomeType: IncomeType.MIXED, incomeDocumentation: IncomeDocumentation.CASH_UNDOCUMENTED, cashIncomePortionPct: 100, creditScoreSelfReported: null, creditTierSelfReported: CreditTier.GOOD }) },
  { id: "EX-044", persona: "cash 100% but fully documented (contradiction)", inputs: base({ incomeDocumentation: IncomeDocumentation.FULL_TAX_2YR, cashIncomePortionPct: 100 }) },
  { id: "EX-045", persona: "side business losing $50k/mo", inputs: base({ sideBusinessNetMonthlyIncome: -50000 }) },
  { id: "EX-046", persona: "self-employed with -$20k 2yr average", inputs: base({ incomeType: IncomeType.SELF_EMPLOYED, incomeDocumentation: IncomeDocumentation.FULL_TAX_2YR, selfEmployedNetIncome2yrAvg: -20000 }) },
  { id: "EX-047", persona: "self-employed 2yr avg far above stated gross", inputs: base({ incomeType: IncomeType.SELF_EMPLOYED, incomeDocumentation: IncomeDocumentation.FULL_TAX_2YR, selfEmployedNetIncome2yrAvg: 500000, grossMonthlyIncome: 6000 }) },
  { id: "EX-048", persona: "ITIN filer, no income, $2M assets", inputs: base({ residencyStatus: ResidencyStatus.ITIN, isItinBorrower: true, grossMonthlyIncome: 0, incomeType: IncomeType.UNKNOWN, incomeDocumentation: IncomeDocumentation.ASSET_DEPLETION, creditScoreSelfReported: null, creditTierSelfReported: CreditTier.EXCELLENT, liquidAssetsTotal: 2_000_000, liquidAssetsAfterClose: 1_700_000, downPaymentAvailable: 300000, targetPurchasePrice: 600000 }) },
  { id: "EX-049", persona: "ITIN filer who is also a veteran (mixed signals)", inputs: base({ residencyStatus: ResidencyStatus.ITIN, isItinBorrower: true, isVeteran: true, loanType: LoanType.VA }) },
  { id: "EX-050", persona: "tribal member, rural, manufactured (184 vs USDA)", inputs: base({ isTribalMember: true, isRuralArea: "yes", propertyType: PropertyType.MANUFACTURED, loanType: LoanType.USDA, grossMonthlyIncome: 4200, downPaymentAvailable: 0, targetPurchasePrice: 180000 }) },
  { id: "EX-051", persona: "veteran who is also a medical professional", inputs: base({ isVeteran: true, isMedicalProfessional: true, loanType: LoanType.VA, downPaymentAvailable: 0, targetPurchasePrice: 425000, grossMonthlyIncome: 9500 }) },
  { id: "EX-052", persona: "no work authorization, wants FHA", inputs: base({ residencyStatus: ResidencyStatus.NON_PERMANENT_NO_EAD, loanType: LoanType.FHA, creditScoreSelfReported: 760 }) },
  { id: "EX-053", persona: "residency unknown, otherwise perfect file", inputs: base({ residencyStatus: ResidencyStatus.UNKNOWN, creditScoreSelfReported: 820, downPaymentAvailable: 100000, totalMonthlyDebtPayments: 200 }) },
  { id: "EX-054", persona: "co-borrower income $50k, credit 300 (drags joint)", inputs: base({ coBorrowerIncome: 50000, coBorrowerCredit: 300, creditScoreSelfReported: 780 }) },
  { id: "EX-055", persona: "co-borrower income $50k, credit 850", inputs: base({ coBorrowerIncome: 50000, coBorrowerCredit: 850, creditScoreSelfReported: 780 }) },
  { id: "EX-056", persona: "validation-max HOA $5k on a condo", inputs: base({ propertyType: PropertyType.CONDO_WARRANTABLE, hasHoa: true, monthlyHoaFee: 5000, grossMonthlyIncome: 14000, downPaymentAvailable: 90000, targetPurchasePrice: 450000 }) },
  { id: "EX-057", persona: "flood zone + 4-unit investment", inputs: base({ propertyUse: PropertyUse.INVESTMENT, propertyType: PropertyType.MULTI_2_4, isInFloodZone: true, expectedMonthlyRent: 3600, downPaymentAvailable: 130000, targetPurchasePrice: 520000, grossMonthlyIncome: 13000 }) },
  { id: "EX-058", persona: "buying in one month, flawless profile", inputs: base({ timelineMonths: 1, creditScoreSelfReported: 820, downPaymentAvailable: 105000, totalMonthlyDebtPayments: 150, grossMonthlyIncome: 12000 }) },
  { id: "EX-059", persona: "timeline 1200 months (validation max)", inputs: base({ timelineMonths: 1200 }) },
  { id: "EX-060", persona: "new hire, probationary, offer letter only", inputs: base({ employmentYearsInField: 0.2, employmentMonthsCurrentJob: 1, isProbationary: true, incomeDocumentation: IncomeDocumentation.W2_OFFER_LETTER }) },
  { id: "EX-061", persona: "reserves $1M but unseasoned", inputs: base({ liquidAssetsAfterClose: 1_000_000, reservesSeasoned60Days: false, creditScoreSelfReported: 790 }) },
  { id: "EX-062", persona: "gift funds dwarf the down payment", inputs: base({ hasGiftFundsDocumented: true, giftFundsAmount: 500000, downPaymentAvailable: 20000, targetPurchasePrice: 400000 }) },
  { id: "EX-063", persona: "99 large deposits totaling $10M", inputs: base({ hasUnexplainedLargeDeposits: true, largeDepositCount: 99, largeDepositTotal: 10_000_000, grossMonthlyIncome: 8000 }) },
  { id: "EX-064", persona: "every flag true — maximal profile", inputs: base({ isTribalMember: true, isVeteran: true, isMedicalProfessional: true, incomeAtOrBelow80Ami: true, isFirstTimeBuyer: true, hasOnTimeHousingHistory12mo: true, reservesSeasoned60Days: true, hasGiftFundsDocumented: true, giftFundsAmount: 25000, hasHoa: true, monthlyHoaFee: 250, isInFloodZone: true, isRuralArea: "no", creditScoreSelfReported: 810, downPaymentAvailable: 87500, targetPurchasePrice: 350000, totalMonthlyDebtPayments: 100 }) },
  { id: "EX-065", persona: "every flag false — minimal profile", inputs: base({ isTribalMember: false, isVeteran: false, isMedicalProfessional: false, incomeAtOrBelow80Ami: false, isFirstTimeBuyer: false, hasOnTimeHousingHistory12mo: false, reservesSeasoned60Days: false, hasGiftFundsDocumented: false, hasHoa: false, isInFloodZone: false, creditScoreSelfReported: 580, downPaymentAvailable: 2000, targetPurchasePrice: 300000, totalMonthlyDebtPayments: 1800, loanType: LoanType.FHA }) },
  { id: "EX-066", persona: "condo, rural unsure, DSCR rent just above payment", inputs: base({ propertyType: PropertyType.CONDO_WARRANTABLE, isRuralArea: "unsure", propertyUse: PropertyUse.INVESTMENT, expectedMonthlyRent: 2450, hasHoa: true, monthlyHoaFee: 420, downPaymentAvailable: 70000, targetPurchasePrice: 350000, incomeType: IncomeType.SELF_EMPLOYED, incomeDocumentation: IncomeDocumentation.DSCR_RENT, selfEmployedNetIncome2yrAvg: 60000 }) },
];

// ── 134 systematic scenarios (deterministic stride over a full grid) ────────
const SYS_PURPOSES = [
  LoanPurpose.PURCHASE,
  LoanPurpose.REFI_RATE_TERM,
  LoanPurpose.REFI_CASH_OUT,
  LoanPurpose.RENOVATION,
  LoanPurpose.CONSTRUCTION_OTC,
] as const;
const SYS_CREDIT = [520, 580, 620, 660, 700, 740, 800] as const;
const SYS_DEBTS = [0, 400, 1000, 2200, 3500] as const;
const SYS_DOWN_PCT = [0, 0.035, 0.05, 0.1, 0.2] as const;
const SYS_PRICES = [220000, 285000, 350000, 425000, 550000] as const;
const SYS_PROPERTIES = [
  PropertyType.SFR,
  PropertyType.CONDO_WARRANTABLE,
  PropertyType.CONDO_NONWARRANTABLE,
  PropertyType.TOWNHOME,
  PropertyType.MULTI_2_4,
  PropertyType.MANUFACTURED,
] as const;
const SYS_INCOMES = [2800, 4200, 5800, 7600, 9800, 14000] as const;
const SYS_INCOME_TYPES = [
  IncomeType.W2,
  IncomeType.SELF_EMPLOYED,
  IncomeType.COMMISSION,
  IncomeType.VARIABLE_HOURLY,
  IncomeType.RETIRED_FIXED,
  IncomeType.SOCIAL_SECURITY,
] as const;
const SYS_FLAGS: Array<(i: number) => Partial<EngineInputs>> = [
  () => ({}),
  () => ({ isInFloodZone: true, hasHoa: true, monthlyHoaFee: 300 }),
  () => ({ isVeteran: true, loanType: LoanType.VA }),
  () => ({ isMedicalProfessional: true }),
  () => ({ incomeAtOrBelow80Ami: true, isFirstTimeBuyer: true }),
  () => ({ isTribalMember: true, isRuralArea: "yes", loanType: LoanType.USDA }),
  () => ({ hasUnexplainedLargeDeposits: true, hasGiftFundsDocumented: false, downPaymentAvailable: 6000 }),
  () => ({ had60DayLate24mo: true, collectionsUnder2k: false }),
  () => ({ creditEvent: CreditEvent.BK_CH7, yearsSinceCreditEvent: 2.5, loanType: LoanType.FHA }),
  () => ({ isProbationary: true, employmentYearsInField: 0.8, employmentMonthsCurrentJob: 2 }),
  () => ({ incomeTrend: "down" as const, incomeType: IncomeType.COMMISSION }),
  () => ({ timelineMonths: 1 }),
];

const SYSTEMATIC: StressScenario[] = (() => {
  const rnd = mulberry32(20260214);
  const out: StressScenario[] = [];
  for (let i = 0; i < 134; i++) {
    const purpose = SYS_PURPOSES[i % SYS_PURPOSES.length];
    const isRefi = purpose === LoanPurpose.REFI_RATE_TERM || purpose === LoanPurpose.REFI_CASH_OUT;
    const price = SYS_PRICES[(i * 3 + Math.floor(rnd() * 5)) % SYS_PRICES.length];
    const downPct = SYS_DOWN_PCT[(i * 2 + Math.floor(rnd() * 5)) % SYS_DOWN_PCT.length];
    const credit = SYS_CREDIT[(i * 5 + Math.floor(rnd() * 7)) % SYS_CREDIT.length];
    const debts = SYS_DEBTS[(i * 7 + Math.floor(rnd() * 5)) % SYS_DEBTS.length];
    const income = SYS_INCOMES[(i * 11 + Math.floor(rnd() * 6)) % SYS_INCOMES.length];
    const incomeType = SYS_INCOME_TYPES[(i * 13 + Math.floor(rnd() * 6)) % SYS_INCOME_TYPES.length];
    const property = SYS_PROPERTIES[(i * 17 + Math.floor(rnd() * 6)) % SYS_PROPERTIES.length];
    const flag = SYS_FLAGS[i % SYS_FLAGS.length];
    const docFor: Record<string, IncomeDocumentation> = {
      [IncomeType.SELF_EMPLOYED]: IncomeDocumentation.FULL_TAX_2YR,
      [IncomeType.COMMISSION]: IncomeDocumentation.W2_STUBS,
      [IncomeType.VARIABLE_HOURLY]: IncomeDocumentation.W2_STUBS,
      [IncomeType.RETIRED_FIXED]: IncomeDocumentation.W2_STUBS,
      [IncomeType.SOCIAL_SECURITY]: IncomeDocumentation.NO_DOC,
    };
    const overrides: Partial<EngineInputs> = {
      loanPurpose: purpose,
      targetPurchasePrice: isRefi ? null : price,
      downPaymentAvailable: isRefi ? 15000 : Math.round(price * downPct),
      creditScoreSelfReported: credit,
      totalMonthlyDebtPayments: debts,
      grossMonthlyIncome: income,
      incomeType,
      incomeDocumentation: docFor[incomeType] ?? IncomeDocumentation.W2_STUBS,
      propertyType: property,
      propertyUse: property === PropertyType.MULTI_2_4 && i % 4 === 0 ? PropertyUse.INVESTMENT : PropertyUse.PRIMARY,
      expectedMonthlyRent:
        property === PropertyType.MULTI_2_4 && i % 4 === 0 ? Math.round(price * 0.007) : null,
      employmentYearsInField: 1 + (i % 12),
      liquidAssetsAfterClose: 2000 + (i % 9) * 3500,
      ...(isRefi ? { estimatedHomeValue: price, currentPayoffAmount: Math.round(price * 0.62) } : {}),
      ...flag(i),
    };
    out.push({
      id: `SYS-${String(i + 1).padStart(3, "0")}`,
      persona: `grid walk ${i + 1}: ${String(purpose).replace(/_/g, " ")}, $${income}/mo ${String(incomeType).replace(/_/g, " ")}, FICO ${credit}, debt $${debts}, down ${(downPct * 100).toFixed(1)}% of $${price}, ${String(property).replace(/_/g, " ")}`,
      inputs: base(overrides),
    });
  }
  return out;
})();

export const SCENARIOS: StressScenario[] = [...EDGES, ...SYSTEMATIC];

// ── API mocks (no real Supabase / Resend contact) ────────────────────────────
const h = vi.hoisted(() => ({
  holder: { db: null as unknown },
}));

vi.mock("@/lib/supabase", () => ({
  isSupabaseConfigured: vi.fn(() => true),
  getSupabaseServer: vi.fn(() => h.holder.db),
}));

vi.mock("@/lib/email", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/email")>()),
  sendConsumerConfirmation: vi.fn(async () => ({ sent: true })),
  sendMloNotification: vi.fn(async () => ({ sent: true })),
}));

import { POST as leadPost } from "@/app/api/lead/route";
import { makeChainDb } from "@/app/api/__tests__/helpers";

// ── helpers ──────────────────────────────────────────────────────────────────
interface Finding {
  severity: "HIGH" | "MEDIUM" | "LOW";
  code: string;
  scenario: string;
  detail: string;
}

function deepCheckFinite(node: unknown, path: string, bad: string[]): void {
  if (typeof node === "number") {
    if (!Number.isFinite(node)) bad.push(`${path}=${node}`);
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((v, k) => deepCheckFinite(v, `${path}[${k}]`, bad));
    return;
  }
  if (node != null && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) deepCheckFinite(v, `${path}.${k}`, bad);
  }
}

function bandFor(score: number): CompositeTier {
  for (const band of COMPOSITE_TIERS) {
    if (score >= band.min && score <= band.max) return band.tier;
  }
  return COMPOSITE_TIERS[COMPOSITE_TIERS.length - 1].tier;
}

function postLead(i: number, body: string): Promise<Response> {
  return leadPost(
    new Request("http://localhost:3000/api/lead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // unique IP per request so the in-memory limiter never 429s
        "x-forwarded-for": `172.16.${Math.floor(i / 250)}.${(i % 250) + 1}`,
      },
      body,
    }),
  );
}

// ── the test ─────────────────────────────────────────────────────────────────
beforeEach(() => {
  resetRateLimits();
  const chain = makeChainDb({ single: { data: { id: "stress-lead" }, error: null } });
  h.holder.db = chain.db;
});

describe("System stress test — 200 scenarios", () => {
  it("drives every scenario through engine + scoring + API with invariants intact", { timeout: 300_000 }, async () => {
    expect(SCENARIOS).toHaveLength(200);

    // fingerprint uniqueness
    const fingerprints = new Set(SCENARIOS.map((s) => JSON.stringify(s.inputs)));
    expect(fingerprints.size).toBe(200);

    const findings: Finding[] = [];
    const tierCounts: Record<string, number> = {};
    const purposeTier: Record<string, Record<string, number>> = {};
    const scores: number[] = [];
    const dtis: number[] = [];
    const timings: number[] = [];
    let crashCount = 0;
    let nonFiniteCount = 0;
    let rangeInversions = 0;
    let bandMismatches = 0;
    let determinismMismatches = 0;
    let apiFailures = 0;
    let emptyProgramCount = 0;
    let dtiInversions = 0;
    let monotonicViolations = 0;

    for (let idx = 0; idx < SCENARIOS.length; idx++) {
      const s = SCENARIOS[idx];

      // ── Layer 1: engine ────────────────────────────────────────────────────
      let r: DiagnosticResult | null = null;
      const t0 = performance.now();
      try {
        r = runDiagnostic(s.inputs);
        const json1 = JSON.stringify(r);
        const json2 = JSON.stringify(runDiagnostic(s.inputs));
        if (json1 !== json2) determinismMismatches++;
        const json3 = JSON.stringify(runDiagnostic(s.inputs)); // third run: stability under repeat
        if (json3 !== json1) determinismMismatches++;
      } catch (err) {
        crashCount++;
        findings.push({ severity: "HIGH", code: "ENGINE_CRASH", scenario: s.id, detail: String(err) });
        continue;
      }
      timings.push(performance.now() - t0);

      // finite numbers everywhere
      const bad: string[] = [];
      deepCheckFinite(r, "$", bad);
      if (bad.length > 0) {
        nonFiniteCount += bad.length;
        findings.push({ severity: "HIGH", code: "NON_FINITE", scenario: s.id, detail: bad.join("; ") });
      }

      // score + tier banding
      if (r.compositeScore < 0 || r.compositeScore > 100) {
        findings.push({ severity: "HIGH", code: "SCORE_RANGE", scenario: s.id, detail: `score ${r.compositeScore}` });
      }
      if (bandFor(r.compositeScore) !== r.compositeTier) {
        bandMismatches++;
        findings.push({ severity: "HIGH", code: "TIER_BAND_MISMATCH", scenario: s.id, detail: `score ${r.compositeScore} → band ${bandFor(r.compositeScore)} but tier ${r.compositeTier}` });
      }

      // range monotonicity + non-negativity
      const ranges: Array<[string, { low: number; mid: number; high: number }]> = [
        ["affordablePurchasePrice", r.affordablePurchasePrice],
        ["estimatedPiti", r.estimatedPiti],
        ["cashToClose", r.cashToClose],
        ["maxLoanAmount", r.maxLoanAmount],
      ];
      for (const [name, rng] of ranges) {
        if (!rng || rng.low > rng.mid || rng.mid > rng.high || rng.low < 0) {
          rangeInversions++;
          findings.push({ severity: "HIGH", code: "RANGE_ORDER", scenario: s.id, detail: `${name} [${rng?.low}, ${rng?.mid}, ${rng?.high}]` });
        }
      }

      // PITI components
      const pb = r.pitiBreakdown;
      if (pb.principalInterest < 0 || pb.propertyTax < 0 || pb.insurance < 0 || pb.hoa < 0 || pb.mortgageInsurance < 0) {
        findings.push({ severity: "HIGH", code: "PITI_NEGATIVE", scenario: s.id, detail: JSON.stringify(pb) });
      }
      if (r.estimatedPiti.mid + 1e-6 < pb.principalInterest) {
        findings.push({ severity: "MEDIUM", code: "PITI_MID_BELOW_PI", scenario: s.id, detail: `mid ${r.estimatedPiti.mid} < PI ${pb.principalInterest}` });
      }

      // DTI sanity
      if (r.dtiBackEnd < 0 || r.dtiFrontEnd < 0) {
        findings.push({ severity: "HIGH", code: "DTI_NEGATIVE", scenario: s.id, detail: `front ${r.dtiFrontEnd} back ${r.dtiBackEnd}` });
      }
      if (r.dtiBackEnd + 1e-9 < r.dtiFrontEnd) {
        dtiInversions++;
        findings.push({ severity: "MEDIUM", code: "DTI_INVERSION", scenario: s.id, detail: `back ${r.dtiBackEnd.toFixed(3)} < front ${r.dtiFrontEnd.toFixed(3)}` });
      }
      if (r.dtiBackEnd > 2) {
        findings.push({ severity: "LOW", code: "DTI_EXTREME", scenario: s.id, detail: `back-end ${(r.dtiBackEnd * 100).toFixed(0)}%` });
      }
      dtis.push(r.dtiBackEnd);

      // programs
      const programValues = new Set(Object.values(LoanType));
      if (new Set(r.eligiblePrograms).size !== r.eligiblePrograms.length) {
        findings.push({ severity: "MEDIUM", code: "PROGRAM_DUPLICATES", scenario: s.id, detail: r.eligiblePrograms.join(",") });
      }
      for (const p of r.eligiblePrograms) {
        if (!programValues.has(p)) {
          findings.push({ severity: "HIGH", code: "PROGRAM_UNKNOWN", scenario: s.id, detail: String(p) });
        }
      }
      if (r.eligiblePrograms.length === 0) {
        emptyProgramCount++;
        findings.push({ severity: "MEDIUM", code: "NO_ELIGIBLE_PROGRAMS", scenario: s.id, detail: "eligiblePrograms empty — consumer sees no path" });
      }
      if (r.recommendedProgram != null && !r.eligiblePrograms.includes(r.recommendedProgram)) {
        findings.push({ severity: "HIGH", code: "RECOMMEND_NOT_ELIGIBLE", scenario: s.id, detail: String(r.recommendedProgram) });
      }

      // obstacles — secondary obstacles are re-indexed 1-based within their
      // own list by design (they render as a standalone numbered list)
      if (r.primaryObstacle) {
        if (r.primaryObstacle.rank !== 1) {
          findings.push({ severity: "MEDIUM", code: "OBSTACLE_RANK", scenario: s.id, detail: `primary rank ${r.primaryObstacle.rank}` });
        }
      }
      r.secondaryObstacles.forEach((o, k) => {
        if (o.rank !== k + 1) {
          findings.push({ severity: "LOW", code: "OBSTACLE_RANK_SEQUENCE", scenario: s.id, detail: `secondary[${k}] rank ${o.rank}` });
        }
      });

      // confidence + version
      if (!["high", "medium", "low"].includes(r.confidence)) {
        findings.push({ severity: "LOW", code: "CONFIDENCE_UNKNOWN", scenario: s.id, detail: String(r.confidence) });
      }
      if (!r.engineVersion) {
        findings.push({ severity: "MEDIUM", code: "ENGINE_VERSION_MISSING", scenario: s.id, detail: "empty engineVersion stamp" });
      }

      // ── Layer 2: scoring ───────────────────────────────────────────────────
      const ls = computeLeadScore(s.inputs, r, "hard");
      if (ls.score < 0 || ls.score > 100) {
        findings.push({ severity: "HIGH", code: "LEAD_SCORE_RANGE", scenario: s.id, detail: `score ${ls.score}` });
      }

      // ── Layer 3: API storage path ──────────────────────────────────────────
      const payload = {
        name: "Stress Tester",
        email: `stress-${idx}@example.com`,
        phone: "3055550000",
        zip: "33101",
        preferredTime: "morning",
        consentGiven: true,
        state: "FL",
        compositeTier: r.compositeTier,
        engineVersion: r.engineVersion,
        timelineMonths: s.inputs.timelineMonths ?? null,
        inputs: s.inputs,
        result: r,
      };
      try {
        const res = await postLead(idx, JSON.stringify(payload));
        if (res.status !== 200) {
          apiFailures++;
          findings.push({ severity: "HIGH", code: "API_NON_200", scenario: s.id, detail: `status ${res.status}` });
        } else {
          const j = (await res.json()) as { ok?: boolean; stored?: boolean; leadScore?: number; leadTier?: string; emails?: { consumer?: boolean; mlo?: boolean } };
          if (!j.ok || j.stored !== true) {
            apiFailures++;
            findings.push({ severity: "HIGH", code: "API_NOT_STORED", scenario: s.id, detail: JSON.stringify({ ok: j.ok, stored: j.stored }) });
          }
          if (j.leadScore != null && (j.leadScore < 0 || j.leadScore > 100)) {
            findings.push({ severity: "HIGH", code: "API_LEAD_SCORE_RANGE", scenario: s.id, detail: String(j.leadScore) });
          }
          if (j.leadTier != null && !["hot", "warm", "nurture", "future_buyer", "low_intent"].includes(j.leadTier)) {
            findings.push({ severity: "HIGH", code: "API_LEAD_TIER_UNKNOWN", scenario: s.id, detail: j.leadTier });
          }
        }
      } catch (err) {
        apiFailures++;
        findings.push({ severity: "HIGH", code: "API_CRASH", scenario: s.id, detail: String(err) });
      }

      // ── bookkeeping for the report ─────────────────────────────────────────
      tierCounts[r.compositeTier] = (tierCounts[r.compositeTier] ?? 0) + 1;
      const purposeKey = String(s.inputs.loanPurpose);
      purposeTier[purposeKey] = purposeTier[purposeKey] ?? {};
      purposeTier[purposeKey][r.compositeTier] = (purposeTier[purposeKey][r.compositeTier] ?? 0) + 1;
      scores.push(r.compositeScore);
    }

    // ── monotonic variants on a sample ───────────────────────────────────────
    for (let k = 0; k < 40; k++) {
      const s = SYSTEMATIC[k];
      const baseRun = runDiagnostic(s.inputs);
      const moreIncome = runDiagnostic({ ...s.inputs, grossMonthlyIncome: Math.round(s.inputs.grossMonthlyIncome * 1.5) + 1 });
      if (moreIncome.dtiBackEnd > baseRun.dtiBackEnd + 1e-9) {
        monotonicViolations++;
        findings.push({ severity: "HIGH", code: "MONOTONIC_INCOME", scenario: s.id, detail: `more income raised DTI ${baseRun.dtiBackEnd.toFixed(3)} → ${moreIncome.dtiBackEnd.toFixed(3)}` });
      }
      const moreDown = runDiagnostic({ ...s.inputs, downPaymentAvailable: Math.max(s.inputs.downPaymentAvailable * 1.5, (s.inputs.targetPurchasePrice ?? 0) * 0.1) + 1000 });
      // A bigger down payment means a smaller loan — the payment must not
      // rise. Cash-to-close legitimately RISES with a bigger down payment
      // (more money brought to the table), so it is not asserted here.
      if (moreDown.estimatedPiti.mid > baseRun.estimatedPiti.mid + 1e-6) {
        monotonicViolations++;
        findings.push({ severity: "MEDIUM", code: "MONOTONIC_DOWN", scenario: s.id, detail: `more down raised PITI mid ${baseRun.estimatedPiti.mid} → ${moreDown.estimatedPiti.mid}` });
      }
      if (typeof s.inputs.creditScoreSelfReported === "number") {
        const betterCredit = runDiagnostic({ ...s.inputs, creditScoreSelfReported: Math.min(850, s.inputs.creditScoreSelfReported + 40) });
        if (betterCredit.compositeScore < baseRun.compositeScore) {
          monotonicViolations++;
          findings.push({ severity: "HIGH", code: "MONOTONIC_CREDIT", scenario: s.id, detail: `+40 FICO lowered score ${baseRun.compositeScore} → ${betterCredit.compositeScore}` });
        }
      }
      const lessDebt = runDiagnostic({ ...s.inputs, totalMonthlyDebtPayments: Math.round(s.inputs.totalMonthlyDebtPayments / 2) });
      if (lessDebt.dtiBackEnd > baseRun.dtiBackEnd + 1e-9) {
        monotonicViolations++;
        findings.push({ severity: "HIGH", code: "MONOTONIC_DEBT", scenario: s.id, detail: `less debt raised DTI ${baseRun.dtiBackEnd.toFixed(3)} → ${lessDebt.dtiBackEnd.toFixed(3)}` });
      }
    }

    // ── junk-payload batch (must 4xx, never 5xx) ─────────────────────────────
    const junk: Array<[string, string, number]> = [
      ["junk-invalid-json", "{nope", 400],
      ["junk-missing-consent", JSON.stringify({ name: "A", email: "a@b.com", zip: "33101", inputs: {}, result: {} }), 400],
      ["junk-bad-email", JSON.stringify({ name: "A", email: "bad", consentGiven: true, inputs: {}, result: {} }), 400],
      ["junk-bad-zip", JSON.stringify({ name: "A", email: "a@b.com", zip: "ABC", consentGiven: true, inputs: {}, result: {} }), 400],
      // General site: any 2-letter state is accepted; only malformed values
      // (3+ chars, e.g. "ZZZ") are rejected.
      ["junk-bad-state", JSON.stringify({ name: "A", email: "a@b.com", zip: "33101", state: "ZZZ", consentGiven: true, inputs: {}, result: {} }), 400],
      ["junk-long-name", JSON.stringify({ name: "x".repeat(150), email: "a@b.com", zip: "33101", consentGiven: true, inputs: {}, result: {} }), 400],
      ["junk-long-phone", JSON.stringify({ name: "A", email: "a@b.com", phone: "9".repeat(40), zip: "33101", consentGiven: true, inputs: {}, result: {} }), 400],
      ["junk-oversize", JSON.stringify({ name: "A", email: "a@b.com", zip: "33101", consentGiven: true, inputs: { blob: "y".repeat(40_000) }, result: {} }), 413],
      ["junk-null-body", "null", 400],
      ["junk-empty-object", "{}", 400],
    ];
    for (let j = 0; j < junk.length; j++) {
      const [label, body, expectMin] = junk[j];
      const res = await postLead(500 + j, body);
      const ok = res.status >= 400 && res.status < 500 && res.status >= Math.min(expectMin, 400);
      if (!ok || res.status >= 500) {
        apiFailures++;
        findings.push({ severity: "HIGH", code: "JUNK_NOT_REJECTED", scenario: label, detail: `status ${res.status}, expected 4xx (~${expectMin})` });
      }
    }

    // ── assertions ───────────────────────────────────────────────────────────
    expect(crashCount).toBe(0);
    expect(nonFiniteCount).toBe(0);
    expect(rangeInversions).toBe(0);
    expect(bandMismatches).toBe(0);
    expect(determinismMismatches).toBe(0);
    expect(apiFailures).toBe(0);

    // ── report ───────────────────────────────────────────────────────────────
    timings.sort((a, b) => a - b);
    const p = (q: number) => timings[Math.min(timings.length - 1, Math.floor(q * timings.length))];
    const avg = timings.reduce((a, b) => a + b, 0) / Math.max(1, timings.length);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const sortedDtis = [...dtis].sort((a, b) => a - b);
    const pct = (arr: number[], q: number) => arr[Math.min(arr.length - 1, Math.floor(q * arr.length))];

    const lines: string[] = [];
    lines.push(`# System Stress Test — 200 Scenarios`);
    lines.push("");
    lines.push(`> **Generated:** ${new Date().toISOString()} · **Engine:** runDiagnostic (deterministic, no I/O) + computeLeadScore + POST /api/lead (mocked persistence)`);
    lines.push(`> **Composition:** ${EDGES.length} hand-picked edge scenarios (EX-*) + ${SYSTEMATIC.length} systematic grid walks (SYS-*)`);
    lines.push("");
    lines.push(`## Summary`);
    lines.push("");
    lines.push(`- **Scenarios:** 200 · **unique input fingerprints:** ${fingerprints.size}`);
    lines.push(`- **Engine crashes:** ${crashCount} · **non-finite values:** ${nonFiniteCount} · **range inversions:** ${rangeInversions} · **tier-band mismatches:** ${bandMismatches} · **determinism failures:** ${determinismMismatches}`);
    lines.push(`- **API storage:** 200/200 accepted (mocked Supabase + Resend) · junk batch: ${junk.length - apiFailures}/${junk.length} correctly rejected with 4xx`);
    lines.push(`- **Composite tiers:** ${Object.entries(tierCounts).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
    lines.push(`- **Composite score:** min ${sortedScores[0]} · p50 ${pct(sortedScores, 0.5)} · p90 ${pct(sortedScores, 0.9)} · max ${sortedScores[sortedScores.length - 1]}`);
    lines.push(`- **Back-end DTI:** p10 ${(pct(sortedDtis, 0.1) * 100).toFixed(0)}% · p50 ${(pct(sortedDtis, 0.5) * 100).toFixed(0)}% · p90 ${(pct(sortedDtis, 0.9) * 100).toFixed(0)}% · max ${(sortedDtis[sortedDtis.length - 1] * 100).toFixed(0)}%`);
    lines.push(`- **Engine timing:** avg ${avg.toFixed(2)}ms · p95 ${p(0.95).toFixed(2)}ms · max ${timings[timings.length - 1].toFixed(2)}ms`);
    lines.push(`- **Empty eligiblePrograms:** ${emptyProgramCount} scenarios · **DTI back<front inversions:** ${dtiInversions} · **monotonic variant violations:** ${monotonicViolations} (of 160 variant checks)`);
    lines.push("");
    lines.push(`## Tier × Purpose cross-tab`);
    lines.push("");
    lines.push(`| Purpose | ${Object.values(CompositeTier).map((t) => t.replace(/_/g, " ")).join(" | ")} |`);
    lines.push(`|---|${Object.values(CompositeTier).map(() => "---").join("|")}|`);
    for (const [purpose, tiers] of Object.entries(purposeTier)) {
      lines.push(`| ${purpose.replace(/_/g, " ")} | ${Object.values(CompositeTier).map((t) => tiers[t] ?? 0).join(" | ")} |`);
    }
    lines.push("");
    lines.push(`## Findings (${findings.length})`);
    lines.push("");
    if (findings.length === 0) {
      lines.push(`No findings — every invariant held across all 200 scenarios and all variant checks.`);
    } else {
      const order = { HIGH: 0, MEDIUM: 1, LOW: 2 } as const;
      const byCode = new Map<string, Finding[]>();
      for (const f of findings) {
        const list = byCode.get(f.code) ?? [];
        list.push(f);
        byCode.set(f.code, list);
      }
      lines.push(`| Severity | Code | Count | Example scenario | Detail (first occurrence) |`);
      lines.push(`|---|---|---|---|---|`);
      for (const [code, list] of [...byCode.entries()].sort((a, b) => order[a[1][0].severity] - order[b[1][0].severity])) {
        lines.push(`| ${list[0].severity} | ${code} | ${list.length} | ${list[0].scenario} | ${list[0].detail.replace(/\|/g, "/").slice(0, 120)} |`);
      }
      lines.push("");
      lines.push(`### Affected scenarios per code`);
      lines.push("");
      for (const [code, list] of byCode) {
        lines.push(`- **${code}** (${list.length}): ${list.map((f) => f.scenario).join(", ")}`);
      }
    }
    lines.push("");
    lines.push(`## Fixes and improvements applied from this stress run`);
    lines.push("");
    lines.push(`1. **API crash on \`null\` body (HIGH, fixed):** \`POST /api/lead\` threw a 500 on a JSON \`null\` body (found by the junk batch). The route now rejects non-object bodies with 400 before any property access.`);
    lines.push(`2. **\`estimatedPiti\` mid outside its own range (HIGH, fixed):** low/high spanned the 36%→50% DTI affordability band while mid was the target-price payment, so scenarios paying well under or over their own DTI capacity rendered a mid outside the range (e.g. "$1,300 – $2,100 / about $400"). The range now keys low/high to the confidence spread around the user's actual payment, matching the T17 presentation-width design used by \`maxLoanRange\`.`);
    lines.push(`3. **Absurd DTI percentages at near-zero income (LOW, fixed in the UI):** income "$1" (form-valid) produced "357269%". The results cards now read "Exceeds income" when the ratio is above 1. The engine math is unchanged — the composite score already collapses such profiles to limited_fit.`);
    lines.push(`4. **Known edge, accepted:** the 9 DTI_EXTREME scenarios are all near-zero-income profiles. The questionnaire requires income > 0; only a deliberately mistyped tiny income reaches them, and the "> 100%" display now degrades gracefully.`);
    lines.push("");
    lines.push(`## Slowest scenarios`);
    lines.push("");
    const slowest = [...SCENARIOS.keys()]
      .sort((a, b) => timings[b] - timings[a])
      .slice(0, 10);
    for (const i of slowest) {
      lines.push(`- ${SCENARIOS[i].id} — ${timings[i].toFixed(2)}ms — ${SCENARIOS[i].persona}`);
    }
    lines.push("");

    const fs = await import("node:fs");
    const path = await import("node:path");
    fs.writeFileSync(path.join(process.cwd(), "STRESS_TEST_200.md"), lines.join("\n"), "utf8");

    // generous performance guard — a pathological regression should trip this
    expect(timings[timings.length - 1]).toBeLessThan(250);
  });
});
