import { test, expect } from '@playwright/test';

const secciones =
  [
  { name: 'Cursos', url: '/cursos', expectedTitle: 'Cursos' },
  { name: 'Udemy', url: '/udemy', expectedTitle: 'Udemy' },
  { name: 'Recursos', url: '/recursos', expectedTitle: 'Recursos' },
  { name: 'Blog', url: '/login', expectedTitle: 'Acceder a Free Range Testers' },
];
for (const seccion of secciones) {
  //Test001 - Navigate to www.freerangertesters.com
  test(`Validate the redirect to www.freerangertesters.com "${seccion.name}"`, async ({ page }) => {
    await test.step('Navigate to www.freerangertesters.com', async () => {
      await page.goto('https://www.freerangetesters.com/');
      await expect(page).toHaveTitle('Free Range Testers');
    });

    //Test002 - Navigate to section
    await test.step(`Navigate to section "${seccion.name}"`, async () => {
      await page.locator('#page_header').getByRole('link', { name: seccion.name, exact: true }).click();
      await page.waitForURL(`**${seccion.url}**`);
    });

    await test.step(`The user is redirected to the seccion Title "${seccion.expectedTitle}"`, async () => {
      await expect(page).toHaveTitle(seccion.expectedTitle);
    });
  });
}


