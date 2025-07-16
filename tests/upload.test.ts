import { Upload } from "../pages/upload";
import { test, expect } from "@playwright/test"

let upload: Upload;
test.beforeEach(async ({ page }) => {
    upload = new Upload(page)
    await upload.navigateUpload()
})
test('Upload file successfully', async ({ page }) => {
    const filePath = "C:\\Users\\ntnhung5\\Downloads\\Danh mục phúc lợi 2025_CMC Global.pdf"
    await upload.chooseFileButton.setInputFiles(filePath)
    await upload.submitButton.click()
    expect(await upload.getUploadMessage()).toContain('Danh mục phúc lợi 2025')
})

