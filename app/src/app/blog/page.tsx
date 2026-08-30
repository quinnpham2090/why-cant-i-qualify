import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Learn — Plain-Language Mortgage Guides for Florida",
  description:
    "Educational guides on DTI, credit events, manufactured homes, self-employed income, and the Florida programs most people have never heard of.",
};

/**
 * Blog index (Stage 2 Phase 5) — statically generated from the markdown in
 * src/content/blog. Kept inside the LegalShell so the site chrome stays
 * consistent without a second layout.
 */
export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <LegalShell title="Learn" updated="Plain-language guides, no jargon and no gatekeeping">
      {posts.length === 0 && (
        <p>Guides are on the way — check back shortly.</p>
      )}
      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="rule-t pt-8 first:pt-0 first:border-t-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {post.readingMinutes} min read
            </p>
            <h2 className="mt-2 font-display text-2xl text-ink">
              <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-ink-2">{post.description}</p>
            <p className="mt-3">
              <Link href={`/blog/${post.slug}`} className="text-sm text-accent underline underline-offset-4">
                Read the guide →
              </Link>
            </p>
          </article>
        ))}
      </div>
      <div className="rule-t pt-8">
        <p className="text-ink-2">
          Want these numbers applied to <em>your</em> situation?{" "}
          <Link href="/check" className="text-accent underline underline-offset-4">
            Run the free readiness check
          </Link>{" "}
          — seven short steps, no credit pull.
        </p>
      </div>
    </LegalShell>
  );
}
