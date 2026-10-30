import React from 'react';
import { ArrowRight, Mail, Sparkles, Terminal, Laptop } from 'lucide-react';
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
                <span>IT Engineering • SGGSIE&T Nanded</span>
              </GlassBadge>
            </div>

            <h1 className="hero-title">
              Hi, I’m <span className="hero-name-liquid">{PROFILE.name}</span>
            </h1>

            <p className="hero-headline">
              {PROFILE.headline}
            </p>

            <p className="hero-description">
              Building software engineering foundations through data structures and algorithms,
              web development, Linux, and hands-on projects. Focused on creating clean, practical software
              and contributing to technical communities.
            </p>

            {/* Liquid Glass Action Buttons */}
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

            {/* Optical Profile Links */}
            <div className="hero-socials">
              <span className="hero-socials-label">Profiles:</span>
              <div className="hero-socials-group">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass-control hero-social-link"
                  aria-label="Visit Pratik Bisen's GitHub profile"
                  title="GitHub"
                >
                  <GitHubIcon size={17} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass-control hero-social-link"
                  aria-label="Connect with Pratik Bisen on LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInIcon size={17} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: iOS 26 Liquid Glass Portrait Enclosure */}
          <div className="hero-visual">
            <div className="liquid-portrait-stage">
              {/* Environmental Caustic Light Glow */}
              <div className="portrait-caustic-aura" aria-hidden="true" />

              {/* Sculpted Liquid Glass Lens Pod */}
              <GlassPanel variant="lens" className="liquid-portrait-pod">
                {/* Convex specular light crescent */}
                <div className="lens-specular-sheen" aria-hidden="true" />

                {/* Internal Refractive Chamber */}
                <div className="portrait-refraction-chamber">
                  {/* Concentric Optical Lens Ripples */}
                  <div className="optical-lens-rings" aria-hidden="true">
                    <div className="lens-ring lens-ring-outer" />
                    <div className="lens-ring lens-ring-mid" />
                  </div>

                  {/* Crystalline Core Identity Gem */}
                  <div className="portrait-crystal-core">
                    <span className="crystal-initials">PB</span>
                  </div>

                  {/* Refined Suspended Glass Badge */}
                  <div className="portrait-status-capsule liquid-glass-droplet">
                    <span className="status-bead" aria-hidden="true" />
                    <span>Portrait • Photo Pending</span>
                  </div>
                </div>

                {/* Sub-lens Reflection Gradient */}
                <div className="lens-bottom-bevel" aria-hidden="true" />
              </GlassPanel>

              {/* Floating Optical Glass Satellite Chips */}
              <GlassPanel variant="droplet" className="floating-satellite satellite-left">
                <span className="satellite-icon-wrap">
                  <Terminal size={15} aria-hidden="true" />
                </span>
                <div>
                  <div className="satellite-title">Core Focus</div>
                  <div className="satellite-desc">DSA & Web Systems</div>
                </div>
              </GlassPanel>

              <GlassPanel variant="droplet" className="floating-satellite satellite-right">
                <span className="satellite-icon-wrap">
                  <Laptop size={15} aria-hidden="true" />
                </span>
                <div>
                  <div className="satellite-title">Environment</div>
                  <div className="satellite-desc">Linux & Git Workflows</div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
