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

This is a **Next.js 15 App Router** static portfolio site (React 19, TypeScript strict, CSS Modules — no Tailwind). Currently deployed via GitHub Pages CI/CD (`.github/workflows/nextjs.yml`) on push to `main`, with `NEXT_PUBLIC_BASE_PATH=/lilywang-portfolio` (local dev has no basePath). Firebase Hosting is a planned future target. The `output: 'export'` static export (`./out`) is compatible with both.

**Routing** (`src/app/`):
- `/` — Hero + highlights bento grid (homepage)
- `/about` — Bio, education, and anchor sections for experience/skills/credentials
- `/projects` — Main projects + side projects
- `/contact` — Contact info + form
- `/blog`, `/blog/[slug]` — Blog list and post pages

**Data layer**: content lives in `src/data/locales/zh-TW.ts` and `src/data/locales/en.ts` (parallel structure, ~379 lines each), plus `src/data/blogData.ts` for blog posts. `src/data/resumeData.ts` is only a re-export shim — do not add content there.

**i18n — dual-track sync is mandatory**: any content change must be applied to *both* `src/data/locales/zh-TW.ts` and `en.ts`; any UI string change must be applied to *both* `messages/zh-TW.json` and `messages/en.json`. Site default locale is **English**. Runtime switching is client-side via `LocaleContext.tsx` (localStorage key `portfolio-locale`, `DEFAULT_LOCALE = 'en'`), combined with next-intl for UI strings (`messages/*.json`).

**Theming**: MUI Joy `CssVarsProvider` (`JoyProvider.tsx`), toggled via the `data-joy-color-scheme` attribute, localStorage key `portfolio-color-mode`. (Planned removal in a future phase — see below.)

**Shared components** (`src/app/components/`): `Navbar`, `AnchorNav`, `PageHeader`, `ProjectCard`, `SkillGroup`, `ContactForm`, `ContactItem`, `ThemeToggle`, `JoyProvider`, `ClientProviders`.

**Shared styles**: page containers, section headers, and other cross-page styles live in `src/app/styles/shared.module.css`. Page-level CSS Modules reference them with `composes: xxx from '@/app/styles/shared.module.css'` — never copy-paste shared styles into a page module.

## Style rules

- No hardcoded colors — always use `globals.css` CSS tokens (`--color-*`, `--primary-*`, `--accent-*`). Border radius always uses `--radius-*`. The only exception is `#fff` inside the `-webkit-mask` gradient-border technique.
- Never use `transition: all`.
- Any new CSS variable must be defined in both `:root` and `[data-joy-color-scheme="dark"]` (this attribute name is retained even after Joy UI is eventually removed).

## Deployment

GitHub Actions (`.github/workflows/nextjs.yml`) builds with `next build` and deploys `./out` to GitHub Pages. Firebase target: run `firebase deploy` after `pnpm build` (not yet wired up).
