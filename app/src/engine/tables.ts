/**
 * Static lookup tables ported from `04-Diagnostic-Engine/thresholds.md` (T1–T20)
 * and `calculations.md`. All numbers are illustrative planning values —
 * production must confirm against current-year rate sheets and program guides.
 */

import { CompositeTier } from "./types";

// ---------------------------------------------------------------------------
// T1. FICO bands & program floors
// ---------------------------------------------------------------------------
export const FICO_BANDS: { min: number; max: number; tier: string; subScore: number }[] = [
  { min: 760, max: 850, tier: "exceptional", subScore: 100 },
  { min: 720, max: 759, tier: "strong", subScore: 90 },
  { min: 680, max: 719, tier: "workable", subScore: 75 },
  { min: 620, max: 679, tier: "thin", subScore: 55 },
  { min: 580, max: 619, tier: "fha_only", subScore: 35 },
  { min: 500, max: 579, tier: "fha_10pct", subScore: 20 },
  { min: 0, max: 499, tier: "ineligible", subScore: 5 },
];

export const PROGRAM_MIN_FICO: Record<string, number | null> = {
  conventional_conf: 620,
  conventional_jumbo: 700,
  fha: 580, // 500 with 10% down
  va: null, // no official min; lender overlay 620–640
  usda: 640,
  non_qm: 500,
};

// ---------------------------------------------------------------------------
// T3. Minimum down payment % by program (purchase)
// ---------------------------------------------------------------------------
export const MIN_DOWN_PCT: Record<string, number> = {
  conventional_conf: 3,
  conventional_jumbo: 5,
  fha: 3.5,
  va: 0,
  usda: 0,
  unknown: 3.5,
};

export const FHA_SUB580_MIN_DOWN_PCT = 10;

// ---------------------------------------------------------------------------
// T6/T7. DTI sub-score bands (back-end and front-end)
// ---------------------------------------------------------------------------
export const DTI_SUBSCORE_BANDS: { max: number; tier: string; score: number }[] = [
  { max: 30, tier: "excellent", score: 100 },
  { max: 36, tier: "strong", score: 90 },
  { max: 43, tier: "workable", score: 75 },
  { max: 50, tier: "stretched", score: 50 },
  { max: 55, tier: "obstacle", score: 30 },
  { max: 999, tier: "extreme", score: 15 },
];

export const FRONT_END_SUBSCORE_BANDS: { max: number; score: number }[] = [
  { max: 25, score: 100 },
  { max: 28, score: 90 },
  { max: 31, score: 75 },
  { max: 35, score: 60 },
  { max: 40, score: 40 },
  { max: 50, score: 20 },
  { max: 999, score: 5 },
];

// ---------------------------------------------------------------------------
// T10. Credit event waiting periods (months)
// ---------------------------------------------------------------------------
export const WAITING_PERIOD_MONTHS: Record<string, Record<string, number>> = {
  bk_ch7: { conventional: 48, fha: 24, va: 24, usda: 36 },
  bk_ch13: { conventional: 48, fha: 12, va: 12, usda: 36 },
  foreclosure: { conventional: 84, fha: 36, va: 24, usda: 36 },
  short_sale: { conventional: 48, fha: 36, va: 24, usda: 36 },
  deeds_in_lieu: { conventional: 48, fha: 36, va: 24, usda: 36 },
  modification: { conventional: 24, fha: 12, va: 12, usda: 12 },
};

// ---------------------------------------------------------------------------
// T11. Tax & insurance defaults
// ---------------------------------------------------------------------------
export const PROPERTY_TAX_EFFECTIVE_RATE_BY_STATE: Record<string, number> = {
  AL: 0.39, AK: 1.04, AZ: 0.63, AR: 0.62, CA: 0.75,
  CO: 0.55, CT: 1.79, DE: 0.61, FL: 0.91, GA: 0.92,
  HI: 0.32, ID: 0.67, IL: 2.08, IN: 0.84, IA: 1.52,
  KS: 1.34, KY: 0.83, LA: 0.56, ME: 1.24, MD: 1.05,
  MA: 1.14, MI: 1.38, MN: 1.11, MS: 0.75, MO: 0.97,
  MT: 0.74, NE: 1.63, NV: 0.59, NH: 1.93, NJ: 2.23,
  NM: 0.67, NY: 1.40, NC: 0.82, ND: 0.98, OH: 1.59,
  OK: 0.89, OR: 0.93, PA: 1.49, RI: 1.40, SC: 0.57,
  SD: 1.17, TN: 0.67, TX: 1.68, UT: 0.57, VT: 1.83,
  VA: 0.82, WA: 0.87, WV: 0.55, WI: 1.61, WY: 0.56,
  DC: 0.62,
};
export const PROPERTY_TAX_DEFAULT_RATE = 1.10;

export const HAZARD_INSURANCE_ANNUAL_DEFAULT = 1500;
export const FLOOD_INSURANCE_ANNUAL_DEFAULT = 1000;
export const CONDO_HOA_MONTHLY_DEFAULT = 350;

