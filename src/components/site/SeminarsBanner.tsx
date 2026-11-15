import Image from "next/image";

const venues = [
  {
    name: "Princeton University",
    logo: { src: "/assets/venues/princeton.svg", width: 312, height: 348 },
    note: "csNavigator presented as applied agentic AI for advising.",
    kind: "Invited talk",
  },
  {
    name: "Harvard Kennedy School",
    logo: { src: "/assets/venues/harvard-kennedy.svg", width: 170, height: 197 },
    note: "Baltimore air-quality platform shared as policy-shaping ML.",
    kind: "Symposium",
  },
  {
    name: "Yale AI Symposium",
    logo: { src: "/assets/venues/yale.svg", width: 279, height: 293 },
    note: "Environmental ML and quantum collaboration showcased.",
    kind: "Symposium",
  },
  {
    name: "AAAS",
    logo: { src: "/assets/venues/aaas.svg", width: 1024, height: 293 },
    note: "Multimodal advising agent demonstrated to a national audience.",
    kind: "Conference",
  },
];

export function SeminarsBanner() {
  return (
    <section id="publications" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-[10.5px] tracking-normal text-accent">
            Recognition
          </span>
          <h2 className="font-display font-semibold text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.04] tracking-[-0.03em] mt-3">
            Where our work has been presented.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {venues.map((v) => (
            <div key={v.name} className="card rounded-2xl p-7">
              <div className="flex items-start justify-between gap-3">
                <Image
                  src={v.logo.src}
                  alt={`${v.name} logo`}
                  width={v.logo.width}
                  height={v.logo.height}
                  className="h-12 w-auto max-w-[140px] object-contain object-left"
                />
                <span className="inline-flex shrink-0 items-center rounded-full border border-border px-2.5 py-1 text-[9.5px] tracking-normal text-fg-muted">
                  {v.kind}
                </span>
              </div>
              <h3 className="mt-5 font-display font-semibold text-[1.25rem] leading-tight tracking-[-0.02em]">
                {v.name}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.55] text-fg-soft">
                {v.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
