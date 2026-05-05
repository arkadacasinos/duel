import Image from "next/image"
import { cn } from "@/lib/utils"

export type GameArt = {
  /** Optional real artwork — when provided, takes precedence over SVG */
  image?: string
  /** Two-color background gradient (fallback) */
  from: string
  to: string
  /** Decorative variant (fallback) */
  variant?: "burst" | "wave" | "dots" | "diamond" | "ribbon" | "glow" | "grid"
  /** Decorative tint (fallback) */
  decor?: string
  /** When true the title/subtitle overlay is hidden because the image already contains them */
  hideOverlay?: boolean
}

export type Game = {
  id: string
  title: string
  subtitle?: string
  badge?: string
  /** Show "100% RTP" pill in top-left (Duel Originals) */
  rtp?: boolean
  /** Show red "LIVE" pill in top-right */
  live?: boolean
  art: GameArt
}

const VARIANTS = {
  burst: (decor: string) => (
    <g stroke={decor} strokeWidth="1" opacity="0.35">
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i / 18) * Math.PI * 2
        return (
          <line
            key={i}
            x1="100"
            y1="80"
            x2={100 + Math.cos(a) * 200}
            y2={80 + Math.sin(a) * 200}
          />
        )
      })}
      <circle cx="100" cy="80" r="36" fill={decor} opacity="0.4" />
    </g>
  ),
  wave: (decor: string) => (
    <g fill="none" stroke={decor} strokeWidth="2" opacity="0.45">
      <path d="M-20 90 Q 30 60 80 90 T 180 90 T 280 90" />
      <path d="M-20 130 Q 30 100 80 130 T 180 130 T 280 130" opacity="0.7" />
      <path d="M-20 170 Q 30 140 80 170 T 180 170 T 280 170" opacity="0.5" />
    </g>
  ),
  dots: (decor: string) => (
    <g fill={decor} opacity="0.5">
      {Array.from({ length: 6 }).flatMap((_, y) =>
        Array.from({ length: 6 }).map((_, x) => (
          <circle key={`${x}-${y}`} cx={20 + x * 32} cy={30 + y * 32} r="2.5" />
        )),
      )}
    </g>
  ),
  diamond: (decor: string) => (
    <g fill="none" stroke={decor} strokeWidth="1.5" opacity="0.4">
      <path d="M100 20 L160 80 L100 140 L40 80 Z" />
      <path d="M100 50 L130 80 L100 110 L70 80 Z" />
      <path d="M100 80 L100 80" />
    </g>
  ),
  ribbon: (decor: string) => (
    <g fill={decor} opacity="0.35">
      <path d="M-20 60 C 60 20 140 100 240 60 L 240 90 C 140 130 60 50 -20 90 Z" />
      <path d="M-20 140 C 60 100 140 180 240 140 L 240 170 C 140 210 60 130 -20 170 Z" opacity="0.7" />
    </g>
  ),
  glow: (decor: string) => (
    <g>
      <ellipse cx="100" cy="90" rx="80" ry="60" fill={decor} opacity="0.45" />
      <ellipse cx="100" cy="90" rx="40" ry="30" fill={decor} opacity="0.6" />
    </g>
  ),
  grid: (decor: string) => (
    <g stroke={decor} strokeWidth="1" opacity="0.3">
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 28} x2="200" y2={i * 28} />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 28} y1="0" x2={i * 28} y2="220" />
      ))}
    </g>
  ),
}

function GameArtSVG({ art, title }: { art: GameArt; title: string }) {
  const id = `g-${title.replace(/\s+/g, "-")}`
  const decor = art.decor ?? "rgba(255,255,255,0.85)"
  const variant = art.variant ?? "glow"
  const Decoration = VARIANTS[variant]
  return (
    <svg
      viewBox="0 0 200 220"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={art.from} />
          <stop offset="100%" stopColor={art.to} />
        </linearGradient>
        <radialGradient id={`${id}-r`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="200" height="220" fill={`url(#${id})`} />
      {Decoration(decor)}
      <rect x="0" y="0" width="200" height="220" fill={`url(#${id}-r)`} />
    </svg>
  )
}

export function GameCard({
  game,
  size = "md",
  className,
}: {
  game: Game
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const dims = {
    sm: "aspect-[3/4] text-[11px]",
    md: "aspect-[3/4] text-xs",
    lg: "aspect-[3/4] text-sm",
  }[size]

  const titleSize = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  }[size]

  return (
    <button
      type="button"
      className={cn(
        "group relative block w-full overflow-hidden rounded-xl border border-white/5 transition-all",
        "hover:scale-[1.02] hover:shadow-[0_12px_40px_-12px_rgba(108,93,211,0.45)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        dims,
        className,
      )}
    >
      {game.art.image ? (
        <Image
          src={game.art.image}
          alt={game.title}
          fill
          sizes="(min-width: 1024px) 200px, 40vw"
          className="object-cover"
        />
      ) : (
        <GameArtSVG art={game.art} title={game.title} />
      )}

      {!game.art.hideOverlay && (
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
      )}

      {game.rtp && (
        <span className="absolute top-2 left-2 z-10 inline-flex items-center rounded-full bg-emerald-500/95 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-950 shadow-md">
          100% RTP
        </span>
      )}

      {game.live && (
        <span className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-red-500/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          LIVE
        </span>
      )}

      {game.badge && !game.rtp && (
        <span className="absolute top-2 left-2 z-10 rounded-md bg-emerald-500/90 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
          {game.badge}
        </span>
      )}

      {!game.art.hideOverlay && (
        <div className="absolute inset-x-0 bottom-0 z-10 p-3 text-left">
          <h3
            className={cn(
              "font-black uppercase leading-[0.95] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]",
              titleSize,
            )}
            style={{ letterSpacing: "-0.02em" }}
          >
            {game.title}
          </h3>
          {game.subtitle && (
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/75">
              {game.subtitle}
            </p>
          )}
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
    </button>
  )
}
