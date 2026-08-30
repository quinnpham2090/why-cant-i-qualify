import Link from "next/link";
import { DISCLOSURES, FOOTER_DISCLOSURE_LINES } from "@/config/disclosures";
import { EHLMark } from "@/components/EHLMark";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink text-ink-2">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Legal links — mono uppercase, editorial index style */}
        <nav
          aria-label="Footer"
          className="mb-10 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em]"
        >
          <Link href="/how-it-works" className="underline underline-offset-4 hover:text-accent">
            How It Works
          </Link>
          <Link href="/blog" className="underline underline-offset-4 hover:text-accent">
            Learn
          </Link>
          <Link href="/privacy" className="underline underline-offset-4 hover:text-accent">
            Privacy Policy
          </Link>
          <Link href="/terms" className="underline underline-offset-4 hover:text-accent">
            Terms of Use
          </Link>
          <Link href="/accessibility" className="underline underline-offset-4 hover:text-accent">
            Accessibility
          </Link>
          <Link href="/do-not-sell" className="underline underline-offset-4 hover:text-accent">
            Do Not Sell or Share My Information
          </Link>
        </nav>

        {/* Equal Housing + disclosures — official EHO mark (FIX_PLAN P5) */}
        <div className="flex items-start gap-3">
          <EHLMark className="mt-0.5 h-[30px] w-[30px] shrink-0 text-ink" />
          <div>
            <p className="font-semibold text-ink">Equal Housing Lender</p>
            <p className="mt-1 max-w-xl text-xs leading-relaxed">
              Federal law prohibits discrimination based on race, color, national
              origin, religion, sex (including gender identity and sexual
              orientation), familial status, or disability in housing-related
              transactions.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-1 border-t border-rule pt-6 text-xs leading-relaxed">
          {FOOTER_DISCLOSURE_LINES.map((line) => (
            <p key={line}>{line}</p>
          ))}
          {/* FL §494.0026(2): business email + phone displayed on request paths */}
          <p>
            Contact:{" "}
            <a
              href={`mailto:${DISCLOSURES.contact.email}`}
              className="underline underline-offset-2 hover:text-accent"
            >
              {DISCLOSURES.contact.email}
            </a>
            {DISCLOSURES.contact.phone ? ` · ${DISCLOSURES.contact.phone}` : ""}
          </p>
          <p>
            Verify licensing at{" "}
            <a
              href={DISCLOSURES.nmlsConsumerAccessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-accent"
            >
              NMLS Consumer Access
            </a>
            .
          </p>
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          © {new Date().getFullYear()} {DISCLOSURES.broker.name}. For educational
          purposes only. Not a commitment to lend.
        </p>
      </div>
    </footer>
  );
}
