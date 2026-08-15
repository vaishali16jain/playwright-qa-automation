import { test, expect } from '@playwright/test';

test('Navigate EPAM Services and verify Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  const services = page.getByRole('link', { name: 'Services' }).first();
  await expect(services).toBeVisible();
  await services.hover();

  const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
  await expect(clientWorkLink).toBeVisible({ timeout: 10000 });
  await clientWorkLink.click();

  await expect(page.getByText(/Client Work/i)).toBeVisible({ timeout: 10000 });
});
