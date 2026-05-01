import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { classSchedules } from "@/entities/class-schedule";

import { BookingSummaryWidget } from "./ui/booking-summary";

const schedule = classSchedules[0]!;
const draft = {
  studentName: "Nguyễn Văn An",
  studentEmail: "an@example.com",
  studentPhone: "0901234567",
  studentAge: 12,
  sessionDate: "2024-03-15",
};

describe("BookingSummaryWidget", () => {
  it("renders student name and class info", () => {
    render(
      <MemoryRouter>
        <BookingSummaryWidget
          schedule={schedule}
          bookingDraft={draft}
          locationName="Thuận Giao 1"
          instructorName="Thầy Nguyễn Văn Việt"
        />
      </MemoryRouter>,
    );
    expect(screen.getByText("Nguyễn Văn An")).toBeInTheDocument();
    expect(screen.getByText("Thuận Giao 1")).toBeInTheDocument();
    expect(screen.getByText("Thầy Nguyễn Văn Việt")).toBeInTheDocument();
  });

  it("renders pricing section", () => {
    render(
      <MemoryRouter>
        <BookingSummaryWidget
          schedule={schedule}
          bookingDraft={draft}
          locationName="TG1"
          instructorName="Thầy Việt"
        />
      </MemoryRouter>,
    );
    expect(screen.getByText(/350\.000/)).toBeInTheDocument();
  });
});
