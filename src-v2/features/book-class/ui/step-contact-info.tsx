import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Button, Container, Input, Textarea } from "@/shared/ui";

import { contactSchema, type ContactValues } from "../model/booking-schema";
import type { BookingDraft, BookingStep } from "../model/types";

interface StepContactInfoProps {
  draft: BookingDraft;
  onNext: (values: ContactValues, step: BookingStep) => void;
  onBack: (step: BookingStep) => void;
}

export function StepContactInfo({ draft, onNext, onBack }: StepContactInfoProps) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(contactSchema) as any,
    defaultValues: {
      studentName: draft.studentName ?? "",
      studentAge: draft.studentAge as unknown as number,
      studentPhone: draft.studentPhone ?? "",
      studentEmail: draft.studentEmail ?? "",
      parentName: draft.parentName ?? "",
      parentPhone: draft.parentPhone ?? "",
      notes: draft.notes ?? "",
    },
  });

  const age = watch("studentAge");
  const isMinor = Number(age) < 18;

  return (
    <Container size="md" className="py-10">
      <h2 className="mb-6 font-display text-[length:var(--text-h2)] text-text-primary">
        {t("booking.steps.contactInfo")}
      </h2>
      <form
        onSubmit={handleSubmit((v) => onNext(v as ContactValues, 4))}
        noValidate
        className="flex flex-col gap-6"
      >
        <Input
          label={t("booking.contact.studentName")}
          {...register("studentName")}
          error={errors.studentName ? t(errors.studentName.message ?? "") : undefined}
          required
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Input
            label={t("booking.contact.studentAge")}
            type="number"
            min={5}
            max={80}
            {...register("studentAge")}
            error={errors.studentAge ? t(errors.studentAge.message ?? "") : undefined}
            required
          />
          <Input
            label={t("booking.contact.studentPhone")}
            type="tel"
            {...register("studentPhone")}
            error={errors.studentPhone ? t(errors.studentPhone.message ?? "") : undefined}
            required
          />
        </div>
        <Input
          label={t("booking.contact.studentEmail")}
          type="email"
          {...register("studentEmail")}
          error={errors.studentEmail ? t(errors.studentEmail.message ?? "") : undefined}
          required
        />
        {isMinor && (
          <>
            <Input
              label={t("booking.contact.parentName")}
              {...register("parentName")}
              error={errors.parentName ? t(errors.parentName.message ?? "") : undefined}
              required
            />
            <Input
              label={t("booking.contact.parentPhone")}
              type="tel"
              {...register("parentPhone")}
              error={errors.parentPhone ? t(errors.parentPhone.message ?? "") : undefined}
            />
          </>
        )}
        <Textarea
          label={t("booking.contact.notes")}
          {...register("notes")}
          rows={3}
          placeholder={t("booking.contact.notesPlaceholder")}
        />
        <div className="flex justify-between">
          <Button type="button" variant="ghost" onClick={() => onBack(2)}>
            {t("buttons.back")}
          </Button>
          <Button type="submit" arrow>
            {t("buttons.next")}
          </Button>
        </div>
      </form>
    </Container>
  );
}
