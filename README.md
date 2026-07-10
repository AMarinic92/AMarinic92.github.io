# AMarinic92.github.io

Personal résumé / portfolio site. Next.js (App Router) + Tailwind v4 + shadcn/ui,
statically exported and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

Content lives in [`src/data/resume.ts`](src/data/resume.ts) — edit that to update
the résumé. Layout is a single page in [`src/app/page.tsx`](src/app/page.tsx).

## Build

```bash
npm run build      # static site -> ./out
```

## Deploy

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it to GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.

## Add shadcn components

```bash
npx shadcn@latest add <component>
```
