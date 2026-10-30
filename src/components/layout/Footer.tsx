import React from 'react';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';
import { Container } from './Container';
import { SOCIAL_LINKS } from '../../data/profile';

export const Footer: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'github':
        return <GitHubIcon size={17} aria-hidden="true" />;
      case 'linkedin':
        return <LinkedInIcon size={17} aria-hidden="true" />;
      case 'email':
        return <Mail size={17} aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <footer className="site-liquid-footer" role="contentinfo">
      <Container>
        <div className="footer-liquid-shelf liquid-glass-surface">
          <div className="footer-top-row">
            <div>
              <div className="footer-brand-title">
                Pratik Bisen
              </div>
              <p className="footer-brand-sub">
                Information Technology Student • SGGSIE&T, Nanded
              </p>
            </div>

            {/* Social Controls */}
            <div className="footer-social-row">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.id === 'email' ? undefined : '_blank'}
                  rel={link.id === 'email' ? undefined : 'noopener noreferrer'}
                  className="liquid-glass-control footer-icon-control"
                  aria-label={link.ariaLabel}
                  title={link.name}
                >
                  {getIcon(link.id)}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-divider-line" />

          <div className="footer-bottom-row">
            <span>© {new Date().getFullYear()} Pratik Bisen. All rights reserved.</span>
            <span>Crafted with Apple iOS 26 Liquid Glass optical design language.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
