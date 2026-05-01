import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { CtaSection } from "./ui/cta-section";

const wrap = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("CtaSection", () => {
  const defaultProps = {
    headline: "Tham gia ngay",
    paragraph: "Bắt đầu hành trình karate của bạn.",
    cta: { label: "Đăng ký", href: "/registration" },
  };

  it("renders headline and paragraph", () => {
    wrap(<CtaSection {...defaultProps} />);
    expect(screen.getByText("Tham gia ngay")).toBeInTheDocument();
    expect(screen.getByText("Bắt đầu hành trình karate của bạn.")).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    wrap(<CtaSection {...defaultProps} />);
    expect(screen.getByText("Đăng ký")).toBeInTheDocument();
  });

  it("renders zen variant without error", () => {
    wrap(<CtaSection {...defaultProps} variant="zen" />);
    expect(screen.getByText("Tham gia ngay")).toBeInTheDocument();
  });
});
