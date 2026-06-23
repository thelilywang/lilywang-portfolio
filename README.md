# Lily Wang — Portfolio

A modern, responsive personal portfolio website built with Next.js 15 App Router and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **UI**: React 19, MUI Joy, Lucide React
- **Styling**: CSS Modules + global tokens (no Tailwind)
- **i18n**: next-intl (English / 繁體中文)
- **Language**: TypeScript
- **Package manager**: pnpm

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Home — hero + highlights
│   ├── about/              # Bio, education, certifications
│   ├── projects/           # Project cards
│   ├── contact/            # Contact info
│   └── components/         # Shared components (Navbar, ThemeToggle, …)
└── data/
    └── resumeData.ts       # Single source of truth for all content
messages/
├── en.json                 # English strings
└── zh-TW.json             # Traditional Chinese strings
```

## Commands

```bash
pnpm dev      # Start dev server (Turbopack)
pnpm build    # Production build → ./out (static export)
pnpm start    # Serve production build locally
pnpm lint     # ESLint check
```

## Content

All portfolio content lives in `src/data/resumeData.ts`. Edit that file to update any section. Any text visible on the site must also be kept in sync across `messages/en.json` and `messages/zh-TW.json`.

## Deployment

- **CI/CD**: GitHub Actions (`.github/workflows/nextjs.yml`) builds on push to `main`
- **Target**: GitHub Pages (current)
- Static output directory: `./out`
