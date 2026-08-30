import { NextResponse } from "next/server";
import { extractAdminKey, safeKeyEqual } from "./lib/admin-auth";

/**
 * Security headers on every non-static route (Stage 2 Phase 1.5).
 *
 * Next.js 16 note: the `middleware.ts` file convention was renamed to
 * `proxy.ts` (export named `proxy`); functionality is identical. This file
 * sits in `src/` next to the `app` directory, per the proxy docs.
 *
 * CSP is intentionally NOT set here: the app uses inline styles injected by
 * Next.js and Google Fonts via next/font; a nonce-based CSP belongs in the
 * next.config headers with proper nonce plumbing (V2 hardening), and a naive
 * 'unsafe-inline' policy would add no protection. The headers below are the
 * safe, zero-risk set. HSTS is enabled automatically at the Vercel edge.
 */
export function proxy(request: Request) {
  // Admin routes (Stage 2 Phase 4): browser-native Basic auth challenge. The
  // operator enters any username and the admin key as the password; the
  // browser resends the credentials automatically for page + fetch calls.
  // `X-API-Key: <admin key>` is ALSO accepted (Stage 4 QA fix 2) so the
  // documented /api/admin contract works — previously the proxy rejected
  // that header before the API route could validate it. The API route
  // re-validates with the same shared helpers (src/lib/admin-auth.ts); this
  // proxy check exists to drive the browser prompt and gate page loads.
  const path = new URL(request.url).pathname;
  if (path.startsWith("/admin") || path.startsWith("/api/admin")) {
    const expected = process.env.NEXT_ADMIN_API_KEY;
    if (!expected) {
      return new NextResponse("Admin dashboard is not configured.", { status: 503 });
    }
    const provided = extractAdminKey(request);
    if (!provided || !safeKeyEqual(provided, expected)) {
      return new NextResponse("Authentication required.", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="admin", charset="UTF-8"' },
      });
    }
  }

  const response = NextResponse.next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  );
  return response;
}

export const config = {
  // Exclude Next.js static assets, images, and the prerendered files that are
  // served from the CDN edge (favicon/OG/sitemap/robots) — they are immutable
  // and header changes there only bust caches.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|opengraph-image|sitemap.xml|robots.txt).*)",
  ],
};
