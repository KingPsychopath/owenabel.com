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

Local development runs through Portless:

```txt
https://owenabel.localhost
```

To bypass Portless:

```sh
pnpm run dev:raw
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

## CV and work content

The CV source and supporting career evidence live in `~/dev/work/resume`. The
portfolio serves a generated copy at `public/owen-abel-amenze-cv.pdf`; it does
not maintain separate CV wording. To refresh it, run `make build-website` in
the resume repository, copy `output/owen-abel-cv-website.pdf` to the public
path here, then run `pnpm run build`. That variant omits the phone number.

Project summaries and case-study links are in `src/data/work.ts`. Case-study
pages are in `src/pages/work/`; their share images are generated from
`scripts/generate-og.mjs` during the build. Keep claims aligned with the
attributed records in the resume repository before publishing updates.
