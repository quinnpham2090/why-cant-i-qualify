import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What we collect during the free mortgage readiness check, how we use and retain it, and your privacy choices. No Social Security number, no credit pull.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        <strong>Placeholder for attorney review.</strong> This page summarizes our
        intended privacy practices and must be finalized with counsel before launch.
      </p>
      <h2 className="text-xl font-semibold text-text-strong">Information we collect</h2>
      <p>
        When you use the readiness check we collect the answers you provide (income,
        debt, self-reported credit range, savings, and property details) and, if you
        choose to connect with us, your name, contact information, and consent records.
        We do <strong>not</strong> collect your Social Security number, date of birth,
        or bank account details, and we do <strong>not</strong> pull your credit.
      </p>
      <h2 className="text-xl font-semibold text-text-strong">How we use it</h2>
      <p>
        We use your information to generate your educational readiness snapshot and, if
        you request it, to have a licensed loan originator contact you. We do not sell
        your information to unrelated third parties for their own marketing.
      </p>
      <h2 className="text-xl font-semibold text-text-strong">Retention</h2>
      <p>
        Consent and advertising records are retained for at least 24 months to satisfy
        mortgage-advertising recordkeeping rules.
      </p>
      <h2 className="text-xl font-semibold text-text-strong">Your choices</h2>
      <p>
        California residents may have additional rights under the CCPA/CPRA, including
        the right to know, delete, and opt out of the sale or sharing of personal
        information. See our{" "}
        <a href="/do-not-sell" className="underline text-sky-soft-600">
          Do Not Sell or Share
        </a>{" "}
        page.
      </p>
      <h2 className="text-xl font-semibold text-text-strong">Contact</h2>
      <p>Questions about this policy can be sent to our privacy contact.</p>
    </LegalShell>
  );
}
