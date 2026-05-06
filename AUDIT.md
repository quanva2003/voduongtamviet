# AUDIT — Võ Đường Tâm Việt v3
> Generated: 2026-05-06 | Auditor: Claude Sonnet 4.6 (Senior Dev Review)
> Scope: src/app/styles/, src/shared/ui/, src/widgets/, src/pages/, src/features/, src/entities/
> Baseline: CONTEXT.md · CONVENTIONS.md · docs/DESIGN-SYSTEM.md · docs/ARCHITECTURE.md

---

## 1. Mood Delivery Assessment

### Mạnh mẽ · Kỷ luật — **WEAK**

**What works:** Spacing tokens used consistently. Grid layout disciplined. No decoration clutter.

**What fails:**
- `src/widgets/journey-timeline/ui/journey-timeline.tsx:50` — Year bubbles use `font-bold` (700). This single instance breaks the "only 400/500 weight" golden rule and undermines the disciplined typographic system.
- `src/pages/home/ui/home-page.tsx:41-67` — After the hero, the entire page is 5 consecutive zen sections with no second cinematic moment. The 85/15 ratio becomes 100/0 in practice. A site about martial arts should punch harder in the mid-scroll zone.
- `src/widgets/hero-cinematic/ui/hero-cinematic.tsx:30` — `min-h-[70vh]` feels cramped. A warrior standing tall is not 70% of the screen. The cinematic ratio should be at minimum `min-h-screen` for the main hero.

---

### Premium · Sang trọng — **WEAK**

**What works:** Gold accent used correctly for eyebrows and kanji. Washi background throughout. Whitespace is generous.

**What fails:**
- **All entity card h3 headings use `font-display` (Playfair) when spec explicitly mandates `font-body` (Inter) for H3 and below.** This is a 5-file violation:
  - `src/entities/instructor/ui/instructor-card.tsx:38`
  - `src/entities/article/ui/article-card.tsx:40`
  - `src/entities/value/ui/value-card.tsx:17`
  - `src/entities/location/ui/location-card.tsx:29`
  - `src/widgets/values-grid/ui/values-grid.tsx:41`
  - Using Playfair for small card titles at 20px makes the font feel overused and dilutes the premium feeling it creates at display sizes.
- `src/widgets/hero-cinematic/ui/hero-cinematic.tsx:89` — `leading-tight` (1.25) is used for the h1 instead of the spec's `1.1` for `--text-display-lg`. Wrong line-height breaks the typographic precision Premium requires.
- `src/widgets/hero-zen/ui/hero-zen.tsx:16` — HeroZen uses `bg-sumi-ink text-washi` — the same dark background as a cinematic block. It should feel like a dignified washi section with large dark text, not a smaller version of the cinematic hero. The current implementation makes it visually confusing: "is this zen or cinematic?"

---

### Thân thiện · Dễ tiếp cận — **STRONG** (with two gaps)

**What works:** Navigation clear, labels consistent, contrast ratios good, i18n working, aria attributes on interactive elements.

