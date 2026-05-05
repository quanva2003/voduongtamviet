import { useTranslation } from "react-i18next";

import { classSchedules } from "@/entities/class-schedule";
import { instructors } from "@/entities/instructor";
import { locations } from "@/entities/location";
import type { Locale } from "@/shared/i18n";
import { Button, Container } from "@/shared/ui";

import type { BookingDraft, BookingStep } from "../model/types";

const DAY_LABELS: Record<string, string> = {
  monday: "Thứ 2",
  tuesday: "Thứ 3",
  wednesday: "Thứ 4",
  thursday: "Thứ 5",
  friday: "Thứ 6",
  saturday: "Thứ 7",
  sunday: "CN",
};

interface StepSelectClassProps {
  draft: BookingDraft;
  onSelect: (scheduleId: string) => void;
  onNext: (step: BookingStep) => void;
}

export function StepSelectClass({ draft, onSelect, onNext }: StepSelectClassProps) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const localeLocations = locations[locale] ?? locations.vi;
  const localeInstructors = instructors[locale] ?? instructors.vi;

  const locationMap = Object.fromEntries(localeLocations.map((l) => [l.id, l.name]));
  const instructorMap = Object.fromEntries(localeInstructors.map((i) => [i.id, i.name]));

  return (
    <Container size="md" className="py-10">
      <h2 className="mb-6 font-display text-[length:var(--text-h2)] text-text-primary">
        {t("booking.steps.selectClass")}
      </h2>
      <div className="flex flex-col gap-3">
        {classSchedules.map((s) => {
          const selected = draft.scheduleId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              aria-pressed={selected}
              className={`flex w-full flex-col gap-1 rounded-[var(--radius-md)] border p-4 text-left transition-colors ${
                selected ? "border-shu-seal bg-shu-seal/5" : "border-border hover:border-text-muted"
              }`}
            >
              <p className="font-medium text-text-primary">
                {locationMap[s.locationId] ?? s.locationId}
              </p>
              <p className="text-[length:var(--text-body-sm)] text-text-secondary">
                {DAY_LABELS[s.dayOfWeek] ?? s.dayOfWeek} · {s.startTime}–{s.endTime}
              </p>
              <p className="text-[length:var(--text-body-sm)] text-text-muted">
                {t(`booking.ageGroup.${s.ageGroup}`)} · {t(`booking.level.${s.level}`)} ·{" "}
                {instructorMap[s.instructorId] ?? s.instructorId}
              </p>
            </button>
          );
        })}
      </div>
      <div className="mt-8 flex justify-end">
        <Button disabled={!draft.scheduleId} arrow onClick={() => onNext(2)}>
          {t("buttons.next")}
        </Button>
      </div>
    </Container>
  );
}
