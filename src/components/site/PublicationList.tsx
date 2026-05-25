import {
  GithubIcon,
  ExternalIcon,
  YoutubeIcon,
  ArrowIcon,
} from "./Icons";

type Row = {
  date: string;
  number: string;
  title: string;
  authors: string;
  summary: string;
  tag: string;
  badge?: string;
  href: string;
  github?: string;
  live?: string;
  video?: string;
};

const projects: Row[] = [
  {
    date: "2026",
    number: "01",
    title: "csNavigator. Agentic AI for Student Advising.",
    authors: "Department of Computer Science · Paul Wang (PI)",
    summary:
      "A 24/7 multimodal advising agent built on Google Gemini 3. Text, image, audio, and video flow through a single reasoning loop, grounded in departmental resources that general-purpose chatbots can’t see. Presented at Princeton and AAAS.",
    tag: "Agentic AI",
    badge: "Live",
    href: "#csnavigator",
    github: "https://github.com/theaayushstha1/cs-navigator",
    live: "https://cs.inavigator.ai",
  },
  {
    date: "2025",
    number: "02",
    title: "AI Bias Detection and Mitigation.",
    authors: "Morgan State CS · Student-led research",
    summary:
      "A $14K humanoid robot recognized students with lighter skin and missed everyone else. We traced the failure to a training set missing entire demographic groups and rebuilt it. End to end mitigation, not just identification.",
    tag: "Computer Vision",
    href: "#bias",
    github: "https://github.com/theaayushstha1/Nao-OpenAI-2.0",
  },
  {
    date: "2025",
    number: "03",
    title: "Robi Counselor. AI for Student Wellbeing.",
    authors: "Morgan State CS · Department of Computer Science",
    summary:
      "An autonomous, confidential companion that helps students manage stress, anxiety, and panic through conversation, visual interaction, and guided physical activity. Built on CBT and cognitive-behavioral models for in-the-moment support.",
    tag: "Health & Mind",
    href: "#robi",
    github: "https://github.com/theaayushstha1/nao-sagecbt",
    video: "https://youtu.be/wZOuK8Sw6gA",
  },
  {
    date: "2025",
    number: "04",
    title: "Baltimore Air Quality. Social Injustice ML Analysis.",
    authors: "Morgan State CS · Bezos Earth Fund · $1M grant",
    summary:
      "One of the largest environmental data platforms in the country, surfacing a direct connection between air quality, income, and race in Baltimore. Presented at Harvard Kennedy School and Yale’s AI Symposium with the aim of shaping public policy.",
    tag: "Environmental ML",
    badge: "Bezos $1M",
    href: "#air-quality",
  },
  {
    date: "2025",
    number: "05",
    title: "Machine Learning for Cybersecurity Threat Analysis.",
    authors: "Morgan State CS · Corporate-funded research",
    summary:
      "Supervised models trained on 822,226 healthcare IT records sourced from AWS, surfacing threats with practical accuracy. Shipped as an application alongside peer-reviewed publications and conference presentations.",
    tag: "Cybersecurity",
    href: "#cybersecurity",
  },
  {
    date: "2024",
    number: "06",
    title: "Higgin. Machine Learning Against Social Injustice.",
    authors: "Morgan State CS · Mobile research",
    summary:
      "After a couple of color received a six-figure undervaluation on a California home appraisal, we shipped Higgin: a mobile app that transforms voice into any preferred profile. Dual use for accessibility, translation, and field communication.",
    tag: "Voice ML",
    href: "#higgin",
  },
  {
    date: "Ongoing",
    number: "07",
    title: "Quantum AI. QML for Real World Compute Bottlenecks.",
    authors: "Morgan State Quantum Group · in collaboration with Yale",
    summary:
      "Applying quantum theory to machine learning, with an early focus on environmental exposure modeling and community-health computation. Backed by NSF (2329053, 2502912) and USAF (FA9550-25-1-0030); two additional proposals pending.",
    tag: "Quantum ML",
    badge: "NSF · USAF",
    href: "#quantum-ai",
  },
  {
    date: "Ongoing",
    number: "08",
    title: "QGP. Quantum Good Authentication Protocol.",
    authors: "Morgan State CS · Paul Wang (PI)",
    summary:
      "A network protocol that adds a photonic quantum channel beneath the OSI stack (layer 0) and Dilithium post-quantum signatures at the top (layer 7). Hardware-tested in-lab as a foundation for next-generation secure quantum internet.",
    tag: "Quantum Security",
    badge: "Patent Pending",
    href: "#qgp",
  },
];

