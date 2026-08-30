/**
 * Shared admin-key auth helpers (Stage 4 QA fix 2).
 *
 * Used by BOTH `src/proxy.ts` (edge runtime — node:crypto is unavailable
 * there) and the /api/admin routes, so the two enforcement points can never
 * disagree about which credentials are accepted again.
 *
 * The comparison is a constant-time string compare (XOR-accumulate). Like
 * node's timingSafeEqual, string length still leaks via the early return —
 * acceptable for a single-operator random key, and documented here.
 */

/** Constant-time string equality (works in edge + node runtimes). */
export function safeKeyEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

/**
 * Extract the admin key from a request. Accepted styles:
 *  - `X-API-Key: <key>` header, or
 *  - `Authorization: Basic <b64(user:key)>` (browser prompt from the proxy;
 *    any username, the admin key as the password).
 * Returns the raw provided key, or null when neither style is present.
 */
export function extractAdminKey(request: Request): string | null {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey && apiKey.length > 0) return apiKey;
  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    try {
      // atob works in edge + node 18+; Buffer.from(base64) is node-only.
      const decoded = atob(auth.slice(6));
      return decoded.slice(decoded.indexOf(":") + 1);
    } catch {
      return null;
    }
  }
  return null;
}

/** True when the request presents the configured admin key. */
export function adminKeyOk(request: Request): boolean {
  const expected = process.env.NEXT_ADMIN_API_KEY;
  if (!expected) return false;
  const provided = extractAdminKey(request);
  if (!provided) return false;
  return safeKeyEqual(provided, expected);
}
