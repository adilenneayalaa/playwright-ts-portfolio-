# 📘 TypeScript Basics for QAs & Advanced Element Filtering

## 1. TypeScript Variables (`const` vs `let`) & Data Types
In TypeScript, we declare variables with explicit or inferred types to prevent bugs before running tests:

* **`const` (Constant):** Used 95% of the time in Playwright. Stores values or locators that will not be reassigned.
  ```typescript
  const targetProduct: string = 'Sauce Labs Backpack'
  const expectedCount: number = 1
  const isUserLoggedIn: boolean = true
  ```
* **`let`:** Only used when a variable's value needs to change later (e.g., a counter inside a loop).

---

## 2. Handling Dropdowns & Multiple Matching Elements

| UI Challenge | Playwright Solution | Code Example |
| :--- | :--- | :--- |
| **Native `<select>` Dropdown** | Use `.selectOption()` passing the `value` or visible `label`. | `await page.locator('select').selectOption('lohi')` |
| **Multiple identical buttons on screen** (e.g., 6 "Add to cart" buttons) | Use `.filter({ hasText: '...' })` to scope the search to a specific parent card. | `page.locator('.inventory_item').filter({ hasText: 'Backpack' }).getByRole('button', { name: 'Add to cart' })` |
| **Picking the first or last item in a list** | Use `.first()`, `.last()`, or `.nth(index)`. | `page.locator('.inventory_item_price').first()` |
