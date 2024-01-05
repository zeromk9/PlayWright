// const { test, expect } = require('@playwright/test');

// test.describe("Examples", () => {
//     const tbaseURL = 'https://the-internet.herokuapp.com';
//     const tpath = '/download';
//     const turl = tbaseURL + tpath;

//     test("File Downloader", async ({ page }) => {

//         await page.goto(turl);
//         const [download]  = await Promise.all([
//             page.waitForEvent('download'),
//             page.locator('text=sample.png').click(),
//         ]);
//         const path = await  download.path();
//         const url = download.url();
//         console.log(path);
//         console.log(url);
//     })
// });
