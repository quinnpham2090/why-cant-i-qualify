import type { Metadata } from "next";
import { Questionnaire } from "@/components/Questionnaire";

export const metadata: Metadata = {
  title: "Free Mortgage Readiness Check",
  description:
    "Answer a few questions and get an educational mortgage readiness snapshot. No credit pull, no Social Security number.",
};

export default function CheckPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <header className="mb-10 text-center">
        <p className="eyebrow">Readiness check</p>
        <h1 className="mt-4 font-display text-5xl leading-tight tracking-tight text-ink sm:text-6xl">
          Your free mortgage readiness check
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-2 leading-relaxed">
          A few quick questions, an educational snapshot. No credit pull, no Social
          Security number, about five to ten minutes.
        </p>
      </header>
      <Questionnaire />
    </div>
  );
}
