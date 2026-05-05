import Script from "next/script"
import { SITE_URL, SITE_BRAND, SITE_HOST, SITE_DESCRIPTION } from "@/lib/site"

/**
 * Schema.org JSON-LD: MobileApplication + Organization + WebSite.
 * Every URL is built from `NEXT_PUBLIC_SITE_URL` via the SITE_URL helper, so
 * setting the env var in Vercel rewires the entire structured data.
 */
export function AppSchema() {
  const mobileApp = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#mobileapp`,
    name: SITE_BRAND,
    alternateName: ["Duel", SITE_HOST, "Дуэль казино", "duelcom casino"],
    description: SITE_DESCRIPTION,
    applicationCategory: "GameApplication",
    applicationSubCategory: "Casino",
    operatingSystem: "Android, iOS",
    url: SITE_URL,
    downloadUrl: `${SITE_URL}/app/download`,
    installUrl: `${SITE_URL}/app/download`,
    softwareVersion: "1.0.0",
    fileSize: "48MB",
    contentRating: "Mature 17+",
    inLanguage: ["en", "ru", "tr"],
    image: `${SITE_URL}/opengraph-image`,
    screenshot: [
      `${SITE_URL}/opengraph-image`,
      `${SITE_URL}/casino`,
      `${SITE_URL}/sports`,
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "12483",
      bestRating: "5",
      worstRating: "1",
    },
    author: { "@type": "Organization", name: SITE_BRAND, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_BRAND, url: SITE_URL },
    featureList: [
      "Slots",
      "Live Casino",
      "Card Games",
      "Roulette",
      "Sports Betting",
      "Duel Originals",
      "Crypto deposits & withdrawals",
      "Leaderboards & tournaments",
    ],
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_BRAND,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    sameAs: [
      "https://twitter.com/duel",
      "https://discord.gg/duel",
      "https://t.me/duel",
    ],
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_BRAND,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: ["en", "ru", "tr"],
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/casino?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const graph = { "@context": "https://schema.org", "@graph": [mobileApp, organization, website] }

  return (
    <Script
      id="duel-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
