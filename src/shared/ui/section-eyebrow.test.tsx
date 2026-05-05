import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { SectionEyebrow } from "./section-eyebrow";

describe("SectionEyebrow", () => {
  it("renders label text", () => {
    render(<SectionEyebrow numeral="一" label="ABOUT" />);
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
  });

  it("renders numeral", () => {
    render(<SectionEyebrow numeral="二" label="CLASSES" />);
    expect(screen.getByText("二")).toBeInTheDocument();
  });

  it("renders separator dot", () => {
    const { container } = render(<SectionEyebrow numeral="一" label="X" />);
    expect(container).toHaveTextContent("·");
  });

  it("applies gold text class", () => {
    const { container } = render(<SectionEyebrow numeral="一" label="TEST" />);
    expect(container.firstChild).toHaveClass("text-gold");
  });

  it("applies uppercase tracking", () => {
    const { container } = render(<SectionEyebrow numeral="一" label="TEST" />);
    expect(container.firstChild).toHaveClass("tracking-[0.15em]");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<SectionEyebrow numeral="一" label="SECTION" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
