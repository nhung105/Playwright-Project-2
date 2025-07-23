import test, { expect } from "@playwright/test";
import RegisterPage from "../../Playwright Project 2/QA-Practice-Playwright-Automation-master/pages/RegisterPage";
let registerPage: RegisterPage;

test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page)
})

test('', async ({ page }) => {
    expect
})
