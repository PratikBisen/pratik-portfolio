import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { Award, Shield, Terminal, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      tag="Leadership & Community"
      title="Community & Open Source"
      subtitle="Selected student leadership, technical coordination, and open-source contribution initiatives."
    >
      <div className="experience-liquid-grid">
        {/* Item 1: CommitRush Open Source Challenge */}
        <GlassPanel variant="surface" className="experience-liquid-card">
          <div className="experience-card-header">
            <div className="exp-icon-bubble">
              <Terminal size={22} aria-hidden="true" />
            </div>
            <div className="exp-header-info">
              <div className="exp-role-badge liquid-glass-droplet">Open-Source Challenge</div>
              <h3 className="exp-title">COMMITRUSH 2026</h3>
              <p className="exp-org">21-Day Open-Source Contribution Challenge</p>
            </div>
          </div>
          <p className="exp-desc">
            Organized community initiative fostering consistent version control habits, Git collaboration, and meaningful open-source contributions among engineering peers.
          </p>
          <div className="exp-date-tag">
            <Calendar size={13} aria-hidden="true" />
            <span>22 Sep – 12 Oct 2026</span>
          </div>
        </GlassPanel>

        {/* Item 2: HackIT Club */}
        <GlassPanel variant="surface" className="experience-liquid-card">
          <div className="experience-card-header">
            <div className="exp-icon-bubble">
              <Shield size={22} aria-hidden="true" />
            </div>
            <div className="exp-header-info">
              <div className="exp-role-badge liquid-glass-droplet">Campus Technical Club</div>
              <h3 className="exp-title">HackIT Club</h3>
              <p className="exp-org">Ethical Hacking & Cyber Security Club • SGGSIE&T</p>
            </div>
          </div>
          <p className="exp-desc">
            Community co-leadership involvement organizing technical discussions, security awareness workshops, and collaborative coding sessions.
          </p>
          <div className="exp-date-tag">
            <Award size={13} aria-hidden="true" />
            <span>Community Co-Lead</span>
          </div>
        </GlassPanel>

        {/* Item 3: ITSA Departmental Club */}
        <GlassPanel variant="surface" className="experience-liquid-card">
          <div className="experience-card-header">
            <div className="exp-icon-bubble">
              <Award size={22} aria-hidden="true" />
            </div>
            <div className="exp-header-info">
              <div className="exp-role-badge liquid-glass-droplet">Departmental Organization</div>
              <h3 className="exp-title">ITSA</h3>
              <p className="exp-org">Information Technology Student Association • SGGSIE&T</p>
            </div>
          </div>
          <p className="exp-desc">
            Technical coordination of departmental academic and extracurricular workshops, hackathons, and technical orientation for incoming students.
          </p>
          <div className="exp-date-tag">
            <Award size={13} aria-hidden="true" />
            <span>Technical Coordinator</span>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
