import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { ABOUT_DATA, PROFILE } from '../data/profile';
import { BookOpen, Terminal, Users, Sparkles, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      tag="Identity & Trajectory"
      title="Engineering Foundations & Direction"
      subtitle="Information Technology undergraduate student at SGGSIE&T, Nanded, dedicated to foundational software principles, algorithmic problem-solving, and practical web engineering."
    >
      <div className="about-editorial-composition">
        {/* Left: Prominent Frosted Glass Narrative Surface */}
        <div className="about-narrative-column">
          <GlassPanel variant="surface" className="about-primary-glass-card">
            <div className="about-card-lens-flare" aria-hidden="true" />
            
            <div className="about-header-pill">
              <GraduationCap size={15} aria-hidden="true" />
              <span>B.Tech Information Technology • Class of 2029</span>
            </div>

            <h3 className="about-editorial-heading">
              Building purposeful software through core discipline, algorithmic rigor, and community collaboration.
            </h3>

            <div className="about-narrative-prose">
              <p>
                {ABOUT_DATA.studying} My focus is anchored in engineering foundations—understanding how software operates from low-level memory mechanics, data structures, and algorithmic complexity in C/C++ to building accessible, high-performance web systems and navigating Linux environments.
              </p>
              <p>
                {ABOUT_DATA.approach} Rather than chasing ephemeral trends without substance, I prioritize genuine problem-solving, structured architecture, and version control discipline.
              </p>
              <p>
                {ABOUT_DATA.ambition} Through active departmental leadership and student technical communities, I strive to build software that is robust, maintainable, and practically impactful.
              </p>
            </div>

            <div className="about-meta-tags-row">
              <span className="about-meta-tag">
                <span className="meta-tag-dot" />
                <span>{PROFILE.degree} • {PROFILE.branch}</span>
              </span>
              <span className="about-meta-tag">
                <span className="meta-tag-dot" />
                <span>{PROFILE.institution}</span>
              </span>
            </div>
          </GlassPanel>
        </div>

        {/* Right: Asymmetric 3D Glass Prism & Dimensional Insight Lozenges */}
        <div className="about-visual-column">
          {/* Subtle Decorative 3D Glass Prism Card */}
          <div className="about-3d-prism-pod">
            <div className="prism-ambient-halo" aria-hidden="true" />
            <div className="prism-faceted-enclosure">
              <div className="prism-specular-ridge" aria-hidden="true" />
              <div className="prism-content-matrix">
                <div className="prism-top-brand">
                  <div className="prism-crystal-gem">
                    <Sparkles size={18} color="var(--accent)" />
                  </div>
                  <div>
                    <span className="prism-title-label">ACADEMIC & DEV STATUS</span>
                    <h4 className="prism-title-value">Undergraduate Engineer</h4>
                  </div>
                </div>

                <div className="prism-stats-grid">
                  {ABOUT_DATA.quickStats.map((stat) => (
                    <div key={stat.label} className="prism-stat-cell">
                      <span className="prism-stat-label">{stat.label}</span>
                      <span className="prism-stat-value">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dimensional Insight Lozenges */}
          <div className="about-dimensional-lozenges">
            <div className="dimensional-lozenge-glass">
              <div className="lozenge-icon-gem">
                <BookOpen size={18} aria-hidden="true" />
              </div>
              <div className="lozenge-body">
                <h4 className="lozenge-heading">Algorithmic & Core CS</h4>
                <p className="lozenge-description">
                  Continuous practice in data structures, algorithms, object-oriented paradigms, and system fundamentals.
                </p>
              </div>
            </div>

            <div className="dimensional-lozenge-glass">
              <div className="lozenge-icon-gem">
                <Terminal size={18} aria-hidden="true" />
              </div>
              <div className="lozenge-body">
                <h4 className="lozenge-heading">Linux & Web Toolchain</h4>
                <p className="lozenge-description">
                  Comfortable with Linux workflows, Git version control, modern CSS architectures, and JavaScript.
                </p>
              </div>
            </div>

            <div className="dimensional-lozenge-glass">
              <div className="lozenge-icon-gem">
                <Users size={18} aria-hidden="true" />
              </div>
              <div className="lozenge-body">
                <h4 className="lozenge-heading">Community & Coordination</h4>
                <p className="lozenge-description">
                  ITSA Technical Main Coordinator and HackIT Community Co-Lead fostering peer learning and hackathons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
