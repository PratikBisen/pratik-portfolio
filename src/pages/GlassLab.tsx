import React, { useState } from 'react';
import {
  GlassPanel,
  GlassCard,
  GlassButton,
  GlassNavigation,
  GlassPill,
  GlassIconButton,
  GlassImageFrame,
  GlassFloatingElement,
} from '../components/glass';
import { GitHubIcon, LinkedInIcon } from '../components/ui/Icons';
import {
  Sun,
  Moon,
  Layers,
  Sparkles,
  Sliders,
  Box,
  Eye,
  RotateCw,
  Compass,
  ArrowLeft,
  Check,
  Shield,
  Zap,
  Cpu,
  Palette,
  Terminal,
} from 'lucide-react';

interface GlassLabProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onBackToPortfolio: () => void;
}

export const GlassLab: React.FC<GlassLabProps> = ({
  theme,
  onToggleTheme,
  onBackToPortfolio,
}) => {
  // Live Tuner Controls
  const [backgroundScene, setBackgroundScene] = useState<'aurora' | 'chroma' | 'cyber' | 'studio'>(() => {
    if (typeof window === 'undefined') return 'aurora';
    const s = new URLSearchParams(window.location.search).get('scene');
    if (s === 'chroma' || s === 'cyber' || s === 'studio') return s;
    return 'aurora';
  });
  const [blurAmount, setBlurAmount] = useState<number>(28);
  const [saturationAmount, setSaturationAmount] = useState<number>(180);
  const [fillOpacity, setFillOpacity] = useState<number>(10);
  const [bevelIntensity, setBevelIntensity] = useState<number>(75);
  const [enableTilt, setEnableTilt] = useState<boolean>(true);
  const [activeNavTab, setActiveNavTab] = useState<string>('material');

  const resetDefaults = () => {
    setBlurAmount(28);
    setSaturationAmount(180);
    setFillOpacity(10);
    setBevelIntensity(75);
  };

  // Dynamic CSS variables applied directly to the lab container
  const labCustomStyles: React.CSSProperties = {
    ['--fg-blur' as string]: `${blurAmount}px`,
    ['--fg-saturation' as string]: `${saturationAmount}%`,
    ['--fg-fill' as string]: theme === 'dark' 
      ? `rgba(255, 255, 255, ${fillOpacity / 100})` 
      : `rgba(255, 255, 255, ${Math.min(0.9, (fillOpacity + 40) / 100)})`,
    ['--fg-bevel-top' as string]: theme === 'dark'
      ? `rgba(255, 255, 255, ${bevelIntensity / 100})`
      : `#FFFFFF`,
    ['--fg-rim-opacity' as string]: `${bevelIntensity / 100}`,
  };

  return (
    <div className={`glass-lab-root scene-${backgroundScene}`} style={labCustomStyles}>
      {/* =========================================================================
          High-Contrast Atmospheric Background Test Patterns
          ========================================================================= */}
      <div className="lab-background-canvas" aria-hidden="true">
        {backgroundScene === 'aurora' && (
          <div className="scene-elements scene-aurora">
            <div className="aurora-orb orb-1" />
            <div className="aurora-orb orb-2" />
            <div className="aurora-orb orb-3" />
            <div className="aurora-orb orb-4" />
            <div className="aurora-mesh-lines" />
          </div>
        )}

        {backgroundScene === 'chroma' && (
          <div className="scene-elements scene-chroma">
            <div className="chroma-stripe stripe-1" />
            <div className="chroma-stripe stripe-2" />
            <div className="chroma-stripe stripe-3" />
            <div className="chroma-disc disc-1" />
            <div className="chroma-disc disc-2" />
            <div className="chroma-checkerboard" />
          </div>
        )}

        {backgroundScene === 'cyber' && (
          <div className="scene-elements scene-cyber">
            <div className="cyber-grid" />
            <div className="cyber-glow-cone" />
            <div className="cyber-horizon" />
            <div className="cyber-neon-rect r1" />
            <div className="cyber-neon-rect r2" />
          </div>
        )}

        {backgroundScene === 'studio' && (
          <div className="scene-elements scene-studio">
            <div className="studio-spotlight" />
            <div className="studio-contrast-card c1" />
            <div className="studio-contrast-card c2" />
            <div className="studio-typography">OPTICAL DEPTH</div>
          </div>
        )}
      </div>

      {/* =========================================================================
          Top Control Console (Live Material Tuner & Test Controls)
          ========================================================================= */}
      <header className="lab-header">
        <div className="lab-container">
          <GlassPanel className="lab-header-inner">
            <div className="lab-brand-cluster">
              <button 
                onClick={onBackToPortfolio}
                className="lab-back-button glass-3d-button"
                aria-label="Return to portfolio"
              >
                <ArrowLeft size={16} />
                <span>Return to Portfolio</span>
              </button>
              <div className="lab-brand-title">
                <span className="lab-badge-live">PHASE 2 MATERIAL LAB</span>
                <h1>3D Frosted Glassmorphism</h1>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lab-actions-cluster">
              {/* Background Scene Switcher */}
              <div className="lab-control-group">
                <label className="lab-control-label" htmlFor="scene-select">
                  <Palette size={14} /> Background:
                </label>
                <div className="scene-switcher-buttons" id="scene-select">
                  {(['aurora', 'chroma', 'cyber', 'studio'] as const).map((sc) => (
                    <button
                      key={sc}
                      onClick={() => setBackgroundScene(sc)}
                      className={`scene-chip ${backgroundScene === sc ? 'active' : ''}`}
                    >
                      {sc.charAt(0).toUpperCase() + sc.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Switcher */}
              <GlassButton
                variant="secondary"
                icon={theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
              </GlassButton>
            </div>
          </GlassPanel>

          {/* Live Parameter Sliders Bar */}
          <GlassPanel className="lab-sliders-bar">
            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Diffusion Blur</span>
                <span className="slider-val">{blurAmount}px</span>
              </div>
              <input
                type="range"
                min="8"
                max="50"
                value={blurAmount}
                onChange={(e) => setBlurAmount(Number(e.target.value))}
                aria-label="Diffusion blur slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Optical Saturation</span>
                <span className="slider-val">{saturationAmount}%</span>
              </div>
              <input
                type="range"
                min="100"
                max="250"
                value={saturationAmount}
                onChange={(e) => setSaturationAmount(Number(e.target.value))}
                aria-label="Optical saturation slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Surface Fill Opacity</span>
                <span className="slider-val">{fillOpacity}%</span>
              </div>
              <input
                type="range"
                min="3"
                max="35"
                value={fillOpacity}
                onChange={(e) => setFillOpacity(Number(e.target.value))}
                aria-label="Surface fill opacity slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Specular Bevel Luminance</span>
                <span className="slider-val">{bevelIntensity}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={bevelIntensity}
                onChange={(e) => setBevelIntensity(Number(e.target.value))}
                aria-label="Specular bevel intensity slider"
                className="lab-range"
              />
            </div>

            <div className="slider-toggles">
              <button
                onClick={() => setEnableTilt(!enableTilt)}
                className={`tilt-toggle ${enableTilt ? 'active' : ''}`}
                title="Toggle 3D perspective tilt effect on cards"
              >
                <Box size={14} />
                <span>3D Tilt: {enableTilt ? 'ON' : 'OFF'}</span>
              </button>
              <button
                onClick={resetDefaults}
                className="reset-button"
                title="Reset parameters to tuned reference values"
              >
                <RotateCw size={14} />
                <span>Reset</span>
              </button>
            </div>
          </GlassPanel>
        </div>
      </header>

      {/* =========================================================================
          Main Laboratory Sections
          ========================================================================= */}
      <main className="lab-main">
        <div className="lab-container">

          {/* -------------------------------------------------------------------
              SECTION 1: THE 4-WAY MATERIAL COMPARISON MATRIX
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <div className="section-heading">
              <div className="section-eyebrow">
                <Layers size={16} /> MATERIAL TAXONOMY MATRIX
              </div>
              <h2>Optical Material Variations</h2>
              <p>
                Visual comparison demonstrating four distinct glass physics profiles over identical background elements.
              </p>
            </div>

            <div className="matrix-grid">
              {/* Variant 1: Frosted Glass (Reference 1) */}
              <div className="matrix-card-wrap">
                <div className="matrix-card-header">
                  <span className="matrix-pill">REFERENCE 1</span>
                  <h3>Heavily Frosted Glass</h3>
                  <span className="matrix-meta">blur: 32px · sat: 175% · deep diffusion</span>
                </div>
                <GlassPanel variant="frosted" className="matrix-card-content">
                  <div className="material-spec-details">
                    <p className="spec-desc">
                      Multi-layer diffusion completely softens background geometries into ethereal hues while preserving authentic environmental light transmission.
                    </p>
                    <div className="spec-indicators">
                      <span className="indicator-chip">High Diffusion</span>
                      <span className="indicator-chip">Diffused Visibility</span>
                      <span className="indicator-chip">Chamfer Sheen</span>
                    </div>
                  </div>
                </GlassPanel>
              </div>

              {/* Variant 2: Clear Optical Glass */}
              <div className="matrix-card-wrap">
                <div className="matrix-card-header">
                  <span className="matrix-pill">OPTICAL LENS</span>
                  <h3>Clear Optical Glass</h3>
                  <span className="matrix-meta">blur: 14px · sat: 130% · high clarity</span>
                </div>
                <GlassPanel variant="clear" className="matrix-card-content">
                  <div className="material-spec-details">
                    <p className="spec-desc">
                      Minimal diffusion prioritizing background object visibility with high-contrast specular borders and internal caustic refraction.
                    </p>
                    <div className="spec-indicators">
                      <span className="indicator-chip">High Transparency</span>
                      <span className="indicator-chip">Crisp Edges</span>
                      <span className="indicator-chip">Sharp Refraction</span>
                    </div>
                  </div>
                </GlassPanel>
              </div>

              {/* Variant 3: Thick 3D Glass (Reference 2) */}
              <div className="matrix-card-wrap">
                <div className="matrix-card-header">
                  <span className="matrix-pill">REFERENCE 2</span>
                  <h3>Thick 3D Glass</h3>
                  <span className="matrix-meta">12mm Extrusion · Beveled Chamfer · 3D Tilt</span>
                </div>
                <GlassCard variant="thick-3d" interactive perspectiveTilt={enableTilt} className="matrix-card-content">
                  <div className="material-spec-details">
                    <p className="spec-desc">
                      Physical bevels, simulated sidewall thickness via multi-tier ambient shadows, and an iridescent prism edge rim.
                    </p>
                    <div className="spec-indicators">
                      <span className="indicator-chip">Physical Bevel</span>
                      <span className="indicator-chip">Iridescent Edge</span>
                      <span className="indicator-chip">Simulated Sidewall</span>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Variant 4: Lightly Tinted Glass */}
              <div className="matrix-card-wrap">
                <div className="matrix-card-header">
                  <span className="matrix-pill">SPECTRAL DISPERSION</span>
                  <h3>Lightly Tinted Glass</h3>
                  <span className="matrix-meta">Sapphire & Iris Prism · Spectral Refraction</span>
                </div>
                <GlassPanel variant="tinted" className="matrix-card-content">
                  <div className="material-spec-details">
                    <p className="spec-desc">
                      Subtle chromatic prism dispersion adding ethereal blue-violet depth to directional surface light.
                    </p>
                    <div className="spec-indicators">
                      <span className="indicator-chip">Prismatic Iris</span>
                      <span className="indicator-chip">Sapphire Core</span>
                      <span className="indicator-chip">Luminous Tone</span>
                    </div>
                  </div>
                </GlassPanel>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------------------
              SECTION 2: LAYERED OVERLAPPING GLASS PANELS (DEPTH STACK)
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <div className="section-heading">
              <div className="section-eyebrow">
                <Box size={16} /> MULTI-PLANE OPTICAL OCCLUSION
              </div>
              <h2>Layered Overlapping Glass Panels</h2>
              <p>
                Verification of multi-layer transparency and depth. Background elements remain visible and diffuse consecutively through multiple stacked glass layers.
              </p>
            </div>

            <div className="layered-stack-stage">
              {/* Background Reference High-Contrast Graphic (Underneath all glass) */}
              <div className="stack-underlay-pattern">
                <div className="underlay-text-big">PRATIK BISEN</div>
                <div className="underlay-radial-target" />
                <div className="underlay-stripe-band" />
              </div>

              {/* Glass Layer 1: Base Floor Panel */}
              <GlassPanel variant="panel" className="glass-layer layer-1">
                <div className="layer-badge">
                  <span className="layer-dot" /> Layer 01: Base Translucent Plane
                </div>
                <div className="layer-content">
                  <h4>Atmospheric Substratum</h4>
                  <p>
                    Base plane receiving ambient lighting. Notice how the sharp geometric stripes beneath are gracefully diffused.
                  </p>
                </div>
              </GlassPanel>

              {/* Glass Layer 2: Mid Elevated Panel (Partially Overlapping Layer 1) */}
              <div className="glass-layer layer-2 glass-3d-card">
                <div className="layer-badge">
                  <span className="layer-dot" style={{ backgroundColor: '#60A5FA' }} /> Layer 02: Elevated Intermediate Panel
                </div>
                <div className="layer-content">
                  <h4>Refractive Convergence</h4>
                  <p>
                    Cast shadow falls directly on Layer 01 while maintaining secondary backdrop blur through both surfaces simultaneously.
                  </p>
                  <div className="layer-stats">
                    <GlassPill variant="accent" dot>Dual Occlusion</GlassPill>
                    <GlassPill>Contact Shadow: 18px</GlassPill>
                  </div>
                </div>
              </div>

              {/* Glass Layer 3: Apex Floating Card (Overlapping Layer 1 & 2) */}
              <div className={`glass-layer layer-3 glass-3d-card ${enableTilt ? 'tilt-active' : ''}`}>
                <div className="layer-badge">
                  <span className="layer-dot" style={{ backgroundColor: '#A78BFA' }} /> Layer 03: Apex 3D Control Surface
                </div>
                <div className="layer-content">
                  <h4>3D Polished Apex</h4>
                  <p>
                    Uppermost dimensional surface with full chamfer beveling and iridescent rim refraction.
                  </p>
                  <div className="apex-buttons">
                    <GlassButton variant="primary" icon={<Sparkles size={14} />}>
                      Interactive Apex
                    </GlassButton>
                    <GlassIconButton ariaLabel="Inspect layer" icon={<Eye size={16} />} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------------------
              SECTION 3: DIMENSIONAL 3D GLASS CARDS (REFERENCE 2 SHOWCASE)
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <div className="section-heading">
              <div className="section-eyebrow">
                <Sparkles size={16} /> DIMENSIONAL THICKNESS & BEVELS
              </div>
              <h2>Dimensional 3D Glass Cards</h2>
              <p>
                Physical bevels, specular top and left highlights, dark ambient bottom bevels, and multi-tier contact shadows giving real mass.
              </p>
            </div>

            <div className="cards-showcase-grid">
              {/* 3D Showcase Card 1: Technical Spec */}
              <GlassCard 
                interactive 
                perspectiveTilt={enableTilt} 
                className="showcase-card"
              >
                <div className="card-top-row">
                  <GlassPill dot dotColor="#10B981">SYSTEM LIVE</GlassPill>
                  <span className="card-serial">SPEC // PB-3D-01</span>
                </div>
                <div className="card-body">
                  <div className="card-icon-avatar">
                    <Cpu size={24} />
                  </div>
                  <h3>Full-Stack Core Architecture</h3>
                  <p>
                    Engineered with React 19, TypeScript 5.7, and Vite 6. Features multi-stage CSS tokenization and hardware-accelerated transforms.
                  </p>
                </div>
                <div className="card-footer-stats">
                  <div className="stat-chunk">
                    <span className="chunk-label">BLUR RADIUS</span>
                    <span className="chunk-value">{blurAmount}px</span>
                  </div>
                  <div className="stat-chunk">
                    <span className="chunk-label">SATURATION</span>
                    <span className="chunk-value">{saturationAmount}%</span>
                  </div>
                  <div className="stat-chunk">
                    <span className="chunk-label">EXTRUSION</span>
                    <span className="chunk-value">12mm</span>
                  </div>
                </div>
              </GlassCard>

              {/* 3D Showcase Card 2: Interactive Controls & Metrics */}
              <GlassCard 
                interactive 
                perspectiveTilt={enableTilt} 
                className="showcase-card"
              >
                <div className="card-top-row">
                  <GlassPill variant="accent" dot dotColor="#60A5FA">OPTICAL ENGINE</GlassPill>
                  <span className="card-serial">SPEC // PB-3D-02</span>
                </div>
                <div className="card-body">
                  <div className="card-icon-avatar">
                    <Shield size={24} />
                  </div>
                  <h3>Beveled Edge Chamfering</h3>
                  <p>
                    Calculated 45-degree angle reflection boundaries. Specular white top edge catches simulated environmental light while bottom border grounds the object.
                  </p>
                </div>
                <div className="card-buttons-row">
                  <GlassButton variant="primary" icon={<Zap size={15} />}>
                    Trigger Pulse
                  </GlassButton>
                  <GlassButton variant="secondary">
                    View Matrix
                  </GlassButton>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* -------------------------------------------------------------------
              SECTION 4: FLOATING GLASS NAVIGATION DOCK
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <div className="section-heading">
              <div className="section-eyebrow">
                <Compass size={16} /> FLOATING CONTROL INTERFACE
              </div>
              <h2>Translucent Glass Navigation Dock</h2>
              <p>
                Continuous curved glass dock with high-diffusion backdrop filter, inner specular crescent reflection, and tactile button controls.
              </p>
            </div>

            <div className="nav-dock-demo-stage">
              <GlassNavigation ariaLabel="Material Test Navigation">
                <div className="nav-dock-inner">
                  <div className="nav-dock-brand">
                    <span className="dock-logo">PB</span>
                    <span className="dock-title">Pratik Bisen</span>
                  </div>

                  <div className="nav-dock-links">
                    {[
                      { id: 'material', label: 'Material' },
                      { id: 'layers', label: 'Layers' },
                      { id: 'bevels', label: 'Bevels' },
                      { id: 'controls', label: 'Controls' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveNavTab(tab.id)}
                        className={`nav-tab-btn ${activeNavTab === tab.id ? 'active' : ''}`}
                      >
                        {activeNavTab === tab.id && <span className="active-tab-glow" />}
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="nav-dock-controls">
                    <GlassIconButton
                      ariaLabel="Switch Theme"
                      size="sm"
                      icon={theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                      onClick={onToggleTheme}
                    />
                    <GlassIconButton
                      ariaLabel="GitHub"
                      size="sm"
                      icon={<GitHubIcon size={16} />}
                      as="a"
                      href="https://github.com/pratikbisen"
                      external
                    />
                  </div>
                </div>
              </GlassNavigation>
            </div>
          </section>

          {/* -------------------------------------------------------------------
              SECTION 5: FLOATING BUTTONS, CONTROLS & TACTILE PILLS
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <div className="section-heading">
              <div className="section-eyebrow">
                <Sliders size={16} /> INTERACTIVE TACTILE CONTROLS
              </div>
              <h2>Glass Buttons, Icon Controls & Pills</h2>
              <p>
                Interactive elements exhibiting tactile physical depression, specular edge highlights, and luminous button variants.
              </p>
            </div>

            <GlassPanel className="controls-specimen-grid">
              {/* Row 1: Action Buttons */}
              <div className="specimen-row">
                <div className="specimen-desc">
                  <span className="specimen-tag">BUTTONS</span>
                  <h4>Interactive Glass Buttons</h4>
                </div>
                <div className="specimen-items">
                  <GlassButton variant="primary" icon={<Sparkles size={16} />}>
                    Primary Glass Action
                  </GlassButton>
                  <GlassButton variant="secondary" icon={<Check size={16} />}>
                    Secondary Frosted
                  </GlassButton>
                  <GlassButton variant="control" icon={<Terminal size={16} />}>
                    Console Command
                  </GlassButton>
                </div>
              </div>

              {/* Row 2: Icon Buttons */}
              <div className="specimen-row">
                <div className="specimen-desc">
                  <span className="specimen-tag">ICON BUTTONS</span>
                  <h4>Circular Specular Controls</h4>
                </div>
                <div className="specimen-items">
                  <GlassIconButton size="sm" ariaLabel="Small Icon" icon={<Zap size={14} />} />
                  <GlassIconButton size="md" ariaLabel="Medium Icon" icon={<Sparkles size={18} />} />
                  <GlassIconButton size="lg" ariaLabel="Large Icon" icon={<GitHubIcon size={22} />} />
                  <GlassIconButton size="md" ariaLabel="LinkedIn" icon={<LinkedInIcon size={18} />} />
                </div>
              </div>

              {/* Row 3: Pills & Status Badges */}
              <div className="specimen-row">
                <div className="specimen-desc">
                  <span className="specimen-tag">PILLS & BADGES</span>
                  <h4>Tactile Squircle Glass Pills</h4>
                </div>
                <div className="specimen-items wrap">
                  <GlassPill dot dotColor="#10B981" interactive>
                    Available for SDE Roles
                  </GlassPill>
                  <GlassPill variant="accent" dot dotColor="#3B82F6" interactive>
                    Full Stack Developer
                  </GlassPill>
                  <GlassPill interactive>
                    TypeScript 5.7
                  </GlassPill>
                  <GlassPill interactive>
                    React 19 Core
                  </GlassPill>
                  <GlassPill dot dotColor="#EC4899" interactive>
                    3D Shaders Active
                  </GlassPill>
                </div>
              </div>
            </GlassPanel>
          </section>

          {/* -------------------------------------------------------------------
              SECTION 6: DEDICATED 3D GLASS IMAGE FRAME & SATELLITE CHIPS
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <div className="section-heading">
              <div className="section-eyebrow">
                <Eye size={16} /> IDENTITY & SATELLITE SYSTEM
              </div>
              <h2>Dedicated 3D Glass Image Frame & Satellite Chips</h2>
              <p>
                Visual frame with thick beveled borders, internal lens refraction shadow, specular top crescent, and hovering satellite info chips.
              </p>
            </div>

            <div className="image-frame-showcase-stage">
              <div className="frame-center-column">
                <GlassImageFrame
                  aspectRatio="1 / 1"
                  badgeText="PRATIK BISEN // SDE"
                  interactive
                  className="showcase-photo-frame"
                >
                  {/* Framed Graphic Representation */}
                  <div className="photo-placeholder-art">
                    <div className="portrait-silhouette">
                      <div className="silhouette-head" />
                      <div className="silhouette-torso" />
                    </div>
                    <div className="portrait-geometric-rings" />
                    <div className="portrait-brand-mark">PB</div>
                  </div>
                </GlassImageFrame>

                {/* Satellite Floating Glass Chips */}
                <GlassFloatingElement
                  icon={<Cpu size={16} />}
                  label="IT Engineering"
                  sublabel="Pillai College of Engineering"
                  className="satellite-chip satellite-top-right"
                />

                <GlassFloatingElement
                  icon={<Zap size={16} />}
                  label="Algorithmic Mastery"
                  sublabel="450+ LeetCode DSA Solved"
                  className="satellite-chip satellite-bottom-left"
                />

                <GlassFloatingElement
                  icon={<Check size={16} />}
                  label="Smart India Hackathon"
                  sublabel="Internal Winner 2024"
                  className="satellite-chip satellite-bottom-right"
                />
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------------------
              SECTION 7: LABORATORY SUMMARY & APPROVAL CHECKLIST
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <GlassPanel className="lab-summary-box">
              <div className="summary-header">
                <span className="summary-pill">VERIFICATION CHECKLIST</span>
                <h3>Phase 1 & 2 Material Readiness</h3>
              </div>
              <div className="summary-checklist-grid">
                <div className="check-item">
                  <div className="check-icon"><Check size={16} /></div>
                  <div className="check-text">
                    <strong>Reference 1 Diffusion</strong>
                    <span>Tested with 32px backdrop blur, 175% saturation, and realistic background visibility.</span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon"><Check size={16} /></div>
                  <div className="check-text">
                    <strong>Reference 2 3D Geometry</strong>
                    <span>Polished 45° chamfer bevels, simulated sidewall extrusion, contact and ambient shadows.</span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon"><Check size={16} /></div>
                  <div className="check-text">
                    <strong>8 Reusable Components</strong>
                    <span>GlassPanel, GlassCard, GlassButton, GlassNavigation, GlassPill, GlassIconButton, GlassImageFrame, GlassFloatingElement.</span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon"><Check size={16} /></div>
                  <div className="check-text">
                    <strong>Light & Dark Coherence</strong>
                    <span>Full light mode support with white specular highlights, cool-grey bottom bevels, and WCAG AA contrast.</span>
                  </div>
                </div>
              </div>
              <div className="summary-actions">
                <GlassButton variant="primary" icon={<Check size={16} />} onClick={onBackToPortfolio}>
                  Approved & Return to Portfolio
                </GlassButton>
              </div>
            </GlassPanel>
          </section>

        </div>
      </main>
    </div>
  );
};
