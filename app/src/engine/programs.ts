/** Loan program eligibility, assumed rate, and mortgage insurance. */

import {
  BASE_RATES,
  CONVENTIONAL_PMI_RATES,
  FHA_ANNUAL_MIP_GT90,
  FHA_ANNUAL_MIP_LTE90,
  MIN_DOWN_PCT,
  PROGRAM_MIN_FICO,
  USDA_ANNUAL_GUARANTEE_PCT,
} from "./tables";
import {
  LoanPurpose,
  LoanType,
  PropertyType,
  PropertyUse,
  ResidencyStatus,
  type EngineInputs,
} from "./types";
import type { CreditProfile } from "./credit";

/**
 * Residency eligibility for AGENCY programs (LOAN_PROGRAMS_CATALOG.md §0/§O).
 * FHA is hard-blocked for every non-permanent resident class: HUD removed
 * non-permanent residents from FHA Title I, Title II, and HECM (2025).
 * USDA additionally accepts only specific EAD codes for NPR borrowers.
 */
export function residencyAllowsAgency(
  residency: ResidencyStatus | null | undefined,
  program: "conventional" | "fha" | "va" | "usda",
): boolean {
  switch (program) {
    case "conventional":
      // Fannie/Freddie allow citizens, permanent residents, and non-permanent
      // residents with work authorization + SSN (incl. DACA w/ EAD).
      return (
        residency == null ||
        residency === ResidencyStatus.UNKNOWN ||
        residency === ResidencyStatus.US_CITIZEN ||
        residency === ResidencyStatus.PERMANENT_RESIDENT ||
        residency === ResidencyStatus.NON_PERMANENT_EAD
      );
    case "fha":
      // Citizens and permanent residents only (post-2025 HUD policy).
      return (
        residency == null ||
        residency === ResidencyStatus.UNKNOWN ||
        residency === ResidencyStatus.US_CITIZEN ||
        residency === ResidencyStatus.PERMANENT_RESIDENT
      );
    case "va":
      // VA eligibility flows from service; residency gates per VA/USCIS rules.
      return (
        residency == null ||
        residency === ResidencyStatus.UNKNOWN ||
        residency === ResidencyStatus.US_CITIZEN ||
        residency === ResidencyStatus.PERMANENT_RESIDENT ||
        residency === ResidencyStatus.NON_PERMANENT_EAD
      );
    case "usda":
      // Citizens/PRs; NPRs only with specific EAD codes (A1/A3/A5/A10/C11).
      return (
        residency == null ||
        residency === ResidencyStatus.UNKNOWN ||
        residency === ResidencyStatus.US_CITIZEN ||
        residency === ResidencyStatus.PERMANENT_RESIDENT ||
        residency === ResidencyStatus.NON_PERMANENT_EAD
      );
  }
}

/** True when the borrower class can use the ITIN program at all. */
export function residencyAllowsItin(residency: ResidencyStatus | null | undefined): boolean {
  return residency === ResidencyStatus.ITIN || residency == null || residency === ResidencyStatus.UNKNOWN;
}

/** True when the borrower class can use foreign-national programs. */
export function residencyAllowsForeignNational(
  residency: ResidencyStatus | null | undefined,
): boolean {
  return (
    residency === ResidencyStatus.FOREIGN_NATIONAL ||
    residency === ResidencyStatus.NON_PERMANENT_NO_EAD
  );
}

/**
 * Determine which programs the inputs are plausibly eligible for.
 * Order matters: strongest/most-specific fit first (drives pricing + advice).
 */
