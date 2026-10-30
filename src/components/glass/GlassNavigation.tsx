import React, { ElementType, forwardRef } from 'react';

export interface GlassNavigationProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}

export const GlassNavigation = forwardRef<HTMLElement, GlassNavigationProps>(
  (
    {
      as: Component = 'nav',
      ariaLabel = 'Main Navigation',
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const combinedClasses = ['glass-3d-nav', className].filter(Boolean).join(' ');

    return (
      <Component
        ref={ref}
        aria-label={ariaLabel}
        className={combinedClasses}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

GlassNavigation.displayName = 'GlassNavigation';
