"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Home, Radio, Star, FileText, Search, ChevronDown,
  Volleyball, Trophy,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SeoContent } from "@/components/seo-content"
import { SPORTS_SPECS, SPORTS_FAQ } from "@/lib/seo-data"

const SPORT_FILTERS = [
  "Soccer", "Basketball", "Tennis", "Counter-Strike", "Dota 2",
  "League of Legends", "Valorant", "Baseball", "Ice Hockey",
  "Cricket", "Table Tennis", "Boxing", "eSoccer", "eBasketball",
]

type Match = {
  league: string
  country: string
  status: string
  home: { name: string; score: number; color: string }
  away: { name: string; score: number; color: string }
  odds: { home: number; draw: number; away: number }
  live?: boolean
}

const LIVE: Match[] = [
  {
    league: "Premier League", country: "England", status: "16' 1st half",
    home: { name: "Everton FC", score: 0, color: "#1e40af" },
    away: { name: "Manchester City", score: 0, color: "#0ea5e9" },
    odds: { home: 8.25, draw: 4.8, away: 1.45 }, live: true,
  },
  {
    league: "Serie A", country: "Italy", status: "29' 1st half",
    home: { name: "AS Roma", score: 2, color: "#7f1d1d" },
    away: { name: "ACF Fiorentina", score: 0, color: "#581c87" },
    odds: { home: 1.04, draw: 25, away: 50 }, live: true,
  },
  {
    league: "LaLiga", country: "Spain", status: "13' 1st half",
    home: { name: "Sevilla FC", score: 0, color: "#dc2626" },
    away: { name: "Real Sociedad", score: 0, color: "#1d4ed8" },
    odds: { home: 2.5, draw: 3.2, away: 3.3 }, live: true,
  },
  {
    league: "Primeira Liga", country: "Portugal", status: "About to start",
    home: { name: "Sporting Lisbon", score: 0, color: "#10b981" },
    away: { name: "Vitoria SC Guimaraes", score: 0, color: "#000" },
    odds: { home: 1.25, draw: 6.8, away: 12 }, live: true,
  },
  {
    league: "Bundesliga", country: "Austria", status: "45' 1st half",
    home: { name: "LASK Linz", score: 0, color: "#000" },
    away: { name: "SK Rapid", score: 1, color: "#15803d" },
    odds: { home: 3.7, draw: 3.5, away: 2.04 }, live: true,
  },
  {
    league: "Saudi Pro League", country: "Saudi Arabia", status: "56' 2nd half",
    home: { name: "Al-Ittifaq FC", score: 0, color: "#f59e0b" },
    away: { name: "Al-Najma", score: 0, color: "#0ea5e9" },
    odds: { home: 1.95, draw: 2.85, away: 6 }, live: true,
  },
  {
    league: "Saudi Pro League", country: "Saudi Arabia", status: "52' 2nd half",
    home: { name: "Al-Ittihad FC", score: 0, color: "#fbbf24" },
    away: { name: "Al-Kholood", score: 0, color: "#dc2626" },
    odds: { home: 2.04, draw: 2.65, away: 6 }, live: true,
  },
  {
    league: "LaLiga 2", country: "Spain", status: "46' 1st half",
    home: { name: "UD Almeria", score: 2, color: "#dc2626" },
    away: { name: "CD Mirandes", score: 2, color: "#dc2626" },
    odds: { home: 1.85, draw: 3.3, away: 5.2 }, live: true,
  },
]

const UPCOMING: Match[] = [
  {
    league: "Liga Profesional", country: "Argentina", status: "Today, 01:00",
    home: { name: "Gimnasia y Esgrima Mendoza", score: 0, color: "#1e40af" },
    away: { name: "Defensa y Justicia", score: 0, color: "#16a34a" },
    odds: { home: 2.34, draw: 3.05, away: 3.65 },
  },
  {
    league: "Segunda Division", country: "Paraguay", status: "Today, 01:00",
    home: { name: "Club Fernando de La Mora", score: 0, color: "#dc2626" },
    away: { name: "CA Tembetary Ypane", score: 0, color: "#a16207" },
    odds: { home: 2.6, draw: 3.05, away: 2.6 },
  },
  {
    league: "Kings League (2 x 20 min)", country: "Brazil", status: "Today, 01:00",
    home: { name: "Furia FC (VII)", score: 0, color: "#000" },
    away: { name: "Capim FC (VII)", score: 0, color: "#15803d" },
    odds: { home: 2.12, draw: 6.8, away: 2.06 },
  },
  {
    league: "Botola Pro D1", country: "Morocco", status: "Today, 01:00",
    home: { name: "Kawkab Athletic Club of Marrakech", score: 0, color: "#dc2626" },
    away: { name: "Olympique Dcheira", score: 0, color: "#16a34a" },
    odds: { home: 1.57, draw: 3.6, away: 5.8 },
  },
  {
    league: "Baller League UK", country: "England", status: "Today, 01:00",
    home: { name: "Gold Devils (VI)", score: 0, color: "#fbbf24" },
    away: { name: "Community Fc (VI)", score: 0, color: "#0ea5e9" },
    odds: { home: 1.61, draw: 6.6, away: 3.05 },
  },
  {
    league: "Baller League UK", country: "England", status: "Today, 01:50",
    home: { name: "VZN FC (VI)", score: 0, color: "#7c3aed" },
    away: { name: "Clutch FC (VI)", score: 0, color: "#dc2626" },
    odds: { home: 2.16, draw: 5.8, away: 2.16 },
  },
  {
    league: "Kings League (2 x 20 min)", country: "Brazil", status: "Today, 01:50",
    home: { name: "Nyvelados FC (VII)", score: 0, color: "#1e40af" },
    away: { name: "Dibrados Fc (VII)", score: 0, color: "#16a34a" },
    odds: { home: 1.79, draw: 8.2, away: 2.38 },
  },
  {
    league: "Primera B", country: "Colombia", status: "Today, 02:00",
    home: { name: "Union Magdalena", score: 0, color: "#dc2626" },
    away: { name: "Barranquilla FC", score: 0, color: "#dc2626" },
    odds: { home: 1.64, draw: 3.7, away: 4.6 },
  },
]

