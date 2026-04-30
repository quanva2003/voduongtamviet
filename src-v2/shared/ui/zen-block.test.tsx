import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { ZenBlock } from "./zen-block";

describe("ZenBlock", () => {
  it("renders children", () => {
    render(<ZenBlock>Section content</ZenBlock>);
    expect(screen.getByText("Section content")).toBeInTheDocument();
  });

  it("renders as a section element", () => {
    render(<ZenBlock>X</ZenBlock>);
    expect(document.querySelector("section")).toBeInTheDocument();
  });

  it("applies washi bg by default", () => {
    const { container } = render(<ZenBlock>X</ZenBlock>);
    expect(container.firstChild).toHaveClass("bg-washi");
  });

  it("applies sumi-paper bg for paper variant", () => {
    const { container } = render(<ZenBlock variant="paper">X</ZenBlock>);
    expect(container.firstChild).toHaveClass("bg-sumi-paper");
  });

  it("renders eyebrow when provided", () => {
    render(<ZenBlock eyebrow={{ numeral: "一", label: "INTRO" }}>X</ZenBlock>);
    expect(screen.getByText("INTRO")).toBeInTheDocument();
  });

  it("does not render eyebrow by default", () => {
    render(<ZenBlock>X</ZenBlock>);
    expect(screen.queryByText("·")).not.toBeInTheDocument();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <ZenBlock eyebrow={{ numeral: "一", label: "ABOUT" }}>
        <p>Some content</p>
      </ZenBlock>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
