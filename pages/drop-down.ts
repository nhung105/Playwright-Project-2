import { Locator, Page } from "@playwright/test";
import BasePage from "./base";

export class DropDown extends BasePage {
  readonly DropdownMenu: Locator;
  readonly DropdownField: Locator;
  readonly DropdownButton: Locator;
  readonly dropdownItem1: Locator;
  readonly dropdownItem2: Locator;
  readonly hoverMe: Locator;
  constructor(page: Page) {
    super(page);
    this.DropdownMenu = page.locator("#dropdowns");
    this.DropdownField = page.locator("#dropdown-menu");
    this.DropdownButton = page.locator("#multi-level-dropdown-btn");
    this.dropdownItem1 = page.locator(
      "#multi-level-menu-ul > li.dropdown-item > a"
    );
    this.dropdownItem2 = page.locator(
      "#multi-level-menu-ul > li.dropdown-submenu > a.dropdown-item"
    );
    this.hoverMe = page.getByText("Hover me for more options");
  }
  async navigateDropDownMenu() {
    await this.navigate();
    await this.DropdownMenu.click();
  }
  async getDropdownitem1() {
    await this.DropdownButton.click();
    return await this.dropdownItem1.allTextContents();
  }
  async getDropdownitem2() {
    await this.DropdownButton.click();
    return await this.dropdownItem2.textContent();
  }
}
