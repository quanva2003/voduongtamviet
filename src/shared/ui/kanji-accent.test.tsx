import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { KanjiAccent } from "./kanji-accent";

describe("KanjiAccent", () => {
  it("renders the kanji character", () => {
    render(<KanjiAccent char="道" />);
    expect(screen.getByText("道")).toBeInTheDocument();
  });

  it("inline position is NOT aria-hidden (visible to a11y)", () => {
    render(<KanjiAccent char="武" position="inline" />);
    const el = screen.getByText("武");
    expect(el).not.toHaveAttribute("aria-hidden");
  });

  it("watermark position is aria-hidden", () => {
    const { container } = render(<KanjiAccent char="道" position="watermark" />);
    const el = container.querySelector("[aria-hidden='true']");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("道");
  });

  it("watermark has low opacity class", () => {
    const { container } = render(<KanjiAccent char="道" position="watermark" />);
    expect(container.firstChild).toHaveClass("opacity-[0.08]");
  });

  it("applies gold color class", () => {
    const { container } = render(<KanjiAccent char="金" color="gold" />);
    expect(container.firstChild).toHaveClass("text-gold");
  });

  it("applies shu color class", () => {
    const { container } = render(<KanjiAccent char="赤" color="shu" />);
    expect(container.firstChild).toHaveClass("text-shu-seal");
  });

  it("inline has no a11y violations", async () => {
    const { container } = render(
      <p>
        <KanjiAccent char="道" position="inline" />
      </p>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
