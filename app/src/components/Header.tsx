import Link from "next/link";

/**
 * Global site header (UX review P0): previously no page had any persistent
 * navigation — Footer.tsx was the only nav surface, so a user on /check,
 * /how-it-works, or /book had no way back to the homepage short of the
 * browser back button. This bar is intentionally minimal: brand mark (links
 * home), two orientation links, and exactly one CTA — the readiness check —
 * so it does not reintroduce the competing-CTA problem it's meant to fix.
 */
export function Header() {
  return (
    <header className="border-b border-rule bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/70 sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="font-display text-xl leading-none tracking-tight text-ink whitespace-nowrap"
        >
          Why Can&rsquo;t I Qualify?
          <span className="ml-2 align-middle font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
            Florida
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-6">
          <Link
            href="/how-it-works"
            className="hidden text-sm text-ink-2 hover:text-ink sm:inline"
          >
            How it works
          </Link>
          <Link href="/blog" className="hidden text-sm text-ink-2 hover:text-ink sm:inline">
            Learn
          </Link>
          <Link
            href="/check"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-on-brand transition-colors hover:bg-brand-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Start free check
          </Link>
        </nav>
      </div>
    </header>
  );
}
