import React from 'react';

export interface GlassBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'subtle' | 'accent' | 'neutral';
  pulse?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const GlassBadge: React.FC<GlassBadgeProps> = ({
  variant = 'subtle',
  pulse = false,
  className = '',
  children,
  style,
  ...rest
}) => {
  let badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    padding: '0.45rem 1rem',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--text-xs)',
    fontWeight: 600,
    letterSpacing: '0.04em',
    lineHeight: 1.35,
    textAlign: 'center',
    maxWidth: '100%',
    ...style,
  };

  let colorClass = 'glass-subtle';
  if (variant === 'accent') {
    badgeStyle = {
      ...badgeStyle,
      backgroundColor: 'var(--accent-surface)',
      border: '1px solid var(--accent-surface-border)',
      color: 'var(--accent)',
    };
    colorClass = '';
  }

  const classes = ['glass-badge', colorClass, className].filter(Boolean).join(' ');

  return (
    <span className={classes} style={badgeStyle} {...rest}>
      {pulse && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: variant === 'accent' ? 'var(--accent)' : '#10B981',
            boxShadow: variant === 'accent' ? '0 0 8px var(--accent)' : '0 0 8px #10B981',
            display: 'inline-block',
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
      )}
      <span style={{ display: 'inline' }}>{children}</span>
    </span>
  );
};
