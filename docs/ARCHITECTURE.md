# ARCHITECTURE — Feature-Sliced Design

> Reference: https://feature-sliced.design

---

## 1. Layers (top → bottom)

```
app       → Khởi tạo, providers, routing, global styles
pages     → Route-level component, mỏng, chỉ compose
widgets   → Block UI lớn, độc lập, tái sử dụng
features  → Hành động user-driven (đăng ký, filter, book)
entities  → Business object (instructor, location, article...)
shared    → Reusable, không có business logic
```

**Iron rule:** Layer trên chỉ import từ layer **dưới**. Không bao giờ ngược, không bao giờ ngang.

```
✅ pages/home  imports widgets/hero-cinematic
✅ widgets/hero-cinematic  imports entities/article
✅ entities/article  imports shared/ui/card
❌ entities/article  imports widgets/hero-cinematic  (ngược)
❌ widgets/hero-cinematic  imports widgets/site-footer  (ngang)
❌ shared/ui/button  imports features/registration-form  (ngược)
```

Enforce qua `eslint-plugin-boundaries` — config trong sprint 0.

---

## 2. Slice anatomy

Mỗi slice (1 folder trong layer) có cấu trúc:

```
features/registration-form/
├── ui/                      # React components
│   ├── registration-form.tsx
│   ├── form-field.tsx
│   └── success-message.tsx
├── model/                   # State, schema, business logic
│   ├── schema.ts            # zod schema
│   ├── use-registration.ts  # custom hook
│   └── types.ts
├── lib/                     # Helpers, pure functions
│   └── format-phone.ts
├── api/                     # External calls (rỗng cho static)
│   └── submit.ts
└── index.ts                 # Public API ⭐
```

**`index.ts` là cổng duy nhất.** Code ngoài chỉ được import từ `index.ts`, không reach into `ui/`, `model/` trực tiếp.

```ts
// features/registration-form/index.ts
export { RegistrationForm } from "./ui/registration-form";
export type { RegistrationData } from "./model/types";
// KHÔNG export schema, hook nội bộ, lib helpers
```

---

## 3. Layer details

### 3.1 `app/`

```
app/
├── providers/
│   ├── router-provider.tsx
│   ├── i18n-provider.tsx
│   └── motion-provider.tsx       # global Framer config + reduce-motion
├── routes/
│   ├── routes.tsx                # route config (lazy load)
│   └── route-paths.ts            # /, /about, /registration...
├── styles/
│   ├── reset.css
│   ├── tokens.css                # CSS variables (design system)
│   ├── fonts.css
│   └── globals.css
└── App.tsx                       # compose providers + router
```

`App.tsx` trong v2 không quá 30 dòng. Mọi logic init đẩy vào provider.

### 3.2 `pages/`

Mỗi page là 1 folder, chỉ compose widget. **Không** chứa business logic, không trực tiếp render UI element nhỏ.

```
pages/home/
├── ui/
│   └── home-page.tsx       # chỉ <HeroCinematic /> <Benefits /> ...
├── model/
│   └── seo.ts              # SEO data cho page
└── index.ts
```

**Anti-pattern:** page 200+ dòng JSX. Nếu thấy vậy → tách widget.

### 3.3 `widgets/`

Block UI lớn, có thể dùng ở nhiều page. Widget được **compose từ entities + features + shared/ui**.

Quy tắc: widget có thể stateful nhưng state chỉ về UI (open/close, current slide). Business state ở features/entities.

Ví dụ `widgets/hero-cinematic/` không nên fetch data — nhận data qua props từ page.

### 3.4 `features/`

User-driven action. Ví dụ:

- `registration-form` — submit form đăng ký
- `book-class` — đặt lịch học
- `article-filter` — filter article theo category
- `language-switcher` — đổi VI/EN/JP
- `scroll-to-top` — nút back to top
- `seo-meta` — set meta tags

Feature **luôn có `model/`** vì có state/logic. Nếu không có model → đó không phải feature, là widget hoặc shared/ui.

### 3.5 `entities/`

Business object. Mỗi entity:

- `model/types.ts` — TypeScript type
- `model/data.ts` — static data (vì project static-content)
- `ui/{entity}-card.tsx` — render 1 instance

```
entities/instructor/
├── ui/
│   ├── instructor-card.tsx
│   └── instructor-avatar.tsx
├── model/
│   ├── types.ts        # type Instructor
│   └── data.ts         # const INSTRUCTORS: Instructor[]
└── index.ts
```

Entities trong project này:

- `instructor` — võ sư
- `location` — cơ sở võ đường
- `article` — bài viết
- `value` — giá trị cốt lõi (rèn tâm/thân/thuật)
- `belt` — đai và cấp độ
- `class-schedule` — lịch học
- `class-booking` — booking record (state in localStorage)

