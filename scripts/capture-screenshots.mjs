/**
 * Full-page screenshot capture for client project sites.
 * Usage: node scripts/capture-screenshots.mjs
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "screenshots");

const SITES = [
  { url: "https://recaf.sa/", filename: "recaf-sa.png" },
  { url: "https://mallsapp.me/", filename: "mallsapp-me.png" },
  { url: "https://brokerapp.me/", filename: "brokerapp-me.png" },
  { url: "https://lago.com.sa/en", filename: "lago-com-sa.png" },
  {
    url: "https://aasimalikhan.github.io/Architecture-Design-Studio/",
    filename: "ncd-international.png",
  },
];

async function capture(page, { url, filename }) {
  console.log(`\n→ Loading ${url}`);

  await page.goto(url, {
    waitUntil: "networkidle",
    timeout: 90_000,
  });

  // Extra settle time for lazy images, fonts, and hero animations
  await page.waitForTimeout(4000);

  // Scroll to bottom and back to trigger lazy-loaded content
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = Math.max(window.innerHeight, 600);
    let y = 0;
    const max = document.body.scrollHeight;
    while (y < max) {
      window.scrollTo(0, y);
      await delay(350);
      y += step;
    }
    window.scrollTo(0, 0);
    await delay(800);
  });

  await page.waitForTimeout(2000);

  const outPath = path.join(OUT_DIR, filename);
  await page.screenshot({
    path: outPath,
    fullPage: true,
    type: "png",
    animations: "disabled",
  });

  const dims = await page.evaluate(() => ({
    width: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
  }));

  console.log(`  ✓ Saved ${filename} (${dims.width}×${dims.height}px)`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    locale: "en-US",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  });

  const page = await context.newPage();

  for (const site of SITES) {
    try {
      await capture(page, site);
    } catch (err) {
      console.error(`  ✗ Failed ${site.url}:`, err.message);
    }
  }

  await browser.close();
  console.log("\nDone.");
}

main();
