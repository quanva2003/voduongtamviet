# Võ Đường Tâm Việt — Website v2.0

Website chính thức của Võ Đường Tâm Việt — võ đường karate truyền thống tại TP. Hồ Chí Minh.

**Production:** https://voduongtamviet.vercel.app  
**Canonical domain:** https://tamviet.vn

---

## Stack

| Layer | Technology |
|-------|-----------|
| UI | React 19 + TypeScript |
| Build | Vite 7 + Tailwind CSS 4 |
| Routing | React Router 7 (multi-locale) |
| i18n | i18next (vi / en / ja) |
| Animation | Framer Motion (LazyMotion + domAnimation) |
| Forms | React Hook Form + Zod |
| Testing | Vitest + RTL + jest-axe |
| E2E | Playwright |
| Hosting | Vercel |
| Architecture | Feature-Sliced Design (FSD) |

---

## Local dev quickstart

```bash
git clone <repo>
cd vdtv
npm install

npm run dev          # → http://localhost:5173
npm run build        # type-check + vite build → dist/
npm run preview      # serve dist/ locally
npm test             # unit + component tests (Vitest)
npm run test:coverage # coverage report → coverage/
npm run typecheck    # tsc strict check
npm run lint         # ESLint with FSD layer rules
```

### E2E tests (Playwright)

```bash
npx playwright install chromium   # first time only
npm run e2e                        # headless
npm run e2e:ui                     # interactive UI
```

### Image & OG optimization

```bash
# Place source images in src/shared/assets/
npm run optimize:images   # → public/images/optimized/{name}-{size}.{avif,webp,jpg}

# Regenerate OG social cards
npm run generate:og       # → public/images/og/*.png
```

---

## Folder structure

```
src/
├── app/              # Bootstrap: providers, router, global styles
│   ├── components/   # Layout: SiteLayout, ErrorBoundary, PageSkeleton
│   ├── providers/    # RouterProvider, MotionProvider, I18nProvider
│   ├── routes/       # Route definitions (lazy per page, multi-locale)
│   └── styles/       # tokens.css, globals.css, fonts.css, reset.css
├── pages/            # Route-level components (one dir per route)
│   ├── home/
│   ├── about/
│   ├── registration/
│   ├── articles/
│   ├── article-detail/
│   ├── belt-promotion/
│   ├── booking/
│   ├── schedule/
│   ├── instructor-detail/
│   └── not-found/
├── widgets/          # Complex composed UI blocks (not routable)
│   ├── site-header/
│   ├── site-footer/
│   ├── hero-cinematic/
│   ├── hero-zen/
│   └── ...
├── features/         # User-facing capabilities
│   ├── registration-form/
│   ├── book-class/
│   ├── article-filter/
│   ├── language-switcher/
│   └── seo-meta/
├── entities/         # Domain models + data + card UI
│   ├── instructor/
│   ├── article/
│   ├── class-schedule/
│   └── ...
└── shared/           # Pure utilities, design tokens, primitives
    ├── ui/           # Button, Input, Card, Picture, Badge, …
    ├── lib/          # cn, formatDate, motion, hooks
    ├── i18n/         # i18next config + locale JSON files
    └── assets/       # Source images (before optimization)
```

Import direction (FSD layer rule — enforced by ESLint):

```
app → pages → widgets → features → entities → shared
```

Crossing layers upward is a lint error.

---

## Commit convention

Conventional Commits enforced by commitlint + Husky:

```
feat(registration): add honeypot anti-spam field
fix(booking): preserve draft state across page refresh
chore(deps): upgrade framer-motion 12
docs(onboarding): add folder structure guide
```

---

## Deep docs

| Document | Contents |
|----------|---------|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | FSD layers, import rules |
| [DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) | Tokens, typography, components |
| [ONBOARDING.md](docs/ONBOARDING.md) | New dev guide |
| [MIGRATION-MAP.md](docs/MIGRATION-MAP.md) | v1 → v2 changes |
| [CHANGELOG.md](CHANGELOG.md) | Release history |

---

## Rollback to v1

```bash
git checkout v1-final
npm install
npm run dev
```

The v1 source is also preserved in `src-v1-backup/` on the main branch.
