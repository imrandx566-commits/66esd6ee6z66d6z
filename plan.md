# Multi-Region Lotto Portal Plan

## Implementation approach

Build a deployment-ready static HTML5/CSS3/JavaScript portal with no build step or runtime dependency. The home page provides region discovery and a search filter. Each country page lives in `countries/`, loads the shared stylesheet and script through relative paths, and provides country-specific game labels, daily target cards, result status, and VIP WhatsApp/Telegram CTAs. A small `portalData` object in `assets/js/main.js` keeps filtering and country-page content consistent while allowing future API/Supabase wiring through environment configuration.

The requested eight regions are Thailand, Saudi Arabia, Kuwait, Bahrain, Qatar, Malaysia, Singapore, and Brunei. Placeholder target values are clearly marked as sample/demo data so operators can replace them with verified daily results.

## Project structure

- `index.html`: home page, hero, region search/filter, and eight country cards.
- `countries/*.html`: one dedicated page per region with relative links to shared assets.
- `assets/css/style.css`: responsive luxury dark-gold visual system, cards, tables, buttons, and mobile rules.
- `assets/js/main.js`: country metadata, home-page filtering, date display, page hydration, and menu interactions.
- `assets/images/`: contains the user-supplied Malaysia Free Prediction poster plus any future brand/banner assets.
- `.env.example`: future integration placeholders for Supabase and messaging links; no secrets are committed.
- `README.md`: setup, content editing, deployment, and integration notes.
- `manus-routes.json`: static route manifest for all pages.

## Design direction

- **Design movement:** editorial luxury dashboard: midnight black surfaces, antique gold rules, and compact information panels inspired by private-membership financial terminals.
- **Core principles:** high contrast, calm density, clear hierarchy, and reusable components.
- **Color philosophy:** near-black backgrounds create focus; warm gold signals trust and premium access; muted crimson is reserved for live/status accents so it never competes with the data.
- **Layout paradigm:** asymmetric editorial composition with a wide hero/summary rail and staggered responsive card clusters rather than a generic centered grid.
- **Signature elements:** gold hairline dividers, an embossed circular “P” medallion with a star glint, circular country monograms, and a live-status pulse marker.
- **Interaction philosophy:** filtering is immediate and lightweight; hover/focus states lift cards and expose a gold edge without distracting from the targets.
- **Animation:** subtle 220ms ease-out transitions, a restrained pulse for live status, and no motion that blocks reading.
- **Typography system:** `DM Sans` for interface copy and `Playfair Display` for premium editorial headings, both loaded from Google Fonts with system fallbacks.
- **Brand essence:** a composed daily target room for members tracking lottery regions across Asia and the Gulf; personality: precise, discreet, premium.
- **Brand voice:** direct and confident. Example lines: “Today’s board, arranged by region.” and “Join the private channel for verified drops.”
- **Wordmark & logo:** a luminous gold circular “P” seal with concentric engraving and a star accent, paired with a letter-spaced champagne wordmark “PROBASHI VOICE”; implemented in shared CSS so it remains crisp and responsive without image dependencies.
- **Signature brand color:** `#d8b45a`, a muted champagne gold that feels premium without looking metallic or neon.

## Serving and integration

The site is intentionally static and can be served by Vercel, Netlify, GitHub Pages, or shared hosting. Keep links relative. A future data service may use Supabase via server-side or edge functions; never expose service-role keys in browser code.
