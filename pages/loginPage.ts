// Import 'Page' (browser tab) and 'Locator' (UI element) types from Playwright
import {type Locator, type Page} from '@playwright/test';

/**
 * EXPORT CLASS (PascalCase):
 * 'export' allows us to import this class inside our test files 
 * 'class' us a blueprint that groups all locators and actions for the Login screen 
*/

export class LoginPage{
    /**
     * 1. CLASS PROPETIES (camelCase) + READONLY
     * Here we declare the variables that belong to this page and their typescript types.
     * 'readonly' is a safety lock: once these locators are initialized in the constructor, they cannot be reassigned to a different value.
     */
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    /** 
     * 2. CONSTRUCTOR:
     * This special function runs AUTOMATICLLY when we write 'new LoginPage(page)' in our test
     * It receives the active browser 'page' from the test and assings the acctual locators
     * to our class properties using the 'this' keyword ('this refers to the current loginPage instance')
    */

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('[data-test="error"]');
    }

    /**
     * 3. ACTIONS METHODS (async / await):
     * Methods are reusable functions representing user actions on this page 
     * They must be marked as 'async' because browser onteractions return promises and require 'await' to resolve them
     */

    // Action 1: Navigate directly to the app login URL
    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    // Action 2: Perform the full login flow
    // It accepts 'username' and 'password' parameters (typed as 'string) se we can reuse
    // this exact same method for both valid and invalid login test cases.
    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

