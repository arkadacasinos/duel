"use client"

import { useEffect, useState } from "react"
import { Shield, X } from "lucide-react"

// New storage key (force fresh appearance for users who already dismissed v1)
const STORAGE_KEY = "duel:vpn-notice:v2"
// Hide for 12h after dismiss
const HIDE_FOR_MS = 12 * 60 * 60 * 1000

export function VpnNotice() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    let dismissedUntil = 0
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) dismissedUntil = parseInt(raw, 10) || 0
    } catch {
      /* ignore */
    }

    if (Date.now() < dismissedUntil) return

    const t = setTimeout(() => setOpen(true), 800)
    return () => clearTimeout(t)
  }, [])

  function close() {
    setOpen(false)
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + HIDE_FOR_MS))
    } catch {
      /* ignore */
    }
  }

  if (!mounted) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-labelledby="vpn-notice-title"
      aria-hidden={!open}
      className="fixed z-[100] left-3 right-3 bottom-3 sm:left-auto sm:right-5 sm:bottom-5 sm:w-[380px] pointer-events-none"
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 280ms ease, transform 280ms ease",
      }}
    >
      <div
        className="relative rounded-2xl border border-white/10 bg-card/95 backdrop-blur-md p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-2.5 right-2.5 inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Shield className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>

          <div className="min-w-0 pr-6">
            <h3
              id="vpn-notice-title"
              className="text-sm font-bold text-white"
              style={{ letterSpacing: "-0.01em" }}
            >
              {"Сайт недоступен в вашем регионе?"}
            </h3>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              {
                "Если страница не открывается или загружается с ошибками — включите VPN и обновите Duel. Это самый быстрый способ продолжить играть и сохранить активный купон."
              }
            </p>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={close}
                className="h-9 px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold shadow-[0_8px_24px_-10px_rgba(108,93,211,.6)]"
              >
                {"Понятно"}
              </button>
              <button
                type="button"
                onClick={close}
                className="h-9 px-3 rounded-lg text-xs font-semibold text-muted-foreground hover:text-white"
              >
                {"Скрыть на сессию"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
