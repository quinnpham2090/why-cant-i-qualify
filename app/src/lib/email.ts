import { Resend } from "resend";
import { DISCLOSURES, EMAIL_POSTAL_LINE } from "@/config/disclosures";

/**
 * Transactional email via Resend (free tier: 3,000/mo, 100/day).
 * Two sends per lead:
 *   1. Confirmation to the consumer (with disclaimers + revocation).
 *   2. Notification to the MLO (with the consent record).
 * Returns { sent, error } so the route can log without crashing.
 */

function resend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const FROM = process.env.EMAIL_FROM || "Why Can't I Qualify <onboarding@resend.dev>";

/** Where the MLO receives lead notifications. */
const TO_MLO = process.env.EMAIL_TO || "";

/**
 * List-Unsubscribe header (FIX_PLAN V1.6 P12): one-click opt-out signal for
 * mailbox providers; the mailto target is the operator's monitored inbox.
 */
const LIST_UNSUBSCRIBE = "<mailto:hello@notify.qurealtysol.com>";

export interface LeadEmailData {
  name: string;
  email: string;
  phone?: string;
  zip?: string;
  preferredTime?: string;
  compositeTier?: string;
  /** Part 8 §8.3 enrichment (Stage 2 Phase 4) — optional, defensively rendered. */
  details?: {
    score?: { score: number; tier: string };
    engineVersion?: string | null;
    inputs?: Record<string, unknown> | null;
    result?: Record<string, unknown> | null;
    consentCaptured?: boolean;
  };
}

/** Safe string read from the client-supplied diagnostic JSON. */
function pickStr(o: Record<string, unknown> | null | undefined, key: string): string | null {
  const v = o?.[key];
  return typeof v === "string" && v.trim() !== "" ? v : null;
}
function pickNum(o: Record<string, unknown> | null | undefined, key: string): number | null {
  const v = o?.[key];
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}
const fmtUsd = (n: number | null): string =>
  n == null
    ? "—"
    : n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const humanize = (s: string): string => s.replace(/_/g, " ");

export async function sendConsumerConfirmation(data: LeadEmailData) {
  const client = resend();
  if (!client) return { sent: false, error: "RESEND_API_KEY not configured" };

  const html = `
    <p>Hi ${escapeHtml(data.name)},</p>
    <p>Thanks for using the free mortgage readiness check. Here's a summary of the
    contact details you provided:</p>
    <ul>
      <li>Email: ${escapeHtml(data.email)}</li>
      ${data.phone ? `<li>Phone: ${escapeHtml(data.phone)}</li>` : ""}
      ${data.zip ? `<li>ZIP: ${escapeHtml(data.zip)}</li>` : ""}
    </ul>
    <p>If you booked a review or asked to be contacted, ${escapeHtml(DISCLOSURES.mlo.name)} will
    reach out. If you did not mean to submit this, just reply and we'll remove your information.</p>
    <hr />
    <p style="font-size:12px;color:#555;">
      This is an educational service, not a loan commitment. You may revoke consent to be
      contacted at any time by replying STOP or emailing us.<br/>
      ${escapeHtml(DISCLOSURES.broker.name)} · NMLS #${DISCLOSURES.broker.nmlsId} ·
      ${escapeHtml(DISCLOSURES.mlo.name)}, NMLS #${DISCLOSURES.mlo.nmlsId}
    </p>`;

  try {
    const { error } = await client.emails.send({
      from: FROM,
      to: data.email,
      subject: "Your mortgage readiness check — next steps",
      html,
      headers: { "List-Unsubscribe": LIST_UNSUBSCRIBE },
    });
    return error ? { sent: false, error: error.message } : { sent: true };
  } catch (e) {
    return { sent: false, error: e instanceof Error ? e.message : "unknown error" };
  }
}

