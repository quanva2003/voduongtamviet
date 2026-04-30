# TECH DECISIONS — ADR ngắn

> Architecture Decision Records cho mọi quyết định kỹ thuật quan trọng của v2. Mỗi ADR ngắn: context → decision → consequence.

---

## ADR-001 — Architecture pattern: Feature-Sliced Design

**Context**: Project hiện tại flat structure (`components/`, `pages/`, `constants/`), khó scale khi thêm article + booking + i18n. Cần convention rõ.

**Options**:

- Atomic Design — chia theo size component (atom/molecule/organism). Tốt cho design system thuần, yếu cho feature isolation.
- DDD layered (`features/` + `shared/`) — đơn giản, nhưng quy ước lỏng, dễ trôi.
- Clean Architecture — overkill cho frontend static.
- **FSD** — chia theo abstraction level + business meaning, có lint enforce, dùng được cho project mọi size.

**Decision**: FSD.

**Consequence**:

- (+) Dependency rule rõ, lint chặn được vi phạm
- (+) Mỗi slice tự đứng → test/refactor/xoá dễ
- (–) Learning curve cho dev mới chưa quen
- (–) Boilerplate folder ban đầu nhiều hơn

---

## ADR-002 — Animation: Framer Motion thay AOS

**Context**: AOS (`aos@2.3.4`) đang dùng cho scroll animation. Limitations: chỉ scroll-triggered, không control state, animation định nghĩa qua data-attribute (DX kém với TS), bundle ~14KB nhưng cũ (release 2018).

**Options**:

- Giữ AOS — không cần học mới
- CSS `@keyframes` thuần — nhẹ nhất nhưng khó stagger / orchestrate
- **Framer Motion** — declarative, TS-first, hỗ trợ stagger + layout animation + reduce-motion
- React Spring — nhẹ hơn nhưng API verbose hơn

**Decision**: Framer Motion (`motion` package mới).

**Consequence**:

- (+) Animation declarative trong JSX, type-safe
- (+) Reduce motion built-in
- (+) Stagger children, layout shared element
- (–) Bundle ~50KB gzipped — chấp nhận được vì bỏ cả AOS + AntD
- (–) Cần wrap component với `motion.div` — quy ước thêm

---

## ADR-003 — Form: react-hook-form + zod

**Context**: Form đăng ký hiện tại dùng `useState` + handler thủ công, validation chỉ HTML required, submit fake (alert). Cần validation thật, anti-spam, type-safe.

**Options**:

- Tiếp tục `useState` + custom — viết nhiều, dễ sai
- Formik — phổ biến nhưng nặng + render nhiều
- **react-hook-form + zod** — uncontrolled, ít re-render, schema-driven, type infer từ schema
- TanStack Form — mới, tốt, nhưng team chưa quen

**Decision**: react-hook-form + zod + `@hookform/resolvers/zod`.

**Consequence**:

- (+) 1 schema → validation + TS type
- (+) Performance tốt (uncontrolled)
- (+) Error message dễ i18n hoá
- (–) Pattern phải nhất quán toàn project

---

## ADR-004 — i18n: i18next + react-i18next

**Context**: Cần hỗ trợ VI/EN/JA. Project static nên không cần SSR.

**Options**:

- Custom Context + JSON — đơn giản nhưng thiếu interpolation, plural, lazy load
- react-intl (FormatJS) — chuẩn ICU, mạnh nhưng nặng và verbose
- **i18next + react-i18next** — phổ biến nhất, hỗ trợ namespace, lazy load, language detector
- Lingui — DX tốt, ít user

**Decision**: i18next + react-i18next + i18next-browser-languagedetector.

**Consequence**:

- (+) Ecosystem lớn, doc tốt
- (+) Lazy load namespace per route
- (+) Detector tự đoán ngôn ngữ user
- (–) Setup verbose, cần 1 file init riêng

---

## ADR-005 — Routing: react-router-dom v7 (giữ)

**Context**: Project dùng RR v7 (đã là version mới). Có thể chuyển TanStack Router (type-safe) nhưng overhead di trú không bõ.

**Decision**: Giữ react-router-dom v7. Dùng `Route` `path` matching standard. Lazy load qua `lazy` prop.

**Consequence**:

- (+) Stable, không cần migrate
- (+) Lazy + error boundary built-in
- (–) Type-safe path không bằng TanStack — accept

---

## ADR-006 — Styling: Tailwind 4 (giữ) + CSS variables cho tokens

**Context**: Tailwind 4 mới có `@theme` directive native. CSS variables cần cho dark mode tự động.

**Decision**:

- Tailwind 4 cho utility (color, spacing, layout)
- CSS variables (`tokens.css`) cho mọi token có theme variant (color, có khi typography size)
- Tailwind config extend từ CSS vars: `colors: { washi: 'var(--color-washi)' }`
- Không dùng `dark:` prefix Tailwind — dùng CSS var auto-switch

**Consequence**:

- (+) Dark mode auto, không cần class duplicate
- (+) Token đổi 1 chỗ → mọi nơi đổi
- (–) Custom color trong Tailwind cần map manual

---

## ADR-007 — Carousel: drop AntD, dùng embla-carousel hoặc native

**Context**: AntD (`antd@5.27.4`) ~250KB gzipped chỉ để dùng `<Carousel>` ở Hero. Lãng phí.

**Options**:

- Giữ AntD — bloat
- **embla-carousel-react** — 6KB, headless, accessibility tốt
- swiper — 25KB, nặng hơn
- Custom với CSS scroll-snap — 0KB, đủ cho hero đơn giản

**Decision**: Bắt đầu với CSS scroll-snap + 2 nút prev/next custom. Nếu cần auto-play hoặc swipe, upgrade lên embla.

**Consequence**:

