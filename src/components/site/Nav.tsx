import { Wordmark } from "./Wordmark";

const links = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "People", href: "#people" },
  { label: "Publications", href: "#publications" },
  { label: "Lab", href: "#lab" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-[var(--rule)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 h-14 flex items-center justify-between">
        <Wordmark />
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-tight text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex text-[13px] px-3 py-1.5 text-ink-soft hover:text-ink"
          >
            Contact
          </a>
          <a
            href="#join"
            className="inline-flex items-center gap-1.5 text-[13px] bg-ink text-paper px-3.5 py-1.5 rounded-full hover:bg-accent transition-colors"
          >
            Join the lab
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
      </div>
    </header>
  );
}
