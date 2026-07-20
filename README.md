# Maria & Gonçalo — Wedding Website

Single-page wedding site with a nautical watercolour theme.
**22 de Maio de 2027 · Tavira, Algarve.**

Built with **React + Vite**. Hand-drawn SVG art (ropes, knots, anchors, boat,
Tavira map, Japan scene) plus soft placeholder blocks where the final
watercolour illustrations will go.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content

All text, dates, venues, hotels, FAQ, etc. live in one file:
`src/data/content.js` — edit there, no need to touch the components.

## Replacing the placeholder art

Anywhere you see `<Placeholder … />`, swap it for `<img src="…" alt="…" />`.
Drop image files into `public/` (e.g. `public/img/cerimonia.jpg`) and reference
them as `./img/cerimonia.jpg`. Placeholders are used in:

- `Wedding.jsx` (Cerimónia, Celebração)
- `DressCode.jsx` (vestido, fato)
- `WhereToStay.jsx` (hotéis)

## Wiring up the RSVP form

The form works out of the box (it shows a local "thank you"). To actually
**receive** the responses by e-mail — no server required:

1. Create a free form at [Formspree](https://formspree.io) (or
   [Getform](https://getform.io)). You'll get an endpoint URL like
   `https://formspree.io/f/abcdwxyz`.
2. Paste it into `rsvpEndpoint` at the top of `src/data/content.js`.
3. Commit & push — the deploy workflow rebuilds automatically.

Submissions then land in your inbox. Nothing else to change.

## Design tokens

Colours and fonts are defined as CSS variables in `src/index.css`
(`:root`) — matching the Figma palette (Marfim, Areia, Linho, Corda, Azul…).

## Deploy (GitHub Pages)

This repo ships a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds and publishes the site on every push to `main`.

**One-time setup:** on GitHub go to **Settings → Pages → Build and deployment →
Source** and choose **GitHub Actions**. The next push (or a manual run from the
**Actions** tab) publishes the site to:

```
https://inesdias028.github.io/MG/
```

`vite.config.js` uses `base: './'` so the build also works from any other static
host (Netlify, Vercel) with no changes.
