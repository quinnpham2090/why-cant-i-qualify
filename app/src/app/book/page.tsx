import type { Metadata } from "next";
import { DISCLOSURES } from "@/config/disclosures";

export const metadata: Metadata = {
  title: "Book a Free Review",
  description: "Schedule a free, no-obligation review with a licensed mortgage loan originator.",
};

export default function BookPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Book a free review</h1>
      <p className="mt-3 text-text-body">
        Schedule a free, no-obligation conversation with {DISCLOSURES.mlo.name}, a
        licensed mortgage loan originator with {DISCLOSURES.broker.name}. There is no
        cost and no requirement to apply for a loan.
      </p>

      {calLink ? (
        <div className="mt-8 overflow-hidden rounded-2xl border border-hairline shadow-sm">
          <iframe
            src={`https://cal.com/${calLink}?embed=true&theme=light`}
            title="Schedule a free review"
            className="h-[700px] w-full"
            frameBorder="0"
          />
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-hairline bg-surface-2 p-10 text-center">
          <p className="text-lg font-semibold text-text-strong">Scheduling coming online shortly</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-text-body">
            The booking calendar is being connected. In the meantime, you can email us to
            set up a time.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-5 inline-block rounded-full bg-accent px-7 py-3 font-semibold text-accent-text hover:bg-accent-hover"
          >
            Email us to schedule
          </a>
        </div>
      )}

      <p className="mt-6 text-xs text-text-muted">
        Booking a review does not create any obligation and is not a loan application.
      </p>
    </div>
  );
}
