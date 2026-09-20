import { test, expect } from "@playwright/test";

test.describe("Login Test case", { tag: "@allLogin" }, () => {
  test.beforeEach(async ({ page }) => {
    // TODO: open the page
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  test.afterEach(async ({ page }) => {
    // TODO: clear the data after the test
    await page.waitForTimeout(3000);
  });

  test("valid login", async ({ page }) => {
    // Arrange: sudah ditambahkan di hook beforeEach
    // Act:
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    // Assert:
    await expect(page).toHaveURL(/index/);
  });

  test("invalid username", async ({ page }) => {
    // Arrange: sudah ditambahkan di hook beforeEach
    // Act:
    await page.getByPlaceholder("Username").fill("123");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    // Assert:
    await expect(page.locator('[role="alert"]')).toContainText(
      "Invalid credentials",
    );
  });
  test("invalid password", async ({ page }) => {
    // Arrange: sudah ditambahkan di hook beforeEach
    // Act:
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin12398766");
    await page.getByRole("button", { name: "Login" }).click();
    // Assert:
    await expect(page.locator('[role="alert"]')).toContainText(
      "Invalid credentials",
    );
  });
  test("empty username", async ({ page }) => {
    // Arrange: sudah ditambahkan di hook beforeEach
    // Act:
    await page.getByPlaceholder("Username").fill("");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    // Assert:
    const usernameGroup = page.locator(".oxd-input-group").filter({ has: page.locator('input[name="username"]') });

    await expect(usernameGroup.getByText("Required")).toBeVisible();
  });
  test("empty password", async ({ page }) => {
    // Arrange: sudah ditambahkan di hook beforeEach
    // Act:
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("");
    await page.getByRole("button", { name: "Login" }).click();
    // Assert:
    const passwordGroup = page.locator(".oxd-input-group").filter({ has: page.locator('input[type="password"]') });
    await expect(passwordGroup.getByText("Required")).toBeVisible();
  });
  test("empty both username and password", async ({ page }) => {
    // Arrange: sudah ditambahkan di hook beforeEach
    // Act:
    await page.getByPlaceholder("Username").fill("");
    await page.getByPlaceholder("Password").fill("");
    await page.getByRole("button", { name: "Login" }).click();
    // Assert:
    const usernameGroup = page.locator(".oxd-input-group").filter({ has: page.locator('input[name="username"]') });
    await expect(usernameGroup.getByText("Required")).toBeVisible();
    const passwordGroup = page.locator(".oxd-input-group").filter({ has: page.locator('input[type="password"]') });
    await expect(passwordGroup.getByText("Required")).toBeVisible();

  });
});
