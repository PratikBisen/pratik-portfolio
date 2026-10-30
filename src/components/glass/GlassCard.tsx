import React, { ElementType, forwardRef } from 'react';

export interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: 'card' | 'thick-3d' | 'frosted' | 'surface';
  interactive?: boolean;
  perspectiveTilt?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const GlassCard = forwardRef<HTMLElement, GlassCardProps>(
  (
    {
      as: Component = 'div',
      variant = 'card',
      interactive = true,
      perspectiveTilt = false,
      className = '',
      children,
      style,
      ...rest
    },
    ref
  ) => {
    let baseClass = 'glass-3d-card';
    if (variant === 'thick-3d') {
      baseClass = 'glass-3d-card material-sample-thick-3d';
    } else if (variant === 'frosted') {
      baseClass = 'glass-3d-card material-sample-frosted';
    }

    const interactiveClass = interactive ? 'glass-3d-card-interactive' : '';
    const tiltStyle: React.CSSProperties = perspectiveTilt
      ? { transform: 'perspective(1000px) rotateX(4deg) rotateY(-4deg)' }
      : {};

    const combinedClasses = [baseClass, interactiveClass, className].filter(Boolean).join(' ');

    return (
      <Component
        ref={ref}
        className={combinedClasses}
        style={{ ...tiltStyle, ...style }}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

GlassCard.displayName = 'GlassCard';
