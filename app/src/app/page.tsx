import Link from "next/link";
import { DISCLOSURES } from "@/config/disclosures";
import { HERO_HEADLINE, HERO_SUBHEAD } from "@/engine/labels";
import { Testimonials } from "@/components/Testimonials";
import { MloAvatar } from "@/components/MloAvatar";

const trustBadges = [
  { label: "No credit pull" },
  { label: "No SSN required" },
  { label: "5–10 minutes" },
  { label: "Licensed MLO" },
];

const audiences = [
  {
    n: "01",
    title: "First-time buyer",
    body: "You're thinking about buying but aren't sure where you stand. Get a clear, educational snapshot — no pressure, no hard inquiry.",
  },
  {
    n: "02",
    title: "Recently turned down",
    body: "A lender said no but didn't explain why. You're not alone — and this isn't the end of the road. See the factors that may have been at play.",
  },
  {
    n: "03",
    title: "Self-employed or paid in cash",
    body: "Your income doesn't fit a simple paystub box. Bank statements, P&L, 1099, and asset-based programs exist — see which may fit.",
  },
];

const steps = [
  {
    n: "01",
    title: "Answer a few questions",
    body: "A few short steps on income, debt, credit range, and the home you're considering.",
  },
  {
    n: "02",
    title: "Get your readiness snapshot",
    body: "An educational estimate across seven areas — income, debt, credit, cash, payment, property, documentation.",
  },
  {
    n: "03",
    title: "Talk it over with a licensed pro",
    body: "If you'd like, book a free review with a licensed loan originator to walk through your options.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:pt-28">
          <p className="eyebrow">Free mortgage readiness check · Florida</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            {HERO_HEADLINE}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            {HERO_SUBHEAD}
          </p>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
            <Link href="/check" className="btn-primary w-full sm:w-auto">
              See where I stand — free
            </Link>
            <Link href="/how-it-works" className="btn-ghost w-full sm:w-auto">
              How it works
            </Link>
          </div>

          {/* Stat band — editorial, mono */}
          <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-4">
            {trustBadges.map((b) => (
              <li
                key={b.label}
                className="flex items-center bg-card px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2"
              >
                {b.label}
              </li>
            ))}
          </ul>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
            Educational estimate only — not a loan commitment.
          </p>
        </div>
      </section>

      {/* ───────────────────── WHO IT'S FOR ───────────────────── */}
      <section className="rule-t" aria-labelledby="who-for">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="eyebrow">Who it&rsquo;s for</p>
          <h2
            id="who-for"
            className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
          >
            Built for people who&rsquo;ve been told &ldquo;no&rdquo; — or nothing at all
          </h2>
          <p className="mt-4 max-w-2xl text-ink-2">
            Most tools just hand you a number. We help you understand the why — and what to do next.
          </p>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.n} className="border-t border-ink pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                  {a.n}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ink">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-2">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── STEPS ───────────────────────── */}
      <section className="rule-t" aria-labelledby="how">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="eyebrow">How it works</p>
          <h2
            id="how"
            className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
          >
            Three simple steps
          </h2>
          <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="border-t border-rule pt-5">
                <p className="font-display text-4xl text-brand">{s.n}</p>
                <h3 className="mt-3 text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────────── ABOUT THE MLO ───────────────────── */}
      <section className="bg-ink text-paper" aria-labelledby="about">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
            The person behind the check
          </p>
          {/* Photo slot: MloAvatar renders the operator's real photo when
              NEXT_PUBLIC_MLO_PHOTO_URL is set, monogram until then. Trust
              review flagged "real person, not a faceless form" copy with zero
              human imagery as its own contradiction. */}
          <div className="mt-6 flex justify-center">
            <MloAvatar className="h-20 w-20 text-3xl" />
          </div>
          <h2
            id="about"
            className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl"
          >
            A real licensed professional — not a faceless form
          </h2>
          <p className="mt-5 leading-relaxed text-paper/70">
            This tool is offered by {DISCLOSURES.mlo.name}, a licensed mortgage loan
            originator (NMLS #{DISCLOSURES.mlo.nmlsId}) with {DISCLOSURES.broker.name}{" "}
            (NMLS #{DISCLOSURES.broker.nmlsId}). The snapshot is educational; only a
            licensed professional reviewing your full documentation can discuss actual
            loan options with you.
          </p>
          <p className="mt-9 text-sm text-paper/60">
            Prefer to talk first?{" "}
            <Link
              href="/book"
              className="underline underline-offset-4 text-paper hover:text-paper/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Book a free review
            </Link>{" "}
            — no obligation.
          </p>
        </div>
      </section>

      {/* ─────────────────── TESTIMONIALS (P18) ─────────────────── */}
      <Testimonials />

      {/* ─────────────────────── BOTTOM CTA ─────────────────────── */}
      <section className="rule-t">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
          <h2 className="font-display text-5xl leading-tight tracking-tight text-ink sm:text-6xl">
            See where you may stand
          </h2>
          <p className="mt-4 text-ink-2">
            Free, confidential, and takes about five to ten minutes. No credit pull.
          </p>
          <Link href="/check" className="btn-primary mt-10">
            Start my free readiness check
          </Link>
        </div>
      </section>
    </div>
  );
}
