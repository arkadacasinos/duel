import { Flame, Star, Sparkles } from "lucide-react"
import { GameRow } from "@/components/game-row"
import { ProvidersRow } from "@/components/providers-row"
import { LiveBets } from "@/components/live-bets"
import { Leaderboard } from "@/components/leaderboard"
import { POPULAR, DUEL_PICKS, NEW_RELEASES } from "@/lib/games"
import { SeoContent } from "@/components/seo-content"
import { CASINO_SPECS, CASINO_FAQ } from "@/lib/seo-data"

const iconCls = "h-4 w-4 text-muted-foreground"

export default function CasinoPage() {
  return (
    <div className="mx-auto max-w-[1480px] px-6 py-8 space-y-10">
      <GameRow
        title="Popular"
        icon={<Flame className={iconCls} aria-hidden="true" />}
        games={POPULAR}
      />
      <ProvidersRow />
      <GameRow
        title="Duel Picks"
        icon={<Star className={iconCls} aria-hidden="true" />}
        games={DUEL_PICKS}
        showViewAll
      />
      <GameRow
        title="New Releases"
        icon={<Sparkles className={iconCls} aria-hidden="true" />}
        games={NEW_RELEASES}
        showViewAll
      />

      <div className="pt-4 space-y-10">
        <LiveBets />
        <Leaderboard />
      </div>

      <SeoContent
        specsTitle="Характеристики раздела Casino"
        specsCaption="Слоты, лайв-казино, карточные игры и рулетка на duel casino онлайн. Полный паспорт раздела: провайдеры, RTP, лимиты ставок и условия, на которых стоит дуэль казино играть в 2026 году."
        specs={CASINO_SPECS}
        faqTitle="FAQ — Слоты, лайв и карточные игры"
        faqCaption="10 ответов про duel casino сайт, duel casino бонус, demo-режим и duel casino зеркало для раздела Casino."
        faq={CASINO_FAQ}
      />

      <div className="h-12" />
    </div>
  )
}
