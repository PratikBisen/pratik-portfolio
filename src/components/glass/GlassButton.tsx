import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'control';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
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

export type GlassButtonProps = ButtonAsButton | ButtonAsAnchor;

export const GlassButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, GlassButtonProps>(
  (props, ref) => {
    const {
      variant = 'secondary',
      icon,
      iconPosition = 'left',
      className = '',
      children,
      as = 'button',
      ...rest
    } = props;

    let variantClass = 'glass-btn-secondary';
    if (variant === 'primary') {
      variantClass = 'glass-btn-primary';
    } else if (variant === 'control') {
      variantClass = 'glass-control';
    }

    const classes = [variantClass, className].filter(Boolean).join(' ');

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="glass-btn-icon">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="glass-btn-icon">{icon}</span>}
      </>
    );

    if (as === 'a') {
      const { href, external, ...anchorProps } = rest as ButtonAsAnchor;
      const externalRel = external ? 'noopener noreferrer' : anchorProps.rel;
      const externalTarget = external ? '_blank' : anchorProps.target;

      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          target={externalTarget}
          rel={externalRel}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonProps.type || 'button'}
        className={classes}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

GlassButton.displayName = 'GlassButton';
