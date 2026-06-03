type Pillar = {
  code: string;
  title: string;
  blurb: string;
  icon: "agent" | "ml" | "vision" | "quantum";
};

const pillars: Pillar[] = [
  {
    code: "R/01",
    title: "Agentic AI",
    blurb: "Multimodal agents for advising, support, and applied workflows.",
    icon: "agent",
  },
  {
    code: "R/02",
    title: "Applied ML for the Public Good",
    blurb: "Models that interrogate housing, health, and environmental data.",
    icon: "ml",
  },
  {
    code: "R/03",
    title: "Robotics & Computer Vision",
    blurb: "Vision systems that work for everyone, audited for bias.",
    icon: "vision",
  },
  {
    code: "R/04",
    title: "Quantum & Post-Quantum Security",
    blurb: "Networks and protocols built for the next generation of compute.",
    icon: "quantum",
  },
];

export function ResearchAreas() {
  return (
    <section id="research" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-[10.5px] tracking-normal text-accent">
            What we do
          </span>
          <h2 className="font-display font-semibold text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.04] tracking-[-0.03em] mt-3">
            Four areas of research.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-fg-soft max-w-xl">
            One lab, working across the stack — from the agents students talk to
            every day, down to the quantum protocols securing tomorrow&apos;s
            networks.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div key={p.code} className="card rounded-2xl p-7 group">
              <PillarIcon variant={p.icon} />
              <div className="mt-6 text-[10px] tracking-normal text-fg-muted">
                {p.code}
              </div>
              <h3 className="mt-2 font-display font-semibold text-[1.3rem] leading-tight tracking-[-0.02em] group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.55] text-fg-soft">
                {p.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarIcon({ variant }: { variant: Pillar["icon"] }) {
  return (
    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        {variant === "agent" && (
          <>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
            <path
              d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {variant === "ml" && (
          <path
            d="M3 20V4M3 20h18M7 16l4-5 3 3 5-7"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {variant === "vision" && (
          <>
            <path
              d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.4" />
          </>
        )}
        {variant === "quantum" && (
          <>
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              stroke="currentColor"
              strokeWidth="1.4"
              transform="rotate(60 12 12)"
            />
            <circle cx="12" cy="12" r="1.8" fill="currentColor" />
          </>
        )}
      </svg>
    </div>
  );
}
