# CONVENTIONS — Võ Đường Tâm Việt v3

> ⚠️ Đọc file này trước mọi task. Áp dụng tất cả rules trong từng dòng code.
> Mood cần thể hiện: Mạnh mẽ · Kỷ luật · Premium · Thân thiện · Nghệ thuật · Tối giản · Dramatic.

---

## 1. TypeScript

- **Strict mode** — không `any`, không `as any`, không `@ts-ignore` không giải thích
- Không `React.FC` — dùng function component thông thường với typed props interface
- Props interface đặt ngay trên component
- `type` cho union/alias, `interface` cho object shape
- Generic typing tường minh: `useState<string>('')` khi type không rõ

```typescript
// ✅ Đúng
interface HeroProps {
  title: string;
  subtitle?: string;
  kanjiChar?: string;
  children: React.ReactNode;
}
export function Hero({ title, subtitle, kanjiChar, children }: HeroProps) { ... }

// ❌ Sai
const Hero: React.FC<{ title: string }> = ({ title }) => { ... }
```

---

## 2. File & Folder naming

| Item             | Convention               | Ví dụ                             |
| ---------------- | ------------------------ | --------------------------------- |
| Folder           | kebab-case               | `hero-cinematic/`, `site-header/` |
| Component file   | kebab-case               | `hero-cinematic.tsx`              |
| Component export | PascalCase named         | `export function HeroCinematic`   |
| Hook             | camelCase + `use` prefix | `useRegistration`                 |
| Type/Interface   | PascalCase               | `Instructor`, `CardVariant`       |
| Constant         | SCREAMING_SNAKE          | `INSTRUCTORS`, `ROUTES`           |
| Test file        | sibling                  | `button.test.tsx`                 |

**Không dùng default export cho component** — luôn named export.

---

## 3. FSD Import discipline

```
app → pages → widgets → features → entities → shared
```

- Chỉ import từ layer dưới — không bao giờ ngược
- Chỉ import từ `index.ts` của slice — không reach vào `/ui/`, `/model/`
- `@/` alias cho tất cả cross-layer import

```typescript
// ✅ Đúng
import { RegistrationForm } from "@/features/registration-form";
import { Instructor } from "@/entities/instructor";
import { Button } from "@/shared/ui/button";

// ❌ Sai
import { RegistrationForm } from "@/features/registration-form/ui/form";
import { useRegistration } from "@/features/registration-form/model/use-registration";
```

---

## 4. Component file structure

Mỗi file theo thứ tự:

1. External imports (framer-motion, react-router, etc.)
2. Internal imports (@/ aliases, từ cao → thấp layer)
3. Types/Interfaces
4. Local constants (nếu có)
5. Component function
6. Helper functions nhỏ (nếu lớn → tách sang `lib/`)

---

## 5. Styling — Token-first, không hardcode

- **Tailwind** cho spacing, layout, flex, grid
- **CSS custom properties** cho màu sắc và typography từ design system
- **KHÔNG hardcode hex** trong Tailwind arbitrary value hoặc inline style
- `cn()` utility để merge class conditional

```typescript
// ✅ Đúng
<section
  className={cn("flex flex-col gap-6 py-24", isFullBleed && "min-h-screen")}
  style={{ background: 'var(--color-sumi-ink)', color: 'var(--color-washi)' }}
>

// ❌ Sai
<section style={{ background: '#1a1815', color: '#faf7f0', padding: '96px 0' }}>
<section className="bg-[#1a1815] text-[#faf7f0]">
```

**Cinematic block** phải dùng `--color-sumi-ink` — không `bg-black` hay `bg-gray-900`.
**Washi background** phải dùng `--color-washi` — không `bg-white` hay `bg-amber-50`.

---

## 6. Typography rules

```typescript
// Heading display (hero, section title) — luôn font-display
<h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-xl)',
              fontWeight: 400, lineHeight: 1.05 }}>

// Eyebrow — luôn ALL CAPS + letter-spacing
<span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)',
               fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>

// Kanji decorative — luôn font-kanji, weight 400
<span style={{ fontFamily: 'var(--font-kanji)', fontSize: 'var(--text-kanji-xl)',
               fontWeight: 400, opacity: 0.08 }}>
```

Vi phạm nghiêm trọng (phá vỡ mood Premium + Tối giản):

- `fontWeight: 700` hoặc cao hơn
- `fontSize` không dùng token
- Heading dùng `font-body` thay `font-display`
- Kanji dùng `fontWeight: 700`

---

