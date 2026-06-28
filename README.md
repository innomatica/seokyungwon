# Deploying static SvelteKit site on GitHub Pages

## `vite.config.ts`

```
export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries.
        // Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: true
			}),
			paths: {
				base: process.argv.includes('dev') ? '' : '/your-repo-name'
			}
		})
	]
});
```

## `/src/+layout.ts`
```
export const prerender = true;
```

## Bypass Jekyll
```
/static/.nojekyll
```

## `.github/workflows/deploy.yml`
```
name: Deploy to GitHub Pages

on:
  push:
    branches: 'main' # Triggers when you push to the main branch

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm # Change to pnpm or yarn if applicable

      - name: Install dependencies
        run: npm ci

      - name: Build Static Site
        run: npm run build

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: 'build/'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
