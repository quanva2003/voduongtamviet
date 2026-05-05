# Changelog

All notable changes to this project are documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
Versioning: [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] — 2026-05-05

Complete rewrite of the website from v1 (raw React + AntD) to v2 (Feature-Sliced Design, Tailwind 4, React 19).

### Added

**Architecture & tooling**
- Feature-Sliced Design (FSD) layer structure: app / pages / widgets / features / entities / shared
- TypeScript strict mode with `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`
- ESLint with `eslint-plugin-boundaries` enforcing FSD layer import rules
- Vitest + RTL + jest-axe for unit and accessibility testing
- Playwright E2E for registration and booking flows
- Husky pre-commit (lint-staged) and commitlint (Conventional Commits)
- Rollup bundle visualizer (`docs/bundle-analysis.html` on build)

**Design system**
- CSS custom properties design token system (light + dark via `prefers-color-scheme`)
- Tailwind CSS 4 configured via token variables
- Inter VI + Playfair Display + Noto Serif JP self-hosted via `@fontsource`
- Shared UI primitives: Button, Input, Textarea, Select, Checkbox, Radio, Card, Badge, Picture, EnsoCircle, KanjiAccent, Container, Skeleton, VisuallyHidden

**Pages (9 routes)**
- Home — cinematic hero, benefits grid, instructors preview, articles preview, CTA
- About — journey timeline, values grid, mission statement, instructors list
- Registration — validated form (Zod + RHF), success state, honeypot anti-spam
- Articles — filterable article grid with URL-persisted query params
- Article detail — markdown content render
- Belt promotion — event detail with registration CTA
- Schedule — weekly schedule table filterable by location
- Booking — 5-step flow (select class → date → contact → review → confirm) with localStorage draft
- Instructor detail — full bio profile
- 404 — Enso-branded not-found page

**i18n**
- 3 locales: Vietnamese (vi, primary), English (en), Japanese (ja)
- URL prefix routing: `/` (vi), `/en`, `/ja`
- Language switcher with URL rewrite

**SEO**
- `<SeoMeta>` component using React 19 document metadata hoisting
- JSON-LD structured data (LocalBusiness, Article, Person, Breadcrumb)
- Hreflang alternate links for all 3 locales
- Canonical URLs per page × locale
- Static OG images (1200×630 PNG) per page — generated via sharp
- Multi-locale sitemap with `xhtml:link` hreflang entries
- Proper `robots.txt` with dual sitemap reference

**Performance**
- Lazy-loaded routes (code-splitting per page)
- Manual chunk split: vendor, router, i18n, motion
- `framer-motion` via `LazyMotion` + `domAnimation` (not domMax)
- Image optimization pipeline: AVIF + WebP + JPEG × 5 breakpoint sizes (`scripts/optimize-images.ts`)
- Font preload in `index.html` for Inter 400 and Playfair Display 400
- `loading="lazy"` on all below-fold images; `fetchpriority="high"` on hero

**Accessibility**
- Skip navigation link (`<a href="#main-content">Bỏ qua điều hướng</a>`)
- `id="main-content"` on `<main>` element with `tabIndex={-1}` for programmatic focus
- Visible `:focus-visible` outline using `--color-gold` token
- `prefers-reduced-motion` global CSS override
- `aria-label` on form elements, `role="alert"` on validation errors
- jest-axe a11y assertion on every shared UI primitive

### Changed

**Breaking: URL structure**
- `/belt-promotion-iii-2025` → `/belt-promotion/iii-2025` (301 redirect in `vercel.json`)

**Stack changes**
- Replaced AntD with custom design system components
- Replaced plain CSS with Tailwind CSS 4 + CSS tokens
- Replaced React Router v5 (v1) with React Router v7
- Replaced `aos` scroll animations with Framer Motion
- Removed all inline hardcoded color/size values

### Migration notes

**Rollback:** `git checkout v1-final` and redeploy. v1 source also preserved in `src-v1-backup/`.

**URL redirects:** `vercel.json` contains 301 redirects for all known v1 paths.

**i18n:** English and Japanese translations are complete for UI chrome (nav, buttons, form labels). Page content titles and descriptions have VI text; EN/JA placeholders are prefixed `[EN]` / `[JA]`. See `docs/i18n-todo.md`.

---

## [1.x.x] — prior to 2026-05-05

Legacy v1 — React + AntD + AOS. Source preserved in `src-v1-backup/`. Tag: `v1-final`.
