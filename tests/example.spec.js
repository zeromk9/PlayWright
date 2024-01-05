const { test, expect } = require('@playwright/test');

test.describe("Examples", () => {
    const tbaseURL = 'https://the-internet.herokuapp.com';
    const tpath = '/hovers';
    const turl = tbaseURL + tpath;

    test("GenPDF", async ({ page }) => {

        await page.goto(turl);
        await page.hover('[alt="User Avatar"]');
        await expect(page.locator('text=name: user1')).toBeVisible();
        await page.locator('text=View profile').click();
        await page.pause();
    })
});
