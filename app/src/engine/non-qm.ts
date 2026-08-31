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
  ResidencyStatus,
  type EngineInputs,
  type Assumption,
} from "./types";
import type { CreditProfile } from "./credit";
import { residencyAllowsForeignNational, residencyAllowsItin } from "./programs";

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
      // Surfaced only for the ITIN residency class (Catalog §0/E8) — the
      // class IS the explicit opt-in; never inferred from documentation type.
      // (Keeps the legacy isItinBorrower flag working as an alias.)
      return i.isItinBorrower === true || i.residencyStatus === ResidencyStatus.ITIN;
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
 * Foreign-national program eligibility (Catalog E11/E12/F): available to
 * foreign nationals and visa holders without work authorization — the
 * classes agency lending cannot reach. No US FICO requirement.
 */
function foreignNationalEligible(
  i: EngineInputs,
  credit: CreditProfile,
  key: string,
): { ok: boolean; qualifyingIncome: number; assumptions: Assumption[] } {
  const assumptions: Assumption[] = [];
  const residency = i.residencyStatus;
  if (!residencyAllowsForeignNational(residency)) return { ok: false, qualifyingIncome: 0, assumptions };

  const price = i.targetPurchasePrice ?? 0;
  const dpPct = price > 0 ? (i.downPaymentAvailable / price) * 100 : 0;

  if (key === "foreign_national") {
    // Alt-doc purchase: 25-30% down, verifiable foreign/US income or assets.
    if (dpPct < 25) return { ok: false, qualifyingIncome: 0, assumptions };
    const income = i.grossMonthlyIncome > 0 ? i.grossMonthlyIncome : 0;
    assumptions.push({
      key: "foreign_national_program",
      description:
        "Foreign-national programs lend without US credit history, typically at 65-75% of the price with 12 months of reserves. Income or assets are documented through international statements.",
    });
    return { ok: true, qualifyingIncome: income, assumptions };
  }

  if (key === "fn_dscr") {
    // Investor DSCR: no income verification at all — rent drives it.
    const rent = i.expectedMonthlyRent ?? 0;
    if (rent <= 0) return { ok: false, qualifyingIncome: 0, assumptions };
    assumptions.push({
      key: "foreign_national_dscr",
      description:
        "Foreign-national investor programs qualify on the rent a property produces rather than personal income, and commonly close in an LLC name.",
    });
    return { ok: true, qualifyingIncome: 0, assumptions };
  }

  return { ok: false, qualifyingIncome: 0, assumptions };
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
  const residency = i.residencyStatus;

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

    // Residency gates (Catalog §O): ITIN programs need the ITIN class;
    // US-citizen/PR/NPR-EAD borrowers use the standard non-QM menu.
    if (key === "itin" && !residencyAllowsItin(residency)) continue;

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
      // Bank-statement programs qualify on DEPOSITS, not tax-return income
      // (stress-500 batch-2: the previous code credited 75% of the
      // "gross monthly income" field, which a no-traditional-income borrower
      // leaves at zero). Lenders typically credit 75-100% of documented
      // deposits — the conservative 75% factor is disclosed.
      const depositBase = i.monthlyDepositsTotal != null && i.monthlyDepositsTotal > 0
        ? i.monthlyDepositsTotal
        : i.grossMonthlyIncome;
      qualifyingIncome = depositBase * 0.75;
      assumptions.push({
        key: "bank_statement_income",
        description:
          "For bank-statement programs, qualification is based on documented deposits rather than tax-return income. A conservative 75% of the average monthly deposits you entered was used as qualifying income.",
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

  // Foreign-national programs (outside NON_QM_PROGRAMS table — residency-driven)
  for (const key of ["foreign_national", "fn_dscr"] as const) {
    const fn = foreignNationalEligible(i, credit, key);
    if (!fn.ok) continue;
    out.push({
      program: {
        program: key,
        minFico: 0, // no US FICO required
        maxLtvPct: key === "fn_dscr" ? 75 : 70,
        minDownPct: key === "fn_dscr" ? 25 : 30,
        reservesMonths: 12,
        rateAddOnPct: key === "fn_dscr" ? 1.25 : 1.5,
        maxBackEndDtiPct: key === "fn_dscr" ? null : 45,
        lastVerified: "2026-08-29",
        verify: false,
        source: "LOAN_PROGRAMS_CATALOG.md E11/E12 (live research 2026-08-29)",
      },
      loanType: key === "fn_dscr" ? LoanType.FN_DSCR : LoanType.FOREIGN_NATIONAL,
      qualifyingIncome: fn.qualifyingIncome,
      assumptions: fn.assumptions,
    });
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
    case "foreign_national": return LoanType.FOREIGN_NATIONAL;
    case "fn_dscr": return LoanType.FN_DSCR;
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

/**
 * Inverse of `programToLoanType`: the non-QM program table row for a loan
 * type, or null when the type is not one of the non-QM programs. Used by the
 * pipeline to price non-QM selections with the program's own assumed rate
 * (base + add-on) instead of the agency fallback rate — previously
 * `nonQmAssumedRate` was dead code and non-QM PITI was priced as if it were
 * an agency loan.
 */
export function nonQmProgramFor(loanType: LoanType): NonQmProgram | null {
  const key = (() => {
    switch (loanType) {
      case LoanType.BANK_STATEMENT: return "bank_statement";
      case LoanType.PANDL_ONLY: return "pandl_only";
      case LoanType.DSCR: return "dscr";
      case LoanType.ASSET_QUALIFIER: return "asset_qualifier";
      case LoanType.ITIN: return "itin";
      case LoanType.NON_QM_JUMBO: return "non_qm_jumbo";
      case LoanType.NON_WARRANTABLE: return "non_warrantable";
      case LoanType.FOREIGN_NATIONAL: return "foreign_national";
      case LoanType.FN_DSCR: return "fn_dscr";
      default: return null;
    }
  })();
  if (key == null) return null;
  return NON_QM_PROGRAMS[key] ?? null;
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
    LoanType.FOREIGN_NATIONAL,
    LoanType.FN_DSCR,
    LoanType.CHATTEL_MANUFACTURED,
    LoanType.BRIDGE_HARD_MONEY,
  ].includes(program);
}
