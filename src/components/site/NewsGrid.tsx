import Image from "next/image";
import { YoutubeIcon } from "./Icons";

type Story = {
  kind: string;
  date: string;
  title: string;
  /** Outlet or show, shown under the headline. */
  source: string;
  href: string;
  /** Thumbnail under /public/assets/news/. */
  image: string;
  /** Optional companion video (opens in a new tab). */
  video?: string;
};

const news: Story[] = [
  {
    kind: "Podcast",
    date: "September 2026",
    title: "How Morgan State built Maryland’s first AI degree in one month",
    source: "Hard Truths in Higher Ed, with Dr. Paul Wang",
    href: "https://www.linkedin.com/posts/darin-francis_highered-aieducation-morganstate-ugcPost-7505960599420391424-5cEF",
    image: "/assets/news/morgan-ai-degree-podcast.jpg",
  },
  {
    kind: "Press",
    date: "July 2026",
    title: "Maryland universities launch AI degree programs",
    source: "WBAL-TV 11",
    href: "https://www.wbaltv.com/article/maryland-universities-launch-ai-degrees/73287202",
    image: "/assets/news/wbal-ai-degrees.jpg",
    video: "https://www.youtube.com/watch?v=7XCbx50a5Jg",
  },
];

export function NewsGrid() {
  return (
    <section id="news" className="bg-bg-2">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
        <h2 className="font-display text-[2.3rem] leading-[1.05] sm:text-[3rem]">
          In the news
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {news.map((n) => (
            <article
              key={n.title}
              className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-border"
            >
              <a
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden
                className="relative block aspect-video overflow-hidden bg-surface-3"
              >
                <Image
                  src={n.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </a>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-[13px]">
                  <span className="font-semibold text-brand-blue">{n.kind}</span>
                  <span className="ml-2 text-fg-muted">{n.date}</span>
                </p>
                <h3 className="font-display mt-3 text-[1.35rem] leading-[1.2] text-balance">
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-2 underline-offset-4 hover:underline"
                  >
                    {n.title}
                  </a>
                </h3>
                <p className="font-serif mt-2 flex-1 text-[1rem] text-fg-soft">{n.source}</p>
                {n.video && (
                  <a
                    href={n.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[14px] font-medium text-fg-soft ring-1 ring-border-strong transition-colors hover:text-fg hover:ring-fg/40"
                  >
                    <YoutubeIcon size={16} />
                    Watch the segment
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
