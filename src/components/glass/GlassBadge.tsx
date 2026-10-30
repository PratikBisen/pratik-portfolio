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
    padding: '0.42rem 1rem',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--text-xs)',
    fontWeight: 600,
    letterSpacing: '0.03em',
    lineHeight: 1.35,
    textAlign: 'center',
    maxWidth: '100%',
    ...style,
  };

  let colorClass = 'liquid-glass-droplet';
  if (variant === 'accent') {
    badgeStyle = {
      ...badgeStyle,
      backgroundColor: 'var(--accent-surface)',
      border: '1px solid var(--accent-surface-border)',
      color: 'var(--accent)',
      boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.45), 0 4px 14px -2px var(--accent-glow)',
    };
    colorClass = '';
  }

  const classes = ['liquid-badge', colorClass, className].filter(Boolean).join(' ');

  return (
    <span className={classes} style={badgeStyle} {...rest}>
      {pulse && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: variant === 'accent' ? 'var(--accent)' : '#10B981',
            boxShadow: variant === 'accent' ? '0 0 10px var(--accent)' : '0 0 10px #10B981',
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
