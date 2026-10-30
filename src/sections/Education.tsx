import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section
      id="education"
      tag="Academic Foundation"
      title="Education"
      subtitle="Formal university education and foundational engineering coursework in Information Technology."
    >
      <div className="education-liquid-container">
        <GlassPanel variant="surface" className="education-liquid-card">
          <div className="education-badge-pod">
            <div className="education-crystal-lens">
              <GraduationCap size={32} aria-hidden="true" />
            </div>
          </div>

          <div className="education-body-flow">
            <div className="education-title-group">
              <h3 className="education-degree-text">Bachelor of Technology (B.Tech)</h3>
              <h4 className="education-branch-highlight">Information Technology</h4>
            </div>

            <p className="education-campus-name">
              Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T)
            </p>

            <div className="education-meta-ribbon">
              <span className="education-meta-chip liquid-glass-droplet">
                <MapPin size={13} aria-hidden="true" />
                <span>Vishnupuri, Nanded, Maharashtra, India</span>
              </span>
              <span className="education-meta-chip liquid-glass-droplet">
                <BookOpen size={13} aria-hidden="true" />
                <span>Undergraduate Degree Program</span>
              </span>
            </div>

            <div className="education-subjects-block">
              <span className="subjects-heading">Core Academic Curriculum</span>
              <div className="subjects-droplets-grid">
                {[
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming',
                  'Database Management Systems',
                  'Computer Networks',
                  'Operating Systems',
                  'Discrete Mathematics',
                ].map((subject) => (
                  <span key={subject} className="liquid-glass-droplet subject-droplet">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
