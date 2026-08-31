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
  // Purchase-shaped financing paths that surface the renovation/construction
  // program families (Catalog I). Previously unreachable: the eligibility
  // gate compared `loanPurpose` against string literals that were not enum
  // members, so RENOVATION/CONSTRUCTION_OTC programs could never surface.
  RENOVATION = "renovation",
  CONSTRUCTION_OTC = "construction_otc",
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
  // Agency-adjacent affordable programs (LOAN_PROGRAMS_CATALOG.md A/C)
  HOME_READY = "home_ready", // Fannie HomeReady / Freddie Home Possible (3% down, AMI-limited)
  DPA_ASSISTED_FHA = "dpa_assisted_fha", // FHA + down-payment-assistance second (Chenoa/HFA)
  MCC = "mcc", // Mortgage Credit Certificate stack (tax credit, not a lien)
  // Renovation & construction (Catalog I)
  RENOVATION = "renovation", // FHA 203k / HomeStyle / CHOICERenovation family
  CONSTRUCTION_OTC = "construction_otc", // one-time-close construction-to-perm
  // Non-QM (non-agency) programs — see RESEARCH_NON_QM.md
  BANK_STATEMENT = "bank_statement",
  PANDL_ONLY = "pandl_only",
  DSCR = "dscr",
  ASSET_QUALIFIER = "asset_qualifier",
  ITIN = "itin",
  NON_QM_JUMBO = "non_qm_jumbo",
  NON_WARRANTABLE = "non_warrantable",
  // Foreign national / visa (Catalog E11/E12/F)
  FOREIGN_NATIONAL = "foreign_national", // alt-doc purchase, no US FICO required
  FN_DSCR = "fn_dscr", // investor DSCR for foreign nationals; no income verification
  // Specialty (Catalog B10/J/L/M)
  SECTION_184 = "section_184", // HUD Indian Home Loan Guarantee (tribal members)
  CHATTEL_MANUFACTURED = "chattel_manufactured", // home-only loan, land-lease communities
  PHYSICIAN = "physician", // doctor/professional portfolio program
  NACA = "naca", // counseling-based 0-down/0-cost program (referral path)
  BRIDGE_HARD_MONEY = "bridge_hard_money", // asset-based bridge (MLO referral flag only)
  UNKNOWN = "unknown",
}

/**
 * HOW income is documented — independent of the income SOURCE.
 * Answers the operator's "is it cash (if not 1099 or W2 or business etc)" ask.
 * Taxonomy from RESEARCH_NON_QM.md §3.
 */
export enum IncomeDocumentation {
  W2_STUBS = "w2_stubs",
  W2_OFFER_LETTER = "w2_offer_letter",
  FULL_TAX_2YR = "full_tax_2yr",
  FULL_TAX_1YR = "full_tax_1yr",
  BANK_STATEMENT_12 = "bank_statement_12",
  BANK_STATEMENT_24 = "bank_statement_24",
  PANDL_CPA = "pandl_cpa",
  PANDL_PREPARED = "pandl_prepared",
  ONE_O_NINE_NINE = "one_o_nine_nine",
  WVOE_ONLY = "wvoe_only",
  ASSET_DEPLETION = "asset_depletion",
  DSCR_RENT = "dscr_rent",
  CASH_UNDOCUMENTED = "cash_undocumented",
  NO_DOC = "no_doc",
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

/**
 * Borrower residency/immigration class (LOAN_PROGRAMS_CATALOG.md §0).
 * Gates agency program eligibility — most importantly FHA, which HUD
 * removed from ALL non-permanent residents (2025).
 */
export enum ResidencyStatus {
  /** US citizen or US national. */
  US_CITIZEN = "us_citizen",
  /** Lawful permanent resident (green card holder). */
  PERMANENT_RESIDENT = "permanent_resident",
  /** Non-permanent resident WITH work authorization + SSN (H-1B, L-1, O-1, TN, E-2, asylum-pending w/ EAD, DACA w/ EAD). */
  NON_PERMANENT_EAD = "non_permanent_ead",
  /** Visa holder WITHOUT work authorization (B-1/B-2, F-1 without CPT/OPT). */
  NON_PERMANENT_NO_EAD = "non_permanent_no_ead",
  /** Files taxes with an ITIN; no SSN. */
  ITIN = "itin",
  /** Foreign national living abroad or transient; no US status. */
  FOREIGN_NATIONAL = "foreign_national",
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
  /**
   * Support payments (alimony/child support): months until the obligation
   * automatically terminates. FNMA B3-6-05 excludes support terminating
   * within 10 months of closing from the DTI ratio (stress-test P1 fix).
   */
  monthsUntilTermination?: number;
  otherPartyOnTime12mo?: boolean;
}

export interface EngineInputs {
  // Required
  loanPurpose: LoanPurpose;
  propertyUse: PropertyUse;
  loanType: LoanType;
  grossMonthlyIncome: number;
  incomeType: IncomeType;
  /** How income is documented (bank statements, P&L, 1099, cash, etc.). */
  incomeDocumentation?: IncomeDocumentation;
  /** Trend over the past two years (stress-test P1): down → lower recent level. */
  incomeTrend?: "up" | "flat" | "down" | "unknown";
  /**
   * Explicit user opt-in that they will file taxes with an ITIN (no SSN).
   * ITIN programs are NEVER surfaced without this flag (RESEARCH_NON_QM.md §5:
   * surfaced only from an explicit user path, never inferred).
   */
  isItinBorrower?: boolean;
  /** Side-business average net monthly income per tax returns (negative = loss). */
  sideBusinessNetMonthlyIncome?: number | null;
  /** Estimated share (0–100) of income paid in cash and not on tax returns. */
  cashIncomePortionPct?: number | null;
  /** Monthly gross rent the property is expected to produce (DSCR / investors). */
  expectedMonthlyRent?: number | null;
  /** Total liquid assets before down payment (asset qualification). */
  liquidAssetsTotal?: number | null;
  /** Self-reported FICO 300–850, or null if unknown. NEVER a bureau pull. */
  creditScoreSelfReported: number | null;
  creditTierSelfReported: CreditTier | null;
  totalMonthlyDebtPayments: number;
  downPaymentAvailable: number;
  targetPurchasePrice: number | null;

