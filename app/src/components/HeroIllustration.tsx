/**
 * Hero illustration (FIX_PLAN V1.6 P15): a contemplative person by a window
 * with a plant and a hanging frame — warm line style, restorative not
 * celebratory (RESEARCH_EMPATHY.md §6).
 *
 * Drawn inline in the brand palette (warm-700 lines, sage-600 accents) so no
 * third-party asset or license question arises. Subject matter is neutral for
 * FH Act 24 CFR 100.75 review: a single abstract figure — no family, couple,
 * or demographic is depicted, and nothing implies targeting.
 */
export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      focusable="false"
    >
      {/* window frame */}
      <rect x="18" y="14" width="80" height="104" rx="3" className="text-warm-700" />
      <path d="M58 14v104M18 66h80" className="text-warm-700" />
      {/* open curtains */}
      <path d="M14 10c8 34 8 74 0 112" className="text-sage-600" />
      <path d="M102 10c-8 34-8 74 0 112" className="text-sage-600" />
      {/* contemplative figure by the window, mug in hand */}
      <circle cx="140" cy="52" r="10" className="text-warm-700" />
      <path d="M140 62c-14 4-20 14-21 30l-3 34" className="text-warm-700" />
      <path d="M139 74c10 2 16 8 18 18" className="text-warm-700" />
      {/* mug */}
      <path d="M118 92h12v10a6 6 0 0 1-12 0z" className="text-sage-600" />
      {/* floor */}
      <path d="M20 130h160" className="text-warm-500" />
      {/* plant */}
      <path d="M166 130v-14" className="text-sage-600" />
      <path d="M166 118c0-8 5-12 12-13-1 8-5 12-12 13z" className="text-sage-600" />
      <path d="M166 118c0-7-4-11-11-12 1 7 5 11 11 12z" className="text-sage-600" />
      {/* hanging frame */}
      <path d="M178 10v16" className="text-warm-500" />
      <rect x="170" y="26" width="16" height="20" rx="2" className="text-warm-500" />
    </svg>
  );
}
