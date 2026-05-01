import { render, screen } from "@testing-library/react";

import { classSchedules } from "./model/data";
import { ScheduleRow } from "./ui/schedule-row";

const schedule = classSchedules[0]!;

describe("ScheduleRow", () => {
  it("renders day, time range, and instructor", () => {
    render(
      <ScheduleRow
        schedule={schedule}
        locationName="Thuận Giao 1"
        instructorName="Thầy Nguyễn Văn Việt"
      />,
    );
    expect(screen.getByText("Thứ 2")).toBeInTheDocument();
    expect(screen.getByText(`${schedule.startTime}–${schedule.endTime}`)).toBeInTheDocument();
    expect(screen.getByText("Thầy Nguyễn Văn Việt")).toBeInTheDocument();
  });
});

describe("classSchedules data", () => {
  it("has 15 schedule entries", () => {
    expect(classSchedules).toHaveLength(15);
  });
});
