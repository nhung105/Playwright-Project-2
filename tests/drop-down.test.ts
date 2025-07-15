import test, { expect } from "@playwright/test";
import { DropDown } from "../pages/drop-down";
import BasePage from "../pages/base";

let dropDown: DropDown;
test.beforeEach(async ({ page }) => {
  dropDown = new DropDown(page);
  await dropDown.navigateDropDownMenu();
});

test("Verify default pre-selected value", async ({ page }) => {
  await expect(dropDown.DropdownField).toHaveValue("Select a country...");
});
test("Open dropdown menu", async ({ page }) => {});
