# 🏗️ Test Automation Framework Architecture (Playwright + TypeScript)

## 1. Manual QA vs. Automation Framework Analogy
Translating Manual QA concepts into a scalable Test Automation Framework:

| Manual QA Concept | Playwright + TS Component | Purpose & Responsibility |
| :--- | :--- | :--- |
| **Test Plan & Environment Setup** (Browser selection, QA/Staging URLs, wait times) | `playwright.config.ts` & `.env` | Central configuration hub. Controls browsers, timeouts, baseURL, retries, and environment variables without touching test code. |
| **Eyes & Hands** (Finding elements on the screen and interacting with them) | **`pages/` (Page Object Model - POM)** | **Never repeat locators across tests.** Stores UI locators and page-specific actions (e.g., `loginPage.login()`). |
| **Test Cases** (Test steps and Expected Results) | **`tests/*.spec.ts`** | Contains **only** business logic, test flows, and assertions (`expect`). Should read like plain English. |
| **Test Data** (Valid users, credit cards, invalid inputs) | **`test-data/`** | External `.json` or `.csv` files and data generators (Faker) to avoid hardcoding sensitive or static data inside test scripts. |
| **Preconditions** (User already logged in, data created before test) | **`fixtures/` & `utils/` (API Helpers)** | Sets up test state before execution (e.g., injecting `storageState` cookies/tokens or seeding data via API) for fast execution. |
| **Bug Evidence** (Screenshots, screen recordings, network logs for Jira) | **`playwright-report/` & `test-results/`** | Auto-generated execution reports, including the **Playwright Trace Viewer** (DOM snapshots, network tab, console logs, and video). |

---

## 2. Industry-Standard Folder Structure

As this portfolio scales from Phase 1 to Phase 6, it follows this modular structure:

```text
playwright-ts-portfolio/
│
├── 📂 .github/workflows/       # CI/CD: GitHub Actions pipeline running tests on every push/PR
│   └── playwright.yml
│
├── 📂 docs/                    # 📚 Study notes, architecture guides, and cheat sheets
│   └── 01-framework-architecture.md
│
├── 📂 pages/                   # Page Object Model (POM): 1 class per web page/component
│   ├── LoginPage.ts            # Locators and actions for the Login screen
│   └── InventoryPage.ts        # Locators and actions for the Products catalog
│
├── 📂 fixtures/                # Custom Playwright fixtures & authentication state (storageState)
│   └── customFixtures.ts
│
├── 📂 test-data/               # Data-Driven Testing (DDT) files
│   └── users.json              # Valid, locked, and invalid user credentials
│
├── 📂 tests/                   # 🧪 Test Suites (.spec.ts) containing assertions (expect)
│   ├── ui/                     # End-to-End (E2E) UI tests
│   │   └── login.spec.ts
│   └── api/                    # REST API integration tests
│       └── users-api.spec.ts
│
├── 📄 .env                     # Secret environment variables (Untracked by Git!)
├── 📄 .gitignore               # Files ignored by Git (node_modules, .env, .DS_Store, reports)
├── 📄 package.json             # Node.js dependencies and custom npm scripts
├── 📄 playwright.config.ts     # ⚙️ Global framework configuration
└── 📄 README.md                # Portfolio overview and command cheat sheet
```
