import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { VisuallyHidden } from "./visually-hidden";

describe("VisuallyHidden", () => {
  it("text is in the DOM (accessible to screen readers)", () => {
    render(<VisuallyHidden>Skip to content</VisuallyHidden>);
    expect(screen.getByText("Skip to content")).toBeInTheDocument();
  });

  it("applies clip-path so it is visually hidden", () => {
    const { container } = render(<VisuallyHidden>Hidden</VisuallyHidden>);
    expect(container.firstChild).toHaveClass("[clip-path:inset(50%)]");
  });

  it("has h-px w-px dimensions", () => {
    const { container } = render(<VisuallyHidden>X</VisuallyHidden>);
    expect(container.firstChild).toHaveClass("h-px");
    expect(container.firstChild).toHaveClass("w-px");
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <nav>
        <VisuallyHidden>Navigation</VisuallyHidden>
        <a href="/">Home</a>
      </nav>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
