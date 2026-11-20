@AGENTS.md

# Applied AI Lab — Project Guide

Marketing/landing site for the Applied AI Lab at the Morgan State University
Department of Computer Science.

## Stack

- **Next.js 16.2.6** (App Router, Turbopack) — see the warning in `AGENTS.md`;
  this is not the Next.js in your training data. Check `node_modules/next/dist/docs/`.
- **React 19.2**
- **TypeScript 5** (strict mode)
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` and an `@theme inline`
  block in `src/app/globals.css`. There is **no `tailwind.config.*`**; theme tokens
  live in CSS.
- **framer-motion 12** — animation (nav pill cursor, project filter transitions).

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint

## Layout & conventions

- Path alias: `@/*` → `./src/*`.
- `src/app/` — App Router (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/components/site/` — page-specific composed sections (Hero, Footer,
  Wordmark, MobileMenu, etc.).
- `src/components/ui/` — reusable, self-owned primitives (shadcn-style convention).
  Drop generic/copy-in components here, not in `site/`.
- `public/assets/brand/` — brand imagery. `applied-ai-lab-logo.png` (transparent lab logo) is rendered by `Wordmark` in the header; `applied-ai-lab-mark.png` (the circular "AI" mark alone) is used in the footer. The favicon is `src/app/icon.png` (same mark).
- `public/assets/people/` — team headshots used by `PeopleGrid` (one PNG per
  person, e.g. `paul-wang.png`).
- `public/assets/projects/` — project imagery used by `PublicationList` and the hero.
  Most images are small (165–360px wide), so cards show them at natural size as
  framed "figures" on a dot-grid panel; images ≥1000px wide (csNavigator, Robi)
  fill the panel instead. Larger originals would let more cards go full-bleed.
- `src/components/site/lab-data.ts` — shared `areas` (4 research areas) and
  `projects` data. Each project has an `id` (its page anchor) and `areas: AreaKey[]`.
  `ResearchAreas` renders each area as a card topped by a photo (`area.image`,
  with `fit: "cover" | "contain"`) — it no longer lists projects. `PublicationList`
  (client component) shows the first project as the featured card and filters
  the rest by area. `WIDE` in `PublicationList.tsx` lists the projects that span
  two columns in the unfiltered 3-column grid — revisit it if the project count
  changes so the rows still fill evenly.
- shadcn is **not** initialized (no `components.json` / `lib/utils.ts`); the
  `ui/` folder follows the convention without the CLI. Run `npx shadcn@latest init`
  only if a future component needs `cn()` or other shadcn utilities.

## Styling / theme

Colors come from the lab logo. Use the theme tokens (defined in `globals.css`)
via Tailwind utilities rather than raw colors:

- Surfaces: `bg-bg` (white), `bg-bg-2` (mist `#EEF2F8`), `bg-surface`, `bg-surface-2/3`
- Dark: `bg-ink` (`#0B1B3F`, hero / director card / footer), `bg-ink-2`
- Text: `text-fg` (navy), `text-fg-soft`, `text-fg-muted`
- Borders: `border-border`, `border-border-strong` (also `ring-border`)
- Brand: `bg-brand-blue` / `text-brand-blue` (logo blue `#1358C7`),
  `bg-accent` (logo orange `#F7901E`). **Orange text fails contrast on white** —
  use `text-accent-ink` for orange-ish text, and only use `text-accent` on `bg-ink`.
- Buttons: `.btn-primary` (orange pill, navy text), `.btn-dark` (blue pill).
- Fonts (set up in `layout.tsx` via `next/font`): **Archivo** (`--font-archivo`,
  with the `wdth` axis) for UI and headings — `.font-display` sets it heavy and
  slightly expanded; **Source Serif 4** (`.font-serif`) for paragraph text.
- Motion: the site is intentionally static — no load, scroll, or ambient
  animations (the user tried a 3D/animated hero and asked to remove it). The only
  motion is in response to the user: the nav pill cursor, hover color changes,
  and the project filter transitions.
- Copy style: sentence case, no all-caps eyebrow labels, no `·`-joined meta strings.
- Next 16: `next/image`'s `priority` is deprecated — use `loading="eager"`
  (plus `fetchPriority="high"` for the LCP image).

## Navigation

The site header lives in `src/app/page.tsx` and is a 3-column grid:
**Wordmark (left) · animated pill nav (center) · MobileMenu (right)**.
`MobileMenu`'s wrapper has `col-start-3` so it stays at the right edge when the
pill is hidden. Page section order: Hero → ResearchAreas → PublicationList
(projects) → MissionCard → PeopleGrid → SeminarsBanner (presentations, still
`id="publications"`) → NewsGrid → Footer.

- `src/components/ui/nav-header.tsx` — the animated pill (`NavHeader`). A
  framer-motion cursor slides under the hovered tab; tab labels are `text-fg-soft`
  and flip to `text-white` over the navy cursor on hover (do **not** use
  `mix-blend-difference`). Tabs link to page anchors
  (`#research`, `#projects`, `#people`, `#publications`, `#news`).
- The pill is hidden below `lg`; `MobileMenu` provides the small-screen menu (it shows below `lg`). The breakpoint is `lg` so the header logo has room beside the pill.
- Section links must stay in sync between `nav-header.tsx` and the `MobileMenu`
  links array in `page.tsx`.

## People section

`src/components/site/PeopleGrid.tsx` (`<section id="people">`, rendered after
`MissionCard`) is what the `#people` nav link targets. The **first entry** in the
array is rendered as the featured lab-director card (navy panel, bio, profile
button); everyone else goes in the team grid below it.

- People are a `Person[]` data array at the top of the file:
  `{ name, role, photo, bio?, link? }`.
- `photo` is a path under `public/assets/people/` (e.g.
  `"/assets/people/paul-wang.png"`). Set it to `null` to render a styled
  **initials avatar** instead (a Morgan-blue tile with the person's initials,
  tint alternating by index) — the fallback for people without a headshot yet.
- `bio` (optional one-liner) and `link` (`{ href, label }`, opens in a new tab)
  render under the role only when present. Currently only Dr. Wang has a `bio`;
  team members use `link` for their LinkedIn (a few, e.g. Terell Reed and
  Aramide Ogundiran, have no `link` yet). Every current member has a headshot,
  so the initials-avatar fallback is not in use right now.
- The team grid is `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6`
  with **`items-start`**; portraits are cropped to 4:5.
- To add/replace a person: drop a square PNG in `public/assets/people/` and add
  or edit one entry in the array — no JSX changes needed.
