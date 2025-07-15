import { Locator, Page } from "@playwright/test";
import BasePage from "./base";

export class DatePicker extends BasePage {
    readonly datePickerMenu: Locator;
    readonly datePickerInput: Locator;
    readonly nextIcon: Locator;
    readonly previousIcon: Locator;
    readonly rangeDateCalendar: Locator;
    readonly applyButton: Locator;
    readonly cancelButton: Locator;



    constructor(page: Page) {
        super(page)
        this.datePickerMenu = page.locator('#date-picker');
        this.datePickerInput = page.locator('#calendar');
        this.nextIcon = page.locator('.datepicker-days .next')
        this.previousIcon = page.locator('.datepicker-days .prev')
        this.rangeDateCalendar = page.locator('#range-date-calendar')
        this.applyButton = page.getByRole("button", { name: "Apply" });
        this.cancelButton = page.getByRole("button", { name: "Cancel" });

    }
    async getCurrentMonth() {
        return await this.page.locator('.datepicker-days th.datepicker-switch').textContent();
    }
    async clickOut() {
        await this.page.locator('body').click()
    }
}
