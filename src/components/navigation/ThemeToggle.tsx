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
      className={`glass-control ${className}`}
      style={{
        width: '42px',
        height: '42px',
        padding: 0,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label={label}
      title={label}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 300ms var(--ease-bounce), opacity 200ms ease',
          transform: isDark ? 'rotate(0deg)' : 'rotate(90deg)',
          color: isDark ? '#7AA8FF' : '#2563EB',
        }}
      >
        {isDark ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
};
