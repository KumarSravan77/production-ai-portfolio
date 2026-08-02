import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";

const pagesBase = "https://kumarsravan77.github.io/production-ai-portfolio";
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://kumarsravan77.github.io/", { headers: { accept: "text/html", "x-forwarded-host": "kumarsravan77.github.io", "x-forwarded-proto": "https" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static render failed with ${response.status}`);
let html = await response.text();
html = html
  .replaceAll("https://kumarsravan77.github.io/og.png", `${pagesBase}/og.png`)
  .replaceAll('href="/assets/', 'href="./assets/')
  .replaceAll('src="/assets/', 'src="./assets/')
  .replace(/<link[^>]+rel="modulepreload"[^>]*>/g, "")
  .replace(/<script[^>]*>[\s\S]*?<\/script>/g, "");

const output = new URL("../_site/", import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL("../dist/client/assets/", import.meta.url), new URL("../_site/assets/", import.meta.url), { recursive: true });
await cp(new URL("../public/og.png", import.meta.url), new URL("../_site/og.png", import.meta.url));
await cp(new URL("../public/favicon.svg", import.meta.url), new URL("../_site/favicon.svg", import.meta.url));

const assets = new URL("../_site/assets/", import.meta.url);
for (const filename of await readdir(assets)) {
  if (!filename.endsWith(".css")) continue;
  const file = new URL(filename, assets);
  const css = await readFile(file, "utf8");
  await writeFile(file, css.replaceAll("/assets/", "./"));
}
await writeFile(new URL("../_site/index.html", import.meta.url), html);
await writeFile(new URL("../_site/.nojekyll", import.meta.url), "");
console.log(`Exported GitHub Pages site to _site (${html.length} bytes).`);
