import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      tag="Portfolio Works"
      title="Featured Projects"
      subtitle="Selected software and web projects. Detailed case studies, live previews, and confirmed repositories are prepared in Phase 2 & 3."
    >
      <div className="projects-grid">
        <GlassPanel variant="panel" className="project-preview-card">
          <div className="project-preview-header">
            <div className="project-icon-box">
              <FolderGit2 size={24} aria-hidden="true" />
            </div>
            <span className="project-status-badge">Phase 1 Foundation Scaffold</span>
          </div>
          <h3 className="project-preview-title">Project Repositories & Verification</h3>
          <p className="project-preview-desc">
            Project candidates (including Spotify Homepage Clone, Responsive Sidebar Navigation, Simon Says Game, and CommitRush challenge participation) are undergoing repository verification to ensure 100% factual accuracy before public display.
          </p>
          <div className="project-preview-footer">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-control project-github-cta"
            >
              <span>Explore GitHub Repositories</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
