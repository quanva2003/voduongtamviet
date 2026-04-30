import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { Card } from "./card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies zen variant classes by default", () => {
    const { container } = render(<Card>X</Card>);
    expect(container.firstChild).toHaveClass("bg-washi");
    expect(container.firstChild).toHaveClass("border-border");
  });

  it("applies paper variant", () => {
    const { container } = render(<Card variant="paper">X</Card>);
    expect(container.firstChild).toHaveClass("bg-sumi-paper");
  });

  it("applies dark variant", () => {
    const { container } = render(<Card variant="dark">X</Card>);
    expect(container.firstChild).toHaveClass("bg-sumi-ink");
    expect(container.firstChild).toHaveClass("text-washi");
  });

  it("applies featured variant", () => {
    const { container } = render(<Card variant="featured">X</Card>);
    expect(container.firstChild).toHaveClass("border-l-shu-seal");
  });

  it("applies sm padding", () => {
    const { container } = render(<Card padding="sm">X</Card>);
    expect(container.firstChild).toHaveClass("p-4");
  });

  it("applies lg padding", () => {
    const { container } = render(<Card padding="lg">X</Card>);
    expect(container.firstChild).toHaveClass("p-8");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Card ref={ref}>X</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Card>Card content</Card>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
