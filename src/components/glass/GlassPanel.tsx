import React, { ElementType, forwardRef } from 'react';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: 'base' | 'subtle' | 'panel' | 'floating' | 'control';
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const GlassPanel = forwardRef<HTMLElement, GlassPanelProps>(
  (
    {
      as: Component = 'div',
      variant = 'panel',
      interactive = false,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const variantClass = `glass-${variant}`;
    const interactiveClass = interactive ? 'glass-interactive' : '';
    const combinedClasses = [variantClass, interactiveClass, className].filter(Boolean).join(' ');

    return (
      <Component ref={ref} className={combinedClasses} {...rest}>
        {children}
      </Component>
    );
  }
);

GlassPanel.displayName = 'GlassPanel';
