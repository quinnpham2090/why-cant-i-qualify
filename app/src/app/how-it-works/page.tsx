import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How the free mortgage readiness check works, what it covers, and what it does not.",
};

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">How it works</h1>
      <div className="prose mt-6 max-w-none space-y-4 text-text-body">
        <p>
          The readiness check is an educational tool. You answer questions about your
          income, debts, credit range, savings, and the home you&rsquo;re considering.
          A deterministic rules engine — based on widely used lending guidelines — turns
          those answers into a snapshot across seven areas: income, debt, credit, cash,
          payment, property, and documentation.
        </p>
        <h2 className="text-xl font-semibold text-text-strong">What it does</h2>
        <ul className="list-inside list-disc space-y-1.5">
          <li>Estimates a price range, loan amount, and monthly payment as ranges.</li>
          <li>Highlights the biggest factors that may help or hold you back.</li>
          <li>Suggests loan programs that may fit your situation.</li>
          <li>Shows the assumptions it made so you can see how it calculated things.</li>
        </ul>
        <h2 className="text-xl font-semibold text-text-strong">What it does not do</h2>
        <ul className="list-inside list-disc space-y-1.5">
          <li>It does not pull your credit or ask for your Social Security number.</li>
          <li>It is not a loan commitment, and it does not mean a lender will lend.</li>
          <li>It does not consider any protected characteristic.</li>
        </ul>
        <p>
          Only a licensed loan originator who reviews your full documentation can
          discuss actual loan options with you. The check is a starting point for that
          conversation.
        </p>
        <Link
          href="/check"
          className="mt-2 inline-block rounded-full bg-accent px-7 py-3 font-semibold text-accent-text hover:bg-accent-hover"
        >
          Start my free readiness check
        </Link>
      </div>
    </div>
  );
}
