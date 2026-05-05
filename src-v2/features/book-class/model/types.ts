export interface BookingDraft {
  scheduleId?: string;
  sessionDate?: string;
  studentName?: string;
  studentAge?: number;
  studentPhone?: string;
  studentEmail?: string;
  parentName?: string;
  parentPhone?: string;
  notes?: string;
}

export interface Booking {
  id: string;
  scheduleId: string;
  sessionDate: string;
  studentName: string;
  studentAge: number;
  studentPhone: string;
  studentEmail: string;
  parentName?: string;
  parentPhone?: string;
  notes?: string;
  status: "confirmed" | "cancelled";
  createdAt: string;
}

export type BookingInput = Omit<Booking, "id" | "status" | "createdAt">;

export type BookingStep = 1 | 2 | 3 | 4;

export const BOOKING_DRAFT_KEY = "vdtv_booking_draft";
export const BOOKINGS_KEY = "vdtv_bookings";
