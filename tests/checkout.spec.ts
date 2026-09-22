import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/inventoryPage";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkoutPage";

test("User can proceed to checkout", async ({ page }) => {
    // Arrange:
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('inventory.html');
    // Act:
    await inventoryPage.addProductToCart();
    await inventoryPage.openCart();
    await cartPage.checkout();

    await checkoutPage.checkoutForm(
        'coba',
        'coba', 
        '123123',
    );
    await checkoutPage.continueToOverview();
    await checkoutPage.finishOrder();
    
    // Assert:
    // await expect(page).toHaveURL(/checkout-step-two/);
    // await expect(checkoutPage.firstNameInput).toBeVisible();
    await expect(checkoutPage.completeMessage).toBeVisible();
});
