import { cn } from "@/lib/utils"

export function DuelLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-sans font-black tracking-tight text-foreground select-none",
        "text-2xl",
        className,
      )}
      style={{ letterSpacing: "-0.04em" }}
    >
      Duel
    </span>
  )
}

export function GemIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4", className)}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <path
        d="M6 4h12l4 6-10 10L2 10l4-6Z"
        fill="url(#gem)"
        stroke="rgba(255,255,255,.25)"
      />
      <path d="M6 4l6 6 6-6M2 10h20M12 10v10" stroke="rgba(255,255,255,.45)" strokeWidth="1" />
    </svg>
  )
}
