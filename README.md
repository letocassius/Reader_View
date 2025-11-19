# Reader Mode (Chrome Extension)

Reader Mode gives any article a pared-down, Safari-style view inside a lightweight MV3 Chrome extension. It leans on a custom heuristic plus Mozilla’s Readability fallback to isolate the primary story, wraps it in a distraction-free overlay, and remembers the theme and typography you last used via `chrome.storage`.

## Features
- **One-click reading view** – the toolbar button toggles an overlay on the active tab without reloading the page.
- **Robust extraction** – scores article containers, falls back to Readability, and finally to paragraph sampling so most sites render something usable.
- **Theme & typography controls** – four themes, adjustable font size/line height/max width, and font selection (with sensible fallbacks for Latin and CJK scripts).
- **Per-device preferences** – the most recent theme/size are saved locally, so your preferred look sticks on every page.
- **MV3-ready** – background service worker, content script, and CSS are wired through the manifest; icons for every Chrome requirement are included.

## Repository layout
- `manifest.json` – Chrome MV3 manifest, permissions, and resource wiring.
- `background.js` – handles the browser action click and sends the `TOGGLE_READER_ACTION` message to the active tab.
- `contentScript.js` – article detection/cleanup, overlay creation, preference storage, and message handling.
- `reader.css` – overlay layout plus the named themes; drop additional fonts in `fonts/` and declare them here if desired.
- `icons/` – 16–256px PNGs plus `icon.svg` source for regenerating sizes.
- `Readability.js` – bundled MPL-licensed Readability extractor (lightly modified).

## Licensing & MPL compliance
- `Readability.js` is licensed under the Mozilla Public License 2.0. The full MPL text is included in `LICENSE` and must accompany any distribution of this extension.
- Do not delete the existing copyright headers in `Readability.js` (or any other MPL-covered file). Any changes to those files must be shared under MPL-2.0.
- When shipping the extension, make the corresponding Source Code Form publicly accessible—publishing this repository or hosting a zip of the sources alongside your Web Store listing satisfies the requirement.
- Avoid copying MPL-covered code into other files unless you are willing to license those files under MPL-2.0.
- The MPL provides a patent grant for the covered code; it terminates if you initiate a patent claim over that implementation.
