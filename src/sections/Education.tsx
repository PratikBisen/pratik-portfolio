import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section
      id="education"
      tag="Academic Background"
      title="Education"
      subtitle="Formal university education and ongoing academic coursework in Information Technology."
    >
      <div className="education-container">
        <GlassPanel variant="panel" className="education-card">
          <div className="education-icon-col">
            <div className="education-badge">
              <GraduationCap size={28} aria-hidden="true" />
            </div>
          </div>
          <div className="education-details">
            <div className="education-header">
              <div>
                <h3 className="education-degree">Bachelor of Technology (B.Tech)</h3>
                <h4 className="education-branch">Information Technology</h4>
              </div>
            </div>

            <p className="education-institution">
              Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T)
            </p>

            <div className="education-meta">
              <span className="education-meta-item">
                <MapPin size={14} aria-hidden="true" />
                Vishnupuri, Nanded, Maharashtra, India
              </span>
              <span className="education-meta-item">
                <BookOpen size={14} aria-hidden="true" />
                Undergraduate Degree Program
              </span>
            </div>

            <div className="education-coursework">
              <span className="coursework-label">Key Subjects:</span>
              <div className="coursework-tags">
                <span className="glass-subtle coursework-pill">Data Structures & Algorithms</span>
                <span className="glass-subtle coursework-pill">Object-Oriented Programming</span>
                <span className="glass-subtle coursework-pill">Database Management</span>
                <span className="glass-subtle coursework-pill">Computer Networks</span>
                <span className="glass-subtle coursework-pill">Operating Systems</span>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
