import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test("User can login successfully", async ({ page }) => {
    // Arrange:
    const loginPage = new LoginPage(page);

    await page.goto('/');
    // Act:
    await loginPage.login('standard_user', 'secret_sauce');
    // Assert:
    await expect(page).toHaveURL(/inventory/);
});