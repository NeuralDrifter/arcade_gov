# whitehouse.gov/arcade — complete source capture

Captured 2026-09-04 from https://www.whitehouse.gov/arcade/ (arcade.gov).
Escape From Socialism (/arcade/socialism/, published 2026-10-14) added 2026-10-19,
along with a fresh capture of the arcade index that lists it.
All six games verified playable offline with zero external dependencies.

Red Scare: Midnight Run (/arcade/red-scare/, published 2026-10-23) added
2026-10-27 as the seventh captured game. Open
[standalone/red-scare.html](standalone/red-scare.html) directly in a browser.
Its original page, JavaScript bundle and stylesheet are preserved in
`pages/red-scare.html`, `games/red-scare.js` and `assets/red-scare/style.css`.
`readable/red-scare.js` is the bundle formatted with Prettier 3.9.10.
The standalone embeds the game's own DOM, CSS and JavaScript, including its
embedded fonts, textures and 3D data, without the surrounding site scripts.
It requires WebGL. Capture sizes and SHA-256 hashes are in `asset-manifest.json`.
There is no pixel-map sprites entry because this game uses 3D models.

Red Scare verification: both JavaScript copies pass `node --check`; archive
integrity and game logic checks run with `node --test tests/red-scare.test.cjs`.
Browser rendering and manual play remain unverified for this capture because
no controllable browser was available during capture. The six-game browser
verification below describes the earlier captures only.

## Layout
  pages/       7 HTML captures as served + index.schema.json (JSON-LD)
  games/       6 game bundles exactly as shipped (5 minified esbuild IIFE;
               socialism.js shipped unminified, inline in the page)
  readable/    same 6, beautified, all pass `node --check`. No added comments.
               socialism.js is identical to games/ since it was never minified.
  standalone/  6 self-contained playable HTML files (CSS + DOM + bundle)
  sprites/     ASCII pixel-maps recovered from each canvas bundle
  assets/socialism/  the three card sprite sheets, the arcade cabinet thumbnail,
               and the CEA report PDF the cards cite
  asset-manifest.json

## Verification
Each standalone file was served over localhost and loaded in Chrome; all six
reach their title screen and initialize. No fetch/XHR/sendBeacon in any bundle —
high scores and progress are local only, so there is no server-side component missing.

socialism.html was rendered in headless Chrome straight from disk, and its game
logic was driven through all 3 levels (23 pairs) in Node, including a
save/restore round-trip.

## Completeness caveats
- The "COMING SOON" cabinet is still on the menu and still has no code.
- Original source comments were stripped by esbuild at build time. No sourcemaps
  were published and no unminified copy is served, so they are unrecoverable.
- standalone/*.html carry ~31KB of surrounding page chrome (an unstyled footer
  renders below the game). Cosmetic only. socialism.html is the exception: it
  carries only the game's own CSS and DOM, no site chrome.
- Escape From Socialism is a DOM/CSS card game, not a canvas game, so it has no
  sprites/ entry; its art is the three PNG sheets in assets/socialism/. In the
  standalone those sheets are inlined as data URIs, and the report links point
  at the local PDF copy instead of whitehouse.gov.

## Rights
17 U.S.C. 105 — no copyright subsists in U.S. Government works. Free to mirror,
copy, and remix.
