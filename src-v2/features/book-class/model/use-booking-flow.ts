import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { localBookingStore } from "./booking-store";
import { BOOKING_DRAFT_KEY, type Booking, type BookingDraft, type BookingStep } from "./types";

function hashToStep(hash: string): BookingStep {
  const map: Record<string, BookingStep> = {
    "#step-1": 1,
    "#step-2": 2,
    "#step-3": 3,
    "#step-4": 4,
  };
  return map[hash] ?? 1;
}

function readDraft(): BookingDraft {
  try {
    return JSON.parse(localStorage.getItem(BOOKING_DRAFT_KEY) ?? "{}") as BookingDraft;
  } catch {
    return {};
  }
}

function saveDraft(draft: BookingDraft): void {
  try {
    localStorage.setItem(BOOKING_DRAFT_KEY, JSON.stringify(draft));
  } catch {
    // ignore
  }
}

function clearDraft(): void {
  try {
    localStorage.removeItem(BOOKING_DRAFT_KEY);
  } catch {
    // ignore
  }
}

export function useBookingFlow() {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [draft, setDraftState] = useState<BookingDraft>(() => readDraft());
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  const step = hashToStep(hash);

  const goToStep = useCallback(
    (s: BookingStep) => {
      navigate(`/booking#step-${s}`, { replace: false });
    },
    [navigate],
  );

  const updateDraft = useCallback((patch: Partial<BookingDraft>) => {
    setDraftState((prev) => {
      const next = { ...prev, ...patch };
      saveDraft(next);
      return next;
    });
  }, []);

  const confirm = useCallback(async () => {
    if (
      !draft.scheduleId ||
      !draft.sessionDate ||
      !draft.studentName ||
      !draft.studentAge ||
      !draft.studentPhone ||
      !draft.studentEmail
    )
      return;

    const booking = await localBookingStore.create({
      scheduleId: draft.scheduleId,
      sessionDate: draft.sessionDate,
      studentName: draft.studentName,
      studentAge: draft.studentAge,
      studentPhone: draft.studentPhone,
      studentEmail: draft.studentEmail,
      parentName: draft.parentName,
      parentPhone: draft.parentPhone,
      notes: draft.notes,
    });
    clearDraft();
    setDraftState({});
    setConfirmedBooking(booking);
  }, [draft]);

  // Restore step from hash on mount
  useEffect(() => {
    if (!hash) {
      navigate("/booking#step-1", { replace: true });
    }
  }, [hash, navigate]);

  return { step, draft, updateDraft, goToStep, confirm, confirmedBooking };
}
