/**
 * Single source of truth for regulatory disclosures (EXECUTION-PLAN §0.1).
 * Every footer, legal page, and consent surface pulls from here so the
 * identifiers stay consistent and auditable.
 *
 * LICENSE STATUS (as provided by operator):
 *  - MLO:      Quan Pham, NMLS 1019158
 *  - Broker:   E Mortgage Capital, NMLS 1416824
 *  - Address:  3750 S Susan Street, Santa Ana, CA 92704
 *  - Site:     general (all states). The `launchState` record below is kept
 *              as historical license documentation (FL MLD1991) — user-facing
 *              surfaces use the state-neutral `stateLicensingNote` instead.
 *
 * TODO(attorney-gate): Replace FL_LICENSE_NUMBER placeholder and confirm the
 * exact licensed-capacity wording with the reviewing attorney before launch.
 */

export const DISCLOSURES = {
  mlo: {
    name: "Quan Pham",
    nmlsId: "1019158",
  },
  broker: {
    name: "E Mortgage Capital",
    nmlsId: "1416824",
    licensedCapacity: "Licensed Mortgage Broker",
  },
  business: {
    addressLine1: "3750 S Susan Street",
    city: "Santa Ana",
    state: "CA",
    zip: "92704",
  },
  launchState: {
    code: "FL",
    name: "Florida",
    regulator: "Florida Office of Financial Regulation (OFR)",
    // FL OFR broker license number (operator-confirmed active). Verify format at
    // attorney gate. NMLS IDs above are the national identifiers.
    licenseNumber: "MLD1991",
  },
  /**
   * Multi-state note (the site is now general, not Florida-geofenced):
   * state-licensing language is neutral — originator licensing varies by
   * state and is verified through NMLS Consumer Access.
   */
  stateLicensingNote:
    "Licensing varies by state — verify NMLS status via NMLS Consumer Access and confirm your originator is licensed in your state.",
  /**
   * Public contact points (FL §494.0026(2) requires business phone + email
   * in advertising; both render in the footer). The phone is NOT yet
   * operator-provided: TODO(attorney-gate) confirm the published business
   * line before launch — until then the footer shows email only.
   */
  contact: {
    email: "hello@notify.qurealtysol.com",
    phone: null as string | null,
  },
  nmlsConsumerAccessUrl: "https://www.nmlsconsumeraccess.org",
} as const;

/** Footer text block (Equal Housing Lender + NMLS + state license). */
export const FOOTER_DISCLOSURE_LINES: string[] = [
  `${DISCLOSURES.broker.name} — ${DISCLOSURES.broker.licensedCapacity}`,
  `NMLS #${DISCLOSURES.broker.nmlsId}`,
  `Loan Originator: ${DISCLOSURES.mlo.name}, NMLS #${DISCLOSURES.mlo.nmlsId}`,
  DISCLOSURES.stateLicensingNote,
  `${DISCLOSURES.business.addressLine1}, ${DISCLOSURES.business.city}, ${DISCLOSURES.business.state} ${DISCLOSURES.business.zip}`,
  "Equal Housing Lender.",
  "This is an educational tool, not a commitment to lend. All loans subject to credit approval and underwriter review.",
];

/**
 * Standard result-page disclaimer block (SAFE_LANGUAGE_COMPLIANCE_REPORT §11.6),
 * rendered in the same viewport as the result.
 */
export const RESULT_DISCLAIMER_BLOCK: string[] = [
  "This estimate is for educational purposes only and is not a pre-approval, an approval, or a commitment to lend.",
  "No lender guarantees an outcome. Actual eligibility depends on full documentation and underwriter review.",
  "Based only on the financial information you provided. We do not consider race, color, religion, national origin, sex, marital status, or age.",
  "You can check your credit report for free at AnnualCreditReport.com.",
];

/** TCPA consent language for the lead-capture form (MASTER-COMPLIANCE §10.8). */
export const TCPA_CONSENT_TEXT =
  "By submitting this form and providing your phone number, you agree to receive calls and text messages from " +
  `${DISCLOSURES.broker.name} and its licensed mortgage professionals, including calls or texts made using an ` +
  "automatic telephone dialing system or an artificial or prerecorded voice, at the number you provided. " +
  "Consent is not a condition of purchase. Message and data rates may apply. You may revoke this consent at any " +
  "time by replying STOP to any text or by contacting us.";

/** Lead-transfer / single-MLO disclosure. */
export const LEAD_TRANSFER_TEXT =
  `When you submit this form, your information is provided to ${DISCLOSURES.mlo.name}, a licensed mortgage loan ` +
  `originator with ${DISCLOSURES.broker.name}, who may contact you by phone, email, or text about your inquiry.`;

/**
 * Soft-capture consent ("Email my results" — Part 7 §7.2). Email-only: no
 * phone is collected, so this is email marketing consent, not TCPA. CAN-SPAM:
 * every send carries List-Unsubscribe + the postal address line below.
 */
export const SOFT_CAPTURE_CONSENT_TEXT =
  `I agree to receive my results and occasional mortgage education emails from ` +
  `${DISCLOSURES.broker.name}. I can unsubscribe at any time, and my information will not be sold.`;

/** CAN-SPAM physical postal address line embedded in every email footer. */
export const EMAIL_POSTAL_LINE = `${DISCLOSURES.broker.name}, ${DISCLOSURES.business.addressLine1}, ${DISCLOSURES.business.city}, ${DISCLOSURES.business.state} ${DISCLOSURES.business.zip}`;

/** Educational-not-advice disclaimer. */
export const EDUCATIONAL_ONLY_TEXT =
  "This is not legal, tax, or financial advice. It is provided for educational purposes only.";
