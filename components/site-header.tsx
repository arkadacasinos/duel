"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {
  Percent, Dice5, Trophy, Volleyball,
  Menu, X,
} from "lucide-react"
import { DuelLogo } from "@/components/duel-logo"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/", label: "Originals", icon: Percent },
  { href: "/casino", label: "Casino", icon: Dice5 },
  { href: "/sports", label: "Sports", icon: Volleyball },
  { href: "/high-scores", label: "High Scores", icon: Trophy },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.04] bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1480px] items-center gap-3 px-4 sm:gap-6 sm:px-6">
        {/* Mobile: burger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/70 hover:bg-secondary border border-white/5"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link href="/" className="flex items-center gap-2 md:mr-2" aria-label="Duel home">
          <DuelLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  active ? "text-white" : "text-muted-foreground hover:text-white",
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{item.label}</span>
                {active && (
                  <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full bg-primary" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex-1" />

        <Link
          href="/login"
          className="flex items-center justify-center h-10 px-4 sm:px-5 rounded-lg bg-secondary/70 hover:bg-secondary border border-white/5 text-sm font-bold text-white"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="flex items-center justify-center h-10 px-4 sm:px-5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold shadow-[0_8px_24px_-8px_rgba(108,93,211,.6)]"
        >
          Register
        </Link>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 z-30 transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        />

        {/* Drawer */}
        <nav
          className={cn(
            "relative h-full w-[86%] max-w-[340px] bg-card border-r border-white/[0.06] shadow-2xl",
            "flex flex-col p-4 gap-1 overflow-y-auto",
            "transition-transform duration-200",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold transition-colors",
                  active
                    ? "bg-primary/15 text-white"
                    : "text-muted-foreground hover:text-white hover:bg-white/[0.04]",
                )}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span>{item.label}</span>
                {active && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
                )}
              </Link>
            )
          })}

          <div className="mt-4 pt-4 border-t border-white/[0.06] grid grid-cols-2 gap-2">
            <Link
              href="/login"
              className="flex items-center justify-center h-11 rounded-lg bg-secondary/70 border border-white/5 text-sm font-bold text-white"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="flex items-center justify-center h-11 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
