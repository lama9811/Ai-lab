export function CtaBand() {
  return (
    <section id="join" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface text-center">
          <div aria-hidden className="pointer-events-none absolute inset-0 glow" />
          <div className="relative px-8 py-16 lg:py-20 flex flex-col items-center">
            <span className="text-[10.5px] tracking-normal text-accent">
              Get involved
            </span>
            <h2 className="mt-4 font-display font-semibold text-[2rem] sm:text-[2.7rem] lg:text-[3.2rem] leading-[1.04] tracking-[-0.03em] max-w-[20ch] text-balance">
              Interested in research with us?
            </h2>
            <p className="mt-5 max-w-[42rem] text-[15px] leading-[1.6] text-fg-soft">
              We work with students, faculty, and partners across agentic AI,
              applied ML, computer vision, and quantum security. Reach out — or
              come build something that ships.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center gap-3.5">
              <a
                href="#apply"
                className="btn-dark inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium"
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
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-[14px] text-fg-soft hover:text-fg hover:border-fg/40 transition-colors"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
