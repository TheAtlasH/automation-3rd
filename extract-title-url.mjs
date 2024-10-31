import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    executablePath: '/usr/bin/chrome'
  });
  const page = (await browser.pages())[0];
  await page.goto("https://codesandbox.io/");

  const title = await page.title();
  const url = await page.url();
  await browser.close();
  console.log({ title, url });
}

main();
