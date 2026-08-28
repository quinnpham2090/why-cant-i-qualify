/** Qualifying income by employment type (calculations.md §1, rule-engine-spec §4.2). */

import { IncomeType, type EngineInputs, type Assumption } from "./types";

export interface IncomeResult {
  monthly: number;
  assumptions: Assumption[];
}

export function calculateQualifyingIncome(i: EngineInputs): IncomeResult {
  const assumptions: Assumption[] = [];
  const gross = i.grossMonthlyIncome;

  switch (i.incomeType) {
    case IncomeType.W2:
      return { monthly: gross, assumptions };

    case IncomeType.SELF_EMPLOYED: {
      if (i.selfEmployedNetIncome2yrAvg != null && i.selfEmployedNetIncome2yrAvg > 0) {
        return { monthly: i.selfEmployedNetIncome2yrAvg / 12, assumptions };
      }
      const haircut = 0.7;
      assumptions.push({
        key: "self_employed_haircut",
        description:
          "Self-employed income was estimated at 70% of the gross amount you entered, because no two-year tax-return average was provided.",
      });
      return { monthly: gross * haircut, assumptions };
    }

    case IncomeType.COMMISSION: {
      const haircut = 0.85;
      assumptions.push({
        key: "commission_haircut",
        description:
          "Commission income was estimated at 85% of the gross amount you entered (a conservative two-year average).",
      });
      return { monthly: gross * haircut, assumptions };
    }

    case IncomeType.VARIABLE_HOURLY: {
      const haircut = 0.9;
      assumptions.push({
        key: "variable_income_haircut",
        description:
          "Variable/hourly income was estimated at 90% of the gross amount you entered.",
      });
      return { monthly: gross * haircut, assumptions };
    }

    case IncomeType.RETIRED_FIXED:
    case IncomeType.SOCIAL_SECURITY:
      return { monthly: gross, assumptions };

    case IncomeType.MIXED: {
      const haircut = 0.8;
      assumptions.push({
        key: "mixed_income_haircut",
        description: "Mixed income was estimated at 80% of the gross amount you entered.",
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
