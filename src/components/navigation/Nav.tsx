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
        }}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => onItemClick?.(item.id)}
                className={`liquid-nav-link ${isActive ? 'active' : ''}`}
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
