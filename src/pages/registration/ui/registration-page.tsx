import { useTranslation } from "react-i18next";

import { locations } from "@/entities/location";
import { RegistrationForm } from "@/features/registration-form";
import { SeoMeta } from "@/features/seo-meta";
import type { Locale } from "@/shared/i18n";
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
        <div className="mx-auto max-w-[var(--container-2xl)] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr]">
            <div>
              <RegistrationForm />
            </div>
            <aside className="flex flex-col gap-12">
              <LocationsMap locations={localeLocations} />
            </aside>
          </div>
        </div>
      </section>

      <CourseInfo items={courseItems} />

      <CtaSection
        headline={t("registration.cta.headline")}
        paragraph={t("registration.cta.paragraph")}
        cta={{ label: t("registration.cta.cta"), href: "/schedule" }}
        variant="cinematic"
        kanjiWatermark="心"
      />
    </>
  );
}
