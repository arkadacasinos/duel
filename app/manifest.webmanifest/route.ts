import { NextResponse } from "next/server"
import { SITE_BRAND, SITE_DESCRIPTION, SITE_URL } from "@/lib/site"

/**
 * PWA / Web App Manifest. Served at /manifest.webmanifest.
 * Generated dynamically so every URL respects NEXT_PUBLIC_SITE_URL.
 */
export function GET() {
  const manifest = {
    name: SITE_BRAND,
    short_name: "Duel",
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0b0f24",
    theme_color: "#0b0f24",
    categories: ["games", "entertainment", "casino", "sports"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    id: SITE_URL,
  }

  return NextResponse.json(manifest, {
    headers: {
      "content-type": "application/manifest+json; charset=utf-8",
      "cache-control": "public, max-age=3600, must-revalidate",
    },
  })
}
