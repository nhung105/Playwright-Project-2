import test, { expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/');
    await page.locator('#pagination').click();

})

const pageNumber = ["1", "2", "3"];
pageNumber.forEach((number) => {
    test(`click ${number}`, async ({ page }) => {
        await page.getByText(number).click();
        expect(await page.locator('#pageResult').textContent()).toContain(`You clicked page no. ${number}`);
    })
})
