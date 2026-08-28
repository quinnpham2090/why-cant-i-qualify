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
import { LoanType, PropertyUse, type EngineInputs } from "./types";
import type { CreditProfile } from "./credit";

/** Determine which programs the inputs are plausibly eligible for. */
export function determineEligiblePrograms(i: EngineInputs, credit: CreditProfile): LoanType[] {
  const eligible: LoanType[] = [];
  const fico = credit.fico;

  if (fico >= (PROGRAM_MIN_FICO.conventional_conf ?? 620) && credit.waitingClear && i.propertyUse === PropertyUse.PRIMARY) {
    eligible.push(LoanType.CONVENTIONAL_CONF);
  }
  if (fico >= (PROGRAM_MIN_FICO.conventional_jumbo ?? 700) && credit.waitingClear && (i.propertyUse === PropertyUse.PRIMARY || i.propertyUse === PropertyUse.SECOND_HOME)) {
    eligible.push(LoanType.CONVENTIONAL_JUMBO);
  }
  if (fico >= (PROGRAM_MIN_FICO.fha ?? 580) && credit.waitingClear && i.propertyUse === PropertyUse.PRIMARY) {
    eligible.push(LoanType.FHA);
  }
  if (i.loanType === LoanType.VA && fico >= 620 && credit.waitingClear) {
    eligible.push(LoanType.VA);
  }
  if (i.loanType === LoanType.USDA && fico >= (PROGRAM_MIN_FICO.usda ?? 640) && credit.waitingClear) {
    eligible.push(LoanType.USDA);
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
  if (eligible.includes(LoanType.FHA) && i.downPaymentAvailable < (i.targetPurchasePrice ?? 0) * 0.05) {
    return LoanType.FHA;
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

  return Math.round(rate * 1000) / 1000;
}

/** Annual mortgage insurance dollars for a loan. */
export function mortgageInsuranceAnnual(
  program: LoanType,
  loanAmount: number,
  ltvPct: number,
  fico: number,
): number {
  if (program === LoanType.CONVENTIONAL_CONF) {
    if (ltvPct <= 80) return 0;
    const rate = conventionalPmiRate(fico, ltvPct);
    return loanAmount * (rate / 100);
  }
  if (program === LoanType.FHA) {
    return loanAmount * ((ltvPct > 90 ? FHA_ANNUAL_MIP_GT90 : FHA_ANNUAL_MIP_LTE90) / 100);
  }
  if (program === LoanType.VA) return 0; // one-time funding fee, not annual MI
  if (program === LoanType.USDA) return loanAmount * (USDA_ANNUAL_GUARANTEE_PCT / 100);
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
  return MIN_DOWN_PCT[program] ?? 3.5;
}
