import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { instructors } from "./model/data";
import { InstructorAvatar } from "./ui/instructor-avatar";
import { InstructorCard } from "./ui/instructor-card";

const instructor = instructors.vi[0]!;

const wrap = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("InstructorCard", () => {
  it("renders instructor name and title", () => {
    wrap(<InstructorCard instructor={instructor} />);
    expect(screen.getByText(instructor.name)).toBeInTheDocument();
    expect(screen.getByText(instructor.title)).toBeInTheDocument();
  });

  it("renders a link to the instructor detail page", () => {
    wrap(<InstructorCard instructor={instructor} />);
    const link = screen.getByRole("link", { name: /xem chi tiết/i });
    expect(link).toHaveAttribute("href", `/instructors/${instructor.slug}`);
  });
});

describe("InstructorAvatar", () => {
  it("renders image with correct alt text", () => {
    render(<InstructorAvatar instructor={instructor} />);
    expect(screen.getByAltText(instructor.name)).toBeInTheDocument();
  });

  it("does not show belt rank pill by default", () => {
    render(<InstructorAvatar instructor={instructor} />);
    expect(screen.queryByText(instructor.beltRank)).not.toBeInTheDocument();
  });

  it("shows belt rank pill when showBeltRank=true", () => {
    render(<InstructorAvatar instructor={instructor} showBeltRank />);
    expect(screen.getByText(instructor.beltRank)).toBeInTheDocument();
  });
});

describe("instructors data", () => {
  it("has 3 instructors in every locale", () => {
    expect(instructors.vi).toHaveLength(3);
    expect(instructors.en).toHaveLength(3);
    expect(instructors.ja).toHaveLength(3);
  });
});
