# MIGRATION MAP — v1 → v2

> Bảng mapping mọi file/code cũ sang vị trí mới trong FSD. Dùng làm checklist khi migrate sprint 1–4.

---

## 1. Cấu trúc cũ (v1) — recap

```
src/
├── App.tsx
├── App.css
├── index.css
├── main.tsx
├── assets/
├── components/
│   ├── Footer.tsx, Header.tsx, ScrollToTop.tsx, SEO.tsx
│   ├── Footer/, Header/, HomePage/, RegistrationPage/
├── pages/
│   ├── HomePage.tsx, AboutPage.tsx, RegistrationPage.tsx,
│   ├── BeltPromotionPage.tsx, ArticlesPage.tsx (dead code)
└── constants/
    ├── aboutpage.ts, app.ts, footer.ts, homepage.ts,
    ├── navigation.ts, registrationpage.ts, seo.ts, social.ts
```

---

## 2. File-by-file mapping

### 2.1 App-level

| v1               | v2                                        | Note                                                          |
| ---------------- | ----------------------------------------- | ------------------------------------------------------------- |
| `src/App.tsx`    | `src/app/App.tsx`                         | Tách AOS init → `app/providers/motion-provider.tsx`           |
| `src/main.tsx`   | `src/main.tsx`                            | Giữ, update import path                                       |
| `src/App.css`    | `src/app/styles/globals.css`              | Custom scrollbar + line-clamp giữ, AntD style xoá             |
| `src/index.css`  | `src/app/styles/tokens.css` + `fonts.css` | Tách design tokens ra riêng                                   |
| `index.html`     | `index.html`                              | Update meta + preconnect fonts                                |
| `vite.config.ts` | `vite.config.ts`                          | Add `vite-tsconfig-paths`, `@vitejs/plugin-legacy` (optional) |

### 2.2 Layout components

| v1                                 | v2                                                                                   | Note                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `components/Header.tsx`            | `widgets/site-header/ui/site-header.tsx`                                             |                                                              |
| `components/Header/Logo.tsx`       | `widgets/site-header/ui/header-logo.tsx`                                             |                                                              |
| `components/Header/Navigation.tsx` | `widgets/site-header/ui/header-nav.tsx`                                              |                                                              |
| `components/Header/MenuButton.tsx` | `widgets/site-header/ui/menu-button.tsx`                                             |                                                              |
| `components/Header/MobileMenu.tsx` | `widgets/site-header/ui/mobile-menu.tsx`                                             |                                                              |
| `components/Footer.tsx`            | `widgets/site-footer/ui/site-footer.tsx`                                             |                                                              |
| `components/Footer/*.tsx`          | `widgets/site-footer/ui/*.tsx`                                                       | LogoSection, QuickLinks, ContactInfo, SocialIcons, Copyright |
| `components/ScrollToTop.tsx`       | `features/scroll-to-top/ui/scroll-to-top-button.tsx`                                 |                                                              |
| `components/SEO.tsx`               | `features/seo-meta/ui/seo-meta.tsx` + `features/seo-meta/lib/normalize-image-url.ts` | Tách helper functions ra `lib/`                              |

### 2.3 Page-specific components

#### HomePage

| v1                                          | v2                                             | Note                                       |
| ------------------------------------------- | ---------------------------------------------- | ------------------------------------------ |
| `pages/HomePage.tsx`                        | `pages/home/ui/home-page.tsx`                  | Mỏng đi nhiều                              |
| `components/HomePage/HeroCarousel.tsx`      | `widgets/hero-cinematic/ui/hero-cinematic.tsx` | **Redesign hoàn toàn**, drop AntD Carousel |
| `components/HomePage/BenefitsSection.tsx`   | `widgets/benefits-grid/ui/benefits-grid.tsx`   |                                            |
| `components/HomePage/KarateInfoSection.tsx` | `widgets/about-intro/ui/about-intro.tsx`       |                                            |
| `components/HomePage/CallToAction.tsx`      | `widgets/cta-section/ui/cta-section.tsx`       |                                            |

#### AboutPage

| v1                               | v2                                               | Note                                |
| -------------------------------- | ------------------------------------------------ | ----------------------------------- |
| `pages/AboutPage.tsx` (287 dòng) | `pages/about/ui/about-page.tsx` (mong < 60 dòng) | Tách hết JSX trang trí thành widget |
| HERO_SECTION JSX                 | `widgets/hero-zen/`                              | Reuse cho mọi page có hero zen      |
| MISSION_SECTION JSX              | `widgets/mission-statement/`                     |                                     |
| JOURNEY JSX                      | `widgets/journey-timeline/`                      |                                     |
| VALUES JSX                       | `widgets/values-grid/`                           | dùng `entities/value`               |
| INSTRUCTORS JSX                  | `widgets/instructors-list/`                      | dùng `entities/instructor`          |
| CTA_SECTION JSX                  | reuse `widgets/cta-section/`                     |                                     |

