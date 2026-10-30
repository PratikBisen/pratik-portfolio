# Portfolio Content and Asset Manifest

**Project:** Personal Portfolio Website — Pratik Bisen  
**Date:** 2026-10-30  
**Phase:** Phase 6 Production Readiness  

---

## 1. Asset Inventory & Status

| Asset | Location | Status | Implementation Details |
|---|---|---|---|
| **Portrait Photograph** | Pending Owner Supply | **Intentionally Omitted** | Per project guidelines, no stock photo, AI-generated headshot, or unverified portrait has been introduced. The hero section features a signature 3D Frosted Glass Identity Enclosure with faceted PB crystalline monogram, floating status lozenges, and environmental caustic illumination. |
| **Resume Document** | Pending Owner Supply | **Intentionally Omitted** | No fabricated or generic resume PDF has been linked. All verified academic coursework, skills, leadership, and project accomplishments are presented natively in dedicated interactive sections. |
| **Social Sharing Image** | `public/og-image.png` | **Verified & Deployed** | Generated 1200x630 pixel high-DPI Open Graph preview image featuring the iOS 26 Liquid Glass optical design language, PB monogram gem, accurate typography, and verified institution details. |
| **Favicon & Brand Icon** | `public/favicon.svg` | **Verified & Deployed** | Apple iOS 26 Liquid Glass optical PB monogram in vector SVG format. Linked with `<link rel="icon">` and `<link rel="apple-touch-icon">`. |
| **Project Screenshots** | `public/projects/` | **Verified & Optimized** | 4 verified project screenshots provided in both modern WebP (Quality 85, 70.8% smaller payload) and original PNG formats: `commit-rush`, `spotify-clone`, `simon-says`, and `responsive-sidebar`. |

---

## 2. Content Source of Truth & Verification

### 2.1 Profile & Identity
- **Name:** Pratik Bisen
- **Role:** Information Technology Engineering Student
- **Institution:** Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T), Nanded
- **Degree:** Bachelor of Technology (B.Tech) in Information Technology (Class of 2029)
- **Email:** `pratikbisen982@gmail.com`
- **GitHub:** `https://github.com/PratikBisen` (Verified 200 OK)
- **LinkedIn:** `https://www.linkedin.com/in/pratikbisen/` (Verified 301/200 OK)

### 2.2 Featured & Curated Projects
1. **HackIT-CommitRush Platform:** Verified public repository and live production deployment (`hack-it-commit-rush.vercel.app`). Pratik's role as core contributor (self-healing pipeline, webhook intake, CSRF & Redis authentication) is accurately documented.
2. **Spotify Homepage Clone:** Verified public repository and GitHub Pages deployment (`pratikbisen.github.io/spotifyHomepageClone/`). Pure semantic HTML5 and responsive CSS3.
3. **Simon Says Interactive Game:** Verified public repository and GitHub Pages deployment (`pratikbisen.github.io/Simon-Says-Game/`). Event-driven state machine in vanilla JavaScript.
4. **Responsive Sidebar Navigation:** Verified public repository and GitHub Pages deployment (`pratikbisen.github.io/responsiveSidebar/`). Pure CSS collapsible layout.
5. **Demo Medical Project:** Explicitly labeled as **"Collaborative Healthcare Records Prototype / Architecture Blueprint"**. Identified without fabricated production metrics or false claims of live public deployment.

### 2.3 Leadership & Community Experience
1. **ITSA (Information Technology Student Association) • SGGSIE&T:** Technical Main Coordinator (2024 – Present).
2. **HackIT Club (Ethical Hacking & Cyber Security) • SGGSIE&T:** Community Co-Lead (2024 – Present).
3. **COMMITRUSH 2026 (21-Day Open-Source Initiative):** Core Contributor & Technical Coordinator (Sep 2026 – Oct 2026).

---

## 3. Placeholders & Items for Owner Confirmation

| Item | Current Public State | Owner Action Required |
|---|---|---|
| **Personal Portrait** | 3D Frosted Glass Monogram Enclosure rendered in place. | When a professional headshot is ready, supply `portrait.jpg` (recommended 800x800 px) to mount inside `src/components/hero/HeroVisual.tsx`. |
| **Downloadable Resume** | Direct communication & LinkedIn profile prioritized. | If a public PDF resume is desired, place `resume.pdf` in `public/` and link from Hero or Header. |
| **Custom Domain** | Configured for `https://pratikbisen.github.io/pratik-portfolio/`. | If a custom domain (e.g. `pratikbisen.com`) is purchased, add `public/CNAME` and update `canonical` URL. |
| **CGPA / Academic Score** | Omitted from public copy. | If owner wishes to display cumulative academic score, add to `EDUCATION_DATA` in `src/data/profile.ts`. |
