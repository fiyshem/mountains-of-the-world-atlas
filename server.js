'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const helmet = require('helmet');
const MarkdownIt = require('markdown-it');
const { pages, navGroups, topNavGroups, rangeCards, glossary } = require('./data/site');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const contentRoot = path.join(ROOT, 'content');
const pageMap = Object.fromEntries(pages.map((page) => [page.slug, page]));
const customSlugs = new Set(['glossary', 'quiz', 'references', 'about', 'mountain-explorer', 'world-ranges', 'topics']);
const imageRoot = path.join(ROOT, 'public', 'img');
const imageExtensions = ['.webp', '.avif', '.jpg', '.jpeg', '.png', '.apng', '.gif', '.bmp', '.svg'];

// Prefer a real photo supplied by the site owner; keep the bundled SVG as a safe offline fallback.
function imageSrc(asset) {
  const raw = path.basename(String(asset || 'global-ranges.svg'));
  const ext = path.extname(raw);
  const stem = (ext ? raw.slice(0, -ext.length) : raw).replace(/[^a-zA-Z0-9_-]/g, '');
  for (const candidateExt of imageExtensions) {
    const candidate = `${stem}${candidateExt}`;
    if (fs.existsSync(path.join(imageRoot, candidate))) return `/img/${candidate}`;
  }
  return '/img/global-ranges.svg';
}

app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views', path.join(ROOT, 'views'));
app.set('trust proxy', 1);
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      baseUri: ["'self'"],
      fontSrc: ["'self'", 'data:'],
      imgSrc: ["'self'", 'data:'],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'self'"],
      upgradeInsecureRequests: null
    }
  },
  crossOriginEmbedderPolicy: false
}));
app.use(express.urlencoded({ extended: false, limit: '20kb' }));
app.use(express.static(path.join(ROOT, 'public'), { maxAge: '7d', etag: true }));
app.use((req, res, next) => {
  res.locals.navGroups = navGroups;
  res.locals.topNavGroups = topNavGroups;
  res.locals.imageSrc = imageSrc;
  res.locals.sitePages = pages;
  res.locals.pageMap = pageMap;
  res.locals.currentPath = req.path;
  res.locals.currentSlug = req.path.replace(/^\//, '').split('/')[0] || 'home';
  res.locals.siteName = 'Mountain Atlas';
  res.locals.year = new Date().getFullYear();
  // Safe defaults for EJS conditionals used on every article page.
  res.locals.explorer = false;
  res.locals.relatedPages = [];
  next();
});

const markdown = new MarkdownIt({ html: false, linkify: true, typographer: true, breaks: false });
const defaultLinkOpen = markdown.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
markdown.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const href = tokens[idx].attrGet('href') || '';
  if (/^https?:\/\//i.test(href)) {
    tokens[idx].attrSet('target', '_blank');
    tokens[idx].attrSet('rel', 'noopener noreferrer');
  }
  return defaultLinkOpen(tokens, idx, options, env, self);
};

function slugifyHeading(value) {
  return String(value).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-') || 'section';
}

function renderMarkdown(source) {
  const tokens = markdown.parse(source, {});
  const toc = [];
  const counts = new Map();
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type !== 'heading_open') continue;
    const inline = tokens[i + 1];
    const title = inline && inline.type === 'inline' ? inline.content : '';
    const level = Number(token.tag.slice(1));
    let id = slugifyHeading(title);
    const count = counts.get(id) || 0;
    counts.set(id, count + 1);
    if (count) id += `-${count + 1}`;
    token.attrSet('id', id);
    if (level >= 2 && level <= 3 && title) toc.push({ id, title, level });
  }
  return { html: markdown.renderer.render(tokens, markdown.options, {}), toc };
}

function readPageContent(page) {
  if (!page || !page.contentFile) return { html: '', toc: [] };
  const file = path.resolve(contentRoot, page.contentFile);
  if (!file.startsWith(contentRoot + path.sep) || !fs.existsSync(file)) return { html: '', toc: [] };
  return renderMarkdown(fs.readFileSync(file, 'utf8'));
}

function renderPage(res, page, extra = {}) {
  const article = readPageContent(page);
  return res.render('pages/article', {
    page, article, activeNav: page.slug,
    relatedPages: pages.filter((item) => item.category === page.category && item.slug !== page.slug).slice(0, 3),
    ...extra
  });
}

app.get('/health', (req, res) => {
  const imageDir = path.join(ROOT, 'public', 'img');
  let imageAssets = 0;
  try { imageAssets = fs.readdirSync(imageDir).filter((name) => imageExtensions.includes(path.extname(name).toLowerCase())).length; } catch { /* health response still explains server state */ }
  res.json({ status: 'ok', pages: pages.length, imageAssets, supportedImageExtensions: imageExtensions });
});

