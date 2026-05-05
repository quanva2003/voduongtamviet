import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { HeroZen } from "./ui/hero-zen";

const wrap = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("HeroZen", () => {
  it("renders eyebrow and headline", () => {
    wrap(<HeroZen eyebrow={{ numeral: "一", label: "GIỚI THIỆU" }} headline="Võ đường Tâm Việt" />);
    expect(screen.getByText("GIỚI THIỆU")).toBeInTheDocument();
    expect(screen.getByText("Võ đường Tâm Việt")).toBeInTheDocument();
  });

  it("renders subline when provided", () => {
    wrap(
      <HeroZen
        eyebrow={{ numeral: "一", label: "G" }}
        headline="H"
        subline="Karate là con đường"
      />,
    );
    expect(screen.getByText("Karate là con đường")).toBeInTheDocument();
  });
});
