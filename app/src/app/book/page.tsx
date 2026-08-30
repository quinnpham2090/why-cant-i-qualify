import type { Metadata } from "next";
import Link from "next/link";
import { DISCLOSURES } from "@/config/disclosures";
import { MloAvatar } from "@/components/MloAvatar";

export const metadata: Metadata = {
  title: "Book a Free Review",
  description: "Schedule a free, no-obligation review with a licensed mortgage loan originator.",
};

export default function BookPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <div className="mb-6">
        <MloAvatar className="h-16 w-16 text-2xl" />
      </div>
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
        /* No calendar configured: a working, non-dead-end fallback. Email is
           the primary path; the readiness check is the self-serve alternative
           so the page never ends in "coming soon". */
        <div className="mt-8 rounded-xl border border-rule bg-paper-2 p-8 sm:p-10">
          <h2 className="text-lg font-semibold text-ink">Schedule by email</h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-2">
            Email a couple of times that work for you and we&rsquo;ll confirm a
            slot. Include what you&rsquo;d like to cover, if you know already.
          </p>
          <a href={`mailto:${DISCLOSURES.contact.email}`} className="btn-primary mt-5">
            Email to schedule
          </a>
          <p className="mt-6 border-t border-rule pt-5 text-sm leading-relaxed text-ink-2">
            Prefer to keep exploring first?{" "}
            <Link
              href="/check"
              className="underline underline-offset-4 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Start the free readiness check
            </Link>{" "}
            — it gives us useful context before we talk.
          </p>
        </div>
      )}

      <p className="mt-6 text-xs text-ink-3">
        Booking a review does not create any obligation and is not a loan application.
      </p>
    </div>
  );
}
