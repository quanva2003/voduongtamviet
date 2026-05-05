import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";

import { Input } from "./input";

describe("Input", () => {
  it("renders without label", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders label and associates it", () => {
    render(<Input label="Email" />);
    const label = screen.getByText("Email");
    const input = screen.getByRole("textbox");
    expect(label).toBeInTheDocument();
    expect(input).toHaveAttribute("id");
    expect(label).toHaveAttribute("for", input.id);
  });

  it("renders error message with role=alert", () => {
    render(<Input label="Email" error="Required" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  it("sets aria-invalid when error provided", () => {
    render(<Input error="Bad" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("links input to error via aria-describedby", () => {
    render(<Input error="Bad" />);
    const input = screen.getByRole("textbox");
    const errorId = input.getAttribute("aria-describedby");
    expect(document.getElementById(errorId ?? "")).toHaveTextContent("Bad");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("accepts user typing", async () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "hello");
    expect(input).toHaveValue("hello");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Input label="Name" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