export function determineEligiblePrograms(i: EngineInputs, credit: CreditProfile): LoanType[] {
  const eligible: LoanType[] = [];
  const fico = credit.fico;
  const residency = i.residencyStatus;

  // Non-warrantable condos are excluded from ALL agency programs (Fannie,
  // Freddie, FHA, VA, USDA) — only non-QM/conventional-non-warrantable paths
  // remain (stress-test P1, PROP-01: the engine previously recommended
  // conventional for a building no agency lender would finance).
  const warrantable = i.propertyType !== PropertyType.CONDO_NONWARRANTABLE;
  const price = i.targetPurchasePrice ?? 0;
  const dpPct = price > 0 ? (i.downPaymentAvailable / price) * 100 : 0;

  // ---- Conventional family -------------------------------------------------
  if (
    warrantable &&
    residencyAllowsAgency(residency, "conventional") &&
    fico >= (PROGRAM_MIN_FICO.conventional_conf ?? 620) &&
    credit.waitingClear &&
    i.propertyUse === PropertyUse.PRIMARY
  ) {
    eligible.push(LoanType.CONVENTIONAL_CONF);
    // HomeReady/Home Possible: 3% down affordable tier with income limits
    // (Catalog A2/A3) — surfaced when the AMI flag is set or plausibly true
    // for a thin-down buyer; MLO verifies AMI at quote time.
    if (i.incomeAtOrBelow80Ami === true && dpPct >= 3 && dpPct < 5) {
      eligible.push(LoanType.HOME_READY);
    }
  }
  if (
    warrantable &&
    residencyAllowsAgency(residency, "conventional") &&
    fico >= (PROGRAM_MIN_FICO.conventional_jumbo ?? 700) &&
    credit.waitingClear &&
    (i.propertyUse === PropertyUse.PRIMARY || i.propertyUse === PropertyUse.SECOND_HOME)
  ) {
    eligible.push(LoanType.CONVENTIONAL_JUMBO);
  }

  // ---- FHA family (residency-hard-gated) -----------------------------------
  if (residencyAllowsAgency(residency, "fha") && warrantable && credit.waitingClear && i.propertyUse === PropertyUse.PRIMARY) {
    if (fico >= (PROGRAM_MIN_FICO.fha ?? 580)) {
      eligible.push(LoanType.FHA);
      // FHA + DPA second (Catalog B1/C8): 3.5% covered by assistance —
      // typically first-time buyers, but many HFA programs also serve
      // non-first-timers; surfaced when the borrower asked for DPA too
      // (stress-500 P3). County income/price limits verified by the MLO.
      if ((i.isFirstTimeBuyer === true || i.isInterestedInDownPaymentAssistance === true) && dpPct < 3.5) {
        eligible.push(LoanType.DPA_ASSISTED_FHA);
      }
    }
    // FHA 500-579 with 10% down (stress-test P3, CREDIT-01): the only standard
    // path below 580 — kept out of the generic FHA gate above, which requires
    // 580 for 3.5% down.
    if (fico >= 500 && fico < 580 && dpPct >= 10) {
      eligible.push(LoanType.FHA);
    }
  }

  // ---- VA (veteran status + residency + occupancy) ---------------------------
  // VA loans require the veteran to intend to occupy the home as their primary
  // residence (38 U.S.C. §3710(a)(1); VA Lenders Handbook ch.3). A pure
  // investment property is NOT eligible; a second home is generally NOT
  // eligible either (limited exceptions like MPR-waivable rebuilds are
  // lender/VA-case-specific, so they are not auto-approved here either).
  if (
    i.isVeteran === true &&
    i.loanType === LoanType.VA &&
    i.propertyUse === PropertyUse.PRIMARY &&
    fico >= 620 &&
    credit.waitingClear &&
    residencyAllowsAgency(residency, "va")
  ) {
    eligible.push(LoanType.VA);
  }

  // ---- USDA (rural + residency/EAD codes) ------------------------------------
  if (
    warrantable &&
    residencyAllowsAgency(residency, "usda") &&
    i.loanType === LoanType.USDA &&
    fico >= (PROGRAM_MIN_FICO.usda ?? 640) &&
    credit.waitingClear &&
    i.isRuralArea !== "no"
  ) {
    eligible.push(LoanType.USDA);
  }

  // ---- Section 184 (tribal members; any land status incl. trust land) -------
  // Catalog B11: available to enrolled members who are citizens or permanent
  // residents (previously ungated on residency at all).
  if (
    i.isTribalMember === true &&
    fico >= 500 &&
    credit.waitingClear &&
    (residency == null ||
      residency === ResidencyStatus.UNKNOWN ||
      residency === ResidencyStatus.US_CITIZEN ||
      residency === ResidencyStatus.PERMANENT_RESIDENT)
  ) {
    eligible.push(LoanType.SECTION_184);
  }

  // ---- FHA 500-579 with 10% down (stress-test P3, CREDIT-01): the only standard
  // path below 580 — kept out of the generic FHA gate above, which requires
  // 580 for 3.5% down.
  // (handled above inside the FHA block)

  // ---- Renovation & construction (Catalog I) ---------------------------------
  // Surface the renovation family when the purchase path includes repair
  // scope (borrower-side flag arrives with the property story); construction
  // one-time-close applies to any program-eligible buyer building new.
  // These inherit the residency gates of their base program (FHA/conv).
  if (
    eligible.includes(LoanType.FHA) ||
    eligible.includes(LoanType.CONVENTIONAL_CONF) ||
    eligible.includes(LoanType.CONVENTIONAL_JUMBO)
  ) {
    // Surfaced as alternates; the MLO/MCU sorts which product fits the job.
    // Gated on the explicit purpose choice to avoid noise on vanilla purchases.
    if (i.loanPurpose === LoanPurpose.RENOVATION) eligible.push(LoanType.RENOVATION);
    if (i.loanPurpose === LoanPurpose.CONSTRUCTION_OTC) eligible.push(LoanType.CONSTRUCTION_OTC);
  }

  // ---- Physician program (Catalog L1) ----------------------------------------
  if (
    i.isMedicalProfessional === true &&
    fico >= 680 &&
    credit.waitingClear &&
    (i.propertyUse === PropertyUse.PRIMARY || i.propertyUse === PropertyUse.SECOND_HOME)
  ) {
    eligible.push(LoanType.PHYSICIAN);
  }

  // ---- Chattel manufactured (Catalog J4): land-lease communities -------------
  if (
    i.propertyType === PropertyType.MANUFACTURED &&
    fico >= 600 &&
    (i.manufacturedConcerns == null ||
      !(i.manufacturedConcerns.leasedLand === false && i.manufacturedConcerns.noPermanentFoundation === true))
  ) {
    // Chattel is the fallback when land tenure fails the real-property tests.
    if (i.manufacturedConcerns?.leasedLand === true || i.manufacturedConcerns?.noPermanentFoundation === true) {
      eligible.push(LoanType.CHATTEL_MANUFACTURED);
    }
  }

  // ---- NACA (Catalog C1): counseling-based, no FICO floor --------------------
  // Surfaced as a referral path for thin files / 0-down seekers; membership +
  // counseling required, so it is never the priced recommendation.
  if (i.propertyUse === PropertyUse.PRIMARY && (fico >= 500 || i.hasOnTimeHousingHistory12mo === true)) {
    eligible.push(LoanType.NACA);
  }

  // ---- Bridge / hard money (Catalog G): MLO-referral flag only ---------------
  // Surfaced when conventional capacity is clearly out of reach and the
  // borrower has significant equity or an investor profile. Educational only.
  if (
    (fico < 580 || !credit.waitingClear) &&
    i.propertyUse === PropertyUse.INVESTMENT
  ) {
    eligible.push(LoanType.BRIDGE_HARD_MONEY);
  }

  return eligible.length > 0 ? eligible : [LoanType.UNKNOWN];
}

