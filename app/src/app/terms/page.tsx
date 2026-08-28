import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use">
      <p>
        <strong>Placeholder for attorney review.</strong>
      </p>
      <h2 className="text-xl font-semibold text-neutral-900">Educational tool only</h2>
      <p>
        This website provides an educational mortgage-readiness estimate. It is not a
        loan application, not a commitment to lend, and not legal, tax, or financial
        advice. Results depend on the information you provide and on assumptions the tool
        makes.
      </p>
      <h2 className="text-xl font-semibold text-neutral-900">No professional advice</h2>
      <p>
        Only a licensed loan originator who reviews your full documentation can advise
        you on actual loan options. Any estimate here is informational and may change.
      </p>
      <h2 className="text-xl font-semibold text-neutral-900">Accuracy</h2>
      <p>
        Guidelines, rates, and program rules change. We aim for accuracy but make no
        warranty that any estimate is complete or current.
      </p>
      <h2 className="text-xl font-semibold text-neutral-900">Fair lending</h2>
      <p>
        We operate in accordance with federal and state fair-lending laws and do not
        consider race, color, religion, national origin, sex, familial status, or
        disability.
      </p>
    </LegalShell>
  );
}
