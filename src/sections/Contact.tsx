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
      tag="Direct Communication"
      title="Let’s Connect"
      subtitle="Have an opportunity, internship inquiry, or software project to discuss? Reach out directly."
    >
      <div className="contact-liquid-sanctuary">
        <GlassPanel variant="surface" className="contact-sculpted-pod">
          <div className="contact-lens-icon">
            <Mail size={32} aria-hidden="true" />
          </div>

          <h3 className="contact-pod-heading">Start a Conversation</h3>
          <p className="contact-pod-description">
            Whether you are discussing developer internships, collaborating on open-source initiatives, or exploring software concepts, feel free to reach out directly via email or connect through my verified profiles.
          </p>

          <div className="contact-primary-action">
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

          <div className="contact-liquid-profiles">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-control contact-profile-button"
            >
              <GitHubIcon size={18} aria-hidden="true" />
              <span>GitHub Profile</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-control contact-profile-button"
            >
              <LinkedInIcon size={18} aria-hidden="true" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
