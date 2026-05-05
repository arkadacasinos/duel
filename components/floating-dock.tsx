"use client"

import { Headphones, MessageSquare } from "lucide-react"

export function FloatingDock() {
  return (
    <>
      <button
        type="button"
        aria-label="Open chat"
        className="fixed bottom-5 left-5 z-30 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/90 hover:bg-secondary border border-white/5 backdrop-blur shadow-lg"
      >
        <MessageSquare className="h-4 w-4 text-muted-foreground" />
      </button>
      <button
        type="button"
        aria-label="Live support"
        className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/90 hover:bg-secondary border border-white/5 backdrop-blur shadow-lg"
      >
        <Headphones className="h-4 w-4 text-muted-foreground" />
      </button>
    </>
  )
}
