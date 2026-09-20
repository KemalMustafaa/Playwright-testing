import { test, expect } from "@playwright/test";

//parameterized / data-driven testing

type LoginTestData = 
{
    scenario: string;
    username: string;
    password: string;
    expectedResult: "success";
}
|
{
    scenario: string;
    username: string;
    password: string;
    expectedResult: "error";
    expectedError: string;   
};

const loginTestData: LoginTestData[] = [
  {
    scenario: "valid_credential",
    username: "standard_user",
    password: "secret_sauce",
    expectedResult: "success",
  },
  {
    scenario: "invalid_username",
    username: "Standart_user",
    password: "secret_sauce",
    expectedResult: "error",
    expectedError: "Epic sadface: Username and password do not match any user in this service",
  },
  {
    scenario: "invalid_password",
    username: "standard_user",
    password: "Secret_sauce",
    expectedResult: "error",
    expectedError: "Epic sadface: Username and password do not match any user in this service",
  },
  {
    scenario: "empty_username",
    username: "",
    password: "secret_sauce",
    expectedResult: "error",
    expectedError: "Epic sadface: Username is required",
  },
  {
    scenario: "empty_password",
    username: "standard_user",
    password: "",
    expectedResult: "error",
    expectedError: "Epic sadface: Password is required",
  },
  {
    scenario: "empty_both",
    username: "",
    password: "",
    expectedResult: "error",
    expectedError: "Epic sadface: Username is required",
  },
];

test.describe("Login", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("https://www.saucedemo.com/");
    });
    
    loginTestData.forEach((data) => {
      test(`Login with ${data.scenario}`, async ({ page }) => {
        // Arrange:
        // Act:
        await page.locator("#user-name").fill(data.username);
        await page.locator("#password").fill(data.password);
        await page.getByRole("button", { name: "Login" }).click();
        // Assert:
        if (data.expectedResult === "success") {
          await expect(page).toHaveURL(/inventory/);
        } else {
          await expect(page.locator('[data-test="error"]')).toContainText(data.expectedError
          );
        }
      });
    });
});

