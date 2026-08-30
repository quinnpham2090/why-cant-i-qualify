"use client";

import { useState } from "react";

/**
 * Admin lead status select (Stage 4 QA fix 1+7).
 *
 * Must be a Client Component: the admin dashboard page is a Server Component,
 * and passing onChange across the Server/Client boundary crashes at render
 * ("Event handlers cannot be passed to Client Component props").
 *
 * Also provides accessible save feedback (QA fix 7): an aria-live region
 * announces "Saving… / Status updated / Update failed" and the select is
 * disabled while the PATCH is in flight to prevent double-submission.
 */

export const STATUS_OPTIONS = [
  "new",
  "contacted",
  "appointment_scheduled",
  "appointment_completed",
  "application_started",
  "pre_approved",
  "in_underwriting",
  "closed_funded",
  "lost",
  "nurture",
  "do_not_contact",
] as const;

type SaveState = "idle" | "saving" | "saved" | "error";

export function StatusSelect({ leadId, current }: { leadId: string; current: string | null }) {
  const [saveState, setSaveState] = useState<SaveState>("idle");

  const onChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextStatus = e.target.value;
    setSaveState("saving");
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        credentials: "same-origin", // browser resends the Basic challenge creds
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status: nextStatus }),
      });
      if (!res.ok) throw new Error(`PATCH failed: ${res.status}`);
      setSaveState("saved");
    } catch {
      setSaveState("error");
    }
  };

  return (
    <div>
      <select
        data-lead-status={leadId}
        defaultValue={current ?? "new"}
        aria-label="Lead status"
        disabled={saveState === "saving"}
        className="rounded-md border border-rule bg-card px-2 py-1 text-xs text-ink disabled:opacity-60"
        onChange={(e) => void onChange(e)}
      >
        {STATUS_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s.replace(/_/g, " ")}
          </option>
        ))}
      </select>
      <p aria-live="polite" className="mt-1 text-[11px] text-ink-3">
        {saveState === "saving"
          ? "Saving…"
          : saveState === "saved"
            ? "Status updated"
            : saveState === "error"
              ? "Update failed — try again"
              : "\u00A0" /* non-breaking space keeps the row height stable */}
      </p>
    </div>
  );
}
