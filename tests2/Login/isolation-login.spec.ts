// test ini untuk membuktikan bahwa test 2 tidak otomatis menjadi login hanya karena test 1 sebelumnya sudah login.

import {test, expect} from "@playwright/test";

test("Test 1 - Login", async ({ page }) => {
    // Arrange:
    await page.goto('https://www.saucedemo.com/');
    // Act:
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    // Assert:
    await expect(page).toHaveURL(/inventory/);
});

test("Test 2 - Check Login State", async ({ page }) => {
    // Arrange:
    await page.goto('https://www.saucedemo.com/');
    // Act:
    
    // Assert:
    await expect(page.getByRole('button', {name: 'Login'})).toBeVisible();
});