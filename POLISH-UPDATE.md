# Mountain Atlas — Visual Polish Update

This update improves footer consistency, type readability, and top-bar spacing while preserving the existing content and navigation.

## Changes
- Increased body and article reading sizes and improved paragraph line-height.
- Increased sidebar, dropdown, footer link, footer heading, and sitemap text sizes.
- Added more consistent top-bar spacing and responsive rules for smaller screens.
- Refined footer columns and sitemap grid at desktop, tablet, and phone widths.
- Kept the footer in normal document flow so it never overlays long article content; it follows the page content and naturally reaches the bottom on short pages.
- Preserved the light-first theme, dark theme, animations, and local image support.

## Install / verify on Windows
From PowerShell:

```powershell
cd D:\about_mountains
npm install
npm test
npm start
```

Open http://localhost:3000. Hard refresh with Ctrl+F5 after updating. `npm test` runs the static project check and local server smoke test; run it after dependencies finish installing.
