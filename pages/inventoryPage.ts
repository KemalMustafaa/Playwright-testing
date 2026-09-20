import { Page } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;

    readonly productTitle;
    readonly addToCartButton;
    readonly cartLink;

    constructor(page: Page) {
        this.page = page;

        this.productTitle = page.getByText('Products');
        this.addToCartButton = page.getByRole('button', { name: /add to cart/i }).first();
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}