import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renders with role=status", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has accessible label", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading");
  });

  it("applies inline width/height", () => {
    render(<Skeleton width={200} height={24} />);
    const el = screen.getByRole("status");
    expect(el).toHaveStyle({ width: "200px", height: "24px" });
  });

  it("accepts string dimensions", () => {
    render(<Skeleton width="100%" height="1rem" />);
    const el = screen.getByRole("status");
    expect(el).toHaveStyle({ width: "100%", height: "1rem" });
  });

  it("applies base bg class", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("bg-border");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Skeleton width={200} height={20} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
