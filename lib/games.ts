import type { Game } from "@/components/game-card"

const img = (slug: string) => ({
  image: `/art/games/${slug}.webp`,
  hideOverlay: true,
  // Fallback colors used while image is loading or if it fails
  from: "#1e3a8a",
  to: "#0c1e4f",
})

const orig = (slug: string) => ({
  image: `/art/originals/${slug}.jpg`,
  // Overlay (title + subtitle) IS rendered for originals — text isn't burned in
  hideOverlay: false,
  from: "#1e3a8a",
  to: "#0c1e4f",
})

export const POPULAR: Game[] = [
  {
    id: "wild-west-gold",
    title: "Wild West Gold",
    subtitle: "Pragmatic Play",
    art: img("wild-west-gold"),
  },
  {
    id: "le-pharaoh",
    title: "Le Pharaoh",
    subtitle: "Hacksaw Gaming",
    art: img("le-pharaoh"),
  },
  {
    id: "sweet-bonanza",
    title: "Sweet Bonanza",
    subtitle: "Pragmatic Play",
    art: img("sweet-bonanza"),
  },
  {
    id: "sweet-bonanza-candyland",
    title: "Sweet Bonanza Candyland",
    subtitle: "Pragmatic Play Live",
    art: img("sweet-bonanza-candyland"),
  },
  {
    id: "ze-zeus",
    title: "Ze Zeus",
    subtitle: "Hacksaw Gaming",
    art: img("ze-zeus"),
  },
  {
    id: "wanted-dead-or-a-wild",
    title: "Wanted Dead or a Wild",
    subtitle: "Hacksaw Gaming",
    art: img("wanted-dead-or-a-wild"),
  },
  {
    id: "epic-bullets-and-bounty",
    title: "Epic Bullets and Bounty",
    subtitle: "Hacksaw Gaming",
    art: img("epic-bullets-and-bounty"),
  },
  {
    id: "hand-of-anubis",
    title: "Hand of Anubis",
    subtitle: "Hacksaw Gaming",
    art: img("hand-of-anubis"),
  },
  {
    id: "hot-ross",
    title: "Hot Ross",
    subtitle: "Hacksaw Gaming",
    art: img("hot-ross"),
  },
]

export const DUEL_PICKS: Game[] = [
  {
    id: "donny-dough",
    title: "Donny Dough",
    subtitle: "Hacksaw Gaming",
    art: img("donny-dough"),
  },
  {
    id: "aviamasters",
    title: "Aviamasters",
    subtitle: "BGaming",
    art: img("aviamasters"),
  },
  {
    id: "nazar-wishes",
    title: "Nazar Wishes",
    subtitle: "Pragmatic Play",
    art: img("nazar-wishes"),
  },
  {
    id: "stormforged",
    title: "Stormforged",
    subtitle: "Hacksaw Gaming",
    art: img("stormforged"),
  },
  {
    id: "marlin-masters-atlantis",
    title: "Marlin Masters Atlantis",
    subtitle: "Hacksaw Gaming",
    art: img("marlin-masters-atlantis"),
  },
  {
    id: "mummyland-treasures",
    title: "Mummyland Treasures",
    subtitle: "Spinomenal",
    art: img("mummyland-treasures"),
  },
  {
    id: "sixsixsix",
    title: "SixSixSix",
    subtitle: "Hacksaw Gaming",
    art: img("sixsixsix"),
  },
  {
    id: "le-bunny",
    title: "Le Bunny",
    subtitle: "Hacksaw Gaming",
    art: img("le-bunny"),
  },
  {
    id: "flight-mode",
    title: "Flight Mode",
    subtitle: "Hacksaw Gaming",
    art: img("flight-mode"),
  },
  {
    id: "fist-of-destruction",
    title: "Fist of Destruction",
    subtitle: "Hacksaw Gaming",
    art: img("fist-of-destruction"),
  },
]

