import { Locator, Page } from "@playwright/test";
import BasePage from "./base";

export class DatePicker extends BasePage {
    readonly datePickerMenu: Locator;
    readonly datePickerInput: Locator;
    readonly nextIcon: Locator;
    readonly previousIcon: Locator;



    constructor(page: Page) {
        super(page)
        this.datePickerMenu = page.locator('#date-picker');
        this.datePickerInput = page.locator('#calendar');
        this.nextIcon = page.locator('.datepicker-days .next')
        this.previousIcon = page.locator('.datepicker-days .prev')

    }
    async getCurrentMonth() {
        return await this.page.locator('.datepicker-days th.datepicker-switch').textContent();
    }
}
