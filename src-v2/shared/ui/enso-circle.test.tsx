import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import { EnsoCircle } from "./enso-circle";

describe("EnsoCircle", () => {
  it("renders an svg element", () => {
    const { container } = render(<EnsoCircle />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("is aria-hidden (decorative)", () => {
    const { container } = render(<EnsoCircle />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("renders correct size", () => {
    const { container } = render(<EnsoCircle size={128} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "128");
    expect(svg).toHaveAttribute("height", "128");
  });

  it("brushed variant adds stroke-dasharray", () => {
    const { container } = render(<EnsoCircle variant="brushed" />);
    const circle = container.querySelector("circle");
    expect(circle?.getAttribute("stroke-dasharray")).not.toBeNull();
  });

  it("closed variant has no stroke-dasharray", () => {
    const { container } = render(<EnsoCircle variant="closed" />);
    const circle = container.querySelector("circle");
    expect(circle?.getAttribute("stroke-dasharray")).toBeNull();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<EnsoCircle />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
