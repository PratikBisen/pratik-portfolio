import React from 'react';
import { ArrowRight, Mail, Sparkles, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/ui/Icons';
import { PROFILE } from '../data/profile';
import { GlassButton } from '../components/glass/GlassButton';
import { GlassPanel } from '../components/glass/GlassPanel';
import { GlassBadge } from '../components/glass/GlassBadge';
import { Container } from '../components/layout/Container';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction and Overview">
      <Container>
        <div className="hero-grid">
          {/* Left Column: Identity & Positioning */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <GlassBadge variant="accent" pulse>
                <Sparkles size={13} aria-hidden="true" />
                <span>IT Engineering Student • SGGSIE&T Nanded</span>
              </GlassBadge>
            </div>

            <h1 className="hero-title">
              Hi, I’m <span className="hero-name-gradient">{PROFILE.name}</span>
            </h1>

            <p className="hero-headline">
              {PROFILE.headline}
            </p>

            <p className="hero-description">
              Building software engineering foundations through data structures and algorithms,
              web development, Linux, and hands-on projects. Focused on creating clean, practical software
              and contributing to technical communities.
            </p>

            {/* Call to Actions */}
            <div className="hero-actions">
              <GlassButton
                as="a"
                href="#projects"
                variant="primary"
                icon={<ArrowRight size={17} />}
                iconPosition="right"
              >
                Explore Projects
              </GlassButton>

              <GlassButton
                as="a"
                href="#contact"
                variant="secondary"
                icon={<Mail size={17} />}
                iconPosition="left"
              >
                Get in Touch
              </GlassButton>
            </div>

            {/* Social Profile Links */}
            <div className="hero-socials">
              <span className="hero-socials-label">Connect:</span>
              <div className="hero-socials-group">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-control hero-social-link"
                  aria-label="Visit Pratik Bisen's GitHub profile"
                  title="GitHub"
                >
                  <GitHubIcon size={18} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-control hero-social-link"
                  aria-label="Connect with Pratik Bisen on LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInIcon size={18} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Glass Portrait Showcase (Designed Abstract Placeholder) */}
          <div className="hero-visual">
            <div className="portrait-glass-stage">
              {/* Backing glow */}
              <div className="portrait-glow-halo" aria-hidden="true" />

              {/* Primary 3D Glass Showcase Card */}
              <GlassPanel variant="floating" className="portrait-glass-card">
                {/* Visual Glass Header with window controls */}
                <div className="portrait-card-bar">
                  <span className="card-dot" />
                  <span className="card-dot" />
                  <span className="card-dot" />
                  <span className="card-bar-title">identity.matrix</span>
                </div>

                {/* Abstract Refractive Geometric Frame */}
                <div className="portrait-frame">
                  <div className="portrait-geometric-artwork" aria-hidden="true">
                    <div className="artwork-ring artwork-ring-1" />
                    <div className="artwork-ring artwork-ring-2" />
                    <div className="artwork-core">
                      <span className="artwork-initials">PB</span>
                    </div>
                  </div>

                  <div className="portrait-placeholder-label">
                    <span className="status-indicator" />
                    <span>Portrait Pending Supply</span>
                  </div>
                </div>

                {/* Card Sub-info */}
                <div className="portrait-card-footer">
                  <div className="portrait-stat-item">
                    <span className="stat-label">Discipline</span>
                    <span className="stat-value">B.Tech IT</span>
                  </div>
                  <div className="portrait-stat-divider" />
                  <div className="portrait-stat-item">
                    <span className="stat-label">Location</span>
                    <span className="stat-value">
                      <MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} />
                      Nanded, IN
                    </span>
                  </div>
                </div>
              </GlassPanel>

              {/* Floating Ambient Glass Chips to emphasize layered depth */}
              <GlassPanel variant="subtle" className="floating-chip chip-left">
                <span className="chip-icon">⚡</span>
                <div>
                  <div className="chip-heading">Core Focus</div>
                  <div className="chip-detail">DSA & Web Systems</div>
                </div>
              </GlassPanel>

              <GlassPanel variant="subtle" className="floating-chip chip-right">
                <span className="chip-icon">🐧</span>
                <div>
                  <div className="chip-heading">Environment</div>
                  <div className="chip-detail">Linux & Modern Tools</div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
