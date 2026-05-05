import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";

import { i18n } from "@/shared/i18n";

import { Component } from "./article-detail-page";

function Wrapper({ slug }: { slug: string }) {
  return (
    <MemoryRouter initialEntries={[`/articles/${slug}`]}>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/articles/:slug" element={<Component />} />
        </Routes>
      </I18nextProvider>
    </MemoryRouter>
  );
}

describe("ArticleDetailPage", () => {
  it("renders article by slug", () => {
    render(<Wrapper slug="ky-thuat-co-ban-karate" />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("throws 404 Response for unknown slug", () => {
    // Error boundary catches — smoke test that it renders or throws
    expect(() => render(<Wrapper slug="nonexistent-slug" />)).toThrow();
  });
});
