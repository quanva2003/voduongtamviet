import { useState } from "react";
import { useTranslation } from "react-i18next";

import { classSchedules } from "@/entities/class-schedule";
import type { AgeGroup, Level } from "@/entities/class-schedule";
import { instructors } from "@/entities/instructor";
import { locations } from "@/entities/location";
import { SeoMeta } from "@/features/seo-meta";
import type { Locale } from "@/shared/i18n";
import { Container, Select } from "@/shared/ui";
import { CtaSection } from "@/widgets/cta-section";
import { HeroZen } from "@/widgets/hero-zen";
import { ScheduleTable } from "@/widgets/schedule-table";

import { SCHEDULE_SEO_KEYS } from "../model/seo";

export function Component() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;

  const localeLocations = locations[locale] ?? locations.vi;
  const localeInstructors = instructors[locale] ?? instructors.vi;

  const locationMap = Object.fromEntries(localeLocations.map((l) => [l.id, l.name]));
  const instructorMap = Object.fromEntries(localeInstructors.map((i) => [i.id, i.name]));

  const [filterLocationId, setFilterLocationId] = useState("");
  const [filterAgeGroup, setFilterAgeGroup] = useState<AgeGroup | "">("");
  const [filterLevel, setFilterLevel] = useState<Level | "">("");

  const filtered = classSchedules.filter((s) => {
    if (filterLocationId && s.locationId !== filterLocationId) return false;
    if (filterAgeGroup && filterAgeGroup !== "all" && s.ageGroup !== filterAgeGroup) return false;
    if (filterLevel && filterLevel !== "all" && s.level !== filterLevel) return false;
    return true;
  });

  const AGE_GROUPS: Array<{ value: AgeGroup | ""; labelKey: string }> = [
    { value: "", labelKey: "schedule.filter.allAgeGroups" },
    { value: "kids", labelKey: "schedule.ageGroup.kids" },
    { value: "teens", labelKey: "schedule.ageGroup.teens" },
    { value: "adults", labelKey: "schedule.ageGroup.adults" },
  ];

  const LEVELS: Array<{ value: Level | ""; labelKey: string }> = [
    { value: "", labelKey: "schedule.filter.allLevels" },
    { value: "beginner", labelKey: "schedule.level.beginner" },
    { value: "intermediate", labelKey: "schedule.level.intermediate" },
    { value: "advanced", labelKey: "schedule.level.advanced" },
  ];

  return (
    <>
      <SeoMeta
        title={t(SCHEDULE_SEO_KEYS.title)}
        description={t(SCHEDULE_SEO_KEYS.description)}
        canonicalPath={SCHEDULE_SEO_KEYS.canonicalPath}
        ogImage={SCHEDULE_SEO_KEYS.ogImage}
      />
      <HeroZen
        eyebrow={{ numeral: "三", label: "LỊCH HỌC" }}
        headline={t("schedule.hero.headline")}
      />

      <section className="bg-sumi-paper py-[var(--space-12)]">
        <Container size="xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Select
              label={t("schedule.filter.location")}
              value={filterLocationId}
              onChange={(e) => setFilterLocationId(e.target.value)}
            >
              <option value="">{t("schedule.filter.allLocations")}</option>
              {localeLocations.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </Select>
            <Select
              label={t("schedule.filter.ageGroup")}
              value={filterAgeGroup}
              onChange={(e) => setFilterAgeGroup(e.target.value as AgeGroup | "")}
            >
              {AGE_GROUPS.map(({ value, labelKey }) => (
                <option key={value} value={value}>
                  {t(labelKey)}
                </option>
              ))}
            </Select>
            <Select
              label={t("schedule.filter.level")}
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value as Level | "")}
            >
              {LEVELS.map(({ value, labelKey }) => (
                <option key={value} value={value}>
                  {t(labelKey)}
                </option>
              ))}
            </Select>
          </div>
        </Container>
      </section>

      <ScheduleTable
        schedules={filtered}
        locationNames={locationMap}
        instructorNames={instructorMap}
      />

      <CtaSection
        headline={t("schedule.cta.headline")}
        paragraph={t("schedule.cta.paragraph")}
        cta={{ label: t("schedule.cta.cta"), href: "/booking" }}
        variant="cinematic"
        kanjiWatermark="道"
      />
    </>
  );
}
