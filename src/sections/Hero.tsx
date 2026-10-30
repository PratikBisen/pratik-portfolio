import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/ui/Icons';
import { PROFILE } from '../data/profile';
import { GlassButton } from '../components/glass/GlassButton';
import { GlassBadge } from '../components/glass/GlassBadge';
import { Container } from '../components/layout/Container';
import { HeroVisual } from '../components/hero/HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction and Overview">
      <Container>
        <div className="hero-grid">
          {/* Left Column: Personal Identity & Engineering Focus */}
          <div className="hero-content">
            {/* Academic Identity Pill */}
            <div className="hero-status-pill">
              <GlassBadge variant="accent" pulse>
                <Sparkles size={13} aria-hidden="true" />
                <span>IT Engineering Student • SGGSIE&T, Nanded</span>
              </GlassBadge>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Hi, I’m <span className="hero-name-gradient">Pratik Bisen.</span>
            </h1>

            {/* Supporting Headline */}
            <p className="hero-headline">
              IT engineering student building thoughtful software and practical web projects.
            </p>

            {/* Description */}
            <p className="hero-description">
              Building software engineering foundations through data structures and algorithms,
              web development, Linux, and hands-on projects. Focused on creating clean, practical software
              and contributing to technical communities.
            </p>

            {/* Tactile 3D Glass Action Controls */}
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
                aria-label="Get in touch with Pratik Bisen"
              >
                Get in Touch
              </GlassButton>
            </div>

            {/* Social Connection Links */}
            <div className="hero-socials">
              <span className="hero-socials-label">Profiles:</span>
              <div className="hero-socials-group">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-3d-button hero-social-pill"
                  aria-label="Visit Pratik Bisen's GitHub profile"
                  title="GitHub Profile"
                >
                  <GitHubIcon size={16} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-3d-button hero-social-pill"
                  aria-label="Connect with Pratik Bisen on LinkedIn"
                  title="LinkedIn Profile"
                >
                  <LinkedInIcon size={16} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Frosted Glass Identity Enclosure */}
          <div className="hero-visual">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};
