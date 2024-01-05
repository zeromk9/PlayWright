// const { test, expect } = require('@playwright/test');

// test.describe("Examples", () => {
//     const tbaseURL = 'https://the-internet.herokuapp.com';
//     const tpath = '/upload';
//     const turl = tbaseURL + tpath;

//     test("File Uploader", async ({ page }) => {

//         await page.goto(turl);
//         const [fileChooser] = await Promise.all([
//             page.waitForEvent('filechooser'),
//             page.locator('#file-upload').click(),
//         ]);
//         await fileChooser.setFiles('uploadedFiles/sample.png');
//         await page.locator('input:has-text("Upload")').click();
//         await expect(page.locator('text=File Uploaded!')).toBeVisible();
//         await expect(page.locator('text=sample.png')).toBeVisible();
//     })
// });
