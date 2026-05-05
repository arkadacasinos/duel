import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

/**
 * Apple touch icon: 180×180 PNG with a rounded dark-blue tile and a white "D"
 * mark. The "D" is composed from CSS shapes so we don't need to load any
 * external font into Satori.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0f24",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* D glyph drawn as overlapping shapes */}
        <div
          style={{
            position: "relative",
            width: 110,
            height: 130,
            display: "flex",
          }}
        >
          {/* left vertical bar */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 26,
              height: 130,
              background: "#ffffff",
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
            }}
          />
          {/* outer right semicircle */}
          <div
            style={{
              position: "absolute",
              left: 26,
              top: 0,
              width: 84,
              height: 130,
              background: "#ffffff",
              borderTopRightRadius: 65,
              borderBottomRightRadius: 65,
            }}
          />
          {/* inner cut-out */}
          <div
            style={{
              position: "absolute",
              left: 26,
              top: 22,
              width: 62,
              height: 86,
              background: "#0b0f24",
              borderTopRightRadius: 43,
              borderBottomRightRadius: 43,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  )
}
