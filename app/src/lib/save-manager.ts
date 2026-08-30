"use client";

/**
 * Questionnaire save/resume (Stage 2 Phase 2 — spec 05-UX-Journey §5.5.1
 * "save state in browser (survives refresh)").
 *
 * localStorage-based: survives refresh and hard navigation. Nothing leaves
 * the browser — no network, no PII to the server — so the tool's no-SSN /
 * no-data-collection posture is unchanged. Snapshots expire after 30 days and
 * are removed on successful submission or "start fresh".
 */

const KEY = "wciq_save_v1";
const EXPIRY_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export interface SavedSnapshot {
  /** Raw form field values (strings/enums exactly as the component holds them). */
  fields: Record<string, unknown>;
  /** Wizard step index the user left off at. */
  step: number;
  savedAt: number;
}

export function saveSnapshot(fields: Record<string, unknown>, step: number): void {
  if (typeof window === "undefined") return;
  try {
    const snapshot: SavedSnapshot = { fields, step, savedAt: Date.now() };
    window.localStorage.setItem(KEY, JSON.stringify(snapshot));
  } catch {
    // Quota exceeded / private mode — saving is best-effort by design.
  }
}

export function loadSnapshot(): SavedSnapshot | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedSnapshot;
    if (
      typeof parsed !== "object" ||
      parsed == null ||
      typeof parsed.fields !== "object" ||
      typeof parsed.step !== "number" ||
      typeof parsed.savedAt !== "number"
    ) {
      window.localStorage.removeItem(KEY);
      return null;
    }
    if (Date.now() - parsed.savedAt > EXPIRY_MS) {
      window.localStorage.removeItem(KEY);
      return null;
    }
    return parsed;
  } catch {
    // Corrupted entry — treat as absent.
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* noop */
    }
    return null;
  }
}

export function clearSnapshot(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* noop */
  }
}
