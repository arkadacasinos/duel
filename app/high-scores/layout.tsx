import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "High Scores — рейтинги и казино дуэль отзывы лидеров Duel",
  description:
    "Публичные рейтинги duel casino официальный сайт: топ-игроки по объёму ставок, крупнейшим выигрышам и удаче. Прозрачные результаты, награды лидерам, открытый API. Реальные казино дуэль отзывы и реферальные коды активных пользователей duel casino онлайн.",
  keywords: [
    "duel casino",
    "duel casino официальный",
    "duel casino официальный сайт",
    "duel casino онлайн",
    "duel casino сайт",
    "duel casino зеркало",
    "duelcom casino",
    "казино дуэль отзывы",
    "дуэль казино отзывы",
    "дуэль казино официальный",
    "рейтинг казино",
    "топ игроков",
    "high scores duel",
  ],
  alternates: {
    canonical: "/high-scores",
  },
  openGraph: {
    type: "website",
    title: "High Scores — рейтинги Duel Casino и казино дуэль отзывы",
    description:
      "Топ-игроки duel casino онлайн: ставки, выигрыши и удача. Реальные казино дуэль отзывы и реферальные коды.",
    url: "/high-scores",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duel Casino High Scores",
    description:
      "Прозрачный рейтинг игроков duel casino официальный сайт. Награды лидерам и реальные отзывы.",
  },
}

export default function HighScoresLayout({ children }: { children: React.ReactNode }) {
  return children
}
