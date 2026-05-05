import { test, expect } from "@playwright/test";

test.describe("Registration form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/registration");
    await page.waitForLoadState("networkidle");
  });

  test("happy path — fills form and sees success message", async ({ page }) => {
    const form = page.getByRole("form", { name: /đăng ký|registration/i });
    await expect(form).toBeVisible();

    await form.getByRole("textbox", { name: /họ tên|name/i }).fill("Nguyễn Văn A");
    await form.getByRole("textbox", { name: /email/i }).fill("test@example.com");
    await form.getByRole("textbox", { name: /điện thoại|phone/i }).fill("0912345678");
    await form.getByRole("spinbutton", { name: /tuổi|age/i }).fill("25");

    const experienceSelect = form.getByRole("combobox", { name: /kinh nghiệm|experience/i });
    await experienceSelect.selectOption({ index: 1 });

    const locationSelect = form.getByRole("combobox", { name: /cơ sở|location/i });
    await locationSelect.selectOption({ index: 1 });

    await form.getByRole("checkbox", { name: /đồng ý|consent/i }).check();
    await form.getByRole("button", { name: /đăng ký|submit/i }).click();

    await expect(page.getByRole("alert").or(page.getByText(/thành công|success/i))).toBeVisible({
      timeout: 5000,
    });
  });

  test("error path — submit with empty fields shows validation errors", async ({ page }) => {
    const form = page.getByRole("form", { name: /đăng ký|registration/i });
    await form.getByRole("button", { name: /đăng ký|submit/i }).click();

    const errors = page.locator("[role='alert'], [aria-live]").filter({ hasText: /bắt buộc|required|invalid/i });
    await expect(errors.first()).toBeVisible({ timeout: 3000 });
  });

  test("skip link is present and accessible", async ({ page }) => {
    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeAttached();
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });
});
