import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { Container } from "./container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Inner</Container>);
    expect(screen.getByText("Inner")).toBeInTheDocument();
  });

  it("applies default md max-width", () => {
    const { container } = render(<Container>X</Container>);
    expect(container.firstChild).toHaveClass("max-w-[var(--container-md)]");
  });

  it("applies xl max-width", () => {
    const { container } = render(<Container size="xl">X</Container>);
    expect(container.firstChild).toHaveClass("max-w-[var(--container-xl)]");
  });

  it("applies 2xl max-width", () => {
    const { container } = render(<Container size="2xl">X</Container>);
    expect(container.firstChild).toHaveClass("max-w-[var(--container-2xl)]");
  });

  it("is centered with mx-auto", () => {
    const { container } = render(<Container>X</Container>);
    expect(container.firstChild).toHaveClass("mx-auto");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Container ref={ref}>X</Container>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Container>Content</Container>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
