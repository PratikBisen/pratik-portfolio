import React, { useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types/portfolio';
import { GlassPanel } from '../glass/GlassPanel';

interface MobileNavProps {
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  activeId?: string;
  onItemClick?: (id: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  items,
  isOpen,
  onToggle,
  onClose,
  activeId,
  onItemClick,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press & handle focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
        toggleBtnRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && isOpen && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex="0"]'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement || document.activeElement === toggleBtnRef.current) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            toggleBtnRef.current?.focus();
          } else if (document.activeElement === toggleBtnRef.current) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        const firstLink = menuRef.current?.querySelector<HTMLElement>('a[href]');
        firstLink?.focus();
      }, 50);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  const handleLinkClick = (id: string) => {
    onItemClick?.(id);
    onClose();
  };

  return (
    <div className="mobile-nav-wrapper">
      <button
        ref={toggleBtnRef}
        type="button"
        className="liquid-glass-control mobile-toggle-btn"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        style={{
          width: '42px',
          height: '42px',
          padding: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-full)',
        }}
      >
        {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="mobile-backdrop"
          onClick={onClose}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 7, 12, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 'var(--z-overlay)',
          }}
        />
      )}

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          style={{
            position: 'fixed',
            top: 'calc(var(--header-height) + 1.25rem)',
            left: 'var(--gutter)',
            right: 'var(--gutter)',
            zIndex: 'var(--z-modal)',
          }}
        >
          <GlassPanel
            variant="surface"
            style={{
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-squircle)',
              boxShadow: 'var(--liquid-shadow-floating)',
            }}
          >
            <nav aria-label="Mobile Navigation">
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)',
                  padding: 0,
                  margin: 0,
                }}
              >
                {items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => handleLinkClick(item.id)}
                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </GlassPanel>
        </div>
      )}
    </div>
  );
};
