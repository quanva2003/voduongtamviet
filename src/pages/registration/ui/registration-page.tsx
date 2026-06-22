import { useTranslation } from "react-i18next";

import { locations } from "@/entities/location";
import { RegistrationForm } from "@/features/registration-form";
import { SeoMeta } from "@/features/seo-meta";
import type { Locale } from "@/shared/i18n";
import { Container, SectionEyebrow } from "@/shared/ui";
import { CourseInfo, courseInfoData } from "@/widgets/course-info";
import { CtaSection } from "@/widgets/cta-section";
import { HeroZen } from "@/widgets/hero-zen";
import { LocationsMap } from "@/widgets/locations-map";

import { REGISTRATION_SEO_KEYS } from "../model/seo";

export function Component() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const localeLocations = locations[locale] ?? locations.vi;
  const courseItems = courseInfoData[locale] ?? courseInfoData.vi;

  return (
    <>
      <SeoMeta
        title={t(REGISTRATION_SEO_KEYS.title)}
        description={t(REGISTRATION_SEO_KEYS.description)}
        canonicalPath={REGISTRATION_SEO_KEYS.canonicalPath}
        ogImage={REGISTRATION_SEO_KEYS.ogImage}
      />
      <HeroZen
        eyebrow={{ numeral: "一", label: "GHI DANH" }}
        headline={t("registration.hero.headline")}
        subline={t("registration.hero.subline")}
      />

      <section className="bg-washi py-[var(--space-24)]">
        <Container size="md">
          <SectionEyebrow numeral="一" label={t("registration.sections.formTitle")} className="mb-3" />
          <h2 className="mb-10 font-display text-[length:var(--text-h2)] text-text-primary">
            {t("registration.sections.formTitle")}
          </h2>
          <RegistrationForm />
        </Container>
      </section>

      <LocationsMap
        locations={localeLocations}
        eyebrow={{ numeral: "二", label: t("registration.sections.locationsTitle") }}
        title={t("registration.sections.locationsTitle")}
      />

      <CourseInfo
        items={courseItems}
        eyebrow={{ numeral: "三", label: t("registration.sections.courseTitle") }}
        title={t("registration.sections.courseTitle")}
      />

      <CtaSection
        headline={t("registration.cta.headline")}
        paragraph={t("registration.cta.paragraph")}
        cta={{ label: t("registration.cta.cta"), href: "/schedule" }}
        variant="zen"
        kanjiWatermark="心"
      />
    </>
  );
}
