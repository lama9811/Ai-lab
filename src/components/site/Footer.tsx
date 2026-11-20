import Image from "next/image";

const explore = [
  { label: "Research areas", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "People", href: "#people" },
  { label: "Presentations", href: "#publications" },
  { label: "News", href: "#news" },
];

const elsewhere = [
  { label: "csNavigator", href: "https://cs.inavigator.ai" },
  { label: "Morgan State University", href: "https://www.morgan.edu" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-white">
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-10 h-[140%] opacity-[0.07]"
        viewBox="0 0 400 400"
      >
        <circle cx="200" cy="200" r="198" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M40 300 L360 120" stroke="#F7901E" strokeWidth="10" strokeLinecap="round" />
      </svg>

      <div className="relative mx-auto max-w-[1280px] px-6 pt-16 pb-10 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-4">
              <Image
                src="/assets/brand/applied-ai-lab-mark.png"
                alt=""
                width={406}
                height={406}
                className="h-14 w-14"
              />
              <div>
                <p className="font-display text-[1.5rem] leading-none">Applied AI Lab</p>
                <p className="mt-1.5 text-[13px] text-white/60">Morgan State University</p>
              </div>
            </div>
            <p className="font-serif mt-6 max-w-[26rem] text-[1.05rem] leading-[1.65] text-white/75">
              A research group in the Department of Computer Science, building
              agentic, applied, and quantum-secure systems with the people they
              serve.
            </p>
            <address className="mt-6 not-italic text-[14px] leading-relaxed text-white/60">
              Department of Computer Science
              <br />
              Morgan State University
              <br />
              Baltimore, Maryland
            </address>
          </div>

          <FooterList title="Explore" items={explore} />
          <FooterList title="Elsewhere" items={elsewhere} external />
        </div>

        <div className="mt-14 border-t border-white/15 pt-7 text-[13px] text-white/55">
          <p>© {new Date().getFullYear()} Applied AI Lab, Morgan State University</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  items,
  external = false,
}: {
  title: string;
  items: { label: string; href: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <h2 className="text-[14px] font-semibold text-white/55">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[15px] text-white/90 underline-offset-4 hover:text-white hover:underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
