import Image from "next/image";

const venues = [
  {
    name: "Princeton University",
    logo: { src: "/assets/venues/princeton.svg", width: 312, height: 348 },
    kind: "Invited talk",
    note: "csNavigator presented as applied agentic AI for advising.",
  },
  {
    name: "Harvard Kennedy School",
    logo: { src: "/assets/venues/harvard-kennedy.svg", width: 170, height: 197 },
    kind: "Symposium",
    note: "Baltimore air-quality platform shared as policy-shaping machine learning.",
  },
  {
    name: "Yale AI Symposium",
    logo: { src: "/assets/venues/yale.svg", width: 279, height: 293 },
    kind: "Symposium",
    note: "Environmental machine learning and quantum collaboration showcased.",
  },
  {
    name: "AAAS",
    logo: { src: "/assets/venues/aaas.svg", width: 1024, height: 293 },
    kind: "Conference",
    note: "Multimodal advising agent demonstrated to a national audience.",
  },
];

export function SeminarsBanner() {
  return (
    <section id="publications" className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
        <h2 className="font-display text-[2.3rem] leading-[1.05] sm:text-[3rem]">
          Where we&apos;ve presented
        </h2>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border ring-1 ring-border sm:grid-cols-2 lg:grid-cols-4">
          {venues.map((v) => (
            <li key={v.name} className="flex flex-col bg-white p-7">
              <div className="flex h-14 items-center">
                <Image
                  src={v.logo.src}
                  alt={`${v.name} logo`}
                  width={v.logo.width}
                  height={v.logo.height}
                  className="h-12 w-auto max-w-[150px] object-contain object-left"
                />
              </div>
              <p className="mt-6 text-[13px] font-semibold text-brand-blue">{v.kind}</p>
              <h3 className="font-display mt-1 text-[1.2rem] leading-tight">{v.name}</h3>
              <p className="font-serif mt-3 text-[1rem] leading-[1.6] text-fg-soft">{v.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
