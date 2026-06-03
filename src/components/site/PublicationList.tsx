import Image from "next/image";
import { GithubIcon, ExternalIcon, YoutubeIcon, ArrowIcon } from "./Icons";
import { CsNavigatorTile } from "./CsNavigatorTile";
import { TiltCard } from "./TiltCard";

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
  image?: string;
};

const projects: Row[] = [
  {
    date: "2026",
    number: "01",
    title: "csNavigator — Agentic AI for Student Advising",
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
    title: "AI Bias Detection and Mitigation",
    authors: "Morgan State CS · Student-led research",
    summary:
      "A $14K humanoid robot recognized students with lighter skin and missed everyone else. We traced the failure to a training set missing entire demographic groups and rebuilt it. End to end mitigation, not just identification.",
    tag: "Computer Vision",
    href: "#bias",
    github: "https://github.com/theaayushstha1/Nao-OpenAI-2.0",
    image: "/assets/projects/image2.jpeg",
  },
  {
    date: "2025",
    number: "03",
    title: "Robi Counselor — AI for Student Wellbeing",
    authors: "Morgan State CS · Department of Computer Science",
    summary:
      "An autonomous, confidential companion that helps students manage stress, anxiety, and panic through conversation, visual interaction, and guided physical activity. Built on CBT and cognitive-behavioral models for in-the-moment support.",
    tag: "Health & Mind",
    href: "#robi",
    github: "https://github.com/theaayushstha1/nao-sagecbt",
    video: "https://youtu.be/wZOuK8Sw6gA",
    image: "https://img.youtube.com/vi/wZOuK8Sw6gA/hqdefault.jpg",
  },
  {
    date: "2025",
    number: "04",
    title: "Baltimore Air Quality — Social Injustice ML Analysis",
    authors: "Morgan State CS · Bezos Earth Fund · $1M grant",
    summary:
      "One of the largest environmental data platforms in the country, surfacing a direct connection between air quality, income, and race in Baltimore. Presented at Harvard Kennedy School and Yale’s AI Symposium with the aim of shaping public policy.",
    tag: "Environmental ML",
    badge: "Bezos $1M",
    href: "#air-quality",
    image: "/assets/projects/image3.png",
  },
  {
    date: "2025",
    number: "05",
    title: "Machine Learning for Cybersecurity Threat Analysis",
    authors: "Morgan State CS · Corporate-funded research",
    summary:
      "Supervised models trained on 822,226 healthcare IT records sourced from AWS, surfacing threats with practical accuracy. Shipped as an application alongside peer-reviewed publications and conference presentations.",
    tag: "Cybersecurity",
    href: "#cybersecurity",
    image: "/assets/projects/image4.png",
  },
  {
    date: "2024",
    number: "06",
    title: "Higgin — Machine Learning Against Social Injustice",
    authors: "Morgan State CS · Mobile research",
    summary:
      "After a couple of color received a six-figure undervaluation on a California home appraisal, we shipped Higgin: a mobile app that transforms voice into any preferred profile. Dual use for accessibility, translation, and field communication.",
    tag: "Voice ML",
    href: "#higgin",
    image: "/assets/projects/image5.png",
  },
  {
    date: "Ongoing",
    number: "07",
    title: "Quantum AI — QML for Real World Compute Bottlenecks",
    authors: "Morgan State Quantum Group · in collaboration with Yale",
    summary:
      "Applying quantum theory to machine learning, with an early focus on environmental exposure modeling and community-health computation. Backed by NSF (2329053, 2502912) and USAF (FA9550-25-1-0030); two additional proposals pending.",
    tag: "Quantum ML",
    badge: "NSF · USAF",
    href: "#quantum-ai",
    image: "/assets/projects/image6.png",
  },
  {
    date: "Ongoing",
    number: "08",
    title: "QGP — Quantum Good Authentication Protocol",
    authors: "Morgan State CS · Paul Wang (PI)",
    summary:
      "A network protocol that adds a photonic quantum channel beneath the OSI stack (layer 0) and Dilithium post-quantum signatures at the top (layer 7). Hardware-tested in-lab as a foundation for next-generation secure quantum internet.",
    tag: "Quantum Security",
    badge: "Patent Pending",
    href: "#qgp",
    image: "/assets/projects/image7.png",
  },
];

export function PublicationList() {
  return (
    <section
      id="projects"
      className="relative border-t border-border overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 glow opacity-50" />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10.5px] tracking-normal text-accent">
              Selected work
            </span>
            <h2 className="font-display font-semibold text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] leading-[1.03] tracking-[-0.03em] mt-3">
              Research from the lab
            </h2>
          </div>
          <a
            href="#all"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] text-fg-soft hover:text-fg transition-colors"
          >
            View all
            <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((row, i) => (
            <TiltCard key={row.number} index={i} className="h-full">
            <article
              className="card rounded-2xl overflow-hidden flex flex-col group h-full"
            >
              <a href={row.href} className="block relative aspect-video overflow-hidden bg-surface-2">
                {row.image ? (
                  <>
                    <Image
                      src={row.image}
                      alt={row.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      unoptimized={row.image.startsWith("http")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  </>
                ) : (
                  <CsNavigatorTile />
                )}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-[9.5px] tracking-normal text-white border border-white/10">
                    {row.tag}
                  </span>
                  {row.badge && (
                    <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-[9.5px] tracking-normal text-white">
                      {row.badge}
                    </span>
                  )}
                </div>
                <span className="absolute right-3 bottom-3 inline-flex items-center rounded-full bg-black/55 backdrop-blur px-2 py-0.5 text-[10.5px] text-white/85">
                  {row.date}
                </span>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display font-semibold text-[1.22rem] leading-[1.18] tracking-[-0.02em] text-balance">
                  <a href={row.href} className="hover:text-accent transition-colors">
                    {row.title}
                  </a>
                </h3>
                <p className="mt-2 text-[11.5px] tracking-normal text-fg-muted">
                  {row.authors}
                </p>
                <p className="mt-3 text-[13px] leading-[1.6] text-fg-soft flex-1">
                  {row.summary}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <ActionRow github={row.github} live={row.live} video={row.video} />
                  <a
                    href={row.href}
                    className="inline-flex items-center gap-1.5 text-[12.5px] text-fg-soft hover:text-fg transition-colors"
                  >
                    View project
                    <ArrowIcon size={10} />
                  </a>
                </div>
              </div>
            </article>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#all"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-[13px] text-fg-soft hover:text-fg hover:border-fg/40 transition-colors"
          >
            View all projects
            <ArrowIcon size={10} />
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
    <div className="flex items-center gap-2">
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
  if (!href) return null;
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-border text-fg-soft hover:text-white hover:bg-accent hover:border-accent transition-colors"
    >
      {children}
    </a>
  );
}
