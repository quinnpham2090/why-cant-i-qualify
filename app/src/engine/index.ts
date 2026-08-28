/**
 * runDiagnostic — the deterministic pipeline (rule-engine-spec §3).
 * Pure function: EngineInputs -> DiagnosticResult. No I/O.
 */

import {
  CONDO_HOA_MONTHLY_DEFAULT,
  FLOOD_INSURANCE_ANNUAL_DEFAULT,
  HAZARD_INSURANCE_ANNUAL_DEFAULT,
  PROPERTY_TAX_DEFAULT_RATE,
  PROPERTY_TAX_EFFECTIVE_RATE_BY_STATE,
  RANGE_WIDTH_BY_CONFIDENCE,
  CLOSING_COST_MID_PCT,
} from "./tables";
import {
  LoanType,
  PropertyType,
  PropertyUse,
  type Assumption,
  type Confidence,
  type DiagnosticResult,
  type EngineInputs,
  type Range,
  type SubScore,
} from "./types";
import { calculateQualifyingIncome } from "./income";
import { calculateTotalExistingDebt } from "./debt";
import { buildCreditProfile, scoreCredit } from "./credit";
import {
  assumedRate,
  determineEligiblePrograms,
  mortgageInsuranceAnnual,
  priceProgram,
  recommendProgram,
} from "./programs";
import {
  computeComposite,
  scoreCash,
  scoreDocumentation,
  scoreFromBand,
  scoreIncome,
  scoreProperty,
  tierFromDti,
} from "./scores";
import { DTI_SUBSCORE_BANDS, FRONT_END_SUBSCORE_BANDS } from "./tables";
import { identifyObstacles } from "./obstacles";
import { buildDisclaimers } from "./disclaimers";
import {
  cashToCloseRange,
  maxLoanAmount,
  maxPurchasePrice,
  monthlyPI,
  piti,
  reserveMonths,
  roundDollars,
} from "./math";

export const ENGINE_VERSION = "1.0.0";

const TERM_YEARS = 30;

function normalizeInputs(i: EngineInputs): EngineInputs {
  const n = { ...i };
  if (n.downPaymentAvailable <= 0 && n.targetPurchasePrice) {
    n.downPaymentAvailable = n.targetPurchasePrice * 0.035; // FHA-minimum default
  }
  if (!n.state) n.state = "DEFAULT";
  if (!n.propertyType || n.propertyType === PropertyType.UNKNOWN) {
    n.propertyType = PropertyType.SFR;
  }
  return n;
}

interface TaxInsHoa {
  annualTax: number;
  annualInsurance: number;
  monthlyHoa: number;
  assumptions: Assumption[];
}

function estimateTaxInsuranceHoa(i: EngineInputs, homeValue: number): TaxInsHoa {
  const assumptions: Assumption[] = [];
  const ratePct =
    i.state && i.state !== "DEFAULT"
      ? PROPERTY_TAX_EFFECTIVE_RATE_BY_STATE[i.state] ?? PROPERTY_TAX_DEFAULT_RATE
      : PROPERTY_TAX_DEFAULT_RATE;

  if (!i.state || i.state === "DEFAULT") {
    assumptions.push({
      key: "tax_rate_default",
      description: "No state was provided, so a national average property-tax rate was assumed.",
    });
  }

  const annualTax = homeValue * (ratePct / 100);
  let annualInsurance = HAZARD_INSURANCE_ANNUAL_DEFAULT;
  if (i.isInFloodZone) {
    annualInsurance += FLOOD_INSURANCE_ANNUAL_DEFAULT;
    assumptions.push({
      key: "flood_insurance",
      description: "Flood-zone insurance was added because you indicated the property is in a flood zone.",
    });
  }
  assumptions.push({
    key: "hazard_insurance",
    description: "Homeowners insurance was estimated from a national average.",
  });

  const monthlyHoa = i.hasHoa
    ? (i.monthlyHoaFee ?? CONDO_HOA_MONTHLY_DEFAULT)
    : (i.monthlyHoaFee ?? 0);

  return { annualTax, annualInsurance, monthlyHoa, assumptions };
}

