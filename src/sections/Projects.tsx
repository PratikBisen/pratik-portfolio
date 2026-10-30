import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { FolderGit2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      tag="Engineering Works"
      title="Featured Projects"
      subtitle="Selected software implementations and web interfaces. Candidate projects undergo repository verification to ensure factual precision."
    >
      <div className="projects-showcase-stage">
        {/* Sculpted Liquid Glass Showcase Window */}
        <GlassPanel variant="surface" className="project-liquid-canvas">
          <div className="project-lens-top-bar">
            <div className="project-lens-badge">
              <FolderGit2 size={20} aria-hidden="true" />
              <span>Project Repository Verification</span>
            </div>
            <span className="project-verification-pill liquid-glass-droplet">
              <ShieldCheck size={14} aria-hidden="true" />
              <span>Pre-Release Verification Stage</span>
            </span>
          </div>

          <div className="project-liquid-content">
            <h3 className="project-display-title">
              Curated Software & Web Works
            </h3>
            <p className="project-display-desc">
              Candidate project repositories (including Spotify Homepage Clone, Responsive Sidebar Navigation, Simon Says Game, and HackIT-CommitRush platform contributions) are being verified to reflect confirmed commits, live deployment URLs, and architecture decisions before full case-study release.
            </p>

            {/* Candidate Project Lenses */}
            <div className="candidate-projects-row">
              {[
                { title: 'Spotify Homepage Clone', tag: 'Responsive Layout' },
                { title: 'Responsive Sidebar Navigation', tag: 'UI Architecture' },
                { title: 'Simon Says Game', tag: 'State & Logic' },
                { title: 'CommitRush Platform', tag: 'Community Event' },
              ].map((proj) => (
                <div key={proj.title} className="candidate-liquid-card liquid-glass-base">
                  <div className="candidate-card-tag">{proj.tag}</div>
                  <div className="candidate-card-name">{proj.title}</div>
                </div>
              ))}
            </div>

            <div className="project-cta-row">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-btn-secondary"
              >
                <span>Browse All Repositories on GitHub</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
