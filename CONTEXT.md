# CONTEXT — Võ Đường Tâm Việt v3

> ⚠️ ĐỌC FILE NÀY TRƯỚC KHI LÀM BẤT KỲ TASK NÀO.
> Paste file này vào đầu mỗi session Claude Code mới nếu không có lệnh đọc tự động.

---

## 1. Dự án là gì

Website chính thức của **Võ Đường Tâm Việt** — võ đường Karate truyền thống tại TP. Hồ Chí Minh.

- **Production:** https://voduongtamviet.vercel.app
- **Canonical domain:** https://tamviet.vn
- **Audience:** phụ huynh & học sinh tiềm năng (vi) · người nước ngoài tại HCM (en) · người Nhật quan tâm Karate (ja)

---

## 2. Tech stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| UI           | React 19 + TypeScript (strict)              |
| Build        | Vite 7 + Tailwind CSS 4                     |
| Routing      | React Router 7 (multi-locale: vi / en / ja) |
| i18n         | i18next                                     |
| Animation    | Framer Motion (LazyMotion + domAnimation)   |
| Forms        | React Hook Form + Zod                       |
| Testing      | Vitest + RTL + jest-axe                     |
| E2E          | Playwright                                  |
| Hosting      | Vercel                                      |
| Architecture | Feature-Sliced Design (FSD)                 |

---

## 3. Architecture — Feature-Sliced Design

Layer import rule (một chiều, top → bottom):

```
app → pages → widgets → features → entities → shared
```

Không bao giờ import ngược hoặc ngang layer. Enforce bởi `eslint-plugin-boundaries`.
Mỗi slice chỉ expose qua `index.ts` — không reach vào subfolder của slice khác.

---

## 4. Style Direction — Hybrid 85/15

### Triết lý cốt lõi

> **"Kỷ luật tạo ra tự do. Tĩnh lặng chứa đựng sức mạnh."**

Website phải cảm giác như một **võ sư cao cấp**: kiệm lời, chính xác, mỗi khoảnh khắc đều có chủ ý.
Không thứ gì thừa. Không thứ gì thiếu.

Sáu mood phải thể hiện đồng thời — không được hi sinh mood nào:

| Mood                         | Thể hiện qua                                                            |
| ---------------------------- | ----------------------------------------------------------------------- |
| **Mạnh mẽ · Kỷ luật**        | Typography cứng, spacing chính xác, grid rõ ràng, không decoration thừa |
| **Premium · Sang trọng**     | Washi texture, Playfair Display, gold accent tinh tế, whitespace rộng   |
| **Thân thiện · Dễ tiếp cận** | Body text rõ ràng, CTA nổi bật, navigation đơn giản, contrast đủ AA     |
| **Nghệ thuật · Editorial**   | Cinematic block, layout bất đối xứng, kanji watermark, ảnh dramatic     |
| **Tối giản · Tinh tế**       | Border 0.5px, chỉ 2 font weight, animation subtle, không clutter        |
| **Dramatic · Ấn tượng**      | Hero full-bleed, cinematicReveal blur-in, đỏ Shu làm điểm nhấn cực mạnh |

### Phân bổ không gian

- **~85% Wabi-Sabi (Zen):** Background washi, Playfair serif, line-height 1.7, whitespace rộng. Đây là "nền thở".
- **~15% Cinematic Editorial:** Block đen full-bleed, typography display lớn, ảnh dramatic. Đây là "khoảnh khắc" — phải có impact.

### Quy tắc vàng — KHÔNG BAO GIỜ VI PHẠM

1. Hai cinematic block không bao giờ đứng liền nhau — phải có zen section xen giữa
2. Mỗi page: bắt đầu bằng cinematic hero, kết thúc bằng zen CTA
3. Animation: chậm, ease-out — tuyệt đối không bouncy spring
4. Font weight: chỉ **400** và **500** — không 600, 700, 800
5. Màu đỏ Shu: chỉ làm accent (active nav, hover button, blockquote border) — **không làm background lớn**
6. Body line-height: **1.7** — rộng hơn default, feel thiền
7. Không gradient nhiều màu — chỉ subtle dark overlay cho cinematic image
8. Không box-shadow — ngoại lệ duy nhất: focus ring (2px solid shu-seal, offset 2px)

---

## 5. Color Palette — Classic Wabi (Washi · Ink · Seal) + Vermillion (logo-driven, sprint 6)

> Cập nhật sprint 6 (2026-06-22): nâng đỏ Shu lên tông vermillion rực lấy từ `public/logo.svg`
> (vòng tròn ấn + hoa sakura, hex gốc trích từ logo: `#ff1810`). Hex shu-seal mới được điều chỉnh
> nhẹ (`#d4200d` light / `#ea5347` dark) để giữ contrast AA 4.5:1 với text trên nền — vermillion
> thuần `#ff1810` (token `--color-sakura`) chỉ dùng cho chi tiết decorative không mang text
> (motif hoa sakura, watermark, viền mỏng).