// ---------------------------------------------------------------------------
// T12. MI / MIP / funding fees
// ---------------------------------------------------------------------------
// Conventional PMI annual % by FICO bucket and LTV bucket.
export const CONVENTIONAL_PMI_RATES: Record<string, Record<string, number>> = {
  "760+": { "97.01-100": 0.32, "95.01-97": 0.20, "90.01-95": 0.16, "85.01-90": 0.12 },
  "720-759": { "97.01-100": 0.45, "95.01-97": 0.31, "90.01-95": 0.18, "85.01-90": 0.13 },
  "680-719": { "97.01-100": 0.85, "95.01-97": 0.51, "90.01-95": 0.33, "85.01-90": 0.22 },
  "620-679": { "97.01-100": 1.40, "95.01-97": 0.85, "90.01-95": 0.62, "85.01-90": 0.40 },
};

export const FHA_UFMIP_PCT = 1.75;
export const FHA_ANNUAL_MIP_GT90 = 0.55; // % annual, >90% LTV 30yr
export const FHA_ANNUAL_MIP_LTE90 = 0.50;
export const USDA_ANNUAL_GUARANTEE_PCT = 0.35;

// ---------------------------------------------------------------------------
// T13. Cash-to-close benchmarks
// ---------------------------------------------------------------------------
export const CLOSING_COST_MID_PCT: Record<string, number> = {
  conventional_conf: 3.0,
  fha: 5.0,
  va: 3.0,
  usda: 4.0,
};

// ---------------------------------------------------------------------------
// T15. Composite tiers — NEUTRAL labels (audit constraint #4)
// ---------------------------------------------------------------------------
export const COMPOSITE_TIERS: {
  min: number;
  max: number;
  tier: CompositeTier;
  message: string;
}[] = [
  {
    min: 85, max: 100, tier: CompositeTier.STRONG_FIT,
    message: "You're in a strong position based on what you shared. A licensed loan originator can take the next step with you whenever you're ready.",
  },
  {
    min: 70, max: 84, tier: CompositeTier.GOOD_FIT,
    message: "You're closer than you may think. A few things are worth tidying up, and the breakdown below shows where.",
  },
  {
    min: 55, max: 69, tier: CompositeTier.WORKABLE,
    message: "There's a workable path here. Some factors may affect pricing or suggest a co-borrower, gift funds, or a different down payment.",
  },
  {
    min: 40, max: 54, tier: CompositeTier.SOME_CONSIDERATIONS,
    message: "There are real things to work on — and real programs that work with that. The steps below are where we'd start.",
  },
  {
    min: 0, max: 39, tier: CompositeTier.LIMITED_FIT,
    message: "Being turned down is not the end of the road. Below is a starting point — small changes here often move the needle more than people expect.",
  },
];

// ---------------------------------------------------------------------------
// T16. Category weights for the composite
// ---------------------------------------------------------------------------
export const CATEGORY_WEIGHTS = {
  debt: 0.25,
  credit: 0.25,
  income: 0.20,
  cash: 0.15,
  payment: 0.10,
  property: 0.03,
  documentation: 0.02,
} as const;

// ---------------------------------------------------------------------------
// T17. Output range width by confidence
// ---------------------------------------------------------------------------
export const RANGE_WIDTH_BY_CONFIDENCE: Record<string, { loanSpreadPct: number; priceSpreadPct: number }> = {
  high: { loanSpreadPct: 10, priceSpreadPct: 12 },
  medium: { loanSpreadPct: 18, priceSpreadPct: 22 },
  low: { loanSpreadPct: 28, priceSpreadPct: 35 },
};

// ---------------------------------------------------------------------------
// T14. Credit composite weights
// ---------------------------------------------------------------------------
export const CREDIT_COMPOSITE_WEIGHTS = {
  ficoBand: 0.60,
  waitingPeriodClear: 0.25,
  no60DayLate24mo: 0.10,
  collectionsClean: 0.05,
} as const;

// ---------------------------------------------------------------------------
// Assumed rate (calculations.md §12) — illustrative national averages.
// Production must use a live rate-sheet source.
// ---------------------------------------------------------------------------
const BASE_RATES: Record<string, number> = {
  conventional_conf_30: 7.0,
  conventional_conf_15: 6.25,
  fha_30: 6.75,
  va_30: 6.75,
  usda_30: 6.85,
  conventional_jumbo_30: 7.25,
};

// ---------------------------------------------------------------------------
// Self-reported FICO conservative haircut (rule-engine-spec §4.1).
// DISCLOSED on the results page (audit constraint #11).
// ---------------------------------------------------------------------------
export const SELF_REPORTED_FICO_HAIRCUT = 20;

export const CREDIT_TIER_TO_FICO: Record<string, number> = {
  poor: 580,
  fair: 640,
  good: 700,
  excellent: 760,
};

export { BASE_RATES };
