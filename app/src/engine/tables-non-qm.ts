/**
 * Non-QM program tables — values from RESEARCH_NON_QM.md (Phase A research),
 * with live verification pass 2026-08-28 (FIX_PLAN V1.6 P4).
 *
 * SOURCES (live, accessed 2026-08-28):
 *  - Angel Oak Mortgage Solutions public program pages
 *    (angeloakms.com/programs/pl-loan/, /programs/portfolio-select-mortgage-program/,
 *    /angel-oak-non-qm-condominium-loans/, /programs/bank-statement-mortgage-program/)
 *  - NewFi Wholesale (newfiwholesale.com/programs/cpa-prepared-pl/, /programs/non-qm/)
 *  - Acra Lending (acralending.com/pandl)
 *  - Original corpus: 02-Competitor-Research/angel-oak-mortgage-solutions.md,
 *    FINAL_COMPETITIVE_RESEARCH_REPORT.md, RESEARCH_NON_QM.md
 *
 * Reserves and rate add-ons are broker-portal-only (QuickQuote / BLU / pricer
 * logins); those two fields stay conservative planning values and are
 * disclosed via assumptionsUsed[] wherever the program is surfaced. Every row
 * carries a last-verified stamp for the quarterly refresh cadence
 * (RESEARCH_AND_FIX_PLAN.md §7, FIX_PLAN V1.6 P20).
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
    // Angel Oak P&L program (angeloakms.com/programs/pl-loan/, accessed
    // 2026-08-28): min FICO 640 with 2 months of business bank statements
    // (up to 75% LTV), P&L-only (no bank statements) requires min 720 mid
    // score; up to 80% max LTV at 680+ FICO. NewFi CPA-prepared P&L
    // (newfiwholesale.com/programs/cpa-prepared-pl/, accessed 2026-08-28):
    // up to 80% LTV, Sequoia floor 620. Acra Lending P&L
    // (acralending.com/pandl, accessed 2026-08-28): min 660 FICO, 80% LTV
    // purchase. Engine uses the conservative published floor (640) and the
    // 80% LTV cap common to all three.
    minFico: 640,
    maxLtvPct: 80,
    minDownPct: 20,
    // Reserves and rate add-on are broker-portal-only (Angel Oak QuickQuote,
    // NewFi BLU, Acra pricer): retained at conservative planning values and
    // disclosed via assumptionsUsed[] — see RESEARCH_NON_QM.md §4.
    reservesMonths: 6,
    rateAddOnPct: 1.0,
    maxBackEndDtiPct: 50,
    lastVerified: "2026-08-28",
    verify: false,
    source:
      "Angel Oak P&L Loan page + NewFi CPA P&L + Acra P&L (live 2026-08-28); reserves/rate conservative — broker matrix",
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
    // Angel Oak Non-QM Condominium Loans (angeloakms.com/
    // angel-oak-non-qm-condominium-loans/, accessed 2026-08-28): Bank
    // Statement/Full Doc allows warrantable AND non-warrantable condos up to
    // 90% LTV; DSCR (incl. condotels) up to 85% LTV. Min FICO 640 inherited
    // from the Bank Statement program the condo page explicitly references
    // (angeloakms.com/programs/bank-statement-mortgage-program/). NewFi and
    // Lima One publish no public non-warrantable grid (matrices PDF-only /
    // investor-only) — see RESEARCH_NON_QM.md §4. Engine keeps a conservative
    // 75% LTV floor across lenders (the 90%/85% tiers are FICO- and
    // program-gated at the lender).
    minFico: 640,
    maxLtvPct: 75,
    minDownPct: 25,
    // Post-close borrower reserves and rate add-on are broker-portal-only:
    // conservative planning values, disclosed via assumptionsUsed[].
    reservesMonths: 6,
    rateAddOnPct: 1.75,
    maxBackEndDtiPct: 45,
    lastVerified: "2026-08-28",
    verify: false,
    source:
      "Angel Oak Non-QM Condominium Loans + Bank Statement matrix (live 2026-08-28); reserves/rate conservative — broker matrix",
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
