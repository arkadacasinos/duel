/**
 * Centralized site URL helper.
 *
 * Reads from `NEXT_PUBLIC_SITE_URL` environment variable. When the variable is
 * set in Vercel project Environment Variables, every URL on the site
 * (canonical tags, OpenGraph, Twitter, sitemap, robots, JSON-LD, RSS, etc.)
 * is rebuilt against that value automatically.
 *
 * Falls back to `https://duel.com` so local dev and previews keep working.
 */
const RAW_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://duel.com"

/** Site URL with no trailing slash (e.g. "https://duel.com"). */
export const SITE_URL = RAW_URL.replace(/\/+$/, "")

/** Build an absolute URL from a path. `path` can start with or without a slash. */
export function absoluteUrl(path = "/"): string {
  if (!path) return SITE_URL
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

/** Bare host name (e.g. "duel.com") — handy for legal copy and JSON-LD. */
export const SITE_HOST = (() => {
  try {
    return new URL(SITE_URL).host
  } catch {
    return "duel.com"
  }
})()

export const SITE_NAME = "Duel"
export const SITE_BRAND = "Duel Casino"
export const SITE_DESCRIPTION =
  "The First Casino That Gives a Fuck. Premium crypto casino & sportsbook: slots, live games, sports betting, Duel Originals and high scores."
