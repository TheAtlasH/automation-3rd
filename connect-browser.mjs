import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.connect({
    
       browserWSEndpoint:
        "ws://127.0.0.1:9222/devtools/browser/150d8f7c-2f8c-4ac4-85af-d8887972f1e6",
  
   });
  const page = (await browser.pages())[0];
  await page.goto("https://codesandbox.io/");

  const title = await page.title();
  const url = await page.url();
  // await browser.close();
  console.log({ title, url });
}

main().catch((e) => console.log(e));
