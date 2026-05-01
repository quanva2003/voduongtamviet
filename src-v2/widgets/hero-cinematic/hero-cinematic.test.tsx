import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { HeroCinematic } from "./ui/hero-cinematic";

const wrap = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("HeroCinematic", () => {
  it("renders headline", () => {
    wrap(<HeroCinematic headline="Rèn Tâm" />);
    expect(screen.getByText("Rèn Tâm")).toBeInTheDocument();
  });

  it("renders italic headline part when provided", () => {
    wrap(<HeroCinematic headline="Rèn" headlineItalic="Tâm" />);
    expect(screen.getByText("Tâm")).toBeInTheDocument();
  });

  it("renders subline when provided", () => {
    wrap(<HeroCinematic headline="H" subline="Subline text" />);
    expect(screen.getByText("Subline text")).toBeInTheDocument();
  });

  it("renders primary CTA button", () => {
    wrap(<HeroCinematic headline="H" ctaPrimary={{ label: "Đăng ký", href: "/registration" }} />);
    expect(screen.getByText("Đăng ký")).toBeInTheDocument();
  });
});
