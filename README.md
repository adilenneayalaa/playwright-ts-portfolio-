# 🎭 Playwright + TypeScript: Zero to Hero & MCP Portfolio

Welcome to my **QA Automation Engineering** training repository and portfolio using **Playwright and TypeScript**.
This project documents my transition from Manual QA to Test Automation, covering core programming fundamentals, scalable design patterns (**Page Object Model & Custom Fixtures**), API testing, CI/CD pipelines, and **AI-Driven Testing using Playwright MCP (Model Context Protocol)**.

---

## 🗺️ Learning Roadmap & Documentation

Each phase includes practical test suites in `/tests` and step-by-step study guides in `/docs`:

- [x] **Phase 0: Environment Setup & Git Workflow** — Cross-platform setup (macOS/Windows) & repository initialization.
- [ ] **Phase 1: TypeScript for Testers & First E2E Tests** — `async/await`, Promises, AAA pattern, and core locators. ([Architecture Notes](./docs/01-framework-architecture.md))
- [ ] **Phase 2: Mastering User-Facing Locators & Web-First Assertions** — Dynamic elements, auto-waiting, and UI validations.
- [ ] **Phase 3: Scalable Architecture (POM & Custom Fixtures)** — Enterprise-level maintainability and Data-Driven Testing.
- [ ] **Phase 4: Hybrid Testing (API + UI) & Network Mocking** — `APIRequestContext`, fast auth with `storageState`, and API intercepts.
- [ ] **Phase 5: CI/CD with GitHub Actions & Trace Viewer** — Cloud execution, parallelization, and debugging flaky tests.
- [ ] **Phase 6: AI Agents & Playwright MCP** — Automated exploration and test generation via `@playwright/mcp` & Gemini.

---

## ⚡ Quick Survival Guide (Cheat Sheet)

### 1. Fresh Installation (Cloning on a new machine)
```bash
# 1. Install Node.js dependencies from package.json
npm install

# 2. Install Playwright browsers (Chromium, Firefox, WebKit)
npx playwright install
```

### 2. Essential Test Execution Commands
| Action | Terminal Command | When to use it |
| :--- | :--- | :--- |
| **Run all tests (Headless)** | `npx playwright test` | Fast console validation across all browsers. |
| **Run in Headed mode** | `npx playwright test --headed` | Visually watch the browser execute steps. |
| **Run a single spec file** | `npx playwright test tests/login.spec.ts` | Focus on a specific test file while coding. |
| **Interactive UI Mode (⭐ Top)** | `npx playwright test --ui` | **Best for studying & debugging:** time-travel snapshots and locator picker. |
| **Open HTML Report** | `npx playwright show-report` | Inspect detailed test results, traces, and errors. |
| **Launch Codegen** | `npx playwright codegen [https://www.saucedemo.com](https://www.saucedemo.com)` | Record interactions and inspect resilient locators. |

---

## 🧠 "Blank Page" Mental Template (AAA Pattern)

Whenever writing a new test from scratch during a technical interview, follow the **4-Step AAA Pattern (Arrange, Act, Assert)**:

```typescript
// 1. IMPORT Playwright test runner and assertion library
import { test, expect } from '@playwright/test';

// 2. DECLARE test block injecting the { page } fixture inside an async arrow function
test('User should log in successfully with valid credentials', async ({ page }) => {
  
  // 3. ARRANGE: Navigate to the target application
  await page.goto('https://www.saucedemo.com/');

  // 4. ACT: Locate elements using user-facing locators + perform actions
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // 5. ASSERT: Validate expected outcome using Web-First Assertions
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.getByText('Products')).toBeVisible();
});
```

---

## 🔄 Daily Git Workflow (macOS <-> Windows)

1. **Before coding** (pull latest changes from the cloud):
   ```bash
   git pull origin main
   ```
2. **After completing a module or test**:
   ```bash
   git status
   git add .
   git commit -m "docs: add framework architecture notes in English"
   git push origin main
   ```
