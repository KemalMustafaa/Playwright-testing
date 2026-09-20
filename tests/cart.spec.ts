import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/inventoryPage";
import { CartPage } from "../pages/cartPage";

test('User can add product to cart', async ({ page }) => {
  //Arrange
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await page.goto('inventory.html/');
  //Act
  await inventoryPage.addProductToCart();
  await inventoryPage.openCart();
  //Assert
  await expect(page.locator(".shopping_cart_link")).toHaveText('1');
  await expect(cartPage.cartTitle).toBeVisible();
})
