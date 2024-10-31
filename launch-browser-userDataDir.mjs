import puppeteer from "puppeteer";

async function main() {
  console.time("LAUNCH");
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    userDataDir: "./awesome-profile",
  });
  const version = await browser.version();
  console.log({ version });

  await browser.close();
  console.timeEnd("LAUNCH");
}

main();
