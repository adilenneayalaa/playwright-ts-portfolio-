# 🧹 Clean Code Naming Conventions & Page Object Model (POM) Deep Dive

## 1. TypeScript Naming Conventions (Clean Code Best Practices)
Using consistent naming conventions makes automation code readable, professional, and interview-ready:

| Naming Style | Format | Where to use it in Playwright + TypeScript | Examples |
| :--- | :--- | :--- | :--- |
| **camelCase** | Starts with a **lowercase** letter; each subsequent word starts with Uppercase. | **Variables, class properties (locators), methods/functions, and parameters.** | `const loginPage = ...`<br>`readonly usernameInput: Locator`<br>`async clickLoginButton()` |
| **PascalCase** *(UpperCamelCase)* | Every word starts with an **Uppercase** letter. | **Classes (`class`), Interfaces (`interface`), and Types (`type`).** | `export class LoginPage`<br>`Page`, `Locator` |
| **UPPER_SNAKE_CASE** | All **UPPERCASE** words separated by underscores. | Global constants and environment variables (`.env`). | `BASE_URL`, `DEFAULT_TIMEOUT` |
| **kebab-case** | All **lowercase** words separated by hyphens. | Documentation files, folder names, or multi-word spec files. | `04-clean-code-and-pom-explained.md`<br>`shopping-cart.spec.ts` |

> **💡 Why Class uses `PascalCase` (`LoginPage`) and Variable uses `camelCase` (`loginPage`):**
> In our test files, we need both at the same time: `LoginPage` refers to the **Class blueprint**, while `loginPage` is the **variable instance** holding that page:
> `const loginPage = new LoginPage(page);`

---

## 2. Anatomy of a Page Object Class (Keyword Glossary)

When building a Page Object Model class in TypeScript, every keyword has a specific responsibility:

| Keyword / Concept | What it does | Why QAs need it in POM |
| :--- | :--- | :--- |
| **`export class`** | Defines a reusable blueprint (`class`) and makes it public (`export`) so `.spec.ts` files can import it. | Encapsulates all locators and user actions of a specific web page in one file. |
| **`readonly`** | Prevents a property from being changed after it is initialized in the constructor. | Protects our UI locators (`readonly loginButton: Locator`) from being accidentally overwritten inside a test. |
| **`constructor(page: Page)`** | Special method executed automatically when calling `new LoginPage(page)`. | Receives the Playwright `page` fixture from the test and connects all locators to that browser tab. |
| **`this.`** | Refers to the current class instance. | Allows methods like `login()` to access the locators declared at the top of the same class (`this.usernameInput`). |
| **`async goto()`** | Custom method that wraps `await this.page.goto(...)`. | Centralizes the page URL so tests don't hardcode URLs repeatedly. |
| **`async login(user: string, pass: string)`** | Reusable action method accepting dynamic string parameters. | Combines multiple low-level steps (fill username, fill password, click button) into a single business action reusable across positive and negative tests. |
