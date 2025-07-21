import test, { expect } from "@playwright/test";

const loginItem = "#auth-shop";


test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/')
    await page.locator(loginItem).click();

})

test('login successfully', async ({ page }) => {
    await page.getByLabel('Email').fill('admin@admin.com')
    await page.getByLabel('Password').fill('admin123')
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('SHOPPING CART')).toBeVisible()
})

test('login with incorrect email format', async ({ page }) => {
    await page.getByLabel('Email').fill('admin');
    await page.getByLabel('Password').fill('admin123')
    await page.getByRole('button', { name: 'Submit' }).click();
    const message = await page.locator('#email').evaluate((el) => {
        return (el as HTMLInputElement).validationMessage;
    });
    expect(message).toBe("Please include an '@' in the email address. 'admin' is missing an '@'.")
})

test('login with wrong password', async ({ page }) => {
    await page.getByLabel('Email').fill('admin@gmail.com');
    await page.getByLabel('Password').fill('admin123')
    await page.getByRole('button', { name: 'Submit' }).click();
    expect(await page.locator('#message').nth(0).textContent()).toBe("Bad credentials! Please try again! Make sure that you've registered.")
})






