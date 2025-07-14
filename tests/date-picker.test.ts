import { expect, test } from "@playwright/test";
import { DatePicker } from "../pages/date-picker";
import BasePage from "../pages/base";
let datePicker: DatePicker;

test.beforeEach(async ({ page }) => {
    datePicker = new DatePicker(page);
    await datePicker.navigate()
    await datePicker.datePickerMenu.click()
})

test('Select a valid date', async ({ page }) => {
    await datePicker.datePickerInput.click()
    await page.getByRole('cell', { name: '1', exact: true }).first().click()
    await expect(page.locator('#calendar')).toHaveValue('07/01/2025')
})

test('Verify default placeholder "Pick a date"', async ({ page }) => {
    await expect(datePicker.datePickerInput).toHaveAttribute('placeholder', 'Pick a date');
})

test('Navigate to next month', async ({ page }) => {
    await datePicker.datePickerInput.click()
    const currentMonth = await datePicker.getCurrentMonth()
    await datePicker.nextIcon.click();
    const nextMonth = await datePicker.getCurrentMonth()
    expect(nextMonth).not.toBe(currentMonth)
})






