import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { EDUCATION_DATA } from '../data/profile';
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  CheckCircle2,
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section
      id="education"
      tag="Academic Credentials"
      title="Formal Engineering Education"
      subtitle="Foundational university coursework in Information Technology and computer systems engineering."
    >
      <div className="education-editorial-layout">
        <GlassPanel variant="surface" className="education-grand-card">
          <div className="education-split-layout">
            {/* Left: Institution & Degree Details */}
            <div className="education-institution-pane">
              <div className="education-gem-header">
                <div className="education-shield-icon">
                  <GraduationCap size={32} aria-hidden="true" />
                </div>
                <div>
                  <span className="education-status-tag">Undergraduate Degree Program</span>
                  <h3 className="education-degree-heading">{EDUCATION_DATA.degree}</h3>
                  <h4 className="education-branch-heading">{EDUCATION_DATA.branch}</h4>
                </div>
              </div>

              <div className="education-campus-group">
                <p className="education-campus-fullname">{EDUCATION_DATA.institution}</p>
                <div className="education-geo-badges">
                  <span className="geo-badge">
                    <MapPin size={13} aria-hidden="true" />
                    <span>{EDUCATION_DATA.location}</span>
                  </span>
                  <span className="geo-badge">
                    <Calendar size={13} aria-hidden="true" />
                    <span>Expected Graduation: {EDUCATION_DATA.expectedGraduation}</span>
                  </span>
                </div>
              </div>

              {/* Institution Key Attributes */}
              <div className="education-attributes-list">
                <span className="attributes-header">Institutional Environment:</span>
                <ul>
                  {EDUCATION_DATA.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={13} className="attr-check" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Core Academic Curriculum Matrix */}
            <div className="education-curriculum-pane">
              <div className="curriculum-header-row">
                <div className="curriculum-icon-badge">
                  <BookOpen size={18} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="curriculum-title">Core Academic Curriculum</h4>
                  <p className="curriculum-subtitle">
                    Foundational coursework underpinning theoretical & applied software engineering
                  </p>
                </div>
              </div>

              <div className="curriculum-chips-grid">
                {EDUCATION_DATA.curriculum.map((course) => (
                  <div key={course} className="curriculum-glass-chip">
                    <span className="curriculum-dot" />
                    <span className="curriculum-name">{course}</span>
                  </div>
                ))}
              </div>

              <div className="curriculum-footer-note">
                <Award size={14} color="var(--accent)" />
                <span>
                  Combines algorithmic problem-solving in laboratory practicums with structured theoretical foundations.
                </span>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
