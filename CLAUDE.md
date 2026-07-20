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
- **framer-motion 12** — animation (used by the nav pill).

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
- `public/assets/brand/` — brand imagery (e.g. `msu-tower.png` used by `Wordmark`).
- `public/assets/people/` — team headshots used by `PeopleGrid` (one PNG per
  person, e.g. `paul-wang.png`).
- `public/assets/projects/` — project card imagery used by `PublicationList`.
- shadcn is **not** initialized (no `components.json` / `lib/utils.ts`); the
  `ui/` folder follows the convention without the CLI. Run `npx shadcn@latest init`
  only if a future component needs `cn()` or other shadcn utilities.

## Styling / theme

Use the brand theme tokens (defined in `globals.css`) via Tailwind utilities rather
than raw colors:

- Surfaces: `bg-bg`, `bg-surface`, `bg-surface-2/3`
- Text: `text-fg`, `text-fg-soft`, `text-fg-muted`
- Borders: `border-border`, `border-border-strong`
- Brand: `bg-brand-blue` (Morgan Blue), `text-accent` / `bg-accent` (Morgan Orange)
- `.btn-dark` — Morgan Blue pill button.
- Font: Space Grotesk via `--font-sans` (`.font-display` for headings).

## Navigation

The site header lives in `src/app/page.tsx` and is a 3-column grid:
**Wordmark (left) · animated pill nav (center) · MobileMenu (right)**.
(The "Join the lab" header CTA and the `CtaBand` section were removed; the
`#join` anchor no longer exists. `CtaBand.tsx` remains in the tree but is
unused/unimported.)

- `src/components/ui/nav-header.tsx` — the animated pill (`NavHeader`). A
  framer-motion cursor slides under the hovered tab; tab labels are `text-fg-soft`
  and flip to `text-white` on hover (do **not** use `mix-blend-difference` — it
  renders nearly invisible on the cream background). Tabs link to page anchors
  (`#research`, `#projects`, `#people`, `#publications`, `#news`).
- The pill is hidden below `md`; `MobileMenu` provides the small-screen menu.
- Section links must stay in sync between `nav-header.tsx` and the `MobileMenu`
  links array in `page.tsx`.

## People section

`src/components/site/PeopleGrid.tsx` (`<section id="people">`, rendered between
`ResearchAreas` and `PublicationList`) is the team grid the `#people` nav link
targets.

- People are a `Person[]` data array at the top of the file:
  `{ name, role, photo, bio?, link? }`.
- `photo` is a path under `public/assets/people/` (e.g.
  `"/assets/people/paul-wang.png"`). Set it to `null` to render a styled
  **initials avatar** instead (a Morgan-blue tile with the person's initials,
  tint alternating by index) — the fallback for people without a headshot yet.
- `bio` (optional one-liner) and `link` (`{ href, label }`, opens in a new tab)
  render under the role only when present. Currently only Dr. Wang has a `bio`;
  team members use `link` for their LinkedIn.
- The grid is `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4` with **`items-start`**
  so cards size to their own content (a taller bio card doesn't stretch the
  others).
- To add/replace a person: drop a square PNG in `public/assets/people/` and add
  or edit one entry in the array — no JSX changes needed.
