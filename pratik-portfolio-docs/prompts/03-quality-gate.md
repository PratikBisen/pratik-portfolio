# Antigravity Prompt 03 — Visual, Accessibility, and Technical Quality Gate

Act as an independent senior reviewer. Inspect the actual rendered site and source code. Do not assume it is correct because the previous implementation step completed.

## Review against
- `Context.md`
- `design.md`
- `features.md`
- `implementation.md`
- `testing.md`
- `content.md`

## Required review
1. Run available type-check, lint, tests, and production build; record exact commands and results.
2. Inspect 320px, 375px, 430px, 768px, 1366px and 1440px layouts where tools allow.
3. Check both dark and light themes, including hero, project cards, contact section and footer.
4. Confirm glass surfaces use translucent material, backdrop blur, directional edge highlights, reflections and layered depth without obscuring text.
5. Test keyboard navigation, focus visibility, mobile menu, Escape behavior, theme toggle state, skip link, external links and reduced-motion behavior.
6. Check for horizontal overflow, broken images, broken links, empty sections, placeholder URLs, console errors, hydration errors (if applicable), and layout shifts.
7. Audit public content for invented claims, unverified metrics, fake portrait, fake project details, TODO markers and accidental private information.
8. Check image sizing, lazy loading, semantic headings, landmarks, alt text, text contrast and tap target sizes.
9. Repair all P0 issues and any straightforward P1 issues. Do not mask problems with arbitrary CSS overrides.

## Reporting rules
- Do not claim a Lighthouse score, WCAG conformance, or test pass unless measured.
- If a test cannot be run, mark it “not run” and explain why.
- Separate blockers from polish suggestions.
- Do not deploy or publish.

## Final report
Provide a concise quality-gate report with: issues found, fixes made, exact commands/results, viewport/theme matrix, remaining blockers, content requiring owner confirmation, and a go/no-go recommendation for deployment.
