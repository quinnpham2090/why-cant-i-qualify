/**
 * Pure mortgage math (calculations.md §4–§9). No I/O. All rates are annual
 * percentages (e.g. 7.10 = 7.10%).
 */

/** Standard amortization P&I for a loan amount. */
export function monthlyPI(loanAmount: number, ratePct: number, termYears: number): number {
  const r = ratePct / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return loanAmount / n;
  return (loanAmount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
}

export interface PITIInputs {
  loanAmount: number;
  ratePct: number;
  termYears: number;
  annualPropertyTax: number;
  annualHazardInsurance: number;
  monthlyHoa: number;
  annualMortgageInsurance: number;
}

/** Full PITI (P&I + tax + insurance + MI + HOA). */
export function piti(i: PITIInputs): number {
  const pi = monthlyPI(i.loanAmount, i.ratePct, i.termYears);
  return (
    pi +
    i.annualPropertyTax / 12 +
    i.annualHazardInsurance / 12 +
    i.annualMortgageInsurance / 12 +
    i.monthlyHoa
  );
}

/**
 * Reverse solver: max loan amount such that back-end DTI hits the target.
 * (calculations.md §4.1)
 */
export function maxLoanAmount(
  qualifyingIncome: number,
  otherMonthlyDebt: number,
  ratePct: number,
  termYears: number,
  annualTax: number,
  annualInsurance: number,
  monthlyHoa: number,
  annualMI: number,
  targetBackEndDti = 0.43,
): number {
  const monthlyTI = annualTax / 12;
  const monthlyHI = annualInsurance / 12;
  const monthlyMI = annualMI / 12;

  const maxTotalDebt = qualifyingIncome * targetBackEndDti;
  const availableForPiti = maxTotalDebt - otherMonthlyDebt;
  const fixedTI = monthlyTI + monthlyHI + monthlyMI + monthlyHoa;
  const pitiMax = Math.max(0, availableForPiti);
  const piMax = pitiMax - fixedTI;
  if (piMax <= 0) return 0;

  const r = ratePct / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return piMax * n;
  return (piMax * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
}

/**
 * Affordable purchase price via bisection for a target back-end DTI.
 * (calculations.md §5)
 */
export function maxPurchasePrice(
  qualifyingIncome: number,
  otherMonthlyDebt: number,
  downPayment: number,
  ratePct: number,
  termYears: number,
  annualTaxRatePct: number,
  annualInsurance: number,
  monthlyHoa: number,
  annualMiOnLoanPct: number,
  targetDti = 0.43,
): number {
  let lo = downPayment;
  let hi = Math.max(downPayment * 8, downPayment + 100000);
  for (let iter = 0; iter < 60; iter++) {
    const mid = (lo + hi) / 2;
    const L = mid - downPayment;
    const annualTax = mid * (annualTaxRatePct / 100);
    const annualMI = L * (annualMiOnLoanPct / 100);
    const p = piti({
      loanAmount: L,
      ratePct,
      termYears,
      annualPropertyTax: annualTax,
      annualHazardInsurance: annualInsurance,
      monthlyHoa,
      annualMortgageInsurance: annualMI,
    });
    const dti = (p + otherMonthlyDebt) / Math.max(qualifyingIncome, 1);
    if (dti < targetDti) lo = mid;
    else hi = mid;
  }
  return lo;
}

/** Reserves in months of PITI. */
export function reserveMonths(liquidAssetsAfterClose: number, pitiMonthly: number): number {
  if (pitiMonthly <= 0) return liquidAssetsAfterClose > 0 ? Infinity : 0;
  return liquidAssetsAfterClose / pitiMonthly;
}

/** Cash-to-close range (low/mid/high) for a purchase price + program. */
export function cashToCloseRange(
  purchasePrice: number,
  midPct: number,
): { low: number; mid: number; high: number } {
  const lowPct = 2.0;
  const highPct = 6.0;
  return {
    low: (purchasePrice * lowPct) / 100,
    mid: (purchasePrice * midPct) / 100,
    high: (purchasePrice * highPct) / 100,
  };
}

/** Round to a clean dollar figure for display-friendly ranges. */
export function roundDollars(x: number, step = 500): number {
  return Math.round(x / step) * step;
}
