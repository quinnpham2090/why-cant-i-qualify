/** Sub-scores and composite (rule-engine-spec §4.8–§4.9, thresholds T6–T9/T16). */

import {
  CATEGORY_WEIGHTS,
  DTI_SUBSCORE_BANDS,
  COMPOSITE_TIERS,
} from "./tables";
import { CompositeTier, IncomeType, PropertyType, type EngineInputs, type SubScore } from "./types";

export function scoreFromBand(value: number, bands: { max: number; score: number }[]): number {
  for (const b of bands) {
    if (value <= b.max) return b.score;
  }
  return bands[bands.length - 1]?.score ?? 0;
}

export function tierFromDti(dti: number): string {
  for (const b of DTI_SUBSCORE_BANDS) {
    if (dti <= b.max) return b.tier;
  }
  return "extreme";
}

export function scoreIncome(i: EngineInputs): SubScore {
  const years = i.employmentYearsInField ?? 2;
  let score: number;
  let tier: string;

  switch (i.incomeType) {
    case IncomeType.W2:
      if (years >= 2) { score = 95; tier = "stable_2yr"; }
      else if (years >= 1) { score = 80; tier = "1to2yr"; }
      else { score = 60; tier = "under_1yr"; }
      break;
    case IncomeType.SELF_EMPLOYED:
      if (years >= 2) { score = 70; tier = "self_employed_2yr"; }
      else { score = 50; tier = "self_employed_1yr"; }
      break;
    case IncomeType.COMMISSION:
      score = 75; tier = "commission_avg";
      break;
    case IncomeType.VARIABLE_HOURLY:
      score = 70; tier = "variable_avg";
      break;
    case IncomeType.RETIRED_FIXED:
    case IncomeType.SOCIAL_SECURITY:
      score = 85; tier = "fixed_stable";
      break;
    case IncomeType.MIXED:
      score = 65; tier = "mixed";
      break;
    default:
      score = 15; tier = "no_documentation";
  }

  return {
    category: "income",
    score,
    tier,
    summary: incomeTypeLabel(i.incomeType),
    redFlags: years < 2 && i.incomeType === IncomeType.SELF_EMPLOYED
      ? ["Fewer than two years of self-employment history can limit qualifying income."]
      : [],
  };
}

function incomeTypeLabel(t: IncomeType): string {
  const map: Record<string, string> = {
    w2: "W-2 employment",
    self_employed: "Self-employment",
    commission: "Commission-based",
    variable_hourly: "Variable/hourly",
    retired_fixed: "Fixed retirement income",
    social_security: "Social Security",
    mixed: "Mixed income",
    unknown: "Income type not specified",
  };
  return map[t] ?? t;
}

export function scoreCash(
  i: EngineInputs,
  downPaymentPct: number,
  cashToCloseRequired: number,
  reservesMonths: number | null,
): SubScore {
  let score = 0;
  const redFlags: string[] = [];

  // Down payment
  if (downPaymentPct >= 20) score += 35;
  else if (downPaymentPct >= 10) score += 25;
  else if (downPaymentPct >= 3.5) score += 15;
  else score += 5;

  // Reserves
  const months = reservesMonths;
  if (months == null) {
    // No reserves info: neutral
  } else if (months >= 6) score += 20;
  else if (months >= 2) score += 10;
  else if (months >= 0) score += 0;
  else {
    score -= 20;
    redFlags.push("Liquid assets after closing appear to be negative.");
  }

  // Cash-to-close coverage
  const liquid = i.liquidAssetsAfterClose ?? null;
  if (liquid == null) {
    // neutral
  } else if (cashToCloseRequired <= 0 || liquid > cashToCloseRequired) {
    score += 25;
  } else {
    score += Math.floor((25 * liquid) / Math.max(cashToCloseRequired, 1));
  }

  // Gift funds
  if (i.hasGiftFundsDocumented && downPaymentPct < 20) score += 10;

  // Unexplained deposits
  if (i.hasUnexplainedLargeDeposits) {
    score -= 15;
    redFlags.push("Large unexplained deposits may require additional documentation.");
  }

  return {
    category: "cash",
    score: Math.max(0, Math.min(100, score)),
    tier: downPaymentPct >= 20 ? "strong" : downPaymentPct >= 10 ? "workable" : "thin",
    summary: `Down payment ~${downPaymentPct.toFixed(1)}%.`,
    redFlags,
  };
}

export function scoreProperty(i: EngineInputs): SubScore {
  const pt = i.propertyType ?? PropertyType.UNKNOWN;
  let score = 100;
  let summary = "Single-family residence";
  const redFlags: string[] = [];

  switch (pt) {
    case PropertyType.SFR:
      score = 100; summary = "Single-family residence"; break;
    case PropertyType.TOWNHOME:
      score = 90; summary = "Townhome"; break;
    case PropertyType.CONDO_WARRANTABLE:
      score = 85; summary = "Warrantable condo"; break;
    case PropertyType.CONDO_NONWARRANTABLE:
      score = 40; summary = "Non-warrantable condo";
      redFlags.push("Non-warrantable condos are ineligible for FHA/VA/USDA and many conventional programs.");
      break;
    case PropertyType.MULTI_2_4:
      score = 80; summary = "Multi-family (2–4 unit)"; break;
    case PropertyType.MANUFACTURED:
      score = 50; summary = "Manufactured home";
      redFlags.push("Manufactured homes have narrower program eligibility.");
      break;
    default:
      score = 70; summary = "Property type not specified";
  }

  return { category: "property", score, tier: score >= 85 ? "strong" : "workable", summary, redFlags };
}

export function scoreDocumentation(i: EngineInputs): SubScore {
  const redFlags: string[] = [];
  let score = 100;

  if (i.incomeType === IncomeType.SELF_EMPLOYED) {
    const years = i.employmentYearsInField ?? 2;
    score = years >= 2 ? 70 : 45;
    if (years < 2) redFlags.push("Fewer than two years of tax returns will add documentation complexity.");
  } else if (i.incomeType === IncomeType.UNKNOWN) {
    score = 40;
  } else if (i.incomeType === IncomeType.COMMISSION || i.incomeType === IncomeType.VARIABLE_HOURLY) {
    score = 75;
  }

  if (i.hasUnexplainedLargeDeposits) {
    score = Math.max(0, score - 15);
    redFlags.push("Large unexplained deposits may require additional documentation.");
  }

  return {
    category: "documentation",
    score,
    tier: score >= 85 ? "simple" : score >= 60 ? "moderate" : "complex",
    summary: "Documentation complexity estimate.",
    redFlags,
  };
}

export function computeComposite(sub: Record<string, SubScore>): {
  score: number;
  tier: CompositeTier;
  message: string;
} {
  const w = CATEGORY_WEIGHTS;
  const composite = Math.round(
    w.debt * (sub.debt?.score ?? 0) +
      w.credit * (sub.credit?.score ?? 0) +
      w.income * (sub.income?.score ?? 0) +
      w.cash * (sub.cash?.score ?? 0) +
      w.payment * (sub.payment?.score ?? 0) +
      w.property * (sub.property?.score ?? 0) +
      w.documentation * (sub.documentation?.score ?? 0),
  );

  for (const band of COMPOSITE_TIERS) {
    if (composite >= band.min && composite <= band.max) {
      return { score: composite, tier: band.tier, message: band.message };
    }
  }
  const last = COMPOSITE_TIERS[COMPOSITE_TIERS.length - 1];
  return { score: composite, tier: last.tier, message: last.message };
}
