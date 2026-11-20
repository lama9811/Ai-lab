import Image from "next/image";

type Props = { tone?: "ink" | "paper"; compact?: boolean; className?: string };

export function Wordmark({ compact = false, className }: Props) {
  return (
    <a
      href="/"
      aria-label="Applied AI Lab — Morgan State University home"
      className="group inline-flex items-center"
    >
      <Image
        src="/assets/brand/applied-ai-lab-logo.png"
        alt="Morgan State University Applied AI Lab"
        width={1655}
        height={406}
        className={className ?? (compact ? "h-10 w-auto" : "h-12 w-auto max-w-none sm:h-16 lg:h-11 xl:h-16")}
        priority
      />
    </a>
  );
}
