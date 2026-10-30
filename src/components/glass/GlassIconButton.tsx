import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';

type BaseProps = {
  ariaLabel: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a';
    href: string;
    external?: boolean;
  };

export type GlassIconButtonProps = ButtonAsButton | ButtonAsAnchor;

export const GlassIconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, GlassIconButtonProps>(
  (props, ref) => {
    const {
      ariaLabel,
      icon,
      className = '',
      size = 'md',
      as = 'button',
      ...rest
    } = props;

    const sizeStyles: Record<'sm' | 'md' | 'lg', React.CSSProperties> = {
      sm: { width: '36px', height: '36px', fontSize: '1rem' },
      md: { width: '44px', height: '44px', fontSize: '1.25rem' },
      lg: { width: '52px', height: '52px', fontSize: '1.5rem' },
    };

    const combinedClasses = ['glass-3d-icon-btn', className].filter(Boolean).join(' ');

    if (as === 'a') {
      const { href, external, ...anchorProps } = rest as ButtonAsAnchor;
      const externalRel = external ? 'noopener noreferrer' : anchorProps.rel;
      const externalTarget = external ? '_blank' : anchorProps.target;

      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          aria-label={ariaLabel}
          title={ariaLabel}
          target={externalTarget}
          rel={externalRel}
          className={combinedClasses}
          style={sizeStyles[size]}
          {...anchorProps}
        >
          {icon}
        </a>
      );
    }

    const buttonProps = rest as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonProps.type || 'button'}
        aria-label={ariaLabel}
        title={ariaLabel}
        className={combinedClasses}
        style={sizeStyles[size]}
        {...buttonProps}
      >
        {icon}
      </button>
    );
  }
);

GlassIconButton.displayName = 'GlassIconButton';
