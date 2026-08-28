/**
 * Disclaimer + assumption builders.
 *
 * These strings are the safe-language layer. They are subject to the
 * forbidden-word lint (compliance/copy-lint.ts) and must stay aligned with
 * SAFE_LANGUAGE_COMPLIANCE_REPORT.md §11.6.
 */

import { LoanType, type EngineInputs } from "./types";
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
  if (isNonQm(i.loanType)) {
    programSpecific.push(
      "Some programs shown are non-QM loans offered by specialized lenders. They are not Qualified Mortgages under the CFPB's Ability-to-Repay rule, and their guidelines vary significantly by lender. This estimate reflects common published guidelines and does not determine eligibility.",
    );
  }

  return [...base, ...programSpecific];
}
