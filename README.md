# BlueHatch Digital — e-commerce website

A polished, responsive, **zero-dependency static website** for BlueHatch Digital, with a multi-page product catalogue and an upgrade path to Payhip checkout. Ready to push to **GitHub**, deploy on **Vercel**, or deploy on **Coolify** using the included Dockerfile.

> **Pre-launch website:** The site works immediately as a public product catalogue and free resource hub, but paid products are deliberately labelled previews. No payment links, account credentials, business email or completed paid downloads were supplied. The site **must not** claim to sell digital files until you upload real files to Payhip, enter product checkout URLs, and complete the launch checklist.
>
> **Working brand:** The name BlueHatch Digital has not been formally cleared for UK company-name, domain and trademark use. Confirm it before purchasing branding or connecting a domain.

## Included

- Fast, responsive homepage with branded graphics
- Filterable and searchable product shop (6 planned products)
- 6 detailed product landing pages with individual metadata
- Live Payhip `Buy now` buttons **only after you configure links**
- Fully working free 20-prompt TXT download (no signup)
- About, How It Works, FAQ, Contact pages
- Privacy, Terms, Refund drafts with clear prelaunch notices
- Mobile navigation, expandable FAQs, copyable AI prompts, accessible form labels
- Custom SVG mark, favicon, social share illustration
- SEO basics (per-page titles/descriptions, semantic headings, robots file)
- Vercel configuration, Coolify-compatible Nginx Dockerfile
- No database, account registration, paid API keys, or Node/npm packages needed

## Local preview

```bash
cd bluehatch-digital/public
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser.

A regular static file server is required. Opening HTML directly with `file://` may cause root-relative links to fail.

## Connect real checkout links later

1. Log in to Payhip.
2. Upload and publish the **actual final digital product files**.
3. Get the corresponding Payhip listing URL (`https://payhip.com/b/XXXX`) or direct checkout link (`https://payhip.com/buy?link=XXXX`).
4. Edit `public/assets/js/config.js` and paste the matching link into the `checkoutUrls` object. Example:

```js
checkoutUrls: {
  "beauty-salon-ai-marketing-toolkit": "https://payhip.com/b/REAL_PRODUCT_ID",
  // ...
}
```

5. Save, commit and redeploy. On that product page the disabled **Not yet available** button becomes a **Buy now** link to secure Payhip checkout. Shop page badges also become **Available now**.

**Never place Payhip passwords, API keys, Stripe secret keys or private customer data in JavaScript or GitHub.** All files in `public/` are publicly accessible.

### Set business contact / marketplace links

In the same `config.js`, configure:

- `contactEmail`: your verified business support email. The contact form then prepares an email in the customer's mail app. **It does not run a server-side contact service or send without customer action.**
- `payhipShopUrl`: optional public Payhip storefront link.
- `etsyShopUrl`: optional public Etsy storefront link.
- `instagramUrl`, `pinterestUrl`, `tiktokUrl`: optional public social links.

Unconfigured social/marketplace links remain hidden. Contact will clearly state that the inbox is not yet connected.

## Edit products and regenerate pages

Edit `products.json` to update planned contents, descriptions, pricing and sample prompts, then regenerate committed HTML:

```bash
python3 scripts/generate.py
```

This script uses **only the Python standard library**. It regenerates the homepage, shop, product detail pages and supporting static pages. It does not overwrite `public/assets/js/config.js`.

If you rename product `slug` values, update matching keys in `config.js` too.

To update the site design, edit `public/assets/css/styles.css`. For behaviour, edit `public/assets/js/site.js`.

## GitHub setup

From the project root:

```bash
git init
git add .
git commit -m "Initial BlueHatch Digital storefront"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bluehatch-digital.git
git push -u origin main
```

Create the empty `bluehatch-digital` repository in your GitHub account first. Replace `YOUR_USERNAME` with your real GitHub username; do not paste account credentials into repository files.

## Deploy to Vercel (from GitHub)

1. In Vercel choose **Add New → Project** and import the `bluehatch-digital` GitHub repository.
2. Use **Framework Preset: Other**. Vercel runs the dependency-free Python page generator during the build.
3. The included `vercel.json` runs `python3 scripts/generate.py` and selects `public` as the output directory. Set **Output Directory: public** if asked manually; use the included build command.
4. Deploy. Vercel will serve the static pages. Every push to your connected branch can trigger an automatic redeploy.
5. Add your custom domain after verifying the business name and setting up DNS.

No environment variables are needed for this static version. Public Payhip product URLs and social URLs live in `config.js`.

## Deploy to Coolify (from the same GitHub repo)

1. In Coolify, create a **new Application** and connect the GitHub repository.
2. Select **Dockerfile** as the build strategy (the root Dockerfile is included).
3. Set **Ports Exposes: 80** (this image uses Nginx, not Node/port 3000).
4. Deploy. The Dockerfile copies only `public/` into Nginx and exposes port 80.
5. Add a domain in Coolify, point DNS to the server, and enable HTTPS as appropriate.

You can deploy to **both** Vercel and Coolify, but use only **one** as your primary host for a given domain. A sensible setup is `www.yourdomain.com` on Vercel and a staging subdomain on Coolify, or vice versa.

### Local Docker test (if Docker is installed)

```bash
docker build -t bluehatch-digital .
docker run --rm -p 8080:80 bluehatch-digital
```

Visit `http://localhost:8080`.

## Site map

| Route | Page |
|---|---|
| `/` | Homepage |
| `/shop/` | Searchable and filterable catalogue |
| `/products/<slug>/` | Six product detail pages |
| `/resources/` | Free prompt collection download and copyable samples |
| `/how-it-works/` | Three-step overview |
| `/about/` | Brand story |
| `/faq/` | Frequently asked questions |
| `/contact/` | Pre-filled email contact form (after configuration) |
| `/legal/privacy/` | Draft privacy policy |
| `/legal/terms/` | Draft terms |
| `/legal/refunds/` | Draft refund policy |

## Before launch

Read **[LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md)**. In particular: verify your branding legally, upload the actual digital products, connect Payhip, add your business email, finalise legal policies and tax treatment, and test checkout/download on a real domain.

## Important constraints

- This project **does not** include a proprietary checkout, customer account system, automatic email-marketing signup, analytics dashboard, or backend order system. Payhip is intended to handle **payments and digital file delivery**.
- The product listing is a planned catalogue with suggested prices, **not a claim that products are already published**.
- All `public/` files are visible to anyone. Keep secrets out.
- Site imagery is created from CSS and SVG, so no paid image licences or external stock assets are required. Fonts use the visitor's installed system fonts; no external font service is required.
- The draft legal texts are **not legal advice** and need updating before commercial use.

## Verification

```bash
python3 tests/smoke_test.py
```

The site was checked with automated browser rendering at mobile, tablet and desktop widths; shop filtering, searching and mobile navigation were exercised. Docker runtime has not been executed in this environment (Docker is not installed here), so verify the container deployment on your server.

## GitHub source repository

The repository stores the site generator and source assets. All HTML pages are reproducibly generated during Vercel and Coolify builds from `products.json` and `scripts/generate.py`. The downloadable ZIP also contains pre-generated `public/` HTML for offline preview.
