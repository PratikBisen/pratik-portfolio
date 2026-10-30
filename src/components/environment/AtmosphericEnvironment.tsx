import React from 'react';
import { EnvironmentPresetId, DEFAULT_ENVIRONMENT_PRESET } from './EnvironmentPresets';
import { EnvironmentLayers } from './EnvironmentLayers';

export interface AtmosphericEnvironmentProps {
  preset?: EnvironmentPresetId;
  theme?: 'dark' | 'light';
  className?: string;
  children?: React.ReactNode;
}

export const AtmosphericEnvironment: React.FC<AtmosphericEnvironmentProps> = ({
  preset = DEFAULT_ENVIRONMENT_PRESET,
  theme,
  className = '',
  children,
}) => {
  return (
    <div
      className={`atmospheric-env ${className}`}
      data-preset={preset}
      data-env-theme={theme}
      aria-hidden="true"
    >
      <EnvironmentLayers preset={preset} />
      {children}
    </div>
  );
};
