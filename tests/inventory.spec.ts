import { test, expect } from "@playwright/test";

// test.use({
//     storageState: 'playwright/.auth/user.json',
//     // storageState: undefined,
// });

test("User can access inventory without login", async ({ page }) => {
    // Arrange:
    await page.goto('/inventory.html');
    // Act:
    
    // Assert:
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText("Products")).toBeVisible();
    
});