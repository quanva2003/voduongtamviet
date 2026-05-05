import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { TestWrapper } from "@/test/test-wrapper";

import { Component } from "./schedule-page";

describe("SchedulePage", () => {
  it("renders without crashing", () => {
    render(<Component />, { wrapper: TestWrapper });
    expect(screen.getAllByText(/lịch học/i).length).toBeGreaterThan(0);
  });

  it("renders schedule rows", () => {
    render(<Component />, { wrapper: TestWrapper });
    // schedule table renders rows for class schedules
    expect(document.querySelectorAll("button, [role='row']").length).toBeGreaterThan(0);
  });
});
