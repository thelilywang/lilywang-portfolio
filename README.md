# Lily Wang — Portfolio

A modern, responsive personal portfolio website built with Next.js 15 App Router and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **UI**: React 19, Lucide React
- **Styling**: CSS Modules + global tokens (no Tailwind, no MUI)
- **i18n**: next-intl (English / 繁體中文)
- **Language**: TypeScript
- **Package manager**: pnpm

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (Navbar, Footer via ClientProviders)
│   ├── page.tsx              # Home — hero + highlights
│   ├── about/                # Bio, education, experience/skills/credentials
│   ├── projects/             # Main + side projects
│   ├── contact/               # Contact info + form
│   ├── blog/                  # Blog list + [slug] post pages
│   └── components/            # Shared components (Navbar, ThemeToggle, …)
└── data/
    ├── locales/
    │   ├── en.ts              # English content (source of truth)
    │   └── zh-TW.ts           # Traditional Chinese content
    ├── blogData.ts            # Blog posts
    └── resumeData.ts          # Re-export shim only — don't add content here
messages/
├── en.json                  # English UI strings
└── zh-TW.json              # Traditional Chinese UI strings
```

## Commands

```bash
pnpm dev      # Start dev server (Turbopack)
pnpm build    # Production build → ./out (static export)
pnpm start    # Serve production build locally
pnpm lint     # ESLint check
```

## Content

Portfolio content lives in `src/data/locales/en.ts` and `src/data/locales/zh-TW.ts` (parallel structure) — edit both when changing content. Blog posts live in `src/data/blogData.ts`. Any UI string change must also be kept in sync across `messages/en.json` and `messages/zh-TW.json`.

## Deployment

- **CI/CD**: GitHub Actions (`.github/workflows/firebase-hosting-merge.yml`) builds on push to `main`
- **Target**: Firebase Hosting (project `lilywang-portfolio`)
- Static output directory: `./out`
