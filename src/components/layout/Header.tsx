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
    <header className="site-dock-wrapper" role="banner">
      <Container>
        <div className="site-liquid-dock liquid-glass-pill">
          {/* Logo / Brand Mark */}
          <a
            href="#hero"
            className="brand-logo"
            aria-label="Pratik Bisen Home"
          >
            <span className="brand-monogram">
              PB
            </span>
            <span className="brand-name">Pratik Bisen</span>
          </a>

          {/* Desktop Navigation */}
          <div className="dock-desktop-nav">
            <Nav items={navItems} activeId={activeId} onItemClick={onItemClick} />
          </div>

          {/* Actions: Theme Toggle & Mobile Menu */}
          <div className="dock-actions">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <div className="dock-mobile-trigger">
              <MobileNav
                items={navItems}
                isOpen={mobileOpen}
                onToggle={() => setMobileOpen(!mobileOpen)}
                onClose={() => setMobileOpen(false)}
                activeId={activeId}
                onItemClick={onItemClick}
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