export function runDiagnostic(rawInputs: EngineInputs): DiagnosticResult {
  const i = normalizeInputs(rawInputs);
  const assumptions: Assumption[] = [];

  // 2. Qualifying income
  const incomeRes = calculateQualifyingIncome(i);
  assumptions.push(...incomeRes.assumptions);
  const qualifyingIncome = incomeRes.monthly;

  // 3. Existing debt
  const totalExistingDebt = calculateTotalExistingDebt(i);

  // 4/7. Price + tax/insurance/HOA
  const price = i.targetPurchasePrice ?? 300000;
  if (i.targetPurchasePrice == null) {
    assumptions.push({
      key: "default_price",
      description: "No target price was provided, so a representative price was used for the estimate.",
    });
  }
  const tih = estimateTaxInsuranceHoa(i, price);
  assumptions.push(...tih.assumptions);

  // 5. Credit
  const creditRes = buildCreditProfile(i);
  assumptions.push(...creditRes.assumptions);
  const credit = creditRes.profile;

  // 6. Eligible programs
  const eligiblePrograms = determineEligiblePrograms(i, credit);
  const program = priceProgram(i, eligiblePrograms);

  // 7. Rate + MI + PITI at the target price
  const down = Math.min(i.downPaymentAvailable, price);
  const L = Math.max(price - down, 0);
  const ltvPct = price > 0 ? (L / price) * 100 : 100;
  const rate = assumedRate(program, credit.fico, ltvPct, TERM_YEARS);
  assumptions.push({
    key: "assumed_rate",
    description: `An illustrative interest rate of ${rate.toFixed(2)}% was assumed. Your actual rate depends on your credit profile, the property, and the lender.`,
  });

  const annualMI = mortgageInsuranceAnnual(program, L, ltvPct, credit.fico);
  if (annualMI > 0) {
    assumptions.push({
      key: "mortgage_insurance",
      description: "Mortgage insurance was included because the down payment is below 20%.",
    });
  }

  const p = piti({
    loanAmount: L,
    ratePct: rate,
    termYears: TERM_YEARS,
    annualPropertyTax: tih.annualTax,
    annualHazardInsurance: tih.annualInsurance,
    monthlyHoa: tih.monthlyHoa,
    annualMortgageInsurance: annualMI,
  });

  const dtiBackEnd = (p + totalExistingDebt) / Math.max(qualifyingIncome, 1);
  const dtiFrontEnd = p / Math.max(qualifyingIncome, 1);

  const reservesMonths =
    i.liquidAssetsAfterClose != null ? reserveMonths(i.liquidAssetsAfterClose, p) : null;

  // Max loan range across three back-end DTI targets
  const maxLoanLow = maxLoanAmount(qualifyingIncome, totalExistingDebt, rate, TERM_YEARS, tih.annualTax, tih.annualInsurance, tih.monthlyHoa, annualMI, 0.36);
  const maxLoanMid = maxLoanAmount(qualifyingIncome, totalExistingDebt, rate, TERM_YEARS, tih.annualTax, tih.annualInsurance, tih.monthlyHoa, annualMI, 0.43);
  const maxLoanHigh = maxLoanAmount(qualifyingIncome, totalExistingDebt, rate, TERM_YEARS, tih.annualTax, tih.annualInsurance, tih.monthlyHoa, annualMI, 0.5);

  const fixedNonPI = tih.annualTax / 12 + tih.annualInsurance / 12 + tih.monthlyHoa + annualMI / 12;
  const estimatedPiti: Range = {
    low: roundDollars(monthlyPI(maxLoanLow, rate, TERM_YEARS) + fixedNonPI, 25),
    mid: roundDollars(p, 25),
    high: roundDollars(monthlyPI(maxLoanHigh, rate, TERM_YEARS) + fixedNonPI, 25),
  };

  // 8. Affordable price range (three DTI targets; MI excluded per spec)
  const taxRatePct =
    i.state && i.state !== "DEFAULT"
      ? PROPERTY_TAX_EFFECTIVE_RATE_BY_STATE[i.state] ?? PROPERTY_TAX_DEFAULT_RATE
      : PROPERTY_TAX_DEFAULT_RATE;
  const affordablePurchasePrice: Range = {
    low: roundDollars(maxPurchasePrice(qualifyingIncome, totalExistingDebt, down, rate, TERM_YEARS, taxRatePct, tih.annualInsurance, tih.monthlyHoa, 0, 0.36), 1000),
    mid: roundDollars(maxPurchasePrice(qualifyingIncome, totalExistingDebt, down, rate, TERM_YEARS, taxRatePct, tih.annualInsurance, tih.monthlyHoa, 0, 0.43), 1000),
    high: roundDollars(maxPurchasePrice(qualifyingIncome, totalExistingDebt, down, rate, TERM_YEARS, taxRatePct, tih.annualInsurance, tih.monthlyHoa, 0, 0.5), 1000),
  };

  // 9. Cash to close
  const ctcMidPct = CLOSING_COST_MID_PCT[program] ?? 4.0;
  const ctc = cashToCloseRange(price, ctcMidPct);
  const cashToClose: Range = {
    low: roundDollars(ctc.low, 500),
    mid: roundDollars(ctc.mid, 500),
    high: roundDollars(ctc.high, 500),
  };

  // 10. Sub-scores
  const downPaymentPct = price > 0 ? (down / price) * 100 : 0;
  const subScores: Record<string, SubScore> = {};
  subScores.income = scoreIncome(i);
  subScores.debt = {
    category: "debt",
    score: scoreFromBand(dtiBackEnd * 100, DTI_SUBSCORE_BANDS),
    tier: tierFromDti(dtiBackEnd * 100),
    summary: `Back-end DTI ${(dtiBackEnd * 100).toFixed(1)}%`,
    redFlags: [],
  };
  subScores.credit = scoreCredit(credit);
  subScores.cash = scoreCash(i, downPaymentPct, cashToClose.mid, reservesMonths);
  subScores.payment = {
    category: "payment",
    score: scoreFromBand(dtiFrontEnd * 100, FRONT_END_SUBSCORE_BANDS),
    tier: tierFromDti(dtiFrontEnd * 100),
    summary: `Front-end (housing) ratio ${(dtiFrontEnd * 100).toFixed(1)}%`,
    redFlags: [],
  };
  subScores.property = scoreProperty(i);
  subScores.documentation = scoreDocumentation(i);

  // 11. Composite
  const composite = computeComposite(subScores);

  // 12. Obstacles + strengths
  const { primary, secondary, strengths } = identifyObstacles(i, subScores, credit, eligiblePrograms);

  // 13. Confidence
  const { confidence, reasons } = computeConfidence(i);

  // 14. Recommended program
  const recommendedProgram = recommendProgram(eligiblePrograms, i);

  // 15. Disclaimers
  const disclaimers = buildDisclaimers(i);

  return {
    qualifyingIncome,
    maxLoanAmount: {
      low: roundDollars(maxLoanLow, 1000),
      mid: roundDollars(maxLoanMid, 1000),
      high: roundDollars(maxLoanHigh, 1000),
    },
    affordablePurchasePrice,
    estimatedPiti,
    cashToClose,
    dtiBackEnd,
    dtiFrontEnd,
    reservesMonths: reservesMonths != null && Number.isFinite(reservesMonths) ? reservesMonths : null,
    subScores,
    compositeScore: composite.score,
    compositeTier: composite.tier,
    compositeTierMessage: composite.message,
    primaryObstacle: primary,
    secondaryObstacles: secondary,
    strengths,
    eligiblePrograms,
    recommendedProgram,
    confidence,
    confidenceReasons: reasons,
    disclaimers,
    assumptionsUsed: assumptions,
    engineVersion: ENGINE_VERSION,
  };
}

