import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Sports — ставки на спорт и киберспорт на Duel Casino",
  description:
    "Букмекерский раздел duel casino онлайн: live-ставки на футбол, баскетбол, теннис, MMA и киберспорт (CS2, Dota 2, Valorant, LoL). Высокие коэффициенты, cashout, Bet Builder и live-стримы. Дуэль казино играть на спорт официально, без задержек, через основной сайт или duel casino зеркало.",
  keywords: [
    "duel casino",
    "duel casino играть",
    "duel casino онлайн",
    "duel casino сайт",
    "duel casino зеркало",
    "duelcom casino",
    "дуэль казино играть",
    "ставки на спорт duel",
    "duel sportsbook",
    "ставки киберспорт",
    "live ставки",
    "cashout ставки",
  ],
  alternates: {
    canonical: "/sports",
  },
  openGraph: {
    type: "website",
    title: "Sports — букмекерская секция Duel Casino",
    description:
      "Duel casino сайт: live-ставки на спорт и киберспорт, cashout, Bet Builder. Удобное duel casino зеркало для активных купонов.",
    url: "/sports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duel Sports — ставки на спорт и киберспорт",
    description:
      "Live-коэффициенты, cashout и Bet Builder. Duel casino онлайн — букмекерская секция с высокими коэффициентами.",
  },
}

export default function SportsLayout({ children }: { children: React.ReactNode }) {
  return children
}
