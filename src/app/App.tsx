import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useEnvironment } from '../hooks/useEnvironment';
import { AtmosphericEnvironment, EnvironmentControls } from '../components/environment';
import { NAV_ITEMS } from '../data/profile';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { OpenSource } from '../sections/OpenSource';
import { Education } from '../sections/Education';
import { Contact } from '../sections/Contact';
import { GlassLab } from '../pages/GlassLab';
import { FlaskConical } from 'lucide-react';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Simple client-side routing for /glass-lab
  const checkIsLab = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname;
    const hash = window.location.hash;
    const search = new URLSearchParams(window.location.search);
    return (
      path === '/glass-lab' ||
      path.endsWith('/glass-lab') ||
      hash === '#/glass-lab' ||
      hash === '#glass-lab' ||
      search.get('view') === 'glass-lab'
    );
  };

  const [isLab, setIsLab] = useState<boolean>(checkIsLab);
  const { environment, setEnvironment } = useEnvironment();

  useEffect(() => {
    const handleLocationChange = () => {
      setIsLab(checkIsLab());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToLab = () => {
    window.history.pushState({}, '', '/glass-lab');
    setIsLab(true);
    window.scrollTo(0, 0);
  };

  const navigateToPortfolio = () => {
    window.history.pushState({}, '', '/');
    setIsLab(false);
    window.scrollTo(0, 0);
  };

  // Track active section on scroll for main portfolio
  useEffect(() => {
    if (isLab) return;

    const sectionIds = ['hero', ...NAV_ITEMS.map((item) => item.id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isLab]);

  if (isLab) {
    return (
      <GlassLab
        theme={theme}
        onToggleTheme={toggleTheme}
        onBackToPortfolio={navigateToPortfolio}
      />
    );
  }

  return (
    <>
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Phase 3: Dedicated 5-Layer Atmospheric Environment Architecture */}
      <AtmosphericEnvironment preset={environment} theme={theme} />

      {/* App Shell */}
      <div className="app-shell">
        <Header
          navItems={NAV_ITEMS}
          theme={theme}
          onToggleTheme={toggleTheme}
          activeId={activeSection}
          onItemClick={(id) => setActiveSection(id)}
        />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <OpenSource />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Floating Environment Selector Dock */}
      <div className="env-floating-dock" aria-label="Environment Preset Switcher">
        <EnvironmentControls
          activePreset={environment}
          onSelectPreset={setEnvironment}
        />
      </div>

      {/* Floating launcher to Material Test Lab */}
      <button
        onClick={navigateToLab}
        className="glass-3d-button lab-floating-launcher"
        aria-label="Open 3D Frosted Glass Laboratory"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          padding: '0.65rem 1.25rem',
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(20, 26, 44, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(255, 255, 255, 0.4)',
          borderTop: '2px solid #FFFFFF',
          borderRadius: '9999px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
          cursor: 'pointer',
        }}
      >
        <FlaskConical size={16} color="var(--accent)" />
        <span style={{ fontWeight: 700 }}>Material Lab</span>
      </button>
    </>
  );
};

export default App;
