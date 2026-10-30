# Antigravity Prompt 04 — Production Readiness and Deployment Preparation

Prepare the portfolio for deployment, but do not publish it until the owner explicitly approves the target and deployment action.

## Read
`AGENTS.md`, `deployment.md`, `testing.md`, `content.md`, and `Context.md`.

## Tasks
1. Confirm the production build passes and record the exact result.
2. Search public-facing files for TODOs, `[CONFIRM]`, placeholder URLs, console logging, secrets, and private files. Resolve or omit each issue.
3. Verify email, GitHub, LinkedIn and every project link.
4. Add accurate title, description, language metadata, favicon and Open Graph metadata. Create an Open Graph image only from approved brand assets; do not fabricate personal credentials or portrait.
5. Add canonical URL, sitemap, robots configuration and redirects only after the production domain is confirmed.
6. Verify hosting configuration against the actual framework. Do not add unnecessary rewrites or configuration copied from another framework.
7. Document environment setup, build commands, hosting requirements, and rollback approach.
8. Do not introduce analytics, contact-form services, paid APIs, or secret keys without approval.

## Final gate
Report whether the repository is ready to deploy. Include the target host/domain assumed, production build result, link checks, metadata status, remaining owner decisions, and exact deployment action still requiring approval. Do not claim the site is live unless it was actually deployed and verified.
