import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { User, Code2, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      tag="Background & Focus"
      title="About Pratik"
      subtitle="Engineering student building strong fundamentals in software engineering, algorithms, and practical web systems."
    >
      <div className="about-grid">
        <GlassPanel variant="panel" className="about-main-card">
          <p className="about-lead">
            I am an Information Technology engineering student at Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T), Nanded.
          </p>
          <p className="about-body">
            My journey in technology centers on understanding how systems operate from the ground up—from foundational data structures and algorithm analysis in C/C++ to building accessible, responsive interfaces on the web and exploring Linux environments.
          </p>
          <p className="about-body">
            I value engineering discipline, clean code conventions, and practical problem-solving. Beyond individual coursework, I participate in technical clubs and community challenges to sharpen my development workflow.
          </p>
        </GlassPanel>

        <div className="about-pillars">
          <GlassPanel variant="subtle" className="pillar-card">
            <div className="pillar-icon">
              <Code2 size={22} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">Technical Foundations</h3>
            <p className="pillar-text">
              Strengthening problem-solving skills with data structures, algorithms, and modular software design.
            </p>
          </GlassPanel>

          <GlassPanel variant="subtle" className="pillar-card">
            <div className="pillar-icon">
              <Compass size={22} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">Web & Practical Engineering</h3>
            <p className="pillar-text">
              Building responsive, semantic interfaces and learning modern full-stack concepts hands-on.
            </p>
          </GlassPanel>

          <GlassPanel variant="subtle" className="pillar-card">
            <div className="pillar-icon">
              <User size={22} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">Community & Growth</h3>
            <p className="pillar-text">
              Engaging in campus tech clubs and open-source contribution challenges like CommitRush.
            </p>
          </GlassPanel>
        </div>
      </div>
    </Section>
  );
};
