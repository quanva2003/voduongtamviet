import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { classSchedules } from "@/entities/class-schedule";
import { instructors } from "@/entities/instructor";
import { locations } from "@/entities/location";
import { personJsonLd, SeoMeta } from "@/features/seo-meta";
import type { Locale } from "@/shared/i18n";
import { CtaSection } from "@/widgets/cta-section";
import { InstructorProfile } from "@/widgets/instructor-profile";
import { ScheduleTable } from "@/widgets/schedule-table";

export function Component() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;

  const localeInstructors = instructors[locale] ?? instructors.vi;
  const instructor = localeInstructors.find((i) => i.slug === slug);

  if (!instructor) {
    throw new Response("Not Found", { status: 404 });
  }

  const localeLocations = locations[locale] ?? locations.vi;
  const locationMap = Object.fromEntries(localeLocations.map((l) => [l.id, l.name]));
  const instructorMap = Object.fromEntries(localeInstructors.map((i) => [i.id, i.name]));
  const byInstructor = classSchedules.filter((s) => s.instructorId === instructor.id);

  return (
    <>
      <SeoMeta
        title={instructor.name}
        description={instructor.bio}
        canonicalPath={`/instructors/${instructor.slug}`}
        ogImage={`${instructor.photo}.jpg`}
        jsonLd={personJsonLd({
          name: instructor.name,
          jobTitle: instructor.title,
          description: instructor.bio,
          url: `https://tamviet.vn/instructors/${instructor.slug}`,
        })}
      />

      <InstructorProfile instructor={instructor} />

      {byInstructor.length > 0 && (
        <ScheduleTable
          schedules={byInstructor}
          locationNames={locationMap}
          instructorNames={instructorMap}
          eyebrow={{ numeral: "師", label: t("instructorDetail.classes") }}
        />
      )}

      <CtaSection
        headline={t("instructorDetail.cta.headline")}
        paragraph={t("instructorDetail.cta.paragraph")}
        cta={{ label: t("instructorDetail.cta.cta"), href: "/booking" }}
        variant="cinematic"
        kanjiWatermark="師"
      />
    </>
  );
}
