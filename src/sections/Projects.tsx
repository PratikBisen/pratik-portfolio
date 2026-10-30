import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { PROJECTS_DATA } from '../data/profile';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
} from 'lucide-react';
import { GitHubIcon } from '../components/ui/Icons';

export const Projects: React.FC = () => {
  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  const standardProjects = PROJECTS_DATA.filter((p) => p.id !== featuredProject.id);

  return (
    <Section
      id="projects"
      tag="Verified Implementations"
      title="Featured Engineering Works"
      subtitle="Selected software platforms, responsive web applications, and algorithmic interfaces with confirmed commits and live deployments."
    >
      <div className="projects-showcase-container">
        {/* ====================================================================
            1. Prominent Primary Featured Project Spotlight
            ==================================================================== */}
        <div className="featured-project-spotlight">
          <GlassPanel variant="surface" className="featured-spotlight-enclosure">
            <div className="spotlight-top-badge-row">
              <span className="spotlight-pill">
                <Sparkles size={13} aria-hidden="true" />
                <span>Primary Engineering Showcase</span>
              </span>
              <span className="spotlight-verified-badge">
                <ShieldCheck size={14} aria-hidden="true" />
                <span>Verified Repository & Deployment</span>
              </span>
            </div>

            <div className="featured-spotlight-layout">
              {/* Left: Layered Glass Media Viewport */}
              <div className="spotlight-media-frame">
                <div className="spotlight-glass-bezel">
                  <div className="spotlight-browser-bar">
                    <span className="browser-dot dot-red" />
                    <span className="browser-dot dot-amber" />
                    <span className="browser-dot dot-green" />
                    <span className="browser-url-text">hack-it-commit-rush.vercel.app</span>
                  </div>
                  <div className="spotlight-image-container">
                    {featuredProject.image ? (
                      <picture>
                        <source
                          srcSet={featuredProject.image.replace(/\.png$/, '.webp')}
                          type="image/webp"
                        />
                        <img
                          src={featuredProject.image}
                          alt={`Screenshot of ${featuredProject.title}`}
                          className="spotlight-preview-img"
                          loading="lazy"
                          width={1280}
                          height={800}
                        />
                      </picture>
                    ) : (
                      <div className="spotlight-placeholder-img">
                        <span>Live Preview Pending</span>
                      </div>
                    )}
                    <div className="spotlight-glass-overlay" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Right: Glass Architecture & Features Panel */}
              <div className="spotlight-details-panel">
                <div className="spotlight-header-group">
                  <span className="spotlight-subtitle">{featuredProject.tagline}</span>
                  <h3 className="spotlight-title">{featuredProject.title}</h3>
                </div>

                <p className="spotlight-description">{featuredProject.description}</p>

                {/* Problem & Solution Accordion / Glass Grid */}
                <div className="spotlight-arch-brief">
                  <div className="arch-brief-cell">
                    <div className="arch-brief-label">
                      <AlertCircle size={14} color="var(--accent)" />
                      <span>The Engineering Challenge</span>
                    </div>
                    <p className="arch-brief-text">{featuredProject.problem}</p>
                  </div>
                  <div className="arch-brief-cell">
                    <div className="arch-brief-label">
                      <CheckCircle2 size={14} color="#10B981" />
                      <span>Architecture & Solution</span>
                    </div>
                    <p className="arch-brief-text">{featuredProject.solution}</p>
                  </div>
                </div>

                {/* Key Features Bullet List */}
                <div className="spotlight-features-list">
                  <span className="features-list-heading">Key Technical Implementations:</span>
                  <ul>
                    {featuredProject.keyFeatures.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={13} className="feature-bullet-icon" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="spotlight-tags-cluster">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="spotlight-tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Working CTA Actions */}
                <div className="spotlight-actions-row">
                  {featuredProject.demoUrl && (
                    <a
                      href={featuredProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-btn-primary spotlight-action-btn"
                    >
                      <span>Explore Live Platform</span>
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={featuredProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-secondary spotlight-action-btn"
                  >
                    <GitHubIcon size={16} aria-hidden="true" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>

        {/* ====================================================================
            2. Secondary Curated Projects Grid
            ==================================================================== */}
        <div className="secondary-projects-grid">
          {standardProjects.map((project) => (
            <GlassPanel key={project.id} variant="surface" className="secondary-project-card">
              {/* Media Container */}
              <div className="secondary-media-wrapper">
                <div className="secondary-browser-bar">
                  <span className="browser-dot dot-sm" />
                  <span className="browser-dot dot-sm" />
                  <span className="browser-dot dot-sm" />
                  <span className="browser-url-text sm">{project.demoUrl || project.repoUrl}</span>
                </div>
                {project.image ? (
                  <picture>
                    <source
                      srcSet={project.image.replace(/\.png$/, '.webp')}
                      type="image/webp"
                    />
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="secondary-project-img"
                      loading="lazy"
                      width={1280}
                      height={800}
                    />
                  </picture>
                ) : (
                  <div className="secondary-placeholder-blueprint">
                    <Layers size={28} color="var(--accent)" />
                    <span className="blueprint-title">System Architecture Blueprint</span>
                    <span className="blueprint-sub">Prototype & Type-Safe Schema</span>
                  </div>
                )}
                <div className="secondary-img-scrim" aria-hidden="true" />
              </div>

              {/* Content Information */}
              <div className="secondary-content-pane">
                <div className="secondary-title-row">
                  <span className="secondary-tagline">{project.tagline}</span>
                  <h4 className="secondary-project-title">{project.title}</h4>
                </div>

                <p className="secondary-desc">{project.description}</p>

                <div className="secondary-tech-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="secondary-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="secondary-actions-footer">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-btn-demo"
                      aria-label={`Open live demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ) : (
                    <span
                      className="secondary-badge-internal"
                      title="Collaborative architecture prototype and TypeScript data contracts"
                    >
                      Prototype Blueprint
                    </span>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-btn-repo"
                    aria-label={`Source: ${project.title} GitHub repository`}
                  >
                    <GitHubIcon size={14} aria-hidden="true" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </Section>
  );
};
