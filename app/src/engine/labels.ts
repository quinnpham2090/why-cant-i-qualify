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
