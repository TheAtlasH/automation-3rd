import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    executablePath: executablePath(),
  });
  const version = await browser.version();
  console.log({ version });
  await browser.close();
}

main();
