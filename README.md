# Probashi Voice — Multi-Region Lotto Portal

A deployment-ready static HTML5/CSS3/JavaScript portal for eight regional daily target rooms: Thailand, Saudi Arabia, Kuwait, Bahrain, Qatar, Malaysia, Singapore, and Brunei.

## Run locally

### Development mode

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Production build

To build the production-ready site:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview production build

To preview the production build locally:

```bash
npm run preview
```

## Structure

`index.html` is the region selector. Each file in `countries/` is a dedicated country page with relative links back to the shared stylesheet and JavaScript. `assets/css/style.css` contains the complete responsive dark-gold design system. `assets/js/main.js` contains the country metadata, date display, country-page hydration, and home-page search filter. `assets/images/malaysia-free-prediction.png` is the user-supplied poster shown in the Malaysia Free Prediction section. `manus-routes.json` lists the complete static route set.

## Content updates

Target values in `assets/js/main.js` are sample/demo values. Replace them with verified operator content or connect the data model to a trusted server-side API. Do not put Supabase service-role keys or other secrets in browser JavaScript. Replace the WhatsApp and Telegram placeholders in `index.html` and each country page before production.

## Deployment

The project uses Vite for building and bundling. When deploying to Vercel, the build process is automatically handled. The configuration in `vercel.json` specifies:
- Build command: `npm run build`
- Output directory: `dist/`

For other platforms:
1. Run `npm install` to install dependencies
2. Run `npm run build` to create the production build
3. Deploy the contents of the `dist/` directory

### Vercel Speed Insights

This project includes Vercel Speed Insights for performance monitoring. The Speed Insights component is automatically injected into all pages during the build process. No additional configuration is needed when deployed to Vercel.

## Supabase handoff

`.env.example` documents optional future Supabase and VIP-channel configuration. If live targets are added, use a server-side or edge-function layer and expose only the minimum public read data to the browser. The local demo should remain usable without Supabase.

## Completed front-end checks

- All eight region routes are present and linked from the home page.
- Country target cards are populated from one shared data model.
- Country search, date display, room-link copy, and native share fallback are wired.
- Empty result rows were replaced with an explicit verification-pending tracker so the UI is not falsely presented as live data.
- Misleading “verified” status labels were removed from the demo result state.
- No live lottery/result values are claimed as verified; demo targets remain clearly labeled.

## Production checklist

Before launch, verify the operator’s legal/compliance requirements, replace demo numbers, configure approved channel URLs, add the final brand assets, and confirm each region’s content is accurate for the current date.

## Permanent website

The published site is live at: https://drawroom-n8kksmok.manus.space

Hosting mode: Autoscale with a 120-minute idle window.


## ZIP-03 update
- Applied the supplied visual stylesheet to `assets/css/style.css`.
- Corrected the missing `.` on `.timer-grid` so the provided grid rules are valid CSS and actually apply.


## ZIP-05 changes
- Malaysia Room and Singapore Room now have separate published-post sections.
- Each room has its own post title, room label, status and explanatory note.
- The current build does not claim live draw data or guaranteed outcomes.
- The initial ZIP-05 draft used an image placeholder because the raw image was not then available; ZIP-06 below resolves this by bundling the supplied Malaysia poster.

## ZIP-06 changes
- Added the supplied poster to `assets/images/malaysia-free-prediction.png` and displayed it in the Malaysia page's `Daily Prediction · Free` section.
- Added readable alt text and Bengali copy naming the numbers shown in the image; the note clearly states these are a prediction, not an official result or a guaranteed win.
- The poster is responsive, and all relative assets are bundled for static deployment. The shared CSS also gives the “P” seal and PROBASHI VOICE wordmark a richer gold-medallion treatment on every page.

## ZIP-07 changes
- Added a responsive VIP Access marketing-banner section to the Malaysia room; generated poster artwork is bundled in `assets/images/malaysia-vip-access-banner.png` and displayed as a responsive banner linking to VIP Access.
- The requested `H E` target is labeled as a placeholder so it cannot be mistaken for verified results.

## ZIP-08 changes
- Added distinct VIP Access banners and Free Prediction sections to Thailand, Singapore, Saudi Arabia, Kuwait, Bahrain, Qatar and Brunei.
- Predictions are explicitly marked pending until values are supplied; no lucky numbers were invented. Thailand now displays the six numbers directly supplied by the user.
- Singapore shows the user-requested exact text “H toto singaporE” as a clearly labeled placeholder.
- Increased the shared “P” medallion and wordmark gold gradients, metallic highlights and glow on all country pages and home.

## ZIP-09 changes
- Updated the Thailand VIP banner and free prediction card with the user-provided label “3UP AND DOWN THAILAND” and numbers 324, 870, 156, 8825, 26 and 31.
- Marked these as user-provided predictions, not verified official results or guaranteed outcomes.
