/* Branded abstract tile for csNavigator — a web app (cs.iNavigator.ai) with no
   representative photo. Renders a small chat/agent UI mock instead. */
export function CsNavigatorTile({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-surface-2 ${className}`}
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-70" />
      <div aria-hidden className="absolute inset-0 glow opacity-90" />

      <div className="relative h-full w-full flex flex-col justify-center gap-2.5 p-5">
        {/* incoming bubble */}
        <div className="self-start max-w-[78%] rounded-2xl rounded-bl-md bg-surface border border-border px-3.5 py-2.5">
          <div className="h-1.5 w-20 rounded-full bg-fg/20" />
          <div className="mt-1.5 h-1.5 w-28 rounded-full bg-fg/12" />
        </div>
        {/* agent bubble (accent) */}
        <div className="self-end max-w-[82%] rounded-2xl rounded-br-md bg-accent px-3.5 py-2.5">
          <div className="h-1.5 w-24 rounded-full bg-white/70" />
          <div className="mt-1.5 h-1.5 w-32 rounded-full bg-white/45" />
          <div className="mt-1.5 h-1.5 w-16 rounded-full bg-white/45" />
        </div>
      </div>

      <div className="absolute left-4 top-4 inline-flex items-center gap-2 text-[10px] tracking-normal text-fg-soft">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-surface text-accent">
          <svg width="11" height="11" viewBox="0 0 16 16" aria-hidden>
            <path
              d="M3 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6l-3 3v-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
              stroke="currentColor"
              strokeWidth="1.3"
              fill="none"
            />
          </svg>
        </span>
        cs.iNavigator.ai
      </div>
    </div>
  );
}
