import Link from "next/link";
import { DISCLOSURES, FOOTER_DISCLOSURE_LINES } from "@/config/disclosures";
import { EHLMark } from "@/components/EHLMark";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-hairline bg-surface-2 text-text-body">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Legal links */}
        <nav aria-label="Legal" className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/privacy" className="underline hover:text-text-strong">
            Privacy Policy
          </Link>
          <Link href="/terms" className="underline hover:text-text-strong">
            Terms of Use
          </Link>
          <Link href="/accessibility" className="underline hover:text-text-strong">
            Accessibility
          </Link>
          <Link href="/do-not-sell" className="underline hover:text-text-strong">
            Do Not Sell or Share My Information
          </Link>
        </nav>

        {/* Equal Housing + disclosures — official EHO mark (FIX_PLAN P5) */}
        <div className="flex items-start gap-3 text-text-body">
          <EHLMark className="mt-0.5 h-[30px] w-[30px] shrink-0 text-text-strong" />
          <div>
            <p className="font-semibold text-text-strong">Equal Housing Lender</p>
            <p className="mt-1 text-xs leading-relaxed">
              Federal law prohibits discrimination based on race, color, national
              origin, religion, sex (including gender identity and sexual
              orientation), familial status, or disability in housing-related
              transactions.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-1 text-xs leading-relaxed">
          {FOOTER_DISCLOSURE_LINES.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            Verify licensing at{" "}
            <a
              href={DISCLOSURES.nmlsConsumerAccessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text-strong"
            >
              NMLS Consumer Access
            </a>
            .
          </p>
        </div>

        <p className="mt-5 text-[11px] text-text-muted">
          © {new Date().getFullYear()} {DISCLOSURES.broker.name}. For educational
          purposes only. Not a commitment to lend.
        </p>
      </div>
    </footer>
  );
}
