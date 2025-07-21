import test, { expect } from "@playwright/test";
import { DropDown } from "../pages/drop-down"
import BasePage from "../pages/Base";

let dropDown: DropDown;
test.beforeEach(async ({ page }) => {
    dropDown = new DropDown(page);
    await dropDown.navigateDropDownMenu()
})

test('Verify default pre-selected value', async ({ page }) => {
    await expect(dropDown.DropdownField).toHaveValue('Select a country...');
})
test('Select a valid value', async ({ page }) => {
    await dropDown.DropdownField.selectOption('Albania');
    await expect(dropDown.DropdownField).toHaveValue('Albania');
})

test('Close dropdown using Escape key', async ({ page }) => {
    await dropDown.DropdownField.click();
    await page.keyboard.press('Escape');
    await expect(dropDown.DropdownField).toBeVisible()
})
test('Reload page after selection', async ({ page }) => {
    await dropDown.DropdownField.selectOption('Albania');
    await page.reload()
    await expect(dropDown.DropdownField).toHaveValue('Select a country...');
})
test('Check dropdown values when click Dropdown button', async ({ page }) => {
    const dropdownItem1 = await dropDown.getDropdownitem1()
    const dropdownItem2 = await dropDown.getDropdownitem2()
    const value = [...dropdownItem1, dropdownItem2];
    expect(value).toEqual(['Some action', 'Some other action', 'Hover me for more options'])
})






