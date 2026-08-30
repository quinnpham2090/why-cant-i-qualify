import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/**
 * Blog content source (Stage 2 Phase 5). Markdown files live in
 * `src/content/blog/*.md` with a minimal frontmatter block:
 *
 *   ---
 *   title: …
 *   description: …
 *   date: 2026-01-15
 *   tags: [Florida, DTI]
 *   ---
 *
 * Everything is read at build time; the pages are statically generated.
 * The markdown is first-party (authored in this repo), so rendering the
 * parsed HTML directly is safe — no user-supplied content ever reaches it.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  tags: string[];
  html: string;
  readingMinutes: number;
}

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

/** Minimal frontmatter parser (no YAML dep for a flat key: value block). */
function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      // tags: [A, B] — keep as a single string; split later.
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }
  return { meta, body: raw.slice(match[0].length) };
}

function loadPost(fileName: string): BlogPost | null {
  if (!fileName.endsWith(".md")) return null;
  const fullPath = path.join(CONTENT_DIR, fileName);
  let raw: string;
  try {
    raw = fs.readFileSync(fullPath, "utf8");
  } catch {
    return null;
  }
  const { meta, body } = parseFrontmatter(raw);
  const slug = fileName.replace(/\.md$/, "");
  if (!meta.title) return null;
  const words = body.split(/\s+/).length;
  return {
    slug,
    title: meta.title,
    description: meta.description ?? "",
    date: meta.date ?? "",
    tags: (meta.tags ?? "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    html: marked.parse(body, { async: false }),
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
}

/** All posts, newest first. Memoized per process (build or server start). */
let cache: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cache) return cache;
  let files: string[] = [];
  try {
    files = fs.readdirSync(CONTENT_DIR);
  } catch {
    cache = [];
    return cache;
  }
  cache = files
    .map(loadPost)
    .filter((p): p is BlogPost => p != null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}

export function getPostBySlug(slug: string): BlogPost | null {
  // Slug is user-controlled: allow only plain filename chars, never "..".
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}
