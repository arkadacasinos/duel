"use client"

import { useState } from "react"
import { Dice5, Spade, Hash } from "lucide-react"
import { GemIcon } from "@/components/duel-logo"
import { cn } from "@/lib/utils"

type BetRow = {
  id: number
  game: "Casino" | "Dice" | "Blackjack"
  player: string
  wager: { amount: number; coin: "gem" | "ltc" | "btc" | "usdc" }
  multi: number
  payout?: { amount: number; coin: "gem" | "ltc" | "btc" }
  betId: string
}

const ROWS: BetRow[] = [
  { id: 1, game: "Casino", player: "HanabiKanohi", wager: { amount: 0.05, coin: "gem" }, multi: 0.2, payout: { amount: 0.01, coin: "gem" }, betId: "360146581" },
  { id: 2, game: "Dice", player: "Doorknob", wager: { amount: 4.96, coin: "ltc" }, multi: 2, payout: { amount: 9.92, coin: "ltc" }, betId: "58938226" },
  { id: 3, game: "Casino", player: "08329tyga4", wager: { amount: 5.0, coin: "gem" }, multi: 0.3, payout: { amount: 1.5, coin: "gem" }, betId: "360146530" },
  { id: 4, game: "Casino", player: "ataturkistan", wager: { amount: 5.74, coin: "ltc" }, multi: 1.53, payout: { amount: 8.79, coin: "ltc" }, betId: "360146508" },
  { id: 5, game: "Casino", player: "PlsMaxWin", wager: { amount: 1.2, coin: "btc" }, multi: 0, betId: "360146483" },
  { id: 6, game: "Casino", player: "herbishooo", wager: { amount: 2.0, coin: "ltc" }, multi: 0, betId: "360146429" },
  { id: 7, game: "Casino", player: "Micka16", wager: { amount: 0.4, coin: "gem" }, multi: 0.2, payout: { amount: 0.08, coin: "gem" }, betId: "360146440" },
  { id: 8, game: "Blackjack", player: "solanavalue", wager: { amount: 200, coin: "usdc" }, multi: 0, betId: "13748295" },
  { id: 9, game: "Casino", player: "SMolena", wager: { amount: 0.4, coin: "gem" }, multi: 1, payout: { amount: 0.4, coin: "gem" }, betId: "360146410" },
  { id: 10, game: "Dice", player: "Doorknob", wager: { amount: 2.48, coin: "ltc" }, multi: 0, betId: "58938217" },
]

function CoinIcon({ coin, className }: { coin: BetRow["wager"]["coin"]; className?: string }) {
  if (coin === "gem") return <GemIcon className={className} />
  const colors: Record<string, string> = {
    ltc: "#a3a3a3",
    btc: "#3b82f6",
    usdc: "#eab308",
  }
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block rounded-full", className)}
      style={{ background: colors[coin] ?? "#888", width: 12, height: 12 }}
    />
  )
}

function GameIcon({ game }: { game: BetRow["game"] }) {
  if (game === "Dice") return <Hash className="h-4 w-4 text-muted-foreground" />
  if (game === "Blackjack") return <Spade className="h-4 w-4 text-muted-foreground" />
  return <Dice5 className="h-4 w-4 text-muted-foreground" />
}

export function LiveBets() {
  const [tab, setTab] = useState<"all" | "high">("all")
  const [live, setLive] = useState(true)

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 rounded-lg bg-secondary/60 p-1 border border-white/5">
          <button
            type="button"
            onClick={() => setTab("all")}
            className={cn(
              "px-4 h-8 rounded-md text-xs font-semibold transition-colors",
              tab === "all" ? "bg-primary/20 text-white" : "text-muted-foreground hover:text-white",
            )}
          >
            All Bets
          </button>
          <button
            type="button"
            onClick={() => setTab("high")}
            className={cn(
              "px-4 h-8 rounded-md text-xs font-semibold transition-colors",
              tab === "high" ? "bg-primary/20 text-white" : "text-muted-foreground hover:text-white",
            )}
          >
            High Rollers
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <span className={cn("h-2 w-2 rounded-full", live ? "bg-emerald-400 animate-pulse" : "bg-muted-foreground")} />
            Live Bets
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={live}
            onClick={() => setLive((v) => !v)}
            className={cn(
              "relative h-6 w-11 rounded-full border border-white/5 transition-colors",
              live ? "bg-primary" : "bg-secondary",
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform",
                live ? "translate-x-5" : "translate-x-0.5",
              )}
            />
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-white/5 bg-card/50 overflow-hidden">
        <div className="grid grid-cols-[1.4fr_1.6fr_1fr_0.7fr_1fr_1fr] px-4 py-3 text-xs font-semibold text-muted-foreground border-b border-white/5">
          <span>Game</span>
          <span>Player</span>
          <span className="text-right">Wager</span>
          <span className="text-right">Multi</span>
          <span className="text-right">Payout</span>
          <span className="text-right">Bet ID</span>
        </div>
        <div>
          {ROWS.map((r) => {
            const win = r.payout && r.multi >= 1
            return (
              <div
                key={r.id}
                className="grid grid-cols-[1.4fr_1.6fr_1fr_0.7fr_1fr_1fr] px-4 h-12 items-center text-sm border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02]"
              >
                <span className="flex items-center gap-2 text-foreground/90">
                  <GameIcon game={r.game} />
                  {r.game}
                </span>
                <span className="text-foreground/85 truncate">{r.player}</span>
                <span className="flex items-center justify-end gap-1.5 tabular-nums">
                  <CoinIcon coin={r.wager.coin} className="h-3 w-3" />
                  <span className="text-foreground/90">${r.wager.amount.toFixed(2)}</span>
                </span>
                <span className="text-right tabular-nums text-muted-foreground">{r.multi}x</span>
                <span className="flex items-center justify-end gap-1.5 tabular-nums">
                  {r.payout ? (
                    <>
                      <CoinIcon coin={r.payout.coin} className="h-3 w-3" />
                      <span className={cn(win ? "text-emerald-400" : "text-foreground/80")}>
                        ${r.payout.amount.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-muted-foreground/60">-</span>
                  )}
                </span>
                <span className="text-right tabular-nums text-muted-foreground">{r.betId}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
