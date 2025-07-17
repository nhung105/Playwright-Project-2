import test, { expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/');
    await page.getByText('New Tab / Window').click();
    await page.locator('#browser-tab').click();

})

test('click Press me', async ({ page, context }) => {
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#newTabBtn').click()])
    await newPage.waitForLoadState();
    await expect(newPage.getByText('Table Example')).toBeVisible();
    expect(await newPage.title()).toBe('QA Practice | Learn with RV');
    expect(newPage.url()).toBe('https://qa-practice.netlify.app/web-table');
})
