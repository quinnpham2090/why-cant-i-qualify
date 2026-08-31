import type { NextConfig } from "next";

// De-Florida renames (commit 015b8d9): keep already-delivered nurture-email
// links and any bookmarks working by redirecting the old slugs.
const BLOG_SLUG_REDIRECTS = [
  { from: "/blog/florida-first-time-homebuyer-programs", to: "/blog/first-time-homebuyer-programs" },
  { from: "/blog/self-employed-mortgage-florida", to: "/blog/self-employed-mortgage" },
  { from: "/blog/manufactured-homes-florida-financing", to: "/blog/manufactured-homes-financing" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return BLOG_SLUG_REDIRECTS.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true, // 308
    }));
  },
};

export default nextConfig;
