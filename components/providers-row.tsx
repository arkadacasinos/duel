"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react"
import { PROVIDERS } from "@/lib/games"

export function ProvidersRow() {
  const scroller = useRef<HTMLDivElement>(null)
  const scroll = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" })
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-bold text-white">
          <Building2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span>Providers</span>
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll providers left"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary/70 hover:bg-secondary border border-white/5 text-muted-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll providers right"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary/70 hover:bg-secondary border border-white/5 text-muted-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1"
      >
        {PROVIDERS.map((p) => (
          <button
            key={p.id}
            type="button"
            className="shrink-0 group relative h-20 w-[170px] rounded-xl border border-white/[0.05] bg-card hover:bg-card/80 hover:border-white/10 transition-all flex items-center justify-center"
          >
            <span
              className="text-sm font-black uppercase tracking-wider text-muted-foreground/85 group-hover:text-white transition-colors"
              style={{ letterSpacing: "0.08em" }}
            >
              {p.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
