import { Locator, Page } from "@playwright/test";
import { countReset } from "console";
export type RegisterFormFields = {
    firstName?: string,
    lastName?: string,
    phone?: number,
    country?: string,
    email: string,
    password: string
}
export default class RegisterForm {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly phone: Locator;
    readonly country: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly agreeToTerm: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('#firstName')
        this.lastName = page.locator('#lastName')
        this.phone = page.locator('#phone')
        this.country = page.locator('#countries_dropdown_menu')
        this.email = page.locator('#emailAddress')
        this.password = page.locator('#password');
        this.agreeToTerm = page.locator('#exampleCheck1')
        this.registerButton = page.locator('#registerBtn')
    }
    async navigate() {
        await this.page.goto('https://qa-practice.netlify.app/register');
    }
    async fillForm({ firstName, lastName, phone, country, email, password }: RegisterFormFields) {
        if (firstName) await this.firstName.fill(firstName)
        if (lastName) await this.firstName.fill(lastName)
        if (phone) await this.firstName.fill(phone.toString())
        if (country) await this.firstName.fill(country)

        await this.email.fill(email)
        await this.password.fill(password)
    }
    async submitForm() {
        await this.agreeToTerm.click();
        await this.registerButton.click()
    }

}