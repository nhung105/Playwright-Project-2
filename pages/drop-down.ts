import { Locator, Page } from "@playwright/test";
import BasePage from "./base";

export class DropDown extends BasePage {
    readonly DropdownMenu: Locator;
    readonly DropdownField: Locator;
    constructor(page: Page) {
        super(page)
        this.DropdownMenu = page.locator('#dropdowns')
        this.DropdownField = page.locator('#dropdown-menu')
    }
    async navigateDropDownMenu() {
        await this.navigate()
        await this.DropdownMenu.click()
    }
}