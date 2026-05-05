import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { instructors } from "@/entities/instructor";

import { InstructorProfile } from "./ui/instructor-profile";

const instructor = instructors.vi[0]!;

describe("InstructorProfile", () => {
  it("renders instructor name", () => {
    render(
      <MemoryRouter>
        <InstructorProfile instructor={instructor} />
      </MemoryRouter>,
    );
    expect(screen.getByText(instructor.name)).toBeInTheDocument();
  });

  it("renders belt rank", () => {
    render(
      <MemoryRouter>
        <InstructorProfile instructor={instructor} />
      </MemoryRouter>,
    );
    expect(screen.getByText(new RegExp(instructor.beltRank))).toBeInTheDocument();
  });

  it("renders all achievements", () => {
    render(
      <MemoryRouter>
        <InstructorProfile instructor={instructor} />
      </MemoryRouter>,
    );
    instructor.achievements.forEach((ach) => {
      expect(screen.getByText(ach)).toBeInTheDocument();
    });
  });
});
