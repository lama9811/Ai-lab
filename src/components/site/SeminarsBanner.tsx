export function SeminarsBanner() {
  return (
    <section className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="relative bg-paper-soft border border-[var(--rule)] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-12 items-center gap-6 px-6 sm:px-10 lg:px-14 py-12 lg:py-14">
            <div className="col-span-12 sm:col-span-3 flex items-center justify-start gap-4">
              <Spark variant="orbit" />
              <Spark variant="cell" className="hidden sm:block" />
            </div>
            <div className="col-span-12 sm:col-span-6 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                Lab Seminars
              </span>
              <h2 className="font-serif text-[1.9rem] sm:text-[2.3rem] leading-tight tracking-[-0.015em] mt-3">
                A monthly series of conversations on{" "}
                <span className="italic">applied intelligence</span>,
                hosted by the lab.
              </h2>
              <a
                href="#seminars"
                className="mt-7 inline-flex items-center gap-2 text-[13px] bg-ink text-paper px-4 py-2 rounded-full hover:bg-accent transition-colors"
              >
                See the schedule
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
            <div className="col-span-12 sm:col-span-3 flex items-center justify-end gap-4">
              <Spark variant="wave" className="hidden sm:block" />
              <Spark variant="poly" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type SparkVariant = "orbit" | "cell" | "wave" | "poly";

function Spark({
  variant,
  className = "",
}: {
  variant: SparkVariant;
  className?: string;
}) {
  const common = "w-16 h-16 lg:w-20 lg:h-20 text-ink-soft";
  if (variant === "orbit") {
    return (
      <svg viewBox="0 0 80 80" className={`${common} ${className}`} fill="none">
        <ellipse
          cx="40"
          cy="40"
          rx="30"
          ry="12"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <ellipse
          cx="40"
          cy="40"
          rx="12"
          ry="30"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <circle cx="40" cy="40" r="4" fill="#b94e1d" />
      </svg>
    );
  }
  if (variant === "cell") {
    return (
      <svg viewBox="0 0 80 80" className={`${common} ${className}`} fill="none">
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2;
          return (
            <circle
              key={i}
              cx={40 + Math.cos(a) * 18}
              cy={40 + Math.sin(a) * 18}
              r="6"
              stroke="currentColor"
              strokeWidth="0.9"
            />
          );
        })}
        <circle cx="40" cy="40" r="6" fill="#0e0e0e" />
      </svg>
    );
  }
  if (variant === "wave") {
    return (
      <svg viewBox="0 0 80 80" className={`${common} ${className}`} fill="none">
        {Array.from({ length: 5 }).map((_, i) => (
          <path
            key={i}
            d={`M5 ${20 + i * 10} q 17 -14 35 0 t 35 0`}
            stroke="currentColor"
            strokeWidth="0.9"
            fill="none"
          />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 80" className={`${common} ${className}`} fill="none">
      <polygon
        points="40,8 70,28 60,62 20,62 10,28"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <polygon
        points="40,20 58,32 52,54 28,54 22,32"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <circle cx="40" cy="40" r="3" fill="#b94e1d" />
    </svg>
  );
}
