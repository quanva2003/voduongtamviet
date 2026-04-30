# SPRINT PLAN

> 6 sprints × 1 tuần. Có thể nén nếu full-time.
> Branch chính: `refactor/v2`. Sub-branch mỗi sprint: `refactor/v2-sprint-N`.

---

## Sprint 0 — Foundation & tooling (3 ngày)

### Goal

Setup environment, tooling, conventions sẵn sàng để team code không phải config.

### Tasks

1. Tạo branch `refactor/v2`, init `src-v2/` song song
2. Cài full deps mới (xem `MIGRATION-MAP.md` §2.7)
3. TypeScript path alias (`@/app`, `@/pages`, ...)
4. Vite config update (tsconfig-paths plugin)
5. ESLint flat config + `eslint-plugin-boundaries` rule cho FSD
6. Prettier + `prettier-plugin-tailwindcss` config
7. Husky pre-commit (lint-staged), pre-push (test)
8. Commitlint (conventional commits)
9. Vitest + RTL + jest-axe setup
10. CI workflow GitHub Actions: lint + typecheck + test trên PR
11. README v2 — hướng dẫn dev local, structure overview
12. Vercel preview environment cho `refactor/v2` branch

### Deliverable

- `src-v2/` rỗng nhưng đầy đủ tooling
- `npm run dev:v2`, `npm run build:v2`, `npm test`, `npm run lint` all pass
- Một dummy page `<HomePage>Hello</HomePage>` chạy được trên preview Vercel

### Acceptance

- [ ] CI green
- [ ] ESLint chặn import sai layer (test bằng dummy violation)
- [ ] Husky chạy lint-staged khi commit
- [ ] Prettier format on save (config trong `.vscode/settings.json` recommended)

---

## Sprint 1 — Design system & shared layer (5 ngày)

### Goal

Có toàn bộ token + primitive component sẵn dùng cho sprint 2+.

### Tasks

1. **Token CSS** — `app/styles/tokens.css` với mọi var trong `DESIGN-SYSTEM.md`, light + dark
2. **Fonts** — Fontsource setup (Playfair, Inter, Noto Serif JP) + preload trong index.html
3. **Tailwind config** — extend theme dùng CSS variables, custom font families
4. **`shared/lib/`**:
   - `cn.ts` (clsx + tailwind-merge)
   - `format-date.ts`, `format-phone.ts`
   - `motion.ts` (variants, durations, easings)
   - `use-local-storage.ts`
   - `use-reduced-motion.ts`
5. **`shared/ui/` primitives**:
   - `Button` (3 variants × 3 sizes)
   - `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`
   - `Card` (4 variants)
   - `EnsoCircle`, `KanjiAccent`, `SectionEyebrow`
   - `CinematicBlock`, `ZenBlock`
   - `Picture` (responsive image với AVIF/WebP fallback)
   - `Container`
   - `Badge`, `Pill`
6. **i18n setup** — `shared/i18n/index.ts` + 3 locales structure + provider
7. **Storybook hoặc playground page** `/_dev/components` để xem mọi primitive

### Deliverable

- Mọi primitive trong `shared/ui/` có:
  - File component
  - File test render + a11y
  - Story (nếu Storybook) hoặc entry trong dev playground
- Dark mode auto hoạt động (toggle browser → site đổi)
- i18n switch hoạt động ở dev playground

### Acceptance

- [ ] 100% primitive có test render
- [ ] jest-axe pass cho mọi primitive
- [ ] Lighthouse a11y 100 trên dev playground page
- [ ] Bundle size shared/ui ≤ 25KB gzipped (chưa tree-shake)

---

## Sprint 2 — Entities & widgets (5 ngày)

### Goal

Build mọi block UI lớn cần cho 6 page. Page sprint sau chỉ compose.

### Tasks

**Entities** (mỗi entity: types + data + card UI):

- [ ] `instructor` — type, data per locale, `InstructorCard`, `InstructorAvatar`
- [ ] `location` — type, data, `LocationCard`
- [ ] `article` — type, data per locale, `ArticleCard`, `ArticleMetaRow`
- [ ] `value` — type, data, `ValueCard`
- [ ] `belt` — type, data, `BeltBadge`
- [ ] `class-schedule` — type, data, `ScheduleRow`
- [ ] `class-booking` — type, `BookingSummary`

**Widgets**:

