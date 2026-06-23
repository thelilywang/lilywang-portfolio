# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server with Turbopack
pnpm build      # Production build (outputs to ./out for static export)
pnpm lint       # ESLint check
pnpm start      # Serve production build locally
```

No test suite is configured.

## Architecture

This is a **Next.js 15 App Router** static portfolio site. Currently deployed via GitHub Pages CI/CD (`.github/workflows/nextjs.yml`) on push to `main`; Firebase Hosting is the planned production target. The `output: 'export'` static export (`./out`) is compatible with both.

**Data layer**: All content lives in a single file — `src/data/resumeData.ts`. This exports typed constants (`personalInfo`, `aboutData`, `experienceData`, `projectsData`, `skillsData`, `highlightsData`) that are imported directly into page components. There is no API, database, or CMS. To update any portfolio content, edit this file only.

**Routing**: Each section is a separate App Router route under `src/app/`:
- `/` — Hero + highlights grid (homepage)
- `/about` — Bio, education, certifications, interests
- `/experience` — Work history timeline
- `/projects` — Project cards with results
- `/skills` — Skill bars grouped by category
- `/contact` — Contact info with mailto link

**Shared layout**: `src/app/layout.tsx` wraps all pages with `<Navbar />` (the only shared component). Styling uses CSS Modules (`.module.css` per page/component) plus a global `globals.css`. No Tailwind — use CSS Modules.

**Deployment**: GitHub Actions (`.github/workflows/nextjs.yml`) builds with `next build` and deploys `./out` to GitHub Pages using pnpm v8 / Node 20. Firebase target: run `firebase deploy` after `pnpm build`.
