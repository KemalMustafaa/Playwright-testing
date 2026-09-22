import { Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    
    readonly firstNameInput;
    readonly lastNameInput;
    readonly postalCodeInput;
    readonly continueButton;
    
    readonly finishButton;
    readonly completeMessage;

    constructor(page: Page) {
        this.page = page;

        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.getByRole('button', { name: /continue/i });

        this.finishButton = page.getByRole('button', { name: /finish/i });
        this.completeMessage = page.getByText('Thank you for your order!');
    }

    async checkoutForm(
        first: string,
        last: string,
        postal: string,
    ) {
        await this.firstNameInput.fill(first);
        await this.lastNameInput.fill(last);
        await this.postalCodeInput.fill(postal);
    }

    async continueToOverview() {
        await this.continueButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
    }
}