export const NEW_RELEASES: Game[] = [
  {
    id: "slayers-inc",
    title: "Slayers Inc",
    subtitle: "Hacksaw Gaming",
    art: img("slayers-inc"),
  },
  {
    id: "kmc",
    title: "KMC",
    subtitle: "Hacksaw Gaming",
    art: img("kmc"),
  },
  {
    id: "crazy-pachinko",
    title: "Crazy Pachinko",
    subtitle: "Evolution Gaming",
    art: img("crazy-pachinko"),
  },
  {
    id: "mega-roulette",
    title: "Mega Roulette",
    subtitle: "Pragmatic Play Live",
    art: img("mega-roulette"),
  },
  {
    id: "cyber-gypsies",
    title: "Cyber Gypsies",
    subtitle: "Hacksaw Gaming",
    art: img("cyber-gypsies"),
  },
  {
    id: "power-of-ten",
    title: "Power of Ten",
    subtitle: "Hacksaw Gaming",
    art: img("power-of-ten"),
  },
  {
    id: "dream-catcher",
    title: "Dream Catcher",
    subtitle: "Evolution Gaming",
    art: img("dream-catcher"),
  },
  {
    id: "xmas-drop",
    title: "Xmas Drop",
    subtitle: "Hacksaw Gaming",
    art: img("xmas-drop"),
  },
  {
    id: "monopoly-live",
    title: "Monopoly Live",
    subtitle: "Evolution Gaming",
    art: img("monopoly-live"),
  },
  {
    id: "le-king",
    title: "Le King",
    subtitle: "Hacksaw Gaming",
    art: img("le-king"),
  },
]

export const ORIGINALS: Game[] = [
  { id: "dice",            title: "Dice",            subtitle: "Duel Originals", rtp: true, art: orig("dice") },
  { id: "blackjack",       title: "Blackjack",       subtitle: "Duel Originals", rtp: true, art: orig("blackjack") },
  { id: "plinko",          title: "Plinko",          subtitle: "Duel Originals", rtp: true, art: orig("plinko") },
  { id: "crash",           title: "Crash",           subtitle: "Duel Originals", rtp: true, art: orig("crash") },
  { id: "mines",           title: "Mines",           subtitle: "Duel Originals", rtp: true, art: orig("mines") },
  { id: "beef",            title: "Beef",            subtitle: "Duel Originals", rtp: true, art: orig("beef") },
  { id: "keno",            title: "Keno",            subtitle: "Duel Originals", rtp: true, art: orig("keno") },
  { id: "castle-roulette", title: "Castle Roulette", subtitle: "Duel Originals", rtp: true, live: true, art: orig("castle-roulette") },
  { id: "video-poker",     title: "Video Poker",     subtitle: "Duel Originals", rtp: true, art: orig("video-poker") },
  { id: "groomers-van",    title: "Groomer's Van",   subtitle: "Duel Originals", rtp: true, art: orig("groomers-van") },
]

export const METHLABS: Game[] = [
  {
    id: "ml-wild-west-gold",
    title: "Wild West Gold",
    subtitle: "Pragmatic Play",
    art: img("wild-west-gold"),
  },
  {
    id: "ml-le-king",
    title: "Le King",
    subtitle: "Hacksaw Gaming",
    art: img("le-king"),
  },
  {
    id: "ml-dream-catcher",
    title: "Dream Catcher",
    subtitle: "Evolution Gaming",
    art: img("dream-catcher"),
  },
  {
    id: "ml-monopoly-live",
    title: "Monopoly Live",
    subtitle: "Evolution Gaming",
    art: img("monopoly-live"),
  },
  {
    id: "ml-sweet-bonanza-candyland",
    title: "Sweet Bonanza Candyland",
    subtitle: "Pragmatic Play Live",
    art: img("sweet-bonanza-candyland"),
  },
  {
    id: "ml-crazy-pachinko",
    title: "Crazy Pachinko",
    subtitle: "Evolution Gaming",
    art: img("crazy-pachinko"),
  },
  {
    id: "ml-mega-roulette",
    title: "Mega Roulette",
    subtitle: "Pragmatic Play Live",
    art: img("mega-roulette"),
  },
]

export const PROVIDERS = [
  { id: "nolimit", name: "NOLIMIT CITY" },
  { id: "pragmatic", name: "PRAGMATIC PLAY" },
  { id: "hacksaw", name: "HACKSAW GAMING" },
  { id: "playngo", name: "PLAY'n GO" },
  { id: "evolution", name: "EVOLUTION" },
  { id: "backseat", name: "BACKSEAT" },
  { id: "bigtime", name: "BIG TIME GAMING" },
]
