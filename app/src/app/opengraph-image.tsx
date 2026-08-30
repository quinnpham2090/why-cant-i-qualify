import { ImageResponse } from "next/og";

/**
 * Open Graph share image: 1200×630, light-editorial system (paper / ink /
 * cobalt), headline + NMLS identity. Generated at build time by next/og.
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
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* neutral ink rule along the top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 10,
            background: "#171717",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 24, color: "#8a8a8a", letterSpacing: 6 }}>
            FREE MORTGAGE READINESS CHECK · FLORIDA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 96, fontWeight: 600, color: "#171717", lineHeight: 1.02, letterSpacing: -2 }}>
            Been told &quot;no&quot; on a home loan?
          </div>
          <div style={{ fontSize: 38, color: "#525252" }}>
            Find out what&apos;s next — free, no credit pull, no Social Security number.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, color: "#8a8a8a" }}>
            E Mortgage Capital · NMLS #1416824 · Quan Pham, NMLS #1019158
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#ffffff",
              background: "#171717",
              padding: "16px 32px",
              borderRadius: 8,
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
