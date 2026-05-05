import Image from "next/image"
import Link from "next/link"

const ABOUT = [
  "wtf Duel?",
  "High Scores",
  "Referral FAQ",
  "Provably Fair",
  "Why Bonuses Suck",
  "Fake Bets",
  "Zero Edge",
  "Live Support",
  "Careers",
]

const LEGAL = ["Terms of Service", "Privacy Policy", "Sports Betting Rules", "Cookie Preferences"]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.04] mt-16">
      <div className="mx-auto max-w-[1480px] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2.5">
              {ABOUT.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {LEGAL.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Community</h3>
            <Link
              href="#"
              aria-label="Discord"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/70 hover:bg-secondary border border-white/5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted-foreground" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.6 13.6 0 0 0-.608 1.249 18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.249.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.105 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.372.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.106c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.673-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.04] pt-6 space-y-3">
          <p className="text-xs leading-relaxed text-muted-foreground/80">
            Duel.com is owned and operated by Immortal Snail LLC, registration number: L22982,
            registered address: Arthur Evelyn Building, Suite 5, Main Street, Charlestown, Nevis,
            West Indies. Contact us at{" "}
            <a href="mailto:hey@duel.com" className="underline text-primary/90 hover:text-primary">
              hey@duel.com
            </a>
            . Duel.com is licensed and regulated by the Government of the Autonomous Island of
            Anjouan, Union of Comoros and operates under License No. ALSI-202411026-FI1. Duel.com
            has passed all regulatory compliance and is legally authorized to conduct gaming
            operations for any and all games of chance and wagering.
          </p>
          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground/70">
              Copyright © 2026 duel.com. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="License — Anjouan Gaming Authority"
                className="inline-flex items-center justify-center rounded-md hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/art/valid-badge.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </Link>
              <span
                aria-label="18+"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-red-500/40 text-[10px] font-bold text-red-400"
              >
                18+
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
