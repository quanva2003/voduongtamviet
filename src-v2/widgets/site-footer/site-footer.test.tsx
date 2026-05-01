import { render, screen } from "@testing-library/react";

import { SiteFooter } from "./ui/site-footer";

describe("SiteFooter", () => {
  it("renders the brand name", () => {
    render(<SiteFooter />);
    expect(screen.getByText("Tâm Việt")).toBeInTheDocument();
  });

  it("renders contact email", () => {
    render(<SiteFooter />);
    expect(screen.getByText("info@vodangtamviet.com")).toBeInTheDocument();
  });

  it("renders copyright year", () => {
    render(<SiteFooter />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument();
  });
});