export async function sendMloNotification(data: LeadEmailData, consentText: string) {
  const client = resend();
  if (!client) return { sent: false, error: "RESEND_API_KEY not configured" };
  if (!TO_MLO) return { sent: false, error: "EMAIL_TO not configured" };

  const d = data.details;
  const i = d?.inputs ?? null;
  const r = d?.result ?? null;
  const tier = d?.score?.tier ? humanize(d.score.tier) : data.compositeTier || "—";
  const scoreLine = d?.score ? `${d.score.score}/100 (${tier})` : tier;

  const obstacleObj = (r?.primaryObstacle ?? null) as Record<string, unknown> | null;
  const primaryObstacle = pickStr(obstacleObj, "category");
  const obstacleSummary = pickStr(obstacleObj, "summary");
  const eligible = Array.isArray(r?.eligiblePrograms) ? (r?.eligiblePrograms as unknown[]) : null;
  const eligibleLabels = eligible
    ?.filter((p): p is string => typeof p === "string")
    .map(humanize) ?? null;
  const dti = pickNum(r, "dtiBackEnd");
  const timeline = pickNum(i, "timelineMonths");

  const html = `
    <p><strong>New readiness-check lead</strong> — lead score ${escapeHtml(scoreLine)}</p>
    <h3 style="margin-bottom:4px;">Contact</h3>
    <ul>
      <li>Name: ${escapeHtml(data.name)}</li>
      <li>Email: ${escapeHtml(data.email)}</li>
      <li>Phone: ${escapeHtml(data.phone || "—")}</li>
      <li>ZIP: ${escapeHtml(data.zip || "—")}</li>
      <li>Preferred contact time: ${escapeHtml(data.preferredTime || "—")}</li>
      ${timeline != null ? `<li>Timeline: about ${timeline} month(s) out</li>` : "<li>Timeline: not stated</li>"}
    </ul>
    ${
      i
        ? `<h3 style="margin-bottom:4px;">Profile</h3>
    <ul>
      <li>Purpose: ${escapeHtml(humanize(pickStr(i, "loanPurpose") ?? "—"))}</li>
      <li>Property: ${escapeHtml(humanize(pickStr(i, "propertyType") ?? "—"))}</li>
      <li>Target price: ${fmtUsd(pickNum(i, "targetPurchasePrice"))}</li>
      <li>Down payment saved: ${fmtUsd(pickNum(i, "downPaymentAvailable"))}</li>
      <li>Gross monthly income: ${fmtUsd(pickNum(i, "grossMonthlyIncome"))}</li>
      <li>Income type: ${escapeHtml(humanize(pickStr(i, "incomeType") ?? "—"))}</li>
      <li>Self-reported credit: ${escapeHtml(pickNum(i, "creditScoreSelfReported") != null ? String(pickNum(i, "creditScoreSelfReported")) : humanize(pickStr(i, "creditTierSelfReported") ?? "not stated"))}</li>
      <li>Other monthly debt: ${fmtUsd(pickNum(i, "totalMonthlyDebtPayments"))}</li>
      ${dti != null ? `<li>Est. back-end DTI: about ${(dti * 100).toFixed(0)}%</li>` : ""}
    </ul>`
        : ""
    }
    ${
      r
        ? `<h3 style="margin-bottom:4px;">Diagnostic</h3>
    <ul>
      <li>Readiness tier: ${escapeHtml(pickStr(r, "compositeTierMessage") ?? tier)}</li>
      ${primaryObstacle ? `<li>Primary area to start: ${escapeHtml(humanize(primaryObstacle))}${obstacleSummary ? ` — ${escapeHtml(obstacleSummary)}` : ""}</li>` : ""}
      ${eligibleLabels ? `<li>Potential programs: ${escapeHtml(eligibleLabels.join(", "))}</li>` : ""}
      <li>Engine: ${escapeHtml(d?.engineVersion ?? "unknown")}</li>
    </ul>`
        : ""
    }
    <p style="font-size:12px;color:#555;">Consent captured: ${data.details?.consentCaptured ? "yes" : "no"}<br/>
    Captured consent text:<br/>${escapeHtml(consentText)}</p>`;

  try {
    const { error } = await client.emails.send({
      from: FROM,
      to: TO_MLO,
      // The name arrives pre-escaped and pre-truncated from the API route
      // (P11 defense-in-depth — never reflect raw input in a header/subject).
      subject: `New lead (${d?.score?.tier ?? "unscored"}): ${data.name.slice(0, 60)}`,
      html,
      headers: { "List-Unsubscribe": LIST_UNSUBSCRIBE },
    });
    return error ? { sent: false, error: error.message } : { sent: true };
  } catch (e) {
    return { sent: false, error: e instanceof Error ? e.message : "unknown error" };
  }
}

/** Escape for safe interpolation into HTML bodies/subjects. Exported for the lead route (P11). */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Validated, clamped snapshot summary for the soft-capture results email. */
export interface SnapshotSummary {
  tier: string | null;
  priceLow: number | null;
  priceHigh: number | null;
  pitiMid: number | null;
  cashToCloseMid: number | null;
  dtiBackEndPct: number | null;
}

/**
 * Soft-capture "your results" email (Stage 2 Phase 3). Educational summary —
 * no application language, no urgency; the CAN-SPAM postal address and
 * List-Unsubscribe header are mandatory on this commercial send.
 */
export async function sendResultsCopyEmail(data: {
  name: string;
  email: string;
  summary: SnapshotSummary;
}) {
  const client = resend();
  if (!client) return { sent: false, error: "RESEND_API_KEY not configured" };

  const s = data.summary;
  const fmt = (n: number | null): string =>
    n == null
      ? "—"
      : n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const html = `
    <p>Hi ${escapeHtml(data.name)},</p>
    <p>Here is the snapshot you asked us to save. These are educational estimates
    based only on the answers you shared — not a pre-qualification or a commitment
    to lend.</p>
    <ul>
      ${s.tier ? `<li>Readiness tier: ${escapeHtml(s.tier.replace(/_/g, " "))}</li>` : ""}
      <li>Estimated price range: ${fmt(s.priceLow)} – ${fmt(s.priceHigh)}</li>
      <li>Estimated monthly payment (PITI): about ${fmt(s.pitiMid)}</li>
      <li>Estimated cash to close: about ${fmt(s.cashToCloseMid)}</li>
      ${s.dtiBackEndPct != null ? `<li>Total debt-to-income: about ${s.dtiBackEndPct}%</li>` : ""}
    </ul>
    <p>When you are ready, you can book a free 15-minute review with
    ${escapeHtml(DISCLOSURES.mlo.name)} (NMLS #${DISCLOSURES.mlo.nmlsId}) to talk through
    your numbers — no pressure, and this educational estimate never touches your credit report.</p>
    <p style="font-size:12px;color:#555;">
      You are receiving this because you asked us to email your results.
      You can unsubscribe at any time by replying to this email.<br/>
      ${escapeHtml(EMAIL_POSTAL_LINE)}<br/>
      ${escapeHtml(DISCLOSURES.broker.name)} · NMLS #${DISCLOSURES.broker.nmlsId} ·
      Equal Housing Lender
    </p>`;

  try {
    const { error } = await client.emails.send({
      from: FROM,
      to: data.email,
      subject: `${data.name.slice(0, 40)}, your mortgage readiness snapshot`,
      html,
      headers: { "List-Unsubscribe": LIST_UNSUBSCRIBE },
    });
    return error ? { sent: false, error: error.message } : { sent: true };
  } catch (e) {
    return { sent: false, error: e instanceof Error ? e.message : "unknown error" }
  }
}
