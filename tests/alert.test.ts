import { expect, test } from "@playwright/test";

const alertButton = "alert-btn";
const confirmButton = "confirm-btn";
const alertText = "Hello! I am an alert box!!";

test.beforeEach(async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/");
  await page.getByText("Alerts").click();
});
test.afterEach(async ({ page }) => {
  await page.close();
});

test("Click Alert", async ({ page }) => {
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe(alertText);
    await dialog.accept();
  });
  await page.locator("#alert-btn").click();
});
test("Click button confirm", async ({ page }) => {
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe("Press a button!\nEither OK or Cancel.");
    await dialog.dismiss();
  });
  await page.locator("#confirm-btn").click();
});
