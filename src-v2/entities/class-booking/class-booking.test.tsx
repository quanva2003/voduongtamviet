import { render, screen } from "@testing-library/react";

import type { ClassBooking } from "./model/types";
import { BookingSummary } from "./ui/booking-summary";

const booking: ClassBooking = {
  id: "b-001",
  scheduleId: "tg1-mon-wed-fri-kids",
  studentName: "Nguyễn Văn An",
  studentEmail: "an@example.com",
  studentPhone: "0901234567",
  studentAge: 10,
  sessionDate: "2024-03-01",
  status: "pending",
  createdAt: "2024-02-20T10:00:00Z",
};

describe("BookingSummary", () => {
  it("renders student name", () => {
    render(<BookingSummary booking={booking} />);
    expect(screen.getByText("Nguyễn Văn An")).toBeInTheDocument();
  });

  it("renders email and phone", () => {
    render(<BookingSummary booking={booking} />);
    expect(screen.getByText("an@example.com")).toBeInTheDocument();
    expect(screen.getByText("0901234567")).toBeInTheDocument();
  });

  it("renders pending status label", () => {
    render(<BookingSummary booking={booking} />);
    expect(screen.getByText("Chờ xác nhận")).toBeInTheDocument();
  });

  it("renders confirmed status label", () => {
    render(<BookingSummary booking={{ ...booking, status: "confirmed" }} />);
    expect(screen.getByText("Đã xác nhận")).toBeInTheDocument();
  });
});
