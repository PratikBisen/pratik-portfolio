import React from 'react';
import { EnvironmentPresetId } from './EnvironmentPresets';

interface EnvironmentLayersProps {
  preset: EnvironmentPresetId;
}

export const EnvironmentLayers: React.FC<EnvironmentLayersProps> = ({ preset }) => {
  return (
    <>
      {/* -----------------------------------------------------------------------
          LAYER A — Base Foundation & Vignette Edge Shadows
          ----------------------------------------------------------------------- */}
      <div className="env-layer-base" aria-hidden="true">
        <div className="env-vignette-overlay" />
      </div>

      {/* -----------------------------------------------------------------------
          LAYER B — Directional Lighting System (Softbox, Fill & Floor Bounce)
          ----------------------------------------------------------------------- */}
      <div className="env-layer-lighting" aria-hidden="true">
        {/* Upper-Left Directional Softbox (Matches 135°/-45° glass bevels) */}
        <div className="env-light-softbox-primary" />
        {/* Opposite-Side Ambient Fill */}
        <div className="env-light-secondary-fill" />
        {/* Mid-Elevation Spatial Accent */}
        <div className="env-light-ambient-mid" />
        {/* Subtle Floor Reflected Light */}
        <div className="env-light-floor-bounce" />
      </div>

      {/* -----------------------------------------------------------------------
          LAYER C — Atmospheric 3D Depth Planes (Far, Mid, Near)
          ----------------------------------------------------------------------- */}
      <div className="env-layer-depth" aria-hidden="true">
        <div className="env-depth-far-plane" />
        <div className="env-depth-mid-plane">
          <div className="env-depth-light-beam" style={{ left: '20%' }} />
          <div className="env-depth-light-beam" style={{ left: '60%' }} />
        </div>
        <div className="env-depth-near-plane" />
      </div>

      {/* -----------------------------------------------------------------------
          LAYER D — Environmental Geometry (Architectural Grids, Columns & Presets)
          ----------------------------------------------------------------------- */}
      <div className="env-layer-geometry" aria-hidden="true">
        {/* Dual-Cadence Architectural Grid (24px minor, 120px major) */}
        <div className="env-architectural-grid" />

        {/* Vertical Architectural Light Columns */}
        <div className="env-column-left" />
        <div className="env-column-right" />

        {/* Structural Horizontal Datum Lines */}
        <div className="env-datum-line-1" />
        <div className="env-datum-line-2" />

        {/* Geometric Under-Panels (Visible & Diffused Behind Translucent Glass) */}
        <div className="env-geom-panel-primary" />
        <div className="env-geom-panel-secondary" />

        {/* Preset-Specific Geometric Features */}
        {preset === 'chroma' && (
          <div className="env-chroma-features">
            <div className="chroma-vector-band-1" />
            <div className="chroma-vector-band-2" />
            <div className="chroma-vector-band-3" />
            <div className="chroma-optic-disk-1" />
            <div className="chroma-optic-disk-2" />
            <div className="chroma-optic-checker" />
          </div>
        )}

        {preset === 'cyber' && (
          <div className="env-cyber-features">
            <div className="cyber-horizon-glow" />
            <div className="cyber-perspective-floor" />
            <div className="cyber-laser-guide-1" />
            <div className="cyber-laser-guide-2" />
          </div>
        )}

        {preset === 'studio' && (
          <div className="env-studio-features">
            <div className="studio-target-bench">
              <span className="studio-spec-label">OPTICAL RESOLUTION BENCH // 2026</span>
              <div className="studio-gauge-cluster">
                <div className="studio-gauge-1px" title="1px Precision Line Pair Gauge" />
                <div className="studio-gauge-2px" title="2px Precision Line Pair Gauge" />
              </div>
              <div className="studio-swatch-row">
                <div className="studio-color-chip" style={{ background: '#00F0FF' }} title="Cyan 100%" />
                <div className="studio-color-chip" style={{ background: '#FF0055' }} title="Magenta 100%" />
                <div className="studio-color-chip" style={{ background: '#FFDD00' }} title="Yellow 100%" />
                <div className="studio-color-chip" style={{ background: '#0066FF' }} title="Blue 100%" />
                <div className="studio-color-chip" style={{ background: '#00FF66' }} title="Green 100%" />
                <div className="studio-color-chip" style={{ background: '#FF3300' }} title="Red 100%" />
                <div className="studio-color-chip" style={{ background: '#888888' }} title="Neutral Gray 50%" />
                <div className="studio-color-chip" style={{ background: '#FFFFFF' }} title="Pure White" />
              </div>
              <div className="studio-starburst-target" title="Siemens Starburst Target" />
            </div>
          </div>
        )}
      </div>

      {/* -----------------------------------------------------------------------
          LAYER E — Surface Micro-Grain Texture (Static High-Efficiency SVG Noise)
          ----------------------------------------------------------------------- */}
      <div className="env-layer-texture" aria-hidden="true" />
    </>
  );
};
