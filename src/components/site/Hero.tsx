export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted mb-7">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
            CS Department · Morgan State University
          </span>

          <h1
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 0' }}
            className="font-serif font-light leading-[0.96] tracking-[-0.03em] text-[2.7rem] sm:text-[4.2rem] lg:text-[5.8rem] xl:text-[6.6rem] max-w-[14ch] text-balance"
          >
            AI Projects
          </h1>

          <p className="font-geist mt-5 text-[1.05rem] sm:text-[1.2rem] lg:text-[1.35rem] text-ink-soft font-medium">
            under Dr. Paul Wang
          </p>

          <p className="mt-9 max-w-[44rem] text-[15px] sm:text-[17px] leading-[1.6] text-ink-soft">
            We conduct research and development in agentic assistants, bias-aware vision, environmental
            data platforms, and quantum-secure networks. Supported by the NSF, Google, DOE,
            the U.S. Air Force, and the Bezos Earth Fund. Work presented at
            Princeton, Harvard, Yale, and AAAS.
          </p>

          <div className="mt-11 flex items-center gap-6">
            <a
              href="#research"
              className="inline-flex items-center gap-2 text-[13px] text-ink hover:text-accent transition-colors"
            >
              <span className="border-b border-ink/40 pb-0.5">
                Latest from the lab
              </span>
              <Arrow />
            </a>
            <span className="h-3 w-px bg-[var(--rule)]" />
            <a
              href="#lab"
              className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-ink transition-colors"
            >
              About the lab
              <Arrow />
            </a>
          </div>
        </div>
      </div>

      <BackdropDecoration />
    </section>
  );
}

function Arrow() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
      <path
        d="M1 5.5h9M6 1.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

function BackdropDecoration() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 opacity-[0.08] -z-0"
      width="1200"
      height="620"
      viewBox="0 0 1200 620"
      fill="none"
    >
      {Array.from({ length: 26 }).map((_, i) => (
        <circle
          key={i}
          cx="600"
          cy="320"
          r={20 + i * 22}
          stroke="currentColor"
          strokeWidth="0.6"
        />
      ))}
    </svg>
  );
}
