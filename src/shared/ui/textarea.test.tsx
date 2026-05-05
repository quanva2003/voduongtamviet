import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renders without label", () => {
    render(<Textarea placeholder="Write here" />);
    expect(screen.getByPlaceholderText("Write here")).toBeInTheDocument();
  });

  it("renders label and associates it", () => {
    render(<Textarea label="Message" />);
    const label = screen.getByText("Message");
    const textarea = screen.getByRole("textbox");
    expect(label).toHaveAttribute("for", textarea.id);
  });

  it("renders error with role=alert", () => {
    render(<Textarea error="Too short" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Too short");
  });

  it("sets aria-invalid when error provided", () => {
    render(<Textarea error="Bad" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLTextAreaElement | null };
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Textarea label="Notes" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
