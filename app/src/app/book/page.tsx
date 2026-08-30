import type { Metadata } from "next";
import { DISCLOSURES } from "@/config/disclosures";

export const metadata: Metadata = {
  title: "Book a Free Review",
  description: "Schedule a free, no-obligation review with a licensed mortgage loan originator.",
};

export default function BookPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="eyebrow">Free review</p>
      <h1 className="mt-4 font-display text-5xl leading-tight tracking-tight text-ink sm:text-6xl">
        Book a free review
      </h1>
      <p className="mt-4 text-ink-2">
        Schedule a free, no-obligation conversation with {DISCLOSURES.mlo.name}, a
        licensed mortgage loan originator with {DISCLOSURES.broker.name}. There is no
        cost and no requirement to apply for a loan.
      </p>

      {calLink ? (
        <div className="mt-8 overflow-hidden rounded-xl border border-rule">
          <iframe
            src={`https://cal.com/${calLink}?embed=true&theme=light`}
            title="Schedule a free review"
            className="h-[700px] w-full"
            frameBorder="0"
          />
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-rule bg-paper-2 p-10 text-center">
          <p className="text-lg font-semibold text-ink">Scheduling coming online shortly</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-2">
            The booking calendar is being connected. In the meantime, you can email us to
            set up a time.
          </p>
          <a
            href={`mailto:${DISCLOSURES.contact.email}`}
            className="btn-primary mt-5"
          >
            Email us to schedule
          </a>
        </div>
      )}

      <p className="mt-6 text-xs text-ink-3">
        Booking a review does not create any obligation and is not a loan application.
      </p>
    </div>
  );
}
