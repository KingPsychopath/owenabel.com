# owenabel.com

Personal portfolio site for Owen Abel Amenze.

Live preview: <https://owenabel-com.pages.dev>

## Stack

- Astro static output
- Vite under Astro's build pipeline
- TypeScript with `tsgo`
- Oxlint and Oxfmt where they fit

## Commands

```sh
pnpm run dev
pnpm run build
pnpm run preview
```

## Cloudflare Pages

Build command:

```sh
pnpm run build
```

Build output directory:

```sh
dist
```

Direct deploy:

```sh
pnpm run deploy:cf
```

The site intentionally avoids host-specific runtime code, so it can migrate to
Cloudflare Pages, Netlify, GitHub Pages, Railway static hosting, object storage,
or any CDN that serves static files.
