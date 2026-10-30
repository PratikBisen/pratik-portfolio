import { useState, useEffect, useCallback } from 'react';
import {
  EnvironmentPresetId,
  DEFAULT_ENVIRONMENT_PRESET,
  ENVIRONMENT_PRESETS,
} from '../components/environment/EnvironmentPresets';

const STORAGE_KEY = 'pb_environment';

export function useEnvironment() {
  const [environment, setEnvironmentState] = useState<EnvironmentPresetId>(() => {
    if (typeof window === 'undefined') return DEFAULT_ENVIRONMENT_PRESET;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlEnv = urlParams.get('env') as EnvironmentPresetId | null;
      if (urlEnv && ENVIRONMENT_PRESETS[urlEnv]) return urlEnv;

      const stored = localStorage.getItem(STORAGE_KEY) as EnvironmentPresetId | null;
      if (stored && ENVIRONMENT_PRESETS[stored]) return stored;

      return DEFAULT_ENVIRONMENT_PRESET;
    } catch {
      return DEFAULT_ENVIRONMENT_PRESET;
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-environment', environment);
      localStorage.setItem(STORAGE_KEY, environment);
    } catch (e) {
      console.warn('Unable to persist environment preset to localStorage', e);
    }
  }, [environment]);

  const setEnvironment = useCallback((preset: EnvironmentPresetId) => {
    if (ENVIRONMENT_PRESETS[preset]) {
      setEnvironmentState(preset);
      // Update URL query parameter without full reload for easy bookmarking/sharing
      if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
        const url = new URL(window.location.href);
        url.searchParams.set('env', preset);
        window.history.replaceState({}, '', url.toString());
      }
    }
  }, []);

  return {
    environment,
    setEnvironment,
  };
}
