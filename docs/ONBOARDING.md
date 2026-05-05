# Onboarding — Võ Đường Tâm Việt

Welcome to the project. This guide gets a new developer running in < 30 min.

---

## 1. Clone & first run

```bash
git clone <repo-url> vdtv
cd vdtv
node --version   # must be ≥ 20
npm install
npm run dev      # → http://localhost:5173
```

Open the browser. You should see the homepage with the cinematic black hero.

---

## 2. Key commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Vite dev server (HMR, port 5173) |
| `npm run build` | Type-check + production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm test` | Run all Vitest unit tests |
| `npm run test:watch` | Vitest in watch mode |
| `npm run test:coverage` | Coverage report → `coverage/` |
| `npm run typecheck` | `tsc --noEmit` strict check |
| `npm run lint` | ESLint with FSD import rules |
| `npm run e2e` | Playwright E2E (needs `npx playwright install` first) |
| `npm run optimize:images` | AVIF/WebP pipeline for `src/shared/assets/` |
| `npm run generate:og` | Regenerate OG social card PNGs |

---

## 3. Folder structure deep dive

The project uses **Feature-Sliced Design (FSD)**. Every file belongs to exactly one layer:

```
src/
 app/         Bootstrap only — providers, router, global styles.
              Nothing here depends on a specific feature or page.

 pages/       One directory per route. Composes widgets/features.
              Max 60 lines per page component; extract to widget if bigger.

 widgets/     Complex UI blocks composed from features + entities.
              Examples: SiteHeader, HeroCinematic, ArticlesGrid.

 features/    User-facing capabilities with their own model + UI.
              Examples: RegistrationForm, BookClass, ArticleFilter.

 entities/    Domain types + data + minimal card UI.
              Examples: Instructor, Article, ClassSchedule.

 shared/      Zero business logic — utilities, tokens, primitives.
              Sub-layers: ui/, lib/, i18n/, constants/, config/, assets/.
```

**Layer import rule (enforced by ESLint `boundaries` plugin):**

```
app → pages → widgets → features → entities → shared
```

A widget cannot import from a page. A feature cannot import from a widget. Violations are ESLint errors.

**Slice public API rule:** each slice exports only through its `index.ts`. Never import from `features/foo/ui/bar.tsx` directly — only `features/foo`.

---

## 4. How to add a new page

1. Create `src/pages/your-page/`:
   ```
   your-page/
   ├── index.ts          ← export { Component } from "./ui/your-page"
   ├── model/
   │   └── seo.ts        ← SEO keys constant
   └── ui/
       └── your-page.tsx ← the page component
   ```

2. Add a lazy import in `src/app/routes/routes.tsx`:
   ```ts
   const YourPage = lazy(() => import("@/pages/your-page").then((m) => ({ default: m.Component })));
   ```

3. Add the route inside `sharedRoutes` and the VI block:
   ```tsx
   <Route path="your-path" element={<LazyPage Page={YourPage} />} />
   ```

4. Add `SeoMeta` inside the page component using the keys from `seo.ts`.

5. Add OG image path to the SEO keys, then run `npm run generate:og` to produce the PNG.

6. Add the path to `scripts/generate-sitemap.js` `ROUTES` array.

---

## 5. How to add a new translation key

Translation files live at:
```
src/shared/i18n/locales/
  vi/common.json   ← primary (Vietnamese — always fill first)
  en/common.json   ← English (placeholder OK if translator unavailable)
  ja/common.json   ← Japanese (placeholder OK)
```

1. Add the key to `vi/common.json` first with the real Vietnamese text.
2. Add the same key to `en/common.json` and `ja/common.json` with `[EN] text` / `[JA] text` placeholders.
3. In your component:
   ```tsx
   const { t } = useTranslation();
   <p>{t("your.new.key")}</p>
   ```
4. TypeScript won't enforce key existence — search for the key string to confirm it's defined before shipping.

See `docs/i18n-todo.md` for outstanding placeholder translations.

---

## 6. How to add a new entity

Entities live in `src/entities/`. Each has:

```
your-entity/
├── index.ts               ← public API: export types, data, UI
├── model/
│   ├── types.ts           ← TypeScript interface
│   └── data.ts            ← static data (one export per locale)
└── ui/
    └── your-entity-card.tsx ← card component
```

Steps:
1. Define the interface in `model/types.ts`.
2. Define static data in `model/data.ts` (locale-keyed object).
3. Create the card component in `ui/`.
4. Re-export everything from `index.ts`.
5. Write a smoke test (render + jest-axe a11y check).

---

## 7. How to run a Lighthouse audit

1. `npm run build && npm run preview` — serve on port 4173.
2. Open Chrome DevTools → Lighthouse → run on the preview URL.
3. Targets: Perf ≥ 95, A11y = 100, SEO = 100, Best Practices = 100.

For mobile simulation, run on a production Vercel preview URL (Vercel applies real mobile throttling).

---

## 8. Common gotchas

| Problem | Cause / Fix |
|---------|-------------|
| ESLint "element-types" error | You imported across FSD layers. Fix the import to go through a lower layer's public API. |
| `@/pages/foo` can't resolve | The path alias is defined in `tsconfig.app.json`. Run `npm run typecheck` to see the full error. |
| Test fails: `i18next not initialized` | Wrap the component in `<TestWrapper>` from `src/test/test-wrapper.tsx`. |
| Build: `tsc` fails but app runs in dev | TypeScript catches errors Vite ignores. Fix the type error — don't add `as any`. |
| `fonts.css` imports fail | `@fontsource` packages must be installed. Run `npm install`. |
| Dark mode not switching | Check the `prefers-color-scheme` media query in `tokens.css`. The site uses CSS variables, no JS toggle needed. |
| Framer Motion animation runs in test | Add `process.env.VITEST` guard or mock `use-reduced-motion` to return `true`. |

---

## 9. Deployment

Deployments happen automatically via Vercel on push to `main`.

- **Preview:** every pull request gets a unique preview URL.
- **Production:** merging to `main` deploys to `voduongtamviet.vercel.app`.
- **Vercel config:** `vercel.json` at repo root defines 301 redirects for v1 URL patterns.

### Manual deploy trigger

```bash
npx vercel --prod   # requires Vercel CLI + login
```
