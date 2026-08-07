# Portfolio — Sergio Ávalos

Backend Developer portfolio built with Astro. Clean Architecture, DDD, CQRS — applied to the site itself.

## Stack

- **Framework:** Astro 5 (static generation)
- **Styling:** Vanilla CSS with design tokens
- **Content:** MDX via Astro Content Layer API
- **TypeScript:** Strict config

## Getting Started

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` — Start dev server
- `pnpm build` — Static build
- `pnpm check` — TypeScript + Astro diagnostics

## Structure

- `src/components/` — UI components (Button, Tag, ProjectCard, StackTable)
- `src/sections/` — Page sections (Hero, SelectedWork, About, Project, Post)
- `src/layouts/` — Base layout with theme init, skip link, and BaseHead
- `src/styles/` — Global tokens + utilities
- `src/content/` — MDX content collections (projects, writing)
- `public/` — Static assets (robots.txt, sitemap)

## Design

See [DESIGN.md](./DESIGN.md) for visual decisions, color system, and typography.

## Deploy

Any static host (Netlify, Vercel, Cloudflare Pages).
