import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";

import { Radio } from "./radio";

describe("Radio", () => {
  it("renders a radio input", () => {
    render(<Radio />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("renders label text", () => {
    render(<Radio label="Option A" />);
    expect(screen.getByText("Option A")).toBeInTheDocument();
  });

  it("label click selects radio", async () => {
    render(<Radio label="Option A" />);
    const radio = screen.getByRole("radio");
    expect(radio).not.toBeChecked();
    await userEvent.click(screen.getByText("Option A"));
    expect(radio).toBeChecked();
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Radio ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("can be disabled", () => {
    render(<Radio disabled />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Radio label="Choice" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
