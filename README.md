# Mountain Atlas — Expanded Node.js educational website

A broad, multi-page mountain knowledge website built with Node.js, Express, EJS, Markdown, HTML, CSS and vanilla JavaScript. It uses a light-first editorial visual system with a dark theme, responsive navigation, search, long-form articles, a complete topic index, an interactive elevation explorer, a glossary and a quiz. The expanded library includes 66 page records, 61 Markdown articles, 20 regional range studies, seven sidebar groups, five top-bar menus and 75 glossary terms.

## Install on Windows

1. Install a supported Node.js LTS release from https://nodejs.org/en/download.
2. Extract this folder to `D:\about_mountains`.
3. Open PowerShell in that folder and run:

```powershell
npm install
npm test
npm start
```

4. Open http://localhost:3000.

You can also double-click `setup-and-run.bat` after extracting the ZIP. Keep the console open while using the site; `Ctrl+C` stops the server.

## Images

Put your own image files in `public/img/`. Image stems are listed in `public/img/IMAGE-SLOTS.md`. For example, `public/img/himalayas.jpg` replaces the included `himalayas.svg` without changing code. Common browser image formats are supported: JPG/JPEG, PNG/APNG, WebP, AVIF, GIF, BMP and SVG. TIFF/TIF should be converted first. The site prefers user photos and keeps local SVG artwork as fallback.

## What is included in the expanded atlas

- Global and regional mountain studies, including the Himalayas, Andes, Alps, Rockies, Pyrenees, Carpathians, Alaska Range, Cascade Range, Pamirs–Karakoram, Drakensberg, Rwenzori, Sierra Nevada, Tian Shan and Altai.
- Additional science trails on plate tectonics, volcanoes, rocks and minerals, landforms, glacier systems, river catchments, mountain weather, soils, erosion, snow and avalanches.
- Living-system trails covering alpine ecology, wildlife, birds, plants, fungi and lichens, invertebrates, food webs, disturbance and habitat connectivity.
- Human and field trails covering agriculture, settlements and engineering, sacred landscapes, exploration history, tourism, photography, GIS, remote sensing, field research, economies and conservation.
- Searchable topic library, linked side/top/footer navigation, glossary, elevation explorer, and a 22-question quiz.

## Main folders

- `content/` — long-form Markdown learning articles.
- `data/site.js` — page records, regional cards, side navigation, top-bar menus and glossary.
- `views/` — EJS page templates and reusable layout partials.
- `public/css/` — design system and responsive styling.
- `public/js/` — theme, sidebar, search helpers, scrolling, filters and interactive widgets.
- `public/img/` — all local image assets and replacement filenames.
- `scripts/` — static and live HTTP smoke tests.

## Checks

`npm run check` validates files, image slots, content files, navigation targets and JavaScript syntax. `npm test` also starts a temporary local server and checks routes and image responses. The first install needs internet access to download Node dependencies.
