# CLAUDE.md — Võ Đường Tâm Việt

> Đọc `CONTEXT.md` và `CONVENTIONS.md` trước khi sửa bất kỳ UI nào — file này chỉ là bản đồ, không lặp lại chi tiết.

## Project

Website chính thức của Võ Đường Tâm Việt (trường Karate, TP.HCM). Multi-locale vi/en/ja.
Production: https://voduongtamviet.vercel.app · Canonical: https://tamviet.vn

## Stack

React 19 + TypeScript strict · Vite 7 · Tailwind CSS 4 · React Router 7 · i18next ·
Framer Motion (LazyMotion/domAnimation) · React Hook Form + Zod · Vitest + RTL + jest-axe ·
Playwright E2E · Vercel.

## Architecture — Feature-Sliced Design

```
app → pages → widgets → features → entities → shared
```

- Import một chiều, chỉ từ layer dưới, chỉ qua `index.ts` của slice (không reach vào `ui/`, `model/`).
- Enforce bởi `eslint-plugin-boundaries`. Chi tiết slice anatomy: `docs/ARCHITECTURE.md`.
- `src-v1-backup/` là code cũ — chỉ tham khảo, không sửa. `src/` là codebase hiện hành.

## Design system — đọc trước khi đụng UI

- **`CONTEXT.md`** — triết lý style "Hybrid 85/15" (85% wabi-sabi zen, 15% cinematic editorial), 6 mood bắt buộc, quy tắc vàng không vi phạm, color palette, type scale.
- **`CONVENTIONS.md`** — rule áp dụng từng dòng code: TypeScript, naming, styling token-first, typography, animation (`shared/lib/motion.ts`), component rules (Button/Form/Cinematic/Zen block), a11y, i18n, **§11 hard rules KHÔNG BAO GIỜ** (no box-shadow, no font-weight 600+, no spring animation, no hardcoded hex...), **§12 checklist cuối sprint**.
- **`docs/DESIGN-SYSTEM.md`**, **`docs/ARCHITECTURE.md`** — chi tiết bổ sung.
- Token nguồn: `src/app/styles/tokens.css` (`--color-washi`, `--color-sumi-ink`, `--color-shu-seal`, `--color-gold`, type scale, spacing). Light + dark mode (`prefers-color-scheme`) đều set ở đây.
- **`AUDIT.md`** — senior dev audit (2026-05-06) liệt kê vi phạm hiện có so với CONVENTIONS.md (box-shadow, font-weight sai, H3 dùng sai font, thiếu cinematic moment, thiếu focus trap...). Dùng làm checklist khi dọn UI.

## Commands

```bash
npm run dev          # vite dev server
npm run typecheck    # tsc -p tsconfig.app.json — phải pass 0 lỗi
npm run lint          # eslint src/ — phải pass 0 FSD violation
npm test             # vitest run
npm run test:coverage
npm run build         # generate sitemap + tsc + vite build
npm run e2e           # playwright
npm run optimize:images   # sharp pipeline → AVIF/WebP/JPG
npm run generate:og       # OG images
```

## Known gaps

Xem `docs/known-issues.md` (cross-browser, booking không persist server, thiếu aria-live cho multi-step form) và `docs/i18n-todo.md` (thiếu dịch EN/JA).

## Brand asset

`public/logo.svg` dùng cho favicon + OG meta (`index.html`) nhưng tính tới nay **chưa được render trong UI thật** — header/footer hiện dùng wordmark text + `EnsoCircle` thay logo.
