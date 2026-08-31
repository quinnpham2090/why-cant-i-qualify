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
  CompositeTier,
  IncomeDocumentation,
  LoanPurpose,
  LoanType,
  PropertyType,
  PropertyUse,
  ResidencyStatus,
  type Assumption,
  type Confidence,
  type DiagnosticResult,
  type EngineInputs,
  type Range,
  type SubScore,
  type TargetPriceAssessment,
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
import { determineNonQmPrograms, dscrFromRent, isNonQm, nonQmAssumedRate, nonQmProgramFor } from "./non-qm";
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

/** Compact price formatter for engine messages ("$440,000"). */
const fmtPrice = (n: number | null | undefined): string =>
  n != null && Number.isFinite(n) ? `$${Math.round(n).toLocaleString("en-US")}` : "your";

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

  const annualTax =
    i.propertyTaxMonthlyOverride != null && i.propertyTaxMonthlyOverride > 0
      ? i.propertyTaxMonthlyOverride * 12
      : homeValue * (ratePct / 100);
  if (i.propertyTaxMonthlyOverride != null && i.propertyTaxMonthlyOverride > 0) {
    assumptions.push({
      key: "tax_rate_override",
      description: "The monthly property-tax figure you provided was used instead of the state average.",
    });
  }
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

  // Phantom down payment (Stage 2 Phase 1): normalizeInputs injects a 3.5%
  // FHA-minimum default when the user gives no down payment so a range can be
  // produced. Detect it on the RAW inputs, disclose it, and reduce confidence
  // (spec framework §10.1 requires both disclosure and a confidence hit).
  const phantomDownPayment =
    rawInputs.downPaymentAvailable <= 0 && rawInputs.targetPurchasePrice != null;
  if (phantomDownPayment) {
    assumptions.push({
      key: "phantom_down_payment",
      description:
        "You did not enter a down payment amount, so 3.5% (the FHA minimum) was assumed to produce a range. Enter your actual savings for a more accurate estimate.",
    });
  }

  // Plausibility disclosures (stress-500 P4): unusual-but-valid inputs get a
  // gentle "double-check" note instead of a block. Non-judgmental, never
  // blocks progression.
  if (
    rawInputs.giftFundsAmount != null &&
    rawInputs.giftFundsAmount > 0 &&
    rawInputs.downPaymentAvailable > 0 &&
    rawInputs.giftFundsAmount > rawInputs.downPaymentAvailable * 2
  ) {
    assumptions.push({
      key: "gift_plausibility",
      description:
        "The gift amount entered is more than twice the down payment entered — you may want to double-check which figure is which.",
    });
  }
  if ((rawInputs.liquidAssetsTotal ?? 0) > 10_000_000) {
    assumptions.push({
      key: "asset_plausibility",
      description:
        "Asset values this large are uncommon — the estimate assumes they are documented and available; program limits on how assets convert to qualifying income still apply.",
    });
  }
  if (
    rawInputs.monthlyHoaFee != null &&
    rawInputs.monthlyHoaFee > 1000 &&
    rawInputs.grossMonthlyIncome > 0 &&
    rawInputs.monthlyHoaFee > rawInputs.grossMonthlyIncome * 0.15
  ) {
    assumptions.push({
      key: "hoa_plausibility",
      description:
        "The monthly HOA fee entered is large relative to your income — it is included in the payment estimate, and it counts toward what lenders will qualify.",
    });
  }

  // 2. Qualifying income (co-borrower income is simply added when present —
  // P13; lenders sum documented income across borrowers on a joint app)
  const combinedGross =
    i.grossMonthlyIncome + (i.coBorrowerIncome != null && i.coBorrowerIncome > 0 ? i.coBorrowerIncome : 0);
  const incomeRes = calculateQualifyingIncome({ ...i, grossMonthlyIncome: combinedGross });
  assumptions.push(...incomeRes.assumptions);

  // 3. Existing debt
  const totalExistingDebt = calculateTotalExistingDebt(i);

  // 4/7. Price + tax/insurance/HOA
  // Refinance branch (Stage 2 Phase 2): refi users don't have a purchase
  // price. The property value comes from their estimate and the loan amount
  // from the payoff they name — so the payment, DTI, and pillars stay
  // meaningful instead of being purchase-shaped noise. Ranges that only make
  // sense for a purchase (max loan / affordable price) are still computed for
  // the data contract but the UI hides them for refi and shows pillars +
  // programs instead (honest-output rule from the plan).
  const isRefi =
    i.loanPurpose === LoanPurpose.REFI_RATE_TERM || i.loanPurpose === LoanPurpose.REFI_CASH_OUT;
  const price = isRefi
    ? (i.estimatedHomeValue ?? 300000)
    : (i.targetPurchasePrice ?? 300000);
  if (isRefi) {
    if (i.estimatedHomeValue == null) {
      assumptions.push({
        key: "refi_value_assumed",
        description:
          "No home value was provided, so a representative value was used. Enter your estimated home value for a more accurate payment picture.",
      });
    }
    assumptions.push({
      key: "refi_mode",
      description:
        "Because this is a refinance, the purchase-price ranges are not shown — the payment and readiness picture below is what a refinance lender would look at.",
    });
  } else if (i.targetPurchasePrice == null) {
    assumptions.push({
      key: "default_price",
      description: "No target price was provided, so a representative price was used for the estimate.",
    });
  }

  // Refinance CLTV signal (stress-500 P1): payoff vs value decides whether any
  // standard refinance fits. Computed early so the tier gate and messaging can
  // use it; the user-facing obstacle text lives in obstacles.ts.
  const refiPayoff = i.currentPayoffAmount ?? null;
  const refiValue = i.estimatedHomeValue ?? null;
  const refiCltvPct =
    isRefi && refiPayoff != null && refiValue != null && refiValue > 0
      ? (refiPayoff / refiValue) * 100
      : null;
  const underwaterRefi = refiCltvPct != null && refiCltvPct > 100;
  if (refiCltvPct != null) {
    assumptions.push({
      key: "refi_cltv",
      description: `Your current loan balance is about ${Math.round(refiCltvPct)}% of your home's estimated value (loan-to-value). This ratio largely decides which refinance programs can apply.`,
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

  // Residency gating disclosures (Catalog §0): when a class loses agency
  // lanes, say so plainly instead of letting programs silently vanish.
  const residency = i.residencyStatus;
  if (residency === ResidencyStatus.NON_PERMANENT_EAD || residency === ResidencyStatus.NON_PERMANENT_NO_EAD) {
    const fhaWouldOtherwise =
      credit.fico >= 580 && credit.waitingClear && i.propertyUse === PropertyUse.PRIMARY;
    if (fhaWouldOtherwise) {
      assumptions.push({
        key: "residency_fha_blocked",
        description:
          "FHA loans are currently limited to citizens and permanent residents, so the estimate uses the loan types available to your status instead.",
      });
    }
    if (residency === ResidencyStatus.NON_PERMANENT_EAD) {
      assumptions.push({
        key: "residency_document_note",
        description:
          "With a work visa, lenders will ask for your work-permit card, the visa notice of action, and your entry record, and they review how long your authorization remains valid.",
      });
    }
  }
  if (residency === ResidencyStatus.ITIN) {
    assumptions.push({
      key: "residency_itin_note",
      description:
        "The estimate reflects ITIN lending: larger down payments than standard loans, and credit can be documented through alternative or international reports.",
    });
  }
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

  // 13. Confidence — computed before pricing so the T17 range width (step 8)
  // can key off it. Depends only on the inputs.
  const { confidence, reasons } = computeConfidence(i, phantomDownPayment ? 1 : 0);

  // 7. Rate + MI + PITI at the target price
  const down = isRefi
    ? Math.max(0, price - (i.currentPayoffAmount ?? price * 0.8))
    : Math.min(i.downPaymentAvailable, price);
  if (isRefi && i.currentPayoffAmount == null) {
    assumptions.push({
      key: "refi_payoff_assumed",
      description:
        "No loan balance was provided, so the loan amount was estimated at 80% of the home value. Enter your current loan balance for a more accurate payment picture.",
    });
  }
  const L = isRefi
    ? Math.max(0, i.currentPayoffAmount ?? price * 0.8)
    : Math.max(price - down, 0);
  const ltvPct = price > 0 ? (L / price) * 100 : 100;
  // Non-QM selections price with the program's own assumed rate (base +
  // add-on, fico-adjusted) instead of the agency fallback rate — previously
  // nonQmAssumedRate was dead code and non-QM PITI/ranges were priced as if
  // the loan were agency-eligible (Stage 2 Phase 1).
  const nonQmRow = isNonQm(program) ? nonQmProgramFor(program) : null;
  const computedRate = nonQmRow
    ? nonQmAssumedRate(nonQmRow, credit.fico)
    : assumedRate(priceProgramForPiti, credit.fico, ltvPct, TERM_YEARS);
  // Rate override (stress-500 P3): when the borrower has a real quoted rate,
  // run the math at it — clearly labeled as their number, not our assumption.
  const rateOverride =
    i.assumedRateOverridePct != null && i.assumedRateOverridePct > 0 && i.assumedRateOverridePct < 25
      ? i.assumedRateOverridePct
      : null;
  const rate = rateOverride ?? computedRate;
  assumptions.push(
    rateOverride != null
      ? {
          key: "assumed_rate",
          description: `The rate you provided (${rateOverride.toFixed(3)}%) was used. Your final rate depends on the full quote, points, and lock terms.`,
        }
      : {
          key: "assumed_rate",
          description: nonQmRow
            ? `An illustrative interest rate of ${rate.toFixed(2)}% was assumed, including the typical pricing premium for this alternative-documentation program. Your actual rate depends on your credit profile, the property, and the lender.`
            : `An illustrative interest rate of ${rate.toFixed(2)}% was assumed. Your actual rate depends on your credit profile, the property, and the lender.`,
        },
  );

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

  // Component breakdown at the target price (Stage 2 Phase 2) — the PITI
  // range spans DTI targets, but the tax/insurance/HOA/MI pieces are point
  // estimates, so they are disclosed as scalars.
  const pitiBreakdown = {
    principalInterest: roundDollars(monthlyPI(L, rate, TERM_YEARS), 1),
    propertyTax: roundDollars(tih.annualTax / 12, 1),
    insurance: roundDollars(tih.annualInsurance / 12, 1),
    hoa: roundDollars(tih.monthlyHoa, 1),
    mortgageInsurance: roundDollars(annualMI / 12, 1),
  };

  const reservesMonths =
    i.liquidAssetsAfterClose != null ? reserveMonths(i.liquidAssetsAfterClose, p) : null;

  // Max loan range across three back-end DTI targets
  const maxLoanMid = maxLoanAmount(qualifyingIncome, totalExistingDebt, rate, TERM_YEARS, tih.annualTax, tih.annualInsurance, tih.monthlyHoa, annualMI, 0.43);

  // T17 consistency (stress-200 fix): the PITI range must describe THE USER'S
  // scenario payment, so mid is the target-price payment `p` and low/high sit
  // at the confidence-keyed loan spread around it — the same presentation
  // width used for maxLoanRange. The previous construction keyed low/high to
  // the 36%→50% DTI-affordability band while mid stayed at the target price,
  // so any scenario paying well under (large down payment) or over (expensive
  // target) its own DTI capacity rendered a "mid" outside its own range —
  // e.g. "$1,300 – $2,100 / about $400" on the results card.
  const pitiHalfSpread = (RANGE_WIDTH_BY_CONFIDENCE[confidence] ?? RANGE_WIDTH_BY_CONFIDENCE.medium)
    .loanSpreadPct / 200;
  const estimatedPiti: Range = {
    low: roundDollars(p * (1 - pitiHalfSpread), 25),
    mid: roundDollars(p, 25),
    high: roundDollars(p * (1 + pitiHalfSpread), 25),
  };

  // 8. Affordable price range (three DTI targets; MI excluded per spec)
  const taxRatePct =
    i.state && i.state !== "DEFAULT"
      ? PROPERTY_TAX_EFFECTIVE_RATE_BY_STATE[i.state] ?? PROPERTY_TAX_DEFAULT_RATE
      : PROPERTY_TAX_DEFAULT_RATE;
  const affordableMid = roundDollars(
    maxPurchasePrice(qualifyingIncome, totalExistingDebt, down, rate, TERM_YEARS, taxRatePct, tih.annualInsurance, tih.monthlyHoa, 0, 0.43),
    1000,
  );

  // T17 (Stage 2 Phase 1): confidence-based presentation width. The mid stays
  // anchored at the DTI-43 target; the low/high bounds sit at half the table
  // spread on each side of the mid, keyed by answer completeness. Previously
  // RANGE_WIDTH_BY_CONFIDENCE was imported and re-exported but never applied,
  // so every estimate presented the full DTI 36→50 band regardless of how
  // much the user left blank.
  const width = RANGE_WIDTH_BY_CONFIDENCE[confidence] ?? RANGE_WIDTH_BY_CONFIDENCE.medium;
  const loanHalfSpread = width.loanSpreadPct / 200;
  const priceHalfSpread = width.priceSpreadPct / 200;
  if (confidence !== "high") {
    assumptions.push({
      key: "confidence_range_width",
      description:
        "Because some answers were missing, the estimated ranges are wider to reflect that uncertainty.",
    });
  }
  const maxLoanRange: Range = {
    low: roundDollars(maxLoanMid * (1 - loanHalfSpread), 1000),
    mid: roundDollars(maxLoanMid, 1000),
    high: roundDollars(maxLoanMid * (1 + loanHalfSpread), 1000),
  };
  const affordablePurchasePrice: Range = {
    low: roundDollars(affordableMid * (1 - priceHalfSpread), 1000),
    mid: affordableMid,
    high: roundDollars(affordableMid * (1 + priceHalfSpread), 1000),
  };

  // 8b. Target-price assessment (stress-500 P2 follow-up): the payment math
  // already runs at the borrower's stated target price, so dtiBackEnd IS the
  // DTI at their number. This assessment keeps the results anchored to it —
  // with the concrete levers that change it — instead of quietly substituting
  // a smaller "affordable" price. Bands: ≤45% fits (typical program caps),
  // 45–50% tight (possible with compensating factors), 50–57% stretched
  // (specialized paths only), >57% no typical fit (honest no, with levers).
  let targetPriceAssessment: TargetPriceAssessment | undefined;
  if (!isRefi && i.targetPurchasePrice != null && i.targetPurchasePrice > 0) {
    const dtiAtTarget = dtiBackEnd;
    const pitiAtTarget = estimatedPiti.mid;
    const priceAt45 = Math.max(
      down,
      maxPurchasePrice(qualifyingIncome, totalExistingDebt, down, rate, TERM_YEARS, taxRatePct, tih.annualInsurance, tih.monthlyHoa, 0, 0.45),
    );
    const status: TargetPriceAssessment["status"] =
      dtiAtTarget <= 0.45 ? "fits" : dtiAtTarget <= 0.5 ? "tight" : dtiAtTarget <= 0.57 ? "stretched" : "no_typical_fit";
    const totalAtTarget = pitiAtTarget + totalExistingDebt;
    const monthlyIncomeGap =
      dtiAtTarget > 0.45 && qualifyingIncome > 0
        ? roundDollars(totalAtTarget / 0.45 - qualifyingIncome, 25)
        : null;
    const extraDownPaymentNeeded =
      i.targetPurchasePrice > priceAt45 ? roundDollars(i.targetPurchasePrice - priceAt45, 500) : null;
    targetPriceAssessment = { status, dtiAtTarget, pitiAtTarget, priceAt45Dti: roundDollars(priceAt45, 1000), monthlyIncomeGap, extraDownPaymentNeeded };
  }

  // 9. Cash to close
  const ctcMidPct = CLOSING_COST_MID_PCT[priceProgramForPiti] ?? 4.0;
  const ctc = cashToCloseRange(price, ctcMidPct);
  // Section 184 one-time guarantee fee (catalog B11/HUD): 1.5% of the loan
  // amount, typically financed — included here so the cash picture is honest.
  // (The fee was previously charged as ANNUAL mortgage insurance instead.)
  const section184Fee = program === LoanType.SECTION_184 ? L * 0.015 : 0;
  if (section184Fee > 0) {
    assumptions.push({
      key: "section_184_guarantee_fee",
      description:
        "The Section 184 one-time HUD loan fee (1.5% of the loan amount) was included in the estimated cash to close.",
    });
  }
  // VA one-time funding fee (stress-500 P5): 2.15% first-use, 0-down is the
  // common tier; typically financed rather than paid in cash, so it is
  // disclosed (not added to cash) and noted as waivable for qualifying
  // service-connected disabilities — the tool never assumes exemption.
  if (program === LoanType.VA) {
    assumptions.push({
      key: "va_funding_fee",
      description:
        "VA loans carry a one-time funding fee (commonly 1.25%–3.3% of the loan by down payment and first/subsequent use), usually financed into the loan. It is waived for veterans with qualifying service-connected disabilities — ask the lender.",
    });
  }
  if (program === LoanType.FHA) {
    assumptions.push({
      key: "fha_ufmip",
      description:
        "FHA also adds a one-time upfront mortgage insurance premium of 1.75% of the loan amount, which is almost always financed into the loan rather than paid in cash.",
    });
  }
  // Seller credit (stress-500 P3): seller-paid closing costs reduce cash to
  // close, capped by program interest-credit limits (3–9% by program/down —
  // the cap check is the MLO's job; the raw subtraction is disclosed).
  const sellerCredit = i.sellerCreditAmount ?? 0;
  if (sellerCredit > 0) {
    assumptions.push({
      key: "seller_credit",
      description:
        "The seller-paid credit you entered was subtracted from the estimated cash to close. Programs cap how much a seller may contribute (roughly 3–9% of the price depending on program and down payment) — the loan officer confirms your exact limit.",
    });
  }
  const netCtc = (v: number) => Math.max(0, v - sellerCredit);
  const cashToClose: Range = {
    low: roundDollars(netCtc(ctc.low) + section184Fee, 500),
    mid: roundDollars(netCtc(ctc.mid) + section184Fee, 500),
    high: roundDollars(netCtc(ctc.high) + section184Fee, 500),
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
        // P3: sub-1.0 coverage scored with a larger-down investment tier
        // rather than treated as a flat failure (stress-test PROP-03).
        coverageScore = dscr >= 1.25 ? 90 : dscr >= 1.1 ? 75 : dscr >= 1.0 ? 60 : dscr >= 0.75 ? 45 : 30;
        coverageSummary = `Rent coverage (DSCR) ${(dscr * 100).toFixed(0)}% of payment`;
        assumptions.push({
          key: "dscr_coverage",
          description:
            dscr >= 1.0
              ? "For the investor cash-flow program, readiness was scored on how well the expected rent covers the payment (rent coverage), not on your personal debt-to-income ratio."
              : "The expected rent covers part of the payment. Programs that allow coverage below the full payment typically ask for a larger down payment and price higher; your personal debt-to-income ratio was not used.",
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

  // 11b. Hard safety gates (stress-500 P1): the weighted composite alone
  // floors around "Good fit" for extreme profiles (300 FICO + strong income
  // still averaged well). Genuinely impaired profiles must reach the lowest
  // tier regardless of how healthy the other pillars are. Each gate is a
  // categorical underwriting wall, not a tuned score — disclosed via the
  // gate's message and the matching obstacle.
  const noRatioEscape =
    effectivePrograms.includes(LoanType.DSCR) || effectivePrograms.includes(LoanType.ASSET_QUALIFIER);
  let gated: { score: number; tier: CompositeTier; message: string } | null = null;
  if (underwaterRefi) {
    gated = {
      score: Math.min(composite.score, 35),
      tier: CompositeTier.LIMITED_FIT,
      message:
        "Because the loan balance is higher than the home's estimated value, standard refinance programs generally do not apply to this scenario. The breakdown below explains why — and where a conversation with a licensed originator may still lead.",
    };
  } else if (credit.fico < 500) {
    gated = {
      score: Math.min(composite.score, 35),
      tier: CompositeTier.LIMITED_FIT,
      message:
        "Based on what you shared, credit improvement is likely required before most loan programs will consider the application. That is a starting point, not a verdict — the breakdown below shows where the file is strongest and the fastest levers to pull.",
    };
  } else if (dtiBackEnd > 0.65 && !noRatioEscape) {
    gated = {
      score: Math.min(composite.score, 39),
      tier: CompositeTier.LIMITED_FIT,
      message: targetPriceAssessment
        ? `At your ${fmtPrice(i.targetPurchasePrice)} target price, the estimated payment alone is about ${Math.round(targetPriceAssessment.dtiAtTarget * 100)}% of the income you shared — far above the ~45% most programs accept. That's a "not as things stand," not a final no: the "Your target price" section below shows exactly what changes it (income, down payment, price, or monthly debts).`
        : "The combined monthly obligations you shared are far above what lenders typically qualify. The breakdown below shows which debts move the number most — and a co-borrower, debt paydown, or a lower target price each change it.",
    };
  } else if (qualifyingIncome <= 0 && nonQm.length === 0) {
    gated = {
      score: Math.min(composite.score, 35),
      tier: CompositeTier.LIMITED_FIT,
      message:
        "There was not enough income information to estimate a qualification path. Alternative-documentation programs may still fit — the sections below explain what a lender would look at next.",
    };
  }
  const finalComposite = gated ?? composite;

  // 12. Obstacles + strengths
  const { primary, secondary, strengths } = identifyObstacles(i, subScores, credit, effectivePrograms, reservesMonths);

  // 14. Recommended program
  // Alt-doc headline fix (stress-500 batch-2 F2): when the file is an
  // alternative-documentation profile (or the borrower has no traditional
  // income), the closest-matching NON-QM program leads instead of an agency
  // program the borrower's documentation could not actually support. Framing
  // stays "worth exploring" — never "you qualify".
  let recommendedProgram = recommendProgram(effectivePrograms, i);
  const nonQmTypes = effectivePrograms.filter((p) => isNonQm(p));
  const altDocDocs: IncomeDocumentation[] = [
    IncomeDocumentation.BANK_STATEMENT_12,
    IncomeDocumentation.BANK_STATEMENT_24,
    IncomeDocumentation.ASSET_DEPLETION,
    IncomeDocumentation.DSCR_RENT,
    IncomeDocumentation.NO_DOC,
    IncomeDocumentation.CASH_UNDOCUMENTED,
  ];
  const isAltDocFile = (i.incomeDocumentation != null && altDocDocs.includes(i.incomeDocumentation)) || i.grossMonthlyIncome <= 0;
  if (nonQmTypes.length > 0 && isAltDocFile) {
    const nonQmRecommended = nonQmTypes.includes(LoanType.DSCR)
      ? LoanType.DSCR
      : nonQmTypes.includes(LoanType.ASSET_QUALIFIER)
        ? LoanType.ASSET_QUALIFIER
        : nonQmTypes[0];
    recommendedProgram = nonQmRecommended;
  }

  // 15. Disclaimers (non-QM variance disclosed whenever a non-QM program is surfaced)
  const disclaimers = buildDisclaimers({
    ...i,
    loanType: effectivePrograms.some((p) => isNonQm(p)) ? LoanType.BANK_STATEMENT : i.loanType,
  });

  // Guidance disclosures (stress-500 P4/P5): program-structure notes the
  // borrower can act on. These are educational notes, not qualification claims.
  if (annualMI > 0 && priceProgramForPiti === LoanType.CONVENTIONAL_CONF) {
    assumptions.push({
      key: "pmi_removal_note",
      description:
        "On conventional loans, mortgage insurance can typically be requested off once the loan balance reaches 80% of the home's value (and automatically ends at 78%) — unlike FHA insurance, which usually lasts the life of the loan.",
    });
  }
  if (effectivePrograms.includes(LoanType.USDA)) {
    assumptions.push({
      key: "usda_area_note",
      description:
        "USDA eligibility depends on the property's location (eligible rural areas) and household income limits for the county — the USDA's online map and your loan officer can confirm the address.",
    });
  }
  if (i.prefersInterestOnly) {
    assumptions.push({
      key: "interest_only_note",
      description:
        "Interest-only structures (a lower payment for the first years, with principal repaid later) exist mainly among jumbo and non-QM products, with rate and equity requirements that vary by lender — worth raising with the loan officer rather than a standard feature.",
    });
  }
  if (i.vaEntitlement === "partial") {
    assumptions.push({
      key: "va_entitlement_partial",
      description:
        "With partial (or previously used) VA entitlement, loans above your county's conforming limit typically require a down payment on the portion above the limit — the lender checks your Certificate of Eligibility.",
    });
  }

  // Deduplicate disclosed assumptions by key (stress-500 P1 fix companion):
  // several non-QM programs push the same assumption key with identical
  // framing, which previously produced duplicate React keys in the UI list.
  const assumptionsUsed: Assumption[] = assumptions.filter(
    (a, idx) => assumptions.findIndex((x) => x.key === a.key) === idx,
  );

  return {
    qualifyingIncome,
    // T17: presentation width keyed by confidence around the DTI-43 mid.
    maxLoanAmount: maxLoanRange,
    affordablePurchasePrice,
    estimatedPiti,
    cashToClose,
    dtiBackEnd,
    dtiFrontEnd,
    pitiBreakdown,
    reservesMonths: reservesMonths != null && Number.isFinite(reservesMonths) ? reservesMonths : null,
    subScores,
    compositeScore: finalComposite.score,
    compositeTier: finalComposite.tier,
    compositeTierMessage: finalComposite.message,
    primaryObstacle: primary,
    secondaryObstacles: secondary,
    strengths,
    targetPriceAssessment,
    eligiblePrograms: effectivePrograms,
    recommendedProgram,
    confidence,
    confidenceReasons: reasons,
    disclaimers,
    assumptionsUsed,
    engineVersion: ENGINE_VERSION,
  };
}

function computeConfidence(
  i: EngineInputs,
  extraMissing = 0,
): { confidence: Confidence; reasons: string[] } {
  const reasons: string[] = [];
  let missing = extraMissing;

  if (extraMissing > 0) {
    reasons.push("Down payment amount was assumed because none was provided");
  }
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

  // A phantom down payment always caps confidence at medium: the assumed 3.5%
  // materially shapes the cash/payment picture (spec framework §10.1).
  if (extraMissing > 0 && confidence === "high") confidence = "medium";

  return { confidence, reasons };
}

export { RANGE_WIDTH_BY_CONFIDENCE };
