import { test, expect } from '@playwright/test';

test.describe('Navegación en www.freerangetesters.com', () => {
  const secciones = [
    { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
    { nombre: 'Udemy', url: '/udemy', tituloEsperado: 'Udemy' },
    { nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' },
    { nombre: 'Blog', url: '/blog', tituloEsperado: 'Free Range Testers' },
    // Agregar más secciones si es necesario
  ];

  for (const seccion of secciones) {
    test(`Validar redirección a la sección "${seccion.nombre}"`, async ({ page }) => {
      await test.step('Estando yo en la web principal www.freerangetesters.com', async () => {
        await page.goto('https://www.freerangetesters.com');
        await expect(page).toHaveTitle('Free Range Testers');
      });

      await test.step(`Cuando hago click en "${seccion.nombre}"`, async () => {
        await page.locator('#page_header').getByRole('link', { name: seccion.nombre, exact: true }).click();
        await page.waitForURL(`**${seccion.url}`);
      });

      await test.step(`Soy redirigido a la sección de título "${seccion.tituloEsperado}"`, async () => {
        await expect(page).toHaveTitle(seccion.tituloEsperado);
      });
    });
  }

  test(`Lleno un campo de texto en Automation Sandbox`, async ({ page }) => {
    await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
      await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    })

    await test.step('Puedo colocar texto ', async () => {
      await page.getByPlaceholder('Ingresá texto').fill('Te quiero pequeño frisbys');
    })

  })
  
test('Puedo seleccionar checkboxes', async ({ page }) => {

  await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
      await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
  })

  await test.step('Puedo seleccionar el checkbox pasta', async () => {
    await page.getByLabel('Pasta 🍝').check();
    await page.getByLabel('Pasta 🍝').isChecked();
    await page.getByLabel('Pasta 🍝').uncheck();
  })
})

  test('Puedo seleccionar los radio buttons', async ({ page }) => {
    await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    })

    await test.step('Puedo seleccionar los radio buttons', async () => {
    })
})

});

