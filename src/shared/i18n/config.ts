import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import jaCommon from "./locales/ja/common.json";
import viCommon from "./locales/vi/common.json";

const resources = {
  vi: { common: viCommon },
  en: { common: enCommon },
  ja: { common: jaCommon },
} as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi",
    fallbackLng: "vi",
    defaultNS: "common",
    ns: ["common"],
    supportedLngs: ["vi", "en", "ja"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
    },
  });

export default i18n;
