import Image from "next/image";

type Props = { tone?: "ink" | "paper"; compact?: boolean };

export function Wordmark({ tone = "paper" }: Props) {
  const color = tone === "ink" ? "text-bg" : "text-fg";

  return (
    <a
      href="/"
      aria-label="Applied AI Lab — Morgan State University home"
      className={`group inline-flex items-center gap-3 ${color}`}
    >
      <Image
        src="/assets/brand/msu-tower.png"
        alt="Morgan State University"
        width={101}
        height={106}
        className="h-12 w-auto"
        preload
      />
      <span className="flex flex-col leading-none">
        <span className="font-display font-semibold text-[1.3rem] tracking-[-0.02em]">
          Applied AI Lab
        </span>
        <span className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-fg-muted">
          Department of Computer Science · MSU
        </span>
      </span>
    </a>
  );
}
