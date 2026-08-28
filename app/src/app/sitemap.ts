import type { MetadataRoute } from "next";

/**
 * Sitemap for the four public marketing/funnel routes (FIX_PLAN V1.6 P6).
 * Legal pages are crawlable but intentionally excluded from the priority list
 * tail; /api/* is never listed. The base URL comes from the deployment so the
 * preview and production domains both emit valid absolute URLs.
 */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://why-cant-i-qualify.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/check`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
