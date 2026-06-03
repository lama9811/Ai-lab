import { Wordmark } from "./Wordmark";
import { MobileMenu } from "./MobileMenu";

const links = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "People", href: "#people" },
  { label: "Publications", href: "#publications" },
  { label: "News", href: "#news" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Wordmark tone="paper" />

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-fg-soft hover:text-fg transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex text-[13.5px] text-fg-soft hover:text-fg transition-colors"
          >
            Contact
          </a>
          <a
            href="#join"
            className="btn-dark hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-medium"
          >
            Join the lab
            <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
              <path
                d="M1 5.5h9M6 1.5l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.3"
                fill="none"
              />
            </svg>
          </a>
          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}