#### RegistrationPage

| v1                                                 | v2                                                    | Note                                      |
| -------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------- |
| `pages/RegistrationPage.tsx`                       | `pages/registration/ui/registration-page.tsx`         |                                           |
| `components/RegistrationPage/HeroSection.tsx`      | reuse `widgets/hero-zen/`                             |                                           |
| `components/RegistrationPage/RegistrationForm.tsx` | `features/registration-form/ui/registration-form.tsx` | **Refactor full**: react-hook-form + zod  |
| `components/RegistrationPage/LocationList.tsx`     | `widgets/locations-map/ui/location-list.tsx`          |                                           |
| `components/RegistrationPage/LocationMap.tsx`      | `widgets/locations-map/ui/location-map.tsx`           |                                           |
| `components/RegistrationPage/ContactInfo.tsx`      | `widgets/contact-info/`                               | reuse Footer ContactInfo? merge nếu giống |
| `components/RegistrationPage/CourseInfo.tsx`       | `widgets/course-info/`                                |                                           |

#### Articles

| v1                                   | v2                                     | Note                             |
| ------------------------------------ | -------------------------------------- | -------------------------------- |
| `pages/ArticlesPage.tsx` (dead code) | `pages/articles/ui/articles-page.tsx`  | Activate route + redesign        |
| Inline articles array                | `entities/article/model/data.ts`       | Tách thành i18n: data per locale |
| `categories` array                   | `entities/article/model/categories.ts` |                                  |
| Filter logic                         | `features/article-filter/`             | New                              |
| `(none)`                             | `pages/article-detail/`                | New page `/articles/:slug`       |

#### BeltPromotion

| v1                            | v2                                                | Note                            |
| ----------------------------- | ------------------------------------------------- | ------------------------------- |
| `pages/BeltPromotionPage.tsx` | `pages/belt-promotion/ui/belt-promotion-page.tsx` | Redesign theo design system mới |
| Inline content                | `entities/belt-event/model/data.ts`               | Có thể nhiều kỳ thi → array     |

### 2.4 Constants

| v1                              | v2                                                                     | Note |
| ------------------------------- | ---------------------------------------------------------------------- | ---- |
| `constants/app.ts`              | `shared/config/site.ts`                                                |      |
| `constants/seo.ts`              | `shared/config/seo.ts` + i18n locales                                  |      |
| `constants/social.ts`           | `shared/config/social.ts`                                              |      |
| `constants/navigation.ts`       | `shared/constants/routes.ts` + i18n labels                             |      |
| `constants/footer.ts`           | `widgets/site-footer/model/data.ts`                                    |      |
| `constants/homepage.ts`         | Split: hero data, benefits data, CTA → relevant entities/widgets       |
| `constants/aboutpage.ts`        | Split: mission, journey, values, instructors → entities                |
| `constants/registrationpage.ts` | Split: form fields, locations, course info → relevant features/widgets |

### 2.5 Assets

| v1                     | v2                            | Note                                |
| ---------------------- | ----------------------------- | ----------------------------------- |
| `src/assets/coach/*`   | `shared/assets/instructors/`  | Convert WebP/AVIF + multiple sizes  |
| `src/assets/social/*`  | `shared/assets/icons/social/` |                                     |
| `src/assets/logo*.svg` | `shared/assets/logos/`        | Optimize SVG (228KB → target <30KB) |
| `public/logo.svg`      | `public/logo.svg`             | Giữ cho meta                        |
| `public/sitemap.xml`   | `public/sitemap.xml`          | Auto-gen vẫn hoạt động              |
| `public/robots.txt`    | `public/robots.txt`           |                                     |

### 2.6 Tooling

| v1                                                         | v2                                   | Note                                 |
| ---------------------------------------------------------- | ------------------------------------ | ------------------------------------ |
| `eslint.config.js`                                         | `eslint.config.js`                   | Add boundaries plugin + import rules |
| `(none)`                                                   | `.husky/`, `.lintstagedrc.json`      | New                                  |
| `(none)`                                                   | `commitlint.config.js`               | New                                  |
| `(none)`                                                   | `vitest.config.ts`, `setup-tests.ts` | New                                  |
| `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` | Same + thêm path alias               |                                      |
| `scripts/generate-sitemap.js`                              | `scripts/generate-sitemap.ts`        | TS hoá, sync với i18n routes         |
| `(none)`                                                   | `scripts/check-fsd.ts`               | Lint script extra (optional)         |

### 2.7 Dependencies — thêm/bỏ

**Bỏ:**

- `antd` — chỉ dùng Carousel, thay bằng custom hoặc embla-carousel-react
- `aos`, `@types/aos` — thay Framer Motion
- `@types/react-router-dom` — không cần với react-router-dom v7

**Thêm:**

