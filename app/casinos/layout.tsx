import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Casino онлайн — слоты, лайв-казино и карточные игры на Duel",
  description:
    "Раздел Casino на duel casino онлайн: 6 000+ слотов от Hacksaw, Pragmatic, Nolimit City, Play'n GO, лайв-казино с реальными дилерами, блэкджек, рулетка и баккара. Удобное duel casino зеркало, demo-режим без регистрации и duel casino бонус до 500% на первый депозит.",
  keywords: [
    "duel casino",
    "duel casino играть",
    "duel casino онлайн",
    "duel casino сайт",
    "duel casino бонусы",
    "duel casino зеркало",
    "duelcom casino",
    "дуэль казино играть",
    "дуэль казино онлайн",
    "слоты duel casino",
    "лайв казино duel",
    "карточные игры онлайн",
    "рулетка онлайн",
  ],
  alternates: {
    canonical: "/casino",
  },
  openGraph: {
    type: "website",
    title: "Casino — слоты, лайв и карточные игры на Duel Casino",
    description:
      "Duel casino сайт: 6 000+ слотов, лайв-дилеры, блэкджек и рулетка. Duel casino бонус и duel casino зеркало доступны 24/7.",
    url: "/casino",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duel Casino — слоты, лайв и карточные игры",
    description:
      "Duel casino онлайн: топ-слоты, лайв-казино, блэкджек, рулетка. Бонус новичкам и стабильное зеркало.",
  },
}

export default function CasinoLayout({ children }: { children: React.ReactNode }) {
  return children
}
