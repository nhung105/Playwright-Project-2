import { expect, test } from "@playwright/test";
import { DatePicker } from "../pages/date-picker";
import BasePage from "../pages/Base";
let datePicker: DatePicker;
test.beforeEach(async ({ page }) => {
    datePicker = new DatePicker(page);
    await datePicker.navigate()
    await datePicker.datePickerMenu.click()
})

// Range Date Picker Example
test.describe('Range Date Picker Example', () => {
    const preselectedValue = "01/01/2018 - 01/15/2018";
    test('Pre-seleted date range appears correctly', async ({ page }) => {
        await page.reload()
        await expect(datePicker.rangeDateCalendar).toHaveValue(preselectedValue)
    })
    test('Select a valid date range', async ({ page }) => {
        await datePicker.rangeDateCalendar.click();
        await page.getByRole("cell", { name: "1", exact: true }).first().click();
        await page.getByRole("cell", { name: "1", exact: true }).nth(2).click();
        await datePicker.applyButton.click()
        await expect(datePicker.rangeDateCalendar).toHaveValue('01/01/2018 - 02/01/2018');
    })
    test('Select the same start and end date', async ({ page }) => {
        await datePicker.rangeDateCalendar.click();
        await page.getByRole("cell", { name: "5", exact: true }).first().click();
        await page.getByRole("cell", { name: "5", exact: true }).first().click();
        await datePicker.applyButton.click()
        await expect(datePicker.rangeDateCalendar).toHaveValue('01/05/2018 - 01/05/2018');
    })

    test('Select a invalid date range', async ({ page }) => {
        await datePicker.rangeDateCalendar.click();
        await page.getByRole("cell", { name: "5", exact: true }).first().click();
        await page.getByRole("cell", { name: "1", exact: true }).first().click();
        await expect(datePicker.applyButton).toBeDisabled()
    })
    test('Calendar popup disappears after clicking outside', async ({ page }) => {
        await datePicker.rangeDateCalendar.click();
        await datePicker.clickOut()
        await expect(page.locator('.daterangepicker')).toBeHidden()
    })
    test('Click Cancel after selecting a valid date range', async ({ page }) => {
        await datePicker.rangeDateCalendar.click();
        await page.getByRole("cell", { name: "1", exact: true }).first().click();
        await page.getByRole("cell", { name: "1", exact: true }).nth(2).click();
        await datePicker.cancelButton.click()
        await expect(datePicker.rangeDateCalendar).toHaveValue(preselectedValue)
    })
})

// Basic Date Picker Example

test.describe('Basic Date Picker Example', () => {
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
})





