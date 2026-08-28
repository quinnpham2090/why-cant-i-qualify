import type { Metadata } from "next";
import { Questionnaire } from "@/components/Questionnaire";

export const metadata: Metadata = {
  title: "Free Mortgage Readiness Check",
  description:
    "Answer a few questions and get an educational mortgage readiness snapshot. No credit pull, no Social Security number. Florida.",
};

export default function CheckPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Your free mortgage readiness check
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600">
          A few quick questions, an educational snapshot. No credit pull, no Social
          Security number, about five minutes.
        </p>
      </header>
      <Questionnaire />
    </div>
  );
}
