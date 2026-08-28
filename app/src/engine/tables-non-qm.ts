/**
 * Non-QM program tables — values from RESEARCH_NON_QM.md (Phase A research).
 *
 * SOURCES: primarily Angel Oak Mortgage Solutions published program data
 * captured in `02-Competitor-Research/angel-oak-mortgage-solutions.md`
 * (retail + wholesale sites), corroborated by NewFi / Rocket Pro TPO notes
 * in FINAL_COMPETITIVE_RESEARCH_REPORT.md.
 *
 * ⚠️ Values marked `verify: true` are planning placeholders with no number in
 * the corpus — they MUST be replaced with live lender guidelines before any
 * production reliance. Every row carries a last-verified stamp for the
 * quarterly refresh cadence (RESEARCH_AND_FIX_PLAN.md §7).
 */

export interface NonQmProgram {
  program: string;
  minFico: number;
  maxLtvPct: number;
  minDownPct: number;
  reservesMonths: number;
  /** Typical rate add-on vs. comparable conventional (percentage points). */
  rateAddOnPct: number;
  /** Null = program has no personal DTI requirement (no-ratio). */
  maxBackEndDtiPct: number | null;
  /** Minimum DSCR where applicable (null = not applicable). */
  minDscr?: number | null;
  /** Minimum post-close liquid assets (dollars) where applicable. */
  minLiquidAssets?: number | null;
  /** Asset-depletion divisor in months where applicable. */
  assetDivisorMonths?: number | null;
  lastVerified: string;
  verify: boolean;
  source: string;
}

export const NON_QM_PROGRAMS: Record<string, NonQmProgram> = {
  bank_statement: {
    program: "bank_statement",
    minFico: 640,
    maxLtvPct: 75, // 90% @720+, 80% @680, 75% @640 — engine uses conservative floor
    minDownPct: 25,
    reservesMonths: 6,
    rateAddOnPct: 1.25,
    maxBackEndDtiPct: 50,
    lastVerified: "2026-08-28",
    verify: false,
    source: "Angel Oak Bank Statement matrix (corpus L61/L460)",
  },
  pandl_only: {
    program: "pandl_only",
    minFico: 620,
    maxLtvPct: 80,
    minDownPct: 20,
    reservesMonths: 6,
    rateAddOnPct: 1.0,
    maxBackEndDtiPct: 50,
    lastVerified: "2026-08-28",
    verify: true, // no published numbers in corpus — VERIFY
    source: "Plan placeholder; Angel Oak wholesale program list (corpus L180)",
  },
  dscr: {
    program: "dscr",
    minFico: 680,
    maxLtvPct: 80,
    minDownPct: 20,
    reservesMonths: 6,
    rateAddOnPct: 0.75,
    maxBackEndDtiPct: null, // no personal DTI
    minDscr: 1.0,
    lastVerified: "2026-08-28",
    verify: false,
    source: "Angel Oak Investor Cash Flow (corpus L62/L461)",
  },
  asset_qualifier: {
    program: "asset_qualifier",
    minFico: 700,
    maxLtvPct: 70,
    minDownPct: 30,
    reservesMonths: 12,
    rateAddOnPct: 0.5,
    maxBackEndDtiPct: null, // no DTI — asset-based
    minLiquidAssets: 500000,
    assetDivisorMonths: 84,
    lastVerified: "2026-08-28",
    verify: false,
    source: "Angel Oak Asset Qualifier (corpus L64/L587)",
  },
  itin: {
    program: "itin",
    minFico: 640,
    maxLtvPct: 80,
    minDownPct: 20,
    reservesMonths: 6,
    rateAddOnPct: 1.5,
    maxBackEndDtiPct: 50,
    lastVerified: "2026-08-28",
    verify: false,
    source: "Angel Oak ITIN Mortgage Loan (corpus L66)",
  },
  non_qm_jumbo: {
    program: "non_qm_jumbo",
    minFico: 680,
    maxLtvPct: 80,
    minDownPct: 20,
    reservesMonths: 6,
    rateAddOnPct: 0.75,
    maxBackEndDtiPct: 43,
    lastVerified: "2026-08-28",
    verify: false,
    source: "Angel Oak Platinum Jumbo (corpus L63)",
  },
  non_warrantable: {
    program: "non_warrantable",
    minFico: 660,
    maxLtvPct: 75,
    minDownPct: 25,
    reservesMonths: 6,
    rateAddOnPct: 1.75,
    maxBackEndDtiPct: 45,
    lastVerified: "2026-08-28",
    verify: true, // no published numbers in corpus — VERIFY
    source: "Plan placeholder; agency-exclusion context (corpus L460)",
  },
};

/** Non-QM assumed base rates (annual %). Add rateAddOnPct per program. */
export const NON_QM_BASE_RATE = 7.0;

/** User-facing labels (neutral, copy-lint safe). */
export const NON_QM_PROGRAM_LABELS: Record<string, string> = {
  bank_statement: "Bank statement (12/24-month deposits)",
  pandl_only: "Profit & loss statement",
  dscr: "Investor cash flow (rent-based)",
  asset_qualifier: "Asset-based qualification",
  itin: "ITIN borrower program",
  non_qm_jumbo: "Expanded jumbo",
  non_warrantable: "Non-warrantable condo",
};
