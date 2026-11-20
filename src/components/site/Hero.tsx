import Image from "next/image";

const facts = [
  { value: "$1M+", label: "from the Bezos Earth Fund and other grants" },
  { value: "822,226", label: "healthcare IT records behind our threat models" },
  { value: "9", label: "active research projects across four areas" },
  { value: "32", label: "AI and quantum courses taught by the department" },
];

const funders = ["NSF", "Google", "DOE", "U.S. Air Force", "Bezos Earth Fund"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute inset-0 dot-grid-dark opacity-60" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <p className="text-[15px] text-white/70">
              Department of Computer Science, Morgan State University
            </p>
            <h1 className="font-display mt-5 text-[2.75rem] leading-[1.02] sm:text-[3.9rem] lg:text-[4.6rem] text-balance">
              AI Research and Development
            </h1>

            <div className="mt-7 flex items-center gap-3.5">
              <Image
                src="/assets/people/paul-wang.png"
                alt=""
                width={96}
                height={96}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
              />
              <p className="text-[1.1rem] leading-snug text-white/75 sm:text-[1.2rem]">
                Lab Director: <span className="font-semibold text-white">Dr. Paul Wang</span>
              </p>
            </div>

            <p className="font-serif mt-7 max-w-[36rem] text-[1.12rem] leading-[1.65] text-white/80 sm:text-[1.2rem]">
              We conduct research and development in AI models, reinforcement
              learning, Markov Decision Process, agentic AI, multimodal AI, AI in
              cybersecurity, and quantum AI — with work presented at Princeton,
              Harvard, Yale, AAAS, and international conferences.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-semibold"
              >
                See our projects
              </a>
              <a
                href="https://cs.inavigator.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/70 hover:bg-white/5"
              >
                Try csNavigator
                <ExternalGlyph />
              </a>
            </div>
          </div>

          <HeroFigures />
        </div>

        <dl className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-white/15 pt-9 pb-12 lg:mt-20 lg:grid-cols-4 lg:pb-14">
          {facts.map((f) => (
            <div key={f.value} className="border-l border-white/20 pl-4 sm:pl-5">
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="font-display block text-[2rem] leading-none sm:text-[2.6rem]">
                  {f.value}
                </span>
                <span className="mt-3 block max-w-[15rem] text-[13.5px] leading-snug text-white/65">
                  {f.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative border-t-4 border-accent border-b border-b-border bg-white text-fg">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-6 py-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12 lg:px-10 lg:py-10">
          <p className="font-display text-[1.15rem] leading-tight text-fg lg:max-w-[9rem] lg:text-[1.3rem]">
            Research supported by
          </p>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border ring-1 ring-border md:grid-cols-5">
            {funders.map((f, i) => (
              <li
                key={f}
                className={`font-display flex items-center justify-center bg-white px-4 py-5 text-center text-[1.1rem] leading-tight text-brand-blue lg:text-[1.25rem] ${
                  i === funders.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Two real project images, layered like pinned figures. */
function HeroFigures() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
      <Slash />
      <figure className="relative overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
        <Image
          src="/assets/projects/csnavigator.png"
          alt="csNavigator, the lab's advising agent, showing its sign-in screen"
          width={1476}
          height={858}
          sizes="(max-width: 1024px) 90vw, 560px"
          loading="eager"
          fetchPriority="high"
          className="h-auto w-full"
        />
        <figcaption className="flex items-center justify-between gap-3 border-t border-border bg-white px-4 py-3 text-[13px] text-fg">
          <span className="font-semibold">csNavigator</span>
          <span className="inline-flex items-center gap-1.5 text-fg-soft">
            <span className="h-2 w-2 rounded-full bg-[#1f9d55]" aria-hidden />
            Live for Morgan State students
          </span>
        </figcaption>
      </figure>

      <figure className="relative -mt-10 ml-auto w-[58%] overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 sm:-mt-16 sm:mr-[-6%]">
        <Image
          src="/assets/projects/robi-counselor-robot.png"
          alt="Robi, the lab's counseling robot"
          width={1600}
          height={900}
          sizes="(max-width: 1024px) 55vw, 330px"
          loading="eager"
          className="h-auto w-full"
        />
        <figcaption className="border-t border-border bg-white px-4 py-2.5 text-[13px] font-semibold text-fg">
          Robi Counselor
        </figcaption>
      </figure>
    </div>
  );
}

/* The orange slash from the logo mark, behind the figures. */
function Slash() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -left-[12%] -top-[25%] h-[155%] w-[152%]"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <path
        d="M0 1000 L1000 120"
        stroke="#F7901E"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M60 1000 L1000 230"
        stroke="#F7901E"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

function ExternalGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
      <path
        d="M4.5 2H10v5.5M10 2 2.5 9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
