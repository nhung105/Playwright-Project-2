import { Locator, Page } from "@playwright/test";
import BasePage from "./Base";

export class Upload extends BasePage {
    readonly chooseFileButton: Locator;
    readonly submitButton: Locator;
    readonly uploadResponse: Locator;
    readonly uploadItem: Locator;


    constructor(page: Page) {
        super(page)
        this.chooseFileButton = page.locator('#file_upload')
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.uploadResponse = page.locator('#file_upload_response')
        this.uploadItem = page.locator('#file-upload-item')
    }
    async getUploadMessage() {
        return await this.uploadResponse.textContent()
    }
    async navigateUpload() {
        await this.navigate();
        await this.uploadItem.click()
    }
}