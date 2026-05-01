import { render, screen } from "@testing-library/react";

import { courseInfoData } from "./model/data";
import { CourseInfo } from "./ui/course-info";

describe("CourseInfo", () => {
  it("renders all course info items", () => {
    render(<CourseInfo items={courseInfoData.vi} />);
    courseInfoData.vi.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.value)).toBeInTheDocument();
    });
  });

  it("renders title when provided", () => {
    render(<CourseInfo items={courseInfoData.vi} title="Thông tin khóa học" />);
    expect(screen.getByText("Thông tin khóa học")).toBeInTheDocument();
  });
});