app.get('/', (req, res) => {
  res.render('pages/home', {
    page: { title: 'Mountains of the World', description: 'A field-to-library atlas for curious minds.' },
    featuredPages: ['mountain-earth', 'altitude-zones', 'wildlife', 'water-climate', 'conservation'].map((slug) => pageMap[slug]),
    rangeCards,
    topicCards: ['mountain-earth', 'plate-tectonics', 'volcanic-mountains', 'altitude-zones', 'wildlife', 'mountain-birds', 'forests-plants', 'fungi-and-lichens', 'water-climate', 'river-systems', 'mountain-weather', 'geology-hazards', 'people-culture', 'mountain-agriculture', 'maps-and-remote-sensing', 'conservation'].map((slug) => pageMap[slug])
  });
});

app.get('/world-ranges', (req, res) => {
  const page = pageMap['world-ranges'];
  const intro = readPageContent(page);
  res.render('pages/ranges', { page, rangeCards, intro });
});

app.get('/search', (req, res) => {
  const q = String(req.query.q || '').trim().slice(0, 120);
  const term = q.toLocaleLowerCase();
  let results = [];
  if (term) {
    results = pages.map((page) => {
      let body = '';
      if (page.contentFile) {
        try { body = fs.readFileSync(path.join(contentRoot, page.contentFile), 'utf8'); } catch { body = ''; }
      }
      const haystack = `${page.title} ${page.eyebrow} ${page.description} ${body}`.toLocaleLowerCase();
      const titleMatch = page.title.toLocaleLowerCase().includes(term);
      const descriptionMatch = page.description.toLocaleLowerCase().includes(term);
      const count = haystack.split(term).length - 1;
      return { ...page, count, titleMatch, descriptionMatch };
    }).filter((item) => item.count > 0)
      .sort((a, b) => (Number(b.titleMatch) - Number(a.titleMatch)) || (Number(b.descriptionMatch) - Number(a.descriptionMatch)) || (b.count - a.count))
      .slice(0, 30);
  }
  res.render('pages/search', { page: { title: 'Search the atlas', description: 'Search all topics in the mountain atlas.' }, q, results });
});

app.get('/mountain-explorer', (req, res) => {
  renderPage(res, pageMap['mountain-explorer'], { explorer: true });
});

app.get('/glossary', (req, res) => {
  res.render('pages/glossary', { page: pageMap.glossary, glossary });
});

