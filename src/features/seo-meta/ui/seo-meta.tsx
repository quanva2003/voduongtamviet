import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import type { Locale } from "@/shared/i18n";

const ORIGIN = "https://tamviet.vn";

interface SeoMetaProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

export function SeoMeta({
  title,
  description,
  canonicalPath = "/",
  ogImage,
  noindex = false,
  jsonLd,
}: SeoMetaProps) {
  const { i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const prefix = locale === "vi" ? "" : `/${locale}`;
  const canonical = `${ORIGIN}${prefix}${canonicalPath === "/" ? "" : canonicalPath}`;

  // Set html lang attribute
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const viUrl = `${ORIGIN}${canonicalPath}`;
  const enUrl = `${ORIGIN}/en${canonicalPath === "/" ? "" : canonicalPath}`;
  const jaUrl = `${ORIGIN}/ja${canonicalPath === "/" ? "" : canonicalPath}`;

  return (
    <>
      {/* React 19: <title> and <meta> hoist to <head> automatically */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={`${ORIGIN}${ogImage}`} />}
      {ogImage && <meta property="og:image:width" content="1200" />}
      {ogImage && <meta property="og:image:height" content="630" />}
      {ogImage && <meta name="twitter:card" content="summary_large_image" />}
      {ogImage && <meta name="twitter:image" content={`${ORIGIN}${ogImage}`} />}
      <link rel="alternate" hrefLang="vi" href={viUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ja" href={jaUrl} />
      <link rel="alternate" hrefLang="x-default" href={viUrl} />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
