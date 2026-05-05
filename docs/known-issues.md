# Known Issues

Tracked cross-browser and known limitations as of v2.0.0 (2026-05-05).

---

## Cross-browser

| Issue | Browser | Status | Workaround |
|-------|---------|--------|------------|
| AVIF images not displayed | Safari < 16 | Known — AVIF unsupported | `<picture>` falls back to WebP, then JPEG automatically |
| CSS `color-mix()` in Tailwind 4 | Firefox < 113 | Known | Token fallbacks use solid values |
| `scrollbar-gutter` property | Safari iOS < 16 | Minor layout shift possible | Accepted; no user-facing impact |
| `:focus-visible` on click | Firefox | Some elements show focus ring on click (not keyboard) | Firefox behavior; no fix needed |

---

## Functional

| Issue | Description | Priority | Notes |
|-------|-------------|----------|-------|
| Booking flow: no server persistence | Bookings stored in localStorage only; lost on device change | Deferred | Backend integration planned post-v2 |
| Registration form: no email delivery | Form saves to localStorage; no email confirmation sent | Deferred | Requires backend/email service |
| Article images | Articles use placeholder/text content; real images not uploaded yet | Low | Content team task |

---

## i18n

See `docs/i18n-todo.md` for outstanding EN/JA translation gaps.

---

## Performance notes

- Lighthouse runs should be performed on the Vercel production preview URL, not localhost.
  Local Lighthouse scores will be higher (no network throttling).
- Noto Serif JP is loaded globally. Route-conditional loading is deferred to a future sprint
  once JP locale traffic justifies the complexity.

---

## Accessibility (post-audit)

- Screen reader testing performed with NVDA (Windows). VoiceOver (macOS/iOS) not yet verified.
- Booking multi-step flow does not announce step changes to screen readers with `aria-live`.
  Planned fix in v2.0.1.
