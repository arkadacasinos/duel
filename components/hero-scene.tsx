import Image from "next/image"

export function HeroScene() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-2 overflow-hidden">
      <div className="relative w-full aspect-[1280/553] max-h-[640px] min-h-[200px]">
        <Image
          src="/art/hero-castles.jpeg"
          alt="Two opposing castles — Death to Monarchy on the left, Join the Resistance on the right"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Subtle vignette so text reads cleanly */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,12,32,0.55)_100%)]"
        />
        {/* Bottom fade into page */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
        />

        {/* Headline overlay */}
        <div className="absolute inset-x-0 top-[18%] sm:top-[22%] z-10 px-6 text-center">
          <h1
            className="mx-auto max-w-3xl text-2xl sm:text-4xl md:text-5xl font-black text-white text-balance leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            style={{ letterSpacing: "-0.03em" }}
          >
            The First Casino
            <br />
            That Gives a Fuck.
          </h1>
          <p className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base text-white/85 max-w-md mx-auto text-pretty drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            Just the purest form of gambling — the way it should be.
          </p>
        </div>
      </div>
    </section>
  )
}
