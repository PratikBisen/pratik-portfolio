import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { Terminal, Globe, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      tag="Competencies"
      title="Technical Areas & Tools"
      subtitle="Honest proficiency categorizations based on active coursework, projects, and learning goals—no arbitrary percentage meters."
    >
      <div className="skills-grid">
        {/* Core & Practiced */}
        <GlassPanel variant="panel" className="skill-category-card">
          <div className="skill-category-header">
            <div className="skill-icon-wrap">
              <Terminal size={22} aria-hidden="true" />
            </div>
            <div>
              <h3 className="skill-category-title">Core & Practiced</h3>
              <span className="skill-category-desc">Active foundations & languages</span>
            </div>
          </div>
          <div className="skill-tags">
            {['C / C++', 'Data Structures & Algorithms', 'HTML5', 'CSS3 / Modern CSS', 'JavaScript (ES6+)'].map((skill) => (
              <span key={skill} className="glass-control skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </GlassPanel>

        {/* Tools & Environment */}
        <GlassPanel variant="panel" className="skill-category-card">
          <div className="skill-category-header">
            <div className="skill-icon-wrap">
              <Cpu size={22} aria-hidden="true" />
            </div>
            <div>
              <h3 className="skill-category-title">Tools & Environment</h3>
              <span className="skill-category-desc">Workflow & system tools</span>
            </div>
          </div>
          <div className="skill-tags">
            {['Git', 'GitHub', 'Linux / Bash', 'VS Code', 'Responsive Design'].map((skill) => (
              <span key={skill} className="glass-control skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </GlassPanel>

        {/* Currently Learning & Exploring */}
        <GlassPanel variant="panel" className="skill-category-card">
          <div className="skill-category-header">
            <div className="skill-icon-wrap">
              <Globe size={22} aria-hidden="true" />
            </div>
            <div>
              <h3 className="skill-category-title">Currently Learning</h3>
              <span className="skill-category-desc">Expanding software capabilities</span>
            </div>
          </div>
          <div className="skill-tags">
            {['Python', 'React.js', 'Node.js', 'TypeScript', 'System Fundamentals'].map((skill) => (
              <span key={skill} className="glass-control skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
