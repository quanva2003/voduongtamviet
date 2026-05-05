import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/ui";

import type { ContactValues } from "../model/booking-schema";
import { useBookingFlow } from "../model/use-booking-flow";

import { BookingProgress } from "./booking-progress";
import { StepConfirmation } from "./step-confirmation";
import { StepContactInfo } from "./step-contact-info";
import { StepReview } from "./step-review";
import { StepSelectClass } from "./step-select-class";
import { StepSelectDate } from "./step-select-date";

export function BookingFlow() {
  const { t } = useTranslation();
  const { step, draft, updateDraft, goToStep, confirm, confirmedBooking } = useBookingFlow();
  const [isConfirming, setIsConfirming] = useState(false);

  if (confirmedBooking) {
    return <StepConfirmation booking={confirmedBooking} />;
  }

  async function handleConfirm() {
    setIsConfirming(true);
    await confirm();
    setIsConfirming(false);
  }

  function handleContactNext(values: ContactValues, nextStep: typeof step) {
    updateDraft({
      studentName: values.studentName,
      studentAge: values.studentAge,
      studentPhone: values.studentPhone,
      studentEmail: values.studentEmail,
      parentName: values.parentName,
      parentPhone: values.parentPhone,
      notes: values.notes,
    });
    goToStep(nextStep);
  }

  return (
    <div>
      <Container size="xl">
        <h1 className="pt-8 font-display text-[length:var(--text-h1)] text-text-primary">
          {t("booking.title")}
        </h1>
        <BookingProgress step={step} />
      </Container>

      {step === 1 && (
        <StepSelectClass
          draft={draft}
          onSelect={(id) => updateDraft({ scheduleId: id })}
          onNext={goToStep}
        />
      )}
      {step === 2 && (
        <StepSelectDate
          draft={draft}
          onSelect={(date) => updateDraft({ sessionDate: date })}
          onNext={goToStep}
          onBack={goToStep}
        />
      )}
      {step === 3 && <StepContactInfo draft={draft} onNext={handleContactNext} onBack={goToStep} />}
      {step === 4 && (
        <StepReview
          draft={draft}
          onConfirm={() => void handleConfirm()}
          onBack={goToStep}
          onEdit={goToStep}
          isConfirming={isConfirming}
        />
      )}
    </div>
  );
}
