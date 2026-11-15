import Image from "next/image";
import { ArrowIcon, YoutubeIcon } from "./Icons";

type Card = {
  tag: string;
  date: string;
  title: string;
  /** Source shown under the headline, e.g. "WBAL-TV 11". */
  source: string;
  href: string;
  /** Thumbnail under /public/assets/news/. Falls back to generated art. */
  image?: string;
  /** Optional companion video (opens in a new tab). */
  video?: string;
  variant: "a" | "b" | "c";
};

const news: Card[] = [
  {
    tag: "Podcast",
    date: "September 2026",
    title: "How Morgan State built Maryland\u2019s first AI degree in one month",
    source: "Hard Truths in Higher Ed \u00b7 with Dr. Paul Wang",
    href: "https://www.linkedin.com/posts/darin-francis_highered-aieducation-morganstate-ugcPost-7505960599420391424-5cEF",
    image: "/assets/news/morgan-ai-degree-podcast.jpg",
    variant: "a",
  },
  {
    tag: "Press",
    date: "July 2026",
    title: "Maryland universities launch AI degree programs",
    source: "WBAL-TV 11",
    href: "https://www.wbaltv.com/article/maryland-universities-launch-ai-degrees/73287202",
    image: "/assets/news/wbal-ai-degrees.jpg",
    video: "https://www.youtube.com/watch?v=7XCbx50a5Jg",
    variant: "b",
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {news.map((n) => (
            <article
              key={n.title}
              className="card group flex flex-col rounded-2xl overflow-hidden"
            >
              <a
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video relative overflow-hidden bg-surface-2"
              >
                {n.image ? (
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <NewsArt variant={n.variant} />
                )}
              </a>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-[10px] tracking-normal text-fg-muted">
                  <span>{n.tag}</span>
                  <span className="h-1 w-1 rounded-full bg-fg-muted/60" />
                  <span>{n.date}</span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-[1.2rem] leading-[1.2] tracking-[-0.02em] text-balance">
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {n.title}
                  </a>
                </h3>
                <p className="mt-2 text-[12px] text-fg-muted flex-1">{n.source}</p>
                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-[12.5px]">
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-fg-soft hover:text-fg transition-colors"
                  >
                    Read more
                    <ArrowIcon size={10} />
                  </a>
                  {n.video && (
                    <a
                      href={n.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-fg-soft hover:text-fg transition-colors"
                    >
                      <YoutubeIcon size={15} />
                      Watch on YouTube
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
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
