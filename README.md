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

If an exported API token overrides the saved Wrangler login and lacks Pages
permissions, deploy with the saved login for that command:

```sh
env -u CLOUDFLARE_API_TOKEN pnpm run deploy:cf
```

## Page URLs

Pages use trailing slashes (`/work/`, `/contact/`, `/book/`), matching Astro's
directory output and Cloudflare Pages routing. Internal page links, canonical
URLs, and the sitemap follow that convention; asset filenames are unchanged.
Cloudflare normalizes existing directory routes without a slash. The explicit
`/book` redirect in `public/_redirects` also preserves the short booking link.
Keep the root `404.html` so unknown routes return a real 404 instead of the homepage.

The site intentionally avoids host-specific runtime code, so it can migrate to
Cloudflare Pages, Netlify, GitHub Pages, Railway static hosting, object storage,
or any CDN that serves static files.

## CV and work content

The CV source and supporting career evidence live in `~/dev/work/resume`. The
portfolio serves a generated copy at `public/owen-abel-amenze-cv.pdf`; it does
not maintain separate CV wording. To refresh it, run `make build-website` in
the resume repository, copy `output/owen-abel-cv-website.pdf` to the public
path here, then run `pnpm run build`. That variant omits the phone number.
The homepage and contact-page CV links include a short content hash query so a
new upload bypasses cached copies on the custom domain; update that query when
replacing the PDF.

Project summaries and case-study links are in `src/data/work.ts`. Case-study
pages are in `src/pages/work/`; their share images are generated from
`scripts/generate-og.mjs` during the build. Keep claims aligned with the
attributed records in the resume repository before publishing updates.
