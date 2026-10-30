export type EnvironmentPresetId = 'aurora' | 'chroma' | 'cyber' | 'studio';

export interface EnvironmentPreset {
  id: EnvironmentPresetId;
  name: string;
  badge: string;
  description: string;
  category: 'atmospheric' | 'testing';
  accentColor: string;
  secondaryColor: string;
  lightBg: string;
  darkBg: string;
}

export const ENVIRONMENT_PRESETS: Record<EnvironmentPresetId, EnvironmentPreset> = {
  aurora: {
    id: 'aurora',
    name: 'Aurora',
    badge: 'Atmospheric Default',
    description: 'Deep navy foundation with upper-left cyan softbox, amethyst ambient warmth, and subtle architectural datum planes.',
    category: 'atmospheric',
    accentColor: '#5EA2FF',
    secondaryColor: '#A885FF',
    lightBg: '#F3F6FD',
    darkBg: '#070913',
  },
  chroma: {
    id: 'chroma',
    name: 'Chroma',
    badge: 'Optical Transmission',
    description: 'High-contrast geometric spectral bands and saturated color planes for testing optical transmission and progressive frosted diffusion.',
    category: 'testing',
    accentColor: '#FF3366',
    secondaryColor: '#00F0FF',
    lightBg: '#F5F5FA',
    darkBg: '#080811',
  },
  cyber: {
    id: 'cyber',
    name: 'Cyber',
    badge: 'Technical Wireframe',
    description: 'Restrained graphite foundation with dual-cadence 24px/120px architectural grid, laser-sharp light channels, and minimal cyan/magenta cues.',
    category: 'atmospheric',
    accentColor: '#00F0FF',
    secondaryColor: '#FF2A85',
    lightBg: '#F0F4F8',
    darkBg: '#05070B',
  },
  studio: {
    id: 'studio',
    name: 'Studio',
    badge: 'Calibrated Bench',
    description: 'Neutral grey reference environment with optical line-pair resolution targets, chromatic swatches, and Siemens starburst.',
    category: 'testing',
    accentColor: '#718096',
    secondaryColor: '#A0AEC0',
    lightBg: '#EEF1F6',
    darkBg: '#11141A',
  },
};

export const PRESET_LIST: EnvironmentPreset[] = Object.values(ENVIRONMENT_PRESETS);

export const DEFAULT_ENVIRONMENT_PRESET: EnvironmentPresetId = 'aurora';
