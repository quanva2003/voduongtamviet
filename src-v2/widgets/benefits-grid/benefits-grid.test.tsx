import { render, screen } from "@testing-library/react";

import { values } from "@/entities/value";

import { BenefitsGrid } from "./ui/benefits-grid";

describe("BenefitsGrid", () => {
  it("renders all value cards", () => {
    render(<BenefitsGrid values={values.vi} />);
    values.vi.forEach((v) => {
      expect(screen.getByText(v.kanji)).toBeInTheDocument();
    });
  });

  it("renders title when provided", () => {
    render(<BenefitsGrid values={values.vi} title="Giá trị cốt lõi" />);
    expect(screen.getByText("Giá trị cốt lõi")).toBeInTheDocument();
  });
});
