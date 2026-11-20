export function MissionCard() {
  return (
    <section id="lab" className="bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-14">
          <svg
            aria-hidden
            width="88"
            height="88"
            viewBox="0 0 88 88"
            className="hidden lg:block mt-3"
          >
            <circle cx="44" cy="44" r="43" fill="#1358C7" />
            <path d="M14 62 L74 30" stroke="#F7901E" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <div>
            <p className="text-[15px] font-semibold text-brand-blue">Our mission</p>
            <blockquote className="font-display mt-4 max-w-[22ch] text-[2rem] leading-[1.12] sm:text-[2.7rem] lg:text-[3.3rem] text-balance">
              We study AI models that contribute to basic AI research, and build
              AI systems that interact with the real world.
            </blockquote>
            <p className="font-serif mt-7 max-w-[38rem] text-[1.12rem] leading-[1.7] text-fg-soft">
              Our projects start with problems we can see on campus and in
              Baltimore, from a robot that couldn&apos;t recognize every student
              to air quality that tracks income and race.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
