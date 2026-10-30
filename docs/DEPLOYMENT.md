# Production Deployment Guide

**Project:** Personal Portfolio Website — Pratik Bisen  
**Target Repository:** https://github.com/PratikBisen/pratik-portfolio  
**Production Target:** GitHub Pages (`https://pratikbisen.github.io/pratik-portfolio/`)  
**Alternative Providers:** Vercel, Netlify, Cloudflare Pages  
**Last Verified:** 2026-10-30  

---

## 1. Overview & Architecture

The portfolio is architected as a high-performance single-page web application using **React 19**, **TypeScript 5.7**, and **Vite 6**. It produces an entirely static output directory (`dist/`) suitable for zero-maintenance hosting on any modern static CDN or edge platform.

---

## 2. Production Build Configuration

### Build Command
```bash
npm run build
```
This triggers:
1. `tsc` — Strict TypeScript type-checking (`noEmit`).
2. `vite build` — Production bundling, tree-shaking, CSS minification, asset optimization, and chunk splitting.

### Output Directory
- **Path:** `./dist`
- **Clean state:** The output directory contains pre-minified assets, optimized WebP images, responsive SVGs, Schema.org JSON-LD structured data, `robots.txt`, and `sitemap.xml`.

### Chunk Partitioning Structure
| Output File | Size (Raw) | Size (Gzip) | Purpose |
|---|---|---|---|
| `dist/index.html` | 8.76 kB | 2.56 kB | Root HTML with complete SEO, Open Graph & Schema.org JSON-LD |
| `dist/assets/index-*.css` | 98.94 kB | 16.44 kB | Critical styling for all 8 portfolio sections & navigation |
| `dist/assets/index-*.js` | 69.73 kB | 20.03 kB | Core portfolio application runtime |
| `dist/assets/react-core-*.js` | 223.19 kB | 69.24 kB | React & ReactDOM vendor chunk (immutable, long-term cached) |
| `dist/assets/lucide-icons-*.js` | 23.32 kB | 5.45 kB | Lucide React icon suite chunk (immutable, long-term cached) |
| `dist/assets/GlassLab-*.js` | 27.62 kB | 7.12 kB | **Deferred chunk** — loaded only upon visiting `/glass-lab` |
| `dist/assets/GlassLab-*.css` | 20.34 kB | 4.56 kB | **Deferred styles** — loaded only upon visiting `/glass-lab` |

---

## 3. GitHub Pages Deployment (Recommended & Preconfigured)

A GitHub Actions workflow is committed at `.github/workflows/deploy.yml`.

### Enabling GitHub Pages in Repository Settings
1. Navigate to **https://github.com/PratikBisen/pratik-portfolio/settings/pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push to `main`. The `Deploy to GitHub Pages` workflow executes automatically, builds the project with `npm ci` and `npm run build`, and deploys `./dist` to GitHub Pages.
4. The live site will be accessible at:
   ```
   https://pratikbisen.github.io/pratik-portfolio/
   ```

---

## 4. Custom Domain Setup (Optional)

If configuring a custom domain (e.g. `pratikbisen.com` or `pratikbisen.dev`):

### DNS Records
| Type | Name / Host | Value |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `pratikbisen.github.io.` |

### GitHub Pages Settings
1. In repository settings under **Pages > Custom domain**, enter your custom domain.
2. Check **Enforce HTTPS**.
3. Create `public/CNAME` containing your custom domain name so Vite copies it to `dist/CNAME` during builds.
4. Update `canonical` in `index.html` and `public/sitemap.xml` with your custom domain.

---

## 5. Alternative Hosting Configurations

### Vercel Deployment
1. Import repository `https://github.com/PratikBisen/pratik-portfolio`.
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Deploy.

### Netlify Deployment
1. Connect repository on Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy site.

---

## 6. Environment Variables

The portfolio does not require any backend API keys, secrets, or environment variables to operate in production. All profile data is statically baked into the build for maximum security and zero runtime latency.

If external analytics or contact form relays are added in future iterations:
- Prefix client variables with `VITE_` (e.g., `VITE_ANALYTICS_ID`).
- Store in repository secrets or hosting platform environment variables.
- Never commit `.env` or `.env.local` files to Git (enforced by `.gitignore`).

---

## 7. Sitemap & Robots Configuration

- **`robots.txt` (`public/robots.txt`):** Permits all search engines to crawl public routes while excluding internal build assets. Specifies sitemap location.
- **`sitemap.xml` (`public/sitemap.xml`):** Declares priority `1.0` for the root portfolio (`/`) and `0.7` for the Material Test Lab (`/glass-lab`).
- When a custom domain is configured, update the hostname in `public/robots.txt` and `public/sitemap.xml`.

---

## 8. How to Deploy Future Updates

```bash
# 1. Pull latest changes
git pull origin main

# 2. Make code or content updates in src/data/profile.ts or components

# 3. Verify locally
npm run build
npm test

# 4. Commit and push
git add .
git commit -m "feat(portfolio): your update description"
git push origin main
```
GitHub Actions will automatically build, verify, and publish the update to production within ~60 seconds.
