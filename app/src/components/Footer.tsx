import Link from "next/link";
import { DISCLOSURES, FOOTER_DISCLOSURE_LINES } from "@/config/disclosures";

/** Inline Equal Housing Lender mark (accessible text alternative provided). */
function EHLMark() {
  return (
    <svg
      aria-hidden="true"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="shrink-0"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 13.5h5M9.5 16.5h5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50 text-neutral-700">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Legal links */}
        <nav aria-label="Legal" className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/privacy" className="underline hover:text-neutral-900">
            Privacy Policy
          </Link>
          <Link href="/terms" className="underline hover:text-neutral-900">
            Terms of Use
          </Link>
          <Link href="/accessibility" className="underline hover:text-neutral-900">
            Accessibility
          </Link>
          <Link href="/do-not-sell" className="underline hover:text-neutral-900">
            Do Not Sell or Share My Information
          </Link>
        </nav>

        {/* Equal Housing + disclosures */}
        <div className="flex items-start gap-3">
          <EHLMark />
          <div>
            <p className="font-semibold text-neutral-900">Equal Housing Lender</p>
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
              className="underline hover:text-neutral-900"
            >
              NMLS Consumer Access
            </a>
            .
          </p>
        </div>

        <p className="mt-5 text-[11px] text-neutral-500">
          © {new Date().getFullYear()} {DISCLOSURES.broker.name}. For educational
          purposes only. Not a commitment to lend.
        </p>
      </div>
    </footer>
  );
}
