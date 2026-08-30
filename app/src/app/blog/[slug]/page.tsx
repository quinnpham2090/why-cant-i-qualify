import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalShell } from "@/components/LegalShell";
import { DISCLOSURES } from "@/config/disclosures";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

/**
 * Blog post page (Stage 2 Phase 5) — statically generated per post with
 * Article JSON-LD for rich results. Content is first-party markdown parsed at
 * build time (src/lib/blog.ts); no user input reaches the rendered HTML.
 */

export function generateStaticParams(): { slug: string }[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Guide not found" };
  return {
    title: post.title,
    description: post.description,
  };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://why-cant-i-qualify.vercel.app";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: DISCLOSURES.mlo.name,
      jobTitle: "Mortgage Loan Originator",
    },
    publisher: {
      "@type": "Organization",
      name: DISCLOSURES.broker.name,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Static, first-party JSON — no user input is interpolated here.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalShell title={post.title} updated={new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}>
        {/* Trusted build-time markdown — no user input reaches this HTML. */}
        <div
          className="blog-prose space-y-4 [&_h2]:pt-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_em]:text-ink"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <p className="rule-t pt-6 text-sm text-ink-3">
          Educational content only — not a loan commitment, not advice, and not a
          credit decision. Talk to a licensed originator about your specific
          situation.
        </p>
      </LegalShell>
    </>
  );
}
