import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { MemoryRouter } from "react-router-dom";

import { Link } from "./link";

function Wrapper({ children }: { children: React.ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

describe("Link", () => {
  it("renders an anchor element", () => {
    render(<Link to="/about">About</Link>, { wrapper: Wrapper });
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  });

  it("has correct href", () => {
    render(<Link to="/about">About</Link>, { wrapper: Wrapper });
    expect(screen.getByRole("link")).toHaveAttribute("href", "/about");
  });

  it("applies underline-offset class", () => {
    render(<Link to="/">Home</Link>, { wrapper: Wrapper });
    expect(screen.getByRole("link")).toHaveClass("underline-offset-4");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLAnchorElement | null };
    render(
      <Link to="/" ref={ref}>
        X
      </Link>,
      { wrapper: Wrapper },
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Link to="/about">About us</Link>, { wrapper: Wrapper });
    expect(await axe(container)).toHaveNoViolations();
  });
});
