import test, { expect } from "@playwright/test";
const rows = '#peopleTable > tbody > tr';
const serialColumn = '#peopleTable > tbody > tr > th[scope="row"]';
test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/');
    await page.getByText('Tables').click();
    await page.getByText('Static Table').click();
})

test('Verify row count', async ({ page }) => {
    const rowsCount = await page.locator(rows).count();
    expect(rowsCount).toBe(5)
})

test('Validate email format in all rows', async ({ page }) => {
    const emailsData = await page.locator('#peopleTable > tbody > tr > td:nth-child(4)').allTextContents()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailsData)
    emailsData.forEach((email) => {
        expect(email).toMatch(emailRegex);
    })
})
test('Verify sequence in serial number column', async ({ page }) => {
    const serialNumbers = await page.locator(serialColumn).allTextContents();
    serialNumbers.forEach((serial, index) => {
        expect(parseInt(serial)).toBe(index + 1)
    })
})
test('Verify cell contains specific value', async ({ page }) => {
    const a = await page.locator('#peopleTable > tbody > tr:nth-child(1) > td:nth-child(2)').textContent()
    console.log(a)
})

test('Verify cell contains specific valuesdsd', async ({ page }) => {
    const a = await page.locator('#peopleTable > tbody > tr > td').nth(1).textContent()
    console.log(a)
    expect(a).toBe('Otto')
    const b = await page.locator('#peopleTable > tbody > tr:nth-child(2) > td:nth-child(3)').textContent()
    console.log(b)
    expect(b).toBe('Thornton')
})



