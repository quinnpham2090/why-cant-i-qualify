/** Qualifying income by employment type (calculations.md §1, rule-engine-spec §4.2). */

import { IncomeType, type EngineInputs, type Assumption } from "./types";

export interface IncomeResult {
  monthly: number;
  assumptions: Assumption[];
}

export function calculateQualifyingIncome(i: EngineInputs): IncomeResult {
  const assumptions: Assumption[] = [];
  let gross = i.grossMonthlyIncome;

  // Side-business adjustment (stress-test P1, INCOME-05): a Schedule C
  // business reported alongside W-2/retirement income is averaged from tax
  // returns — a net LOSS subtracts from qualifying income rather than being
  // ignored. Positive net income is added (documented, not hair-cut again).
  let sideBusinessMonthly: number | null = null;
  if (
    i.sideBusinessNetMonthlyIncome != null &&
    i.incomeType !== IncomeType.SELF_EMPLOYED // pure SE income is handled below
  ) {
    sideBusinessMonthly = i.sideBusinessNetMonthlyIncome;
    gross = Math.max(0, gross + sideBusinessMonthly);
    assumptions.push(
      sideBusinessMonthly < 0
        ? {
            key: "side_business_loss",
            description:
              "The business loss on your tax returns was subtracted from your other income, following standard underwriting treatment.",
          }
        : {
            key: "side_business_income",
            description:
              "The net business income shown on your tax returns was added to your other income.",
          },
    );
  }

  switch (i.incomeType) {
    case IncomeType.W2:
      return { monthly: gross, assumptions };

    case IncomeType.SELF_EMPLOYED: {
      if (i.selfEmployedNetIncome2yrAvg != null && i.selfEmployedNetIncome2yrAvg > 0) {
        // Declining-trend adjustment (stress-test P1, INCOME-02/08): when the
        // borrower reports income declining over two years, underwriters use
        // the lower (recent) level rather than the two-year average.
        if (i.incomeTrend === "down") {
          const declining = gross * 0.85;
          assumptions.push({
            key: "self_employed_declining",
            description:
              "Because your income trended down over the past two years, a conservative recent-level estimate (85% of the amount you entered) was used instead of a two-year average.",
          });
          return { monthly: declining, assumptions };
        }
        return { monthly: i.selfEmployedNetIncome2yrAvg / 12, assumptions };
      }
      const haircut = i.incomeTrend === "down" ? 0.6 : 0.7;
      if (i.incomeTrend === "down") {
        assumptions.push({
          key: "self_employed_declining",
          description:
            "Self-employed income was estimated at 60% of the gross amount you entered, reflecting the declining two-year trend and no two-year tax-return average.",
        });
      } else {
        assumptions.push({
          key: "self_employed_haircut",
          description:
            "Self-employed income was estimated at 70% of the gross amount you entered, because no two-year tax-return average was provided.",
        });
      }
      return { monthly: gross * haircut, assumptions };
    }

    case IncomeType.COMMISSION: {
      // Declining trend (stress-test P1, INCOME-02): underwriters use the
      // lower of the two-year average or the most recent year when income
      // is falling. Represented here as a deeper haircut on the stated gross.
      const haircut = i.incomeTrend === "down" ? 0.7 : 0.85;
      assumptions.push({
        key: i.incomeTrend === "down" ? "commission_declining" : "commission_haircut",
        description:
          i.incomeTrend === "down"
            ? "Commission income was estimated at 70% of the gross amount you entered, reflecting a declining two-year trend."
            : "Commission income was estimated at 85% of the gross amount you entered (a conservative two-year average).",
      });
      return { monthly: gross * haircut, assumptions };
    }

    case IncomeType.VARIABLE_HOURLY: {
      const haircut = i.incomeTrend === "down" ? 0.8 : 0.9;
      if (i.incomeTrend === "down") {
        assumptions.push({
          key: "variable_income_declining",
          description:
            "Variable/hourly income was estimated at 80% of the gross amount you entered, reflecting a declining two-year trend.",
        });
      } else {
        assumptions.push({
          key: "variable_income_haircut",
          description:
            "Variable/hourly income was estimated at 90% of the gross amount you entered.",
        });
      }
      return { monthly: gross * haircut, assumptions };
    }

    case IncomeType.RETIRED_FIXED:
    case IncomeType.SOCIAL_SECURITY:
      return { monthly: gross, assumptions };

    case IncomeType.MIXED: {
      const haircut = i.incomeTrend === "down" ? 0.7 : 0.8;
      assumptions.push({
        key: i.incomeTrend === "down" ? "mixed_income_declining" : "mixed_income_haircut",
        description:
          i.incomeTrend === "down"
            ? "Mixed income was estimated at 70% of the amount you entered, reflecting a declining two-year trend."
            : "Mixed income was estimated at 80% of the gross amount you entered.",
      });
      return { monthly: gross * haircut, assumptions };
    }

    default: {
      const haircut = 0.75;
      assumptions.push({
        key: "unknown_income_haircut",
        description:
          "Income type was not specified, so the amount you entered was estimated at 75%.",
      });
      return { monthly: gross * haircut, assumptions };
    }
  }
}
