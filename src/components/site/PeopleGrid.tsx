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
    photo: null,
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
];

export function PeopleGrid() {
  return (
    <section id="people" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
        <div className="mb-10">
          <span className="text-[10.5px] tracking-normal text-accent">People</span>
          <h2 className="font-display font-semibold text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.04] tracking-[-0.03em] mt-3">
            Meet the lab
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
          {people.map((p, i) => (
            <div key={`${p.name}-${i}`} className="card group rounded-2xl overflow-hidden">
              <div className="aspect-square relative overflow-hidden bg-surface-2">
                {p.photo ? (
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                ) : (
                  <Avatar name={p.name} index={i} />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-[1.15rem] leading-[1.2] tracking-[-0.02em]">
                  {p.name}
                </h3>
                <p className="mt-1 text-[13px] text-fg-soft">{p.role}</p>
                {p.bio && (
                  <p className="mt-2.5 text-[12.5px] leading-[1.5] text-fg-muted">
                    {p.bio}
                  </p>
                )}
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] text-accent hover:underline"
                  >
                    {p.link.label}
                    <svg width="10" height="10" viewBox="0 0 11 11" aria-hidden>
                      <path
                        d="M1 5.5h9M6 1.5l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        fill="none"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
