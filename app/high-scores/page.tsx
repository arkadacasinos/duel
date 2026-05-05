"use client"

import { useState } from "react"
import { Search, Trophy, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Pagination } from "@/components/leaderboard"
import { SeoContent } from "@/components/seo-content"
import { HIGH_SCORES_SPECS, HIGH_SCORES_FAQ } from "@/lib/seo-data"

const TABS = ["Top Wagers", "Biggest Winners", "Biggest Losers", "Biggest Wins", "Biggest Losses", "Luckiest Wins"] as const
type Tab = (typeof TABS)[number]

const PERIODS = ["All Time", "Last Month", "Last Week", "Last Day"] as const
type Period = (typeof PERIODS)[number]

const ROWS = [
  { place: 1, player: "wpgg", value: "$1,017,646,532.76" },
  { place: 2, player: "jarik", value: "$1,001,983,645.87" },
  { place: 3, player: "PrayingMantis", value: "$880,801,624.39" },
  { place: 4, player: "punkism", value: "$615,526,517.90" },
  { place: 5, player: "signature", value: "$420,327,576.12" },
  { place: 6, player: "Gjshirtman", value: "$264,063,078.76" },
  { place: 7, player: "jyluo", value: "$172,019,719.71" },
  { place: 8, player: "ShuffleRICO", value: "$145,695,380.43" },
  { place: 9, player: "Superscatter", value: "$144,700,964.51" },
  { place: 10, player: "Duel5151", value: "$135,999,787.30" },
]

export default function HighScoresPage() {
  const [tab, setTab] = useState<Tab>("Top Wagers")
  const [period, setPeriod] = useState<Period>("All Time")
  const [page, setPage] = useState(1)

  return (
    <div className="mx-auto max-w-[1480px] px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h1 className="text-2xl font-black text-white" style={{ letterSpacing: "-0.02em" }}>
              High Scores
            </h1>
            <div className="flex items-center gap-1 rounded-lg bg-secondary/60 p-1 border border-white/5">
              {PERIODS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  className={cn(
                    "px-4 h-8 rounded-md text-xs font-semibold transition-colors whitespace-nowrap",
                    period === p
                      ? "bg-primary/25 text-white"
                      : "text-muted-foreground hover:text-white",
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={cn(
                    "px-4 h-9 rounded-md text-sm font-semibold transition-colors whitespace-nowrap",
                    tab === t
                      ? "bg-secondary/80 text-white border border-white/5"
                      : "text-muted-foreground hover:text-white",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search users..."
                className="h-10 w-72 rounded-lg bg-secondary/60 border border-white/5 pl-9 pr-3 text-sm text-white placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/40"
              />
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-card/50 overflow-hidden">
            <div className="grid grid-cols-[80px_1fr_1fr] px-4 py-3 text-xs font-semibold text-muted-foreground border-b border-white/5">
              <span>#</span>
              <span>Player</span>
              <span className="text-right">Total Wagered</span>
            </div>
            {ROWS.map((r) => (
              <div
                key={r.place}
                className="grid grid-cols-[80px_1fr_1fr] px-4 h-14 items-center text-sm border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02]"
              >
                <span className="font-mono text-muted-foreground tabular-nums">
                  {String(r.place).padStart(2, "0")}
                </span>
                <span className="text-white/90">{r.player}</span>
                <span className="text-right tabular-nums text-white/90">{r.value}</span>
              </div>
            ))}
          </div>

          <Pagination page={page} setPage={setPage} totalPages={5} pageSize={10} showPageSize />
        </div>

        {/* Side: profile rankings */}
        <aside className="rounded-xl border border-white/5 bg-card/60 p-5 h-fit">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <p className="text-base font-semibold text-white">zheka-100</p>
            </div>
          </div>
          <ul className="space-y-3.5">
            {[
              { label: "Top Wagers", value: "#1279" },
              { label: "Biggest Winners", value: "Not Ranked", muted: true },
              { label: "Biggest Losers", value: "#1748" },
              { label: "Biggest Wins", value: "Not Ranked", muted: true },
              { label: "Biggest Losses", value: "Not Ranked", muted: true },
              { label: "Luckiest Wins", value: "#2904" },
            ].map((r) => (
              <li
                key={r.label}
                className="flex items-center justify-between text-sm border-b border-white/[0.04] pb-3.5 last:border-0 last:pb-0"
              >
                <span className="text-muted-foreground">{r.label}</span>
                <span
                  className={cn(
                    "font-bold",
                    r.muted ? "text-muted-foreground/70" : "text-white",
                  )}
                >
                  {r.value}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <SeoContent
        specsTitle="Характеристики раздела High Scores"
        specsCaption="Публичные рейтинги duel casino онлайн: топы по объёму ставок, выигрышам и удаче. Прозрачность, награды лидерам и open API — почему дуэль казино играть честнее, чем у конкурентов."
        specs={HIGH_SCORES_SPECS}
        faqTitle="FAQ — Рейтинги, награды и приватность"
        faqCaption="10 ответов про High Scores на duel casino сайт: как попасть в топ, защита от накруток, синхронизация с duel casino зеркало и реальные казино дуэль отзывы."
        faq={HIGH_SCORES_FAQ}
      />

      <div className="h-12" />
    </div>
  )
}
