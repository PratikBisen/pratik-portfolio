import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { OPEN_SOURCE_REPOS, PROFILE } from '../data/profile';
import {
  GitPullRequest,
  ExternalLink,
  Code2,
  Calendar,
} from 'lucide-react';
import { GitHubIcon } from '../components/ui/Icons';

export const OpenSource: React.FC = () => {
  return (
    <Section
      id="open-source"
      tag="Public Repositories & Collaboration"
      title="Open-Source Contributions"
      subtitle="Genuine public code repositories, community contributions, and version control collaboration on GitHub."
    >
      <div className="open-source-container">
        {/* Top GitHub Ecosystem Stats Ribbon */}
        <GlassPanel variant="surface" className="os-ecosystem-banner">
          <div className="os-banner-left">
            <div className="os-github-avatar-gem">
              <GitHubIcon size={24} aria-hidden="true" />
            </div>
            <div>
              <div className="os-handle-pill">github.com/PratikBisen</div>
              <h3 className="os-banner-title">Public Repositories & Open Collaboration</h3>
              <p className="os-banner-sub">
                Committed to writing readable, maintainable software and contributing to technical student communities.
              </p>
            </div>
          </div>

          <div className="os-banner-right">
            <div className="os-metrics-pills">
              <div className="os-metric-chip">
                <span className="os-metric-val">5+</span>
                <span className="os-metric-lbl">Public Repositories</span>
              </div>
              <div className="os-metric-chip">
                <span className="os-metric-val">100%</span>
                <span className="os-metric-lbl">Verified Commits</span>
              </div>
              <div className="os-metric-chip">
                <span className="os-metric-val">21-Day</span>
                <span className="os-metric-lbl">CommitRush Contributor</span>
              </div>
            </div>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary os-profile-btn"
            >
              <GitHubIcon size={16} aria-hidden="true" />
              <span>Explore GitHub Profile</span>
            </a>
          </div>
        </GlassPanel>

        {/* Repositories Grid */}
        <div className="os-repositories-grid">
          {OPEN_SOURCE_REPOS.map((repo) => (
            <GlassPanel key={repo.name} variant="surface" className="os-repo-card">
              <div className="os-card-top">
                <div className="os-repo-identity">
                  <div className="os-folder-icon">
                    <Code2 size={18} color="var(--accent)" />
                  </div>
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="os-repo-title-link"
                    aria-label={`GitHub repository ${repo.name}`}
                  >
                    <span>{repo.name}</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
                <span className="os-role-badge">{repo.role}</span>
              </div>

              <p className="os-repo-desc">{repo.description}</p>

              <div className="os-card-footer">
                <div className="os-meta-items">
                  <span className="os-lang-tag">
                    <span className="os-lang-dot" />
                    <span>{repo.language}</span>
                  </span>
                  {repo.updatedAt && (
                    <span className="os-update-time">
                      <Calendar size={12} aria-hidden="true" />
                      <span>{repo.updatedAt}</span>
                    </span>
                  )}
                </div>

                <div className="os-repo-actions">
                  {repo.demoUrl && (
                    <a
                      href={repo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="os-action-link demo"
                      aria-label={`Live Site: ${repo.name} deployment`}
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="os-action-link source"
                    aria-label={`View Code: ${repo.name} repository`}
                  >
                    <GitPullRequest size={12} aria-hidden="true" />
                    <span>View Code</span>
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