function computeConfidence(i: EngineInputs): { confidence: Confidence; reasons: string[] } {
  const reasons: string[] = [];
  let missing = 0;

  if (i.loanType === LoanType.UNKNOWN) { reasons.push("Loan type not specified"); missing++; }
  if (i.creditScoreSelfReported == null && !i.creditTierSelfReported) { reasons.push("Credit score not provided"); missing++; }
  if (!i.incomeType || i.incomeType === ("unknown" as never)) { reasons.push("Income type not specified"); missing++; }
  if (i.totalMonthlyDebtPayments === 0 && (!i.debts || i.debts.length === 0)) { reasons.push("No debt information provided"); missing++; }
  if (i.targetPurchasePrice == null) { reasons.push("No target purchase price"); missing++; }
  if (!i.state || i.state === "DEFAULT") { reasons.push("State not specified (national averages used for tax/insurance)"); missing++; }
  if (i.liquidAssetsAfterClose == null) { reasons.push("Reserves not provided"); missing++; }
  if (!i.propertyType || i.propertyType === PropertyType.UNKNOWN) { reasons.push("Property type not specified"); missing++; }

  let confidence: Confidence;
  if (missing <= 1) confidence = "high";
  else if (missing <= 3) confidence = "medium";
  else confidence = "low";

  return { confidence, reasons };
}

export { RANGE_WIDTH_BY_CONFIDENCE };