  // Strongly recommended
  estimatedHomeValue?: number | null; // refi
  /** Outstanding balance on the existing mortgage (refi). */
  currentPayoffAmount?: number | null; // refi
  /**
   * Buyer timeline in months until purchase (30/90/180/365; null = "just
   * researching" or not stated). Feeds lead prioritization (Part 8) — never
   * shown to the consumer as a "likelihood" of any kind.
   */
  timelineMonths?: number | null;
  state?: string | null; // "CA", "TX", ... V1 geofenced to FL in the UI layer
  /** Residency/immigration class — gates agency + non-QM program surfaces (Catalog §0). */
  residencyStatus?: ResidencyStatus | null;
  /** Enrolled member of a federally recognized tribe (Section 184 / NADL). */
  isTribalMember?: boolean;
  /** Eligible veteran / active duty / surviving spouse (VA programs). */
  isVeteran?: boolean;
  /** Licensed medical professional eligible for physician programs (MD/DO/DDS/CRNA/PA/PharmD). */
  isMedicalProfessional?: boolean;
  /** Household income at or below 80% of Area Median Income (HomeReady/Home Possible). */
  incomeAtOrBelow80Ami?: boolean;
  /** First-time homebuyer (or no ownership in past 3 years). */
  isFirstTimeBuyer?: boolean;
  propertyType?: PropertyType;
  creditEvent?: CreditEvent;
  yearsSinceCreditEvent?: number | null;
  liquidAssetsAfterClose?: number | null;
  employmentYearsInField?: number | null;
  hasHoa?: boolean;
  monthlyHoaFee?: number | null;
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

  // Stress-test P2 additions — each wires a real underwriting rule
  /** Months in the CURRENT job (not field). */
  employmentMonthsCurrentJob?: number | null;
  /** Still within a probationary/introductory employment period. */
  isProbationary?: boolean;
  /** 12+ months of documented on-time rent/housing payments. */
  hasOnTimeHousingHistory12mo?: boolean;
  /** Whether the property is in a USDA-eligible rural area. */
  isRuralArea?: "yes" | "no" | "unsure";
  /** Credit-card utilization inputs (balance comes via debts[] revolving). */
  revolvingCreditLimit?: number | null;
  /** Documented 60+ day seasoning on post-close reserves. */
  reservesSeasoned60Days?: boolean;
  /** Condominium review flags (warrantability drivers). */
  condoConcerns?: {
    pendingLitigation?: boolean;
    investorOwnershipHigh?: boolean; // >20-25% single entity / investor-owned
    ownerDelinquencyHigh?: boolean; // >15% owners behind on dues
  };
  /** Manufactured-home eligibility flags. */
  manufacturedConcerns?: {
    leasedLand?: boolean;
    singleWide?: boolean;
    builtBefore1976?: boolean;
    noPermanentFoundation?: boolean;
  };
  /** Count/total of large recent deposits needing sourcing (extends boolean). */
  largeDepositCount?: number | null;
  largeDepositTotal?: number | null;

  // No-traditional-income / non-QM path (stress-500 batch-2 fixes)
  /**
   * Average TOTAL monthly deposits across the documented statement period
   * (bank-statement programs qualify on deposits, not tax-return income).
   * Never silently treated as ordinary gross income — the engine only uses it
   * when the bank-statement documentation path is selected, and the 75% credit
   * factor is disclosed as an assumption.
   */
  monthlyDepositsTotal?: number | null;
  /** Seller-paid closing-cost credit (reduces estimated cash to close). */
  sellerCreditAmount?: number | null;
  /** Borrower wants down-payment-assistance programs explored. */
  isInterestedInDownPaymentAssistance?: boolean;
  /** Borrower asked about interest-only structures (disclosure only). */
  prefersInterestOnly?: boolean;
  /** VA entitlement status when the borrower knows it. */
  vaEntitlement?: "full" | "partial" | "unsure";
  /** Employment gap longer than 6 months within the last 2 years. */
  employmentGap6mo?: boolean;
  /** Monthly property-tax override when the borrower has a real figure. */
  propertyTaxMonthlyOverride?: number | null;
  /** Quoted/estimated rate override (%) the borrower wants the math run at. */
  assumedRateOverridePct?: number | null;
  /** Combined overtime+bonus monthly amount the borrower wants counted (variable income — averaged, not dollar-for-dollar). */
  overtimeBonusMonthly?: number | null;

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
  /**
   * Estimated monthly components at the target price (Stage 2 Phase 2).
   * Scalars, not ranges: tax/insurance/HOA are point estimates from the
   * assumed price, so presenting fake ranges for them would overstate
   * precision. The overall PITI range remains in `estimatedPiti`.
   */
  pitiBreakdown: {
    principalInterest: number;
    propertyTax: number;
    insurance: number;
    hoa: number;
    mortgageInsurance: number;
  };

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
