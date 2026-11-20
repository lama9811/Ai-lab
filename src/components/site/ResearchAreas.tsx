import Image from "next/image";
import { areas } from "./lab-data";

export function ResearchAreas() {
  return (
    <section id="research" className="bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-[44rem]">
          <h2 className="font-display text-[2.3rem] leading-[1.05] sm:text-[3rem] text-balance">
            Four research areas, one lab.
          </h2>
          <p className="font-serif mt-5 text-[1.12rem] leading-[1.7] text-fg-soft">
            We work across the stack, from the agents students talk to every
            day down to the quantum protocols securing tomorrow&apos;s networks.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <li
              key={a.key}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-border transition-[box-shadow,--tw-ring-color] duration-200 hover:shadow-[0_24px_48px_-28px_rgba(11,27,63,0.45)] hover:ring-brand-blue/40"
            >
              <div className="relative h-48 overflow-hidden border-b border-border bg-white">
                <Image
                  src={a.image.src}
                  alt={a.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className={
                    a.image.fit === "cover"
                      ? "object-cover object-left-top"
                      : "object-contain p-4"
                  }
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span aria-hidden className="h-1 w-10 rounded-full bg-accent" />
                <h3 className="font-display mt-5 text-[1.3rem] leading-[1.2] text-balance">
                  {a.title}
                </h3>
                <p className="font-serif mt-3 text-[1.02rem] leading-[1.6] text-fg-soft">
                  {a.blurb}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
