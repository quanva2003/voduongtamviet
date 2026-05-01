import { useTranslation } from "react-i18next";

import { articles } from "@/entities/article";
import { instructors } from "@/entities/instructor";
import { values } from "@/entities/value";
import { localBusinessJsonLd, SeoMeta } from "@/features/seo-meta";
import type { Locale } from "@/shared/i18n";
import { ArticlesGrid } from "@/widgets/articles-grid";
import { BenefitsGrid } from "@/widgets/benefits-grid";
import { CtaSection } from "@/widgets/cta-section";
import { HeroCinematic } from "@/widgets/hero-cinematic";
import { InstructorsList } from "@/widgets/instructors-list";
import { MissionStatement } from "@/widgets/mission-statement";

import { HOME_SEO_KEYS } from "../model/seo";

export function Component() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const localeInstructors = instructors[locale] ?? instructors.vi;
  const localeArticles = (articles[locale] ?? articles.vi).slice(0, 3);
  const localeValues = values[locale] ?? values.vi;

  return (
    <>
      <SeoMeta
        title={t(HOME_SEO_KEYS.title)}
        description={t(HOME_SEO_KEYS.description)}
        canonicalPath={HOME_SEO_KEYS.canonicalPath}
        ogImage={HOME_SEO_KEYS.ogImage}
        jsonLd={localBusinessJsonLd()}
      />
      <HeroCinematic
        headline={t("home.hero.headline")}
        headlineItalic={t("home.hero.headlineItalic")}
        subline={t("home.hero.subline")}
        ctaPrimary={{ label: t("home.hero.cta"), href: "/registration" }}
        ctaSecondary={{ label: t("home.hero.ctaSecondary"), href: "/about" }}
        kanjiWatermark="道"
      />
      <MissionStatement
        title={t("home.mission.title")}
        paragraphs={t("home.mission.paragraphs", { returnObjects: true }) as string[]}
      />
      <BenefitsGrid
        values={localeValues}
        eyebrow={{ numeral: "三", label: t("home.benefits.eyebrow") }}
        title={t("home.benefits.title")}
      />
      <InstructorsList
        instructors={localeInstructors}
        variant="preview"
        eyebrow={{ numeral: "師", label: t("home.instructors.eyebrow") }}
        title={t("home.instructors.title")}
        viewAllHref="/about"
      />
      <ArticlesGrid
        articles={localeArticles}
        eyebrow={{ numeral: "文", label: t("home.articles.eyebrow") }}
        title={t("home.articles.title")}
      />
      <CtaSection
        headline={t("home.cta.headline")}
        paragraph={t("home.cta.paragraph")}
        cta={{ label: t("home.cta.cta"), href: "/registration" }}
        variant="zen"
      />
    </>
  );
}
