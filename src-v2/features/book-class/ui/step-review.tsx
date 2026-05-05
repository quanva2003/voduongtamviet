import { useTranslation } from "react-i18next";

import { classSchedules } from "@/entities/class-schedule";
import { instructors } from "@/entities/instructor";
import { locations } from "@/entities/location";
import type { Locale } from "@/shared/i18n";
import { Button, Card, Container } from "@/shared/ui";

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

interface StepReviewProps {
  draft: BookingDraft;
  onConfirm: () => void;
  onBack: (step: BookingStep) => void;
  onEdit: (step: BookingStep) => void;
  isConfirming: boolean;
}

export function StepReview({ draft, onConfirm, onBack, onEdit, isConfirming }: StepReviewProps) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const localeLocations = locations[locale] ?? locations.vi;
  const localeInstructors = instructors[locale] ?? instructors.vi;
  const schedule = classSchedules.find((s) => s.id === draft.scheduleId);
  const location = localeLocations.find((l) => l.id === schedule?.locationId);
  const instructor = localeInstructors.find((i) => i.id === schedule?.instructorId);

  const dateFmt = new Intl.DateTimeFormat(i18n.language === "vi" ? "vi-VN" : i18n.language, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Container size="md" className="py-10">
      <h2 className="mb-6 font-display text-[length:var(--text-h2)] text-text-primary">
        {t("booking.steps.review")}
      </h2>
      <div className="flex flex-col gap-4">
        <Card variant="zen" padding="md">
          <div className="flex items-center justify-between">
            <p className="font-medium text-text-primary">{t("booking.review.classInfo")}</p>
            <button
              onClick={() => onEdit(1)}
              className="text-[length:var(--text-body-sm)] text-shu-seal"
            >
              {t("booking.review.edit")}
            </button>
          </div>
          <dl className="mt-3 grid gap-2 text-[length:var(--text-body-sm)]">
            <div>
              <dt className="text-text-muted">{t("booking.review.location")}</dt>
              <dd className="text-text-primary">{location?.name ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-text-muted">{t("booking.review.day")}</dt>
              <dd className="text-text-primary">
                {schedule ? DAY_LABELS[schedule.dayOfWeek] : "—"} · {schedule?.startTime}–
                {schedule?.endTime}
              </dd>
            </div>
            <div>
              <dt className="text-text-muted">{t("booking.review.instructor")}</dt>
              <dd className="text-text-primary">{instructor?.name ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-text-muted">{t("booking.review.date")}</dt>
              <dd className="text-text-primary">
                {draft.sessionDate ? dateFmt.format(new Date(draft.sessionDate)) : "—"}
              </dd>
            </div>
          </dl>
          <button
            onClick={() => onEdit(2)}
            className="mt-2 text-[length:var(--text-body-sm)] text-shu-seal"
          >
            {t("booking.review.changeDate")}
          </button>
        </Card>
        <Card variant="zen" padding="md">
          <div className="flex items-center justify-between">
            <p className="font-medium text-text-primary">{t("booking.review.studentInfo")}</p>
            <button
              onClick={() => onEdit(3)}
              className="text-[length:var(--text-body-sm)] text-shu-seal"
            >
              {t("booking.review.edit")}
            </button>
          </div>
          <dl className="mt-3 grid gap-2 text-[length:var(--text-body-sm)]">
            <div>
              <dt className="text-text-muted">{t("booking.contact.studentName")}</dt>
              <dd className="text-text-primary">{draft.studentName}</dd>
            </div>
            <div>
              <dt className="text-text-muted">{t("booking.contact.studentAge")}</dt>
              <dd className="text-text-primary">{draft.studentAge} tuổi</dd>
            </div>
            <div>
              <dt className="text-text-muted">{t("booking.contact.studentPhone")}</dt>
              <dd className="text-text-primary">{draft.studentPhone}</dd>
            </div>
            <div>
              <dt className="text-text-muted">{t("booking.contact.studentEmail")}</dt>
              <dd className="text-text-primary">{draft.studentEmail}</dd>
            </div>
            {draft.parentName && (
              <div>
                <dt className="text-text-muted">{t("booking.contact.parentName")}</dt>
                <dd className="text-text-primary">{draft.parentName}</dd>
              </div>
            )}
            {draft.notes && (
              <div>
                <dt className="text-text-muted">{t("booking.contact.notes")}</dt>
                <dd className="text-text-primary">{draft.notes}</dd>
              </div>
            )}
          </dl>
        </Card>
        <Card variant="featured" padding="md">
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
            {t("booking.review.fee")}
          </p>
          <p className="mt-1 font-display text-[length:var(--text-h2)] text-shu-seal">
            350.000 VNĐ/tháng
          </p>
          <p className="text-[length:var(--text-body-sm)] text-text-secondary">
            {t("booking.review.feeNote")}
          </p>
        </Card>
      </div>
      <div className="mt-8 flex justify-between">
        <Button variant="ghost" onClick={() => onBack(3)}>
          {t("buttons.back")}
        </Button>
        <Button disabled={isConfirming} onClick={onConfirm} arrow>
          {isConfirming ? t("booking.confirming") : t("booking.confirm")}
        </Button>
      </div>
    </Container>
  );
}
