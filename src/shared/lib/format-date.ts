type Locale = "vi" | "en" | "ja";

type FormatDateOptions = {
  locale?: Locale;
  style?: "short" | "medium" | "long" | "full";
};

const localeMap: Record<Locale, string> = {
  vi: "vi-VN",
  en: "en-US",
  ja: "ja-JP",
};

const dateStyleMap: Record<NonNullable<FormatDateOptions["style"]>, Intl.DateTimeFormatOptions> = {
  short: { day: "2-digit", month: "2-digit", year: "numeric" },
  medium: { day: "numeric", month: "long", year: "numeric" },
  long: { weekday: "long", day: "numeric", month: "long", year: "numeric" },
  full: { dateStyle: "full" },
};

export function formatDate(
  date: Date | string | number,
  { locale = "vi", style = "medium" }: FormatDateOptions = {},
): string {
  const d = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(localeMap[locale], dateStyleMap[style]).format(d);
}
