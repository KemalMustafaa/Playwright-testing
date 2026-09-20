import { test, expect } from "@playwright/test";

test.describe("Hooks Exercise", () => {
  test.beforeAll(async () => {
    console.log("START TEST SUITE");
  });

  test.beforeEach(async ({ page }) => {
    // TODO: open the page
    await page.goto("https://www.saucedemo.com/");
  });

  test.afterEach(async () => {
    // TODO: clear the data after the test
    console.log("After Each");
  });

  test.afterAll(async () => {
    console.log("END TEST SUITE");
  });

  test("title validation", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
    await expect(page).toHaveTitle("Swag Labs");
  });
  test("username field validation", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
    await expect(page.locator("#user-name")).toBeVisible();
  });
  test("password field validation", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
    await expect(page.locator("#password")).toBeVisible();
  });
});
