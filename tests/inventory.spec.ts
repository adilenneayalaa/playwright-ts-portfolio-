import { test, expect } from '@playwright/test';

test.describe('Inventory & Shopping Cart flows', () => {

    //Hook: log in before each test 
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
    })

    test('User should sort products by price from low to high', async ({ page }) => {
        // 1. Act: Select price low to high from the sort dropdown 
        await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
        // 2. Assert: Verify the first item in the list is the lowest priced item
        const firstItemPrice = page.locator('.inventory_item_price').first();
        await expect(firstItemPrice).toHaveText('$7.99');
    })   

    test('User should add a a specific product to the cart', async ({ page }) => {
        //Constant to store the product name
        const targetProduct = 'Sauce Labs Backpack';
        // 1. Act: Find the product by name and click the add to cart button
        const productLocator = page.locator('.inventory_item').filter({ hasText: targetProduct });
        await productLocator.getByRole('button', { name: 'Add to cart' }).click();
        // 2. Assert: Verify the cart badge shows 1 item and button chamge to "Remove"
        await expect(productLocator.getByRole('button', { name: 'Remove' })).toBeVisible();
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    })    

    test('User should see the added product in the cart', async ({ page }) => {
        //Constant to store the product name
        const targetProduct = 'Sauce Labs Backpack';
        // 1. Act: Add product and click on the cart icon
        const productLocator = page.locator('.inventory_item').filter({ hasText: targetProduct });
        await productLocator.getByRole('button', { name: 'Add to cart' }).click();
        await page.locator('.shopping_cart_link').click();

        // 2. Assert: Verify we are on the cart page and the product is listed
        await expect(page).toHaveURL(/cart.html/);
        await expect(page.locator('.cart_item').filter({ hasText: targetProduct })).toBeVisible();
    })

})    
