import { chromium } from "playwright";
import { wait } from "./wait";

export async function main() {
  const browser = await chromium.launch({ headless: false });
  await browser.newPage();

  /**
   * Solution goes here
   */

  // wait - for easy debugging
  await wait(5000);
}
