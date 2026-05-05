import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import { i18n } from "@/shared/i18n";

import { Component } from "./booking-page";

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      store = Object.fromEntries(Object.entries(store).filter(([k]) => k !== key));
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

function Wrapper({ search = "" }: { search?: string }) {
  return (
    <MemoryRouter initialEntries={[`/booking${search}`]}>
      <I18nextProvider i18n={i18n}>
        <Component />
      </I18nextProvider>
    </MemoryRouter>
  );
}

describe("BookingPage", () => {
  it("renders booking flow by default", () => {
    render(<Wrapper />);
    expect(screen.getByText(/đặt lịch học/i)).toBeInTheDocument();
  });

  it("renders my bookings list when ?my=true", () => {
    render(<Wrapper search="?my=true" />);
    expect(screen.getByText(/bạn chưa có lịch học nào/i)).toBeInTheDocument();
  });
});
