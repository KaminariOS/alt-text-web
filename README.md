This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy to GitHub Pages

This Next.js app is configured for static export and deployment to GitHub Pages.

### Steps to deploy

1. Make sure your repository is named `alt-text-web` (or update `basePath` and `assetPrefix` in `next.config.ts` accordingly).

2. Build the app and export static files:

```bash
npm run build
```

3. The static files will be generated in the `out` directory.

4. Push your code to the `main` branch on GitHub.

5. GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy the `out` directory to the `gh-pages` branch.

6. In your GitHub repository settings, enable GitHub Pages:
   - Source: `gh-pages` branch
   - Folder: `/ (root)`

7. Your app will be available at: `https://<your-github-username>.github.io/alt-text-web/`

### Notes

- The app uses `basePath` and `assetPrefix` in `next.config.ts` to support deployment under the `/alt-text-web` path.
- Images are unoptimized to support static export.
- The app uses `trailingSlash: true` to ensure correct routing on GitHub Pages.
