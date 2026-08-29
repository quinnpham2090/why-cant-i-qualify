/** Obstacle + strength identification (rule-engine-spec §4.10, thresholds T20). */

import { LoanType, PropertyType, PropertyUse, IncomeType, type EngineInputs, type Obstacle, type Strength, type SubScore } from "./types";
import type { CreditProfile } from "./credit";
import { minDownPctFor } from "./programs";

export function identifyObstacles(
  i: EngineInputs,
  sub: Record<string, SubScore>,
  credit: CreditProfile,
  eligiblePrograms: LoanType[],
  reservesMonths?: number | null,
): { primary: Obstacle | null; secondary: Obstacle[]; strengths: Strength[] } {
  const obstacles: Obstacle[] = [];
  let rank = 1;

  // 1. FICO below all program floors
  if (credit.fico < 500) {
    obstacles.push({
      rank: rank++, category: "credit", severity: "primary",
      description: "The estimated credit score is below the typical minimum for the programs reviewed.",
      fixHorizon: "3-12 months",
    });
  }

  // 2. FICO below chosen program
  if (i.loanType !== LoanType.UNKNOWN && !eligiblePrograms.includes(i.loanType)) {
    obstacles.push({
      rank: rank++, category: "credit", severity: "primary",
      description: "The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better.",
      fixHorizon: "3-12 months",
    });
  }

  // 3. Credit event within waiting period
  if (!credit.waitingClear && credit.yearsRemaining > 0) {
    obstacles.push({
      rank: rank++, category: "credit", severity: "primary",
      description: `A prior credit event has about ${credit.yearsRemaining.toFixed(1)} year(s) left in its typical waiting period.`,
      fixHorizon: credit.yearsRemaining > 1 ? "12+ months" : "3-12 months",
    });
  }

  // 4. Down payment below minimum
  if (i.targetPurchasePrice && i.targetPurchasePrice > 0) {
    const dpPct = (i.downPaymentAvailable / i.targetPurchasePrice) * 100;
    const minPct = minDownPctFor(i.loanType !== LoanType.UNKNOWN ? i.loanType : (eligiblePrograms[0] ?? LoanType.UNKNOWN));
    if (dpPct < minPct) {
      obstacles.push({
        rank: rank++, category: "cash", severity: "primary",
        description: `The down payment you entered is below the typical ${minPct}% minimum for this program.`,
        fixHorizon: "0-3 months",
      });
    }
  }

  // 5. Back-end DTI > 50%
  if ((sub.debt?.score ?? 100) < 30) {
    obstacles.push({
      rank: rank++, category: "debt", severity: "primary",
      description: "The estimated debt-to-income ratio appears to be above 50%.",
      fixHorizon: "0-3 months",
    });
  }

  // 6. Self-employed under ~1.5 years
  if (i.incomeType === IncomeType.SELF_EMPLOYED && i.employmentYearsInField != null && i.employmentYearsInField < 1.5) {
    obstacles.push({
      rank: rank++, category: "documentation", severity: "primary",
      description: "Self-employment history of under two years typically requires more tax-return history to qualify.",
      fixHorizon: "12+ months",
    });
  }

  // 7. Non-warrantable condo for government programs
  if (
    i.propertyType === PropertyType.CONDO_NONWARRANTABLE &&
    (i.loanType === LoanType.FHA || i.loanType === LoanType.VA || i.loanType === LoanType.USDA)
  ) {
    obstacles.push({
      rank: rank++, category: "property", severity: "primary",
      description: "Non-warrantable condos are typically ineligible for FHA/VA/USDA programs.",
      fixHorizon: "0-3 months",
    });
  }

  // 7b. Non-warrantable condo: agency financing is unavailable regardless of
  // the borrower's profile (stress-test P1, PROP-01). Surface as its own
  // obstacle so the building — not a misleading DTI number — is the headline.
  if (i.propertyType === PropertyType.CONDO_NONWARRANTABLE) {
    obstacles.push({
      rank: rank++, category: "property", severity: "primary",
      description:
        "The condo building appears to be non-warrantable (for example pending litigation, high investor ownership, or delinquent association dues), which excludes most standard loan programs; specialized lenders handle these buildings.",
      fixHorizon: "out_of_user_control",
    });
  }

  // 7c. Manufactured-home eligibility walls (stress-test P1, PROP-02): land
  // tenure, foundation, and unit width decide eligibility, not credit.
  if (i.propertyType === PropertyType.MANUFACTURED) {
    obstacles.push({
      rank: rank++, category: "property", severity: "primary",
      description:
        "Manufactured homes must sit on owned land with a permanent foundation and typically must be a multi-section (double-wide or larger) home built after 1976 to use most standard loan programs.",
      fixHorizon: "out_of_user_control",
    });
  }

  // 7d. Investor multi-family down-payment floor (stress-test P1, PROP-03):
  // 2-4 unit investment properties carry a 20-25% minimum, not the 3-5%
  // owner-occupied minimum the generic check uses.
  if (
    i.propertyUse === PropertyUse.INVESTMENT &&
    i.propertyType === PropertyType.MULTI_2_4 &&
    i.targetPurchasePrice != null &&
    i.targetPurchasePrice > 0
  ) {
    const dpPct = (i.downPaymentAvailable / i.targetPurchasePrice) * 100;
    if (dpPct < 20) {
      obstacles.push({
        rank: rank++, category: "cash", severity: "primary",
        description:
          "Investment properties with 2-4 units typically require a down payment of 20% or more; the amount entered is below that level.",
        fixHorizon: "0-3 months",
      });
    }
  }

  // 8. Negative or depleted reserves (stress-test calibration: CASH-08 —
  // wiping savings on the down payment scored strong_fit when the reserve
  // obstacle only fired below zero).
  if ((sub.cash?.score ?? 100) < 0 || (sub.cash?.redFlags ?? []).some((f) => f.includes("negative"))) {
    obstacles.push({
      rank: rank++, category: "cash", severity: "primary",
      description: "Liquid assets after closing may be negative.",
      fixHorizon: "0-3 months",
    });
  } else if (i.liquidAssetsAfterClose != null && i.liquidAssetsAfterClose < 1) {
    obstacles.push({
      rank: rank++, category: "cash", severity: "primary",
      description:
        "You may have little or nothing left in savings after closing; lenders typically want at least one to six months of payments in reserve after the loan closes.",
      fixHorizon: "0-3 months",
    });
  } else if (i.liquidAssetsAfterClose != null && reservesMonths != null && reservesMonths < 1) {
    obstacles.push({
      rank: rank++, category: "cash", severity: "secondary",
      description:
        "Savings after closing cover less than one month of payments; building toward two to six months of reserves would strengthen the file.",
      fixHorizon: "0-3 months",
    });
  }

  const primary = obstacles[0] ?? null;
  const secondary = obstacles.slice(1, 4).map((o, idx) => ({ ...o, rank: idx + 1, severity: "secondary" as const }));

  // Strengths
  const strengths: Strength[] = [];
  let sRank = 1;
  if (credit.fico >= 760) {
    strengths.push({ rank: sRank++, category: "credit", description: "Estimated credit score is in the top pricing tier." });
  }
  if ((sub.debt?.score ?? 0) >= 90) {
    strengths.push({ rank: sRank++, category: "debt", description: "Estimated debt-to-income ratio is well within typical limits." });
  }
  if (i.targetPurchasePrice && i.targetPurchasePrice > 0 && i.downPaymentAvailable / i.targetPurchasePrice >= 0.2) {
    strengths.push({ rank: sRank++, category: "cash", description: "A down payment of 20% or more typically removes the need for mortgage insurance." });
  }

  return { primary, secondary, strengths };
}
