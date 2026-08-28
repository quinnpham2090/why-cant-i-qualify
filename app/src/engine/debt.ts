/** Monthly debt calculation (calculations.md §2, thresholds.md T19). */

import type { Debt, EngineInputs } from "./types";

/** Per-debt monthly payment under FNMA-style treatment. */
export function monthlyDebt(d: Debt): number {
  const balance = d.balance ?? 0;
  const actual = d.actualMonthlyPayment ?? 0;

  switch (d.kind) {
    case "credit_card":
    case "revolving_line":
      // Greater of minimum due or 5% of balance (FNMA B3-6-05)
      return Math.max(d.minDue ?? 0, 0.05 * balance);

    case "auto_loan":
    case "student_loan_repayment":
      return actual;

    case "student_loan_deferred":
      // Greater of 1% of balance or fully-amortizing payment
      return Math.max(0.01 * balance, d.fullyAmortPayment ?? 0);

    case "alimony_paid":
      if ((d.monthsBehind ?? 0) >= 10) return 0; // excluded from DTI (severe credit issue)
      return d.courtOrderedAmount ?? 0;

    case "child_support_paid":
      return d.courtOrderedAmount ?? 0;

    case "thirty_day_account":
      return balance === 0 ? 0 : actual;

    case "cosigned_secondary":
      return d.otherPartyOnTime12mo ? 0 : actual;

    default:
      return actual;
  }
}

/**
 * Total existing monthly debt. Uses itemized debts when provided; otherwise
 * falls back to the single aggregate the consumer entered.
 */
export function calculateTotalExistingDebt(i: EngineInputs): number {
  if (i.debts && i.debts.length > 0) {
    return i.debts.reduce((sum, d) => sum + monthlyDebt(d), 0);
  }
  return i.totalMonthlyDebtPayments;
}
