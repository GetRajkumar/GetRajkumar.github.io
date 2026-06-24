# Rajkumar Subramani — Portfolio

Personal portfolio site for Rajkumar Subramani, Frontend Technical Lead (13 yrs · UX/UI).
Plain HTML/CSS/JS — no build step — hosted on **GitHub Pages**.

🔗 **Live:** https://getrajkumar.github.io

## Structure
- `index.html` — single-page site (hero, work, about, skills, contact)
- `styles.css` — design tokens, responsive layout, light/dark theme
- `script.js` — mobile nav, theme toggle, footer year
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll processing)

## Edit & preview locally
Just open `index.html` in a browser, or run a tiny server:
```bash
cd portfolio && python3 -m http.server 8000
# then visit http://localhost:8000
```

## Updating content
- Edit case studies under the `#work` section in `index.html`.
- Swap any text freely — there's no build to run. Commit and push; GitHub Pages redeploys automatically.

## Notes
- Content is public-safe: proprietary business figures are intentionally generalized.
- Built to be accessible (semantic landmarks, skip link, focus styles, reduced-motion support) and fast.
