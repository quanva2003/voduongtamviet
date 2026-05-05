# i18n Outstanding Work

Tracks translation gaps as of v2.0.0.

## Status summary

| Locale | UI chrome | Page titles/descriptions | Page body content |
|--------|-----------|--------------------------|-------------------|
| vi (Vietnamese) | ✅ Complete | ✅ Complete | ✅ Complete |
| en (English) | ✅ Complete | ⚠️ Placeholder | ⚠️ Placeholder |
| ja (Japanese) | ✅ Complete | ⚠️ Placeholder | ⚠️ Placeholder |

Placeholders are marked with `[EN]` / `[JA]` prefix so they're easy to grep.

---

## Finding placeholders

```bash
# Find all EN placeholders
grep -r '"\[EN\]' src/shared/i18n/locales/en/

# Find all JA placeholders
grep -r '"\[JA\]' src/shared/i18n/locales/ja/
```

---

## Priority order for translation

1. **SEO-critical** (meta title + description per page) — affects search ranking
   - `home.title`, `home.description`
   - `about.title`, `about.description`
   - `registration.title`, `registration.description`
   - `articles.title`, `articles.description`

2. **Conversion-critical** (registration + booking page body)
   - `registration.hero.*`
   - `booking.*`

3. **Nice to have** (about page body, article content)
   - `about.mission.*`, `about.values.*`, `about.journey.*`

---

## Process for adding real translations

1. Get translated text from translator/native speaker.
2. Open `src/shared/i18n/locales/{locale}/common.json`.
3. Replace the `[EN]` / `[JA]` prefixed string with the real text.
4. Run `npm run dev` and switch locale to verify rendering.
5. Check for text overflow (Japanese is typically shorter; English can be longer than Vietnamese).
6. Commit: `feat(i18n): add EN translations for home + registration pages`.

---

## Notes

- All date/number formatting goes through `shared/lib/format-date.ts` — locale-aware via Intl.
- Phone number placeholder is Vietnam-specific (`0912 345 678`). For EN/JA locales, update the placeholder in `registration.form.phonePlaceholder`.
- Japanese route prefix is `/ja` (not `/jp` — ISO 639-1).