- (+) Bundle giảm ~250KB (lớn nhất trong refactor)
- (+) Style match design system 100%
- (–) Phải tự implement (work nhỏ)

---

## ADR-008 — Booking storage: localStorage + interface-driven

**Context**: Booking nâng cao trong scope nhưng project vẫn static — không có backend. Cần state persistent + sẵn sàng swap API thật sau.

**Decision**:

```ts
// shared/lib/storage/booking-store.ts
export interface BookingStore {
  list(): Promise<Booking[]>;
  create(input: BookingInput): Promise<Booking>;
  cancel(id: string): Promise<void>;
}

// Implementation 1: localStorage
export const localBookingStore: BookingStore = { ... };

// Implementation 2 (sau này): API
export const apiBookingStore: BookingStore = { ... };
```

Component chỉ phụ thuộc interface. Swap khi có backend = đổi 1 dòng provider.

**Consequence**:

- (+) Future-proof
- (+) Test dễ (mock interface)
- (–) Một chút abstraction overhead, hợp lý

---

## ADR-009 — Testing: Vitest + RTL + jest-axe + Playwright (optional)

**Context**: Project chưa có test. Cần baseline mà không over-engineer.

**Decision**:

- Unit/component: Vitest + React Testing Library + user-event
- Accessibility: jest-axe trong test render
- E2E (sprint 5+): Playwright cho 2 flow critical (đăng ký, booking)
- Không snapshot test rộng — fragile, low value

**Coverage target**:

- Toàn project: 60% lines
- `features/`, `shared/lib/`: 80%
- `pages/`: smoke render đủ

---

## ADR-010 — Dark mode: prefers-color-scheme, no toggle

**Context**: User chọn auto theo system, không toggle.

**Decision**:

```css
:root {
  /* light tokens */
}
@media (prefers-color-scheme: dark) {
  :root {
    /* dark overrides */
  }
}
```

Không dùng `<html data-theme>`. Không lưu user preference. Không có toggle UI.

**Consequence**:

- (+) Đơn giản, 1 nguồn truth (system)
- (+) FOUC không xảy ra (CSS-only switching)
- (–) User không tự ép mode được — accept theo requirement

---

## ADR-011 — Image format: AVIF + WebP + JPEG fallback

**Context**: Assets coach hiện ~1.9MB, không optimize.

**Decision**:

- Build script `scripts/optimize-images.ts` (sharp) generate 3 format × 3 size cho mỗi ảnh
- `<Picture>` component render `<picture>` với source AVIF → WebP → img JPEG fallback
- Lazy load below-the-fold

**Consequence**:

- (+) Bundle assets giảm ~70%
- (+) LCP cải thiện đáng kể
- (–) Build time dài hơn (chấp nhận)

---

## ADR-012 — Component pattern: function + named export, no React.FC

**Context**: `React.FC` mọi nơi trong v1 — anti-pattern React 18+.

**Decision**:

```tsx
// ✅
interface Props { ... }
export function Button({ children, ...props }: Props) { ... }

// ❌
const Button: React.FC<Props> = ({ children }) => { ... }
```

Lý do: `React.FC` implicit `children` không cần nữa, generic component khó với FC, default export tăng risk import sai tên.

---

## ADR-013 — State: local-first, không Redux/Zustand

**Context**: Static project, không có server state, ít cross-component state.

**Decision**:

- Component → `useState`
- Multi-step flow (booking, registration) → `useReducer` hoặc react-hook-form trong feature
- App-level (i18n, theme detect) → React Context trong `app/providers/`
- Persistent → localStorage qua `useLocalStorage`

Khi có backend → thêm TanStack Query, không Redux.

---

## ADR-014 — Build & deploy: Vite + Vercel (giữ)

**Context**: Đang chạy Vite + Vercel, performance tốt.

**Decision**: Giữ. Thêm:

- `vite-tsconfig-paths` cho alias
- `rollup-plugin-visualizer` cho bundle analysis (dev tool)
- `@vitejs/plugin-legacy` (optional) — nếu cần support browser cũ. Mặc định không thêm.
- Vercel preview cho mỗi PR

---

## ADR-015 — Conventional Commits + Semantic versioning

**Context**: Refactor lớn, cần changelog rõ.

**Decision**:

- Commit message format: `<type>(<scope>): <subject>` (feat/fix/refactor/docs/chore/test/style/perf/ci)
- Enforce qua commitlint pre-commit hook
- Major version bump khi `src-v2/` → `src/`: v2.0.0

**Branch strategy**:

- `main` — production
- `refactor/v2` — long-running refactor branch
- `refactor/v2-sprint-N` — sprint branch, merge vào `refactor/v2`

---

## ADR-016 — Out: AntD, AOS, @types/aos, @types/react-router-dom

Đã liệt kê ở `MIGRATION-MAP.md`. Lý do tổng hợp:

- AntD: chỉ dùng 1 component, bloat
- AOS: thay Framer
- @types: package chính có types built-in

---

## ADR-017 — Locale routing: subpath thay subdomain/cookie

**Decision**: `/`, `/en/`, `/jp/` thay vì `vi.site.com` hay cookie.

**Consequence**:

- (+) SEO tốt nhất (Google index riêng từng locale)
- (+) Shareable URL chuẩn
- (+) Không cần backend
- (–) Path dài thêm

---

## ADR-018 — Reduce motion: chấp nhận và tôn trọng

**Decision**: Mọi enter animation wrap trong `useReducedMotion()` check. Hover transition giữ vì ngắn (≤300ms).

```ts
const prefersReducedMotion = useReducedMotion();
const variants = prefersReducedMotion ? noopVariants : fadeInUp;
```

Test bằng Chrome DevTools → Rendering → "Emulate prefers-reduced-motion: reduce".
