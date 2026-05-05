import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import jaCommon from "./locales/ja/common.json";
import viCommon from "./locales/vi/common.json";

const resources = {
  vi: { common: viCommon },
  en: { common: enCommon },
  ja: { common: jaCommon },
} as const;

function getInitialLocale(): "vi" | "en" | "ja" {
  if (typeof window === "undefined") return "vi";

  // URL is authoritative: /en/... or /ja/...
  const segments = window.location.pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first === "en" || first === "ja") return first;

  // Saved user preference (set by language switcher)
  try {
    const stored = localStorage.getItem("preferred-locale");
    if (stored === "en" || stored === "ja" || stored === "vi") {
      return stored as "vi" | "en" | "ja";
    }
  } catch {
    // localStorage not available
  }

  return "vi";
}

void i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLocale(),
  fallbackLng: "vi",
  defaultNS: "common",
  ns: ["common"],
  supportedLngs: ["vi", "en", "ja"],
  interpolation: { escapeValue: false },
});

export default i18n;
