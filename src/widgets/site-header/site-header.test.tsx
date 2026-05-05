import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import "@/shared/i18n";

import { SiteHeader } from "./ui/site-header";

const wrap = () =>
  render(
    <MemoryRouter>
      <SiteHeader />
    </MemoryRouter>,
  );

describe("SiteHeader", () => {
  it("renders the logo", () => {
    wrap();
    expect(screen.getByText("Tâm Việt")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    wrap();
    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
  });

  it("opens mobile menu on toggle click", async () => {
    wrap();
    const toggle = screen.getByRole("button", { name: /mở menu/i });
    await userEvent.click(toggle);
    expect(screen.getByRole("button", { name: /đóng menu/i })).toBeInTheDocument();
  });
});
