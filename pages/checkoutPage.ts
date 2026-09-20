import { Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    
    readonly firstNameInput;
    readonly lastNameInput;
    readonly postalCodeInput;
    readonly continueButton;

    constructor(page: Page) {
        this.page = page;

        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.getByRole('button', { name: /continue/i });
    }

    async checkoutForm(first: string, last: string, postal: string) {
        await this.firstNameInput.fill(first);
        await this.lastNameInput.fill(last);
        await this.postalCodeInput.fill(postal);
        await this.continueButton.click();

    }
}