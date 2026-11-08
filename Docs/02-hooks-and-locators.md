# 🪝 Playwright Hooks & User-Facing Locators

## 1. Test Hooks (Avoiding Code Duplication - DRY Principle)
Hooks allow us to set up preconditions and clean up after tests without repeating code inside every `test()` block.

| Hook | Execution Timing | Common QA Use Case |
| :--- | :--- | :--- |
| **`test.describe()`** | Groups related tests into a logical suite. | Grouping all Login or Checkout test cases together. |
| **`test.beforeEach()`** | Runs **before every single test** in the file/group. | Navigating to the base URL (`page.goto()`) or resetting state. |
| **`test.afterEach()`** | Runs **after every single test**. | Cleaning up test data or logging out if needed. |
| **`test.beforeAll()`** | Runs **once** before all tests in a worker. | Creating a shared database record or API token. |

---

## 2. Priority of Locators in Playwright
Playwright recommends **User-Facing Locators** that mimic how real users (and AI MCP agents via the Accessibility Tree) perceive the page, avoiding fragile CSS/XPath selectors.

1. **`page.getByRole()`**: Highest priority. Locates elements by their ARIA accessibility role (`button`, `link`, `heading`, `textbox`, `checkbox`).
   * *Example:* `page.getByRole('button', { name: 'Login' })`
2. **`page.getByLabel()`**: Best for form inputs associated with a `<label>`.
3. **`page.getByPlaceholder()`**: Useful when inputs only have placeholder text.
4. **`page.getByText()`**: Finds non-interactive elements (paragraphs, spans, error messages) by their visible text.
5. **`page.getByTestId()`**: Fallback when semantic locators aren't enough (`data-testid="submit-btn"`).
