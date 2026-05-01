import { render, screen } from "@testing-library/react";

import { JourneyTimeline } from "./ui/journey-timeline";

const items = [
  { year: "2010", title: "Thành lập", description: "Võ đường được thành lập." },
  { year: "2020", title: "Mở rộng", description: "Nhiều cơ sở mới." },
];

describe("JourneyTimeline", () => {
  it("renders all timeline items", () => {
    render(<JourneyTimeline items={items} />);
    expect(screen.getByText("2010")).toBeInTheDocument();
    expect(screen.getByText("Thành lập")).toBeInTheDocument();
    expect(screen.getByText("2020")).toBeInTheDocument();
    expect(screen.getByText("Mở rộng")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<JourneyTimeline items={items} title="Hành trình" />);
    expect(screen.getByText("Hành trình")).toBeInTheDocument();
  });
});