/** Pick a program to price: the user's choice if eligible, else the first eligible. */
export function priceProgram(i: EngineInputs, eligible: LoanType[]): LoanType {
  if (i.loanType !== LoanType.UNKNOWN && eligible.includes(i.loanType)) return i.loanType;
  return eligible[0];
}

/** Recommend a program (simple heuristic). */
export function recommendProgram(eligible: LoanType[], i: EngineInputs): LoanType | null {
  if (eligible.length === 0 || eligible[0] === LoanType.UNKNOWN) return null;
  if (eligible.includes(LoanType.VA)) return LoanType.VA;
  if (eligible.includes(LoanType.SECTION_184)) return LoanType.SECTION_184;
  if (eligible.includes(LoanType.FHA) && i.downPaymentAvailable < (i.targetPurchasePrice ?? 0) * 0.05) {
    return LoanType.FHA;
  }
  // Investor with documented rent: the rent-driven program is the headline.
  if (eligible.includes(LoanType.DSCR)) {
    return LoanType.DSCR;
  }
  return eligible.includes(LoanType.CONVENTIONAL_CONF) ? LoanType.CONVENTIONAL_CONF : eligible[0];
}

/** Illustrative assumed rate (calculations.md §12). */
export function assumedRate(program: LoanType, fico: number, ltvPct: number, termYears: number): number {
  const key = `${program}_${termYears}`;
  let rate = BASE_RATES[key] ?? 7.0;

  if (fico < 620) rate += 1.5;
  else if (fico < 680) rate += 0.75;
  else if (fico < 720) rate += 0.25;
  else if (fico < 760) rate += 0.0;
  else rate -= 0.25;

  if (ltvPct > 95) rate += 0.25;
  else if (ltvPct > 90) rate += 0.1;

  // Non-QM-style add-ons for programs priced off the conventional sheet.
  if (program === LoanType.PHYSICIAN) rate -= 0.1; // near-agency pricing
  if (program === LoanType.CHATTEL_MANUFACTURED) rate += 1.75; // chattel premium
  if (program === LoanType.BRIDGE_HARD_MONEY) rate += 5.5; // asset-based money
  if (program === LoanType.FOREIGN_NATIONAL) rate += 1.5;
  if (program === LoanType.FN_DSCR) rate += 1.25;

  return Math.round(rate * 1000) / 1000;
}

