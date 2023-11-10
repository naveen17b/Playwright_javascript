const { test, expect} = require ('@playwright/test');
//const { chromium } = require('playwright');


test('Browser context Playwright Test',async ({page})=>       
{
    /*
    //await will get activate only if we use the 'async' 
    //{browser,page}  --- this type of declaration  is called "fixture" 

    const context = await browser.newContext();

    // it opens new window "incognito" page
    const page = await context.newPage();

    */
     //lets store the login and password and singin details in a realated variables and access them
     const userName = page.locator("#username");
     //const passWord = page.locator("[type='password']")
     const signIn = page.locator("#signInBtn");

    // opens up a "URl" sent into the goto() method
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    console.log(await page.title());

    // let's wright the css of login details " username" and "password"

    //await page.locator("#username").type("rahulshettyacademy");  --  this is the right usage

    //await userName.fill('');

    await userName.fill("rahulshettyacademy");
    // wrong login details and logining in 
     
    //await userName.type("rahulshetty");   

    // await page.locator("#username").type("rahulshetty");  --- alternative way of give username css selector

    //await passWord.type("learning");

    await page.locator("[type='password']").fill("learning");

    //await page.locator("#signInBtn").click();

    // css of the error message and print out the text of the error message
    //console.log(await page.locator("[style*='block']").textContent());

    //Asserting the text present in the error message
   // await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await page.locator("select.form-control").selectOption("Teacher");

     // css to signin button
    await signIn.click();

    //await page.waitForTimeout(4000);
   
    /*
    $$ =>  i was struck in the "step - 58 " --- " to add the product into the cart"
    // await page.locator(("div['.Add ']").click());

    */

    /*
    await context.close();
    **to close the present context of the browser after the actions performed
    */

    await page.waitForTimeout(5000);
   // await context.close();

    //await browser.close();

    await page.close();

});

test('checking the checkbox',async({browser}) =>
{
    const context = await browser.newContext();

    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").type("rahulshettyacademy");

    await page.locator("[type='password']").type("learning");

     //chicking the radio buttons
     //await page.getByLabel("body['div:nth-child(2)").check();

     await page.locator('label:nth-child(2)').click();
     //#login-form > div:nth-child(4) > div > label:nth-child(2)

     //page.on('dialog', dialog =>dialog.accept());
     
     // another way of selecting the radio button in the page
    //await page.locator(".radiotextsty").last();

     await page.locator('#okayBtn').click();
     //await dialog.accept();

     //to select checkbox
     await page.locator("#terms").click();
    
      //assertion to checked checkbox
 
    //expect (page.getByLabel("label:nth-child(2)']")).toBeChecked();

    await page.locator("#signInBtn").click();

   
});

test.only('To get the list of products in the page',async({page}) => {
   // const context = await browser.newContext();

   // const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").type("rahulshettyacademy");

    await page.locator("[type='password']").type("learning");

    await page.locator("#signInBtn").click();

   // await page.waitForTimeout(5000);

    console.log(await page.locator(".card-body a").first().textContent());

    // to get the list of all the elements present in the page

    console.log(await page.locator(".card-body a").allTextContents());

    await page.waitForTimeout(2000);

    // lets add products into the cart by clicking on the ADD button

    await page.locator("body > app-root:nth-child(1) > app-shop:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > app-card-list:nth-child(2) > app-card:nth-child(1) > div:nth-child(1) > div:nth-child(3)").click();
    
    //await page.waitForTimeout(2000);
    
    // lets scrole the  mouse bar to the top of the page
    await page.mouse.up();
   
    await page.waitForTimeout(2000);

    // lets checkout the item in the cark and proceed to payment
    await page.locator(".nav-link.btn.btn-primary").click();

    await page.waitForTimeout(3000);

    // lets remove the product from the cart as we had added the wrong product into the cart
    await page.locator("button[class='btn btn-danger']").click();
   
   // await page.waitForTimeout(2000);
    await page.locator("li a[href$='/angularpractice/shop']").click();

    //await page.locator("body > app-root:nth-child(1) > app-shop:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > app-card-list:nth-child(2) > app-card:nth-child(3) > div:nth-child(1) > div:nth-child(3)" ).click();
    await page.locator("div.container div.row div.col-lg-9 app-card-list.row app-card.col-lg-3.col-md-6.mb-3:nth-child(3) div.card.h-100 div.card-footer:nth-child(3) > button.btn.btn-info").click();
    
    // to delay the next step for 3 seconds
    await page.waitForTimeout(3000); 

    //to chick on the checkout button
    await page.locator(".nav-link.btn.btn-primary").click();

    // lets checkout from the cark and make payment of the selected product 
    await page.locator("button[class='btn btn-success']").click();

    //lets click on the purchase button 
    await page.locator("input[value='Purchase']").click();

    // to print the message displayed  after hte paurchase is over

    console.log(await page.locator(".alert.alert-success.alert-dismissible").textContent());

    await expect(page.locator(".alert.alert-success.alert-dismissible")).toContainText('Success!');

    // to close the alert message that is displayed after the purchase
    //await page.locator(".alert.alert-success.alert-dismissible").click();
    
    //await page.on('dialog', dialog =>dialog.dismiss());

    //await page.waitForTimeout(3000);

    await page.locator("a[aria-label='close']").click();

    await page.close();
});

test('lets access the child window of the page', async({browser}) => 

{
    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   
    await page.waitForTimeout(2000);
    /*
    await page.locator("#username").type("rahulshettyacademy");

    await page.locator("[type='password']").type("learning");

    await page.locator("#signInBtn").click();
    */

   // this is the locator of the child window to be  opened
   const newdoc = page.locator(".blinkingText");

    const [newPage] =await Promise.all([

        context.waitForEvent('page'),
        newdoc.click(),
    ]);

   //console.log(await newPage.locator("div.page-wrapper:nth-child(1) div.container div.row div.col-md-8:nth-child(2) > p.im-para.red:nth-child(2)").textContent());
   
   // to print out the text in red 

   let text = await newPage.locator(".red").textContent();
   
   console.log(text);

   // to retrieve the domain name from the text in red
   const splitedtext = text.split("@");

   console.log(splitedtext);

   const domainName = splitedtext[1].split(" ")[0];

   console.log(domainName);

   await newPage.waitForTimeout(3000);

    await newPage.close();

    await page.waitForTimeout(3000);

    await page.close();

});