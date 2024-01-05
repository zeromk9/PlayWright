const { test, expect } = require('@playwright/test');

// test.describe("Examples", () => {


//     test.use({
//         storageState: "automationUser.json"
//     })
//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://parabank.parasoft.com');
//     })

//     test.skip('Saving Automation', async ({ page }) => {
//         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
//         await page.locator('input[name="username"]').click();
//         await page.locator('input[name="username"]').fill('automationUser');
//         await page.locator('input[name="password"]').click();
//         await page.locator('input[name="password"]').fill('admin');
//         await page.getByRole('button', { name: 'Log In' }).click();

//         await page.context().storageState({path: 'automationUser.json'})
//     });

//     test("Test 2", async ({ page }) => {
//         await page.locator('text=Transfer funds').first().click();
//     })
//     test("Test 3", async ({ page }) => {
//         await page.locator('text=Bill Pay').first().click();
//     })


    
    // test("Testing Assertions",async ({page})=>{
    //     await page.goto('https://demoqa.com/text-box');
    //     await expect(page).toHaveTitle("DEMOQA");
    //     await expect(page).toHaveURL("https://demoqa.com/text-box");
    // })

// "test:chrome":"npx playwright test --config=playwright.config.js --project=Chrome",
// "test:firefox":"npx playwright test --config=playwright.config.js --project=Firefox",
// "test:webkit":"npx playwright test --config=playwright.config.js --project=Webkit"


// test.describe("Examples", () => {
//     test("Testing Selectors", async ({ page }) => {
//         await page.goto("https://demoqa.com/text-box");
//         //await page.pause();
//         await page.locator('#userName').type("Test Username");
//         //await page.pause();
//         await page.locator('[placeholder="name@example.com"]').type("testemail@test.com");
//         //await page.pause();
//         await page.locator('#currentAddress').type("This is the current Address");
//         //await page.pause();
//         await page.locator('#permanentAddress').type("This is the permanent address");
//         //await page.pause();
//         await page.locator('button:has-text("Submit")').click();


//         const name = page.locator('#name');
//         const email = page.locator('email');
//         const currentAddress = page.locator('#currentAddress');
//         const permanentAddress = page.locator('#permanentAddress');

//         await expect(name).toBeVisible();
//         await expect(name).toHaveText('Name:Test Username');

//         await expect(email).toBeVisible();
//         await expect(email).toHaveText('Email:test@email.com');   

//         await expect(currentAddress).toBeVisible();
//         await expect(currentAddress).toHaveText("Current Adress :Current Address Test");

//         await expect(permanentAddress).toBeVisible();
//         await expect(permanentAddress).toHaveText("Permanent Address :test");

//     })
// })


// const { test, expect } = require('@playwright/test');

// test.describe.parallel("Smoke test", () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto("/");
//     })
//     test.afterEach(async ({ page }) => {
//         console.log("This test finished");
//     })


//     test("Simple click test", async ({ page }) => {
//         await page.click('text=Add/Remove Elements');
//         await page.click('text=Add Element');
//     })
// })









// "test:chrome":"npx playwright test --config=playwright.config.js --project=Chrome",
// "test:firefox":"npx playwright test --config=playwright.config.js --project=Firefox",
// "test:webkit":"npx playwright test --config=playwright.config.js --project=Webkit"


// test.describe("Examples", () => {
//     test("Testing Selectors", async ({ page }) => {
//         await page.goto("https://demoqa.com/text-box");
//         //await page.pause();
//         await page.locator('#userName').type("Test Username");
//         //await page.pause();
//         await page.locator('[placeholder="name@example.com"]').type("testemail@test.com");
//         //await page.pause();
//         await page.locator('#currentAddress').type("This is the current Address");
//         //await page.pause();
//         await page.locator('#permanentAddress').type("This is the permanent address");
//         //await page.pause();
//         await page.locator('button:has-text("Submit")').click();


//         const name = page.locator('#name');
//         const email = page.locator('email');
//         const currentAddress = page.locator('#currentAddress');
//         const permanentAddress = page.locator('#permanentAddress');

//         await expect(name).toBeVisible();
//         await expect(name).toHaveText('Name:Test Username');

//         await expect(email).toBeVisible();
//         await expect(email).toHaveText('Email:test@email.com');   

//         await expect(currentAddress).toBeVisible();
//         await expect(currentAddress).toHaveText("Current Adress :Current Address Test");

//         await expect(permanentAddress).toBeVisible();
//         await expect(permanentAddress).toHaveText("Permanent Address :test");

//     })
// })


// const { test, expect } = require('@playwright/test');

// test.describe.parallel("Smoke test", () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto("/");
//     })
//     test.afterEach(async ({ page }) => {
//         console.log("This test finished");
//     })


//     test("Simple click test", async ({ page }) => {
//         await page.click('text=Add/Remove Elements');
//         await page.click('text=Add Element');
//     })
// })