import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { TestWrapper } from "@/test/test-wrapper";

import { Component } from "./registration-page";

describe("RegistrationPage", () => {
  it("renders without crashing", () => {
    render(<Component />, { wrapper: TestWrapper });
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("renders hero headline", () => {
    render(<Component />, { wrapper: TestWrapper });
    expect(screen.getByText(/bắt đầu hành trình/i)).toBeInTheDocument();
  });
});
