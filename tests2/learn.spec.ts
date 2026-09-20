import { test, expect } from '@playwright/test';

test('learn pw on website formy project ', async ({ page }) => {
    await page.goto('https://formy-project.herokuapp.com/');

    await page.getByRole('link', {name:'Autocomplete'}).click(); 
    await page.waitForTimeout(2000)
    //validasi - autocomplete page
    await expect(page).toHaveURL('https://formy-project.herokuapp.com/autocomplete');

    // await expect(page.getByRole('heading', {name: 'Autocomplete'})).toBeVisible()

    //menggunakan locator dari playwright ui
    // await page.getByPlaceholder('Enter address').fill('gg. bojong mekar');

    // await page.getByPlaceholder('Street address', { exact: true }).fill('jl. pintu air');
    // await page.getByPlaceholder('Street address 2').fill('jl. pintu air');
    // await page.getByPlaceholder('City').fill('Bandung');
    // await page.getByPlaceholder('State').fill('Jawa Barat');
    // await page.getByPlaceholder('Zip code').fill('12332');
    // await page.getByPlaceholder('Country').fill('Indonesia');

    //jika menggunakan locator id
    await page.locator('#autocomplete').fill('gg. bojong mekar')
    await page.locator('#street_number').fill('gg. bojong mekar')
    await page.locator('#route').fill('gg. bojong mekar')
    await page.locator('#locality').fill('gg. bojong mekar')
    await page.locator('#administrative_area_level_1').fill('gg. bojong mekar')
    await page.locator('#postal_code').fill('gg. bojong mekar')
    await page.locator('#country').fill('Indonesia')

    
})


