import { expect, test } from '@playwright/test'

test('coronation list order and Rajaraja page', async ({ page }) => {
  await page.goto('./kings')
  const ids = await page.locator('.king-list [data-king]').evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute('data-king')),
  )
  expect(ids[0]).toBe('vijayalaya')
  expect(ids[7]).toBe('rajaraja-i')
  expect(ids.at(-1)).toBe('rajendra-iii')
  expect(ids).not.toContain('aditya-ii')
  await expect(page.locator('[data-king="vijayalaya"]')).toContainText('Debated')
  await expect(page.locator('[data-king="vijayalaya"]')).toContainText('Birth year unknown')
  await page.goto('./dynasty')
  await expect(page.locator('[data-diagram-node="aditya-ii"]')).toHaveCount(1)

  await page.goto('./kings')
  await page.locator('[data-king="rajaraja-i"]').click()
  await expect(page.getByRole('heading', { level: 1, name: 'Rajaraja I' })).toBeVisible()
  await expect(page.locator('.meikeerthi-tamil').last()).toContainText('திருமகள்')
  await expect(page.locator('.realm-figure img')).toBeVisible()
  await expect(page.locator('.birth-name')).toContainText('Arunmolivarman')
})
