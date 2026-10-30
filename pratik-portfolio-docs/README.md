# Pratik Bisen — Portfolio Website Specification

This repository is the source of truth for planning, implementing, testing, and deploying Pratik Bisen's personal portfolio. It is designed to be used by Antigravity as a documentation-first coding agent.

## Start here
1. Read `Context.md`, `design.md`, `features.md`, and `architecture.md` completely.
2. Follow `plan.md` in order. Do not skip directly to styling or write the whole application in one uncontrolled pass.
3. Use `AGENTS.md` as persistent agent rules.
4. Use the prompts in `prompts/` at the matching milestone. Paste one prompt at a time into Antigravity.
5. Keep `content.md` factual. Any unknown facts must remain clear placeholders until Pratik supplies them.
6. Verify every milestone using `testing.md`; do not claim tests passed unless they were actually run.

## Documentation index
- `Context.md` — identity, audience, goals, verified facts and guardrails.
- `plan.md` — phased execution plan and acceptance gates.
- `design.md` — visual direction and glassmorphism system.
- `architecture.md` — recommended stack and code structure.
- `features.md` — functional requirements and behavior.
- `content.md` — approved content, links and content placeholders.
- `implementation.md` — coding conventions and implementation sequence.
- `testing.md` — quality, accessibility, responsiveness and performance checks.
- `deployment.md` — deployment, domain, SEO and operational checklist.
- `AGENTS.md` — persistent rules for coding agents.
- `prompts/01-foundation.md` — project audit and design foundation.
- `prompts/02-build.md` — build the complete portfolio in vertical slices.
- `prompts/03-quality-gate.md` — test, audit, repair and report.
- `prompts/04-deployment.md` — prepare production deployment.

## Project decisions
- Visual direction: immersive 3D glassmorphism.
- Theme: polished dark and light themes.
- Hero: identity-first personal brand.
- Portrait: use a real photo supplied by Pratik; never fabricate a photorealistic likeness.
- Stack: choose based on the existing repository. If starting from scratch, use React + Vite + TypeScript unless the implementation constraints clearly favor another option.
- Build/deploy operator: Antigravity, directed through the prompts in this repository.

## Important
This package is a specification and prompt kit, not a claim that the site has already been implemented or deployed. Repository changes, tests, and deployment must be performed and verified in Antigravity.
