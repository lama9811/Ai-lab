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
**Wordmark (left) · animated pill nav (center) · "Join the lab" CTA + MobileMenu (right)**.

- `src/components/ui/nav-header.tsx` — the animated pill (`NavHeader`). A
  framer-motion cursor slides under the hovered tab; tab labels are `text-fg-soft`
  and flip to `text-white` on hover (do **not** use `mix-blend-difference` — it
  renders nearly invisible on the cream background). Tabs link to page anchors
  (`#research`, `#projects`, `#people`, `#publications`, `#news`).
- The pill is hidden below `md`; `MobileMenu` provides the small-screen menu.
- Section links must stay in sync between `nav-header.tsx` and the `MobileMenu`
  links array in `page.tsx`.
