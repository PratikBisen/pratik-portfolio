import React, { forwardRef } from 'react';
import { Container } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  tag?: string;
  title?: string;
  subtitle?: string;
  narrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      id,
      tag,
      title,
      subtitle,
      narrow = false,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`section-wrapper ${className}`}
        aria-labelledby={title ? `${id}-heading` : undefined}
        {...rest}
      >
        <Container narrow={narrow}>
          {(tag || title || subtitle) && (
            <header className="section-header">
              {tag && <div className="section-tag">{tag}</div>}
              {title && (
                <h2 id={`${id}-heading`} className="section-title">
                  {title}
                </h2>
              )}
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </header>
          )}
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = 'Section';
