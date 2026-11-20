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
        className={className ?? (compact ? "h-10 w-auto" : "h-11 w-auto sm:h-14")}
        priority
      />
    </a>
  );
}
