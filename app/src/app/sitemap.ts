import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

/**
 * Sitemap for the public marketing/funnel routes + blog (FIX_PLAN V1.6 P6,
 * extended in Stage 2 Phase 5). Legal pages are crawlable but intentionally
 * excluded from the priority list tail; /api/* and /admin/* are never listed.
 * The base URL comes from the deployment so the preview and production
 * domains both emit valid absolute URLs.
 */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://why-cant-i-qualify.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/check`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
  const posts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...core, ...posts];
}
