# DESIGN SYSTEM — Wabi-Sabi Cinematic

> Hệ thống thiết kế cho Võ Đường Tâm Việt v2. Triết lý: **Tĩnh để Động có ý nghĩa.**

---

## 1. Triết lý

Hybrid của hai phong cách:

- **Wabi-Sabi (Zen)** — tone giấy washi, serif thanh thoát, whitespace rộng, nhịp tĩnh. Chiếm **~85% diện tích site**. Là "nền".
- **Cinematic Editorial** — block đen full-bleed, ảnh dramatic, serif italic, typography lớn. Chiếm **~15%**. Là "khoảnh khắc".

Quy tắc vàng:

1. Hai cinematic block không bao giờ liền nhau.
2. Mỗi page bắt đầu bằng cinematic hero, kết bằng zen CTA.
3. Mọi animation chậm, ease-out, không bouncy.

---

## 2. Color tokens

Tất cả color khai báo trong CSS variables, auto-adapt light/dark theo `prefers-color-scheme`.

### 2.1 Base palette

| Token                    | Light hex | Dark hex  | Dùng cho                         |
| ------------------------ | --------- | --------- | -------------------------------- |
| `--color-washi`          | `#faf7f0` | `#1a1815` | Background mặc định              |
| `--color-sumi-paper`     | `#f0ead8` | `#252220` | Background section nhấn nhẹ      |
| `--color-sumi-ink`       | `#1a1815` | `#faf7f0` | Cinematic block bg / text invert |
| `--color-shu-seal`       | `#8b1a14` | `#c43d36` | Đỏ ấn triện — accent chính       |
| `--color-gold`           | `#c9a961` | `#d4b876` | Vàng decorative — eyebrow, kanji |
| `--color-text-primary`   | `#2a2620` | `#f0ead8` | Text body                        |
| `--color-text-secondary` | `#6b6457` | `#a8a194` | Text phụ                         |
| `--color-text-muted`     | `#8a8275` | `#7a7368` | Caption, eyebrow                 |
| `--color-border`         | `#d4cdb8` | `#3a352e` | Border mặc định 0.5px            |
| `--color-border-strong`  | `#a8a194` | `#5a5347` | Border emphasis                  |

### 2.2 Quy tắc dùng đỏ Shu

Chỉ dùng đỏ `--color-shu-seal` ở:

- Accent letter trong logo (dấu chấm/nét cuối)
- Hán tự decorative ở section header
- Active state của navigation
- Hover state của primary button
- Border trái của blockquote/featured card

**Không dùng** cho: button bg lớn, background section, text body, border thường.

### 2.3 Semantic colors

| Token             | Hex       | Use                |
| ----------------- | --------- | ------------------ |
| `--color-success` | `#5a7548` | Form success       |
| `--color-danger`  | `#8b1a14` | Form error (= shu) |
| `--color-warning` | `#b8843d` | Notice             |
| `--color-info`    | `#4a6478` | Info banner        |

---

## 3. Typography

### 3.1 Font stack

```css
--font-display: "Playfair Display", "Lora", Georgia, serif;
--font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-kanji: "Noto Serif JP", "Source Han Serif", serif;
--font-mono: "JetBrains Mono", "Fira Code", monospace;
```

Load qua `@fontsource/playfair-display`, `@fontsource/inter`, `@fontsource-variable/noto-serif-jp`. Không dùng Google Fonts CDN — tăng LCP.

### 3.2 Type scale

| Token               | Size                     | Line | Weight | Family  | Dùng cho                                      |
| ------------------- | ------------------------ | ---- | ------ | ------- | --------------------------------------------- |
| `--text-display-xl` | clamp(48px, 8vw, 96px)   | 1.05 | 400    | display | Hero cinematic                                |
| `--text-display-lg` | clamp(36px, 5vw, 64px)   | 1.1  | 400    | display | Hero zen                                      |
| `--text-display-md` | clamp(28px, 3.5vw, 44px) | 1.15 | 400    | display | Section title                                 |
| `--text-h1`         | 32px                     | 1.2  | 500    | display | H1 page                                       |
| `--text-h2`         | 24px                     | 1.25 | 500    | display | H2                                            |
| `--text-h3`         | 20px                     | 1.3  | 500    | body    | H3 (sans cho UI)                              |
| `--text-body-lg`    | 18px                     | 1.7  | 400    | body    | Lead paragraph                                |
| `--text-body`       | 16px                     | 1.7  | 400    | body    | Body                                          |
| `--text-body-sm`    | 14px                     | 1.6  | 400    | body    | Caption                                       |
| `--text-eyebrow`    | 11px                     | 1.4  | 500    | body    | Section eyebrow, ALL CAPS, letter-spacing 2px |
| `--text-kanji-sm`   | 24px                     | 1    | 400    | kanji   | Inline kanji                                  |
| `--text-kanji-md`   | 48px                     | 1    | 400    | kanji   | Section header kanji                          |
| `--text-kanji-xl`   | 96px                     | 1    | 400    | kanji   | Decorative kanji ở hero                       |

