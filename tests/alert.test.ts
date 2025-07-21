import { expect, test } from "@playwright/test";

const alertButton = "alert-btn";
const confirmButton = "confirm-btn";
const alertText = "Hello! I am an alert box!!"

test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/');
    await page.getByText('Alerts').click();
})
test('Click Alert', async ({ page }) => {

    page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe(alertText)
        await dialog.accept();

    })
    await page.locator('#alert-btn').click();
})


