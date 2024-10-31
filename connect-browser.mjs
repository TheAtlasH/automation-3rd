import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.connect({
    
     browserURL: "http://localhost:9222",
  //     browserWSEndpoint:
  //      "ws://127.0.0.1:9222/devtools/browser/7a1b0d67-f10b-40e4-8b4e-2fb76af1617f",
  //
   });
  const page = (await browser.pages())[0];
  await page.goto("https://codesandbox.io/");

  const title = await page.title();
  const url = await page.url();
  // await browser.close();
  console.log({ title, url });
}

main().catch((e) => console.log(e));
