import test, { expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/');
    await page.getByText('New Tab / Window').click();
    await page.locator('#browser-window').click();
})
test('click New window', async ({ context, page }) => {
    const [newWindow] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#newWindowBtn').click()])
    await newWindow.waitForLoadState();
    expect(newWindow.url()).toBe('https://qa-practice.netlify.app/web-table.html')
    expect(await newWindow.title()).toBe('QA Practice | Learn with RV');
    await expect(newWindow.getByText('Table Example')).toBeVisible();
})
