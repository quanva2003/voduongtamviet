import { generateBookingId } from "../lib/generate-booking-id";

import { BOOKINGS_KEY, type Booking, type BookingInput } from "./types";

export interface BookingStore {
  list(): Promise<Booking[]>;
  getById(id: string): Promise<Booking | null>;
  create(input: BookingInput): Promise<Booking>;
  cancel(id: string): Promise<void>;
}

function readAll(): Booking[] {
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) ?? "[]") as Booking[];
  } catch {
    return [];
  }
}

function writeAll(bookings: Booking[]): void {
  try {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  } catch {
    // ignore write errors
  }
}

export const localBookingStore: BookingStore = {
  async list() {
    return readAll();
  },

  async getById(id) {
    return readAll().find((b) => b.id === id) ?? null;
  },

  async create(input) {
    const bookings = readAll();
    if (bookings.length >= 10) {
      // warn but allow — no hard limit per spec
      console.warn("vdtv: more than 10 bookings in localStorage");
    }
    const booking: Booking = {
      ...input,
      id: generateBookingId(),
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };
    writeAll([...bookings, booking]);
    return booking;
  },

  async cancel(id) {
    const bookings = readAll().map((b) =>
      b.id === id ? { ...b, status: "cancelled" as const } : b,
    );
    writeAll(bookings);
  },
};
