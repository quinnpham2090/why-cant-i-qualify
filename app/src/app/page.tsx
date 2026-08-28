import Link from "next/link";
import { DISCLOSURES } from "@/config/disclosures";

const audiences = [
  {
    title: "First-time buyer",
    body: "You're thinking about buying but aren't sure where you stand. Get a clear, educational snapshot — no pressure, no hard inquiry.",
  },
  {
    title: "Recently turned down",
    body: "A lender said no but didn't explain why. See the common factors that may have been the issue, and what you can review next.",
  },
  {
    title: "Self-employed",
    body: "Your income doesn't fit a simple paystub box. Understand how lenders may view variable and business income.",
  },
];

const steps = [
  {
    n: "1",
    title: "Answer a few questions",
    body: "About 9 questions on income, debt, credit range, and the home you're considering. Takes around 5 minutes.",
  },
  {
    n: "2",
    title: "Get your readiness snapshot",
    body: "See an educational estimate across seven areas — income, debt, credit, cash, payment, property, and documentation.",
  },
  {
    n: "3",
    title: "Talk it over with a licensed pro",
    body: "If you'd like, book a free review with a licensed loan originator who can walk through your options.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      {/* Hero */}
      <section className="py-14 text-center sm:py-20">
        <p className="mx-auto mb-4 inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-800">
          No credit pull · No SSN · ~5 minutes · Educational
        </p>
        <h1 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Not sure where you stand on a home loan?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">
          Get a free, no-credit-pull mortgage readiness snapshot. Understand what
          may be helping — and what may be holding you back — before you apply.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/check"
            className="rounded-full bg-emerald-700 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
          >
            Start my free readiness check
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-neutral-300 px-8 py-3.5 text-base font-medium text-neutral-800 transition hover:bg-neutral-50"
          >
            How it works
          </Link>
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          Educational estimate only — not a loan commitment. Available to Florida
          residents.
        </p>
      </section>

      {/* Who it's for */}
      <section className="py-10" aria-labelledby="who-for">
        <h2 id="who-for" className="text-center text-2xl font-semibold">
          Built for people who&rsquo;ve been told &ldquo;no&rdquo; — or nothing at all
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-emerald-800">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="py-10" aria-labelledby="how">
        <h2 id="how" className="text-center text-2xl font-semibold">
          Three simple steps
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-neutral-50 p-6">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-white font-semibold"
              >
                {s.n}
              </span>
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About the MLO */}
      <section className="py-10" aria-labelledby="about">
        <div className="rounded-2xl border border-neutral-200 p-8">
          <h2 id="about" className="text-xl font-semibold">
            A real licensed professional — not a faceless form
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            This tool is offered by {DISCLOSURES.mlo.name}, a licensed mortgage loan
            originator (NMLS #{DISCLOSURES.mlo.nmlsId}) with {DISCLOSURES.broker.name}{" "}
            (NMLS #{DISCLOSURES.broker.nmlsId}). The readiness snapshot is educational;
            only a licensed professional reviewing your full documentation can discuss
            actual loan options with you.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-14 pt-4 text-center">
        <h2 className="text-2xl font-semibold">See where you may stand</h2>
        <p className="mx-auto mt-2 max-w-md text-neutral-600">
          Free, confidential, and takes about five minutes. No credit pull.
        </p>
        <Link
          href="/check"
          className="mt-6 inline-block rounded-full bg-emerald-700 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
        >
          Start my free readiness check
        </Link>
      </section>
    </div>
  );
}
