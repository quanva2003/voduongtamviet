export type BookingStatus = "pending" | "confirmed" | "cancelled";

export interface ClassBooking {
  id: string;
  scheduleId: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentAge: number;
  parentName?: string;
  parentPhone?: string;
  sessionDate: string;
  status: BookingStatus;
  createdAt: string;
  notes?: string;
}
