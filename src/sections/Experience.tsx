import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { EXPERIENCE_DATA } from '../data/profile';
import { Award, Shield, Terminal, Calendar, CheckCircle2 } from 'lucide-react';

const EXP_ICONS: Record<string, React.ReactNode> = {
  Award: <Award size={22} aria-hidden="true" />,
  Shield: <Shield size={22} aria-hidden="true" />,
  Terminal: <Terminal size={22} aria-hidden="true" />,
};

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      tag="Leadership & Initiatives"
      title="Experience & Community Leadership"
      subtitle="Verified student coordination, technical community leadership, and collaborative open-source engineering initiatives."
    >
      <div className="experience-timeline-stage">
        {/* Glowing Central Timeline Spine */}
        <div className="timeline-conduit-spine" aria-hidden="true">
          <div className="timeline-conduit-pulse" />
        </div>

        <div className="experience-timeline-entries">
          {EXPERIENCE_DATA.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`timeline-entry-row ${isEven ? 'entry-left' : 'entry-right'}`}
              >
                {/* 3D Glass Milestone Node on the Spine */}
                <div className="timeline-milestone-anchor">
                  <div className="milestone-3d-node">
                    <div className="milestone-node-gem">
                      {EXP_ICONS[exp.iconName] || <Award size={18} />}
                    </div>
                  </div>
                </div>

                {/* Glass Timeline Narrative Card */}
                <div className="timeline-content-card-wrapper">
                  <GlassPanel variant="surface" className="timeline-glass-card">
                    <div className="timeline-card-header">
                      <div className="timeline-meta-top">
                        <span className="timeline-category-tag">{exp.category}</span>
                        <span className="timeline-period-pill">
                          <Calendar size={12} aria-hidden="true" />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      <h3 className="timeline-role-title">{exp.role}</h3>
                      <h4 className="timeline-org-name">{exp.organization}</h4>
                    </div>

                    <p className="timeline-description-text">{exp.description}</p>

                    <div className="timeline-highlights-block">
                      <span className="highlights-header">Key Responsibilities & Impact:</span>
                      <ul className="timeline-bullets-list">
                        {exp.highlights.map((item, idx) => (
                          <li key={idx}>
                            <CheckCircle2
                              size={13}
                              className="bullet-icon-check"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassPanel>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
