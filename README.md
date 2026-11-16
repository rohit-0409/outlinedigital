# AgencyV1 website

A responsive Next.js App Router site built as a static export for GitHub Pages.

## Local development

```bash
pnpm install
pnpm dev
```

Run `pnpm build` to create the static site in `out/`. GitHub Actions builds the project with `NEXT_PUBLIC_BASE_PATH=/agencyV1` and publishes it to GitHub Pages.

## Agency configuration

Edit [`src/config/agency.ts`](src/config/agency.ts) to update the agency name, contact details, links, response time, project list, services and enquiry endpoint. Replace the example agency name, email and social links before launch.

The enquiry form does not send or store data until `formEndpoint` is connected to a form service or API that accepts a JSON `POST`. While it is empty, the form displays a setup message and offers the email address as the working contact route. No success message is shown without a successful endpoint response.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the `out/` directory on pushes to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The project site URL is `https://rohit-0409.github.io/agencyV1/`.