app.get('/quiz', (req, res) => {
  const quizQuestions = [
    { q:'Which process is most directly associated with the formation of the Himalayas?', options:['Continental collision and crustal thickening','Only river erosion','A single volcanic eruption','Wind deposition'], correct:0, explain:'The Indian Plate continues to converge with the Eurasian Plate, thickening and uplifting crust.' },
    { q:'What is the tree line?', options:['A line where rivers split','A boundary beyond which trees cannot grow as continuous upright forest','The edge of a country forest','The lower limit of all plants'], correct:1, explain:'Climate, exposure and the growing season limit where trees can form continuous forest.' },
    { q:'What is a rain shadow?', options:['A shadow made by clouds','An area that is drier downwind of a mountain barrier','A type of glacier','A forest beneath waterfalls'], correct:1, explain:'Air often loses moisture as it rises on the windward slope, leaving descending air drier on the other side.' },
    { q:'Which one is a fault-block range example from the supplied guide?', options:['Teton Range','Himalayas only','Atlas cedar','Amazon Basin'], correct:0, explain:'The Teton Range is a well-known example of fault-block mountain structure.' },
    { q:'Why are mountain headwaters important?', options:['They stop all floods','They feed streams and river systems downstream','They create oxygen-free valleys','They prevent erosion everywhere'], correct:1, explain:'Snow, ice, rainfall and groundwater in upper catchments support river flow and downstream communities.' },
    { q:'Which statement about mountain wildlife is most accurate?', options:['Every species lives from foothill to summit','Species distributions vary by habitat, climate and region','Predators never depend on prey','All alpine habitats are identical'], correct:1, explain:'Elevation, vegetation, climate and geographic history shape where organisms can survive.' },
    { q:'What does endemic mean?', options:['Found naturally only in a particular region','Active only at night','An animal that migrates every day','A type of rock'], correct:0, explain:'Endemic species have naturally restricted geographic ranges.' },
    { q:'Which process moves rock or soil downslope under gravity?', options:['Photosynthesis','Mass movement','Subduction only','Condensation'], correct:1, explain:'Mass movement includes processes such as landslides, rockfalls and debris flows.' },
    { q:'Which is a responsible wildlife observation practice?', options:['Feed animals for a closer photo','Publish the exact location of every rare nest','Keep distance and avoid disturbing habitat','Collect plants from protected areas'], correct:2, explain:'Distance, low disturbance and local rules protect wildlife and the observer.' },
    { q:'Why can climate warming put summit species at risk?', options:['Summits grow wider with elevation','Suitable habitat can shrink near the top of a mountain','Cold species all move downhill','Mountains stop changing'], correct:1, explain:'Species may shift uphill, but available land area often gets smaller toward the summit.' },
    { q:'What is the difference between weathering and erosion?', options:['They are identical processes','Weathering breaks or alters rock in place; erosion transports material','Erosion only occurs in glaciers','Weathering only happens in deserts'], correct:1, explain:'Weathering acts on material in place; erosion removes and transports it.' },
    { q:'What does a digital elevation model (DEM) represent?', options:['A species checklist','A digital representation of ground elevation','A weather forecast','A list of rock names'], correct:1, explain:'A DEM represents elevation and can be used to derive slope, aspect and catchment features.' },
    { q:'What is a lichen?', options:['A small reptile','A type of glacier','An association involving a fungus and a photosynthetic partner','A volcanic rock'], correct:2, explain:'Lichens are partnerships involving a fungus and an alga or cyanobacterium.' },
    { q:'What is the main reason for a mountain rain shadow?', options:['Air descending on the leeward side is often drier after rising and losing moisture','Mountains block all sunlight','Rivers absorb clouds','The summit attracts rain from every direction'], correct:0, explain:'Air rising on the windward slope cools and may release moisture; descending air on the leeward side is often warmer and drier.' },
    { q:'Which feature is commonly associated with glacial erosion?', options:['A U-shaped valley','A sand dune only','A coral reef','A delta at the river mouth only'], correct:0, explain:'Large valley glaciers can widen and deepen valleys into broad U-shaped forms.' },
    { q:'Why should a mountain weather forecast not be treated as a guarantee?', options:['Mountains do not affect weather','Local terrain and conditions can differ from the forecast scale','Forecasts only describe last year','Wind never changes'], correct:1, explain:'Terrain creates microclimates and forecast uncertainty, so plans should adapt to real conditions.' },
    { q:'What does habitat connectivity help wildlife do?', options:['Avoid all predators','Move between habitat areas to find food, mates and seasonal ranges','Stop climate change','Make every habitat identical'], correct:1, explain:'Connectivity allows movement between habitat patches and can reduce isolation.' },
    { q:'What should a field researcher record with an observation?', options:['Only the conclusion','Date, place, method, conditions and uncertainty','Only a dramatic photograph','Nothing if the species is familiar'], correct:1, explain:'Metadata makes observations interpretable and helps other people evaluate or repeat a study.' },
    { q:'What is a respectful response when a sacred site restricts photography?', options:['Photograph secretly','Ignore the sign','Follow local rules and ask permission where appropriate','Publish precise coordinates instead'], correct:2, explain:'Respect for cultural places includes following local rules and avoiding the disclosure of sensitive information.' },
    { q:'Why are mountain farms often diversified?', options:['All slopes support the same crops','Different elevations, aspects and seasons create different growing conditions','Farmers never use local knowledge','Mountains prevent livestock grazing'], correct:1, explain:'Small plots across varied elevation and aspect allow different crops, livestock and seasonal strategies.' },
    { q:'What can happen after vegetation is removed from a steep slope?', options:['Erosion risk may rise when runoff is concentrated','All landslides become impossible','The slope stops receiving rainfall','Rock strength always increases'], correct:0, explain:'Vegetation and soil structure affect interception and stability, though each slope responds to local conditions.' }
  ];
  res.render('pages/quiz', { page: pageMap.quiz, quizQuestions });
});

app.get('/references', (req, res) => res.render('pages/references', { page: pageMap.references }));
app.get('/about', (req, res) => res.render('pages/about', { page: pageMap.about }));
app.get('/topics', (req, res) => res.render('pages/topics', { page: pageMap.topics, topicPages: pages.filter((item) => item.slug !== 'topics'), rangeCards, glossary }));

app.get('/:slug', (req, res, next) => {
  const slug = String(req.params.slug || '').toLowerCase();
  const page = pageMap[slug];
  if (!page || customSlugs.has(slug)) return next();
  renderPage(res, page);
});

app.use((req, res) => {
  res.status(404).render('pages/not-found', { page: { title: 'Trail not found', description: 'That trail does not appear in the atlas.' } });
});

app.use((err, req, res, next) => {
  console.error('[Mountain Atlas] Request failed:', err && err.stack ? err.stack : err);
  if (res.headersSent) return next(err);
  res.status(500).render('pages/not-found', { page: { title: 'Something went off trail', description: 'The page could not be loaded.' }, serverError: true });
});

app.listen(PORT, () => console.log(`\nMountain Atlas is ready at http://localhost:${PORT}\nPress Ctrl+C to stop the server.\n`));
