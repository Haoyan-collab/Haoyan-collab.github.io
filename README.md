# Haoyan (Kilian) Shi — personal site

Source for <https://haoyan-collab.github.io>, built with [Astro](https://astro.build) on the
[My Scholar](https://github.com/mychiffonn/astro-scholar) theme (Apache-2.0, see `LICENSE`).

## Local development

Requires Node.js >= 22.12 and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:4321 (includes the 🎨 color tuner, dev only)
pnpm build && pnpm preview   # production build
```

## Where things live

- `src/site.config.ts` — name, links, navigation, homepage section counts
- `src/content/about.md` — homepage bio
- `src/content/experience.json` — Education & Experience timeline
- `src/content/updates/YYYY-MM-DD-name.md` — news items (homepage + `/news`)
- `src/content/projects/` — project pages
- `src/content/publications/main.bib` — publications
- `src/styles/color.css` — theme colors
- `public/doc/Resume_Kilian.pdf` — CV

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` to the `gh-pages` branch.

## Rolling back to the previous Jekyll (al-folio) site

The old site is preserved in two tags:

- `jekyll-site-source` — last Jekyll source commit on `main`
- `jekyll-site-build` — last built Jekyll output on `gh-pages`

Instant rollback of the live site (until the next push to `main`):

```bash
git push --force origin jekyll-site-build:gh-pages
```

Permanent rollback: restore the source tree and push (this redeploys the Jekyll workflow):

```bash
git rm -r -q . && git checkout jekyll-site-source -- . && git commit -m "Restore Jekyll site" && git push
```
