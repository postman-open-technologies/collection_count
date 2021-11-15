const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.postman.com/salesforce-developers/workspace/salesforce-developers/collection/12721794-67cb9baa-e0da-4986-957e-88d8734647e2?ctx=documentation');
    await page.waitForSelector('.category', { timeout: 1000 });

    const body = await page.evaluate(() => {
      return document.querySelector('body').innerHTML;
    });
    console.log(body);

    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();