/**
 * Non-QM program eligibility + supporting math.
 * Values from RESEARCH_NON_QM.md / tables-non-qm.ts. Educational estimate
 * only — disclaimers are mandatory wherever a non-QM program is surfaced.
 */

import { NON_QM_PROGRAMS, NON_QM_BASE_RATE, type NonQmProgram } from "./tables-non-qm";
import {
  IncomeDocumentation,
  LoanType,
  PropertyType,
  PropertyUse,
  type EngineInputs,
  type Assumption,
} from "./types";
import type { CreditProfile } from "./credit";

/** Monthly income implied by liquid assets over the program divisor. */
export function assetDepletionMonthlyIncome(liquidAssetsTotal: number, divisorMonths: number): number {
  if (liquidAssetsTotal <= 0 || divisorMonths <= 0) return 0;
  return liquidAssetsTotal / divisorMonths;
}

/** DSCR = gross monthly rent / monthly PITIA. >1.0 means rent covers the payment. */
export function dscrFromRent(expectedMonthlyRent: number, monthlyPitia: number): number | null {
  if (expectedMonthlyRent <= 0 || monthlyPitia <= 0) return null;
  return expectedMonthlyRent / monthlyPitia;
}

function documentationSupports(
  doc: IncomeDocumentation | undefined,
  program: string,
  i: EngineInputs,
): boolean {
  switch (program) {
    case "bank_statement":
      return doc === IncomeDocumentation.BANK_STATEMENT_12 || doc === IncomeDocumentation.BANK_STATEMENT_24 || doc === IncomeDocumentation.CASH_UNDOCUMENTED;
    case "pandl_only":
      return doc === IncomeDocumentation.PANDL_CPA || doc === IncomeDocumentation.PANDL_PREPARED;
    case "dscr":
      return true; // income docs not required; rent schedule drives it
    case "asset_qualifier":
      return doc === IncomeDocumentation.ASSET_DEPLETION || doc === IncomeDocumentation.NO_DOC || doc === IncomeDocumentation.CASH_UNDOCUMENTED;
    case "itin":
      // Only surfaced via the explicit ITIN opt-in (RESEARCH_NON_QM.md §5) —
      // never inferred from documentation type (stress-test P2 fix).
      return i.isItinBorrower === true;
    case "non_qm_jumbo":
      return doc !== IncomeDocumentation.UNKNOWN;
    case "non_warrantable":
      return true;
    default:
      return false;
  }
}

export interface NonQmEligibility {
  program: NonQmProgram;
  loanType: LoanType;
  /** Estimated "qualifying income" the program would use (0 for no-ratio). */
  qualifyingIncome: number;
  assumptions: Assumption[];
}

/**
 * Evaluate every non-QM program against the inputs and return those whose
 * published floors are plausibly met. Pure function.
 */
