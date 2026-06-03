const stats = [
  { value: "$1M", label: "Bezos Earth Fund grant", sub: "+ NSF & USAF awards" },
  { value: "822,226", label: "Healthcare records analyzed", sub: "Cybersecurity · AWS" },
  { value: "8", label: "Active research projects", sub: "Agentic · ML · Quantum" },
  { value: "32", label: "AI & quantum courses", sub: "18 AI · 14 quantum" },
];

export function StatsBand() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface px-6 py-8 lg:px-8 lg:py-10 flex flex-col"
            >
              <span className="font-display font-semibold text-[2.2rem] lg:text-[2.8rem] leading-none tracking-[-0.03em] text-fg">
                {s.value}
              </span>
              <span className="mt-3 text-[13.5px] text-fg-soft leading-snug">
                {s.label}
              </span>
              <span className="mt-2 text-[10px] tracking-normal text-fg-muted">
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
