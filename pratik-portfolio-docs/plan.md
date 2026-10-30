# Implementation Plan

## Operating rule
Work in small, reviewable milestones. At the end of every phase, summarize files changed, checks run, failures, open questions, and the next phase. Do not silently skip acceptance criteria.

## Phase 0 — Inspect and establish baseline
**Tasks**
- Inspect the repository and existing files before modifying anything.
- Identify framework, package manager, scripts, lint/type-check setup, and deployment assumptions.
- Preserve useful existing work; do not overwrite unrelated files.
- If empty, scaffold using the recommendation in `architecture.md`.

**Gate**
- Existing project structure and commands are documented.
- No destructive change has been made without justification.

## Phase 1 — Requirements and design foundation
**Tasks**
- Read all specification files.
- Establish design tokens for color, surface opacity, blur, border, shadow, spacing, typography, radius, z-index, motion and breakpoints.
- Define both themes using semantic tokens.
- Build a small set of reusable glass primitives and test them over the actual background.
- Create the page skeleton and navigation before detailed content.

**Gate**
- Dark and light themes are both readable and visually intentional.
- Glass effects show actual translucency, backdrop blur, edge highlights and layering—not merely opaque cards.
- The background does not destroy contrast or scroll performance.

## Phase 2 — Hero and visual identity
**Tasks**
- Build identity-first hero with name, concise positioning, primary actions, profile links and portrait area.
- Use a real image only if the owner has supplied it. Otherwise use a designed placeholder frame.
- Add ambient background, controlled 3D depth and reduced-motion fallback.
- Ensure the first viewport communicates identity and purpose quickly.

**Gate**
- Clear hierarchy on desktop and mobile.
- CTA labels are meaningful; no dead buttons.
- Portrait crop, alt text, and loading behavior are correct.

## Phase 3 — Core content sections
Implement in this order:
1. About
2. Skills with honest proficiency groupings
3. Projects with reusable project cards/details
4. Education
5. Experience & achievements
6. Open-source contributions
7. Contact

Use data-driven content objects where appropriate. Hide sections with no verified content rather than showing empty or fabricated cards. Keep the selected section order coherent with the identity-first experience.

**Gate**
- Each section has a clear purpose and consistent visual language.
- Projects include repository/demo links only when verified.
- Experience and achievements are factual and dated where possible.

## Phase 4 — Interactions and responsive behavior
**Tasks**
- Theme toggle with persistence if supported cleanly; avoid hydration errors.
- Accessible navigation and mobile menu.
- Subtle reveal/hover/tilt interactions with reduced-motion support.
- Contact links, GitHub and LinkedIn links.
- Active section indication only if it remains useful and accessible.

**Gate**
- Keyboard and touch interactions work.
- No interaction depends exclusively on hover.
- No accidental horizontal overflow at narrow widths.

## Phase 5 — Visual QA and technical QA
**Tasks**
- Run the checks in `testing.md`.
- Inspect real browser screenshots at representative desktop, tablet and mobile sizes.
- Check dark and light themes, long content, focus states, contrast, and reduced motion.
- Fix the underlying causes of visual bugs instead of hiding them with arbitrary CSS.
- Remove unused code, console errors, broken links and placeholder text that should not be public.

**Gate**
- Build, lint and type checks pass when configured.
- All issues are listed honestly; no test is reported as passed unless executed.

## Phase 6 — Production preparation
**Tasks**
- Add metadata, favicon, Open Graph defaults, sitemap/robots if appropriate, and a custom 404 only if supported by the stack.
- Verify email/profile links, asset licensing, image sizes and deployment configuration.
- Document local setup and deployment.

**Gate**
- A clean checkout can be installed and built using documented commands.
- No secrets are committed.
- Site is deployable; deployment itself requires owner approval and credentials where applicable.

## Priority order
**P0:** factual content, responsive layout, legibility, real glass treatment, theme toggle, working contact/profile/project links.

**P1:** refined motion, section navigation, project filtering only if the project count justifies it, metadata and performance polish.

**P2:** WebGL/Three.js scene, elaborate scroll choreography, cursor effects, or other expensive effects. Add only if they improve the result and stay within performance/accessibility budgets.

## Completion report format
- Implemented:
- Files changed:
- Commands run:
- Test results:
- Visual checks performed (viewport/theme):
- Known issues / owner inputs needed:
- Next recommended action:
