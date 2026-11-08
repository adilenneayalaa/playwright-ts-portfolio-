import { test, expect } from 'playwright/test';

test.describe('Inventory & Shopping Cart flows', () => {

    //Hook: log in before each test 
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
    })

    

})    
