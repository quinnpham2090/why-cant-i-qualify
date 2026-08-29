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
import { determineNonQmPrograms, dscrFromRent, isNonQm } from "./non-qm";
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

  // 2. Qualifying income (co-borrower income is simply added when present —
  // P13; lenders sum documented income across borrowers on a joint app)
  const combinedGross =
    i.grossMonthlyIncome + (i.coBorrowerIncome != null && i.coBorrowerIncome > 0 ? i.coBorrowerIncome : 0);
  const incomeRes = calculateQualifyingIncome({ ...i, grossMonthlyIncome: combinedGross });
  assumptions.push(...incomeRes.assumptions);

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

  // 6. Eligible programs (agency) + non-QM programs
  const agencyPrograms = determineEligiblePrograms(i, credit);
  const nonQm = determineNonQmPrograms(i, credit);
  assumptions.push(...nonQm.flatMap((n) => n.assumptions));
  const nonQmLoanTypes = nonQm.map((n) => n.loanType);
  const merged = [...agencyPrograms.filter((p) => p !== LoanType.UNKNOWN), ...nonQmLoanTypes];
  // Deduplicate while preserving order
  const seen = new Set<LoanType>();
  const eligibleProgramsDedup = merged.filter((p) => {
    if (seen.has(p)) return false;
    seen.add(p);
    return true;
  });
  const effectivePrograms = eligibleProgramsDedup.length > 0 ? eligibleProgramsDedup : [LoanType.UNKNOWN];
  const program = priceProgram(i, effectivePrograms);
  // Pricing engine only knows QM programs; for non-QM pricing, fall back to the
  // user's selected QM program (or first agency program) so ranges stay sane.
  const priceProgramForPiti = isNonQm(program)
    ? (agencyPrograms.find((p) => p !== LoanType.UNKNOWN) ?? LoanType.CONVENTIONAL_CONF)
    : program;

  // 2b. Qualifying income merge (FIX_PLAN V1.6 P1): asset-depletion and
  // bank-statement style programs imply a "qualifying income" that standard
  // documentation ignores. Take the best documented-vs-program estimate so a
  // retiree with $500K assets is not scored at zero income. The merge runs
  // after program eligibility so non-QM income estimates are available, but
  // before DTI so every downstream ratio uses it.
  const nonQmIncomeCandidates = nonQm
    .map((n) => n.qualifyingIncome)
    .filter((v) => v > 0);
  const bestNonQmIncome =
    nonQmIncomeCandidates.length > 0 ? Math.max(...nonQmIncomeCandidates) : 0;
  const qualifyingIncome = Math.max(incomeRes.monthly, bestNonQmIncome);
  if (bestNonQmIncome > incomeRes.monthly) {
    assumptions.push({
      key: "qualifying_income_non_qm",
      description:
        "Qualifying income reflects the asset- or bank-statement program estimate, which may differ from tax-return income.",
    });
  }

  // 7. Rate + MI + PITI at the target price
  const down = Math.min(i.downPaymentAvailable, price);
  const L = Math.max(price - down, 0);
  const ltvPct = price > 0 ? (L / price) * 100 : 100;
  const rate = assumedRate(priceProgramForPiti, credit.fico, ltvPct, TERM_YEARS);
  assumptions.push({
    key: "assumed_rate",
    description: `An illustrative interest rate of ${rate.toFixed(2)}% was assumed. Your actual rate depends on your credit profile, the property, and the lender.`,
  });

  const annualMI = mortgageInsuranceAnnual(priceProgramForPiti, L, ltvPct, credit.fico);
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
  const ctcMidPct = CLOSING_COST_MID_PCT[priceProgramForPiti] ?? 4.0;
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

  // 10b. No-ratio program override (FIX_PLAN V1.6 P1 step 2): DSCR and
  // asset-qualifier programs qualify on rent coverage or assets, not personal
  // DTI — so when such a program is eligible, debt/payment are scored on the
  // program's coverage bands instead of the personal DTI bands. The override
  // is disclosed as an assumption (audit constraint #11).
  if (effectivePrograms.includes(LoanType.DSCR) || effectivePrograms.includes(LoanType.ASSET_QUALIFIER)) {
    let coverageScore: number | null = null;
    let coverageSummary = "";

    if (effectivePrograms.includes(LoanType.DSCR)) {
      const dscr = dscrFromRent(i.expectedMonthlyRent ?? 0, p);
      if (dscr != null) {
        coverageScore = dscr >= 1.25 ? 90 : dscr >= 1.1 ? 75 : dscr >= 1.0 ? 60 : 40;
        coverageSummary = `Rent coverage (DSCR) ${(dscr * 100).toFixed(0)}% of payment`;
        assumptions.push({
          key: "dscr_coverage",
          description:
            "For the investor cash-flow program, readiness was scored on how well the expected rent covers the payment (rent coverage), not on your personal debt-to-income ratio.",
        });
      }
    }
    if (coverageScore == null && effectivePrograms.includes(LoanType.ASSET_QUALIFIER)) {
      // Asset-based qualification: coverage = qualifying income derived from assets.
      coverageScore = 75;
      coverageSummary = "Qualifies on assets rather than personal debt-to-income";
      assumptions.push({
        key: "dscr_coverage",
        description:
          "For the asset-based program, readiness was scored on asset strength rather than your personal debt-to-income ratio.",
      });
    }

    if (coverageScore != null) {
      subScores.debt = {
        category: "debt",
        score: coverageScore,
        tier: coverageScore >= 90 ? "strong" : coverageScore >= 75 ? "workable" : "stretched",
        summary: coverageSummary,
        redFlags: [],
      };
      subScores.payment = {
        category: "payment",
        score: coverageScore,
        tier: coverageScore >= 90 ? "strong" : coverageScore >= 75 ? "workable" : "stretched",
        summary: coverageSummary,
        redFlags: [],
      };
    }
  }

  // 11. Composite
  const composite = computeComposite(subScores);

  // 12. Obstacles + strengths
  const { primary, secondary, strengths } = identifyObstacles(i, subScores, credit, effectivePrograms, reservesMonths);

  // 13. Confidence
  const { confidence, reasons } = computeConfidence(i);

  // 14. Recommended program
  const recommendedProgram = recommendProgram(effectivePrograms, i);

  // 15. Disclaimers (non-QM variance disclosed whenever a non-QM program is surfaced)
  const disclaimers = buildDisclaimers({
    ...i,
    loanType: effectivePrograms.some((p) => isNonQm(p)) ? LoanType.BANK_STATEMENT : i.loanType,
  });

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
    eligiblePrograms: effectivePrograms,
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