- [ ] `site-header` — logo, nav, mobile menu, language switcher
- [ ] `site-footer` — logo section, quick links, contact, social, copyright
- [ ] `hero-cinematic` — block đen, kanji watermark, headline + subline + CTA
- [ ] `hero-zen` — block kem, eyebrow + headline + subline
- [ ] `benefits-grid` — 3 cột rèn tâm/thân/thuật
- [ ] `instructors-list` — grid InstructorCard, link đến profile page
- [ ] `instructor-profile` — full bio + photo + achievements
- [ ] `journey-timeline` — vertical timeline các năm
- [ ] `values-grid` — grid ValueCard
- [ ] `mission-statement` — text-only block trung tâm
- [ ] `locations-map` — list + map display
- [ ] `course-info` — info bullet về khoá học
- [ ] `cta-section` — Enso + headline + button
- [ ] `articles-grid` — grid ArticleCard với pagination
- [ ] `article-content` — markdown render + meta
- [ ] `schedule-table` — table lịch tuần
- [ ] `booking-summary` — review trước submit

### Deliverable

- 7 entities với data + UI card
- 17 widgets composable
- Mỗi widget có 1 smoke test render

### Acceptance

- [ ] Mọi widget render được standalone với mock data
- [ ] Tất cả i18n keys define trong 3 locales (EN/JA dùng placeholder ok)
- [ ] Visual review: stack tất cả widget trong dev playground, scroll qua không broken
- [ ] Bundle size analysis (rollup-plugin-visualizer): widgets layer ≤ 80KB gzipped tổng

---

## Sprint 3 — Pages: Home + About + 404 + i18n (5 ngày)

### Goal

3 trang đầu tiên hoàn chỉnh, i18n hoạt động end-to-end, routing với lazy load.

### Tasks

1. **Routing** trong `app/routes/`:
   - Locale prefix `/`, `/en`, `/jp`
   - Lazy load mỗi page
   - Error boundary level page
   - Scroll restoration on route change
2. **`pages/home/`** — compose: HeroCinematic + AboutIntro + BenefitsGrid + InstructorsList preview + ArticlesGrid preview + CTASection
3. **`pages/about/`** — compose: HeroZen + MissionStatement + JourneyTimeline + ValuesGrid + InstructorsList + CTASection
4. **`pages/not-found/`** — Enso + 404 + back to home button
5. **`features/seo-meta/`** — refactor SEO component, hook into route + locale
6. **`features/language-switcher/`** — UI + logic update URL khi đổi locale
7. **i18n content** — fill VI complete, EN/JA placeholder
8. **Sitemap script update** — generate per locale
9. **`vercel.json`** — redirect 301 từ path cũ

### Deliverable

- 3 page render đẹp, scroll mượt, dark mode auto
- Switch ngôn ngữ → URL đổi, content đổi
- 404 hoạt động

### Acceptance

- [ ] Lighthouse Performance ≥ 95, A11y 100, SEO 100 trên Home page
- [ ] Test render cho mỗi page (smoke + SEO meta presence)
- [ ] Tất cả internal link hoạt động
- [ ] Reduce motion test: disable trong DevTools → animation tắt

---

## Sprint 4 — Pages: Registration + Belt + Articles + Schedule + Booking (5 ngày)

### Goal

Hoàn thành các page còn lại + form thực + booking system với localStorage.

### Tasks

1. **`features/registration-form/`**:
   - zod schema (vi/en pattern phone, email RFC)
   - react-hook-form integration
   - Field component shared (label/error/aria)
   - Submit handler: lưu localStorage + show success state (không alert)
   - Honeypot field cho anti-spam
2. **`pages/registration/`** — compose: HeroZen + RegistrationForm + LocationsMap + CourseInfo
3. **`pages/articles/`** — compose: HeroZen + ArticleFilter + ArticlesGrid
4. **`features/article-filter/`** — filter by category, search, persist URL query
5. **`pages/article-detail/`** — compose: ArticleContent + RelatedArticles
6. **`pages/belt-promotion/`** — compose: HeroCinematic + event details + register CTA
7. **`pages/instructor-detail/`** — compose: InstructorProfile widget
8. **`pages/schedule/`** — compose: HeroZen + ScheduleTable filter by location
9. **`pages/booking/`**:
   - Multi-step: select class → select date → contact info → review → confirm
   - State management qua `features/book-class/model/`
   - Persist draft trong localStorage (key per session)
   - Confirmation page với booking ID
   - "My bookings" view (đọc localStorage list)
10. **`features/book-class/`** — model + ui flow, interface-driven cho future API swap

### Deliverable

- Mọi route hoạt động với content thực (VI)
- Form đăng ký submit thực, lưu local, hiển thị success
- Booking flow end-to-end với localStorage

### Acceptance