**What fails:**
- `src/widgets/site-header/ui/site-header.tsx:130-169` — Mobile menu has Escape key handler and click-outside overlay, but no **focus trap**. When menu opens, keyboard focus is not constrained inside the menu. A user pressing Tab after opening the menu will focus elements behind the dark overlay, which is a WCAG 2.1 Level AA failure (2.1.2 No Keyboard Trap's inverse: focus should be trapped).
- `src/app/styles/globals.css:30-44` — `.skip-link` CSS is defined, but **no component renders a skip-to-content `<a>` link** in any page layout or provider. The skip link exists only on paper. Every page is missing it per CONVENTIONS.md §9.

---

### Nghệ thuật · Editorial — **WEAK**

**What works:** Kanji watermarks present in most cinematic sections. EnsoCircle used decoratively. Gold eyebrow numerals add editorial character.

**What fails:**
- `src/widgets/hero-cinematic/ui/hero-cinematic.tsx:43-51` — When no `backgroundImage` prop is passed, the hero falls back to a faint `repeating-linear-gradient` diagonal texture. Most pages currently pass no background image. The "cinematic" hero without a dramatic photograph is not editorial — it's just a dark box with text.
- All page layouts use **symmetric center-aligned grids**. There are no asymmetric layouts (spec mentions "layout bất đối xứng"). The grid consistency is disciplined but the editorial quality requires occasional intentional asymmetry to break the rhythm.
- The kanji watermarks are present but opacity is uniformly 0.08 everywhere. Some sections feel more like "checked the box" than "crafted a moment."

---

### Tối giản · Tinh tế — **WEAK** (3 box-shadow violations)

**What works:** No gradients with multiple colors (aside from cinematic overlay). No glow/neon effects. Card borders are 0.5px or 1px. Animation is subtle.

**What fails:**
- `src/widgets/site-header/ui/site-header.tsx:71` — `shadow-lg` when scrolled. Box-shadow on the header is explicitly forbidden per golden rules.
- `src/features/scroll-to-top/ui/scroll-to-top.tsx:26` — `shadow-lg` on the scroll-to-top button. Also forbidden.
- `src/entities/location/ui/location-card.tsx:16` — `hover:shadow-md` on the location card. Also forbidden.
- All three use box-shadow for depth/hover feedback, which violates the flat, precise wabi-sabi aesthetic.

---

### Dramatic · Ấn tượng — **WEAK** (several compounding issues)

**What works:** `cinematicReveal` variant defined and used for the hero H1. Gradient overlay on hero image. `staggerChildren` in hero for sequenced entrance.

**What fails:**
- `src/widgets/hero-cinematic/ui/hero-cinematic.tsx:30` — `min-h-[70vh]` is not "full-bleed." A dramatic, immersive hero must be `min-h-screen`. At 70vh on a 900px screen, the hero ends at 630px — barely below the fold.
- `src/widgets/hero-cinematic/ui/hero-cinematic.tsx:82,100,110` — Only the h1 uses `cinematicReveal`. The eyebrow, subline, and CTA buttons all use `fadeInUp`. Per rules: "Cinematic hero dùng `cinematicReveal` — không dùng `fadeInUp`." The blur-in effect that creates the "emerging from darkness" feeling is missing from 3 of 4 animated elements.
- `src/widgets/values-grid/ui/values-grid.tsx:33-49` — sumi-ink section (cinematic) animates with `fadeInUp`, not `cinematicReveal`. A cinematic section should use the cinematic animation language.
- `src/widgets/cta-section/ui/cta-section.tsx:48-77` — When `variant="cinematic"`, all elements still use `fadeInUp`. Should use `cinematicReveal`.

---

## 2. Color Token Violations

### Hardcoded hex/rgba values in JSX/TSX

| File | Line | Hardcoded value | Correct token |
|------|------|-----------------|---------------|
| `src/widgets/hero-cinematic/ui/hero-cinematic.tsx` | 49 | `rgba(201,169,97,0.04)` | `var(--color-gold)` with opacity |
| `src/widgets/hero-cinematic/ui/hero-cinematic.tsx` | 59 | `rgba(26,24,21,0.95)` | `bg-sumi-ink/95` Tailwind utility |
| `src/widgets/hero-cinematic/ui/hero-cinematic.tsx` | 59 | `rgba(26,24,21,0.5)` | `bg-sumi-ink/50` Tailwind utility |
| `src/widgets/hero-cinematic/ui/hero-cinematic.tsx` | 59 | `rgba(26,24,21,0.25)` | `bg-sumi-ink/25` Tailwind utility |
| `src/widgets/hero-zen/ui/hero-zen.tsx` | 20 | `rgba(201,169,97,0.025)` | `var(--color-gold)` with opacity |
| `src/widgets/hero-zen/ui/hero-zen.tsx` | 28 | `rgba(26,24,21,0.2)` | `bg-sumi-ink/20` Tailwind utility |

**Note on belt data:** `src/entities/belt/model/data.ts:7-162` — all `colorHex` fields are domain data (belt colors are real-world constraints, not design choices). These are exempt from the token rule but the values matching design system colors (`#1a1815`, `#8b1a14`) should document the correspondence.

### Wrong semantic color usage

| File | Line | Violation | Rule |
|------|------|-----------|------|
| `src/features/language-switcher/ui/language-switcher.tsx` | 46 | `bg-shu-seal` as active language button background | Shu-seal only as text/border accent, not large button bg |
| `src/features/article-filter/ui/article-filter.tsx` | 41 | `border-shu-seal bg-shu-seal text-washi` on active chip | Shu-seal not as filled button background |
| `src/features/book-class/ui/booking-progress.tsx` | 31 | `bg-shu-seal` for active step circle | Step indicator uses shu as solid background |
| `src/widgets/course-info/ui/course-info.tsx` | 33 | `text-shu-seal` for course value text (e.g., prices) | Shu-seal should be accent only; not primary value display color |
| `src/widgets/booking-summary/ui/booking-summary.tsx` | 82 | `text-shu-seal` for price display | Same — price is prominent text, not an accent |

---

## 3. Typography Violations

### font-weight 600/700/800

| File | Line | Violation |
|------|------|-----------|
| `src/widgets/journey-timeline/ui/journey-timeline.tsx` | 50 | `font-bold` (700) on year label inside timeline bubble — **CRITICAL** |

### H3 using font-display instead of font-body

Per spec: "H3 trở xuống: font-body (Inter). Không trộn serif cho UI element nhỏ."

| File | Line | Violation |
|------|------|-----------|
| `src/entities/instructor/ui/instructor-card.tsx` | 38 | `h3` with `font-display` — should be `font-body` |
| `src/entities/article/ui/article-card.tsx` | 40 | `h3` with `font-display` — should be `font-body` |
| `src/entities/value/ui/value-card.tsx` | 17 | `h3` with `font-display` — should be `font-body` |
| `src/entities/location/ui/location-card.tsx` | 29 | `h3` with `font-display` — should be `font-body` |
| `src/widgets/values-grid/ui/values-grid.tsx` | 41 | `h3` items with `font-display` — should be `font-body` |
| `src/widgets/journey-timeline/ui/journey-timeline.tsx` | 59 | `h3` items with `font-display` — should be `font-body` |
| `src/widgets/course-info/ui/course-info.tsx` | 33 | `p` value display with `font-display` — should be `font-body` or semantic heading |
| `src/widgets/booking-summary/ui/booking-summary.tsx` | 95 | `p` "section header" with `font-display` — should be semantic `h3` with `font-body` |
| `src/widgets/instructor-profile/ui/instructor-profile.tsx` | 65 | `p` element "Thành tích" label using `font-display` — should be semantic `h3` with `font-body` |

### Hardcoded font-size (not using CSS token)

| File | Line | Violation | Correct token |
|------|------|-----------|---------------|
| `src/shared/ui/input.tsx` | 44 | `text-[12px]` for error message | `text-[length:var(--text-body-sm)]` (14px) or a dedicated 12px error token |
| `src/shared/ui/textarea.tsx` | 52 | `text-[12px]` for error message | Same |
| `src/shared/ui/select.tsx` | 57 | `text-[12px]` for error message | Same |
| `src/shared/ui/kanji-accent.tsx` | 19 | `text-[192px]` for xl watermark size | Missing `--text-kanji-2xl` token — add to tokens.css |

### Wrong line-height

| File | Line | Violation |
|------|------|-----------|
| `src/widgets/hero-cinematic/ui/hero-cinematic.tsx` | 89 | `leading-tight` (1.25) on h1 with `--text-display-lg` — spec says 1.1 for display-lg |

### Semantic / structure violations

| File | Line | Violation |
|------|------|-----------|
| `src/widgets/hero-zen/ui/hero-zen.tsx` | 47 | h1 uses `--text-display-md` with no `line-height` override — spec says display-md should be 1.15, reset.css gives headings `text-wrap: balance` but line-height must be set |

---

## 4. FSD Architecture Violations

### Cross-layer imports (wrong direction)
None found. All layer imports follow `app → pages → widgets → features → entities → shared` ✅

### Direct subfolder imports from outside slice
None found. All cross-slice imports go through `index.ts` ✅

### Public API leaks — index.ts exporting internal implementation

| File | Line | Violation |
|------|------|-----------|
| `src/features/registration-form/index.ts` | 2 | Exports `useRegistration` hook — per ARCHITECTURE: "KHÔNG export schema, hook nội bộ" |
| `src/features/book-class/index.ts` | 3 | Exports `localBookingStore` — internal model, should not be in public API |

### Pages exceeding 80 lines of JSX

| File | Lines | Excess |
|------|-------|--------|
| `src/pages/belt-promotion/ui/belt-promotion-page.tsx` | 149 | +69 lines — should extract content into a `BeltEventDetail` widget |
| `src/pages/schedule/ui/schedule-page.tsx` | 121 | +41 lines — filter state + mapping logic should move to a widget or feature |
| `src/pages/articles/ui/articles-page.tsx` | 84 | +4 lines — marginally over, acceptable |

### Missing index.ts
All slices have index.ts ✅

---

## 5. Animation Violations

### type: "spring"
None found ✅

### Scroll-triggered animations missing `viewport={{ once: true }}`
None found — all `whileInView` usages have `viewport={{ once: true }}` ✅

### Hover transitions exceeding 300ms

| File | Line | Violation |
|------|------|-----------|
| `src/widgets/site-header/ui/site-header.tsx` | 69 | `transition-all duration-500` — **500ms** is 67% over the 300ms limit |

### Cinematic sections NOT using `cinematicReveal`

| File | Lines | Violation |
|------|-------|-----------|
| `src/widgets/hero-cinematic/ui/hero-cinematic.tsx` | 82, 100, 110 | Eyebrow div, subline `p`, and CTA `div` use `fadeInUp` — all should use `cinematicReveal` in a cinematic hero |
| `src/widgets/values-grid/ui/values-grid.tsx` | 38 | `bg-sumi-ink` section uses `fadeInUp` for children — should use `cinematicReveal` |
| `src/widgets/cta-section/ui/cta-section.tsx` | 48–77 | `variant="cinematic"` branch uses `fadeInUp` throughout — should use `cinematicReveal` |

---

## 6. UI/UX Issues

### Adjacent cinematic blocks
None found — the golden rule (no two cinematic blocks adjacent) is respected across all pages ✅

### Golden rule violations — page structure

Rule: "Mỗi page: bắt đầu bằng cinematic hero, kết thúc bằng zen CTA."

| Page | Violation |
|------|-----------|
| `src/pages/about/ui/about-page.tsx` | Ends with `CtaSection variant="cinematic"` — should be `variant="zen"` |
| `src/pages/registration/ui/registration-page.tsx` | Ends with `CtaSection variant="cinematic"` — should be `variant="zen"` |
| `src/pages/schedule/ui/schedule-page.tsx` | Ends with `CtaSection variant="cinematic"` — should be `variant="zen"` |
| `src/pages/articles/ui/articles-page.tsx` | Ends with `CtaSection variant="cinematic"` — should be `variant="zen"` |
| `src/pages/article-detail/ui/article-detail-page.tsx` | Starts with `ArticleContent` (washi bg) — no cinematic hero at page top |
| `src/pages/instructor-detail/ui/instructor-detail-page.tsx` | Starts with `InstructorProfile` (washi bg) — no cinematic hero at page top |
| `src/pages/booking/ui/booking-page.tsx` | Completely plain `bg-washi pt-16` — no hero of any kind |

### Interactive elements missing focus state (beyond global CSS)

| File | Lines | Issue |
|------|-------|-------|
| `src/entities/location/ui/location-card.tsx` | 11–19 | Card with `role="button"` and `tabIndex={0}` has no `:focus-visible` class — relies entirely on global CSS `:focus-visible` which may not be reliable in all browsers |
| `src/features/book-class/ui/step-select-class.tsx` | 45–63 | Class selection `<button>` elements have no `:focus-visible` class |
| `src/features/book-class/ui/booking-progress.tsx` | 29–38 | Step indicators are `<span>` not `<button>` — not focusable at all. Visual-only progress, not keyboard navigable |
| `src/widgets/site-header/ui/site-header.tsx` | 105–126 | Hamburger button `<button>` contains only `<span>` lines — no text label beyond the `VisuallyHidden` content. `aria-expanded` is set ✅ but focus ring from global CSS won't visually indicate the hamburger bars are focused |

### Heading hierarchy issues

| Page | Issue |
|------|-------|
| `src/pages/belt-promotion/ui/belt-promotion-page.tsx` | h1 from `HeroZen` (event.title), then content sections use `SectionEyebrow` (not headings). "Thông tin" and "Yêu cầu" blocks have no h2/h3 semantic headings. CTA section provides h2. Structure: h1 → (no h2/h3 for main content) → h2 (CTA). Skips content heading level. |
| `src/pages/registration/ui/registration-page.tsx` | h1 from `HeroZen`, then the form section has no heading at all. `CourseInfo` and `LocationsMap` are called without `title` props. After h1, no h2 until CtaSection. Form is unlabeled at section level (only `aria-label` on the `<form>` element). |
| `src/pages/instructor-detail/ui/instructor-detail-page.tsx` | `ScheduleTable` called without `title` prop — the schedule section has no heading. |

### Form inputs without proper label or focus styling

All form inputs use proper `<label>` tags with `useId()` linkage ✅
`aria-describedby` for errors is implemented ✅

Missing: the `src/features/book-class/ui/booking-progress.tsx` step indicator spans are not interactive but visually imply step selection — missing `aria-label` to describe which step is current (only `aria-current="step"` is set ✅, but no accessible name on the step dots).

### Responsive issues at 375px

| File | Lines | Issue |
|------|-------|-------|
| `src/widgets/schedule-table/ui/schedule-table.tsx` | 120–173 | `GridView` renders a 7-column table. At 375px, `overflow-x-auto` scrolls horizontally. Each column ~50px minimum. This is functional but the UX is poor — users must scroll horizontally to see Saturday/Sunday classes. Mobile uses the list view by default (correct), but the switch to grid is still accessible via button at `sm:flex` breakpoint. At 640px (sm), 7 columns still compress tight. |
| `src/pages/registration/ui/registration-page.tsx` | 42–46 | `LocationsMap` embedded as `aside` content. `LocationsMap` itself renders `<section className="bg-sumi-paper py-[var(--space-24)]">` with its own `<Container size="xl">`. Nested containers create doubled padding and conflicting max-width at certain viewport widths. At mobile (<lg), the grid stacks and `LocationsMap`'s internal 96px vertical padding adds awkward whitespace in the stacked layout. |
| `src/widgets/hero-cinematic/ui/hero-cinematic.tsx` | 74 | `pt-32 lg:pt-40` — at 375px, 128px top padding with the CTA buttons creates a very dense bottom portion of the 70vh hero. At `min-h-screen`, this would be better distributed. |

### Skip-to-content missing from all pages

`src/app/styles/globals.css:30–44` defines `.skip-link` CSS class. **No component renders a `<a href="#main-content" className="skip-link">` element.** Every page violates WCAG 2.4.1 Bypass Blocks.

---

## 7. Priority Matrix

### CRITICAL — Breaks Dramatic/Premium feeling or violates a golden rule

| # | Issue | File | Sprint |
|---|-------|------|--------|
| C1 | Hero `min-h-[70vh]` — not full-bleed. Kills Dramatic mood entirely | `hero-cinematic.tsx:30` | Sprint 1 |
| C2 | Hero eyebrow/subline/CTA use `fadeInUp` instead of `cinematicReveal` | `hero-cinematic.tsx:82,100,110` | Sprint 1 |
| C3 | `font-bold` (700) on timeline year bubble | `journey-timeline.tsx:50` | Sprint 1 |
| C4 | All h3 headings in entity cards use `font-display` instead of `font-body` | 5 entity/widget files | Sprint 1 |
| C5 | No skip-to-content link rendered anywhere | All pages (no component) | Sprint 1 |
| C6 | Mobile menu has no focus trap | `site-header.tsx:130-169` | Sprint 1 |
| C7 | Header `duration-500` exceeds 300ms hover rule | `site-header.tsx:69` | Sprint 1 |
| C8 | 4 pages end with cinematic CTA (golden rule violation) | about, registration, schedule, articles | Sprint 2 |
| C9 | `article-detail` and `instructor-detail` pages start with washi section (no cinematic hero) | 2 page files | Sprint 2 |

---

### HIGH — Visible to user, degrades mood delivery

| # | Issue | File | Sprint |
|---|-------|------|--------|
| H1 | `values-grid` and `cta-section` cinematic variants use `fadeInUp` not `cinematicReveal` | 2 widget files | Sprint 2 |
| H2 | `rgba()` hardcoded colors in both hero components | `hero-cinematic.tsx:49,59`, `hero-zen.tsx:20,28` | Sprint 2 |
| H3 | box-shadow on header, scroll-to-top, location-card | 3 files | Sprint 2 |
| H4 | `HeroZen` named "zen" but uses `bg-sumi-ink` — design intent mismatch | `hero-zen.tsx:16` | Sprint 2 |
| H5 | No actual photo content in hero cinematic (texture fallback) | `hero-cinematic.tsx:43-51` | Sprint 3 |
| H6 | `booking-page.tsx` has no hero of any kind | `booking-page.tsx` | Sprint 3 |
| H7 | `LocationsMap` embedded as aside in registration page causing nested containers | `registration-page.tsx:42-46` | Sprint 2 |
| H8 | Belt-promotion page missing h2/h3 for content sections | `belt-promotion-page.tsx` | Sprint 2 |
| H9 | Hero h1 `leading-tight` (1.25) instead of spec's 1.1 | `hero-cinematic.tsx:89` | Sprint 1 |
| H10 | `bg-shu-seal` as solid button background in 3 features (language switcher, article filter, booking progress) | 3 feature files | Sprint 2 |

---

### MEDIUM — Code quality / maintainability

| # | Issue | File | Sprint |
|---|-------|------|--------|
| M1 | `features/registration-form/index.ts` leaks `useRegistration` hook | `index.ts:2` | Sprint 3 |
| M2 | `features/book-class/index.ts` leaks `localBookingStore` | `index.ts:3` | Sprint 3 |
| M3 | `belt-promotion-page.tsx` 149 lines — exceeds 80 line limit | `belt-promotion-page.tsx` | Sprint 3 |
| M4 | `schedule-page.tsx` 121 lines — exceeds 80 line limit | `schedule-page.tsx` | Sprint 3 |
| M5 | Error message `text-[12px]` hardcoded in all 3 form inputs | `input.tsx:44`, `textarea.tsx:52`, `select.tsx:57` | Sprint 3 |
| M6 | `KanjiAccent` xl size hardcodes `text-[192px]` — no CSS token | `kanji-accent.tsx:19` | Sprint 3 |
| M7 | `booking-progress.tsx` step indicators are `<span>` — not keyboard-navigable (visual-only) | `booking-progress.tsx:29-38` | Sprint 3 |
| M8 | `registration-page.tsx` heading hierarchy has no h2 for content sections | `registration-page.tsx` | Sprint 2 |
| M9 | `instructor-detail-page.tsx` schedule section missing h2 | `instructor-detail-page.tsx` | Sprint 3 |

---

### LOW — Nice to have

| # | Issue | File | Sprint |
|---|-------|------|--------|
| L1 | Asymmetric layouts missing — all sections are standard symmetric grids | Multiple widgets | Sprint 4 |
| L2 | Home page has only 1 cinematic block (hero) — no mid-page cinematic "moment" | `home-page.tsx` | Sprint 4 |
| L3 | `article-filter` category chips use bg-shu-seal for active state — borderline semantic violation | `article-filter.tsx:41` | Sprint 3 |
| L4 | `schedule-table` GridView horizontal scroll UX poor at small viewport | `schedule-table.tsx:120-173` | Sprint 4 |
| L5 | Belt data uses bare hex values that match design system tokens without documenting the mapping | `belt/model/data.ts` | Sprint 5 |
| L6 | All pages have symmetric content — no editorial asymmetry per spec | All page layouts | Sprint 4 |
| L7 | `course-info` value text uses `text-shu-seal` for course info values — shu-seal should be rare accent | `course-info.tsx:33` | Sprint 3 |

---

## Summary Counts

| Severity | Count |
|----------|-------|
| CRITICAL | 9 |
| HIGH | 10 |
| MEDIUM | 9 |
| LOW | 7 |
| **Total** | **35** |

---

## Sprint Assignment Overview

**Sprint 1** (Foundation — 5 issues): C1 hero height, C2 hero animation, C3 font-bold, C4 h3 font-family, H9 leading-tight — all affect the primary mood perception on first load.

**Sprint 2** (Structure & Golden Rules — 8 issues): C5 skip-link, C6 focus trap, C7 duration-500, C8 CTA variants, C9 page heroes, H1 cinematic animations, H2 rgba tokens, H3 box-shadows, H4 HeroZen semantics, H7 nested containers, H8 heading hierarchy, H10 shu-seal buttons.

**Sprint 3** (Polish — 7 issues): H5 hero photo, H6 booking hero, M1–M9 code quality, L3 article filter.

**Sprint 4** (Enhancement — 3 issues): L1 asymmetric layouts, L2 second cinematic block on home, L4 schedule grid UX.

**Sprint 5** (Final — 1 issue): L5 belt data documentation.
