import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How the free mortgage readiness check works, what it covers, and what it does not.",
};

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="eyebrow">How it works</p>
      <h1 className="mt-4 font-display text-5xl leading-tight tracking-tight text-ink sm:text-6xl">
        How it works
      </h1>
      <div className="mt-10 max-w-none space-y-4 text-ink-2 leading-relaxed">
        <p>
          The readiness check is an educational tool. You answer questions about your
          income, debts, credit range, savings, and the home you&rsquo;re considering.
          A deterministic rules engine — based on widely used lending guidelines — turns
          those answers into a snapshot across seven areas: income, debt, credit, cash,
          payment, property, and documentation.
        </p>
        <div className="rule-t pt-6">
          <h2 className="text-lg font-semibold text-ink">What it does</h2>
          <ul className="mt-3 list-inside list-disc space-y-1.5">
            <li>Estimates a price range, loan amount, and monthly payment as ranges.</li>
            <li>Highlights the biggest factors that may help or hold you back.</li>
            <li>Suggests loan programs that may fit your situation.</li>
            <li>Shows the assumptions it made so you can see how it calculated things.</li>
          </ul>
        </div>
        <div className="rule-t pt-6">
          <h2 className="text-lg font-semibold text-ink">What it does not do</h2>
          <ul className="mt-3 list-inside list-disc space-y-1.5">
            <li>It does not pull your credit or ask for your Social Security number.</li>
            <li>It is not a loan commitment, and it does not mean a lender will lend.</li>
            <li>It does not consider any protected characteristic.</li>
          </ul>
        </div>
        <p className="rule-t pt-6">
          Only a licensed loan originator who reviews your full documentation can
          discuss actual loan options with you. The check is a starting point for that
          conversation.
        </p>
        <Link href="/check" className="btn-primary mt-2">
          Start my free readiness check
        </Link>
      </div>
    </div>
  );
}
