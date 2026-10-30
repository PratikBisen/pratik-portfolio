import React, { forwardRef } from 'react';

export interface GlassFloatingElementProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label?: string;
  sublabel?: string;
  className?: string;
  children?: React.ReactNode;
}

export const GlassFloatingElement = forwardRef<HTMLDivElement, GlassFloatingElementProps>(
  (
    {
      icon,
      label,
      sublabel,
      className = '',
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const combinedClasses = ['glass-3d-floating', className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={combinedClasses} style={style} {...rest}>
        {icon && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-surface)',
              border: '1px solid var(--accent-surface-border)',
              color: 'var(--accent)',
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
        )}

        {(label || sublabel) ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {label && (
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>
                {label}
              </span>
            )}
            {sublabel && (
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>
                {sublabel}
              </span>
            )}
          </div>
        ) : (
          children
        )}
      </div>
    );
  }
);

GlassFloatingElement.displayName = 'GlassFloatingElement';
