import { Locator, Page } from "@playwright/test";


type RegisterFormFields = {

}
class RegisterForm {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly phone: Locator;
    readonly country: Locator;
    readonly email?: Locator;
    readonly password?: Locator;
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

}