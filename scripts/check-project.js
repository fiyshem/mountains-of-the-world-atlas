'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { pages, navGroups, topNavGroups, rangeCards, glossary } = require('../data/site');

const root = path.resolve(__dirname, '..');
const errors = [];
const notes = [];
const exists = (relativePath) => fs.existsSync(path.join(root, relativePath));
const requireFile = (relativePath, reason) => {
  if (!exists(relativePath)) errors.push(`Missing ${reason}: ${relativePath}`);
};

requireFile('server.js', 'server');
requireFile('package.json', 'package manifest');
requireFile('views/pages/article.ejs', 'article template');
requireFile('public/css/site.css', 'stylesheet');
requireFile('public/js/site.js', 'client script');

const slugs = new Set();
for (const page of pages) {
  if (!page.slug || slugs.has(page.slug)) errors.push(`Missing or duplicate page slug: ${page.slug}`);
  slugs.add(page.slug);
  if (!page.image) errors.push(`Page has no image field: ${page.slug}`);
  else requireFile(path.posix.join('public/img', page.image), `image asset for ${page.slug}`);
  if (page.contentFile) requireFile(path.posix.join('content', page.contentFile), `content file for ${page.slug}`);
}

for (const range of rangeCards) {
  if (!slugs.has(range.slug)) errors.push(`Range card links to unknown page: ${range.slug}`);
  requireFile(path.posix.join('public/img', range.image), `range-card image for ${range.name}`);
}

for (const group of [...navGroups, ...topNavGroups]) {
  for (const link of group.links) {
    const slug = link[1];
    if (!slugs.has(slug)) errors.push(`Navigation link points to unknown page: ${slug}`);
  }
}

const viewsRoot = path.join(root, 'views');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}
for (const file of walk(viewsRoot).filter((name) => name.endsWith('.ejs'))) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/src=["']\/img\/([^"'<%]+)["']/g)) {
    requireFile(path.posix.join('public/img', match[1]), `image referenced from ${path.relative(root, file)}`);
  }
  for (const match of source.matchAll(/include\(['"]([^'"]+\.ejs)['"]/g)) {
    const included = path.resolve(path.dirname(file), match[1]);
    if (!fs.existsSync(included)) errors.push(`Missing EJS partial included by ${path.relative(root, file)}: ${match[1]}`);
  }
}

const imageDir = path.join(root, 'public', 'img');
const supportedImagePattern = /\.(svg|png|apng|jpe?g|webp|avif|gif|bmp)$/i;
const imageFiles = fs.readdirSync(imageDir).filter((name) => supportedImagePattern.test(name));
if (!imageFiles.length) errors.push('No local image assets were found under public/img.');
for (const name of imageFiles.filter((name) => name.toLowerCase().endsWith('.svg'))) {
  const source = fs.readFileSync(path.join(imageDir, name), 'utf8');
  if (!/<svg\b/i.test(source) || !/<\/svg>\s*$/i.test(source)) errors.push(`SVG may be incomplete or malformed: public/img/${name}`);
}

for (const file of ['server.js', 'data/site.js', 'public/js/site.js', 'scripts/check-project.js', 'scripts/smoke-test.js']) {
  const checked = spawnSync(process.execPath, ['--check', path.join(root, file)], { encoding: 'utf8' });
  if (checked.status !== 0) errors.push(`JavaScript syntax check failed for ${file}: ${(checked.stderr || checked.stdout || '').trim()}`);
}

const articleTemplate = fs.readFileSync(path.join(root, 'views/pages/article.ejs'), 'utf8');
if (!articleTemplate.includes("typeof explorer !== 'undefined' && explorer")) {
  errors.push('Article template is missing the safe explorer-variable check.');
}
if (!articleTemplate.includes("typeof relatedPages !== 'undefined'")) {
  errors.push('Article template is missing the safe relatedPages-variable check.');
}
if (!fs.existsSync(path.join(root, 'content'))) errors.push('Content folder is missing.');

if (errors.length) {
  console.error('\nMountain Atlas project check FAILED:\n- ' + errors.join('\n- '));
  process.exitCode = 1;
} else {
  console.log('Mountain Atlas project check passed.');
  console.log(`Pages: ${pages.length}; range cards: ${rangeCards.length}; sidebar groups: ${navGroups.length}; top-bar menus: ${topNavGroups.length}; glossary terms: ${glossary.length}; local image assets: ${imageFiles.length}.`);
  console.log('All page images, article files, sidebar targets, includes and JavaScript syntax checks passed.');
}
