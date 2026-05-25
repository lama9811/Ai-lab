import { Wordmark } from "./Wordmark";

const columns = [
  {
    title: "Research",
    links: ["Projects", "Publications", "Open Source"],
  },
  {
    title: "Lab",
    links: ["About", "People", "Press"],
  },
  {
    title: "Connect",
    links: ["Contact", "GitHub", "LinkedIn"],
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-night text-paper border-t border-[var(--rule)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-12 gap-10 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <Wordmark tone="paper" />
            <p className="mt-5 max-w-md text-[14px] leading-[1.65] text-paper/70">
              The Applied AI Lab is a research group inside the Department of
              Computer Science at Morgan State University, building agentic,
              applied, and quantum-secure systems with the people they serve.
            </p>
            <div className="mt-7 font-mono text-[11px] uppercase tracking-[0.24em] text-paper/45 space-y-1">
              <p>Department of Computer Science</p>
              <p>Morgan State University</p>
              <p>Baltimore, MD</p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper/45 mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[13.5px] text-paper/85 hover:text-paper transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-paper/55 font-mono uppercase tracking-[0.2em]">
          <p>© 2026 Applied AI Lab · Morgan State University</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-paper">
              Privacy
            </a>
            <a href="#" className="hover:text-paper">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
