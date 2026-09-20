import { test, expect } from "@playwright/test";

//hooks
test.beforeEach(async ({ page }) => {
    await page.goto("https://formy-project.herokuapp.com/");
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
});

test.describe("all links", { tag: "@all_links" }, () => {
  test.describe("valid links on the homepage", { tag: "@validLinks" }, () => {
    test("test case 1 ", async ({ page }) => {
    //   await page.goto("https://formy-project.herokuapp.com/");
      await page.getByRole("link", { name: "Autocomplete" }).click();
    //   await page.waitForTimeout(3000);
    });
    test("test case 2 ", async ({ page }) => {
        // await page.goto("https://formy-project.herokuapp.com/");
        await page.getByRole("link", { name: "Buttons" }).click();
        // await page.waitForTimeout(3000);
    });
    test("test case 3 ", async ({ page }) => {
        // await page.goto("https://formy-project.herokuapp.com/");
        await page.getByRole("link", { name: "Checkbox" }).click();
        // await page.waitForTimeout(3000);
    });
    test("test case 4 ", async ({ page }) => {
        // await page.goto("https://formy-project.herokuapp.com/");
        await page.getByRole("link", { name: "Datepicker" }).click();
        // await page.waitForTimeout(3000);
    });
  });
});
