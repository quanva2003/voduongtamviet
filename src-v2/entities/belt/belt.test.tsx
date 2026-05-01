import { render, screen } from "@testing-library/react";

import { allBelts, danBelts, kyuBelts } from "./model/data";
import { BeltBadge } from "./ui/belt-badge";

describe("BeltBadge", () => {
  it("renders belt name", () => {
    render(<BeltBadge belt={kyuBelts[0]} />);
    expect(screen.getByText(kyuBelts[0].name)).toBeInTheDocument();
  });

  it("renders kyu label for kyu belt", () => {
    render(<BeltBadge belt={kyuBelts[0]} />);
    expect(screen.getByText(`${kyuBelts[0].kyu}. Kyu`)).toBeInTheDocument();
  });

  it("renders dan label for dan belt", () => {
    render(<BeltBadge belt={danBelts[0]} />);
    expect(screen.getByText(`${danBelts[0].dan}. Dan`)).toBeInTheDocument();
  });
});

describe("belt data", () => {
  it("has 10 kyu belts and 10 dan belts", () => {
    expect(kyuBelts).toHaveLength(10);
    expect(danBelts).toHaveLength(10);
    expect(allBelts).toHaveLength(20);
  });
});
