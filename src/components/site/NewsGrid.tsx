import { ArrowIcon } from "./Icons";

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
    <section id="news" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[10.5px] tracking-normal text-accent">
              Latest
            </span>
            <h2 className="font-display font-semibold text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.04] tracking-[-0.03em] mt-3">
              News from the lab
            </h2>
          </div>
          <a
            href="#all-news"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] text-fg-soft hover:text-fg transition-colors"
          >
            All news
            <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {news.map((n) => (
            <a
              key={n.title}
              href="#"
              className="card group block rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-surface-2">
                <NewsArt variant={n.variant} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[10px] tracking-normal text-fg-muted">
                  <span>{n.tag}</span>
                  <span className="h-1 w-1 rounded-full bg-fg-muted/60" />
                  <span>{n.date}</span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-[1.2rem] leading-[1.2] tracking-[-0.02em] text-balance group-hover:text-accent transition-colors">
                  {n.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#all-news"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-[13px] text-fg-soft hover:text-fg hover:border-fg/40 transition-colors"
          >
            View all news
            <ArrowIcon size={10} />
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
        <rect width="400" height="300" fill="#1b4383" />
        <g stroke="#f47937" strokeOpacity="0.5" strokeWidth="0.8" fill="none">
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} cx="200" cy="150" r={10 + i * 14} />
          ))}
        </g>
        <circle cx="200" cy="150" r="8" fill="#f47937" />
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
        <rect width="400" height="300" fill="#234f93" />
        <g fill="#f5f3ee" fillOpacity="0.55">
          {Array.from({ length: 80 }).map((_, i) => {
            const x = (i % 16) * 25 + 12;
            const y = Math.floor(i / 16) * 30 + 30;
            const h = 10 + ((i * 37) % 90);
            return (
              <rect key={i} x={x - 2} y={y + (90 - h)} width="4" height={h} />
            );
          })}
        </g>
        <line x1="0" x2="400" y1="200" y2="200" stroke="#f47937" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill="#15356a" />
      <g stroke="#f5f3ee" strokeOpacity="0.18" strokeWidth="0.6" fill="none">
        {Array.from({ length: 30 }).map((_, i) => (
          <path key={i} d={`M0 ${i * 10} Q 200 ${i * 10 - 60} 400 ${i * 10}`} />
        ))}
      </g>
      <circle cx="200" cy="150" r="60" fill="#f47937" fillOpacity="0.9" />
    </svg>
  );
}
