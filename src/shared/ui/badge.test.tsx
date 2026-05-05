import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { Badge, Pill } from "./badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies info color classes", () => {
    const { container } = render(<Badge color="info">Info</Badge>);
    expect(container.firstChild).toHaveClass("text-info");
  });

  it("applies danger color classes", () => {
    const { container } = render(<Badge color="danger">Error</Badge>);
    expect(container.firstChild).toHaveClass("text-danger");
  });

  it("applies success color classes", () => {
    const { container } = render(<Badge color="success">OK</Badge>);
    expect(container.firstChild).toHaveClass("text-success");
  });

  it("uses rounded-[var(--radius-sm)] by default", () => {
    const { container } = render(<Badge>X</Badge>);
    expect(container.firstChild).toHaveClass("rounded-[var(--radius-sm)]");
  });

  it("uses rounded-full when pill=true", () => {
    const { container } = render(<Badge pill>X</Badge>);
    expect(container.firstChild).toHaveClass("rounded-full");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Badge color="success">Active</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Pill", () => {
  it("renders as pill (rounded-full)", () => {
    const { container } = render(<Pill>Tag</Pill>);
    expect(container.firstChild).toHaveClass("rounded-full");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Pill>Label</Pill>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
