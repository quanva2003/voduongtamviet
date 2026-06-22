import { useTranslation } from "react-i18next";

import { articles } from "@/entities/article";
import { instructors } from "@/entities/instructor";
import { values } from "@/entities/value";
import { localBusinessJsonLd, SeoMeta } from "@/features/seo-meta";
import type { Locale } from "@/shared/i18n";
import { CinematicBlock, Container, SakuraMotif } from "@/shared/ui";
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
      <CinematicBlock kanjiWatermark="心">
        <Container size="md" className="flex flex-col items-center text-center">
          <SakuraMotif size={48} className="mb-8" />
          <p className="font-display text-[length:var(--text-display-md)] leading-[1.15]">
            {t("home.philosophy.quote")}{" "}
            <em className="text-gold italic">{t("home.philosophy.quoteItalic")}</em>
          </p>
        </Container>
      </CinematicBlock>
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
