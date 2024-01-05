// test("Dropdown List",async({page})=>{
//     await page.goto('https://the-internet.herokuapp.com/dropdown');
//     await page.locator('#dropdown').selectOption({label:'Option 1'});
//     await expect(page.locator('#dropdown')).toHaveValue('1');
//     await page.locator('#dropdown').selectOption({label:'Option 2'});
//     await expect(page.locator('#dropdown')).toHaveValue('2');
//     })