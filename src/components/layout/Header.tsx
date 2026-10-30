import React, { useState } from 'react';
import { NavItem, Theme } from '../../types/portfolio';
import { Nav } from '../navigation/Nav';
import { MobileNav } from '../navigation/MobileNav';
import { ThemeToggle } from '../navigation/ThemeToggle';
import { Container } from './Container';

interface HeaderProps {
  navItems: NavItem[];
  theme: Theme;
  onToggleTheme: () => void;
  activeId?: string;
  onItemClick?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  navItems,
  theme,
  onToggleTheme,
  activeId,
  onItemClick,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="site-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-header)',
        width: '100%',
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--glass-fill)',
        borderBottom: '1px solid var(--glass-border)',
        backdropFilter: 'blur(16px) saturate(160%)',
        WebkitBackdropFilter: 'blur(16px) saturate(160%)',
        transition: 'var(--transition-theme)',
      }}
    >
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Logo / Brand Mark */}
        <a
          href="#"
          className="brand-logo"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            textDecoration: 'none',
            color: 'var(--text)',
            fontWeight: 700,
            fontSize: 'var(--text-lg)',
            fontFamily: 'var(--font-display)',
          }}
          aria-label="Pratik Bisen Home"
        >
          <span
            className="brand-monogram"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent-gradient)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: 'var(--text-sm)',
              letterSpacing: '-0.02em',
              boxShadow: '0 4px 12px -2px var(--accent-glow)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            PB
          </span>
          <span className="brand-name">Pratik Bisen</span>
        </a>

        {/* Desktop Navigation */}
        <div className="header-desktop-actions">
          <Nav items={navItems} activeId={activeId} onItemClick={onItemClick} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile Navigation Controls */}
        <div className="header-mobile-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <MobileNav
            items={navItems}
            isOpen={mobileOpen}
            onToggle={() => setMobileOpen(!mobileOpen)}
            onClose={() => setMobileOpen(false)}
            activeId={activeId}
            onItemClick={onItemClick}
          />
        </div>
      </Container>
    </header>
  );
};
