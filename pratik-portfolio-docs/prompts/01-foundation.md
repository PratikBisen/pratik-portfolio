# Antigravity Prompt 01 — Inspect, Plan, and Establish the Design Foundation

You are the senior frontend engineer and design-systems implementer for Pratik Bisen's personal portfolio. Work in the currently open repository.

## Read first
Read `AGENTS.md`, `Context.md`, `plan.md`, `design.md`, `architecture.md`, `features.md`, `content.md`, `implementation.md`, `testing.md`, and `deployment.md` before changing code.

## Task
1. Inspect the current repository, framework, package manager, scripts, and existing work. Do not assume it is empty.
2. Summarize the current state and identify any conflict between existing code and the specification.
3. If starting from scratch, use React + Vite + TypeScript unless there is a clear reason not to. Keep an existing healthy stack if present.
4. Create or refine the application foundation and semantic design tokens for dark and light themes.
5. Implement reusable glass primitives with real translucent fills, backdrop blur, subtle directional edge highlights, inset reflections, and layered shadows. Provide a legible fallback when `backdrop-filter` is unavailable.
6. Build the basic page shell, responsive container, semantic section scaffolding, header/navigation shell, theme toggle, and a minimal hero placeholder. Do not fill sections with fabricated personal content.
7. Use the real owner portrait only if it already exists in the repository and is clearly supplied for this purpose. Otherwise create a deliberate abstract placeholder frame and note that the real portrait is needed.
8. Establish a reduced-motion strategy and a small z-index/depth scale.
9. Add or update scripts only where appropriate; do not add unnecessary dependencies.

## Design standard
The chosen direction is immersive 3D glassmorphism with both dark and light themes. The glass must visibly reveal the background, have convincing material cues, and retain readable text. It must not look like generic opaque cards or a neon gaming dashboard. Keep the visual system premium, restrained, and consistent.

## Constraints
- No invented bio, stats, testimonials, achievements, or project details.
- No fake portrait.
- No dead links/buttons.
- No giant WebGL scene unless you justify it with a concrete benefit and performance plan.
- Do not deploy or publish.

## Acceptance checks
- App starts using documented commands.
- Dark/light theme switching works.
- Main page shell is responsive and keyboard navigable.
- Glass material is visible over the actual background.
- Reduced-motion fallback exists.
- No known build errors or new console errors.

At completion, report: files changed, design decisions, commands run and exact results, screenshots/viewports inspected, unresolved issues, and the next recommended action. Do not claim checks that were not run.
