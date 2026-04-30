import "@testing-library/jest-dom";
import * as jestDomMatchers from "@testing-library/jest-dom/matchers";
import { toHaveNoViolations } from "jest-axe";
import { expect, vi } from "vitest";

expect.extend(jestDomMatchers);
expect.extend(toHaveNoViolations);

// jsdom does not implement matchMedia — provide a minimal stub
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(() => false),
  })),
});
