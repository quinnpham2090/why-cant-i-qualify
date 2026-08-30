import { DISCLOSURES } from "@/config/disclosures";

/**
 * Testimonials (FIX_PLAN V1.6 P18 — FTC 16 CFR 255 / Endorsement Guides).
 *
 * Compliance frame applied to every quote:
 *  - HONESTY: no fabricated specifics. Each quote is written as a composite
 *    illustration of a real user situation the tool is designed for, and the
 *    section says so in plain language. Before launch, swap in real reviews
 *    with consent on file — the structure here is what counsel reviews.
 *  - TYPICALITY: no results claims at all ("my score went up 40 points!",
 *    "approved in 3 weeks!"). Every quote speaks to clarity, tone, and next
 *    steps — the things the tool actually controls — never outcomes.
 *  - NO GUARANTEE LANGUAGE: copy-lint enforces this at build time.
 *  - NO ENDORSEMENT OF LENDER OUTCOMES: nothing implies a loan result.
 */
const TESTIMONIALS: { quote: string; context: string }[] = [
  {
    quote:
      "The questions actually matched my situation. Self-employed with a side business — every other site treated me like a W-2 paycheck.",
    context: "Self-employed buyer, Tampa",
  },
  {
    quote:
      "It told me the honest version: what was working against me, what wasn't, and what to do first. No sales pitch attached to it.",
    context: "First-time buyer, Jacksonville",
  },
  {
    quote:
      "After being turned down, I didn't want another form to fill out. Five minutes, no credit pull, and a straight answer about waiting periods.",
    context: "Rebuilding after foreclosure, Orlando",
  },
  {
    quote:
      "The breakdown showed me the debt part was fine and the down payment was the real gap. That changed what I focused on.",
    context: "Buyer with modest savings, Miami",
  },
];

export function Testimonials() {
  // Attorney gate (Stage 2 Phase 6 / Part 9 §9.4): testimonials are a
  // FTC-Endorsement-Guides review surface. They stay OFF by default and
  // render only when the operator sets NEXT_PUBLIC_TESTIMONIALS_ENABLED=true
  // after counsel signs off on the quotes and consent records exist.
  if (process.env.NEXT_PUBLIC_TESTIMONIALS_ENABLED !== "true") return null;
  return (
    <section aria-labelledby="testimonials-heading" className="rule-t">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <p className="eyebrow">In their words</p>
        <h2
          id="testimonials-heading"
          className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
        >
          What people say about the check
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-ink-2">
          Illustrative composites drawn from the situations this tool is built
          for, shown to describe the experience rather than any outcome. Your
          numbers and next steps will be your own.
        </p>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.quote} className="border-t border-rule pt-6">
              <blockquote>
                <p className="font-display text-2xl leading-snug text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                {t.context}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-14 max-w-2xl text-xs leading-relaxed text-ink-3">
          These are illustrative examples, not customer reviews, and they do not
          describe typical loan outcomes. This tool is educational and is not a
          commitment to lend; {DISCLOSURES.broker.name} arranges loans only
          through licensed professionals after a full application.
        </p>
      </div>
    </section>
  );
}
