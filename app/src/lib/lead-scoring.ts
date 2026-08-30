/**
 * Lead scoring (Stage 2 Phase 4 — Part 8 §8.2, 0–100 scale).
 *
 * Pure function over the raw lead payload's `inputs` + `result` JSON. Reads
 * defensively (the client supplies both), never throws on odd shapes, and
 * scores ONLY what the lead actually provided — missing facts score at the
 * floor of their band, never an optimistic guess.
 *
 * Spec reconciliation (documented deviation): Part 8 §8.2 allocates 30 pts to
 * "profile strength" but defines the per-pillar values across SEVEN pillars
 * (7 × 5 = 35 max), which would break the 100-point ceiling. This
 * implementation keeps the per-pillar values and caps the factor at 30.
 *
 * Tier bands (§8.2): 80–100 HOT · 60–79 WARM · 40–59 NURTURE ·
 * 20–39 FUTURE BUYER · 0–19 LOW INTENT.
 */

export type LeadTier = "hot" | "warm" | "nurture" | "future_buyer" | "low_intent";

export const TIER_LABELS: Record<LeadTier, string> = {
  hot: "Hot",
  warm: "Warm",
  nurture: "Nurture",
  future_buyer: "Future buyer",
  low_intent: "Low intent",
};

export interface LeadScoreFactor {
  name: string;
  points: number;
  max: number;
}

export interface LeadScoreResult {
  score: number; // 0–100, clamped
  tier: LeadTier;
  factors: LeadScoreFactor[];
}

/** Defensive numeric read: finite, within [min, max], else the fallback. */
function num(v: unknown, min: number, max: number, fallback: number | null): number | null {
  const n = typeof v === "number" ? v : typeof v === "string" && v.trim() !== "" ? Number(v) : NaN;
  if (!Number.isFinite(n) || n < min || n > max) return fallback;
  return n;
}

/** Timeline points (25 max): sooner = higher; researching = floor. */
function timelinePoints(timelineMonths: number | null): number {
  if (timelineMonths == null) return 5; // "just researching" / not stated
  if (timelineMonths <= 1) return 25;
  if (timelineMonths <= 3) return 20;
  if (timelineMonths <= 6) return 15;
  if (timelineMonths <= 12) return 10;
  return 5;
}

/** Profile strength (30 max after cap): 7 pillars × Strong 5 / Workable 3 / Tight 1 / Obstacle 0. */
function profilePoints(result: unknown): number {
  const subScores =
    typeof result === "object" && result != null
      ? (result as { subScores?: Record<string, unknown> }).subScores
      : undefined;
  if (typeof subScores !== "object" || subScores == null) return 0;

  let points = 0;
  for (const value of Object.values(subScores)) {
    const score = num((value as { score?: unknown })?.score, 0, 100, null);
    if (score == null) continue;
    if (score >= 85) points += 5; // strong
    else if (score >= 70) points += 3; // good/workable boundary per engine bands
    else if (score >= 55) points += 2; // workable
    else if (score >= 40) points += 1; // some considerations
    // < 40: obstacle territory → 0
  }
  return Math.min(points, 30); // spec cap (see header note)
}

/** Credit points (10 max): self-reported score bands per §8.2. */
function creditPoints(inputs: unknown): number {
  const i = inputs as { creditScoreSelfReported?: unknown; creditTierSelfReported?: unknown } | null;
  const fico = num(i?.creditScoreSelfReported, 300, 850, null);
  if (fico != null) {
    if (fico >= 760) return 10;
    if (fico >= 720) return 8;
    if (fico >= 680) return 6;
    if (fico >= 620) return 4;
    return 2;
  }
  // Band-only answer ("not sure" handled by the null above).
  const tier = typeof i?.creditTierSelfReported === "string" ? i.creditTierSelfReported : null;
  switch (tier) {
    case "excellent":
      return 10;
    case "good":
      return 8;
    case "fair":
      return 6;
    case "poor":
      return 2;
    default:
      return 3; // §8.2: "not sure" scores 3
  }
}

/** Down-payment points (10 max) from the down payment vs target price. */
function downPaymentPoints(inputs: unknown): number {
  const i = inputs as { downPaymentAvailable?: unknown; targetPurchasePrice?: unknown } | null;
  const down = num(i?.downPaymentAvailable, 0, 10_000_000, null);
  const price = num(i?.targetPurchasePrice, 1_000, 5_000_000, null);
  if (down == null || price == null || price <= 0) return 2; // unknown → thin floor
  const pct = (down / price) * 100;
  if (pct >= 20) return 10;
  if (pct >= 10) return 8;
  if (pct >= 5) return 6;
  if (pct >= 3) return 4;
  return 2;
}

/**
 * Capture depth (20 max). The score is computed at hard-capture time, so the
 * full-form baseline is 20. Kept as an explicit factor so soft-capture
 * scoring (Phase 5 nurture) can reuse the same function with depth 5.
 */
function capturePoints(captureDepth: "soft" | "hard"): number {
  return captureDepth === "hard" ? 20 : 5;
}

export function tierFromScore(score: number): LeadTier {
  if (score >= 80) return "hot";
  if (score >= 60) return "warm";
  if (score >= 40) return "nurture";
  if (score >= 20) return "future_buyer";
  return "low_intent";
}

export function computeLeadScore(
  inputs: unknown,
  result: unknown,
  captureDepth: "soft" | "hard" = "hard",
): LeadScoreResult {
  const i = (typeof inputs === "object" && inputs != null ? inputs : {}) as Record<string, unknown>;

  const timelineRaw = num(i.timelineMonths, 0, 1200, null);
  const timeline = timelineRaw;

  const factors: LeadScoreFactor[] = [
    { name: "timeline", points: timelinePoints(timeline), max: 25 },
    { name: "profile", points: profilePoints(result), max: 30 },
    { name: "capture", points: capturePoints(captureDepth), max: 20 },
    { name: "credit", points: creditPoints(inputs), max: 10 },
    { name: "down_payment", points: downPaymentPoints(inputs), max: 10 },
    // Engagement (5 max, §8.2) has no behavioral data in V1 — deliberately 0.
  ];

  const raw = factors.reduce((sum, f) => sum + f.points, 0);
  const score = Math.max(0, Math.min(100, raw));
  return { score, tier: tierFromScore(score), factors };
}
