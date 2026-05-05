import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";

import { TestWrapper } from "@/test/test-wrapper";

import { RegistrationForm } from "./registration-form";

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

describe("RegistrationForm", () => {
  beforeEach(() => localStorageMock.clear());

  it("renders all required fields", () => {
    render(<RegistrationForm />, { wrapper: TestWrapper });
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />, { wrapper: TestWrapper });
    await user.click(screen.getByRole("button", { name: /gửi đăng ký/i }));
    await waitFor(() => {
      expect(screen.getAllByRole("alert").length).toBeGreaterThan(0);
    });
  });

  it("shows success message on valid submit", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />, { wrapper: TestWrapper });

    await user.type(screen.getByLabelText(/họ và tên/i), "Nguyễn Văn A");
    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(screen.getByLabelText(/số điện thoại/i), "0912345678");
    await user.type(screen.getByLabelText(/tuổi/i), "20");

    const experienceSelect = screen.getByLabelText(/kinh nghiệm/i);
    await user.selectOptions(experienceSelect, "none");

    const locationSelect = screen.getByLabelText(/cơ sở/i);
    await user.selectOptions(locationSelect, "thuan-giao-1");

    const consent = screen.getByRole("checkbox");
    await user.click(consent);

    await user.click(screen.getByRole("button", { name: /gửi đăng ký/i }));

    await waitFor(() => {
      expect(screen.getByText(/đã nhận thông tin/i)).toBeInTheDocument();
    });
  });

  it("saves entry to localStorage on valid submit", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />, { wrapper: TestWrapper });

    await user.type(screen.getByLabelText(/họ và tên/i), "Nguyễn Văn A");
    await user.type(screen.getByLabelText(/email/i), "a@b.com");
    await user.type(screen.getByLabelText(/số điện thoại/i), "0987654321");
    await user.type(screen.getByLabelText(/tuổi/i), "25");
    await user.selectOptions(screen.getByLabelText(/kinh nghiệm/i), "beginner");
    await user.selectOptions(screen.getByLabelText(/cơ sở/i), "thuan-giao-1");
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: /gửi đăng ký/i }));

    await waitFor(() => {
      const stored = JSON.parse(
        localStorageMock.getItem("vdtv_registrations") ?? "[]",
      ) as unknown[];
      expect(stored).toHaveLength(1);
    });
  });

  it("silently rejects honeypot-filled submission", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />, { wrapper: TestWrapper });

    // Fill honeypot (normally hidden — test by direct form manipulation)
    const honeypot = document.querySelector('input[name="honeypot"]') as HTMLInputElement;
    expect(honeypot).toBeTruthy();
    await user.type(honeypot, "bot-value");

    await user.type(screen.getByLabelText(/họ và tên/i), "Bot");
    await user.type(screen.getByLabelText(/email/i), "bot@bot.com");
    await user.type(screen.getByLabelText(/số điện thoại/i), "0912345678");
    await user.type(screen.getByLabelText(/tuổi/i), "20");
    await user.selectOptions(screen.getByLabelText(/kinh nghiệm/i), "none");
    await user.selectOptions(screen.getByLabelText(/cơ sở/i), "thuan-giao-1");
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: /gửi đăng ký/i }));

    // The form should not show success (honeypot check aborts silently)
    // Honeypot fails zod validation (max(0)) so it won't even reach submit handler
    await waitFor(() => {
      expect(screen.queryByText(/đã nhận thông tin/i)).not.toBeInTheDocument();
    });
    const stored = JSON.parse(localStorageMock.getItem("vdtv_registrations") ?? "[]") as unknown[];
    expect(stored).toHaveLength(0);
  });
});
