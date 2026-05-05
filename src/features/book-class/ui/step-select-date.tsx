import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { classSchedules } from "@/entities/class-schedule";
import { cn } from "@/shared/lib/cn";
import { Button, Container } from "@/shared/ui";

import type { BookingDraft, BookingStep } from "../model/types";

const DAY_INDEX: Record<string, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

function getAvailableDates(scheduleId: string): Date[] {
  const schedule = classSchedules.find((s) => s.id === scheduleId);
  if (!schedule) return [];
  const targetDay = DAY_INDEX[schedule.dayOfWeek];
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let d = 0; d < 28; d++) {
    const date = new Date(today);
    date.setDate(today.getDate() + d + 1);
    if (date.getDay() === targetDay) {
      dates.push(date);
    }
  }
  return dates;
}

interface StepSelectDateProps {
  draft: BookingDraft;
  onSelect: (date: string) => void;
  onNext: (step: BookingStep) => void;
  onBack: (step: BookingStep) => void;
}

export function StepSelectDate({ draft, onSelect, onNext, onBack }: StepSelectDateProps) {
  const { t, i18n } = useTranslation();
  const dates = useMemo(
    () => (draft.scheduleId ? getAvailableDates(draft.scheduleId) : []),
    [draft.scheduleId],
  );

  const fmt = new Intl.DateTimeFormat(i18n.language === "vi" ? "vi-VN" : i18n.language, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <Container size="md" className="py-10">
      <h2 className="mb-6 font-display text-[length:var(--text-h2)] text-text-primary">
        {t("booking.steps.selectDate")}
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {dates.map((date) => {
          const iso = date.toISOString().split("T")[0] ?? date.toISOString().slice(0, 10);
          const selected = draft.sessionDate === iso;
          return (
            <button
              key={iso}
              onClick={() => onSelect(iso)}
              aria-pressed={selected}
              className={cn(
                "rounded-[var(--radius-md)] border p-3 text-center text-[length:var(--text-body-sm)] transition-colors",
                selected
                  ? "border-shu-seal bg-shu-seal/5 text-text-primary"
                  : "border-border text-text-secondary hover:border-text-muted",
              )}
            >
              {fmt.format(date)}
            </button>
          );
        })}
      </div>
      <div className="mt-8 flex justify-between">
        <Button variant="ghost" onClick={() => onBack(1)}>
          {t("buttons.back")}
        </Button>
        <Button disabled={!draft.sessionDate} arrow onClick={() => onNext(3)}>
          {t("buttons.next")}
        </Button>
      </div>
    </Container>
  );
}
