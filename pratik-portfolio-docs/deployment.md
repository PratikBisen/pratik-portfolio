# Deployment and Production Checklist

## Before deployment
- Confirm repository owner and target hosting provider.
- Confirm the chosen public domain/subdomain.
- Confirm all content marked `[CONFIRM]` in `content.md` is resolved or omitted.
- Add a real favicon and social preview image when available.
- Verify production build and all external links.
- Confirm no secrets, private files, `.env` values, or local paths are committed.

## Hosting recommendation
For a static React + Vite portfolio, use a static host that supports HTTPS and SPA/static asset delivery (for example, Vercel, Netlify, or Cloudflare Pages). Choose based on the existing Git workflow and owner preference. Do not create accounts or publish publicly without the owner's approval.

## Build and preview
- Use the package manager/lockfile already in the repository.
- Run the documented production build command.
- Preview the production build locally if supported.
- Verify direct loading of the root page and any routes used.
- If a single-page app uses client-side routes, configure host fallback appropriately; for a one-page anchor site this may not be necessary.

## SEO and sharing
- Page title: `Pratik Bisen | Portfolio` (adjust after copy approval).
- Meta description: factual, concise, and owner-approved.
- Set language metadata to English unless the final site copy is primarily another language.
- Add Open Graph and Twitter card metadata when the social image exists.
- Add canonical URL, sitemap, and robots directives only after the production domain is known.
- Do not claim rich search results or indexing will happen immediately.

## Security and privacy
- No secret keys in frontend code.
- No tracking/analytics unless explicitly approved and privacy implications are documented.
- Do not collect visitor personal information without a real purpose and clear handling.
- If a contact form is added later, document spam prevention, delivery provider, data retention and failure states.

## Post-deployment smoke test
- [ ] HTTPS works.
- [ ] Main page loads on desktop and mobile.
- [ ] Dark/light themes work.
- [ ] Contact and social links work.
- [ ] Images and favicon load.
- [ ] No console errors.
- [ ] Metadata and social preview are correct.
- [ ] Custom domain and redirects work if configured.
- [ ] A clean Git checkout can reproduce the build.

## Rollback
Keep the previous known-good deployment available through the hosting provider. If a deployment breaks navigation, content, or visual rendering, revert to the last known-good deployment and fix in a new change rather than making unverified emergency edits directly in production.
