import { DISCLOSURES } from "@/config/disclosures";

/**
 * Shared shell for legal/disclosure pages.
 * These are compliance-aligned PLACEHOLDERS. Final wording must be reviewed by
 * the company attorney before launch (EXECUTION-PLAN Phase 6).
 */
export function LegalShell({
  title,
  updated = "Last updated: [DATE]",
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-text-strong">{title}</h1>
      <p className="mt-2 text-sm text-text-muted">{updated}</p>
      <div className="mt-6 space-y-4 text-text-body leading-relaxed">{children}</div>
      <p className="mt-8 text-xs text-text-muted">
        {DISCLOSURES.broker.name} · NMLS #{DISCLOSURES.broker.nmlsId} ·{" "}
        {DISCLOSURES.business.addressLine1}, {DISCLOSURES.business.city},{" "}
        {DISCLOSURES.business.state} {DISCLOSURES.business.zip}
      </p>
    </div>
  );
}
