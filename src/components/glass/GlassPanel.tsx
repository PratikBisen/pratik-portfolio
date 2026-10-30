import React, { ElementType, forwardRef } from 'react';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: 
    | 'panel' 
    | 'base' 
    | 'surface' 
    | 'thick-3d' 
    | 'frosted' 
    | 'clear' 
    | 'tinted'
    | 'lens' 
    | 'pill' 
    | 'droplet' 
    | 'control';
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
    let materialClass = 'glass-3d-panel';

    switch (variant) {
      case 'base':
        materialClass = 'glass-3d-base';
        break;
      case 'surface':
        materialClass = 'glass-3d-panel';
        break;
      case 'thick-3d':
        materialClass = 'glass-3d-card material-sample-thick-3d';
        break;
      case 'frosted':
        materialClass = 'glass-3d-panel material-sample-frosted';
        break;
      case 'clear':
        materialClass = 'glass-3d-base material-sample-clear';
        break;
      case 'tinted':
        materialClass = 'glass-3d-panel material-sample-tinted';
        break;
      case 'lens':
        materialClass = 'glass-3d-panel';
        break;
      case 'pill':
        materialClass = 'glass-3d-pill';
        break;
      case 'droplet':
      case 'control':
        materialClass = 'glass-3d-base';
        break;
      default:
        materialClass = 'glass-3d-panel';
    }

    const interactiveClass = interactive ? 'glass-3d-card-interactive' : '';
    const combinedClasses = [materialClass, interactiveClass, className].filter(Boolean).join(' ');

    return (
      <Component ref={ref} className={combinedClasses} {...rest}>
        {children}
      </Component>
    );
  }
);

GlassPanel.displayName = 'GlassPanel';
