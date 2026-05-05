import { describe, it, expect, beforeEach } from "vitest";

import { localBookingStore } from "./booking-store";

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      store = Object.fromEntries(Object.entries(store).filter(([k]) => k !== key));
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

const SAMPLE_INPUT = {
  scheduleId: "tg1-mon-wed-fri-kids",
  sessionDate: "2026-06-01",
  studentName: "Nguyễn Văn A",
  studentAge: 10,
  studentPhone: "0912345678",
  studentEmail: "a@b.com",
};

describe("localBookingStore", () => {
  beforeEach(() => localStorageMock.clear());

  it("creates a booking with generated ID", async () => {
    const booking = await localBookingStore.create(SAMPLE_INPUT);
    expect(booking.id).toMatch(/^VDTV-\d{4}-[A-Z0-9]{4}$/);
    expect(booking.status).toBe("confirmed");
    expect(booking.studentName).toBe("Nguyễn Văn A");
  });

  it("lists created bookings", async () => {
    await localBookingStore.create(SAMPLE_INPUT);
    await localBookingStore.create({ ...SAMPLE_INPUT, studentName: "Trần B" });
    const list = await localBookingStore.list();
    expect(list).toHaveLength(2);
  });

  it("cancels a booking by id", async () => {
    const booking = await localBookingStore.create(SAMPLE_INPUT);
    await localBookingStore.cancel(booking.id);
    const all = await localBookingStore.list();
    const found = all.find((b) => b.id === booking.id);
    expect(found?.status).toBe("cancelled");
  });

  it("getById returns null for missing id", async () => {
    const result = await localBookingStore.getById("nonexistent");
    expect(result).toBeNull();
  });

  it("getById returns booking when present", async () => {
    const booking = await localBookingStore.create(SAMPLE_INPUT);
    const found = await localBookingStore.getById(booking.id);
    expect(found?.id).toBe(booking.id);
  });
});
