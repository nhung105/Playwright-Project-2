import test, { expect } from "@playwright/test";
import { allFieldsData, requiredData } from "../data/RegisterData";
import RegisterForm from "../pages/register";
let registerPage: RegisterForm;

test.beforeEach(async ({ page }) => {
    registerPage = new RegisterForm(page)
    await registerPage.navigate()
})

test('fill all fields', async ({ page }) => {
    await registerPage.fillForm(allFieldsData)
})

test('fill only required fields', async ({ page }) => {
    await registerPage.fillForm(requiredData)
})

test('dcdcd', async ({ page }) => {
    await registerPage.email.fill("abc@gmail.com")
    await registerPage.registerButton.click();
    const message = await registerPage.password.evaluate((el) => {
        return (el as HTMLInputElement).validationMessage
    })
    expect(message).toBe('Please fill out this field.')
})





