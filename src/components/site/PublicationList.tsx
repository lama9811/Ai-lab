"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { GithubIcon, ExternalIcon, YoutubeIcon } from "./Icons";
import { areas, projects, type AreaKey, type Project } from "./lab-data";

type Filter = "all" | AreaKey;

const WIDE = ["robi", "qgp"];

export function PublicationList() {
  const [filter, setFilter] = useState<Filter>("all");

  // A research-area link can point at a project the current filter hides.
  // Reset to "all" so the jump always lands on a visible card.
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.slice(1);
      const target = projects.find((p) => p.id === id);
      if (target && filter !== "all" && !target.areas.includes(filter)) {
        setFilter("all");
        requestAnimationFrame(() =>
          document.getElementById(id)?.scrollIntoView({ block: "start" }),
        );
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [filter]);

  const [featured, ...rest] = projects;
  const visible = rest.filter((p) => filter === "all" || p.areas.includes(filter));
  const showFeatured = filter === "all" || featured.areas.includes(filter);
  // In the full list, two projects span two columns so the 3-column rows fill evenly.
  const isWide = (id: string) => filter === "all" && WIDE.includes(id);

  return (
    <MotionConfig reducedMotion="user">
      <section id="projects" className="bg-bg-2">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-display text-[2.3rem] leading-[1.05] sm:text-[3rem]">
                Selected projects
              </h2>
              <p className="font-serif mt-4 max-w-[36rem] text-[1.12rem] leading-[1.7] text-fg-soft">
                Each one started with a real problem on campus or in Baltimore,
                and most are running outside the lab today.
              </p>
            </div>

            <div role="group" aria-label="Filter projects by research area" className="flex flex-wrap gap-2">
              <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
                All projects
              </FilterButton>
              {areas.map((a) => (
                <FilterButton
                  key={a.key}
                  active={filter === a.key}
                  onClick={() => setFilter(a.key)}
                >
                  {a.short}
                </FilterButton>
              ))}
            </div>
          </div>

          {showFeatured && <Featured project={featured} />}

          <motion.ul layout className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p) => (
                <motion.li
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className={isWide(p.id) ? "xl:col-span-2" : undefined}
                >
                  <ProjectCard project={p} wide={isWide(p.id)} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>
    </MotionConfig>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
        active
          ? "bg-ink text-white"
          : "bg-white text-fg-soft ring-1 ring-border-strong hover:text-fg hover:ring-fg/40"
      }`}
    >
      {children}
    </button>
  );
}

function Featured({ project: p }: { project: Project }) {
  return (
    <article
      id={p.id}
      className="mt-12 grid overflow-hidden rounded-2xl bg-white ring-1 ring-border lg:grid-cols-[1.25fr_1fr]"
    >
      <div className="relative bg-surface-3 p-4 sm:p-8">
        <Image
          src={p.image.src}
          alt={p.image.alt}
          width={p.image.width}
          height={p.image.height}
          sizes="(max-width: 1024px) 100vw, 700px"
          className="h-auto w-full rounded-lg shadow-[0_20px_50px_-24px_rgba(11,27,63,0.45)] ring-1 ring-border"
        />
      </div>
      <div className="flex flex-col p-7 sm:p-10">
        <Meta project={p} />
        <h3 className="font-display mt-4 text-[1.8rem] leading-[1.1] sm:text-[2.2rem] text-balance">
          {p.title}
        </h3>
        <p className="mt-3 text-[14px] text-fg-muted">{p.credit}</p>
        <p className="font-serif mt-5 text-[1.08rem] leading-[1.7] text-fg-soft">{p.summary}</p>
        <div className="mt-auto pt-8">
          <Links project={p} prominent />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project: p, wide = false }: { project: Project; wide?: boolean }) {
  const chart = p.image.fit === "contain";
  return (
    <article
      id={p.id}
      className={`flex h-full flex-col overflow-hidden rounded-xl bg-white ring-1 ring-border ${
        wide ? "xl:flex-row" : ""
      }`}
    >
      <figure className={`relative ${wide ? "xl:w-1/2 xl:shrink-0" : ""}`}>
        <div
          className={`relative h-64 overflow-hidden ${chart ? "bg-white" : "bg-surface-3"} ${
            wide ? "xl:h-full xl:min-h-[24rem]" : ""
          }`}
        >
          <Image
            src={p.image.src}
            alt={p.image.alt}
            fill
            sizes={wide ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"}
            className={chart ? "object-contain p-3" : "object-cover object-top"}
          />
        </div>
        <figcaption className="sr-only">{p.image.alt}</figcaption>
      </figure>
      <div className="flex flex-1 flex-col p-6">
        <Meta project={p} />
        <h3 className="font-display mt-3 text-[1.25rem] leading-[1.2] text-balance">{p.title}</h3>
        <p className="mt-2 text-[13px] text-fg-muted">{p.credit}</p>
        <p className="font-serif mt-4 flex-1 text-[1rem] leading-[1.65] text-fg-soft">{p.summary}</p>
        <Links project={p} />
      </div>
    </article>
  );
}

function Meta({ project: p }: { project: Project }) {
  const names = p.areas.map((k) => areas.find((a) => a.key === k)?.short).filter(Boolean);
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      <span className="font-semibold text-brand-blue">{names.join(", ")}</span>
      <span className="text-fg-muted">{p.year}</span>
      {p.badge && (
        <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-semibold text-accent-ink">
          {p.badge}
        </span>
      )}
    </div>
  );
}

function Links({ project: p, prominent = false }: { project: Project; prominent?: boolean }) {
  const items = [
    p.live && { href: p.live, label: "Open live site", icon: <ExternalIcon size={13} /> },
    p.github && { href: p.github, label: "View code", icon: <GithubIcon size={15} /> },
    p.video && { href: p.video, label: "Watch demo", icon: <YoutubeIcon size={16} /> },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  if (items.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${prominent ? "" : "mt-6 border-t border-border pt-4"}`}>
      {items.map((it, i) => (
        <a
          key={it.href}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            prominent && i === 0
              ? "btn-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium"
              : "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[14px] font-medium text-fg-soft ring-1 ring-border-strong transition-colors hover:text-fg hover:ring-fg/40"
          }
        >
          {it.icon}
          {it.label}
        </a>
      ))}
    </div>
  );
}
