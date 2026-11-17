# AgencyV1 website

A responsive Next.js App Router website for an independent digital studio, with a portfolio of four live websites.

## Local development

```bash
pnpm install
pnpm dev
```

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds a static export and deploys it to GitHub Pages whenever `main` is updated. The project base path is `/outlinedigital`; the public site URL is <https://rohit-0409.github.io/outlinedigital/>.

## Agency configuration

Update the contact details, social links, project list and services in `src/config/agency.ts`. The email and LinkedIn URL are example values. The contact form remains disconnected until `NEXT_PUBLIC_CONTACT_ENDPOINT` is configured, and it clearly tells visitors to email instead. The privacy notice and terms page are still drafts and should be reviewed for the actual business before they are relied on.

## Build

```bash
pnpm build
```

The build exports the site to `out/` for static hosting.
