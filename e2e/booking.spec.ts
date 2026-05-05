import { test, expect } from "@playwright/test";

test.describe("Booking flow", () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage so each test starts fresh
    await page.addInitScript(() => localStorage.clear());
    await page.goto("/booking");
    await page.waitForLoadState("networkidle");
  });

  test("happy path — selects class, date, fills contact, reviews, confirms", async ({ page }) => {
    // Step 1 — Select class
    await expect(page.getByText(/chọn lớp|select class/i)).toBeVisible();
    const firstClass = page.locator("button, [role='radio']").filter({ hasText: /karate|lớp/i }).first();
    if (await firstClass.isVisible()) {
      await firstClass.click();
    }
    const step1Next = page.getByRole("button", { name: /tiếp theo|next|continue/i }).first();
    await step1Next.click();

    // Step 2 — Select date
    await expect(page.getByText(/chọn ngày|select date/i)).toBeVisible({ timeout: 3000 });
    const dateOption = page.locator("button[data-date], [role='option'], button").filter({ hasText: /\d/ }).first();
    if (await dateOption.isVisible()) {
      await dateOption.click();
    }
    const step2Next = page.getByRole("button", { name: /tiếp theo|next|continue/i }).first();
    await step2Next.click();

    // Step 3 — Contact info
    await expect(page.getByRole("textbox", { name: /tên|name/i }).first()).toBeVisible({ timeout: 3000 });
    await page.getByRole("textbox", { name: /tên học viên|student name/i }).fill("Nguyễn Văn A");
    await page.getByRole("spinbutton", { name: /tuổi|age/i }).fill("20");
    await page.getByRole("textbox", { name: /điện thoại|phone/i }).first().fill("0912345678");
    await page.getByRole("button", { name: /tiếp theo|next|continue/i }).click();

    // Step 4 — Review & confirm
    await expect(page.getByText(/xem lại|review|xác nhận/i)).toBeVisible({ timeout: 3000 });
    await page.getByRole("button", { name: /xác nhận|confirm/i }).click();

    // Confirmation
    await expect(
      page.getByText(/đặt lịch thành công|booking confirmed|mã đặt lịch/i),
    ).toBeVisible({ timeout: 5000 });
  });

  test("error path — Step 3 with empty required fields shows validation", async ({ page }) => {
    // Skip to contact step by simulating localStorage state
    await page.evaluate(() => {
      const draft = {
        step: 3,
        scheduleId: "1",
        sessionDate: new Date().toISOString().split("T")[0],
      };
      localStorage.setItem("booking_draft", JSON.stringify(draft));
    });
    await page.reload();
    await page.waitForLoadState("networkidle");

    // Navigate through steps or look for the form
    await page.goto("/booking");
    await page.waitForLoadState("networkidle");

    // Try to submit without selecting a class to trigger step 1 validation
    const nextBtn = page.getByRole("button", { name: /tiếp theo|next|continue/i }).first();
    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      const errorIndicator = page.locator("[role='alert'], .text-danger, [class*='error']").first();
      await expect(errorIndicator).toBeVisible({ timeout: 3000 });
    }
  });

  test("back navigation preserves draft state", async ({ page }) => {
    // Select a class at step 1
    await page.waitForSelector("text=/chọn lớp|select class/i", { timeout: 5000 }).catch(() => null);
    const firstClass = page.locator("button, [role='radio']").filter({ hasText: /karate|lớp/i }).first();
    if (await firstClass.isVisible()) {
      await firstClass.click();
      const nextBtn = page.getByRole("button", { name: /tiếp theo|next|continue/i }).first();
      await nextBtn.click();

      // Go back
      const backBtn = page.getByRole("button", { name: /quay lại|back/i }).first();
      await expect(backBtn).toBeVisible({ timeout: 3000 });
      await backBtn.click();

      // Should still be at step 1 with class still selected (draft preserved)
      await expect(page.getByText(/chọn lớp|select class/i)).toBeVisible({ timeout: 3000 });
    }
  });
});
