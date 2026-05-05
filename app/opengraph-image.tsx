import { ImageResponse } from "next/og"

export const alt = "Duel — The First Casino That Gives a Fuck"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Default OpenGraph / Twitter share image (1200×630). Same dark-blue palette
 * as the rest of the site, drawn from CSS shapes — no external assets, no
 * external fonts.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(circle at 20% 0%, #2a1f6c 0%, #0b0f24 55%, #07091a 100%)",
          color: "#ffffff",
        }}
      >
        {/* Top row: brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Mini D mark */}
          <div
            style={{
              position: "relative",
              width: 92,
              height: 110,
              display: "flex",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 22,
                height: 110,
                background: "#ffffff",
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 22,
                top: 0,
                width: 70,
                height: 110,
                background: "#ffffff",
                borderTopRightRadius: 55,
                borderBottomRightRadius: 55,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 22,
                top: 18,
                width: 52,
                height: 74,
                background: "#0b0f24",
                borderTopRightRadius: 37,
                borderBottomRightRadius: 37,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Duel
          </div>
        </div>

        {/* Headline + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -3,
              maxWidth: 1000,
            }}
          >
            The First Casino That Gives a Fuck.
          </div>
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 900,
            }}
          >
            Slots · Live · Sports · Originals · 100% RTP
          </div>
        </div>

        {/* Bottom: CTA pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              padding: "16px 28px",
              background: "#6c5dd3",
              borderRadius: 14,
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            duel.com
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Crypto casino & sportsbook
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
