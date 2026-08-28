import Link from "next/link";
import { DISCLOSURES } from "@/config/disclosures";
import { HERO_HEADLINE, HERO_SUBHEAD } from "@/engine/labels";

const trustBadges = [
  { label: "No credit pull", icon: "shield" },
  { label: "No SSN required", icon: "lock" },
  { label: "~5 minutes", icon: "clock" },
  { label: "Licensed MLO", icon: "badge" },
];

const audiences = [
  {
    title: "First-time buyer",
    body: "You're thinking about buying but aren't sure where you stand. Get a clear, educational snapshot — no pressure, no hard inquiry.",
    accent: "bg-sage-50",
  },
  {
    title: "Recently turned down",
    body: "A lender said no but didn't explain why. You're not alone — and this isn't the end of the road. See the factors that may have been at play.",
    accent: "bg-sand-50",
  },
  {
    title: "Self-employed or paid in cash",
    body: "Your income doesn't fit a simple paystub box. Bank statements, P&L, 1099, and asset-based programs exist — see which may fit.",
    accent: "bg-sage-50",
  },
];

const steps = [
  {
    n: "1",
    title: "Answer a few questions",
    body: "About 9 questions on income, debt, credit range, and the home you're considering.",
  },
  {
    n: "2",
    title: "Get your readiness snapshot",
    body: "An educational estimate across seven areas — income, debt, credit, cash, payment, property, documentation.",
  },
  {
    n: "3",
    title: "Talk it over with a licensed pro",
    body: "If you'd like, book a free review with a licensed loan originator to walk through your options.",
  },
];

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    shield: <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />,
    lock: (
      <>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    badge: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand-50 via-white to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(122,147,128,0.16),transparent)]"
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 text-center sm:pt-24">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-sage-100 bg-white/80 px-4 py-1.5 text-sm font-medium text-warm-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sage-600" />
            Free mortgage readiness check · Florida
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-warm-900 sm:text-6xl">
            {HERO_HEADLINE}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-warm-serif text-lg leading-relaxed text-warm-700 sm:text-xl">
            {HERO_SUBHEAD}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/check"
              className="w-full rounded-full bg-warm-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-warm-700/20 transition hover:bg-warm-900 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2 sm:w-auto"
            >
              See where I stand — free
            </Link>
            <Link
              href="/how-it-works"
              className="w-full rounded-full border border-sand-200 bg-white px-8 py-4 text-base font-medium text-warm-900 transition hover:border-sage-600 hover:bg-sand-50 sm:w-auto"
            >
              How it works
            </Link>
          </div>

          {/* Trust badges */}
          <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {trustBadges.map((b) => (
              <li key={b.label} className="flex items-center gap-1.5 text-sm text-warm-700">
                <span className="text-sage-600">
                  <Icon name={b.icon} className="h-4 w-4" />
                </span>
                {b.label}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-warm-500">
            Educational estimate only — not a loan commitment.
          </p>
        </div>
      </section>

      {/* ───────────────────── WHO IT'S FOR ───────────────────── */}
      <section className="bg-sand-50 py-16 sm:py-20" aria-labelledby="who-for">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="who-for" className="text-3xl font-bold tracking-tight text-warm-900">
              Built for people who&rsquo;ve been told &ldquo;no&rdquo; — or nothing at all
            </h2>
            <p className="mt-3 text-warm-700">
              Most tools just hand you a number. We help you understand the why — and what to do next.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.title}
                className={`group relative overflow-hidden rounded-2xl border border-sand-200 ${a.accent} p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
              >
                <h3 className="text-lg font-semibold text-warm-900">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-warm-700">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── STEPS ───────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="how">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="how" className="text-3xl font-bold tracking-tight text-warm-900">
              Three simple steps
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="relative rounded-2xl border border-sand-200 bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-warm-700 text-lg font-bold text-white"
                >
                  {s.n}
                </span>
                <h3 className="mt-4 text-base font-semibold text-warm-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-700">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────────── ABOUT THE MLO ───────────────────── */}
      <section className="bg-warm-900 py-16" aria-labelledby="about">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 id="about" className="text-2xl font-bold text-white">
            A real licensed professional — not a faceless form
          </h2>
          <p className="mt-4 leading-relaxed text-sage-100">
            This tool is offered by {DISCLOSURES.mlo.name}, a licensed mortgage loan
            originator (NMLS #{DISCLOSURES.mlo.nmlsId}) with {DISCLOSURES.broker.name}{" "}
            (NMLS #{DISCLOSURES.broker.nmlsId}). The snapshot is educational; only a
            licensed professional reviewing your full documentation can discuss actual
            loan options with you.
          </p>
          <Link
            href="/book"
            className="mt-7 inline-block rounded-full bg-sage-600 px-8 py-3.5 font-semibold text-white transition hover:bg-warm-500"
          >
            Book a free review
          </Link>
        </div>
      </section>

      {/* ─────────────────────── BOTTOM CTA ─────────────────────── */}
      <section className="py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-warm-900">
            See where you may stand
          </h2>
          <p className="mt-3 text-warm-700">
            Free, confidential, and takes about five minutes. No credit pull.
          </p>
          <Link
            href="/check"
            className="mt-8 inline-block rounded-full bg-warm-700 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-warm-700/20 transition hover:bg-warm-900 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
          >
            Start my free readiness check
          </Link>
        </div>
      </section>
    </div>
  );
}
