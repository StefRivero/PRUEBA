// e2e_test.js
const { test, expect } = require('@playwright/test');
import { qase } from 'playwright-qase-reporter';

test('FLUJO FELIZ 1', async ({ page }) => {
    // qase.id(12);
    // qase.title('Flujo Feliz 1');
    // qase.fields({ 'severity': 'medium', 'priority': 'medium' });
    // Step #1
    await page.goto('https://www.solotodo.cl/');
    // Step #2
    const searchInput = await page.$('input[name="search"]');
    await searchInput.click();
    // Step #3
    await searchInput.fill('Iphone');
    // expect(true).toBe(true);
});
