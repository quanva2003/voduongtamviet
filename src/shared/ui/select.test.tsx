import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { Select } from "./select";

const OPTIONS = [
  { value: "vi", label: "Tiếng Việt" },
  { value: "en", label: "English" },
];

describe("Select", () => {
  it("renders options via prop", () => {
    render(<Select options={OPTIONS} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Tiếng Việt")).toBeInTheDocument();
  });

  it("renders label and associates it", () => {
    render(<Select label="Language" options={OPTIONS} />);
    const label = screen.getByText("Language");
    const select = screen.getByRole("combobox");
    expect(label).toHaveAttribute("for", select.id);
  });

  it("renders error with role=alert", () => {
    render(<Select error="Required" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  it("renders children instead of options when children provided", () => {
    render(
      <Select>
        <option value="x">X</option>
      </Select>,
    );
    expect(screen.getByText("X")).toBeInTheDocument();
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLSelectElement | null };
    render(<Select ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Select label="Pick one" options={OPTIONS} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
