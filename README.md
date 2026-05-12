# owenabel.com

Personal portfolio site for Owen Abel Amenze.

## Stack

- Astro static output
- Vite under Astro's build pipeline
- TypeScript with `tsgo`
- Oxlint and Oxfmt where they fit
- Prettier only for Astro component formatting

## Commands

```sh
npm run dev
npm run build
npm run preview
```

## Cloudflare Pages

Build command:

```sh
npm run build
```

Build output directory:

```sh
dist
```

Direct deploy:

```sh
npm run deploy:cf
```

The site intentionally avoids host-specific runtime code, so it can migrate to
Cloudflare Pages, Netlify, GitHub Pages, Railway static hosting, object storage,
or any CDN that serves static files.
