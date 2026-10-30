# Implementation Rules

## Before coding
1. Inspect current repository, package manager, scripts, and existing styles.
2. Read all docs and reconcile conflicts in favor of `Context.md` for facts, `design.md` for visual decisions, and `features.md` for behavior.
3. Report any ambiguity that could cause fabricated content or destructive changes.

## Component discipline
- Build reusable components where repetition is real; do not abstract every element prematurely.
- Keep components small and semantically named.
- Keep content in typed data files when it improves maintainability.
- Avoid giant single-file components and duplicate style definitions.
- Avoid unnecessary dependencies and global state.

## CSS discipline
- Use semantic CSS variables for theme values.
- Centralize design tokens and glass recipes.
- Use class names that communicate role, not appearance alone.
- Keep responsive behavior close to the relevant component or clearly grouped by breakpoint.
- Use `prefers-reduced-motion` and `@supports` fallbacks.
- Avoid `!important` except for a documented unavoidable override.
- Do not use blur on text; blur only the background behind a surface.

## Interaction discipline
- Use buttons for actions and anchors for navigation.
- All interactive items need keyboard focus and meaningful accessible names.
- Mobile navigation must manage focus and Escape correctly.
- Theme toggle must announce state.
- No dead buttons, placeholder `href="#"`, or inert-looking controls.
- External links must be accurate and secure.

## Content discipline
- Do not fabricate facts, metrics, skills, experience, or achievements.
- Keep unverified content in TODOs outside the public UI.
- Never generate a fake personal portrait.
- Never expose private data or credentials.
- A section with no approved content should be omitted or clearly left pending in the development report, not filled with invented filler.

## Quality discipline
- Run actual package scripts and report exact results.
- Inspect the rendered page, not just source code.
- Fix console errors and broken routes/links.
- Test both themes and reduced-motion behavior.
- Do not report Lighthouse or accessibility scores without running the corresponding test.
- At the end of each phase, provide a concise changelog and remaining blockers.
