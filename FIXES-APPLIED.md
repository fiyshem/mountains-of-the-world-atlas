# Mountain Atlas — repair notes

This build fixes the article-template error from the previous ZIP and adds image-integrity protections.

## Fixes

- `views/pages/article.ejs` now safely checks whether `explorer` and `relatedPages` exist before using them. Regular article routes no longer throw `ReferenceError: explorer is not defined`.
- `server.js` provides stable defaults for optional article-template values, while `/mountain-explorer` can still enable the interactive elevation lab.
- Client-side image handling now switches a missing local image to a bundled landscape illustration instead of leaving a broken-image icon.
- The header and footer brand image have a distinct class so they can use the logo fallback if needed.
- `/health` reports a small JSON status payload for checking that the server is responding.
- `npm run check` validates page metadata, content files, local image assets, sidebar targets, included EJS partials and JavaScript syntax.
- `npm test` runs the project checks and then smoke-tests the page routes plus rendered local image URLs. The smoke test requires `npm install` to have completed first.

## Apply the repair

Replace the old `D:\about_mountains` folder with this build, then run:

```powershell
cd D:\about_mountains
npm install
npm test
npm start
```

Browse to `http://localhost:3000`. The bundled `public\img` files are local SVG landscape illustrations; the site does not require an external image host for its default artwork.

## Expanded knowledge build

- Expanded the learning library to 66 page records with 61 Markdown articles and new science, ecology, regional, cultural, research and conservation trails.
- Added seven grouped sidebar sections, five top-bar dropdown menus, a searchable complete topic library, 20 regional range cards and additional glossary/quiz material.
- Added a photo-slot index in both Markdown and plain text: `public/img/IMAGE-SLOTS.md` and `public/img/IMAGE-SLOTS.txt`.
- Matching user-owned image files take priority over the bundled SVG: WebP, AVIF, JPG/JPEG, PNG/APNG, GIF, BMP, then SVG. Place a picture beside the matching SVG using the same stem (for example `himalayas.jpg`).
- The `/health` response reports supported image extensions as well as the current page and image counts.
