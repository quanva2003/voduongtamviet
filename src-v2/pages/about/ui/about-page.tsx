import { useTranslation } from "react-i18next";

import { instructors } from "@/entities/instructor";
import { values } from "@/entities/value";
import { SeoMeta } from "@/features/seo-meta";
import type { Locale } from "@/shared/i18n";
import { CtaSection } from "@/widgets/cta-section";
import { HeroZen } from "@/widgets/hero-zen";
import { InstructorsList } from "@/widgets/instructors-list";
import { JourneyTimeline, type TimelineItem } from "@/widgets/journey-timeline";
import { MissionStatement } from "@/widgets/mission-statement";
import { ValuesGrid } from "@/widgets/values-grid";

import { ABOUT_SEO_KEYS } from "../model/seo";

export function Component() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const localeInstructors = instructors[locale] ?? instructors.vi;
  const localeValues = values[locale] ?? values.vi;
  const timelineItems = t("about.journey.items", { returnObjects: true }) as TimelineItem[];

  return (
    <>
      <SeoMeta
        title={t(ABOUT_SEO_KEYS.title)}
        description={t(ABOUT_SEO_KEYS.description)}
        canonicalPath={ABOUT_SEO_KEYS.canonicalPath}
        ogImage={ABOUT_SEO_KEYS.ogImage}
      />
      <HeroZen
        eyebrow={{ numeral: "一", label: "GIỚI THIỆU" }}
        headline={t("about.hero.headline")}
        subline={t("about.hero.subline")}
      />
      <MissionStatement
        eyebrow={{ numeral: "心", label: t("about.mission.eyebrow") }}
        title={t("about.mission.title")}
        paragraphs={t("about.mission.paragraphs", { returnObjects: true }) as string[]}
      />
      <JourneyTimeline
        eyebrow={{ numeral: "歴", label: t("about.journey.eyebrow") }}
        title={t("about.journey.title")}
        items={timelineItems}
      />
      <ValuesGrid
        values={localeValues}
        eyebrow={{ numeral: "道", label: t("about.values.eyebrow") }}
        title={t("about.values.title")}
      />
      <InstructorsList
        instructors={localeInstructors}
        variant="full"
        eyebrow={{ numeral: "師", label: t("about.instructors.eyebrow") }}
        title={t("about.instructors.title")}
      />
      <CtaSection
        headline={t("about.cta.headline")}
        paragraph={t("about.cta.paragraph")}
        cta={{ label: t("about.cta.cta"), href: "/registration" }}
        variant="cinematic"
        kanjiWatermark="武"
      />
    </>
  );
}
