# BlueHatch Digital — Next.js Product Studio

BlueHatch is a developing digital software and products brand by Collinalitics Ltd.

## Status

**Professional preview, not a production SaaS.** The website includes a fully working browser-based CSV Data Explorer and pricing calculator; roadmap features, subscriptions and digital products are clearly marked as unreleased. There is **no server-side AI generation, payment processing, authentication or customer database** in this build.

## Run in GitHub Codespaces

```bash
npm install
npm run dev
```

Open port **3000** from the **PORTS** tab. To check a production build:

```bash
npm run typecheck
npm run build
```

## Pages

- `/` — premium BlueHatch landing page, dashboard illustration and product positioning
- `/platform` — software product roadmap and availability
- `/tools` — free tools catalogue
- `/tools/data-explorer` — CSV reader, metrics, aggregation, visual comparison, first observation and downloadable CSV summary (local browser processing)
- `/tools/pricing-calculator` — interactive unit economics / margin calculator
- `/products` — upcoming digital products (no purchases)
- `/pricing` — free plan + clearly marked future paid concepts
- `/about`, `/contact`, `/legal/privacy`, `/legal/terms` — company and preview information

## Design

Responsive Next.js App Router with custom CSS, Manrope / DM Sans font fallbacks, Lucide icons, accessible labels, and reduced-motion support. The landing page's demo data is illustrative, not connected to customers.

## Technical architecture

- Next.js 16, React 19, TypeScript
- No server-side storage, API key, AI call, authentication or cookies required for the current tools
- CSV Data Explorer: CSV parser with quoted values and escaped quotes, 5 MB maximum, 10,000-row analysis cap, maximum 50 columns, calculated numeric metrics and browser CSV export
- `npm run build` and `npm run typecheck` validation in GitHub Actions

### Deployment

**Vercel:** Import repository, select **Next.js** framework and deploy. Do not deploy publicly until reviewed.

**Coolify:** Deploy with the repository root Dockerfile and expose internal port **3000**. The Dockerfile builds a Next.js standalone production server.

## Important before launching commercially

1. Confirm **BlueHatch** trade-name and trademark clearance and its relationship to Collinalitics Ltd.
2. Review legal terms and privacy policy for actual controller details and hosting.
3. Build and test paid product files, customer support, consumer-law disclosures and payments before enabling sales.
4. For true AI workflows, add server-side authenticated endpoints, provider credentials stored as secrets, limits and financial controls, and appropriate data governance.
5. Consider anonymised sample data before testing with private or sensitive business records.

**Git process:** original static site is preserved on `archive/static-v2-2026-11-13`. The redesign is developed on `redesign/nextjs-product-studio` before merging to main.
