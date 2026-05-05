import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { TestWrapper } from "@/test/test-wrapper";

import { Component } from "./articles-page";

describe("ArticlesPage", () => {
  it("renders without crashing", () => {
    render(<Component />, { wrapper: TestWrapper });
    expect(screen.getByText(/bài viết/i)).toBeInTheDocument();
  });

  it("shows article cards", () => {
    render(<Component />, { wrapper: TestWrapper });
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(0);
  });
});
