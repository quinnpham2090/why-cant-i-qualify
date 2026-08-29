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
  return (
    <section aria-labelledby="testimonials-heading" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 id="testimonials-heading" className="text-center text-3xl font-bold tracking-tight text-warm-900">
          What people say about the check
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-warm-700">
          Illustrative composites drawn from the situations this tool is built
          for, shown to describe the experience rather than any outcome. Your
          numbers and next steps will be your own.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.quote} className="rounded-2xl border border-sand-200 bg-surface p-6 shadow-sm">
              <blockquote className="text-warm-900">
                <p className="text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <p className="mt-4 text-sm font-medium text-warm-700">{t.context}</p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-warm-500">
          These are illustrative examples, not customer reviews, and they do not
          describe typical loan outcomes. This tool is educational and is not a
          commitment to lend; {DISCLOSURES.broker.name} arranges loans only
          through licensed professionals after a full application.
        </p>
      </div>
    </section>
  );
}
