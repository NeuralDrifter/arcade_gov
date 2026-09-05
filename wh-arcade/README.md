# whitehouse.gov/arcade — complete source capture

Captured 2026-09-04 from https://www.whitehouse.gov/arcade/ (arcade.gov).
All five games verified playable offline with zero external dependencies.

## Layout
  pages/       6 HTML captures as served + index.schema.json (JSON-LD)
  games/       5 game bundles exactly as shipped (minified esbuild IIFE)
  readable/    same 5, beautified, all pass `node --check`. No added comments.
  standalone/  5 self-contained playable HTML files (CSS + DOM + bundle)
  sprites/     ASCII pixel-maps recovered from each bundle
  asset-manifest.json

## Verification
Each standalone file was served over localhost and loaded in Chrome; all five
reach their title screen and initialize. No fetch/XHR/sendBeacon in any bundle —
high scores are local only, so there is no server-side component missing.

## Completeness caveats
- The 6th cabinet on the menu is "COMING SOON" and has no code yet.
- Original source comments were stripped by esbuild at build time. No sourcemaps
  were published and no unminified copy is served, so they are unrecoverable.
- standalone/*.html carry ~31KB of surrounding page chrome (an unstyled footer
  renders below the game). Cosmetic only.

## Rights
17 U.S.C. 105 — no copyright subsists in U.S. Government works. Free to mirror,
