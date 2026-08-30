import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { DISCLOSURES } from "@/config/disclosures";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What we collect during the free mortgage readiness check, how we use and retain it, and your privacy choices. No Social Security number, no credit pull.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        <strong>Attorney-gate note:</strong> this summary reflects our intended
        practices and must be confirmed with counsel before launch.
      </p>
      <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
      <p>
        When you use the readiness check we collect the answers you provide (income,
        debt, self-reported credit range, savings, and property details) and, if you
        choose to connect with us, your name, contact information, and consent records.
        We do <strong>not</strong> collect your Social Security number, date of birth,
        or bank account details, and we do <strong>not</strong> pull your credit.
      </p>
      <p>
        If you ask us to email your results, we store your name and email address with
        a record of your consent. If you submit the full contact form, we also store
        your phone number, ZIP code, and preferred contact time, plus the answers you
        gave during the check.
      </p>
      <h2 className="text-xl font-semibold text-ink">How we use it</h2>
      <p>
        We use your information to generate your educational readiness snapshot and, if
        you request it, to have a licensed loan originator contact you. If you ask for
        your results by email or opt in to education emails, we use your email address
        for those messages; every one of them includes a one-click unsubscribe.
      </p>
      <p>
        We do not sell your information to unrelated third parties for their own
        marketing. Service providers we rely on (site hosting, database, and email
        delivery) process information only on our instructions.
      </p>
      <h2 className="text-xl font-semibold text-ink">Analytics</h2>
      <p>
        We record coarse funnel events (for example, that a step of the check was
        completed) to understand where people get stuck. These events contain{" "}
        <strong>no</strong> names, contact details, or financial figures.
      </p>
      <h2 className="text-xl font-semibold text-ink">Retention</h2>
      <p>
        Consent and advertising records are retained for at least 24 months to satisfy
        mortgage-advertising recordkeeping rules. Diagnostic answers, contact details,
        and consent records are kept only as long as needed for the purposes above and
        as required by law. Emails to the education list stop immediately when you
        unsubscribe.
      </p>
      <h2 className="text-xl font-semibold text-ink">Your choices</h2>
      <p>
        You may ask us to access, correct, or delete the information we hold about you,
        or revoke a consent you previously gave, by emailing{" "}
        <a href={`mailto:${DISCLOSURES.contact.email}`} className="underline text-accent">
          {DISCLOSURES.contact.email}
        </a>
        . California residents may have additional rights under the CCPA/CPRA,
        including the right to know, delete, and opt out of the sale or sharing of
        personal information. See our{" "}
        <a href="/do-not-sell" className="underline text-accent">
          Do Not Sell or Share
        </a>{" "}
        page.
      </p>
      <h2 className="text-xl font-semibold text-ink">Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${DISCLOSURES.contact.email}`} className="underline text-accent">
          {DISCLOSURES.contact.email}
        </a>{" "}
        or by mail to {DISCLOSURES.business.addressLine1}, {DISCLOSURES.business.city},{" "}
        {DISCLOSURES.business.state} {DISCLOSURES.business.zip}.
      </p>
    </LegalShell>
  );
}
