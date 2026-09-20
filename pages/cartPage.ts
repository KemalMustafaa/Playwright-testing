import { Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;

    readonly cartTitle;
    readonly checkoutButton;

    constructor(page: Page) {
        this.page = page;

        this.cartTitle = page.getByText('Your Cart');
        this.checkoutButton = page.getByRole('button', { name: /checkout/i });
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}