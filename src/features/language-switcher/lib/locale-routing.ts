import type { Locale } from "@/shared/i18n";

const VALID_LOCALES: readonly Locale[] = ["vi", "en", "ja"];
const LOCALE_PREFIXES: Record<Locale, string> = { vi: "", en: "/en", ja: "/ja" };

export function parseLocaleFromPath(pathname: string): {
  locale: Locale;
  pathnameWithoutLocale: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && first !== "vi" && (VALID_LOCALES as readonly string[]).includes(first)) {
    const locale = first as Locale;
    const rest = segments.slice(1).join("/");
    return { locale, pathnameWithoutLocale: rest ? `/${rest}` : "/" };
  }

  return { locale: "vi", pathnameWithoutLocale: pathname };
}

export function prefixLocale(pathname: string, locale: Locale): string {
  const prefix = LOCALE_PREFIXES[locale];
  if (pathname === "/") return prefix ? prefix : "/";
  return `${prefix}${pathname}`;
}

export function getAlternateUrls(pathname: string): Record<Locale, string> {
  const { pathnameWithoutLocale } = parseLocaleFromPath(pathname);
  return {
    vi: pathnameWithoutLocale,
    en: prefixLocale(pathnameWithoutLocale, "en"),
    ja: prefixLocale(pathnameWithoutLocale, "ja"),
  };
}
