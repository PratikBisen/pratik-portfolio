import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { NAV_ITEMS } from '../data/profile';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { Education } from '../sections/Education';
import { Contact } from '../sections/Contact';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section on scroll
  useEffect(() => {
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
  }, []);

  return (
    <>
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Atmospheric Luminous Fluid Aura Environment */}
      <div className="ambient-background" aria-hidden="true">
        <div className="aura-field aura-primary" />
        <div className="aura-field aura-secondary" />
        <div className="aura-field aura-tertiary" />
        <div className="aura-field aura-quaternary" />
      </div>

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
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
