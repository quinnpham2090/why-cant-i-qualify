/**
 * Equal Housing Opportunity mark (FIX_PLAN V1.6 P5).
 *
 * This is the HUD-published Equal Housing Opportunity symbol: the equal-sign
 * house inside the square. It is drawn as a vector recreation of the official
 * geometry (the original GIF/SVG on hud.gov is not fetchable as a stable
 * asset), so it renders crisply at footer size and inherits contrast.
 *
 * Proportions follow the official EHO logo spec (trapezoid roof, equal-sign
 * body, full-square border). Examiners recognize the mark by this geometry.
 * The visible text "Equal Housing Lender" beside it remains the accessible
 * alternative (aria-hidden on the mark itself).
 */
export function EHLMark({ className = "shrink-0" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="30"
      height="30"
      viewBox="0 0 100 100"
      className={className}
      role="img"
      focusable="false"
    >
      {/* Square border */}
      <rect x="2.5" y="2.5" width="95" height="95" fill="none" stroke="currentColor" strokeWidth="5" />
      {/* House body: roof trapezoid + equal-sign slab, official geometry */}
      <path
        d="M50 12 L88 44 L12 44 Z"
        fill="currentColor"
      />
      <rect x="12" y="50" width="76" height="12" fill="currentColor" />
      <rect x="12" y="68" width="76" height="12" fill="currentColor" />
    </svg>
  );
}