export function determineNonQmPrograms(
  i: EngineInputs,
  credit: CreditProfile,
): NonQmEligibility[] {
  const out: NonQmEligibility[] = [];
  const fico = credit.fico;
  const doc = i.incomeDocumentation ?? IncomeDocumentation.UNKNOWN;

  for (const key of Object.keys(NON_QM_PROGRAMS)) {
    const p = NON_QM_PROGRAMS[key];
    if (!documentationSupports(doc, key, i)) continue;
    if (fico < p.minFico) continue;

    const assumptions: Assumption[] = [];

    // Property-type gate for non-warrantable
    if (key === "non_warrantable" && i.propertyType !== PropertyType.CONDO_NONWARRANTABLE) continue;

    // Occupancy gates
    if (key === "dscr" && i.propertyUse !== PropertyUse.INVESTMENT) continue;
    if (key === "asset_qualifier" && i.propertyUse !== PropertyUse.PRIMARY && i.propertyUse !== PropertyUse.SECOND_HOME) continue;
    if (key === "bank_statement" && i.propertyUse === PropertyUse.INVESTMENT) continue;

    let qualifyingIncome = 0;

    if (key === "dscr") {
      // Needs rent to compute DSCR; PITIA is supplied by the caller via inputs
      const rent = i.expectedMonthlyRent ?? 0;
      if (rent <= 0) continue;
    }

    if (key === "asset_qualifier") {
      const assets = i.liquidAssetsTotal ?? 0;
      if (assets < (p.minLiquidAssets ?? 0)) continue;
      const divisor = p.assetDivisorMonths ?? 84;
      qualifyingIncome = assetDepletionMonthlyIncome(assets, divisor);
      assumptions.push({
        key: "asset_depletion_income",
        description: `Asset-based qualification was estimated by dividing your total liquid assets by ${divisor} months.`,
      });
    } else if (doc === IncomeDocumentation.BANK_STATEMENT_12 || doc === IncomeDocumentation.BANK_STATEMENT_24) {
      // Bank statements typically credit 75-100% of deposits; use a conservative 75%.
      qualifyingIncome = i.grossMonthlyIncome * 0.75;
      assumptions.push({
        key: "bank_statement_income",
        description:
          "For bank-statement programs, lenders typically credit a portion of documented deposits. A conservative 75% of the amount you entered was used.",
      });
    } else if (doc === IncomeDocumentation.ONE_O_NINE_NINE || doc === IncomeDocumentation.PANDL_CPA || doc === IncomeDocumentation.PANDL_PREPARED) {
      // P&L/1099 programs credit ~90% of the documented figure. When the
      // borrower's actual two-year average net income (tax returns) is known
      // and LOWER than the stated gross, use the net — aggressive write-offs
      // are exactly what P&L lending is designed around, but qualifying is
      // still based on the documented net (stress-test P1, INCOME-08).
      const net2yrMonthly =
        i.selfEmployedNetIncome2yrAvg != null && i.selfEmployedNetIncome2yrAvg > 0
          ? i.selfEmployedNetIncome2yrAvg / 12
          : null;
      const base = net2yrMonthly != null && net2yrMonthly < i.grossMonthlyIncome ? net2yrMonthly : i.grossMonthlyIncome;
      qualifyingIncome = base * 0.9;
      assumptions.push({
        key: "pnl_1099_income",
        description:
          "For profit-and-loss or 1099 documentation, a conservative 90% of the documented net income was used as qualifying income.",
      });
    } else if (doc === IncomeDocumentation.CASH_UNDOCUMENTED) {
      qualifyingIncome = i.grossMonthlyIncome * 0.5;
      assumptions.push({
        key: "cash_income_estimate",
        description:
          "Because part of your income may not be documented, a conservative estimate was used for programs that accept alternative documentation.",
      });
    } else {
      qualifyingIncome = i.grossMonthlyIncome;
    }

    if (p.rateAddOnPct > 0) {
      assumptions.push({
        key: "non_qm_rate_addon",
        description: `This program type typically prices about ${p.rateAddOnPct}% above comparable conventional loans.`,
      });
    }

    out.push({ program: p, loanType: programToLoanType(key), qualifyingIncome, assumptions });
  }

  return out;
}

function programToLoanType(key: string): LoanType {
  switch (key) {
    case "bank_statement": return LoanType.BANK_STATEMENT;
    case "pandl_only": return LoanType.PANDL_ONLY;
    case "dscr": return LoanType.DSCR;
    case "asset_qualifier": return LoanType.ASSET_QUALIFIER;
    case "itin": return LoanType.ITIN;
    case "non_qm_jumbo": return LoanType.NON_QM_JUMBO;
    case "non_warrantable": return LoanType.NON_WARRANTABLE;
    default: return LoanType.UNKNOWN;
  }
}

/** Assumed rate for a non-QM program. */
export function nonQmAssumedRate(program: NonQmProgram, fico: number): number {
  let rate = NON_QM_BASE_RATE + program.rateAddOnPct;
  if (fico < 660) rate += 1.0;
  else if (fico < 700) rate += 0.5;
  return Math.round(rate * 1000) / 1000;
}

/** True when the loan type is one of the non-QM programs. */
export function isNonQm(program: LoanType): boolean {
  return [
    LoanType.BANK_STATEMENT,
    LoanType.PANDL_ONLY,
    LoanType.DSCR,
    LoanType.ASSET_QUALIFIER,
    LoanType.ITIN,
    LoanType.NON_QM_JUMBO,
    LoanType.NON_WARRANTABLE,
  ].includes(program);
}
