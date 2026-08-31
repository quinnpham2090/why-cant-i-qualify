import { DISCLOSURES, EMAIL_POSTAL_LINE } from "@/config/disclosures";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://why-cant-i-qualify.vercel.app";

/**
 * Nurture email sequence (Stage 2 Phase 5 — Part 8 §8.5): Day 0 / 2 / 5 /
 * 10 / 21, then a monthly evergreen. Educational tone, no urgency, no
 * application pressure; every send carries the CAN-SPAM postal address and
 * an unsubscribe link. Safe-language rules apply (copy-lint): no promises,
 * no approval language, no urgency gimmicks.
 */

export interface NurtureTemplate {
  /** Machine key stored in leads.nurture_status after a successful send. */
  key: string;
  /** Scheduled offset, in days after the lead's capture. */
  day: number;
  subject: string;
  html: (name: string, unsubscribeUrl: string) => string;
}

function footer(unsubscribeUrl: string): string {
  return `
    <p style="font-size:12px;color:#555;">
      You are receiving this because you asked for mortgage education emails.
      <a href="${unsubscribeUrl}" style="color:#555;">Unsubscribe</a> — one click, honored immediately.<br/>
      ${escapeAll(EMAIL_POSTAL_LINE)}<br/>
      ${escapeAll(DISCLOSURES.broker.name)} · NMLS #${DISCLOSURES.broker.nmlsId} · Equal Housing Lender
    </p>`;
}

function escapeAll(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function doc(name: string, title: string, body: string, unsubscribeUrl: string): string {
  return `
    <p>Hi ${escapeAll(name.split(" ")[0] || "there")},</p>
    ${body}
    <hr/>
    <p style="font-size:12px;color:#555;">${escapeAll(title)} · educational only, not a commitment to lend</p>
    ${footer(unsubscribeUrl)}`;
}

export const NURTURE_TEMPLATES: NurtureTemplate[] = [
  {
    key: "day_0",
    day: 0,
    subject: "Your mortgage readiness snapshot (and the one number to watch)",
    html: (name, u) =>
      doc(
        name,
        "Your readiness snapshot",
        `<p>Here's the one thing most people never get told: a mortgage decision
       is almost never about all of your finances at once — it's about the one
       or two areas that are furthest behind.</p>
       <p>Your snapshot shows which area that is for you, plus the program
       options that exist for your situation. The most useful next step is a
       15-minute conversation about that single area — no forms, no pressure.</p>
       <p>Over the next couple of weeks we'll send a few short guides: how DTI
       really works, what lenders look at, and the homebuyer programs most
       people have never heard of.</p>`,
        u,
      ),
  },
  {
    key: "day_2",
    day: 2,
    subject: "The number that decides most mortgages (it isn't your credit score)",
    html: (name, u) =>
      doc(
        name,
        "Debt-to-income, explained",
        `<p>Debt-to-income ratio is the share of your gross monthly income that
       already goes to debt payments — plus the new mortgage payment. It is
       the number most files turn on.</p>
       <p>What counts: card minimums, student loans, car payments, cosigned
       debts, support you pay. What doesn't: rent, utilities, subscriptions.</p>
       <p>The fastest levers, in order: pay a card's balance down (minimums
       shrink with it), pay off small installment loans completely, and document
       12 months of on-time payments on any cosigned debt.</p>
       <p>Read the full guide: <a href="${SITE}/blog/what-is-debt-to-income-ratio">What is debt-to-income ratio</a></p>`,
        u,
      ),
  },
  {
    key: "day_5",
    day: 5,
    subject: "Homebuyer programs most buyers have never heard of",
    html: (name, u) =>
      doc(
        name,
        "Program guide",
        `<p>Beyond the well-known loans, there are programs built for specific
       situations:</p>
       <ul>
         <li><strong>NACA</strong> — no down payment, no PMI, judged on payment history rather than score.</li>
         <li><strong>Section 184</strong> — the Indian Home Loan program for enrolled tribal members.</li>
         <li><strong>State HFA assistance</strong> — thousands toward down payment, seasonal windows (every state has one).</li>
         <li><strong>ITIN lending</strong> — real financing paths without a Social Security number.</li>
       </ul>
       <p>Each has a process, and each fails quietly when the paperwork is
       assembled wrong. That's the gap a good originator closes.</p>
       <p>Read the full guide: <a href="/blog/first-time-homebuyer-programs">First-time homebuyer programs</a></p>`,
        u,
      ),
  },
  {
    key: "day_10",
    day: 10,
    subject: "The 7 things a lender actually looks at",
    html: (name, u) =>
      doc(
        name,
        "The seven pillars",
        `<p>Every mortgage file is built on seven things: income stability, debt
       load, credit profile, cash and savings, payment fit, the property
       itself, and documentation.</p>
       <p>Files rarely fail on facts. They fail on paperwork — or on one pillar
       nobody explained. The useful question is never "can I buy?" but "which
       pillar is furthest behind, and what's the shortest path to move it?"</p>
       <p>Read the full guide: <a href="${SITE}/blog/seven-things-lenders-look-at">The seven things lenders look at</a></p>`,
        u,
      ),
  },
  {
    key: "day_21",
    day: 21,
    subject: "Two weeks later: what's changed in your file?",
    html: (name, u) =>
      doc(
        name,
        "Two weeks later",
        `<p>Two weeks of progress is real progress: a paid-down card, a letter
       explaining a deposit, a dispute resolved. If you've made a move — big
       or small — we'd like to hear how it went.</p>
       <p>If nothing has changed, that's okay too. Readiness isn't a deadline;
       it's a direction. The check stays free, and you can re-run it whenever
       your numbers change to see the picture update.</p>
       <p><a href="${SITE}/check">Re-run your free check</a> · <a href="${SITE}/book">Book a 15-minute review</a></p>`,
        u,
      ),
  },
  {
    key: "monthly",
    day: 30,
    subject: "This month in homeownership readiness",
    html: (name, u) =>
      doc(
        name,
        "Monthly guide",
        `<p>A quick monthly note: one idea, one program, one action — things you
       can actually use on the path to a home.</p>
       <p>This month's idea: separate your business and personal money if you
       earn on a 1099 basis. It makes every later step — income documentation,
       bank statements, reserves — dramatically easier.</p>
       <p>Read the full guide: <a href="/blog/self-employed-mortgage">Self-employed mortgages</a></p>`,
        u,
      ),
  },
];

/** The template scheduled at or before `daysSince`, furthest along. */
export function templateForDay(daysSince: number): NurtureTemplate | null {
  const due = NURTURE_TEMPLATES.filter((t) => daysSince >= t.day);
  return due.length > 0 ? due[due.length - 1] : null;
}

/** Map from a stored nurture_status to its template key. */
export const TEMPLATE_KEYS = NURTURE_TEMPLATES.map((t) => t.key) as string[];