function ClubBadge({ color, name }: { color: string; name: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white shrink-0"
      style={{ background: color }}
    >
      {initials}
    </span>
  )
}

function MatchCard({ m, withTotal = false }: { m: Match; withTotal?: boolean }) {
  return (
    <div className="rounded-xl border border-white/5 bg-card/50 hover:bg-card/70 transition-colors">
      <div className="px-4 pt-3 pb-2 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[11px] text-muted-foreground truncate">
            <span className="text-muted-foreground/70">{m.country}</span>
            <span className="mx-1.5 text-muted-foreground/50">•</span>
            {m.league}
          </p>
          <p
            className={cn(
              "text-[11px] font-semibold mt-0.5 flex items-center gap-1.5",
              m.live ? "text-blue-400" : "text-muted-foreground/80",
            )}
          >
            {m.live && <Radio className="h-3 w-3" />}
            {m.status}
          </p>
        </div>
        <button aria-label="Star match" className="text-muted-foreground/60 hover:text-yellow-400">
          <Star className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="px-4 py-2 space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 min-w-0">
            <ClubBadge color={m.home.color} name={m.home.name} />
            <span className="truncate text-white/90">{m.home.name}</span>
          </span>
          <span className="text-white/85 tabular-nums font-semibold">{m.home.score}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 min-w-0">
            <ClubBadge color={m.away.color} name={m.away.name} />
            <span className="truncate text-white/90">{m.away.name}</span>
          </span>
          <span className="text-white/85 tabular-nums font-semibold">{m.away.score}</span>
        </div>
      </div>
      <div className="px-4 pb-3 pt-1 text-[11px] text-muted-foreground/80">
        {withTotal ? "Total" : "1x2"}
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr_36px] gap-1 px-3 pb-3">
        <OddsButton label={withTotal ? "over 2.5" : "1"} odd={m.odds.home} />
        <OddsButton label={withTotal ? "under 2.5" : "draw"} odd={m.odds.draw} />
        <OddsButton label="2" odd={m.odds.away} hide={withTotal} />
        <button
          aria-label="More markets"
          className="flex items-center justify-center rounded-md bg-secondary/50 hover:bg-secondary border border-white/5 text-muted-foreground"
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

function OddsButton({ label, odd, hide = false }: { label: string; odd: number; hide?: boolean }) {
  if (hide) return <span />
  return (
    <button
      type="button"
      className="flex items-center justify-between gap-2 h-9 px-3 rounded-md bg-secondary/40 hover:bg-primary/15 border border-white/5 hover:border-primary/30 transition-colors"
    >
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <span className="text-xs font-semibold text-white tabular-nums">{odd.toFixed(2)}</span>
    </button>
  )
}

const TOP_NAV = [
  { icon: Home, label: "Home" },
  { icon: Radio, label: "Live" },
  { icon: Star, label: "Favorites" },
  { icon: FileText, label: "My Bets" },
]

const SPORT_DOTS = [
  "Soccer", "Basketball", "Tennis", "Hockey", "Football", "Baseball", "Golf",
  "MMA", "Boxing", "Cricket", "Rugby", "Esports", "Darts", "F1",
]

export default function SportsPage() {
  const [filter, setFilter] = useState<string>("Soccer")
  return (
    <div className="mx-auto max-w-[1480px] px-6 py-6 space-y-6">
      {/* Promo banners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <PromoBanner
          src="/art/banners/nba-2026.jpeg"
          alt="NBA 2026 Play Offs — Live"
          tag="LIVE"
          tagTone="live"
        />
        <PromoBanner
          src="/art/banners/conference-league.jpeg"
          alt="UEFA Conference League Semi Finals — April 30th"
          tag="APR 30TH"
          tagTone="info"
        />
      </div>

      {/* Top sport icon strip */}
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-white/5 pb-3">
        {TOP_NAV.map((n) => {
          const Icon = n.icon
          return (
            <button
              key={n.label}
              type="button"
              aria-label={n.label}
              className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-white hover:bg-secondary/60"
            >
              <Icon className="h-4 w-4" />
            </button>
          )
        })}
        <span className="mx-2 h-6 w-px bg-white/10" />
        {SPORT_DOTS.map((s) => (
          <button
            key={s}
            type="button"
            aria-label={s}
            className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-white hover:bg-secondary/60"
          >
            <SportIcon name={s} />
          </button>
        ))}
        <div className="flex-1" />
        <button
          type="button"
          aria-label="Search"
          className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-white hover:bg-secondary/60"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>

      {/* Live section */}
      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-base font-bold text-white">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15">
            <Radio className="h-3.5 w-3.5 text-blue-400" />
          </span>
          Live
        </h2>
        <SportFilterBar active={filter} onChange={setFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {LIVE.map((m, i) => (
            <MatchCard key={i} m={m} withTotal={i === 7} />
          ))}
        </div>
        <button className="w-full h-10 rounded-lg bg-secondary/40 border border-white/5 text-sm text-muted-foreground hover:text-white hover:bg-secondary/60">
          Go to Live →
        </button>
      </section>

      {/* Upcoming */}
      <section className="space-y-4 pt-4">
        <h2 className="flex items-center gap-2 text-base font-bold text-white">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/15">
            <Volleyball className="h-3.5 w-3.5 text-cyan-400" />
          </span>
          Upcoming
        </h2>
        <SportFilterBar active={filter} onChange={setFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {UPCOMING.map((m, i) => (
            <MatchCard key={i} m={m} />
          ))}
        </div>
      </section>

      <section className="pt-8 pb-4 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>ODDS FORMAT</span>
          <button className="h-9 w-40 rounded-md bg-secondary/60 border border-white/5 px-3 text-left text-sm text-white flex items-center justify-between">
            European <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </div>
        <p className="max-w-2xl text-center text-[11px] text-muted-foreground/70">
          Although every effort is made to ensure data displayed on our site is accurate, this data
          is for information purposes and should be used as a guide only. In the event of any
          particular information being incorrect, we assume no liability for it.
        </p>
      </section>

      <SeoContent
        specsTitle="Характеристики раздела Sports"
        specsCaption="Букмекерская секция duel casino онлайн: маржа, виды спорта, киберспорт, форматы коэффициентов, cashout и Bet Builder. Всё, что нужно знать перед тем как дуэль казино играть в спортивные ставки."
        specs={SPORTS_SPECS}
        faqTitle="FAQ — Ставки на спорт и киберспорт"
        faqCaption="10 ответов про duel casino сайт в части Sports: live-стримы, cashout, форматы коэффициентов, duel casino зеркало для активных купонов."
        faq={SPORTS_FAQ}
      />

      <div className="h-12" />

      {/* Floating betslip */}
      <div className="fixed bottom-5 right-20 z-30">
        <button className="h-11 px-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold shadow-lg flex items-center gap-3">
          <FileText className="h-4 w-4" />
          Betslip
          <span className="ml-2 px-2 py-0.5 rounded-md bg-white/15 text-[11px]">QUICK BET</span>
          <Trophy className="h-3.5 w-3.5 opacity-80" />
        </button>
      </div>
    </div>
  )
}

function PromoBanner({
  src,
  alt,
  tag,
  tagTone = "info",
}: {
  src: string
  alt: string
  tag?: string
  tagTone?: "live" | "info"
}) {
  return (
    <button
      type="button"
      className="group relative overflow-hidden rounded-xl border border-white/5 bg-card/50 transition-all hover:scale-[1.005] hover:shadow-[0_12px_40px_-12px_rgba(108,93,211,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative w-full aspect-[2657/420] min-h-[112px]">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"
        />
        {tag && (
          <span
            className={cn(
              "absolute top-3 right-3 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider shadow-md",
              tagTone === "live"
                ? "bg-red-500/90 text-white"
                : "bg-white/90 text-slate-900",
            )}
          >
            {tag}
          </span>
        )}
      </div>
    </button>
  )
}

function SportFilterBar({ active, onChange }: { active: string; onChange: (s: string) => void }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
      {SPORT_FILTERS.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          className={cn(
            "px-3 h-9 rounded-md text-xs font-semibold whitespace-nowrap transition-colors",
            active === s
              ? "bg-secondary/80 text-white border border-white/5"
              : "text-muted-foreground hover:text-white",
          )}
        >
          <span className="mr-1.5 inline-block">
            <SportIcon name={s} small />
          </span>
          {s}
        </button>
      ))}
    </div>
  )
}

function SportIcon({ name, small = false }: { name: string; small?: boolean }) {
  const cls = small ? "h-3 w-3" : "h-4 w-4"
  return (
    <svg viewBox="0 0 24 24" className={cn(cls, "inline-block text-current")} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}
