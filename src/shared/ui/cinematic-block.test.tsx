import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { CinematicBlock } from "./cinematic-block";

describe("CinematicBlock", () => {
  it("renders children", () => {
    render(<CinematicBlock>Hero content</CinematicBlock>);
    expect(screen.getByText("Hero content")).toBeInTheDocument();
  });

  it("renders as a section element", () => {
    render(<CinematicBlock>X</CinematicBlock>);
    expect(document.querySelector("section")).toBeInTheDocument();
  });

  it("applies dark bg and light text", () => {
    const { container } = render(<CinematicBlock>X</CinematicBlock>);
    expect(container.firstChild).toHaveClass("bg-sumi-ink");
    expect(container.firstChild).toHaveClass("text-washi");
  });

  it("renders kanji watermark when provided", () => {
    const { container } = render(<CinematicBlock kanjiWatermark="道">Content</CinematicBlock>);
    const watermark = container.querySelector("[aria-hidden='true']");
    expect(watermark).toHaveTextContent("道");
  });

  it("does not render watermark span when not provided", () => {
    const { container } = render(<CinematicBlock>X</CinematicBlock>);
    expect(container.querySelector("[aria-hidden='true']")).not.toBeInTheDocument();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <CinematicBlock>
        <h2>Title</h2>
      </CinematicBlock>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
