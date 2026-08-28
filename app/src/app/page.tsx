import Link from "next/link";
import { DISCLOSURES } from "@/config/disclosures";

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
    accent: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Recently turned down",
    body: "A lender said no but didn't explain why. See the common factors that may have been the issue, and what you can review next.",
    accent: "from-amber-500/10 to-orange-500/10",
  },
  {
    title: "Self-employed",
    body: "Your income doesn't fit a simple paystub box. Understand how lenders may view variable and business income.",
    accent: "from-sky-500/10 to-indigo-500/10",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 text-center sm:pt-24">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Free mortgage readiness check · Florida
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Not sure why you can&rsquo;t qualify for a home loan?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Get a free, no-credit-pull snapshot of where you may stand — and what may be
            holding you back — before you ever apply.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/check"
              className="w-full rounded-full bg-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 sm:w-auto"
            >
              See where I stand — free
            </Link>
            <Link
              href="/how-it-works"
              className="w-full rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
            >
              How it works
            </Link>
          </div>

          {/* Trust badges */}
          <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {trustBadges.map((b) => (
              <li key={b.label} className="flex items-center gap-1.5 text-sm text-slate-600">
                <span className="text-emerald-600">
                  <Icon name={b.icon} className="h-4 w-4" />
                </span>
                {b.label}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-500">
            Educational estimate only — not a loan commitment.
          </p>
        </div>
      </section>

      {/* ───────────────────── WHO IT'S FOR ───────────────────── */}
      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="who-for">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="who-for" className="text-3xl font-bold tracking-tight text-slate-900">
              Built for people who&rsquo;ve been told &ldquo;no&rdquo; — or nothing at all
            </h2>
            <p className="mt-3 text-slate-600">
              Most tools just hand you a number. We help you understand the why.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.title}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${a.accent} bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
              >
                <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── STEPS ───────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="how">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="how" className="text-3xl font-bold tracking-tight text-slate-900">
              Three simple steps
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 text-lg font-bold text-white"
                >
                  {s.n}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────────── ABOUT THE MLO ───────────────────── */}
      <section className="bg-slate-900 py-16" aria-labelledby="about">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 id="about" className="text-2xl font-bold text-white">
            A real licensed professional — not a faceless form
          </h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            This tool is offered by {DISCLOSURES.mlo.name}, a licensed mortgage loan
            originator (NMLS #{DISCLOSURES.mlo.nmlsId}) with {DISCLOSURES.broker.name}{" "}
            (NMLS #{DISCLOSURES.broker.nmlsId}). The snapshot is educational; only a
            licensed professional reviewing your full documentation can discuss actual
            loan options with you.
          </p>
          <Link
            href="/book"
            className="mt-7 inline-block rounded-full bg-emerald-500 px-8 py-3.5 font-semibold text-white transition hover:bg-emerald-400"
          >
            Book a free review
          </Link>
        </div>
      </section>

      {/* ─────────────────────── BOTTOM CTA ─────────────────────── */}
      <section className="py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            See where you may stand
          </h2>
          <p className="mt-3 text-slate-600">
            Free, confidential, and takes about five minutes. No credit pull.
          </p>
          <Link
            href="/check"
            className="mt-8 inline-block rounded-full bg-emerald-700 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
          >
            Start my free readiness check
          </Link>
        </div>
      </section>
    </div>
  );
}
