import React, { forwardRef } from 'react';

export interface GlassImageFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  badgeText?: string;
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const GlassImageFrame = forwardRef<HTMLDivElement, GlassImageFrameProps>(
  (
    {
      src,
      alt = 'Framed media',
      aspectRatio = '4 / 5',
      badgeText,
      interactive = false,
      className = '',
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const combinedClasses = [
      'glass-3d-image-frame',
      interactive ? 'glass-3d-card-interactive' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={combinedClasses}
        style={{ aspectRatio, ...style }}
        {...rest}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 'calc(var(--radius-pod) - var(--space-4))',
              display: 'block',
            }}
          />
        ) : (
          children
        )}

        {badgeText && (
          <div
            style={{
              position: 'absolute',
              bottom: 'var(--space-4)',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 5,
              whiteSpace: 'nowrap',
            }}
          >
            <span className="glass-3d-pill">
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 8px #10B981',
                }}
              />
              {badgeText}
            </span>
          </div>
        )}
      </div>
    );
  }
);

GlassImageFrame.displayName = 'GlassImageFrame';
