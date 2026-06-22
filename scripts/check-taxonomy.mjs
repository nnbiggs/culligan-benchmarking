import { chromium } from "playwright";

const port = process.argv[2] ?? "5177";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
});

await page.goto(`http://localhost:${port}/taxonomy`, { waitUntil: "networkidle", timeout: 20000 });
await page.waitForTimeout(2500);
const rootText = await page.locator("#root").innerText().catch(() => "");
console.log(JSON.stringify({ port, contentLength: rootText.length, hasHero: rootText.includes("IT Operating Model"), errors }, null, 2));
await browser.close();