### 3.3 Quy tắc

- **Display + H1/H2** dùng `font-display` (Playfair). Italic cho quote, regular cho heading.
- **H3 trở xuống** dùng `font-body` (Inter). Tránh trộn serif cho UI element nhỏ.
- **Eyebrow** luôn `letter-spacing: 0.15em`, ALL CAPS, weight 500, kèm số La Mã hoặc Hán tự (一 二 三 四).
- **Hán tự** dùng `font-kanji` weight 400. Không bao giờ bold kanji — mất chất.
- **Body line-height 1.7** — rộng hơn default để feel "thiền".
- Chỉ 2 weight trong toàn site: 400 và 500. Không dùng 600/700/800.

---

## 4. Spacing & layout

### 4.1 Spacing scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
--space-32: 128px;
--space-48: 192px;
```

Section vertical padding tối thiểu `--space-24` desktop, `--space-16` mobile. Cinematic block tối thiểu `--space-32`.

### 4.2 Container

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1200px;
--container-2xl: 1400px;
```

Max-width content prose: `--container-md` (768px) — đọc văn bản dài thoải mái.

### 4.3 Border radius

```css
--radius-sm: 2px; /* Pill nhỏ, badge */
--radius-md: 4px; /* Button, input */
--radius-lg: 8px; /* Card */
--radius-xl: 12px; /* Modal, large card */
```

Wabi-Sabi ưa góc nhẹ (4–8px) hơn pill tròn full. Tránh `border-radius: 9999px` trừ avatar.

---

## 5. Motion

Library: **Framer Motion** (thay AOS). Tokens trong `shared/lib/motion.ts`.

### 5.1 Easing

```ts
export const easings = {
  zen: [0.25, 0.1, 0.25, 1], // ease-out, mượt và chậm
  cinematic: [0.16, 1, 0.3, 1], // expo-out, dramatic
  reveal: [0.6, 0.05, 0.01, 0.9], // cho text reveal
};
```

### 5.2 Duration

```ts
export const durations = {
  instant: 0.15,
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  cinematic: 1.2,
};
```

### 5.3 Variants chuẩn

```ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easings.zen },
  },
};

export const cinematicReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easings.cinematic },
  },
};

export const staggerChildren = {
  visible: { transition: { staggerChildren: 0.12 } },
};
```

### 5.4 Quy tắc

- **Không bouncy spring** ở bất kỳ đâu — phá vibe Zen.
- **Animation luôn `viewport: { once: true }`** — không animate lại khi scroll up.
- **Reduce motion**: tôn trọng `prefers-reduced-motion: reduce` — disable tất cả enter animation, giữ hover state.
- Hover transition tối đa 300ms.

---

## 6. Component primitives — `shared/ui/`

### 6.1 Button

3 variants:

- `primary` — bg `--color-sumi-ink`, text `--color-washi`, hover bg `--color-shu-seal`
- `secondary` — bg transparent, border `--color-border-strong`, text primary
- `ghost` — không border, underline khi hover

Sizes: `sm` (32px), `md` (40px), `lg` (48px). Đuôi `→` cho primary CTA.

### 6.2 Input / Textarea / Select

- Bg `transparent`, border-bottom 1px `--color-border`, không border 4 chiều.
- Focus: border-bottom dày 2px `--color-shu-seal`, không có glow.
- Label nhỏ phía trên, eyebrow style.
- Error message dưới, text 12px `--color-danger`.

### 6.3 Card

```tsx
<Card variant="zen" />     // bg washi, border 0.5px
<Card variant="paper" />   // bg sumi-paper, no border
<Card variant="dark" />    // bg sumi-ink, text invert
<Card variant="featured" /> // border-left 2px shu-seal
```

