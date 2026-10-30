import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { SKILL_CATEGORIES } from '../data/profile';
import { SkillProficiency } from '../types/portfolio';
import {
  Code2,
  Globe,
  Cpu,
  Terminal,
  Sparkles,
  CheckCircle2,
  BookOpenCheck,
  Compass,
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} aria-hidden="true" />,
  Globe: <Globe size={20} aria-hidden="true" />,
  Cpu: <Cpu size={20} aria-hidden="true" />,
  Terminal: <Terminal size={20} aria-hidden="true" />,
  Sparkles: <Sparkles size={20} aria-hidden="true" />,
};

const PROFICIENCY_CONFIG: Record<
  SkillProficiency,
  { label: string; icon: React.ReactNode; className: string }
> = {
  comfortable: {
    label: 'Comfortable',
    icon: <CheckCircle2 size={12} aria-hidden="true" />,
    className: 'proficiency-comfortable',
  },
  learning: {
    label: 'Learning',
    icon: <BookOpenCheck size={12} aria-hidden="true" />,
    className: 'proficiency-learning',
  },
  exploring: {
    label: 'Exploring',
    icon: <Compass size={12} aria-hidden="true" />,
    className: 'proficiency-exploring',
  },
};

export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      tag="Competencies & Proficiencies"
      title="Technical Constellation"
      subtitle="Honest proficiency groupings reflecting active coursework, practical projects, and ongoing engineering studies—without fabricated percentage meters."
    >
      {/* Proficiency Legend Bar */}
      <div className="skills-legend-bar">
        <span className="legend-title">Proficiency Status:</span>
        <div className="legend-items">
          <span className="legend-pill proficiency-comfortable">
            <CheckCircle2 size={13} aria-hidden="true" />
            <span>Comfortable With</span>
          </span>
          <span className="legend-pill proficiency-learning">
            <BookOpenCheck size={13} aria-hidden="true" />
            <span>Currently Learning</span>
          </span>
          <span className="legend-pill proficiency-exploring">
            <Compass size={13} aria-hidden="true" />
            <span>Actively Exploring</span>
          </span>
        </div>
      </div>

      {/* Differentiated Skills Composition */}
      <div className="skills-differentiated-grid">
        {SKILL_CATEGORIES.map((category) => {
          return (
            <GlassPanel
              key={category.id}
              variant="surface"
              className={`skill-category-enclosure skill-tray-${category.id}`}
            >
              <div className="category-header-strip">
                <div className="category-icon-orb">
                  {CATEGORY_ICONS[category.iconName] || <Code2 size={20} />}
                </div>
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-subtitle">{category.subtitle}</p>
                </div>
              </div>

              <div className="category-skills-matrix">
                {category.skills.map((skill) => {
                  const prof = PROFICIENCY_CONFIG[skill.proficiency];
                  return (
                    <div
                      key={skill.name}
                      className={`skill-matrix-item ${prof.className}`}
                    >
                      <div className="skill-name-row">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-status-tag ${prof.className}`}>
                          {prof.icon}
                          <span>{prof.label}</span>
                        </span>
                      </div>
                      {skill.note && (
                        <span className="skill-context-note">{skill.note}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </GlassPanel>
          );
        })}
      </div>
    </Section>
  );
};