```css
/* BACKGROUNDS */
--color-washi:           #faf7f0;   /* dark: #1a1815 */
--color-sumi-paper:      #f0ead8;   /* dark: #252220 */
--color-sumi-ink:        #1a1815;   /* dark: #faf7f0  — cinematic block bg */

/* ACCENT */
--color-shu-seal:        #d4200d;   /* dark: #ea5347  — đỏ ấn triện, AA-safe cho text/button */
--color-sakura:          #ff1810;   /* dark: #ff4d3f  — đỏ vermillion thuần từ logo, chỉ decorative */
--color-gold:            #c9a961;   /* dark: #d4b876  — vàng decorative */

/* TEXT */
--color-text-primary:    #2a2620;   /* dark: #f0ead8 */
--color-text-secondary:  #6b6457;   /* dark: #a8a194 */
--color-text-muted:      #8a8275;   /* dark: #7a7368 */

/* BORDERS */
--color-border:          #d4cdb8;   /* dark: #3a352e  — 0.5px default */
--color-border-strong:   #a8a194;   /* dark: #5a5347  — emphasis */

/* SEMANTIC */
--color-success:         #5a7548;
--color-danger:          #d4200d;   /* = shu-seal */
--color-warning:         #b8843d;
--color-info:            #4a6478;
```

**Quy tắc dùng màu đỏ Shu (`--color-shu-seal`)** — dùng ở:

- **Nền primary button** (sprint 6: đổi từ "chỉ hover" sang nền mặc định — CTA phải nổi bật đỏ vermillion ngay từ đầu, hover chuyển sumi-ink)
- Accent letter trong logo
- Active state navigation
- Border-left blockquote / featured card
- KanjiAccent inline color

**Quy tắc dùng vermillion thuần (`--color-sakura`)** — chỉ ở chi tiết decorative không phải text:

- Motif hoa sakura 5 cánh (divider, watermark giữa section)
- Viền mỏng / underline decorative
- Không bao giờ dùng làm màu chữ hoặc nền chứa text — không qua kiểm tra AA contrast

**Không dùng `--color-shu-seal`** cho: section background lớn, body text, border thường (primary button là ngoại lệ duy nhất được phép dùng làm nền lớn).

---

## 6. Typography

```css
--font-display: "Playfair Display", "Lora", Georgia, serif;
--font-body:    "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
--font-kanji:   "Noto Serif JP", "Source Han Serif", serif;
--font-mono:    "JetBrains Mono", "Fira Code", monospace;

/* Type scale */
--text-display-xl:  clamp(48px, 8vw, 96px);    /* line-height 1.05 — Hero cinematic */
--text-display-lg:  clamp(36px, 5vw, 64px);    /* line-height 1.1  — Hero zen */
--text-display-md:  clamp(28px, 3.5vw, 44px);  /* line-height 1.15 — Section title */
--text-h1:          32px;   /* weight 500, display font */
--text-h2:          24px;   /* weight 500, display font */
--text-h3:          20px;   /* weight 500, body font */
--text-body-lg:     18px;   /* line-height 1.7 — Lead paragraph */
--text-body:        16px;   /* line-height 1.7 — Body */
--text-body-sm:     14px;   /* line-height 1.6 — Caption */
--text-eyebrow:     11px;   /* weight 500, ALL CAPS, letter-spacing 0.15em */
--text-kanji-sm:    24px;
--text-kanji-md:    48px;
--text-kanji-xl:    96px;   /* Decorative hero kanji */
```

Quy tắc:

- Display + H1/H2: `font-display` (Playfair). Italic cho quote, regular cho heading.
- H3 trở xuống: `font-body` (Inter). Không trộn serif cho UI element nhỏ.
- Eyebrow: `letter-spacing: 0.15em`, ALL CAPS, kèm số La Mã hoặc Hán tự.
- Kanji: `font-kanji` weight 400 — không bao giờ bold kanji.

---

## 7. Spacing & Layout

```css
--space-1: 4px;    --space-2: 8px;    --space-3: 12px;   --space-4: 16px;
--space-6: 24px;   --space-8: 32px;   --space-12: 48px;  --space-16: 64px;
--space-24: 96px;  --space-32: 128px; --space-48: 192px;

--container-sm: 640px;   --container-md: 768px;
--container-lg: 1024px;  --container-xl: 1200px;  --container-2xl: 1400px;

--radius-sm: 2px;   --radius-md: 4px;
--radius-lg: 8px;   --radius-xl: 12px;
```

Section vertical padding: min `--space-24` desktop, `--space-16` mobile.
Cinematic block: min `--space-32`.
Prose max-width: `--container-md` (768px).

---

## 8. Motion

```ts
// shared/lib/motion.ts
export const easings = {
  zen:       [0.25, 0.1, 0.25, 1],
  cinematic: [0.16, 1, 0.3, 1],
  reveal:    [0.6, 0.05, 0.01, 0.9],
};
export const durations = {
  instant: 0.15, fast: 0.3, base: 0.5, slow: 0.8, cinematic: 1.2,
};
export const fadeInUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,
    transition: { duration: durations.slow, ease: easings.zen } },
};
export const cinematicReveal = {
  hidden:  { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: durations.cinematic, ease: easings.cinematic } },
};
export const staggerChildren = {
  visible: { transition: { staggerChildren: 0.12 } },
};
```

Rules: không spring, luôn `viewport={{ once: true }}`, hover ≤ 300ms, respect `prefers-reduced-motion`.

---

## 9. Vấn đề cần fix trong v3

- Hardcoded color hex thay vì CSS tokens
- Wabi/Cinematic ratio mất cân bằng
- Animation sai easing hoặc thiếu `viewport once:true`
- FSD violations (import sai layer, thiếu index.ts)
- Mobile UX chưa đủ tốt
- Hero chưa đủ Dramatic / Premium feeling
- Typography chưa đủ Editorial weight

---

## 10. Scope v3

```
✅ GIỮ NGUYÊN: content, data, routing structure, i18n keys
✅ FIX: color tokens, animation, FSD violations, component polish
✅ NÂNG: Premium feeling, Dramatic hero impact, Editorial typography
❌ Không thêm dependency mới trừ khi thực sự cần
```
