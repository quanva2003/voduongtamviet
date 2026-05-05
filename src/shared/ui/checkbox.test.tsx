import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";

import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("renders a checkbox input", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders label text", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("label click toggles checkbox", async () => {
    render(<Checkbox label="Accept" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await userEvent.click(screen.getByText("Accept"));
    expect(checkbox).toBeChecked();
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("can be disabled", () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Checkbox label="I agree" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
