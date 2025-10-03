


const {test, expect} = require('@playwright/test');

test('Browser Context Playwright Test', async ({browser})=> {
 
    const context = await browser.newContext();

    const page = await context.newPage();

    const userName = page.locator('#username');

    const passWord = page.locator('#password');

    const signIn = page.locator('#signInBtn');

    const cardTitles = page.locator(".card-body a");

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    console.log(await page.title());

    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    await userName.fill("atk.mail.com");

    await passWord.fill("Atk.1881");

    await signIn.click();

    await expect (page.locator('.alert.alert-danger')).toContainText("Incorrect");

    console.log(await page.locator('.alert.alert-danger').textContent());

    await userName.fill(""); // clears the text field

    await userName.fill("rahulshettyacademy");

    await passWord.fill("");

    await passWord.fill("learning");

    await signIn.click();

    // after logging in

    console.log(await cardTitles.first().textContent());

    console.log(await cardTitles.nth(1).textContent());

    const allTitles = await cardTitles.allTextContents();

    console.log(allTitles);

    //await expect(allTitles).textContent('Nokia');

});

test('Page Playwright Test', async ({page})=> {
 
    // const context = await browser.newContext();

    // const page = await context.newPage();

    await page.goto('https://www.google.com/');

    console.log(await page.title());

    await expect(page).toHaveTitle("Google");

});