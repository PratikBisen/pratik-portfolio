import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { Code2, Compass, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      tag="Identity & Direction"
      title="About Pratik"
      subtitle="Information Technology engineering student building strong foundations in software systems, algorithms, and practical web development."
    >
      <div className="about-liquid-layout">
        {/* Main Fluid Narrative Canvas */}
        <GlassPanel variant="surface" className="about-narrative-canvas">
          <p className="narrative-lead">
            I am an Information Technology student at Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T), Nanded.
          </p>
          <p className="narrative-body">
            My development journey is focused on engineering fundamentals—understanding how software behaves from low-level data structures and algorithmic complexity in C/C++ to building accessible, responsive interfaces on the web and navigating Linux environments.
          </p>
          <p className="narrative-body">
            I value engineering discipline, clean code conventions, and practical problem-solving. Beyond coursework, I engage in campus technical clubs and community challenges to refine my collaboration and development workflow.
          </p>
        </GlassPanel>

        {/* Floating Optical Insight Lozenges */}
        <div className="about-optical-lozenges">
          <div className="liquid-lozenge liquid-glass-base">
            <div className="lozenge-glass-icon">
              <Code2 size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="lozenge-title">Technical Foundations</h3>
              <p className="lozenge-text">
                Strengthening core problem-solving with data structures, algorithms, and structured software architecture.
              </p>
            </div>
          </div>

          <div className="liquid-lozenge liquid-glass-base">
            <div className="lozenge-glass-icon">
              <Compass size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="lozenge-title">Web & System Engineering</h3>
              <p className="lozenge-text">
                Crafting responsive, high-performance web interfaces while expanding into modern full-stack concepts.
              </p>
            </div>
          </div>

          <div className="liquid-lozenge liquid-glass-base">
            <div className="lozenge-glass-icon">
              <Users size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="lozenge-title">Community & Leadership</h3>
              <p className="lozenge-text">
                Active in university technical organizations and participating in open-source challenges like CommitRush.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
