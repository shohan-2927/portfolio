# Shohan — Portfolio

Personal portfolio of Shohan, a computer science student at the University of Debrecen, Hungary, learning web development and deep learning.

**Live site:** https://shohan-2927.github.io/portfolio/

## What's on it

- **About:** what I build and the tools I use (HTML, CSS, JavaScript, Python, C, SQL, PyTorch)
- **Experience:** co-founder and manager of Genesis Inc., a nonprofit for food and clothing donations in Bangladesh (since 2020)
- **Education:** BSc Computer Science, University of Debrecen, Stipendium Hungaricum scholar
- **Research:** in progress — residual fusion for detecting AI-generated images from unseen generators
- **Certifications:** Certiport IT Specialist Python, Microsoft DP-900, and two NVIDIA Deep Learning Institute courses

## Edit the content

Almost everything lives in [`src/portfolio.js`](src/portfolio.js): text, links, sections and which ones are shown. Colors are in [`src/_globalColor.scss`](src/_globalColor.scss).

## Run it locally

Requires Node.js 18 or newer.

```bash
npm ci
npm start      # development server at http://localhost:3000
npm run build  # production build in ./build
```

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repository's **Settings → Pages**, the source must be set to **GitHub Actions**.

## Credits

Built on the open-source [developerFolio](https://github.com/saadpasta/developerFolio) template by Saad Pasta (GPL-3.0). Illustrations from [unDraw](https://undraw.co/).
