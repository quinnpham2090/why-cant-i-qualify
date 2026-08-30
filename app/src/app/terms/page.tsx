import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { DISCLOSURES } from "@/config/disclosures";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using the free mortgage readiness check: educational estimates only, no loan application, no professional advice, and fair-lending commitments.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use">
      <p>
        <strong>Attorney-gate note:</strong> these terms are drafted for review and
        must be confirmed with counsel before launch.
      </p>
      <h2 className="text-xl font-semibold text-ink">Educational tool only</h2>
      <p>
        This website provides an educational mortgage-readiness estimate. It is not a
        loan application, not a commitment to lend, and not legal, tax, or financial
        advice. Results depend on the information you provide and on assumptions the
        tool makes. Nothing here creates a lender–borrower relationship.
      </p>
      <h2 className="text-xl font-semibold text-ink">No professional advice</h2>
      <p>
        Only a licensed loan originator who reviews your full documentation can advise
        you on actual loan options. Any estimate here is informational and may change
        as guidelines, rates, and your circumstances change.
      </p>
      <h2 className="text-xl font-semibold text-ink">Your information</h2>
      <p>
        Our handling of the information you provide is described in the{" "}
        <a href="/privacy" className="underline text-accent">
          Privacy Policy
        </a>
        . By using the site you agree to that policy.
      </p>
      <h2 className="text-xl font-semibold text-ink">Acceptable use</h2>
      <p>
        You agree not to interfere with the operation of the site, submit false
        information, or use automated systems to scrape, spam, or overload it. We may
        suspend access for abuse.
      </p>
      <h2 className="text-xl font-semibold text-ink">No warranty; limits</h2>
      <p>
        The site is provided &quot;as is.&quot; To the fullest extent permitted by law,
        we make no warranty of accuracy, completeness, or fitness for a particular
        purpose, and we are not liable for decisions you make based on the educational
        estimates shown here.
      </p>
      <h2 className="text-xl font-semibold text-ink">Fair lending</h2>
      <p>
        We operate in accordance with federal and state fair-lending laws and do not
        consider race, color, religion, national origin, sex, marital status, age, or
        familial status in the information this tool presents.
      </p>
      <h2 className="text-xl font-semibold text-ink">Licensing and contact</h2>
      <p>
        {DISCLOSURES.broker.name} — {DISCLOSURES.broker.licensedCapacity}, NMLS #
        {DISCLOSURES.broker.nmlsId}. Loan Originator: {DISCLOSURES.mlo.name}, NMLS #
        {DISCLOSURES.mlo.nmlsId}. Licensed in Florida (
        {DISCLOSURES.launchState.regulator}, License #{DISCLOSURES.launchState.licenseNumber}
        ). Questions:{" "}
        <a href={`mailto:${DISCLOSURES.contact.email}`} className="underline text-accent">
          {DISCLOSURES.contact.email}
        </a>
        .
      </p>
    </LegalShell>
  );
}
