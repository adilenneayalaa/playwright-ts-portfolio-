# 🎭 Playwright + TypeScript: Zero to Hero & MCP Portfolio

Bienvenido a mi repositorio de entrenamiento y portafolio de **QA Automation con Playwright y TypeScript**. 
Este proyecto documenta mi transición de QA Manual a QA Automation Engineering, abarcando desde los fundamentos del lenguaje hasta arquitecturas escalables (POM) e integración con **Agentes de IA mediante Playwright MCP**.

---

## 🗺️ Mapa de Progreso (Roadmap & Apuntes)

Cada fase cuenta con sus propios ejercicios prácticos en `/tests` y guías de repaso paso a paso:

- [x] **Fase 0: Setup & Git Workflow** — Configuración multiplataforma (Mac/Windows) y primeros pasos.
- [ ] **Fase 1: TypeScript para Testers & Primeros Tests** — Estructura AAA, `async/await` y locators.
- [ ] **Fase 2: Dominando Locators y Web-First Assertions** — Formularios, tablas dinámicas y esperas automáticas.
- [ ] **Fase 3: Arquitectura Page Object Model (POM) & Fixtures** — Escalabilidad nivel entrevista técnica.
- [ ] **Fase 4: Pruebas Híbridas (API + UI) & Mocking** — `APIRequestContext`, `storageState` e intercepción de red.
- [ ] **Fase 5: CI/CD con GitHub Actions & Trace Viewer** — Ejecución en la nube y depuración avanzada.
- [ ] **Fase 6: Playwright MCP (Model Context Protocol)** — Automatización asistida por Agentes de IA (Gemini).

---

## ⚡ Guía Rápida de Supervivencia (Cheat Sheet)

### 1. Instalación desde cero (Por si clono el repo en otra PC/Mac)
```bash
# 1. Instalar dependencias de Node (lee el package.json)
npm install

# 2. Instalar los navegadores de Playwright (Chromium, Firefox, WebKit)
npx playwright install
```

### 2. Comandos para Ejecutar Pruebas
| Acción | Comando en Terminal | Cuándo usarlo |
| :--- | :--- | :--- |
| **Correr todo (Headless)** | `npx playwright test` | Para validar rápido en consola que todo pasa. |
| **Correr viendo el navegador** | `npx playwright test --headed` | Para ver visualmente qué está haciendo el script. |
| **Correr un solo archivo** | `npx playwright test tests/login.spec.ts` | Cuando estoy programando un test específico. |
| **Modo UI Interactivo (⭐ Top)** | `npx playwright test --ui` | **Mi favorito para estudiar:** permite ver paso a paso, viajar en el tiempo e inspeccionar locators. |
| **Abrir Reporte HTML** | `npx playwright show-report` | Para ver el resumen detallado y capturas de errores. |
| **Generador de código (Codegen)** | `npx playwright codegen [https://www.saucedemo.com](https://www.saucedemo.com)` | Si me bloqueo con un selector difícil. |

---

## 🧠 Mi Plantilla Mental "Anti-Hoja en Blanco"

Cuando en una entrevista técnica me piden escribir un test desde cero, sigo la **estructura AAA (Arrange, Act, Assert)** en 4 pasos:

```typescript
// 1. IMPORTAR las herramientas base de Playwright
import { test, expect } from '@playwright/test';

// 2. DECLARAR el test y pasar el fixture { page } dentro de una función asíncrona
test('Descripción clara del escenario de prueba', async ({ page }) => {
  
  // 3. ARRANGE (Preparar): Navegar a la página
  await page.goto('https://www.saucedemo.com/');

  // 4. ACT (Actuar): Buscar el elemento (Locator) + Ejecutar acción
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // 5. ASSERT (Validar): Confirmar que el resultado es el esperado
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.getByText('Products')).toBeVisible();
});
```

---

## 🔄 Flujo Diario de Git (Mac <-> Windows)

1. **Antes de empezar a programar** (para traer cambios de mi otra máquina):
   ```bash
   git pull origin main
   ```
2. **Al terminar una lección o test**:
   ```bash
   git status
   git add .
   git commit -m "test: agregar escenarios de login"
   git push origin main
   ```
