'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const http = require('node:http');
const { pages } = require('../data/site');

const root = path.resolve(__dirname, '..');
const port = Number(process.env.MOUNTAIN_ATLAS_TEST_PORT) || 3187;
const base = `http://127.0.0.1:${port}`;
let server;
let finished = false;
let logs = '';

function request(pathname) {
  return new Promise((resolve, reject) => {
    const req = http.get(`${base}${pathname}`, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks).toString('utf8') }));
    });
    req.setTimeout(4000, () => req.destroy(new Error(`Request timed out: ${pathname}`)));
    req.on('error', reject);
  });
}

function stopServer() {
  if (server && server.exitCode === null) {
    server.kill('SIGTERM');
  }
}

async function waitForServer() {
  const start = Date.now();
  while (Date.now() - start < 12000) {
    try {
      const response = await request('/health');
      if (response.status === 200) return;
    } catch (_) {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  throw new Error(`Server did not become ready. Output: ${logs}`);
}

async function main() {
  server = spawn(process.execPath, ['server.js'], {
    cwd: root,
    env: { ...process.env, PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  server.stdout.on('data', (chunk) => { logs += chunk.toString(); });
  server.stderr.on('data', (chunk) => { logs += chunk.toString(); });
  server.on('error', (error) => { logs += `\n${error.stack || error}`; });

  await waitForServer();
  const routes = ['/', '/world-ranges', '/search?q=glacier', '/glossary', '/quiz', '/references', '/about', '/mountain-explorer', ...pages.map((page) => `/${page.slug}`)];
  const testedImages = new Set();
  const failures = [];

  for (const route of [...new Set(routes)]) {
    const response = await request(route);
    if (response.status !== 200) failures.push(`${route} returned HTTP ${response.status}`);
    if (/Something went off trail|ReferenceError:|Internal Server Error/i.test(response.body)) failures.push(`${route} rendered an error page or leaked a template error`);
    for (const match of response.body.matchAll(/(?:src|href)=["'](\/img\/[A-Za-z0-9._-]+)["']/g)) testedImages.add(match[1]);
  }

  for (const imageUrl of testedImages) {
    const response = await request(imageUrl);
    if (response.status !== 200) failures.push(`${imageUrl} returned HTTP ${response.status}`);
    if (!/^image\//i.test(String(response.headers['content-type'] || ''))) failures.push(`${imageUrl} has unexpected content type ${response.headers['content-type'] || '(missing)'}`);
  }

  const health = await request('/health');
  if (health.status !== 200 || !health.body.includes('"status":"ok"')) failures.push('/health did not report status=ok');

  if (failures.length) {
    console.error('\nMountain Atlas smoke test FAILED:\n- ' + failures.join('\n- '));
    console.error('\nServer log:\n' + logs);
    process.exitCode = 1;
  } else {
    console.log('Mountain Atlas smoke test passed.');
    console.log(`HTML routes checked: ${[...new Set(routes)].length}; local image URLs checked: ${testedImages.size}.`);
  }
}

main().catch((error) => {
  console.error(`Mountain Atlas smoke test failed: ${error.stack || error}`);
  if (logs) console.error(`\nServer log:\n${logs}`);
  process.exitCode = 1;
}).finally(() => {
  finished = true;
  stopServer();
});

process.on('exit', () => { if (!finished) stopServer(); });
