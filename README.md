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

`src/components/GiftsRSVP.jsx` currently confirms the RSVP locally. To receive
submissions, POST the `form` object to a service such as
[Formspree](https://formspree.io) or a Google Form in the `submit` handler.

## Design tokens

Colours and fonts are defined as CSS variables in `src/index.css`
(`:root`) — matching the Figma palette (Marfim, Areia, Linho, Corda, Azul…).

## Deploy (GitHub Pages)

`vite.config.js` uses `base: './'` so the `dist/` build works from any path.
Push `dist/` to a `gh-pages` branch, or use any static host (Netlify, Vercel).
