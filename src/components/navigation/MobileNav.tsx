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

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
        toggleBtnRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (id: string) => {
    onItemClick?.(id);
    onClose();
  };

  return (
    <div className="mobile-nav-container">
      <button
        ref={toggleBtnRef}
        type="button"
        className="glass-control mobile-toggle-btn"
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
            backgroundColor: 'rgba(0, 3, 10, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
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
            top: 'calc(var(--header-height) + 12px)',
            left: 'var(--gutter)',
            right: 'var(--gutter)',
            zIndex: 'var(--z-modal)',
          }}
        >
          <GlassPanel
            variant="floating"
            style={{
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--glass-shadow-floating)',
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
                        style={{
                          display: 'block',
                          padding: '0.875rem 1.25rem',
                          borderRadius: 'var(--radius-md)',
                          fontSize: 'var(--text-base)',
                          fontWeight: 600,
                          color: isActive ? 'var(--accent)' : 'var(--text)',
                          backgroundColor: isActive ? 'var(--accent-surface)' : 'transparent',
                          border: isActive ? '1px solid var(--accent-surface-border)' : '1px solid transparent',
                          transition: 'all var(--duration-fast) var(--ease-out)',
                        }}
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
