import { DISCLOSURES } from "@/config/disclosures";

/**
 * MLO identity mark (UX review P1 — "real person, not a faceless form").
 *
 * Renders the operator's real photo when NEXT_PUBLIC_MLO_PHOTO_URL is set
 * (e.g. "/mlo.jpg" served from /public), and a clean initials monogram
 * otherwise, so the About and Book surfaces stay human before the photo
 * asset exists. Plain <img> on purpose: it accepts any URL the operator
 * pastes into the env var (local or remote) without next/image remotePatterns
 * config; the image is small and decorative-critical only.
 */
export function MloAvatar({ className = "h-20 w-20 text-3xl" }: { className?: string }) {
  const photoUrl = process.env.NEXT_PUBLIC_MLO_PHOTO_URL;

  if (photoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photoUrl}
        alt={DISCLOSURES.mlo.name}
        className={`shrink-0 rounded-full border border-rule object-cover ${className}`}
      />
    );
  }

  const initials = DISCLOSURES.mlo.name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full border border-rule bg-accent-soft font-display text-ink ${className}`}
    >
      {initials}
    </div>
  );
}
