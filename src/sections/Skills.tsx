import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { Terminal, Cpu, Globe } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      tag="Competencies & Tools"
      title="Technical Areas & Tools"
      subtitle="Honest proficiency groupings based on active coursework, projects, and learning goals—without misleading percentage meters."
    >
      <div className="skills-liquid-grid">
        {/* Tray 1: Practiced Foundations */}
        <GlassPanel variant="surface" className="skill-liquid-tray">
          <div className="tray-lens-header">
            <div className="tray-icon-bubble">
              <Terminal size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="tray-title">Practiced Foundations</h3>
              <span className="tray-subtitle">Languages & Core CS Concepts</span>
            </div>
          </div>
          <div className="skill-pebbles-cluster">
            {[
              'C / C++',
              'Data Structures & Algorithms',
              'HTML5 / Semantic Web',
              'CSS3 / Liquid Layouts',
              'JavaScript (ES6+)',
            ].map((skill) => (
              <span key={skill} className="liquid-glass-droplet skill-pebble">
                {skill}
              </span>
            ))}
          </div>
        </GlassPanel>

        {/* Tray 2: Platforms & Toolchain */}
        <GlassPanel variant="surface" className="skill-liquid-tray">
          <div className="tray-lens-header">
            <div className="tray-icon-bubble">
              <Cpu size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="tray-title">Platforms & Toolchain</h3>
              <span className="tray-subtitle">Operating Systems & Dev Tools</span>
            </div>
          </div>
          <div className="skill-pebbles-cluster">
            {[
              'Git',
              'GitHub',
              'Linux / Bash CLI',
              'VS Code',
              'Responsive Design Architecture',
            ].map((skill) => (
              <span key={skill} className="liquid-glass-droplet skill-pebble">
                {skill}
              </span>
            ))}
          </div>
        </GlassPanel>

        {/* Tray 3: Currently Exploring */}
        <GlassPanel variant="surface" className="skill-liquid-tray">
          <div className="tray-lens-header">
            <div className="tray-icon-bubble">
              <Globe size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="tray-title">Currently Exploring</h3>
              <span className="tray-subtitle">Active Learning Pathways</span>
            </div>
          </div>
          <div className="skill-pebbles-cluster">
            {[
              'Python',
              'React.js',
              'Node.js',
              'TypeScript',
              'Modern System Foundations',
            ].map((skill) => (
              <span key={skill} className="liquid-glass-droplet skill-pebble">
                {skill}
              </span>
            ))}
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
