import { test, expect } from '@playwright/test';

test.describe('Authentication Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('User should login successfully with valid credentials', async ({ page }) => {
    // 1. Act: Fill in valid credentials and click login
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    // 2. Assert: Verify redirection to Inventory page
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('User should see an error message with invalid credentials', async ({ page }) => {
    // 1. Act: Fill in invalid credentials and click login
    await page.getByPlaceholder('Username').fill('invalid_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();

    // 2. Assert: Verify the error message is displayed
    await expect(
      page.getByText('Epic sadface: Username and password do not match any user in this service')
    ).toBeVisible();
  });

});
