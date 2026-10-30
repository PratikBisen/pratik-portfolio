import React, { ElementType } from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  narrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  narrow = false,
  className = '',
  children,
  ...rest
}) => {
  const containerClass = narrow ? 'container-narrow' : 'container';
  const classes = [containerClass, className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};