- `framer-motion` — animation
- `react-hook-form` + `@hookform/resolvers` — form
- `zod` — schema validation
- `i18next`, `react-i18next`, `i18next-browser-languagedetector` — i18n
- `embla-carousel-react` — carousel nhẹ (12KB vs AntD 200KB+) — chỉ nếu cần
- `@fontsource/playfair-display`, `@fontsource/inter`, `@fontsource-variable/noto-serif-jp` — fonts local
- `clsx` + `tailwind-merge` — cho `cn()` helper
- `vite-tsconfig-paths` — path alias
- `eslint-plugin-boundaries` — FSD enforcement
- `vitest`, `@testing-library/react`, `@testing-library/user-event`, `jest-axe`, `@vitest/ui`
- `husky`, `lint-staged`, `@commitlint/cli`, `@commitlint/config-conventional`
- `prettier`, `prettier-plugin-tailwindcss`

---

## 3. Content/data migration

Mỗi entity data file phải hỗ trợ i18n. Pattern:

```ts
// entities/instructor/model/data.ts
import type { Instructor } from './types';

export const INSTRUCTORS_VI: Instructor[] = [...];
export const INSTRUCTORS_EN: Instructor[] = [...];
export const INSTRUCTORS_JA: Instructor[] = [...];

// hoặc tốt hơn:
export const INSTRUCTORS: Record<Locale, Instructor[]> = {
  vi: [...],
  en: [...],
  ja: [...],
};
```

Tên người, ngày tháng, địa danh giữ nguyên. Description/bio dịch.

Translation strings UI (button label, error message, navigation) trong `shared/i18n/locales/{locale}/common.json`.

---

## 4. Routes mapping

| v1 path                    | v2 path (default vi)       | EN                            | JA                            |
| -------------------------- | -------------------------- | ----------------------------- | ----------------------------- |
| `/`                        | `/`                        | `/en`                         | `/jp`                         |
| `/about`                   | `/about`                   | `/en/about`                   | `/jp/about`                   |
| `/registration`            | `/registration`            | `/en/registration`            | `/jp/registration`            |
| `/belt-promotion-iii-2025` | `/belt-promotion/iii-2025` | `/en/belt-promotion/iii-2025` | `/jp/belt-promotion/iii-2025` |
| _(none)_                   | `/articles`                | `/en/articles`                | `/jp/articles`                |
| _(none)_                   | `/articles/:slug`          | `/en/articles/:slug`          | `/jp/articles/:slug`          |
| _(none)_                   | `/instructors/:slug`       | `/en/instructors/:slug`       | `/jp/instructors/:slug`       |
| _(none)_                   | `/schedule`                | `/en/schedule`                | `/jp/schedule`                |
| _(none)_                   | `/booking`                 | `/en/booking`                 | `/jp/booking`                 |
| _(any 404)_                | `/404`                     | `/en/404`                     | `/jp/404`                     |

Belt promotion path đổi để gen được nhiều kỳ thi sau này. Setup redirect 301 từ path cũ trong `vercel.json`.

---

## 5. Process migration

Migrate **không in-place**. Tạo `src-v2/` song song:

```
voduongtamviet/
├── src/         (cũ, giữ chạy được)
├── src-v2/      (mới, từng bước build)
└── ...
```

Sprint 0 setup `src-v2/` với entry point riêng. Mỗi sprint hoàn thành 1 phần `src-v2/`. Sprint 5 cuối:

1. Verify v2 đầy đủ
2. Backup `src/` → `src-v1-backup/` hoặc tag git `v1-final`
3. Rename `src-v2/` → `src/`
4. Deploy preview, smoke test
5. Merge main, deploy production
6. Sau 1 tuần stable: xoá `src-v1-backup/`

---

## 6. Risk register

| Risk                                                           | Mitigation                                                                     |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Mất content khi migrate constants                              | Diff content text trước/sau với `git diff --no-index`, checklist thủ công      |
| SEO bị ảnh hưởng (URL cũ → mới)                                | 301 redirect trong `vercel.json`, update sitemap, submit Google Search Console |
| Form submit hiện tại đang fake (alert), khi đổi UI có thể quên | Sprint 4 phải test E2E                                                         |
| AOS scroll animation user quen, đổi sang Framer có thể "khác"  | Chấp nhận, Framer mượt hơn                                                     |
| Bundle size tăng khi thêm i18next + framer                     | Bù lại bằng bỏ AntD (~250KB) — net giảm                                        |
| Translation EN/JA chưa có nội dung                             | Sprint 1 dùng placeholder `[EN] ...`, sprint 5 thuê dịch hoặc tạm dùng VI      |

---

## 7. Out of scope (chưa làm trong refactor này)

- Backend / API thực
- Admin panel
- Payment integration cho booking
- Email notification (form submit)
- Analytics events tracking
- A/B testing setup

→ Để giai đoạn sau, không kéo vào sprint 0–5.
