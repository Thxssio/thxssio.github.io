<h1 align="center">Thássio Silva — Portfolio</h1>

Personal website showcasing projects, publications, résumé and technical skills.

• Live: https://thxssio.github.io

## Tech Stack

- React (Create React App, React 17)
- React Router v6
- React Bootstrap
- Lottie (preloader and animated illustrations)
- react-tsparticles (background particles)
- react-github-calendar (GitHub activity)

## Features

- Multi‑page layout: Home, About, Projects, Publications, Resume
- Animated background + Lottie preloader
- Projects and Publications with cards and images
- Tech stack and tools with icons/logos
- Mobile‑first and fully responsive

## Getting Started

Prerequisites
- Node.js 18 LTS recommended (works with newer versions too)
- npm

Install
- `npm install`

Development
- `npm start`
- Opens http://localhost:3000 and hot‑reloads on save

Production Build
- `npm run build`
- Serve locally: `npx serve -s build`

## Project Structure (key paths)

- `src/components/About/Techstack.js` — programming stack (icons/logos)
- `src/components/About/Toolstack.js` — tools and design apps
- `src/components/Projects/Projects.js` — projects and experiences (cards)
- `src/components/Publications/Publications.js` — publications (cards)
- `src/components/Resume/ResumeNew.js` — résumé page
- `src/components/Pre.js` — Lottie preloader
- `src/components/Particle.js` — background particles
- `src/Assets/Projects/` — project images (PNG/JPEG)
- `src/Assets/icons/` — tool logos (PNG/SVG)

## Customization

- Colors and theme
  - Base: `#082027`; Accent: `#00bf63`
  - Edit in `src/style.css` (variable `--imp-text-color`) and `src/index.css` (body gradient)
- Page title and meta tags
  - `public/index.html` (title + Open Graph/Twitter)
- Navbar links
  - `src/components/Navbar.js`
- Projects and images
  - Edit cards in `src/components/Projects/Projects.js`
  - Add images to `src/Assets/Projects` and import as `imgPath`
- Publications
  - Edit `src/components/Publications/Publications.js`

## Deployment

- GitHub Pages: push the `build/` output to the `gh-pages` branch or use repository pages for `thxssio.github.io`
- Vercel/Netlify: import the repo, build command `npm run build`, output `build`

## License

All content and media in this repository belong to Thássio Silva.
