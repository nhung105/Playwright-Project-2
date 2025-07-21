import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/');
    await page.getByText('Loader').click();
    // await page.locator('#loader-item-menu').click();

})
test('wait load', async ({ page }) => {
    await page.waitForLoadState("load");
    await page.getByText('Some text in my newly loaded page..').waitFor({ state: "visible" })
    await expect(page.getByText('Some text in my newly loaded page..')).toBeVisible();
})

test('sncnsnc', async ({ page }) => {
    console.log
})


