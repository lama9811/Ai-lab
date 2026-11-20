import Image from "next/image";

type Person = {
  name: string;
  role: string;
  /**
   * Path to a headshot in /public/assets/people/, e.g. "/assets/people/paul-wang.jpg".
   * Leave as null to render a styled initials avatar instead.
   */
  photo: string | null;
  /** Optional one-line bio shown under the role. */
  bio?: string;
  /** Optional external link (e.g. personal homepage). */
  link?: { href: string; label: string };
};

const people: Person[] = [
  {
    name: "Dr. Paul Wang",
    role: "Lab Director · Professor & Chair, Computer Science",
    photo: "/assets/people/paul-wang.png",
    bio: "Research in quantum algorithms, AI, and secure architecture. Joint faculty appointment at the University of Maryland, College Park.",
    link: { href: "https://p-neumann.github.io/paul/", label: "Learn more" },
  },
  {
    name: "Teqwon Morman",
    role: "Research Assistant",
    photo: "/assets/people/teqwon-morman.png",
    link: { href: "https://www.linkedin.com/in/teqwon/", label: "LinkedIn" },
  },
  {
    name: "Terell Reed",
    role: "Research Assistant",
    photo: "/assets/people/terell-reed.png",
  },
  {
    name: "Aramide Ogundiran",
    role: "Research Assistant",
    photo: "/assets/people/aramide-ogundiran.png",
  },
  {
    name: "Jianzhou Mao",
    role: "Postdoctoral Researcher",
    photo: "/assets/people/jianzhou-mao.png",
    link: {
      href: "https://www.linkedin.com/in/jianzhoumao/",
      label: "LinkedIn",
    },
  },
  {
    name: "Mingma Lama",
    role: "Research Assistant",
    photo: "/assets/people/mingma-lama.png",
    link: { href: "https://www.linkedin.com/in/mingma23/", label: "LinkedIn" },
  },
  {
    name: "Michelle Oladele-Kuyoro",
    role: "Research Assistant",
    photo: "/assets/people/michelle-oladele-kuyoro.png",
    link: {
      href: "https://www.linkedin.com/in/michelle-oladele-kuyoro/",
      label: "LinkedIn",
    },
  },
  {
    name: "Aayush Shrestha",
    role: "Research Assistant",
    photo: "/assets/people/aayush-shrestha.png",
    link: {
      href: "https://www.linkedin.com/in/aayushshrestha123/",
      label: "LinkedIn",
    },
  },
  {
    name: "Sakina Shrestha",
    role: "Research Assistant",
    photo: "/assets/people/sakina-shrestha.png",
    link: {
      href: "https://www.linkedin.com/in/sakina-shrestha-474775273/",
      label: "LinkedIn",
    },
  },
  {
    name: "Chelsea Minard",
    role: "Research Assistant",
    photo: "/assets/people/chelsea-minard.png",
    link: {
      href: "https://www.linkedin.com/in/chelsea-minard/",
      label: "LinkedIn",
    },
  },
  {
    name: "Julian Gordon",
    role: "Research Assistant",
    photo: "/assets/people/julian-gordon.png",
    link: {
      href: "https://www.linkedin.com/in/julian-gordon-938758290/",
      label: "LinkedIn",
    },
  },
  {
    name: "Ekata Dhakal",
    role: "Research Assistant",
    photo: "/assets/people/ekata-dhakal.png",
    link: {
      href: "https://www.linkedin.com/in/ekata-dhital-512b08260/",
      label: "LinkedIn",
    },
  },
  {
    name: "Mason-Terry Veal",
    role: "Research Assistant",
    photo: "/assets/people/mason-terry-veal.png",
  },
];

export function PeopleGrid() {
  // The first entry is the lab director and gets the featured layout.
  const [director, ...team] = people;

  return (
    <section id="people" className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
        <h2 className="font-display text-[2.3rem] leading-[1.05] sm:text-[3rem]">
          The people behind the work
        </h2>

        <article className="mt-12 grid gap-8 rounded-2xl bg-ink p-6 text-white sm:p-8 md:grid-cols-[minmax(0,260px)_1fr] md:items-center md:gap-12 lg:p-10">
          <div className="relative aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-xl bg-ink-2">
            <Portrait person={director} index={0} sizes="260px" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-accent">Lab director</p>
            <h3 className="font-display mt-2 text-[2rem] leading-tight sm:text-[2.4rem]">
              {director.name}
            </h3>
            <p className="mt-2 text-[15px] text-white/70">
              {director.role.replace(/^Lab Director · /, "")}
            </p>
            {director.bio && (
              <p className="font-serif mt-5 max-w-[36rem] text-[1.12rem] leading-[1.7] text-white/85">
                {director.bio}
              </p>
            )}
            {director.link && (
              <a
                href={director.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7 inline-flex items-center rounded-full px-5 py-2.5 text-[14px] font-semibold"
              >
                {director.link.label === "Learn more" ? "Read Dr. Wang's profile" : director.link.label}
              </a>
            )}
          </div>
        </article>

        <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-start">
          {team.map((p, i) => (
            <li key={`${p.name}-${i}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-2 ring-1 ring-border">
                <Portrait
                  person={p}
                  index={i + 1}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 200px"
                />
              </div>
              <h3 className="mt-4 text-[15.5px] font-semibold leading-snug">{p.name}</h3>
              <p className="mt-0.5 text-[13.5px] text-fg-muted">{p.role}</p>
              {p.bio && (
                <p className="font-serif mt-2 text-[14px] leading-[1.55] text-fg-soft">{p.bio}</p>
              )}
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on ${p.link.label}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-brand-blue hover:underline"
                >
                  <LinkedInGlyph />
                  {p.link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Portrait({ person, index, sizes }: { person: Person; index: number; sizes: string }) {
  return person.photo ? (
    <Image src={person.photo} alt={person.name} fill sizes={sizes} className="object-cover" />
  ) : (
    <Avatar name={person.name} index={index} />
  );
}

function LinkedInGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function Avatar({ name, index }: { name: string; index: number }) {
  // Alternate the tile tint by position so the grid reads as lively.
  const tint = index % 2 === 0 ? "bg-brand-blue" : "bg-brand-blue-soft";
  return (
    <div className={`flex h-full w-full items-center justify-center ${tint}`}>
      <span className="font-display font-semibold text-[2.4rem] tracking-[-0.02em] text-white/90">
        {initials(name)}
      </span>
    </div>
  );
}
