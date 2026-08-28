/** Obstacle + strength identification (rule-engine-spec §4.10, thresholds T20). */

import { LoanType, PropertyType, IncomeType, type EngineInputs, type Obstacle, type Strength, type SubScore } from "./types";
import type { CreditProfile } from "./credit";
import { minDownPctFor } from "./programs";

export function identifyObstacles(
  i: EngineInputs,
  sub: Record<string, SubScore>,
  credit: CreditProfile,
  eligiblePrograms: LoanType[],
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

  // 8. Negative reserves
  if ((sub.cash?.score ?? 100) < 0 || (sub.cash?.redFlags ?? []).some((f) => f.includes("negative"))) {
    obstacles.push({
      rank: rank++, category: "cash", severity: "primary",
      description: "Liquid assets after closing may be negative.",
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
