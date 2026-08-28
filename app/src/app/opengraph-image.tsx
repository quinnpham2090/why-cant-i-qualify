import { ImageResponse } from "next/og";

/**
 * Open Graph share image (FIX_PLAN V1.6 P16): 1200×630, warm palette,
 * headline + NMLS identity. Generated at build time by next/og.
 */
export const alt = "Why Can't I Qualify? — free mortgage readiness check";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#f7f3ea",
          fontFamily: "sans-serif",
        }}
      >
        {/* sage accent band along the top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 14,
            background: "#7a9380",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#7a9380",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, color: "#4a5d4c", fontWeight: 600 }}>
            Free mortgage readiness check · Florida
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 92, fontWeight: 700, color: "#2d3a2e", lineHeight: 1.05 }}>
            Been told &quot;no&quot; on a home loan?
          </div>
          <div style={{ fontSize: 40, color: "#4a5d4c" }}>
            Find out what&apos;s next — free, no credit pull, no Social Security number.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, color: "#6e8570" }}>
            E Mortgage Capital · NMLS #1416824 · Quan Pham, NMLS #1019158
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
              background: "#4a5d4c",
              padding: "14px 34px",
              borderRadius: 999,
              display: "flex",
            }}
          >
            Check your readiness
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