/** Annual mortgage insurance dollars for a loan. */
export function mortgageInsuranceAnnual(
  program: LoanType,
  loanAmount: number,
  ltvPct: number,
  fico: number,
): number {
  if (program === LoanType.CONVENTIONAL_CONF || program === LoanType.HOME_READY) {
    if (ltvPct <= 80) return 0;
    const rate = conventionalPmiRate(fico, ltvPct);
    return loanAmount * (rate / 100);
  }
  if (program === LoanType.FHA || program === LoanType.DPA_ASSISTED_FHA) {
    return loanAmount * ((ltvPct > 90 ? FHA_ANNUAL_MIP_GT90 : FHA_ANNUAL_MIP_LTE90) / 100);
  }
  if (program === LoanType.VA) return 0; // one-time funding fee, not annual MI
  if (program === LoanType.USDA) return loanAmount * (USDA_ANNUAL_GUARANTEE_PCT / 100);
  // Section 184 (catalog B11/HUD): the 1.5%/2.25% loan guarantee fee is a
  // ONE-TIME charge (typically financed), not annual mortgage insurance. The
  // previous code charged 1.5% of the loan amount every year, overstating
  // tribal borrowers' PITI. The one-time fee is added to cash-to-close in
  // runDiagnostic instead.
  if (program === LoanType.SECTION_184) return 0;
  if (program === LoanType.NACA) return 0; // no PMI by design
  if (program === LoanType.PHYSICIAN) return 0; // lender-paid/no-MI structure
  return 0;
}

function conventionalPmiRate(fico: number, ltvPct: number): number {
  let ficoBucket = "620-679";
  if (fico >= 760) ficoBucket = "760+";
  else if (fico >= 720) ficoBucket = "720-759";
  else if (fico >= 680) ficoBucket = "680-719";

  let ltvBucket = "85.01-90";
  if (ltvPct > 97) ltvBucket = "97.01-100";
  else if (ltvPct > 95) ltvBucket = "95.01-97";
  else if (ltvPct > 90) ltvBucket = "90.01-95";

  return CONVENTIONAL_PMI_RATES[ficoBucket]?.[ltvBucket] ?? 0.62;
}

/** Minimum down-payment percent for a program (used by obstacle detection). */
export function minDownPctFor(program: LoanType): number {
  switch (program) {
    case LoanType.VA:
    case LoanType.USDA:
    case LoanType.NACA:
      return 0;
    case LoanType.SECTION_184:
      // Catalog B11/HUD: 2.25% down (1.25% for loans over $50k) — previously
      // modeled as 0%, which hid a real down-payment gap from tribal members.
      return 2.25;
    case LoanType.PHYSICIAN:
      return 0; // 0-5% by lender; obstacle-free floor
    case LoanType.HOME_READY:
      return 3;
    case LoanType.DPA_ASSISTED_FHA:
      return 0; // DPA covers the 3.5%
    case LoanType.CHATTEL_MANUFACTURED:
      return 5;
    default:
      return MIN_DOWN_PCT[program] ?? 3.5;
  }
}
