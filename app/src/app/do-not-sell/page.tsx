import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = { title: "Do Not Sell or Share My Personal Information" };

export default function DoNotSellPage() {
  return (
    <LegalShell title="Do Not Sell or Share My Personal Information">
      <p>
        <strong>Placeholder for attorney review.</strong>
      </p>
      <p>
        We do not sell your personal information to unrelated third parties for their
        own marketing. When you use the readiness check, your answers are used to create
        your educational snapshot and, only if you request it, to connect you with a
        licensed loan originator.
      </p>
      <p>
        If you are a California resident and wish to opt out of any sale or sharing of
        your personal information, or to exercise your rights to know or delete, you may
        submit a request using the contact below. We will honor such requests in
        accordance with applicable law.
      </p>
      <h2 className="text-xl font-semibold text-neutral-900">Submit a request</h2>
      <p>Contact our privacy team to submit a request or ask a question.</p>
    </LegalShell>
  );
}
