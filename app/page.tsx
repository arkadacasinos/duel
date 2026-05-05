import type { Metadata } from "next"
import { GameCard } from "@/components/game-card"
import { ORIGINALS, METHLABS } from "@/lib/games"
import { HeroScene } from "@/components/hero-scene"
import { SeoContent } from "@/components/seo-content"
import { ORIGINALS_SPECS, ORIGINALS_FAQ } from "@/lib/seo-data"

export const metadata: Metadata = {
  title:
    "Duel Casino — официальный сайт, играть онлайн в Duel Originals и слоты",
  description:
    "Duel Casino — официальный сайт для тех, кто хочет дуэль казино играть честно. Эксклюзивные Duel Originals (Plinko, Crash, Mines, Castle Roulette), 100% RTP-игры, мгновенные крипто-выводы. Актуальное duel casino зеркало, duel casino бонус для новичков и реальные казино дуэль отзывы.",
  keywords: [
    "duel casino",
    "duel casino официальный",
    "duel casino официальный сайт",
    "duel casino онлайн",
    "duel casino играть",
    "duel casino сайт",
    "duel casino бонус",
    "duel casino зеркало",
    "duelcom casino",
    "дуэль казино",
    "дуэль казино официальный",
    "дуэль казино официальный сайт",
    "дуэль казино играть",
    "дуэль казино онлайн",
    "duel originals",
    "casino crypto",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title:
      "Duel Casino — официальный сайт, играть онлайн в Duel Originals",
    description:
      "Дуэль казино официальный сайт: Duel Originals со 100% RTP, слоты, лайв, спорт. Актуальное duel casino зеркало и бонус для новых игроков.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duel Casino — официальный сайт",
    description:
      "Duel Originals, слоты, лайв и спорт. Duel casino онлайн с мгновенными крипто-выводами.",
  },
}

export default function OriginalsPage() {
  return (
    <div className="mx-auto max-w-[1480px] px-6">
      <HeroScene />

      <section className="space-y-5 pb-12">
        <h2
          className="text-center text-2xl font-black text-white"
          style={{ letterSpacing: "-0.01em" }}
        >
          Duel Originals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {ORIGINALS.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>

      <section className="space-y-5 pb-16">
        <h2
          className="text-center text-2xl font-black text-white"
          style={{ letterSpacing: "-0.01em" }}
        >
          Methlabs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {METHLABS.map((g) => (
            <GameCard key={g.id} game={g} size="sm" />
          ))}
        </div>
      </section>

      <SeoContent
        specsTitle="Характеристики платформы Duel Casino"
        specsCaption="Полный технический паспорт duel casino онлайн: лицензия, оригинальные игры, поддержка, зеркало и условия для тех, кто решил дуэль казино играть на официальном сайте duelcom casino."
        specs={ORIGINALS_SPECS}
        faqTitle="FAQ — частые вопросы про Duel Originals"
        faqCaption="Ответы на 10 главных вопросов про duel casino официальный сайт, duel casino бонус, duel casino зеркало и казино дуэль отзывы."
        faq={ORIGINALS_FAQ}
      />

      <div className="h-12" />
    </div>
  )
}