## 7. Animation — Chỉ dùng motion tokens

```typescript
// ✅ Đúng — dùng variant từ shared/lib/motion.ts
import { fadeInUp, cinematicReveal, staggerChildren } from "@/shared/lib/motion";

<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}   // BẮT BUỘC cho scroll-triggered
>

// ❌ Sai — tự define inline
<motion.div
  animate={{ y: 0 }}
  initial={{ y: 20 }}
  transition={{ type: "spring", stiffness: 100 }}   // Spring là vi phạm
>

// ❌ Sai — thiếu viewport once
<motion.div whileInView={{ opacity: 1 }}>  // Animate lại mỗi lần scroll
```

Rules cứng:

- Không `type: "spring"` ở bất kỳ đâu
- Luôn `viewport={{ once: true }}` cho scroll animation
- Hover transition: tối đa 300ms
- Cinematic hero dùng `cinematicReveal` — không dùng `fadeInUp`
- Stagger children: `staggerChildren: 0.12`

---

## 8. Component-specific rules

### Button

```typescript
// Primary: sumi-ink → hover shu-seal, kết bằng →
<Button variant="primary">Đăng ký ngay →</Button>

// Secondary: transparent + border-strong
// Ghost: chỉ text + underline hover

// Radius: var(--radius-md) = 4px — KHÔNG full pill
// Size: sm=32px, md=40px, lg=48px height
```

### Form inputs

```typescript
// border-bottom only — không border 4 cạnh
// focus: border-bottom 2px shu-seal — KHÔNG glow, KHÔNG box-shadow
// label: eyebrow style phía trên
// error: 12px, color: var(--color-danger)
```

### Cinematic vs Zen sections

```typescript
// CinematicBlock phải có kanji watermark
<CinematicBlock kanjiWatermark="道">   // ✅

// ZenBlock phải có eyebrow
<ZenBlock eyebrow={{ numeral: "一", label: "VỀ CHÚNG TÔI" }}>  // ✅

// KHÔNG bao giờ:
<CinematicBlock>...</CinematicBlock>
<CinematicBlock>...</CinematicBlock>   // ❌ Hai cinematic liền nhau
```

---

## 9. Accessibility

- Focus visible: `outline: 2px solid var(--color-shu-seal); outline-offset: 2px` — không bao giờ xóa
- Tất cả ảnh decorative: `aria-hidden="true"` hoặc `alt=""`
- Ảnh content: alt text có nghĩa, tiếng Việt
- Heading hierarchy: h1 → h2 → h3, không skip level
- Form: label + aria-describedby cho error
- Skip-to-content link ở đầu mỗi page
- Contrast tối thiểu AA (4.5:1 body, 3:1 large text)

---

## 10. i18n

- Không hardcode text tiếng Việt trong JSX — luôn `t('key')`
- Key format: `namespace.section.element` — ví dụ `home.hero.title`
- Không dịch: Tâm Việt, Karate, Kata, Kumite, Dojo, Sensei
- Locale files: `shared/i18n/locales/{vi,en,ja}/{namespace}.json`

---

## 11. Hard rules — KHÔNG BAO GIỜ

```
❌ Gradient nhiều màu
❌ box-shadow / drop-shadow (ngoài focus ring)
❌ Glow, neon, blur decoration
❌ type: "spring" trong animation
❌ Carousel auto-play
❌ border-radius: 9999px trên button (dùng --radius-md: 4px)
❌ font-weight 600 / 700 / 800
❌ ALL CAPS cho body text
❌ Title Case cho heading tiếng Việt
❌ Emoji trong UI component (dùng Lucide React icon)
❌ Hardcode color hex trong JSX hoặc CSS
❌ React.FC
❌ Default export cho component
❌ Import trực tiếp vào subfolder của slice khác
❌ Hai cinematic block liền nhau
❌ Animation không có viewport once:true
❌ console.log trong production code
```

---

## 12. Checklist cuối sprint

Trước khi đóng sprint:

```bash
npm run typecheck   # phải pass — 0 error
npm run lint        # phải pass — 0 FSD violation, 0 error
npm test            # phải pass
npm run build       # phải build thành công

# Manual checks:
# [ ] Dark mode: test ít nhất 3 page
# [ ] Mobile 375px: không horizontal overflow
# [ ] Không hai cinematic block liền nhau trên bất kỳ page nào
# [ ] Tất cả scroll animation có viewport once:true
# [ ] Không hardcode hex (grep -r "#[0-9a-fA-F]\{6\}" src/ --include="*.tsx")
```
