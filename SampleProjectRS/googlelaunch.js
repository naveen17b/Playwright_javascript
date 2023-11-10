const { test, expect } = require ('@playwright/test');


test('Browser context Playwright Test',async ({browser})=>       
{
    //await will get activate only if we use the 'async' 
    //{browser}  --- this type of declaration  is called "fixture" 

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/webhp?hl=en&sa=X&sqi=2&pjf=1&ved=0ahUKEwjH1qvZ6Kz8AhWwSGwGHbHLAckQPAgI");


});

test('Page context Playwright Test',async ({browser})=>       
{
    //"test.only" used to test only this particular test only
    //we can directly use the page fixture , it can directly called without using the (*/--*/) steps.
    //await will get activate only if we use the 'async' 
    //{browser}  --- this type of declaration  is called "fixture" 


    // declaring the value as ( "const" ) which are used repeatedly

    const context = await browser.newContext()      // ";" not needed in playwright
    const page = await context.newPage()
    await page.goto("https://profile.w3schools.com/log-in");
    const userName = page.locator("#modalusername")
    const LogIn = page.locator("//body/div[@id='root']/div[1]/div[1]/div[4]/div[1]/div[1]/div[4]/div[1]/button[1]")

   
    // to get the title of the page

    await expect.toHaveTitle("w3schools")

    console.log(await page.title());
   

   //css

    await userName.type("naveenkrishna1331@gmail.com");
    await page.locator("[type='Password']").type("Studthard@123");
    await LogIn.click();

   // assertion to check if the link contains the 

   expect("page.goto('https://my-learning.w3schools.com/')").toContain("https://my-learning.w3schools.com/");

    await page.waitForLoadState("networkidle");

});
