const { test, expect } = require ('@playwright/test');

test("lets test the W3schools login page",async({browser}) =>
{
    const context = await browser.newContext();

    const page = await context.newPage();

    // Pass the "URL" and this will open inn a New " incognito" window  
    await page.goto("https://www.udemy.com/join/login-popup/?next=https%3A%2F%2Fwww.udemy.com%2Flogout%2F&skip_suggest=1");

    // css locator to type in the username property of the login page
    await page.locator("[type='email']").type('naveenudemy01@gmail.com');

    // css locator to fill the password proeprty of the login page
    await page.locator("input[name='password']").fill('Naveen1794');

    await page.locator("button[type='submit'] span").click();
    
});