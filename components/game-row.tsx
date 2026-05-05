"use client"

import { useRef, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { GameCard, type Game } from "@/components/game-card"
import { cn } from "@/lib/utils"

export function GameRow({
  title,
  icon,
  games,
  showViewAll = false,
  className,
}: {
  title: string
  icon?: ReactNode
  games: Game[]
  showViewAll?: boolean
  className?: string
}) {
  const scroller = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" })
  }

  return (
    <section className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-bold text-white">
          {icon}
          <span>{title}</span>
        </h2>
        <div className="flex items-center gap-2">
          {showViewAll && (
            <button
              type="button"
              className="text-xs font-semibold text-muted-foreground hover:text-white px-3 h-8 rounded-md"
            >
              View All
            </button>
          )}
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary/70 hover:bg-secondary border border-white/5 text-muted-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary/70 hover:bg-secondary border border-white/5 text-muted-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1 snap-x"
      >
        {games.map((g) => (
          <div key={g.id} className="snap-start shrink-0 w-[150px] sm:w-[170px]">
            <GameCard game={g} />
          </div>
        ))}
      </div>
    </section>
  )
}
