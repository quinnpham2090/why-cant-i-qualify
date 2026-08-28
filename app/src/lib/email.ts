import { Resend } from "resend";
import { DISCLOSURES } from "@/config/disclosures";

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
}

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

  const html = `
    <p><strong>New readiness-check lead</strong></p>
    <ul>
      <li>Name: ${escapeHtml(data.name)}</li>
      <li>Email: ${escapeHtml(data.email)}</li>
      <li>Phone: ${escapeHtml(data.phone || "—")}</li>
      <li>ZIP: ${escapeHtml(data.zip || "—")}</li>
      <li>Preferred contact time: ${escapeHtml(data.preferredTime || "—")}</li>
      <li>Readiness tier: ${escapeHtml(data.compositeTier || "—")}</li>
    </ul>
    <p style="font-size:12px;color:#555;">Captured consent text:<br/>${escapeHtml(consentText)}</p>`;

  try {
    const { error } = await client.emails.send({
      from: FROM,
      to: TO_MLO,
      // The name arrives pre-escaped and pre-truncated from the API route
      // (P11 defense-in-depth — never reflect raw input in a header/subject).
      subject: `New lead: ${data.name.slice(0, 60)}`,
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
