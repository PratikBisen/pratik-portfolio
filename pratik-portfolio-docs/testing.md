# Testing and Quality Checklist

## Automated checks
Use the scripts present in `package.json`. When available, run:
- install from lockfile (`npm ci` for npm projects with a lockfile)
- type-check
- lint
- unit tests
- production build

Do not add test tooling solely for ceremony. Add a small set of meaningful tests if the project has enough logic to justify them.

## Functional checks
- [ ] Header links scroll to the correct sections.
- [ ] Skip link moves focus to main content.
- [ ] Theme toggle switches every semantic surface and persists only if implemented.
- [ ] Theme state is announced accessibly.
- [ ] Mobile menu opens/closes, supports Escape, and closes after navigation.
- [ ] GitHub, LinkedIn and email links open the expected destinations.
- [ ] Project repository/demo links are verified and not placeholders.
- [ ] Resume CTA is absent unless a real resume is supplied.
- [ ] No form claims success unless a real delivery service is connected and tested.
- [ ] External links and keyboard focus work correctly.

## Visual viewports
Inspect at minimum:
- 320 × 720
- 375 × 812
- 430 × 932
- 768 × 1024
- 1366 × 768
- 1440 × 900

For each relevant viewport, check dark and light themes. Check the hero, project grid, navigation, contact area, and long content.

## Accessibility
- [ ] Keyboard-only navigation works in logical order.
- [ ] Focus indicator is visible in both themes.
- [ ] Headings are hierarchical.
- [ ] Landmarks and link/button semantics are correct.
- [ ] Text contrast meets WCAG AA targets.
- [ ] Images have appropriate alt text.
- [ ] Motion is reduced when `prefers-reduced-motion` is enabled.
- [ ] Color is not the only way to communicate state.
- [ ] Interactive controls have adequate target size.

## Glass-specific visual checks
- [ ] Background visibly shows through glass panels.
- [ ] Backdrop blur is noticeable but does not reduce content clarity.
- [ ] Borders/highlights suggest a consistent light direction.
- [ ] Panels have differentiated depth levels.
- [ ] Dark and light themes both feel designed, not mechanically inverted.
- [ ] Fallback styling remains legible without backdrop-filter.
- [ ] Blur/animation does not cause visible stutter on mobile.
- [ ] Glass is used selectively; not every section is a floating card.

## Performance and stability
- [ ] No horizontal overflow at 320px width.
- [ ] Images have dimensions/aspect ratios and sensible file sizes.
- [ ] Below-fold images are lazy-loaded where appropriate.
- [ ] No unnecessary layout shifts.
- [ ] No browser console errors or warnings introduced by the implementation.
- [ ] No large render-blocking assets or unneeded animation libraries.
- [ ] Test the static build using the actual production preview where possible.

## Content and link integrity
- [ ] No TODO / `[CONFIRM]` marker appears in the public site.
- [ ] Project summaries match the actual repositories.
- [ ] Education and roles are accurate.
- [ ] Email, GitHub and LinkedIn URLs are correct.
- [ ] No fake statistics, testimonials, client logos, or invented awards.

## Test report template
```text
Environment:
Commands run:
Automated results:
Browser/viewport coverage:
Theme coverage:
Accessibility checks:
Known failures:
Not tested (and why):
```
