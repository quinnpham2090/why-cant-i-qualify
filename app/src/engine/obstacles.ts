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

  // 6b. Probationary / very short tenure in the CURRENT job (stress-test P2,
  // INCOME-06): underwriters want income likely to continue; a new job still
  // in an introductory period can't be verified as stable yet.
  if (i.isProbationary) {
    obstacles.push({
      rank: rank++, category: "documentation", severity: "primary",
      description:
        "Employment is still within a probationary or introductory period; most lenders wait until it ends, or need a strong history in the same field, before counting the income.",
      fixHorizon: "0-3 months",
    });
  } else if (i.employmentMonthsCurrentJob != null && i.employmentMonthsCurrentJob < 6) {
    obstacles.push({
      rank: rank++, category: "documentation", severity: "secondary",
      description:
        "Less than six months in the current job; a signed offer letter and strong history in the same field help the lender verify the income will continue.",
      fixHorizon: "0-3 months",
    });
  }

  // 6c. USDA rural gate (stress-test P2, PROP-07): when the borrower picked
  // USDA but the property is known to be non-rural, the program can't apply.
  if (i.loanType === LoanType.USDA && i.isRuralArea === "no") {
    obstacles.push({
      rank: rank++, category: "property", severity: "primary",
      description:
        "USDA financing applies to eligible rural areas; the property location you indicated does not qualify, so other programs would be a better fit.",
      fixHorizon: "out_of_user_control",
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
    // Specific disqualifiers when the questionnaire collected them (P2).
    const m = i.manufacturedConcerns;
    if (m && (m.leasedLand || m.singleWide || m.builtBefore1976 || m.noPermanentFoundation)) {
      const issues = [
        m.leasedLand ? "the home sits on leased land" : null,
        m.singleWide ? "it is a single-wide unit" : null,
        m.builtBefore1976 ? "it was built before 1976" : null,
        m.noPermanentFoundation ? "there is no permanent foundation" : null,
      ].filter(Boolean);
      obstacles.push({
        rank: rank++, category: "property", severity: "primary",
        description: `This manufactured home likely does not qualify for standard financing because ${issues.join(", ")}.`,
        fixHorizon: "out_of_user_control",
      });
    }
  }

  // 7c-b. Condominium review flags (stress-test P2, PROP-01/PROP-04): the
  // building itself — not the borrower — often drives the outcome.
  const c = i.condoConcerns;
  if (i.propertyType === PropertyType.CONDO_NONWARRANTABLE || (c && (c.pendingLitigation || c.investorOwnershipHigh || c.ownerDelinquencyHigh))) {
    const issues = [
      c?.pendingLitigation ? "pending litigation" : null,
      c?.investorOwnershipHigh ? "a high share of investor-owned or single-entity units" : null,
      c?.ownerDelinquencyHigh ? "many owners behind on association dues" : null,
    ].filter(Boolean);
    if (issues.length > 0) {
      obstacles.push({
        rank: rank++, category: "property", severity: "primary",
        description: `The condo association has ${issues.join(" and ")}, which fails most standard loan program review; a few specialized lenders still finance buildings like this.`,
        fixHorizon: "out_of_user_control",
      });
    }
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

  // 8b. Unseasoned reserves (stress-test P2, CASH-01/07): large recent
  // deposits need 60+ days of seasoning to count as reserves.
  if (i.reservesSeasoned60Days === false && (i.liquidAssetsAfterClose ?? 0) > 0) {
    obstacles.push({
      rank: rank++, category: "cash", severity: "secondary",
      description:
        "Some of the savings you listed were deposited recently; lenders usually require funds to be in the account for at least 60 days (or fully documented) before counting them.",
      fixHorizon: "0-3 months",
    });
  }

  // 8c. VA residual-income hint (stress-test P3, CASH-06): VA has no hard
  // DTI cap but expects residual income; 41-50% back-end on a VA loan gets a
  // pointer at the manual path instead of a plain DTI failure.
  if (
    i.loanType === LoanType.VA &&
    (sub.debt?.score ?? 100) < 50 &&
    (sub.debt?.score ?? 100) >= 30
  ) {
    obstacles.push({
      rank: rank++, category: "debt", severity: "secondary",
      description:
        "For VA loans, lenders can also look at residual income — the money left each month after taxes and living costs. A closer budget review sometimes works when the ratio alone looks tight.",
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
  // Documented housing history (stress-test P2): the strongest non-FICO
  // signal available to thin-file and fair-credit borrowers.
  if (i.hasOnTimeHousingHistory12mo) {
    strengths.push({
      rank: sRank++, category: "documentation",
      description: "A documented year of on-time housing payments is a strong sign for lenders, especially with a shorter credit history.",
    });
  }
  // Seasoned reserves (stress-test P2)
  if (i.reservesSeasoned60Days && (i.liquidAssetsAfterClose ?? 0) > 0) {
    strengths.push({
      rank: sRank++, category: "cash",
      description: "Savings that have been in your account for 60+ days count fully toward reserves.",
    });
  }

  return { primary, secondary, strengths };
}
