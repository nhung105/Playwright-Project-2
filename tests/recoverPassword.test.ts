import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/recover-password');
})


test('Leave email empty', async ({ page }) => {
    // await page.getByLabel('email')
    await page.getByRole('button', { name: "Recover Password" }).click();
    const message = await page.getByLabel('email').evaluate((el) => {
        return (el as HTMLInputElement).validationMessage;
    })
    expect(message).toBe('Please fill out this field.')
})

test('Input a email', async ({ page }) => {
    await page.getByLabel('email').fill('abc@gmail.com')
    await page.getByRole('button', { name: "Recover Password" }).click();
    expect(await page.locator('#message').textContent()).toBe('An email with the new password has been sent to abc@gmail.com. Please verify your inbox!')
})

