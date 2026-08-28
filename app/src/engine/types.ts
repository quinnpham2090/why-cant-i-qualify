/**
 * Core types for the deterministic mortgage-readiness diagnostic engine.
 *
 * COMPLIANCE NOTES (binding — see EXECUTION-PLAN.md §0):
 *  - No credit pull of any kind. `consent_to_soft_pull` was intentionally NOT
 *    ported from the Python spec; credit input is self-reported only.
 *  - Composite tiers use NEUTRAL labels (no "approved"/"denied"/"guaranteed").
 *  - Every DiagnosticResult carries `assumptions_used` so the UI can disclose
 *    the hidden haircuts/assumptions (MAP Rule material-omission protection).
 *  - Pure functions, no I/O. Safe to run on server or client.
 */

export enum LoanPurpose {
  PURCHASE = "purchase",
  REFI_RATE_TERM = "refinance_rate_term",
  REFI_CASH_OUT = "refinance_cash_out",
}

export enum PropertyUse {
  PRIMARY = "primary",
  SECOND_HOME = "second_home",
  INVESTMENT = "investment",
}

export enum LoanType {
  CONVENTIONAL_CONF = "conventional_conf",
  CONVENTIONAL_JUMBO = "conventional_jumbo",
  FHA = "fha",
  VA = "va",
  USDA = "usda",
  UNKNOWN = "unknown",
}

export enum IncomeType {
  W2 = "w2",
  SELF_EMPLOYED = "self_employed",
  COMMISSION = "commission",
  VARIABLE_HOURLY = "variable_hourly",
  RETIRED_FIXED = "retired_fixed",
  SOCIAL_SECURITY = "social_security",
  MIXED = "mixed",
  UNKNOWN = "unknown",
}

export enum PropertyType {
  SFR = "sfr",
  CONDO_WARRANTABLE = "condo_warrantable",
  CONDO_NONWARRANTABLE = "condo_nonwarrantable",
  TOWNHOME = "townhome",
  MANUFACTURED = "manufactured",
  MULTI_2_4 = "multi_2_4",
  UNKNOWN = "unknown",
}

export enum CreditEvent {
  NONE = "none",
  BK_CH7 = "bk_ch7",
  BK_CH13 = "bk_ch13",
  FORECLOSURE = "foreclosure",
  SHORT_SALE = "short_sale",
  DEEDS_IN_LIEU = "deeds_in_lieu",
  MODIFICATION = "modification",
}

/** Coarse self-reported band used when the consumer doesn't know a FICO number. */
export enum CreditTier {
  UNKNOWN = "unknown",
  POOR = "poor",
  FAIR = "fair",
  GOOD = "good",
  EXCELLENT = "excellent",
}

export type DebtKind =
  | "credit_card"
  | "revolving_line"
  | "auto_loan"
  | "student_loan_repayment"
  | "student_loan_deferred"
  | "alimony_paid"
  | "child_support_paid"
  | "thirty_day_account"
  | "cosigned_secondary"
  | "other";

export interface Debt {
  kind: DebtKind;
  actualMonthlyPayment?: number;
  minDue?: number;
  balance?: number;
  fullyAmortPayment?: number;
  courtOrderedAmount?: number;
  monthsBehind?: number;
  otherPartyOnTime12mo?: boolean;
}

export interface EngineInputs {
  // Required
  loanPurpose: LoanPurpose;
  propertyUse: PropertyUse;
  loanType: LoanType;
  grossMonthlyIncome: number;
  incomeType: IncomeType;
  /** Self-reported FICO 300–850, or null if unknown. NEVER a bureau pull. */
  creditScoreSelfReported: number | null;
  creditTierSelfReported: CreditTier | null;
  totalMonthlyDebtPayments: number;
  downPaymentAvailable: number;
  targetPurchasePrice: number | null;

  // Strongly recommended
  estimatedHomeValue?: number | null; // refi
  state?: string | null; // "CA", "TX", ... V1 geofenced to FL in the UI layer
  propertyType?: PropertyType;
  creditEvent?: CreditEvent;
  yearsSinceCreditEvent?: number | null;
  liquidAssetsAfterClose?: number | null;
  employmentYearsInField?: number | null;
  hasHoa?: boolean;
  monthlyHoaFee?: number | null;
  isFirstTimeBuyer?: boolean;
  hasGiftFundsDocumented?: boolean;
  giftFundsAmount?: number | null;
  hasUnexplainedLargeDeposits?: boolean;
  had60DayLate24mo?: boolean;
  had30DayLate12mo?: boolean;
  collectionsUnder2k?: boolean;
  selfEmployedNetIncome2yrAvg?: number | null;
  isInFloodZone?: boolean;

  // Co-borrower (optional, simple weighted)
  coBorrowerIncome?: number | null;
  coBorrowerCredit?: number | null;

  // Itemized debts (optional; falls back to totalMonthlyDebtPayments)
  debts?: Debt[];
}

export interface Range {
  low: number;
  mid: number;
  high: number;
}

/**
 * NEUTRAL composite tiers (audit constraint #4). Internal keys only —
 * user-facing strings live in `labels.ts` and are copy-linted.
 */
export enum CompositeTier {
  STRONG_FIT = "strong_fit", // 85–100
  GOOD_FIT = "good_fit", // 70–84
  WORKABLE = "workable", // 55–69
  SOME_CONSIDERATIONS = "some_considerations", // 40–54
  LIMITED_FIT = "limited_fit", // 0–39
}

export interface SubScore {
  category: string;
  score: number;
  tier: string;
  summary: string;
  redFlags: string[];
}

export type FixHorizon =
  | "immediate"
  | "0-3 months"
  | "3-12 months"
  | "12+ months"
  | "out_of_user_control";

export interface Obstacle {
  rank: number;
  category: string;
  description: string;
  severity: "primary" | "secondary";
  fixHorizon: FixHorizon;
}

export interface Strength {
  rank: number;
  category: string;
  description: string;
}

export type Confidence = "high" | "medium" | "low";

/**
 * A single disclosed assumption/haircut. Rendered on the results page so the
 * consumer sees exactly what the engine assumed (material-omission protection).
 */
export interface Assumption {
  key: string;
  description: string;
}

export interface DiagnosticResult {
  // Numbers
  qualifyingIncome: number;
  maxLoanAmount: Range;
  affordablePurchasePrice: Range;
  estimatedPiti: Range;
  cashToClose: Range;
  dtiBackEnd: number;
  dtiFrontEnd: number;
  reservesMonths: number | null;

  // Scores
  subScores: Record<string, SubScore>;
  compositeScore: number;
  compositeTier: CompositeTier;
  compositeTierMessage: string;

  // Analysis
  primaryObstacle: Obstacle | null;
  secondaryObstacles: Obstacle[];
  strengths: Strength[];

  // Program recommendations
  eligiblePrograms: LoanType[];
  recommendedProgram: LoanType | null;

  // Meta
  confidence: Confidence;
  confidenceReasons: string[];
  disclaimers: string[];
  /** Disclosed assumptions + haircuts (audit constraint #11). */
  assumptionsUsed: Assumption[];
  /** Engine version stamp for MAP 24-month recordkeeping. */
  engineVersion: string;
}
