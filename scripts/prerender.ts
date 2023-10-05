import fs from "fs-extra";
import path from "node:path";
import { createServer } from "http-server";
import puppeteer from "puppeteer";
import { JSDOM } from "jsdom";

const sourceDir = path.resolve(process.cwd(), "./dist/vite");
const port = 6060;
const host = `http://localhost:${port}`;
const rootElementSelector = "#root";
const distDir = path.resolve(sourceDir, "../prerender");
const originalFile = fs.readFileSync(path.resolve(sourceDir, "./index.html"));

const getHTML = async (): Promise<string> => {
  const server = createServer({
    root: sourceDir,
  });
  server.listen(port);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(host);

  const rootSelector = await page.waitForSelector(rootElementSelector);
  const content = await rootSelector?.evaluate((el) => el.innerHTML);

  await browser.close();
  server.close();

  if (content === undefined) throw new Error("Unable to prerender");

  return content;
};

// eslint-disable-next-line unicorn/prefer-top-level-await
void (async (): Promise<void> => {
  fs.removeSync(distDir);

  const html = await getHTML();

  const dom = new JSDOM(originalFile);
  const prerenderEl = dom.window.document.querySelector(rootElementSelector);

  if (prerenderEl === null)
    throw new Error(`Unable to prerender - "${rootElementSelector}" element not found`);

  prerenderEl.innerHTML = html;

  const prerenderedDocument = "<!doctype html>" + dom.window.document.documentElement.outerHTML;

  fs.copySync(sourceDir, distDir);
  fs.writeFileSync(path.resolve(distDir, "./index.html"), prerenderedDocument);
})();
