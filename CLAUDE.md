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

This is a **Next.js 15 App Router** static portfolio site (React 19, TypeScript strict, CSS Modules — no Tailwind). Deployed via Firebase Hosting CI/CD (`.github/workflows/firebase-hosting-merge.yml`, `firebase-hosting-pull-request.yml`) on push to `main`. No `basePath` is set — Firebase Hosting serves from the root. The `output: 'export'` static export (`./out`) feeds the deploy.

**Routing** (`src/app/`):
- `/` — Hero + highlights bento grid (homepage)
- `/about` — Bio, education, and anchor sections for experience/skills/credentials
- `/projects` — Main projects + side projects
- `/contact` — Contact info + form
- `/blog`, `/blog/[slug]` — Blog list and post pages

**Data layer**: content lives in `src/data/locales/zh-TW.ts` and `src/data/locales/en.ts` (parallel structure, ~379 lines each), plus `src/data/blogData.ts` for blog posts. `src/data/resumeData.ts` is only a re-export shim — do not add content there.

**i18n — dual-track sync is mandatory**: any content change must be applied to *both* `src/data/locales/zh-TW.ts` and `en.ts`; any UI string change must be applied to *both* `messages/zh-TW.json` and `messages/en.json`. Site default locale is **English**. Runtime switching is client-side via `LocaleContext.tsx` (localStorage key `portfolio-locale`, `DEFAULT_LOCALE = 'en'`), combined with next-intl for UI strings (`messages/*.json`).

**Theming**: MUI Joy has been fully removed — the site is pure CSS Modules + CSS custom properties, no `@mui/joy` dependency, no `sx` props. Dark mode is toggled via the `data-joy-color-scheme` attribute (localStorage key `portfolio-color-mode`); the attribute name is a deliberately retained legacy name, not a sign Joy is still present.

**Shared components** (`src/app/components/`): `Navbar`, `AnchorNav`, `PageHeader`, `SectionHeading`, `Footer`, `ProjectCard`, `SkillGroup`, `ContactForm`, `ContactItem`, `ThemeToggle`, `ClientProviders`. `Footer` is mounted once in `layout.tsx` (inside `ClientProviders`, after `{children}`) so it renders on every route — don't add a page-local footer.

**Shared hooks** (`src/hooks/`): `useScrollFadeIn<T>(threshold)` — returns a callback ref (`register`); attach as `ref={register}` to any element to fade it in on scroll via a shared `IntersectionObserver`. Toggles `data-visible="true"` (CSS keys off `.fadeInUp[data-visible="true"]`, not a class). Detects `prefers-reduced-motion` itself and skips the observer, marking everything visible immediately — don't add a second reduced-motion guard on top of it.

**Shared styles**: page containers, section headers, and other cross-page styles live in `src/app/styles/shared.module.css`. Page-level CSS Modules reference them with `composes: xxx from '@/app/styles/shared.module.css'` — never copy-paste shared styles into a page module. Section headings (kicker + Fraunces title) should use the `SectionHeading` component rather than hand-rolling a heading + label pair.

**404 handling**: `src/app/not-found.tsx` provides a styled editorial 404 (used both for unmatched routes and `notFound()` calls, e.g. in `blog/[slug]/page.tsx`). No `loading.tsx`/`error.tsx` — not needed for this static-export site.

## Style rules

- No hardcoded colors — always use `globals.css` CSS tokens (`--color-*`, `--primary-*`, `--accent-*`). Border radius always uses `--radius-*`. The only exception is `#fff` inside the `-webkit-mask` gradient-border technique.
- Never use `transition: all`.
- Any new CSS variable must be defined in both `:root` and `[data-joy-color-scheme="dark"]`.
- Breakpoint convention: **1024 / 768 / 480** are the only allowed `@media` widths (documented at the top of `globals.css`) — don't introduce ad-hoc values.
- Motion/hover tokens: use `--motion-duration-fast/-base/-slow` + `--ease-out`/`--ease-standard` for transitions, `--hover-lift` for card hover transforms, `--shadow-card`/`--shadow-card-hover` for card shadows — don't hardcode new duration/shadow values that duplicate these.
- Fluid type tokens `--text-display`/`--text-heading` (clamp-based) exist for hero/section-heading font sizes.

## Deployment

GitHub Actions (`.github/workflows/firebase-hosting-merge.yml` for push to `main`, `firebase-hosting-pull-request.yml` for PR previews) builds with `next build` and deploys `./out` to Firebase Hosting via `FirebaseExtended/action-hosting-deploy@v0`. Project ID is `lilywang-portfolio` (`.firebaserc` and the workflows' `projectId`). Uses the `FIREBASE_SERVICE_ACCOUNT_LILYWANG_PORTFOLIO` GitHub repo secret, set up via `firebase init hosting:github`.
