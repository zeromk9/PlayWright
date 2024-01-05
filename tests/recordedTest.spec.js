// const { test, expect } = require('@playwright/test');

// test.skip('test', async ({ page }) => {
//   await page.goto('https://demoqa.com/');
//   await page.locator('div').filter({ hasText: /^Elements$/ }).first().click();
//   await page.locator('li').filter({ hasText: 'Text Box' }).click();
//   await page.getByPlaceholder('Full Name').click();
//   await page.getByPlaceholder('Full Name').fill('test');
//   await page.getByPlaceholder('name@example.com').click();
//   await page.getByPlaceholder('name@example.com').fill('test@email.com');
//   await page.getByPlaceholder('Current Address').click();
//   await page.getByPlaceholder('Current Address').fill('test');
//   await page.locator('#permanentAddress').click();
//   await page.locator('#permanentAddress').fill('test');
//   await page.getByRole('button', { name: 'Submit' }).click();
// });