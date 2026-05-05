import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";

import { Button } from "./button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("renders arrow span when arrow=true", () => {
    const { container } = render(<Button arrow>Go</Button>);
    expect(container.querySelector("[aria-hidden='true']")).toHaveTextContent("→");
  });

  it("applies variant class — secondary", () => {
    const { container } = render(<Button variant="secondary">X</Button>);
    expect(container.firstChild).toHaveClass("border-border-strong");
  });

  it("applies variant class — ghost", () => {
    const { container } = render(<Button variant="ghost">X</Button>);
    expect(container.firstChild).toHaveClass("hover:underline");
  });

  it("applies size class — sm", () => {
    const { container } = render(<Button size="sm">X</Button>);
    expect(container.firstChild).toHaveClass("h-8");
  });

  it("applies size class — lg", () => {
    const { container } = render(<Button size="lg">X</Button>);
    expect(container.firstChild).toHaveClass("h-12");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<Button ref={ref}>X</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("is disabled when disabled prop passed", () => {
    render(<Button disabled>X</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick handler", async () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Button>Accessible</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
