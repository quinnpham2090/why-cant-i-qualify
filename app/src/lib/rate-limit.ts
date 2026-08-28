/**
 * Minimal in-memory rate limiter for POST /api/lead (FIX_PLAN V1.6 §2 / P2).
 *
 * V1 scope: 5 requests per IP per 60-second sliding window, no new infra.
 * Per-instance only — a multi-region deploy would move this to Upstash/
 * Cloudflare rate limiting, but the free-tier single-region Vercel deploy is
 * exactly one instance, so a Map is sufficient and honest.
 *
 * The store is pruned lazily so an attacker rotating spoofed IPs cannot grow
 * it without bound.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const PRUNE_THRESHOLD = 10_000;

interface Bucket {
  count: number;
  reset: number;
}

const store = new Map<string, Bucket>();

function prune(now: number): void {
  if (store.size < PRUNE_THRESHOLD) return;
  for (const [key, bucket] of store) {
    if (now > bucket.reset) store.delete(key);
  }
}

export interface RateLimitResult {
  allowed: boolean;
  /** Seconds until the window resets (for the Retry-After header). */
  retryAfterSec: number;
}

export function rateLimit(
  key: string,
  max: number = MAX_REQUESTS,
  windowMs: number = WINDOW_MS,
): RateLimitResult {
  const now = Date.now();
  prune(now);

  const bucket = store.get(key);
  if (!bucket || now > bucket.reset) {
    store.set(key, { count: 1, reset: now + windowMs });
    return { allowed: true, retryAfterSec: 0 };
  }

  bucket.count += 1;
  if (bucket.count > max) {
    return { allowed: false, retryAfterSec: Math.max(1, Math.ceil((bucket.reset - now) / 1000)) };
  }
  return { allowed: true, retryAfterSec: 0 };
}

/** Test/ops helper: clear all buckets. */
export function resetRateLimits(): void {
  store.clear();
}
