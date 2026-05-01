import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { instructors } from "@/entities/instructor";

import { InstructorsList } from "./ui/instructors-list";

const wrap = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("InstructorsList", () => {
  it("renders all instructors in full variant", () => {
    wrap(<InstructorsList instructors={instructors.vi} variant="full" />);
    instructors.vi.forEach((i) => {
      expect(screen.getByText(i.name)).toBeInTheDocument();
    });
  });

  it("shows max 4 in preview variant", () => {
    // Build 5 unique instructors to verify the 4-cap
    const many = instructors.vi.map((inst, i) => ({
      ...inst,
      id: `${inst.id}-${i}`,
      slug: `${inst.slug}-${i}`,
    }));
    const five = [...many, { ...many[0]!, id: "extra-4", slug: "extra-4" }];
    wrap(<InstructorsList instructors={five} variant="preview" />);
    expect(screen.getAllByRole("link", { name: /xem chi tiết/i })).toHaveLength(4);
  });

  it("renders view all link when viewAllHref provided in preview mode", () => {
    wrap(
      <InstructorsList instructors={instructors.vi} variant="preview" viewAllHref="/instructors" />,
    );
    expect(screen.getByText(/xem tất cả/i)).toBeInTheDocument();
  });
});
