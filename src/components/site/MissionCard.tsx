const pillars = [
  {
    code: "R/01",
    title: "Agentic AI",
    blurb: "Multimodal agents for advising, support, and applied workflows.",
  },
  {
    code: "R/02",
    title: "Applied ML for the Public Good",
    blurb: "Models that interrogate housing, health, and environmental data.",
  },
  {
    code: "R/03",
    title: "Robotics & Computer Vision",
    blurb: "Vision systems that work for everyone, audited for bias.",
  },
  {
    code: "R/04",
    title: "Quantum & Post-Quantum Security",
    blurb: "Networks and protocols built for the next generation of compute.",
  },
];

export function MissionCard() {
  return (
    <section id="lab" className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-0 rounded-2xl overflow-hidden bg-night text-paper">
          <div className="col-span-12 lg:col-span-7 relative p-10 lg:p-14 min-h-[28rem] flex flex-col justify-between">
            <MissionVisual />
            <div className="relative">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/50">
                Lab Mission
              </span>
            </div>
            <div className="relative">
              <p className="font-serif text-[1.85rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.08] tracking-[-0.015em] text-balance">
                We build AI systems that work in the real world, measured
                against grants, students, and the communities our research
                touches.
              </p>
              <a
                href="#about"
                className="mt-8 inline-flex items-center gap-2 text-[13px] border border-paper/30 hover:border-paper px-4 py-2 rounded-full"
              >
                Read about the lab
                <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
                  <path
                    d="M1 5.5h9M6 1.5l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>
              </a>
            </div>
          </div>

          <ul className="col-span-12 lg:col-span-5 divide-y divide-paper/10 border-t lg:border-t-0 lg:border-l border-paper/10">
            {pillars.map((p) => (
              <li key={p.code}>
                <a
                  href="#"
                  className="group flex items-start justify-between gap-6 p-7 lg:p-8 hover:bg-night-soft transition-colors"
                >
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper/45">
                      {p.code}
                    </div>
                    <h3 className="font-serif text-[1.55rem] leading-tight mt-2 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[13px] leading-[1.55] text-paper/65 mt-2 max-w-sm">
                      {p.blurb}
                    </p>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 11 11"
                    aria-hidden
                    className="text-paper/45 group-hover:text-paper mt-1 transition-colors"
                  >
                    <path
                      d="M1 5.5h9M6 1.5l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MissionVisual() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full opacity-60"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="glow" cx="40%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#b94e1d" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#1a1a1a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="grid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#glow)" />
      <g stroke="url(#grid)" strokeWidth="0.5">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="500" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="800" y2={i * 48} />
        ))}
      </g>
      <g stroke="#ffffff" strokeOpacity="0.18" strokeWidth="0.6" fill="none">
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={i} cx="330" cy="275" r={30 + i * 28} />
        ))}
      </g>
    </svg>
  );
}
