import Link from "next/link";
import { DISCLOSURES, FOOTER_DISCLOSURE_LINES } from "@/config/disclosures";
import { EHLMark } from "@/components/EHLMark";

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

        {/* Equal Housing + disclosures — official EHO mark (FIX_PLAN P5) */}
        <div className="flex items-start gap-3 text-neutral-800">
          <EHLMark className="mt-0.5 h-[30px] w-[30px] shrink-0 text-neutral-900" />
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
