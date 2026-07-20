const metrics = [
  { value: "94%", label: "Of projects ship a working system, not just a paper" },
  { value: "6+", label: "Federal & philanthropic grants powering the lab" },
  { value: "250+", label: "Students mentored through applied research" },
];

export function MissionCard() {
  return (
    <section id="lab" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
          <MissionVisual />
          <div className="relative px-8 py-14 lg:px-16 lg:py-20">
            <span className="text-[10.5px] tracking-normal text-accent">
              Lab mission
            </span>
            <p className="mt-5 font-display font-semibold text-[1.7rem] sm:text-[2.2rem] lg:text-[2.7rem] leading-[1.1] tracking-[-0.03em] max-w-[24ch] text-balance">
              We study AI models that contribute to basic AI research, and build
              AI systems that interact with the real world.
            </p>
            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-[14px] text-fg-soft hover:text-fg hover:border-fg/40 transition-colors"
            >
              Read about the lab
              <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
                <path
                  d="M1 5.5h9M6 1.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  fill="none"
                />
              </svg>
            </a>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {metrics.map((m) => (
                <div key={m.value} className="bg-surface-2 px-7 py-7">
                  <div className="font-display font-semibold text-[2rem] lg:text-[2.4rem] leading-none tracking-[-0.03em] text-accent">
                    {m.value}
                  </div>
                  <p className="mt-2.5 text-[13px] leading-[1.5] text-fg-soft">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisual() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="mglow" cx="78%" cy="18%" r="55%">
          <stop offset="0%" stopColor="#f47937" stopOpacity="0.42" />
          <stop offset="55%" stopColor="#1b4383" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mgrid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1000" height="500" fill="url(#mglow)" />
      <g stroke="url(#mgrid)" strokeWidth="0.5">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52} y2="500" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 52} x2="1000" y2={i * 52} />
        ))}
      </g>
      <g stroke="#f47937" strokeOpacity="0.22" strokeWidth="0.7" fill="none">
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={i} cx="800" cy="110" r={24 + i * 30} />
        ))}
      </g>
    </svg>
  );
}
