import React, { ElementType, forwardRef } from 'react';
import { GlassPanel } from './GlassPanel';

export interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  hoverEffect?: boolean;
  floating?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const GlassCard = forwardRef<HTMLElement, GlassCardProps>(
  (
    {
      as = 'div',
      hoverEffect = true,
      floating = false,
      className = '',
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const cardStyle: React.CSSProperties = {
      padding: 'var(--space-6)',
      ...style,
    };

    return (
      <GlassPanel
        ref={ref}
        as={as}
        variant={floating ? 'floating' : 'panel'}
        interactive={hoverEffect}
        className={className}
        style={cardStyle}
        {...rest}
      >
        {children}
      </GlassPanel>
    );
  }
);

GlassCard.displayName = 'GlassCard';
