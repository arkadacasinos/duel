"use client"

import { useEffect, useState } from "react"
import { History, Trophy, User } from "lucide-react"
import { cn } from "@/lib/utils"

type Row = { place: number; player: string; points: string; prize: string }

const ROWS: Row[] = [
  { place: 1, player: "akthunder", points: "1 434 293,66", prize: "$12,500.00" },
  { place: 2, player: "xalytowe", points: "660 557,76", prize: "$3,750.00" },
  { place: 3, player: "satosh144", points: "621 592,19", prize: "$1,875.00" },
  { place: 4, player: "Pocketthelot", points: "415 027", prize: "$1,000.00" },
  { place: 5, player: "borold", points: "294 243,85", prize: "$500.00" },
  { place: 6, player: "Okan271", points: "285 289,78", prize: "$450.00" },
  { place: 7, player: "anila", points: "150 889,64", prize: "$400.00" },
  { place: 8, player: "Ludomaster", points: "126 856,47", prize: "$350.00" },
  { place: 9, player: "Acmilan09", points: "112 914,28", prize: "$300.00" },
  { place: 10, player: "funnymoney69", points: "96 711,29", prize: "$250.00" },
]

function MedalBadge({ place }: { place: number }) {
  const colors: Record<number, string> = {
    1: "text-yellow-400",
    2: "text-slate-300",
    3: "text-amber-600",
  }
  return (
    <span className="flex items-center gap-1.5 tabular-nums">
      {colors[place] ? (
        <Trophy className={cn("h-4 w-4", colors[place])} />
      ) : (
        <span className="inline-block w-4" />
      )}
      <span className={cn("font-mono", colors[place] ?? "text-muted-foreground")}>
        {String(place).padStart(2, "0")}
      </span>
    </span>
  )
}

function Countdown() {
  const [t, setT] = useState({ d: 0, h: 4, m: 44, s: 42 })
  useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        let { d, h, m, s } = p
        s -= 1
        if (s < 0) { s = 59; m -= 1 }
        if (m < 0) { m = 59; h -= 1 }
        if (h < 0) { h = 23; d -= 1 }
        if (d < 0) return { d: 0, h: 0, m: 0, s: 0 }
        return { d, h, m, s }
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])
  const cell = (v: number, label: string) => (
    <div className="flex flex-col items-center min-w-12">
      <span className="text-2xl font-bold tabular-nums text-white">{String(v).padStart(2, "0")}</span>
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  )
  return (
    <div className="flex items-end gap-3">
      {cell(t.d, "Days")}
      <span className="text-muted-foreground pb-5">|</span>
      {cell(t.h, "Hours")}
      <span className="text-muted-foreground pb-5">|</span>
      {cell(t.m, "Minutes")}
      <span className="text-muted-foreground pb-5">|</span>
      {cell(t.s, "Seconds")}
    </div>
  )
}

export function Leaderboard() {
  const [period, setPeriod] = useState<"daily" | "monthly">("daily")
  const [page, setPage] = useState(1)

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg font-bold text-white">Leaderboards</h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-white"
          >
            <History className="h-3.5 w-3.5" /> History
          </button>
          <div className="flex items-center gap-1 rounded-lg bg-secondary/60 p-1 border border-white/5">
            <button
              type="button"
              onClick={() => setPeriod("daily")}
              className={cn(
                "px-4 h-8 rounded-md text-xs font-semibold transition-colors",
                period === "daily" ? "bg-primary/20 text-white" : "text-muted-foreground hover:text-white",
              )}
            >
              Daily
            </button>
            <button
              type="button"
              onClick={() => setPeriod("monthly")}
              className={cn(
                "px-4 h-8 rounded-md text-xs font-semibold transition-colors",
                period === "monthly" ? "bg-primary/20 text-white" : "text-muted-foreground hover:text-white",
              )}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 border border-primary/30">
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Prizepool</p>
            <p className="text-xl font-bold text-white tabular-nums">$25,000.00</p>
          </div>
        </div>

        <div className="flex items-center gap-6 lg:justify-end">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary border border-white/5">
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Your Position</p>
              <p className="text-base font-semibold text-white">-</p>
            </div>
          </div>
          <Countdown />
        </div>
      </div>

      <div className="rounded-xl border border-white/5 bg-card/50 overflow-hidden">
        <div className="grid grid-cols-[100px_1fr_1fr_1fr] px-4 py-3 text-xs font-semibold text-muted-foreground border-b border-white/5">
          <span>Place</span>
          <span>Player</span>
          <span className="text-right">Points</span>
          <span className="text-right">Prize</span>
        </div>
        {ROWS.map((r) => (
          <div
            key={r.place}
            className="grid grid-cols-[100px_1fr_1fr_1fr] px-4 h-12 items-center text-sm border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02]"
          >
            <MedalBadge place={r.place} />
            <span className="text-white/90">{r.player}</span>
            <span className="text-right tabular-nums text-muted-foreground">{r.points}</span>
            <span className="text-right tabular-nums text-emerald-400/90">{r.prize}</span>
          </div>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={5} />
    </section>
  )
}

export function Pagination({
  page,
  setPage,
  totalPages,
  pageSize,
  showPageSize = false,
}: {
  page: number
  setPage: (p: number) => void
  totalPages: number
  pageSize?: number
  showPageSize?: boolean
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setPage(1)}
          className="px-3 h-8 rounded-md text-xs font-semibold text-muted-foreground hover:text-white hover:bg-secondary/60"
        >
          First
        </button>
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPage(p)}
            className={cn(
              "h-8 w-8 rounded-md text-xs font-semibold tabular-nums",
              p === page
                ? "bg-primary/30 text-white border border-primary/40"
                : "text-muted-foreground hover:text-white hover:bg-secondary/60",
            )}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPage(totalPages)}
          className="px-3 h-8 rounded-md text-xs font-semibold text-muted-foreground hover:text-white hover:bg-secondary/60"
        >
          Last
        </button>
      </div>
      {showPageSize && (
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{pageSize}</span>
          <button className="h-8 w-12 rounded-md bg-secondary/60 border border-white/5 text-xs text-muted-foreground">
            10 ▾
          </button>
        </div>
      )}
    </div>
  )
}
