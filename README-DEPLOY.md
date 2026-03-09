# IrishStack React migration

This project rebuilds the existing single-file site into a modular React + Vite structure while preserving the current content and visual style.

## Structure

- `src/App.jsx` – page assembly
- `src/components/` – reusable sections and layout components
- `src/data/siteContent.js` – text/content data in one place
- `src/hooks/useReveal.js` – scroll reveal animation hook
- `src/styles.css` – global styling
- `.github/workflows/deploy.yml` – GitHub Pages deployment workflow

## Local run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment steps

1. Replace the current repository contents with this project structure.
2. Commit and push everything to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` again if needed, or open the **Actions** tab and run **Deploy to GitHub Pages** manually.
6. Wait for the workflow to finish successfully.
7. Your site should publish at `https://lateefwalana.github.io/irishstack/` unless you later attach a custom domain.

## Important note about the Vite base path

This project uses:

```js
base: '/irishstack/'
```

That is correct for a project site hosted from the `irishstack` repository. If you later move the code to a user/organization site repository such as `lateefwalana.github.io`, change the base to `/`.
