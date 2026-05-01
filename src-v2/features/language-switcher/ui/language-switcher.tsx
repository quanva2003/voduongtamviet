import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import type { Locale } from "@/shared/i18n";
import { cn } from "@/shared/lib";

import { parseLocaleFromPath, prefixLocale } from "../lib/locale-routing";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "vi", label: "VI" },
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
];

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocale = i18n.language as Locale;

  const switchLocale = (locale: Locale) => {
    const { pathnameWithoutLocale } = parseLocaleFromPath(location.pathname);
    const newPath = prefixLocale(pathnameWithoutLocale, locale);
    void i18n.changeLanguage(locale);
    localStorage.setItem("preferred-locale", locale);
    navigate(newPath);
  };

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label="Language selection"
    >
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          aria-pressed={currentLocale === code}
          className={cn(
            "rounded px-2 py-0.5 text-[length:var(--text-body-sm)] transition-colors",
            currentLocale === code ? "bg-shu-seal text-washi" : "text-washi/60 hover:text-washi",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
