# Page Transitions

This site stays a static Astro multi-page app. The goal was to make page
switching feel smooth without adding Astro's `ClientRouter` or turning the site
into an SPA.

## What We Fixed

### First Paint Theme

The first flash was caused by the browser painting before the full stylesheet
had loaded. The fix lives at the top of `BaseLayout.astro`:

- `meta name="color-scheme"` declares support for light and dark.
- `theme-color` matches the browser UI to the preferred scheme.
- A tiny inline style sets the first background and text color with literal hex
  values, not CSS variables.
- A blocking inline script reads `owenabel-theme` and sets
  `document.documentElement.dataset.theme` before the body paints.

The external stylesheet also avoids an unconditional light theme. `:root` uses
`color-scheme: light dark`, and `prefers-color-scheme: dark` mirrors the dark
tokens unless the user has explicitly chosen `data-theme="light"`.

### Texture Pop

The background grain is a real image, so it can appear after the base
background. We preload `/grain.png` in the document head. Cloudflare also emits
an Early Hints preload header for it.

### MPA Navigation

The site opts into native cross-document View Transitions:

```css
@view-transition {
  navigation: auto;
}
```

This improves same-origin multi-page navigations in browsers that support it and
degrades harmlessly elsewhere. Reduced-motion users opt out with
`navigation: none`.

### Same-Page Links

Clicking a link to the page you are already on can trigger a pointless full
document reload. That looked like a hard refresh in browsers where native view
transitions did not smooth same-URL reloads.

We avoid that semantically instead of installing a global click interceptor:

- Navigation links already receive `aria-current="page"` when active.
- The brand/home link receives `aria-current="page"` only on `/`.
- Current links get `pointer-events: none` and `cursor: default`.

This prevents current-page menu clicks from reloading while keeping real links,
hash links, external links, and mail links normal.

## Why Not ClientRouter

Astro's `ClientRouter` would avoid full document teardown, but it changes script
lifecycle and moves the site toward SPA behavior. For this site, native browser
features plus a small first-paint contract are enough.

Reach for `ClientRouter` only if the remaining issue is a true content/layout
gap between full page navigations, not a theme flash, texture pop, or same-page
reload.
