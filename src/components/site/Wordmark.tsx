type Props = { tone?: "ink" | "paper"; compact?: boolean };

export function Wordmark({ tone = "ink", compact = false }: Props) {
  const color = tone === "ink" ? "text-ink" : "text-paper";
  const subColor = tone === "ink" ? "text-muted" : "text-paper/55";

  return (
    <a
      href="/"
      aria-label="Applied AI Lab home"
      className={`group inline-flex items-baseline gap-2.5 ${color}`}
    >
      <Mark className="self-center" />
      <span className="font-serif italic text-[1.45rem] leading-none tracking-[-0.01em]">
        Applied AI
      </span>
      {!compact && (
        <span
          className={`font-mono text-[9.5px] uppercase tracking-[0.28em] ${subColor} hidden sm:inline relative top-[1px]`}
        >
          Lab
        </span>
      )}
    </a>
  );
}

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className={`${className} transition-transform duration-500 group-hover:rotate-180`}
    >
      <circle cx="9" cy="9" r="8.25" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="11.6" cy="9" r="3.4" fill="currentColor" />
    </svg>
  );
}
