import React from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { GlassButton } from '../components/glass/GlassButton';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/ui/Icons';
import { PROFILE } from '../data/profile';

export const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      tag="Get in Touch"
      title="Let’s Connect"
      subtitle="Have a project, opportunity, or idea to discuss? Reach out via email or connect across my public profiles."
    >
      <div className="contact-wrapper">
        <GlassPanel variant="floating" className="contact-main-card">
          <div className="contact-card-content">
            <div className="contact-icon-bubble">
              <Mail size={32} aria-hidden="true" />
            </div>

            <h3 className="contact-card-title">Start a Conversation</h3>
            <p className="contact-card-text">
              Whether you are looking for an intern, collaborating on open-source projects, or discussing software development, feel free to reach out directly.
            </p>

            <div className="contact-action-group">
              <GlassButton
                as="a"
                href={`mailto:${PROFILE.email}`}
                variant="primary"
                icon={<Mail size={18} />}
                iconPosition="left"
              >
                Send Email ({PROFILE.email})
              </GlassButton>
            </div>

            <div className="contact-profiles-row">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-control contact-profile-pill"
              >
                <GitHubIcon size={18} aria-hidden="true" />
                <span>GitHub Profile</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-control contact-profile-pill"
              >
                <LinkedInIcon size={18} aria-hidden="true" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
