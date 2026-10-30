import React from 'react';
import { NavItem } from '../../types/portfolio';

interface NavProps {
  items: NavItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  className?: string;
}

export const Nav: React.FC<NavProps> = ({
  items,
  activeId,
  onItemClick,
  className = '',
}) => {
  return (
    <nav className={`desktop-nav ${className}`} aria-label="Main Navigation">
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-1)',
          listStyle: 'none',
          padding: '4px',
          margin: 0,
          backgroundColor: 'var(--glass-fill-subtle)',
          border: '1px solid var(--glass-border-subtle)',
          borderRadius: 'var(--radius-full)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => onItemClick?.(item.id)}
                style={{
                  display: 'inline-block',
                  padding: '0.45rem 1rem',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: isActive ? 'var(--text)' : 'var(--text-muted)',
                  backgroundColor: isActive ? 'var(--glass-fill-hover)' : 'transparent',
                  borderRadius: 'var(--radius-full)',
                  transition: 'all var(--duration-fast) var(--ease-out)',
                  border: isActive ? '1px solid var(--glass-border-highlight)' : '1px solid transparent',
                  boxShadow: isActive ? 'var(--glass-inset-control)' : 'none',
                }}
                className="nav-link-item"
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