export function PublicationList() {
  return (
    <section id="research" className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              Index · 01 / 04
            </span>
            <h2 className="font-serif text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.02] tracking-[-0.02em] mt-3">
              Research from the lab
            </h2>
          </div>
          <a
            href="#all"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] text-ink-soft hover:text-ink"
          >
            View all
            <ArrowIcon />
          </a>
        </div>

        <div className="hidden lg:grid grid-cols-[3rem_11rem_minmax(0,1.4fr)_minmax(0,1fr)_11rem] gap-10 px-3 pb-3 border-b border-[var(--rule)] font-mono text-[10.5px] uppercase tracking-[0.24em] text-muted">
          <span>No.</span>
          <span>Date · Tags</span>
          <span>Project</span>
          <span>Summary</span>
          <span className="text-right">Links</span>
        </div>

        <ul className="divide-y divide-[var(--rule)] border-b border-[var(--rule)]">
          {projects.map((row) => (
            <li key={row.number} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-[3rem_11rem_minmax(0,1.4fr)_minmax(0,1fr)_11rem] gap-6 lg:gap-10 py-7 lg:py-9 px-1 lg:px-3 -mx-1 lg:-mx-3 hover:bg-paper-soft/60 transition-colors">
                {/* 1. Index number */}
                <div className="flex lg:block items-center gap-4">
                  <span className="font-serif italic text-muted text-[1.6rem] leading-none">
                    {row.number}
                  </span>
                </div>

                {/* 2. Date + tags */}
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    {row.date}
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center text-[10.5px] font-mono uppercase tracking-[0.2em] px-2 py-1 border border-[var(--rule)] text-ink-soft">
                      {row.tag}
                    </span>
                    {row.badge && (
                      <span className="inline-flex items-center text-[10.5px] font-mono uppercase tracking-[0.2em] px-2 py-1 bg-ink text-paper">
                        {row.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* 3. Title + authors */}
                <div>
                  <h3 className="font-serif text-[1.5rem] sm:text-[1.7rem] leading-[1.08] tracking-[-0.01em] text-balance">
                    <a
                      href={row.href}
                      className="text-ink hover:text-accent transition-colors"
                    >
                      {row.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-[12.5px] text-muted">{row.authors}</p>
                </div>

                {/* 4. Summary */}
                <div className="text-[13.5px] leading-[1.6] text-ink-soft">
                  {row.summary}
                </div>

                {/* 5. Actions — fixed slot */}
                <div className="flex lg:flex-col lg:items-end items-start gap-3">
                  <ActionRow
                    github={row.github}
                    live={row.live}
                    video={row.video}
                  />
                  <a
                    href={row.href}
                    className="inline-flex items-center gap-1.5 text-[12px] text-ink-soft hover:text-ink rounded-full border border-[var(--rule)] hover:border-ink px-3 py-1.5 transition-colors"
                  >
                    View project
                    <ArrowIcon size={10} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href="#all"
            className="text-[13px] text-ink-soft hover:text-ink border-b border-ink/40 pb-0.5"
          >
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
}

function ActionRow({
  github,
  live,
  video,
}: {
  github?: string;
  live?: string;
  video?: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-1.5 w-[7.5rem]">
      <ActionSlot href={github} label="View source on GitHub">
        <GithubIcon size={15} />
      </ActionSlot>
      <ActionSlot href={live} label="Open live site">
        <ExternalIcon size={13} />
      </ActionSlot>
      <ActionSlot href={video} label="Watch demo on YouTube">
        <YoutubeIcon size={16} />
      </ActionSlot>
    </div>
  );
}

function ActionSlot({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return (
      <span
        aria-hidden
        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-dashed border-[var(--rule)]/70 text-[var(--rule)]"
      />
    );
  }
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--rule)] text-ink-soft hover:text-paper hover:bg-ink hover:border-ink transition-colors"
    >
      {children}
    </a>
  );
}
