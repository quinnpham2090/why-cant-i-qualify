import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { DISCLOSURES } from "@/config/disclosures";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information",
  description:
    "We do not sell personal information collected by the readiness check. California residents can submit a do-not-sell or share request here.",
};

export default function DoNotSellPage() {
  return (
    <LegalShell title="Do Not Sell or Share My Personal Information">
      <p>
        <strong>Attorney-gate note:</strong> this page implements our intended
        CCPA/CPRA posture and must be confirmed with counsel before launch.
      </p>
      <p>
        We do not sell your personal information to unrelated third parties for their
        own marketing. When you use the readiness check, your answers are used to
        create your educational snapshot and, only if you request it, to connect you
        with a licensed loan originator.
      </p>
      <p>
        If you are a California resident and wish to opt out of any sale or sharing of
        your personal information, or to exercise your rights to know or delete, you
        may submit a request using the contact below. We will honor such requests in
        accordance with applicable law. Exercising these rights will never be treated
        as a reason to treat you differently.
      </p>
      <h2 className="text-xl font-semibold text-ink">Submit a request</h2>
      <p>
        Email{" "}
        <a href={`mailto:${DISCLOSURES.contact.email}`} className="underline text-accent">
          {DISCLOSURES.contact.email}
        </a>{" "}
        with the subject line &quot;Do Not Sell or Share&quot; and the email address you
        used on this site, or write to {DISCLOSURES.business.addressLine1},{" "}
        {DISCLOSURES.business.city}, {DISCLOSURES.business.state} {DISCLOSURES.business.zip}.
        We will verify and respond within the time required by law.
      </p>
      <h2 className="text-xl font-semibold text-ink">Email list opt-out</h2>
      <p>
        If you only want to stop the education emails, use the one-click unsubscribe
        link at the bottom of any email — it works immediately and does not require a
        request here.
      </p>
    </LegalShell>
  );
}
