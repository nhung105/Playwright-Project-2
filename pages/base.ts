import { Page } from "@playwright/test";
class BasePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigate() {
        await this.page.goto('https://qa-practice.netlify.app/')
    }
}
export default BasePage;