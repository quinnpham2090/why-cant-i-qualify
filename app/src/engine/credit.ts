/** Credit profile + credit readiness (rule-engine-spec §4.5, thresholds T1/T10/T14). */

import {
  CREDIT_COMPOSITE_WEIGHTS,
  CREDIT_TIER_TO_FICO,
  FICO_BANDS,
  SELF_REPORTED_FICO_HAIRCUT,
  WAITING_PERIOD_MONTHS,
} from "./tables";
import {
  CreditEvent,
  CreditTier,
  LoanType,
  type Assumption,
  type EngineInputs,
  type SubScore,
} from "./types";

export interface CreditProfile {
  fico: number;
  waitingClear: boolean;
  yearsRemaining: number;
  had60DayLate24mo: boolean;
  had30DayLate12mo: boolean;
  collectionsClean: boolean;
}

export interface CreditResult {
  profile: CreditProfile;
  assumptions: Assumption[];
}

/** Resolve the effective FICO from self-reported score or coarse tier. */
export function buildCreditProfile(i: EngineInputs): CreditResult {
  const assumptions: Assumption[] = [];
  let fico: number;

  if (i.creditScoreSelfReported != null) {
    // Conservative haircut on self-reported score (disclosed on results page).
    fico = Math.max(300, i.creditScoreSelfReported - SELF_REPORTED_FICO_HAIRCUT);
    assumptions.push({
      key: "fico_haircut",
      description: `For planning purposes, the credit score you entered was reduced by ${SELF_REPORTED_FICO_HAIRCUT} points to stay conservative.`,
    });
  } else if (i.creditTierSelfReported && i.creditTierSelfReported !== CreditTier.UNKNOWN) {
    fico = CREDIT_TIER_TO_FICO[i.creditTierSelfReported] ?? 620;
    assumptions.push({
      key: "fico_from_tier",
      description:
        "You selected a credit range instead of a number, so a representative score for that range was used.",
    });
  } else {
    fico = 620;
    assumptions.push({
      key: "fico_default",
      description: "No credit score or range was provided, so a mid-range planning score was used.",
    });
  }

  // Waiting-period check for major credit events.
  let waitingClear = true;
  let yearsRemaining = 0;
  const event = i.creditEvent ?? CreditEvent.NONE;
  if (event !== CreditEvent.NONE && i.yearsSinceCreditEvent != null) {
    const programKey = loanTypeToWaitingKey(i.loanType);
    const required = WAITING_PERIOD_MONTHS[event]?.[programKey] ?? 24;
    const elapsedMonths = i.yearsSinceCreditEvent * 12;
    waitingClear = elapsedMonths >= required;
    yearsRemaining = Math.max(0, (required - elapsedMonths) / 12);
  }

  return {
    profile: {
      fico,
      waitingClear,
      yearsRemaining,
      had60DayLate24mo: i.had60DayLate24mo ?? false,
      had30DayLate12mo: i.had30DayLate12mo ?? false,
      collectionsClean: i.collectionsUnder2k ?? true,
    },
    assumptions,
  };
}

function loanTypeToWaitingKey(loanType: LoanType): string {
  switch (loanType) {
    case LoanType.FHA:
      return "fha";
    case LoanType.VA:
      return "va";
    case LoanType.USDA:
      return "usda";
    default:
      return "conventional";
  }
}

export function ficoBandSubScore(fico: number): number {
  for (const band of FICO_BANDS) {
    if (fico >= band.min && fico <= band.max) return band.subScore;
  }
  return 5;
}

/** Credit readiness sub-score (weighted composite, thresholds T14). */
export function scoreCredit(profile: CreditProfile): SubScore {
  const w = CREDIT_COMPOSITE_WEIGHTS;
  const ficoComponent = ficoBandSubScore(profile.fico);

  // Waiting period: full credit if clear, partial if time remains.
  const waitingComponent = profile.waitingClear
    ? 100
    : Math.max(0, 100 - profile.yearsRemaining * 25);

  const lateComponent = profile.had60DayLate24mo ? 0 : 100;
  const collectionsComponent = profile.collectionsClean ? 100 : 50;

  const score = Math.round(
    w.ficoBand * ficoComponent +
      w.waitingPeriodClear * waitingComponent +
      w.no60DayLate24mo * lateComponent +
      w.collectionsClean * collectionsComponent,
  );

  const redFlags: string[] = [];
  if (!profile.waitingClear) redFlags.push("A recent credit event is still within its waiting period.");
  if (profile.had60DayLate24mo) redFlags.push("A 60-day late payment in the last 24 months weighs on credit readiness.");

  return {
    category: "credit",
    score,
    tier: ficoBandLabel(profile.fico),
    summary: `Estimated planning score ${profile.fico}.`,
    redFlags,
  };
}

function ficoBandLabel(fico: number): string {
  for (const band of FICO_BANDS) {
    if (fico >= band.min && fico <= band.max) return band.tier;
  }
  return "ineligible";
}
