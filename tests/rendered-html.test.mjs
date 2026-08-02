import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://portfolio.test/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the completed production AI portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Sravan Kumar — Production AI Engineer<\/title>/i);
  assert.match(html, /AI systems/);
  assert.match(html, /Production API Wrapper/);
  assert.match(html, /Public Architecture/);
  assert.match(html, /<strong>15<\/strong><span>Production projects<\/span>/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("includes every public project and removes starter assets", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const repositories = [
    "production-api-wrapper", "token-cost-estimator", "validated-json-agent",
    "cited-rag-bot", "human-in-the-loop-workflow", "streaming-copilot-ui",
    "automated-eval-harness", "local-inference-server", "traced-deployment-pipeline",
    "security-guardrail-middleware", "ai-production-architecture", "aria",
    "fire-drill-chaos-engineering", "incident-investigation-copilot", "on-call-sre-agent",
  ];
  for (const repository of repositories) assert.match(page, new RegExp(repository));
  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
