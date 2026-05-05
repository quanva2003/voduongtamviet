import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { Picture } from "./picture";

describe("Picture", () => {
  it("renders img with correct src (strips extension)", () => {
    render(<Picture src="/images/hero.jpg" alt="Hero" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/images/hero.jpg");
  });

  it("renders img when src has no extension", () => {
    render(<Picture src="/images/hero" alt="Hero" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/images/hero.jpg");
  });

  it("renders avif source", () => {
    const { container } = render(<Picture src="/img/photo" alt="Photo" />);
    const avif = container.querySelector('source[type="image/avif"]');
    expect(avif).toHaveAttribute("srcset", "/img/photo.avif");
  });

  it("renders webp source", () => {
    const { container } = render(<Picture src="/img/photo" alt="Photo" />);
    const webp = container.querySelector('source[type="image/webp"]');
    expect(webp).toHaveAttribute("srcset", "/img/photo.webp");
  });

  it("passes alt to img", () => {
    render(<Picture src="/img/x" alt="Dojo photo" />);
    expect(screen.getByAltText("Dojo photo")).toBeInTheDocument();
  });

  it("defaults to loading=lazy", () => {
    render(<Picture src="/img/x" alt="X" />);
    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
  });

  it("passes sizes to sources", () => {
    const { container } = render(
      <Picture src="/img/x" alt="X" sizes="(max-width: 768px) 100vw, 50vw" />,
    );
    const sources = container.querySelectorAll("source");
    sources.forEach((s: Element) => {
      expect(s).toHaveAttribute("sizes", "(max-width: 768px) 100vw, 50vw");
    });
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Picture src="/img/hero" alt="Martial arts dojo" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
