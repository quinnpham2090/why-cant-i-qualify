import { DISCLOSURES } from "@/config/disclosures";

/**
 * Shared shell for legal/disclosure pages.
 * These are compliance-aligned PLACEHOLDERS. Final wording must be reviewed by
 * the company attorney before launch (EXECUTION-PLAN Phase 6).
 */
export function LegalShell({
  title,
  updated = "Last updated: January 2026",
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">{title}</h1>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{updated}</p>
      <div className="mt-8 rule-t pt-8 space-y-4 text-ink-2 leading-relaxed">{children}</div>
      <p className="mt-10 border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
        {DISCLOSURES.broker.name} · NMLS #{DISCLOSURES.broker.nmlsId} ·{" "}
        {DISCLOSURES.business.addressLine1}, {DISCLOSURES.business.city},{" "}
        {DISCLOSURES.business.state} {DISCLOSURES.business.zip}
      </p>
    </div>
  );
}
