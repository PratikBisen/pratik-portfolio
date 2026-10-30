import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../../types/portfolio';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = '',
}) => {
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`liquid-glass-control theme-toggle-btn ${className}`}
      style={{
        width: '42px',
        height: '42px',
        padding: 0,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-full)',
      }}
      aria-label={label}
      title={label}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 400ms var(--ease-spring), color 300ms ease',
          transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(1)',
          color: isDark ? '#5EA2FF' : '#1D4ED8',
        }}
      >
        {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
};
