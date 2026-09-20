//ini digunakan untuk menyimpan session/storage state dari browser context

import {test as setup} from '@playwright/test';

setup('Login and save session', async ({ page }) => {
    // Arrange
    await page.goto('https://www.saucedemo.com/');

    // Act
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Assert
    //dibagian ini untuk mengambil storage state dari browser dan disimpan ke auth.json
    await page.context().storageState({
        path: "playwright/.auth/user.json",
    });
});