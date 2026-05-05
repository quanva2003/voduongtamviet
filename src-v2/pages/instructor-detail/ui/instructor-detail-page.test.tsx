import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";

import { i18n } from "@/shared/i18n";

import { Component } from "./instructor-detail-page";

function Wrapper({ slug }: { slug: string }) {
  return (
    <MemoryRouter initialEntries={[`/instructors/${slug}`]}>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/instructors/:slug" element={<Component />} />
        </Routes>
      </I18nextProvider>
    </MemoryRouter>
  );
}

describe("InstructorDetailPage", () => {
  it("renders instructor profile by slug", () => {
    render(<Wrapper slug="nguyen-van-viet" />);
    expect(screen.getByRole("heading", { name: /nguyễn văn việt/i })).toBeInTheDocument();
  });

  it("throws 404 for unknown slug", () => {
    expect(() => render(<Wrapper slug="nobody" />)).toThrow();
  });
});
