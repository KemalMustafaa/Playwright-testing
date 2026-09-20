import { test, expect } from "@playwright/test";


test.describe('all group',{ tag:'@allGroup' }, async () => {
    test.describe('valid group', { tag:'@validGroup' }, () => {
        test('test step 1', async ({ page }) => {
          console.log('test step 1');
        })
        test('test step 2', async ({ page }) => {
          console.log('test step 2');
        })
        test('test step 3', async ({ page }) => {
          console.log('test step 3');
        })
        test('test step 4', async ({ page }) => {
          console.log('test step 4');
        })
        test('test step 5', async ({ page }) => {
          console.log('test step 5');
        })
    })
    test.describe('invalid group',{ tag:'@invalidGroup' }, () => {
        test('test step 1', async ({ page }) => {
          console.log('test step 1');
        })
        test('test step 2', async ({ page }) => {
          console.log('test step 2');
        })
        test('test step 3', async ({ page }) => {
          console.log('test step 3');
        })
        test('test step 4', async ({ page }) => {
          console.log('test step 4');
        })
        test('test step 5', async ({ page }) => {
          console.log('test step 5');
        })
    })
})



