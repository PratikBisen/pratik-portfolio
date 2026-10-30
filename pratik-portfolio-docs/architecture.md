# Architecture and Technology Recommendation

## Recommended default
If the repository is empty and there are no constraints, use **React + Vite + TypeScript**. This is a static, content-led portfolio; it does not need a server-rendering framework or database by default. Vite provides a lean build workflow, React supports reusable UI, and TypeScript helps keep portfolio content structures consistent.

If an existing, working framework is already in the repository, inspect it and keep it unless there is a concrete reason to migrate. Do not rewrite a functioning project solely to match this recommendation.

## Suggested dependencies
- React and React DOM.
- TypeScript.
- Vite.
- A minimal icon package such as Lucide React, if icons are needed.
- Optional motion library only if CSS transitions are insufficient. Prefer CSS for simple effects.
- Avoid adding Three.js, a CMS, analytics, form backend, or animation framework without a documented need.

Use the package manager already present in the repository (lockfile is authoritative). If starting from scratch and no preference exists, npm is acceptable.

## Suggested source layout
```text
.
├── public/
│   ├── images/
│   │   ├── pratik-portrait.webp       # owner-supplied image, when available
│   │   └── projects/                  # verified project screenshots
│   ├── favicon.svg
│   └── og-image.png                   # create once visual identity is stable
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── components/
│   │   ├── layout/                    # Header, Footer, Section, Container
│   │   ├── glass/                     # GlassPanel, GlassButton, GlassCard
│   │   ├── navigation/                # Nav, MobileNav, ThemeToggle
│   │   └── ui/                        # reusable accessible primitives
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── OpenSource.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   ├── hooks/                         # only genuinely reusable hooks
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── themes.css
│   │   ├── base.css
│   │   └── glass.css
│   └── types/
│       └── portfolio.ts
├── Context.md
├── plan.md
├── design.md
├── architecture.md
├── features.md
├── content.md
├── implementation.md
├── testing.md
├── deployment.md
├── AGENTS.md
└── README.md
```

Adjust the structure to fit the existing repository rather than forcing this exact layout.

## Rendering model
- Start with a single-page, section-based portfolio unless a strong reason requires routes.
- Use semantic `<main>`, `<header>`, `<nav>`, `<section>`, and `<footer>`.
- Use stable IDs for in-page navigation.
- Keep content separate from presentation using typed data where it makes maintenance easier.
- Avoid state management libraries for a simple portfolio.

## Theme architecture
- Use CSS custom properties for semantic tokens.
- Apply a `data-theme="dark|light"` attribute to a stable root element or document root.
- Theme toggle must expose its current state to assistive technology.
- If persistence is used, handle unavailable storage safely and avoid a theme flash where practical.

## Asset strategy
- Prefer optimized local assets supplied by the owner.
- Use responsive images with explicit dimensions/aspect ratio to prevent layout shift.
- Use SVG for simple decorative vector geometry and icons; never use untrusted inline SVG input.
- Do not hotlink random portfolio screenshots or copyrighted artwork.
- Use a CSS-based background before introducing WebGL.

## Data contracts
Use types for profile links, skills, projects, education, roles, and achievements. Include optional fields rather than inventing values. An unverified project may have `status: "needs-verification"` during development but must not appear publicly in that state.

## Performance constraints
- Avoid large animation packages unless justified.
- Lazy-load below-the-fold project images.
- Avoid expensive blur over huge moving layers.
- Reserve image dimensions to prevent layout shifts.
- Keep the main thread free during initial render.
- Measure performance in the browser; do not claim a score without running a test.

## No backend by default
The initial contact CTA can use `mailto:pratikbisen982@gmail.com`. If a functional form is later requested, choose a provider and document spam protection, privacy, and failure states. Never ship a pretend form.
