import { render, screen } from "@testing-library/react";

import { classSchedules } from "@/entities/class-schedule";

import { ScheduleTable } from "./ui/schedule-table";

const locationNames: Record<string, string> = {
  "thuan-giao-1": "Thuận Giao 1",
  "thuan-giao-2": "Thuận Giao 2",
  "thuan-giao-3": "Thuận Giao 3",
  "thcs-thuan-giao": "THCS Thuận Giao",
  "thanh-nha": "Thanh Nhã",
  "an-thanh": "An Thạnh",
};

const instructorNames: Record<string, string> = {
  "nguyen-van-viet": "Thầy Việt",
  "vo-thi-yen-nhi": "Cô Nhi",
  "van-anh-quan": "Thầy Quân",
};

describe("ScheduleTable", () => {
  it("renders schedule rows in list view", () => {
    render(
      <ScheduleTable
        schedules={classSchedules.slice(0, 3)}
        locationNames={locationNames}
        instructorNames={instructorNames}
        view="list"
      />,
    );
    expect(screen.getAllByText("Thầy Việt").length).toBeGreaterThan(0);
  });

  it("renders empty message when no schedules match filter", () => {
    render(
      <ScheduleTable
        schedules={classSchedules}
        filterLocationId="nonexistent"
        locationNames={locationNames}
        instructorNames={instructorNames}
      />,
    );
    expect(screen.getByText(/không có lịch/i)).toBeInTheDocument();
  });
});