### 6.4 EnsoCircle

SVG vòng tròn thiền — dùng làm decorative ở section transition và 404 page.

```tsx
<EnsoCircle size={64} stroke={1.5} variant="closed" />
<EnsoCircle size={64} stroke={1.5} variant="brushed" /> // có hiệu ứng cọ
```

### 6.5 KanjiAccent

```tsx
<KanjiAccent char="道" size="md" position="watermark" />
<KanjiAccent char="武" size="sm" position="inline" color="gold" />
```

`position="watermark"` đặt absolute, opacity 0.08, behind content. `position="inline"` flow trong text.

### 6.6 SectionEyebrow

```tsx
<SectionEyebrow numeral="一" label="GIỚI THIỆU" />
// Renders: 一 · GIỚI THIỆU (uppercase, letter-spacing, gold)
```

### 6.7 CinematicBlock

Wrapper component cho mọi cinematic section. Tự handle: bg đen, padding lớn, kanji watermark, transition vào và ra.

```tsx
<CinematicBlock kanjiWatermark="道">
  <h2>...</h2>
  <p>...</p>
</CinematicBlock>
```

### 6.8 ZenBlock

```tsx
<ZenBlock variant="washi" eyebrow={{ numeral: "一", label: "VỀ CHÚNG TÔI" }}>
  ...
</ZenBlock>
```

---

## 7. Image guidelines

- Tất cả ảnh dùng `<Picture>` component từ `shared/ui/picture.tsx` — auto generate AVIF + WebP + JPEG fallback.
- Aspect ratio chuẩn: `3/4` (portrait), `16/9` (cinematic), `1/1` (avatar).
- Cinematic block: ảnh black & white grading, hoặc ảnh có grain nhẹ (CSS filter `contrast(1.05) saturate(0.9)`).
- Lazy load tất cả ảnh below-the-fold.
- Không dùng ảnh stock chung chung — phải là ảnh thật của võ đường. Nếu chưa có, dùng placeholder kanji thay thế.

---

## 8. Iconography

Dùng **Lucide React** (đã có trong project). Quy tắc:

- Stroke width 1.5 (mặc định 2 quá đậm cho zen).
- Size 16px / 20px / 24px — không dùng size khác.
- Color inherit text — không hardcode.

Cho icons đặc thù võ thuật (đai, kata, dojo): SVG custom trong `shared/ui/icons/`.

---

## 9. Dark mode

Auto qua `@media (prefers-color-scheme: dark)`. Không có toggle, không lưu preference.

```css
:root {
  /* light tokens */
}

@media (prefers-color-scheme: dark) {
  :root {
    /* dark tokens override */
  }
}
```

Test mỗi component ở cả 2 mode — invert không đơn thuần là "đen ↔ trắng": `--color-washi` light là kem nhạt, dark là đen ấm (`#1a1815`), không phải đen tuyệt đối.

---

## 10. Multi-language (VI/EN/JP)

- Default: `vi`. Path không có prefix: `/`, `/about`.
- EN: `/en/`, `/en/about`.
- JP: `/jp/`, `/jp/about`.
- Switcher ở header: `VI · EN · 日本語`.
- Font tự động: JP dùng `font-kanji` cho heading, body Inter (có hỗ trợ JP glyphs).
- Translation files: `shared/i18n/locales/{vi,en,ja}/{common,home,about,...}.json`.
- Không dịch tên riêng (Tâm Việt, Karate, Kata, Kumite, Dojo).

---

## 11. Accessibility

- Contrast tối thiểu **AA** (4.5:1 body, 3:1 large text). Test mỗi token combo.
- Focus visible: outline 2px `--color-shu-seal` offset 2px — không bao giờ remove.
- Skip-to-content link đầu mỗi page.
- Heading hierarchy đúng: h1 → h2 → h3 không skip level.
- Form: label, error, aria-describedby đầy đủ.
- Reduce motion respect.
- Keyboard navigation tested.

---

## 12. Don't list

Không bao giờ:

- Gradient nhiều màu (chỉ subtle gradient cinematic ↔ zen transition)
- Drop shadow (trừ focus ring)
- Glow / neon
- Bouncy spring animation
- Border-radius full pill cho button
- Bold weight 700+
- ALL CAPS body text
- Title Case heading
- Emoji trong UI (dùng SVG icon)
- Stock photo chung chung
- Carousel auto-play (user phải chủ động)
