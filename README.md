# Mixtile Documentation

Source of [docs.mixtile.com](https://docs.mixtile.com), built with Docusaurus 3. Every push to `main` is built and deployed to GitHub Pages by GitHub Actions.

## Layout

| Path | Contents |
| --- | --- |
| `docs/` | Published documentation (English), the only content source of the site |
| `i18n/zh/` | Simplified Chinese translation workspace, not published yet (`locales` in `docusaurus.config.ts` lists only `en`) |
| `src/` | Site components and styles |
| `static/` | Images, PDFs and other static files |
| `.github/` | CI and deployment |

`docusaurus.config.ts`, `sidebars.ts`, `package.json` and `tsconfig.json` in the root are the site configuration.

## Local development

```bash
npm ci
npm start          # development server
npm run build      # production build; broken links and anchors fail the build
npm run serve      # preview the production build
```
