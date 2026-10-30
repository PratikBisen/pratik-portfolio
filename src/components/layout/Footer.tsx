import React from 'react';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';
import { Container } from './Container';
import { SOCIAL_LINKS } from '../../data/profile';

export const Footer: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'github':
        return <GitHubIcon size={18} aria-hidden="true" />;
      case 'linkedin':
        return <LinkedInIcon size={18} aria-hidden="true" />;
      case 'email':
        return <Mail size={18} aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <footer
      className="site-footer"
      style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--glass-border)',
        backgroundColor: 'var(--glass-fill-subtle)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: 'var(--space-10) 0',
        transition: 'var(--transition-theme)',
      }}
    >
      <Container
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'var(--space-6)',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-lg)',
              color: 'var(--text)',
              marginBottom: 'var(--space-1)',
            }}
          >
            Pratik Bisen
          </div>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
              margin: 0,
            }}
          >
            IT Engineering Student • SGGSIE&T, Nanded
          </p>
        </div>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.id === 'email' ? undefined : '_blank'}
              rel={link.id === 'email' ? undefined : 'noopener noreferrer'}
              className="glass-control"
              style={{
                width: '40px',
                height: '40px',
                padding: 0,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
              }}
              aria-label={link.ariaLabel}
              title={link.name}
            >
              {getIcon(link.id)}
            </a>
          ))}
        </div>

        <div
          style={{
            width: '100%',
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid var(--divider)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-subtle)',
          }}
        >
          <span>© {new Date().getFullYear()} Pratik Bisen. All rights reserved.</span>
          <span>Crafted with authentic 3D glassmorphism.</span>
        </div>
      </Container>
    </footer>
  );
};
