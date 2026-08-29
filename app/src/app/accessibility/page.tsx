import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Our commitment to WCAG 2.1 Level AA: keyboard navigation, color contrast, labeled forms, and how to report an accessibility barrier.",
};

export default function AccessibilityPage() {
  return (
    <LegalShell title="Accessibility Statement">
      <p>
        We are committed to making this website usable by people with disabilities and
        to conforming to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
      </p>
      <h2 className="text-xl font-semibold text-text-strong">Measures we take</h2>
      <ul className="list-inside list-disc space-y-1.5">
        <li>Sufficient color contrast and resizable text.</li>
        <li>Full keyboard navigation and visible focus indicators.</li>
        <li>Labels and instructions on all form fields.</li>
        <li>Clear heading structure and a skip-to-content link.</li>
        <li>Reduced-motion respect for animations.</li>
      </ul>
      <h2 className="text-xl font-semibold text-text-strong">Feedback</h2>
      <p>
        If you encounter an accessibility barrier, please contact us so we can address
        it. We welcome your feedback.
      </p>
    </LegalShell>
  );
}
