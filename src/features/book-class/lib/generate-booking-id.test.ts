import { describe, it, expect } from "vitest";

import { generateBookingId } from "./generate-booking-id";

describe("generateBookingId", () => {
  it("returns expected format VDTV-YYYY-XXXX", () => {
    const id = generateBookingId();
    expect(id).toMatch(/^VDTV-\d{4}-[A-Z0-9]{4}$/);
  });

  it("generates unique ids", () => {
    const ids = new Set(Array.from({ length: 50 }, () => generateBookingId()));
    expect(ids.size).toBeGreaterThan(40); // extremely unlikely to collide 10+ times
  });

  it("uses current year", () => {
    const id = generateBookingId();
    const year = new Date().getFullYear().toString();
    expect(id).toContain(year);
  });
});
