# Mountain Atlas — Image replacement guide

All local images live in `public/img/`. The display helper automatically selects the best matching file for each image stem. To replace any illustration, drop in a file with exactly the same base name and a browser-supported extension; no code edit is required.

For example, to use your own photograph on the Himalayas page, add `public/img/himalayas.jpg`. The site will use it before `himalayas.svg`. PNG/APNG, JPEG, WebP, AVIF, GIF, BMP and SVG are supported by modern browsers. TIFF/TIF should be converted before use.

The complete subject-by-subject list is in `public/img/IMAGE-SLOTS.md`. Filenames are lowercase and hyphenated. If more than one format with a matching name is present, the application uses the format priority listed in that file. If a custom image cannot load in the browser, the matching local SVG is used as a fallback.

Suggested imagery: wide landscapes for hero panels, landscape orientation for regional cards, clear natural-history images for organisms, and properly credited images when licences require attribution. The included artwork is replaceable fallback art, not a set of downloaded photographs.
