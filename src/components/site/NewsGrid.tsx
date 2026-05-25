type Card = {
  tag: string;
  date: string;
  title: string;
  variant: "a" | "b" | "c";
};

const news: Card[] = [
  {
    tag: "Press",
    date: "Spring 2026",
    title: "Headline placeholder for a recent press mention or invited talk.",
    variant: "a",
  },
  {
    tag: "Funding",
    date: "Winter 2025",
    title: "Headline placeholder for a new grant, partnership, or collaboration.",
    variant: "b",
  },
  {
    tag: "Field Notes",
    date: "Fall 2025",
    title: "Headline placeholder for an essay, demo, or release from the lab.",
    variant: "c",
  },
];

export function NewsGrid() {
  return (
    <section id="news" className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              Index · 02 / 06
            </span>
            <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] leading-tight tracking-[-0.02em] mt-3">
              Latest news
            </h2>
          </div>
          <a
            href="#all-news"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] text-ink-soft hover:text-ink"
          >
            All news
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {news.map((n) => (
            <a
              key={n.title}
              href="#"
              className="group block rounded-xl overflow-hidden border border-[var(--rule)] bg-paper hover:border-ink/60 transition-colors"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-paper-soft">
                <NewsArt variant={n.variant} />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted">
                  <span>{n.tag}</span>
                  <span className="w-1 h-1 rounded-full bg-muted/60" />
                  <span>{n.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-[1.35rem] leading-[1.15] tracking-[-0.01em] text-balance group-hover:text-accent transition-colors">
                  {n.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#all-news"
            className="text-[13px] text-ink-soft hover:text-ink border-b border-ink/40 pb-0.5"
          >
            View all news
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsArt({ variant }: { variant: "a" | "b" | "c" }) {
  if (variant === "a") {
    return (
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="a1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#efece3" />
            <stop offset="100%" stopColor="#d9d5c8" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#a1)" />
        <g
          stroke="#0e0e0e"
          strokeOpacity="0.7"
          strokeWidth="0.8"
          fill="none"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} cx="200" cy="150" r={10 + i * 14} />
          ))}
        </g>
        <circle cx="200" cy="150" r="8" fill="#b94e1d" />
      </svg>
    );
  }
  if (variant === "b") {
    return (
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="b1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7f5ef" />
            <stop offset="100%" stopColor="#cbc6b6" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#b1)" />
        <g fill="#0e0e0e">
          {Array.from({ length: 80 }).map((_, i) => {
            const x = (i % 16) * 25 + 12;
            const y = Math.floor(i / 16) * 30 + 30;
            const h = 10 + ((i * 37) % 90);
            return (
              <rect
                key={i}
                x={x - 2}
                y={y + (90 - h)}
                width="4"
                height={h}
                opacity="0.7"
              />
            );
          })}
        </g>
        <line
          x1="0"
          x2="400"
          y1="200"
          y2="200"
          stroke="#b94e1d"
          strokeWidth="1.5"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="c1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0e0e0e" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#c1)" />
      <g
        stroke="#f7f5ef"
        strokeOpacity="0.55"
        strokeWidth="0.6"
        fill="none"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${i * 10} Q 200 ${i * 10 - 60} 400 ${i * 10}`}
          />
        ))}
      </g>
      <circle cx="200" cy="150" r="60" fill="#b94e1d" fillOpacity="0.9" />
      <circle
        cx="200"
        cy="150"
        r="60"
        stroke="#f7f5ef"
        strokeOpacity="0.6"
        fill="none"
      />
    </svg>
  );
}
