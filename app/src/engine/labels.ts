/**
 * User-facing display labels. These are COPY and are subject to the
 * forbidden-word lint. Keep them neutral — no "approved"/"denied"/"guaranteed".
 */

import { CompositeTier, type Confidence } from "./types";

export const TIER_LABELS: Record<CompositeTier, string> = {
  [CompositeTier.STRONG_FIT]: "Strong fit",
  [CompositeTier.GOOD_FIT]: "Good fit",
  [CompositeTier.WORKABLE]: "Workable",
  [CompositeTier.SOME_CONSIDERATIONS]: "Some considerations",
  [CompositeTier.LIMITED_FIT]: "Limited fit",
};

export const CONFIDENCE_LABELS: Record<Confidence, string> = {
  high: "Higher confidence",
  medium: "Moderate confidence",
  low: "Lower confidence",
};

/** Headline for the results page (safe-language aligned). */
export const RESULTS_HEADLINE = "Your Mortgage Readiness Snapshot";

/** Sub-headline shown under the headline. */
export const RESULTS_SUBHEAD =
  "An educational estimate based on the information you provided — not a pre-approval or a commitment to lend.";

/**
 * Restorative landing headline (RESEARCH_EMPATHY.md §6): names the hurt once,
 * then pivots to agency. Copy-lint safe.
 */
export const HERO_HEADLINE = "Been told 'no' on a home loan?";
export const HERO_SUBHEAD =
  "Let's find out what's next. Get a free, no-credit-pull snapshot of where you may stand — and what may help.";

/** Questionnaire step-intro microcopy (RESEARCH_EMPATHY.md §6). */
export const STEP_INTROS = {
  goal: "Let's start with what you're looking for.",
  income: "Your income — we won't judge it. We'll just match it to the right programs.",
  credit: "A quick note on credit — knowing a rough range is enough. We never pull your credit.",
  money: "Almost there — just the money questions, then your snapshot.",
} as const;
