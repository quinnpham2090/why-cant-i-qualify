import type { Metadata } from "next";
import { DISCLOSURES } from "@/config/disclosures";

export const metadata: Metadata = {
  title: "Book a Free Review",
  description: "Schedule a free, no-obligation review with a licensed mortgage loan originator.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Book a free review</h1>
      <p className="mt-3 text-neutral-600">
        Schedule a free, no-obligation conversation with {DISCLOSURES.mlo.name}, a
        licensed mortgage loan originator with {DISCLOSURES.broker.name}. There is no
        cost and no requirement to apply for a loan.
      </p>

      {/*
        BOOKING INTEGRATION POINT (Phase 4 / EXECUTION-PLAN §5.6):
        Replace this placeholder with the Cal.com embed once the Cal.com account
        is connected, e.g. <CalComEmbed link="quan-pham/free-review" />.
      */}
      <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-10 text-center">
        <p className="text-lg font-semibold text-neutral-800">Scheduling coming online shortly</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-neutral-600">
          The booking calendar is being connected. In the meantime, you can email us to
          set up a time.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-5 inline-block rounded-full bg-emerald-700 px-7 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          Email us to schedule
        </a>
      </div>

      <p className="mt-6 text-xs text-neutral-500">
        Booking a review does not create any obligation and is not a loan application.
      </p>
    </div>
  );
}
