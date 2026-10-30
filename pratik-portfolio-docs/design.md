# Design System — Immersive Real Glassmorphism

## Design intent
Create an immersive, dimensional personal brand site that feels like carefully lit glass objects suspended in a deep environment. The design should be premium and experimental without compromising readability, speed, accessibility, or the seriousness expected of a developer portfolio.

## Principles
1. **Glass must look like glass.** Use translucency, backdrop blur, fine edge definition, subtle internal highlights, and layered light/shadow. A transparent fill alone is insufficient.
2. **The environment creates the depth.** Use a restrained background gradient, radial light fields, and a small number of blurred or softly dimensional objects. The panels should visibly reveal the background beneath them.
3. **Lighting is controlled.** Choose one primary cool light family (blue/cyan) with a restrained violet accent. Avoid rainbow gradients, neon overload, and uniform glow around every element.
4. **Hierarchy beats effects.** Name, role, project titles and actions must remain readable at a glance.
5. **Light mode is a designed theme.** Do not invert the dark palette mechanically. Use brighter environmental tones, subtle shadows, cool-tinted glass, and clearly defined edges.
6. **Motion has a purpose.** Animate depth and atmosphere gently. Never make reading or navigation depend on animation.

## Visual direction
- Mood: futuristic, tactile, elegant, immersive.
- Base: deep ink / midnight blue in dark mode; cool mist / pearl in light mode.
- Accents: electric blue and restrained violet.
- Surface language: layered frosted glass with varied depth levels.
- Typography: modern sans-serif with strong display scale and excellent body readability. Use a locally bundled or reliable web font only if licensing and loading are handled properly; otherwise use a polished system stack.

## Token contract
Implement semantic CSS variables, not scattered literal colors. Suggested initial values should be tuned visually:

### Dark theme
- `--bg`: near-black navy such as `#070B14`.
- `--bg-elevated`: `#0D1422`.
- `--text`: `#F3F6FC`.
- `--text-muted`: `#AAB6CA`.
- `--accent`: cool electric blue such as `#7AA8FF`.
- `--accent-secondary`: restrained violet such as `#B3A0FF`.
- `--glass-fill`: low-opacity cool white/blue.
- `--glass-border`: translucent white/cool blue.
- `--focus`: highly visible blue/cyan outline.

### Light theme
- `--bg`: cool pearl such as `#F3F6FC`.
- `--bg-elevated`: `#E8EEF8`.
- `--text`: deep navy such as `#111827`.
- `--text-muted`: slate with sufficient contrast.
- `--accent`: darker blue adjusted for readable text.
- `--accent-secondary`: muted violet.
- `--glass-fill`: translucent white.
- `--glass-border`: cool gray-blue with enough definition.
- `--focus`: clear blue outline.

These are starting points, not immutable final colors. Check text contrast and tune both themes before sign-off.

## Glass material recipe
Create reusable variants (e.g. `glass-subtle`, `glass-panel`, `glass-floating`, `glass-control`) with a consistent token system:
- Semi-transparent background fill; avoid fully opaque backgrounds where the glass treatment is meant to be visible.
- `backdrop-filter: blur(...) saturate(...)` with a sensible blur range; use `-webkit-backdrop-filter` where needed.
- Thin translucent border with a brighter upper/lighting edge.
- Very subtle inset highlight, e.g. an inset shadow or pseudo-element gradient.
- Ambient shadow below the surface to separate it from the background.
- Optional small specular highlight that follows a consistent lighting direction.
- Rounded corners consistent with component role; avoid making every element a giant pill.
- Avoid excessive blur on huge full-screen surfaces; it is costly and can reduce text clarity.

Use `@supports` or a solid/tinted fallback for browsers without `backdrop-filter`. The fallback must preserve contrast and look intentional.

## Depth model
Use a small, repeatable set of depth levels:
- Level 0: environment / background lighting.
- Level 1: base page content.
- Level 2: primary glass panels.
- Level 3: floating controls and featured project surfaces.
- Level 4: navigation/popovers/mobile menu.

Avoid arbitrary z-index values. Document a small z-index scale. Ensure overlays and the mobile menu remain usable and do not trap the page in a broken scroll state.

## Layout and typography
- Use a centered max-width container with fluid side gutters.
- Hero: strong display typography, concise intro, clear primary/secondary actions, portrait composition, and controlled visual focal point.
- Sections: generous but not wasteful vertical rhythm; each section has an unmistakable heading and supporting copy.
- Project cards: project title and summary first, technology tags second, links visible and keyboard reachable.
- Body text should be comfortable on mobile (avoid tiny 12px paragraphs).
- Use fluid type via `clamp()` where it improves scaling.
- Keep line lengths moderate and avoid long text across very wide screens.

## Portrait treatment
- Owner will provide the actual portrait separately.
- Use `object-fit: cover`, intentional focal positioning, and responsive aspect ratio.
- Frame the photo with subtle glass/lighting, not a heavy glowing ring.
- Provide descriptive alt text only when the image conveys content; use empty alt for purely decorative imagery.
- Never generate or imply a fake portrait is the owner.
- Until the real image exists, use a visibly intentional abstract placeholder rather than a broken image icon.

## 3D and motion
- Prefer CSS transforms, gradients, layered pseudo-elements, and modest perspective first.
- Do not add Three.js/WebGL just for decoration. If a 3D library is justified, isolate it, lazy-load it, and provide a static fallback.
- Micro-interactions: short easing, subtle elevation, restrained tilt, gentle light shift.
- Avoid large motion on every scroll, forced parallax, flashing effects, or cursor effects that make mobile and touch interactions worse.
- Respect `prefers-reduced-motion: reduce` by disabling/reducing nonessential transforms, parallax, and reveal animations.
- Avoid layout shift during animations.

## Theme behavior
- Provide an accessible toggle with clear label and icon/state; do not rely on icon alone if state is ambiguous.
- Prefer system theme on first visit unless the owner chooses a fixed default; persist the explicit user selection if persistence is implemented.
- Theme change must update page background, text, borders, glass surfaces, shadows, focus states, tags, and form controls together.
- Prevent a visible theme flash on load where practical without introducing brittle hydration code.

## Accessibility requirements
- Text contrast target: WCAG AA (4.5:1 for normal text; 3:1 for large text and relevant UI components).
- Visible keyboard focus in both themes.
- Do not encode meaning using color alone.
- Use semantic headings, landmarks, links and buttons.
- Interactive elements must have comfortable touch targets.
- Do not make body copy translucent enough to reduce legibility.

## Anti-patterns to reject
- Opaque cards falsely described as glass.
- A blur layer that makes the text itself blurry.
- Low-contrast gray text over noisy gradients.
- Glow on every border and button.
- Infinite, heavy animations or giant WebGL scenes that block initial render.
- Glass applied to every text block; reserve stronger glass for meaningful surfaces.
- Different inconsistent blur/border recipes on every component.
- Light mode that is merely dark mode with inverted colors.
