import type { MetadataRoute } from "next";

/**
 * Robots (FIX_PLAN V1.6 P6): crawl the public funnel, never the API or the
 * diagnostic internals. Sitemap reference included per the acceptance check.
 */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://why-cant-i-qualify.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
