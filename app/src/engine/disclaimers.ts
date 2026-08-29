/**
 * Disclaimer + assumption builders.
 *
 * These strings are the safe-language layer. They are subject to the
 * forbidden-word lint (compliance/copy-lint.ts) and must stay aligned with
 * SAFE_LANGUAGE_COMPLIANCE_REPORT.md §11.6.
 */

import { LoanType, ResidencyStatus, type EngineInputs } from "./types";
import { isNonQm } from "./non-qm";

/** Standard educational disclaimers shown with every result. */
export function buildDisclaimers(i: EngineInputs): string[] {
  const base = [
    "This is a preliminary, educational estimate. It is not a mortgage pre-approval and does not constitute a loan commitment.",
    "Actual qualification depends on full documentation, an underwriter's review, and lender-specific guidelines.",
    "Interest rates and program guidelines change. Your actual rate may differ.",
    "Self-reported information has not been verified. You can check your credit report at AnnualCreditReport.com before applying.",
    "Decisions here are based only on the financial information you provided. This tool does not consider race, color, religion, national origin, sex, marital status, age, or public-assistance income.",
  ];

  const programSpecific: string[] = [];
  if (i.loanType === LoanType.VA) {
    programSpecific.push(
      "This tool is not affiliated with the U.S. Department of Veterans Affairs. VA loans are issued by private lenders.",
    );
  }
  if (i.loanType === LoanType.USDA) {
    programSpecific.push(
      "This tool is not affiliated with the U.S. Department of Agriculture. USDA loans are issued by private lenders.",
    );
  }
  // Residency-gated program disclosures (LOAN_PROGRAMS_CATALOG.md §0)
  if (i.residencyStatus != null && i.residencyStatus !== ResidencyStatus.UNKNOWN) {
    const r = i.residencyStatus as string;
    if (r === "non_permanent_ead") {
      programSpecific.push(
        "Because work authorization documents carry an expiration date, lenders review the remaining time and your employment continuity carefully; documents such as the EAD, the visa notice of action, and the entry record will be needed.",
      );
    }
    if (r === "foreign_national" || r === "non_permanent_no_ead") {
      programSpecific.push(
        "Financing without US residency status is available through specialized lenders, typically at a lower percentage of the price with more cash reserves. Terms vary widely by lender and country of income.",
      );
    }
    if (r === "itin") {
      programSpecific.push(
        "ITIN mortgages are offered by a smaller set of lenders. They typically require a larger down payment and accept alternative credit histories, including cross-border credit reports.",
      );
    }
  }
  if (i.loanType === LoanType.SECTION_184) {
    programSpecific.push(
      "The Section 184 program is a HUD-backed loan program for enrolled members of federally recognized tribes. This tool is not affiliated with HUD or any tribal authority.",
    );
  }
  if (i.loanType === LoanType.NACA) {
    programSpecific.push(
      "The NACA program requires membership, counseling sessions, and volunteer commitments before a purchase. Terms shown here are educational; final terms come through NACA's own process.",
    );
  }
  if (i.loanType === LoanType.DPA_ASSISTED_FHA || i.loanType === LoanType.MCC) {
    programSpecific.push(
      "Down-payment-assistance and tax-credit programs have income limits, purchase-price caps, and sometimes first-time-buyer or education requirements that must be confirmed for your county before relying on them.",
    );
  }
  if (i.loanType === LoanType.BRIDGE_HARD_MONEY) {
    programSpecific.push(
      "Bridge and asset-based loans are short-term, higher-cost financing designed for investors and temporary situations. They are not a substitute for a standard mortgage and should be reviewed with a licensed professional before committing.",
    );
  }
  if (i.loanType === LoanType.CHATTEL_MANUFACTURED) {
    programSpecific.push(
      "A home-only (chattel) loan finances the manufactured home but not the land, which typically means a higher rate and shorter term than a land-and-home mortgage.",
    );
  }
  if (i.loanType === LoanType.PHYSICIAN) {
    programSpecific.push(
      "Doctor and professional mortgage programs are portfolio products whose eligibility rules (license type, employment contract, timing) vary significantly by lender.",
    );
  }
  if (isNonQm(i.loanType)) {
    programSpecific.push(
      "Some programs shown are non-QM loans offered by specialized lenders. They are not Qualified Mortgages under the CFPB's Ability-to-Repay rule, and their guidelines vary significantly by lender. This estimate reflects common published guidelines and does not determine eligibility.",
    );
  }

  return [...base, ...programSpecific];
}
