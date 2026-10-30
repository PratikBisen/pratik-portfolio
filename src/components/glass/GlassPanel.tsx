import React, { ElementType, forwardRef } from 'react';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: 'base' | 'surface' | 'lens' | 'pill' | 'droplet' | 'control';
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const GlassPanel = forwardRef<HTMLElement, GlassPanelProps>(
  (
    {
      as: Component = 'div',
      variant = 'base',
      interactive = false,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const variantClass = `liquid-glass-${variant}`;
    const interactiveClass = interactive ? 'liquid-glass-control' : '';
    const combinedClasses = [variantClass, interactiveClass, className].filter(Boolean).join(' ');

    return (
      <Component ref={ref} className={combinedClasses} {...rest}>
        {children}
      </Component>
    );
  }
);

GlassPanel.displayName = 'GlassPanel';
