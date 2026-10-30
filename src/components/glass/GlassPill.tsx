import React, { ElementType, forwardRef } from 'react';

export interface GlassPillProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: 'neutral' | 'accent' | 'frosted';
  interactive?: boolean;
  dot?: boolean;
  dotColor?: string;
  className?: string;
  children: React.ReactNode;
}

export const GlassPill = forwardRef<HTMLElement, GlassPillProps>(
  (
    {
      as: Component = 'span',
      variant = 'neutral',
      interactive = false,
      dot = false,
      dotColor = '#10B981',
      className = '',
      children,
      style,
      ...rest
    },
    ref
  ) => {
    let variantStyle: React.CSSProperties = {};
    if (variant === 'accent') {
      variantStyle = {
        backgroundColor: 'var(--accent-surface)',
        borderColor: 'var(--accent-surface-border)',
        color: 'var(--accent)',
      };
    }

    const interactiveClass = interactive ? 'glass-3d-pill-interactive' : '';
    const combinedClasses = ['glass-3d-pill', interactiveClass, className].filter(Boolean).join(' ');

    return (
      <Component
        ref={ref}
        className={combinedClasses}
        style={{ ...variantStyle, ...style }}
        {...rest}
      >
        {dot && (
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: dotColor,
              boxShadow: `0 0 8px ${dotColor}`,
              flexShrink: 0,
            }}
          />
        )}
        <span>{children}</span>
      </Component>
    );
  }
);

GlassPill.displayName = 'GlassPill';
