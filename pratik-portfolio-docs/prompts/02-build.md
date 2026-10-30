# Antigravity Prompt 02 — Implement the Complete Portfolio

Continue in the existing repository. Read `AGENTS.md` and all specification files again, then inspect the foundation before editing. Preserve working code and the established design tokens.

## Build the portfolio in coherent vertical slices
1. Header, accessible navigation, theme toggle, skip link, footer.
2. Identity-first hero: “Pratik Bisen,” owner-approved headline, concise introduction, GitHub/LinkedIn/contact actions, and portrait area. Use a real portrait only if supplied; otherwise retain the intentional placeholder.
3. About.
4. Skills, with honest categories and no fake proficiency percentages.
5. Projects using reusable data-driven cards.
6. Education.
7. Experience & achievements, using only confirmed facts.
8. Open-source contributions, linking to verified profile/repositories.
9. Contact.

## Content source of truth
Use `content.md`. The owner details provided are:
- Email: `pratikbisen982@gmail.com`
- GitHub: `https://github.com/PratikBisen`
- LinkedIn: `https://www.linkedin.com/in/pratikbisen/`
- Education: B.Tech Information Technology, SGGSIE&T, Vishnupuri, Nanded.

Project candidates include Spotify Homepage Clone, Responsive Sidebar Navigation, Simon Says Game, and HackIT–CommitRush. Do not assume URLs, exact stacks, impact, or current deployment status. If a fact remains unverified, do not show it as confirmed in the public UI; record it in the final report.

## Visual and interaction requirements
- Immersive dimensional environment, carefully restrained blue/violet lighting, genuine glass surfaces, controlled reflection and depth.
- Dark and light themes must both look intentionally designed.
- Responsive layout from 320px mobile to wide desktop.
- Motion should be subtle and respect `prefers-reduced-motion`.
- No hover-only interactions.
- Visible focus, semantic landmarks, correct button/link semantics, and meaningful accessible names.
- Use CSS effects first. Avoid expensive WebGL or extra libraries without clear justification.
- Avoid layout shift; set image aspect ratios/dimensions and lazy-load appropriate lower-page imagery.

## Content and implementation constraints
- No invented metrics, fake testimonials, fake client logos, fabricated employment, or fake personal photo.
- No placeholder `href="#"` links.
- Do not display empty sections, TODO markers, or `[CONFIRM]` text to visitors.
- Do not add a pretend contact form. A mailto CTA is sufficient for the first version.
- Keep content data separate from components where sensible.
- Keep code readable and avoid unnecessary abstractions.

## Verification
Run the relevant checks in `testing.md`. Inspect browser rendering in dark and light modes and at representative mobile/tablet/desktop widths. Fix issues found instead of merely reporting them.

At completion, report implemented sections, changed files, commands and exact test results, viewport/theme coverage, unverified content that needs Pratik's input, and known issues. Do not deploy without explicit authorization.
