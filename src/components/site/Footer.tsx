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
    <footer id="contact" className="border-t border-border bg-bg-2">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-12 gap-10 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <Wordmark tone="paper" />
            <p className="mt-5 max-w-md text-[14px] leading-[1.65] text-fg-soft">
              The Applied AI Lab is a research group inside the Department of
              Computer Science at Morgan State University, building agentic,
              applied, and quantum-secure systems with the people they serve.
            </p>
            <div className="mt-7 text-[10.5px] tracking-normal text-fg-muted space-y-1">
              <p>Department of Computer Science</p>
              <p>Morgan State University</p>
              <p>Baltimore, MD</p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-[10px] tracking-normal text-fg-muted mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[13.5px] text-fg-soft hover:text-fg transition-colors"
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

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-fg-muted tracking-normal">
          <p>© 2026 Applied AI Lab · Morgan State University</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-fg transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-fg transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