### 3.6 `shared/`

Không business logic. Reusable mọi nơi.

```
shared/
├── ui/                  # Button, Input, Card, EnsoCircle, KanjiAccent...
├── lib/                 # cn(), formatDate, motion presets, hooks
├── config/              # site config (URL, social, contact)
├── i18n/                # i18next setup + locales/
├── assets/              # images, icons, fonts
└── constants/           # routes path, social
```

**`shared/ui/` không bao giờ import từ entities/features/widgets.**

---

## 4. Public API discipline

Mỗi slice export đúng những gì cần. Nếu export quá nhiều → coupling cao, refactor đau.

```ts
// ✅ Tốt — chỉ component + type
// features/registration-form/index.ts
export { RegistrationForm } from "./ui/registration-form";
export type { RegistrationData } from "./model/types";

// ❌ Xấu — leak chi tiết internal
export * from "./ui/registration-form";
export * from "./model/use-registration";
export * from "./lib/validators";
```

ESLint rule (`no-restricted-imports`) chặn import từ subfolder của slice khác:

```
@/features/registration-form        ✅
@/features/registration-form/ui/x   ❌
```

---

## 5. Path alias

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/app/*": ["src/app/*"],
      "@/pages/*": ["src/pages/*"],
      "@/widgets/*": ["src/widgets/*"],
      "@/features/*": ["src/features/*"],
      "@/entities/*": ["src/entities/*"],
      "@/shared/*": ["src/shared/*"]
    }
  }
}
```

Vite config (vite-tsconfig-paths plugin):

```ts
import tsconfigPaths from "vite-tsconfig-paths";
export default { plugins: [react(), tsconfigPaths()] };
```

---

## 6. Naming conventions

| Item                      | Convention              | Ví dụ                                   |
| ------------------------- | ----------------------- | --------------------------------------- |
| Folder                    | kebab-case              | `registration-form/`, `hero-cinematic/` |
| Component file            | kebab-case              | `registration-form.tsx`                 |
| Component name            | PascalCase              | `RegistrationForm`                      |
| Hook                      | camelCase, `use` prefix | `useRegistration`                       |
| Type/Interface            | PascalCase              | `Instructor`, `RegistrationData`        |
| Constant                  | SCREAMING_SNAKE         | `INSTRUCTORS`, `ROUTES`                 |
| CSS class (Tailwind only) | n/a                     | (no CSS modules)                        |
| Test file                 | sibling `.test.tsx`     | `registration-form.test.tsx`            |
| Story file                | sibling `.stories.tsx`  | `button.stories.tsx`                    |

---

## 7. Component pattern

```tsx
// ✅ Modern function component, không React.FC
import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export function HeroCinematic({ title, children }: Props) {
  return (
    <section>
      {title}
      {children}
    </section>
  );
}
```

**Không dùng `React.FC`** — không cần type children mặc định, lệch convention React 19.

---

## 8. State management

Project static, không cần Redux/Zustand global. Strategy:

- Component state → `useState`/`useReducer`
- Feature state → custom hook trong `model/`
- Cross-feature state (i18n, theme detect) → React Context trong `app/providers/`
- Persistent (booking) → `localStorage` qua hook `useLocalStorage` trong `shared/lib/`
- Server state → không có (static). Khi có backend tương lai → thêm TanStack Query.

---

## 9. Testing strategy

| Layer        | Test depth                                   | Tool                      |
| ------------ | -------------------------------------------- | ------------------------- |
| `shared/ui/` | Snapshot + render + a11y                     | Vitest + RTL + jest-axe   |
| `entities/`  | Render card với mock data                    | Vitest + RTL              |
| `features/`  | User interaction (form submit, filter click) | Vitest + RTL + user-event |
| `widgets/`   | Smoke render                                 | Vitest + RTL              |
| `pages/`     | Route render + SEO meta                      | Vitest + RTL              |

Coverage target: 60% lines toàn project, 80% cho `features/` và `shared/lib/`.

E2E (optional, sprint 5+): Playwright cho flow đăng ký + booking.

---

## 10. Dependency rule check

Trong CI:

1. `eslint-plugin-boundaries` — chặn import sai layer.
2. `eslint-plugin-import` rule `no-cycle` — không circular dep.
3. `dependency-cruiser` (optional) — vẽ graph dependency.

Config example trong sprint 0 prompt.

---

## 11. Khi nào tạo slice mới?

- **Reused 2+ chỗ** → cân nhắc tách (rule of three áp dụng)
- **>200 dòng** → chắc chắn tách
- **Có state riêng** → feature
- **Là noun của business** → entity
- **Là block UI tự đứng được** → widget

Khi nghi ngờ: bắt đầu inline trong page, refactor ra khi reuse lần 2.