- [ ] E2E test: đăng ký flow happy path (Playwright optional)
- [ ] E2E test: booking flow happy path
- [ ] Form validation: empty submit shows errors, fix → submit pass
- [ ] Booking: refresh page giữa flow → state preserved
- [ ] All page Lighthouse Perf ≥ 90, A11y 100

---

## Sprint 5 — Polish, optimize, migrate (5 ngày)

### Goal

Production-ready, swap v1 → v2.

### Tasks

**Performance**

1. Image optimization — convert assets sang AVIF/WebP, multiple sizes, srcset
2. Logo SVG optimization (228KB → < 30KB), remove embedded raster
3. Font subsetting (chỉ glyphs cần) cho VI + EN, JP riêng
4. Code splitting audit — mỗi route chunk < 80KB gzipped
5. Preload critical assets (logo, font display)
6. Bundle analyzer review

**Accessibility** 7. Full a11y audit từng page (axe DevTools + manual keyboard nav) 8. Screen reader test (VoiceOver / NVDA) cho flow đăng ký + booking 9. Color contrast verify mọi token combo

**SEO** 10. JSON-LD structured data (LocalBusiness, Article, Event) 11. OG image per page (generate qua satori hoặc static) 12. Robots.txt + sitemap.xml verify 13. Test với Google Rich Results

**Testing** 14. Coverage review, fill gap đến target 15. E2E full suite (nếu Playwright) 16. Cross-browser test (Chrome, Safari, Firefox, Mobile Safari, Chrome Android)

**Migration** 17. Diff content text v1 ↔ v2 thủ công, fix lệch 18. Tag git `v1-final` cho rollback nếu cần 19. Backup `src/` → `src-v1-backup/` 20. Rename `src-v2/` → `src/` 21. Update `package.json` scripts, xoá `dev:v2`/`build:v2` extra 22. Deploy preview Vercel, smoke test 23. Submit sitemap mới Google Search Console 24. Monitor 24h sau merge production

**Docs** 25. Update README chính 26. Onboarding doc cho dev mới (folder structure, conventions) 27. Changelog v2.0.0

### Deliverable

- Production build deploy
- Lighthouse: Perf ≥ 95, A11y 100, SEO 100, Best Practices 100 trên mọi page
- v1 backed up + git tagged
- Docs đầy đủ

### Acceptance

- [ ] Lighthouse all green trên 4 page chính (Home, About, Registration, Articles)
- [ ] Bundle size total initial ≤ 200KB gzipped
- [ ] LCP < 2.0s, CLS < 0.05, INP < 200ms (real user monitoring nếu có)
- [ ] Manual smoke test: tất cả CTA, link, form hoạt động
- [ ] Rollback plan tested (revert tag v1-final → site cũ chạy lại được)

---

## Timeline tổng

| Sprint | Ngày  | Deliverable cốt lõi            |
| ------ | ----- | ------------------------------ |
| 0      | 1–3   | Tooling + structure ready      |
| 1      | 4–8   | Design system + primitives     |
| 2      | 9–13  | Entities + widgets             |
| 3      | 14–18 | 3 pages + i18n + routing       |
| 4      | 19–23 | Pages còn lại + form + booking |
| 5      | 24–28 | Polish + migrate + production  |

**Tổng: ~28 ngày làm việc** (~6 tuần với 5 ngày/tuần). Có thể song song:

- Sprint 1 task fonts/tokens & sprint 1 task primitives → 2 dev parallel
- Sprint 2 entities & widgets → 2 dev parallel
- Sprint 3 page Home & About → 2 dev parallel

Solo full-time: ~4 tuần khả thi.

---

## Definition of Done (mọi sprint)

- [ ] CI green: lint + typecheck + test
- [ ] PR review (self-review nếu solo)
- [ ] Acceptance criteria sprint check hết
- [ ] Vercel preview deploy không lỗi runtime
- [ ] Update relevant doc nếu có thay đổi convention

---

## Anti-pattern tránh trong mọi sprint

- **Refactor in-place src/** — luôn làm trong `src-v2/`
- **Skip test "để sau"** — test cùng lúc viết code, không bao giờ catch up sau
- **Copy paste từ v1** — đọc rồi viết lại theo convention mới
- **Mock data inline trong component** — luôn vào `entities/{x}/model/data.ts`
- **Hardcode color/size** — luôn qua token CSS variable
- **`any` type** — TypeScript strict, dùng `unknown` + narrow nếu thực sự cần
- **Component > 150 dòng** — tách
- **Page > 60 dòng** — tách thành widget
