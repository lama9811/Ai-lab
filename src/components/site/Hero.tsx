export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[920px] px-6 lg:px-10 pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-display font-medium leading-[1.0] tracking-[-0.035em] text-[3.4rem] sm:text-[5rem] lg:text-[6rem]">
            AI Research &amp; Development
          </h1>

          <p className="mt-4 text-[1.1rem] sm:text-[1.3rem] text-fg-soft font-medium">
            Lab Director: Dr. Paul Wang
          </p>

          <p className="mt-7 max-w-[44rem] text-[16px] sm:text-[18px] leading-[1.6] text-fg-soft">
            We conduct research and development in AI models, reinforcement
            learning, agentic AI, multimodal AI, AI in cybersecurity, and quantum
            AI — with work presented at Princeton, Harvard, Yale, and AAAS.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3.5">
            <a
              href="#research"
              className="btn-dark inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-medium"
            >
              Learn more
              <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden>
                <path
                  d="M1 6.5h10M7 2.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                />
              </svg>
            </a>
            <a
              href="https://cs.inavigator.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-[15px] text-fg-soft hover:text-fg hover:border-fg/40 transition-colors"
            >
              Open csNavigator
            </a>
          </div>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Stars />
            <span className="text-[13px] text-fg-soft">
              Supported by NSF · Google · DOE · U.S. Air Force · Bezos Earth Fund
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-fg">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 16 16" aria-hidden>
          <path
            d="M8 1l2 4.4 4.8.5-3.6 3.2 1 4.7L8 11.4 3.8 13.8l1-4.7L1.2 5.9 6 5.4 8 1z"
            fill="currentColor"
          />
        </svg>
      ))}
    </span>
  );
}
