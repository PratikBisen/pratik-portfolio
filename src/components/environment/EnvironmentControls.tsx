import React from 'react';
import { EnvironmentPresetId, PRESET_LIST } from './EnvironmentPresets';

export interface EnvironmentControlsProps {
  activePreset: EnvironmentPresetId;
  onSelectPreset: (preset: EnvironmentPresetId) => void;
  className?: string;
  showLabels?: boolean;
}

export const EnvironmentControls: React.FC<EnvironmentControlsProps> = ({
  activePreset,
  onSelectPreset,
  className = '',
  showLabels = true,
}) => {
  return (
    <div
      className={`env-controls-pill ${className}`}
      role="group"
      aria-label="Atmospheric Background Environment Selector"
    >
      {PRESET_LIST.map((preset) => {
        const isActive = activePreset === preset.id;
        return (
          <button
            key={preset.id}
            type="button"
            className={`env-control-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectPreset(preset.id)}
            aria-pressed={isActive}
            title={`${preset.name}: ${preset.description}`}
          >
            <span
              className="env-control-dot"
              style={{
                backgroundColor: preset.accentColor,
                boxShadow: isActive ? `0 0 8px ${preset.accentColor}` : 'none',
              }}
              aria-hidden="true"
            />
            {showLabels && <span>{preset.name}</span>}
          </button>
        );
      })}
    </div>
  );
};
