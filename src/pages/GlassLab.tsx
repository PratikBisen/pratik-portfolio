import React, { useState } from 'react';
import { AtmosphericEnvironment } from '../components/environment';
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
  Bookmark,
} from 'lucide-react';

interface GlassLabProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onBackToPortfolio: () => void;
}

type PresetKey = 'frosted' | 'clear' | 'crystal' | 'tinted' | 'hybrid' | 'custom';

export const GlassLab: React.FC<GlassLabProps> = ({
  theme,
  onToggleTheme,
  onBackToPortfolio,
}) => {
  // Live Tuner Controls (Phase 3 Unified Environment)
  const [backgroundScene, setBackgroundScene] = useState<'aurora' | 'chroma' | 'cyber' | 'studio'>(() => {
    if (typeof window === 'undefined') return 'aurora';
    const params = new URLSearchParams(window.location.search);
    const s = params.get('env') || params.get('scene');
    if (s === 'chroma' || s === 'cyber' || s === 'studio') return s;
    return 'aurora';
  });

  // 8 Material-Engineering Parameters
  const [blurAmount, setBlurAmount] = useState<number>(28);
  const [fillOpacity, setFillOpacity] = useState<number>(7);
  const [saturationAmount, setSaturationAmount] = useState<number>(165);
  const [tintIntensity, setTintIntensity] = useState<number>(8);
  const [edgeReflection, setEdgeReflection] = useState<number>(80);
  const [bevelIntensity, setBevelIntensity] = useState<number>(85);
  const [thicknessAmount, setThicknessAmount] = useState<number>(16);
  const [ambientShadow, setAmbientShadow] = useState<number>(44);
  const [enableTilt, setEnableTilt] = useState<boolean>(true);
  const [activePreset, setActivePreset] = useState<PresetKey>('hybrid');
  const [activeNavTab, setActiveNavTab] = useState<string>('material');

  // 5 Specialized Presets
  const applyPreset = (key: PresetKey) => {
    setActivePreset(key);
    switch (key) {
      case 'frosted': // Pure Frosted (Ref 1)
        setBlurAmount(34);
        setFillOpacity(8);
        setSaturationAmount(175);
        setTintIntensity(0);
        setEdgeReflection(75);
        setBevelIntensity(80);
        setThicknessAmount(12);
        setAmbientShadow(48);
        break;
      case 'clear': // Optical Clear
        setBlurAmount(12);
        setFillOpacity(3);
        setSaturationAmount(130);
        setTintIntensity(0);
        setEdgeReflection(90);
        setBevelIntensity(95);
        setThicknessAmount(6);
        setAmbientShadow(28);
        break;
      case 'crystal': // Thick Crystal (Ref 2)
        setBlurAmount(36);
        setFillOpacity(7);
        setSaturationAmount(185);
        setTintIntensity(5);
        setEdgeReflection(85);
        setBevelIntensity(90);
        setThicknessAmount(24);
        setAmbientShadow(56);
        break;
      case 'tinted': // Subtle Tinted
        setBlurAmount(26);
        setFillOpacity(6);
        setSaturationAmount(160);
        setTintIntensity(25);
        setEdgeReflection(70);
        setBevelIntensity(75);
        setThicknessAmount(14);
        setAmbientShadow(40);
        break;
      case 'hybrid': // Premium Hybrid
      default:
        setBlurAmount(28);
        setFillOpacity(7);
        setSaturationAmount(165);
        setTintIntensity(8);
        setEdgeReflection(80);
        setBevelIntensity(85);
        setThicknessAmount(16);
        setAmbientShadow(44);
        break;
    }
  };

  const handleSliderChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value);
    setActivePreset('custom');
  };

  const resetDefaults = () => {
    applyPreset('hybrid');
  };

  // Dynamic CSS variables applied directly to the lab container
  const labCustomStyles: React.CSSProperties = {
    ['--fg-blur' as string]: `${blurAmount}px`,
    ['--fg-saturation' as string]: `${saturationAmount}%`,
    ['--fg-fill' as string]: theme === 'dark' 
      ? `rgba(255, 255, 255, ${fillOpacity / 100})` 
      : `rgba(255, 255, 255, ${Math.min(0.85, (fillOpacity + 30) / 100)})`,
    ['--fg-panel-fill' as string]: theme === 'dark'
      ? `rgba(255, 255, 255, ${fillOpacity / 100})`
      : `rgba(255, 255, 255, ${Math.min(0.85, (fillOpacity + 32) / 100)})`,
    ['--fg-card-fill' as string]: theme === 'dark'
      ? `rgba(255, 255, 255, ${fillOpacity / 100})`
      : `rgba(255, 255, 255, ${Math.min(0.85, (fillOpacity + 28) / 100)})`,
    ['--fg-bevel-top' as string]: theme === 'dark'
      ? `rgba(255, 255, 255, ${bevelIntensity / 100})`
      : `#FFFFFF`,
    ['--fg-bevel-left' as string]: theme === 'dark'
      ? `rgba(255, 255, 255, ${(bevelIntensity * 0.65) / 100})`
      : `rgba(255, 255, 255, 0.9)`,
    ['--fg-rim-opacity' as string]: `${edgeReflection / 100}`,
    ['--fg-shadow-thickness' as string]: `0 ${thicknessAmount / 2}px ${thicknessAmount}px -4px rgba(0, 0, 0, ${theme === 'dark' ? 0.55 : 0.12})`,
    ['--fg-shadow-thickness-deep' as string]: `0 ${thicknessAmount}px ${thicknessAmount * 2}px -4px rgba(0, 0, 0, ${theme === 'dark' ? 0.65 : 0.16})`,
    ['--fg-shadow-ambient' as string]: `0 ${ambientShadow}px ${ambientShadow * 2}px -16px rgba(0, 0, 0, ${theme === 'dark' ? 0.75 : 0.15})`,
  };

  return (
    <div className={`glass-lab-root scene-${backgroundScene}`} style={labCustomStyles}>
      {/* =========================================================================
          Unified 5-Layer Atmospheric Environment Architecture (Phase 3)
          ========================================================================= */}
      <AtmosphericEnvironment preset={backgroundScene} theme={theme} />

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
                <span className="lab-badge-live">PHASE 2 MATERIAL ENGINE</span>
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
                  {(['studio', 'aurora', 'chroma', 'cyber'] as const).map((sc) => (
                    <button
                      key={sc}
                      onClick={() => setBackgroundScene(sc)}
                      className={`scene-chip ${backgroundScene === sc ? 'active' : ''}`}
                    >
                      {sc === 'studio' ? 'Neutral Studio' : sc.charAt(0).toUpperCase() + sc.slice(1)}
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

          {/* Quick Presets Bar (Task 7) */}
          <GlassPanel className="lab-presets-bar">
            <span className="presets-label">
              <Bookmark size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '4px' }} />
              Presets:
            </span>
            <button
              onClick={() => applyPreset('hybrid')}
              className={`preset-chip ${activePreset === 'hybrid' ? 'active' : ''}`}
            >
              Premium Hybrid
            </button>
            <button
              onClick={() => applyPreset('frosted')}
              className={`preset-chip ${activePreset === 'frosted' ? 'active' : ''}`}
            >
              Pure Frosted (Ref 1)
            </button>
            <button
              onClick={() => applyPreset('clear')}
              className={`preset-chip ${activePreset === 'clear' ? 'active' : ''}`}
            >
              Optical Clear
            </button>
            <button
              onClick={() => applyPreset('crystal')}
              className={`preset-chip ${activePreset === 'crystal' ? 'active' : ''}`}
            >
              Thick Crystal (Ref 2)
            </button>
            <button
              onClick={() => applyPreset('tinted')}
              className={`preset-chip ${activePreset === 'tinted' ? 'active' : ''}`}
            >
              Subtle Tinted
            </button>
          </GlassPanel>

          {/* Expanded Live Parameter Sliders Bar (8 Controls - Task 7) */}
          <GlassPanel className="lab-sliders-bar">
            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Diffusion Blur</span>
                <span className="slider-val">{blurAmount}px</span>
              </div>
              <input
                type="range"
                min="8"
                max="48"
                value={blurAmount}
                onChange={(e) => handleSliderChange(setBlurAmount, Number(e.target.value))}
                aria-label="Diffusion blur slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Optical Transparency</span>
                <span className="slider-val">{fillOpacity}%</span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                value={fillOpacity}
                onChange={(e) => handleSliderChange(setFillOpacity, Number(e.target.value))}
                aria-label="Optical transparency slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Saturation Boost</span>
                <span className="slider-val">{saturationAmount}%</span>
              </div>
              <input
                type="range"
                min="100"
                max="220"
                value={saturationAmount}
                onChange={(e) => handleSliderChange(setSaturationAmount, Number(e.target.value))}
                aria-label="Saturation boost slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Surface Tint</span>
                <span className="slider-val">{tintIntensity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="35"
                value={tintIntensity}
                onChange={(e) => handleSliderChange(setTintIntensity, Number(e.target.value))}
                aria-label="Surface tint slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Edge Reflection</span>
                <span className="slider-val">{edgeReflection}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={edgeReflection}
                onChange={(e) => handleSliderChange(setEdgeReflection, Number(e.target.value))}
                aria-label="Edge reflection slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Bevel Highlight</span>
                <span className="slider-val">{bevelIntensity}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={bevelIntensity}
                onChange={(e) => handleSliderChange(setBevelIntensity, Number(e.target.value))}
                aria-label="Bevel highlight slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Simulated Thickness</span>
                <span className="slider-val">{thicknessAmount}px</span>
              </div>
              <input
                type="range"
                min="4"
                max="28"
                value={thicknessAmount}
                onChange={(e) => handleSliderChange(setThicknessAmount, Number(e.target.value))}
                aria-label="Simulated thickness slider"
                className="lab-range"
              />
            </div>

            <div className="slider-item">
              <div className="slider-header">
                <span className="slider-title">Ambient Shadow</span>
                <span className="slider-val">{ambientShadow}px</span>
              </div>
              <input
                type="range"
                min="16"
                max="64"
                value={ambientShadow}
                onChange={(e) => handleSliderChange(setAmbientShadow, Number(e.target.value))}
                aria-label="Ambient shadow slider"
                className="lab-range"
              />
            </div>

            <div className="sliders-footer-row">
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
                <span>Reset Defaults</span>
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
              SECTION 1: THE 4 OPTICAL MATERIAL PROFILES (Task 2)
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <div className="section-heading">
              <div className="section-eyebrow">
                <Layers size={16} /> MATERIAL TAXONOMY MATRIX
              </div>
              <h2>Optical Material Variations</h2>
              <p>
                Visual comparison demonstrating four distinct glass physics profiles over identical background elements. Notice how the underlying patterns remain visible through all surfaces.
              </p>
            </div>

            <div className="matrix-grid">
              {/* Profile A: Heavily Frosted Glass (Reference 1) */}
              <div className="matrix-card-wrap">
                <div className="matrix-card-header">
                  <span className="matrix-pill">REFERENCE 1</span>
                  <h3>Heavily Frosted Glass</h3>
                  <span className="matrix-meta">blur: 32px · sat: 175% · deep diffusion</span>
                </div>
                <GlassPanel variant="frosted" className="matrix-card-content">
                  <div className="material-spec-details">
                    <p className="spec-desc">
                      Strong optical diffusion softening underlying shapes into luminous gradients while preserving true background light transmission.
                    </p>
                    <div className="spec-indicators">
                      <span className="indicator-chip">Strong Diffusion</span>
                      <span className="indicator-chip">Diffuse Visibility</span>
                      <span className="indicator-chip">Directional Sheen</span>
                    </div>
                  </div>
                </GlassPanel>
              </div>

              {/* Profile B: Clear Optical Glass */}
              <div className="matrix-card-wrap">
                <div className="matrix-card-header">
                  <span className="matrix-pill">OPTICAL LENS</span>
                  <h3>Clear Optical Glass</h3>
                  <span className="matrix-meta">blur: 12px · sat: 130% · high clarity</span>
                </div>
                <GlassPanel variant="clear" className="matrix-card-content">
                  <div className="material-spec-details">
                    <p className="spec-desc">
                      Minimal diffusion with maximum optical transparency. The underlying chart and shapes remain crisp with sharp specular borders.
                    </p>
                    <div className="spec-indicators">
                      <span className="indicator-chip">High Transparency</span>
                      <span className="indicator-chip">Crisp Edges</span>
                      <span className="indicator-chip">Sharp Refraction</span>
                    </div>
                  </div>
                </GlassPanel>
              </div>

              {/* Profile C: Thick 3D Glass (Reference 2) */}
              <div className="matrix-card-wrap">
                <div className="matrix-card-header">
                  <span className="matrix-pill">REFERENCE 2</span>
                  <h3>Thick 3D Glass</h3>
                  <span className="matrix-meta">12mm Extrusion · Beveled Chamfer · 3D Tilt</span>
                </div>
                <GlassCard variant="thick-3d" interactive perspectiveTilt={enableTilt} className="matrix-card-content">
                  <div className="material-spec-details">
                    <p className="spec-desc">
                      Physical chamfer bevels, simulated sidewall thickness via multi-tier ambient shadows, and an iridescent prism edge rim.
                    </p>
                    <div className="spec-indicators">
                      <span className="indicator-chip">Physical Bevel</span>
                      <span className="indicator-chip">Iridescent Edge</span>
                      <span className="indicator-chip">Simulated Sidewall</span>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Profile D: Lightly Tinted Glass */}
              <div className="matrix-card-wrap">
                <div className="matrix-card-header">
                  <span className="matrix-pill">SPECTRAL DISPERSION</span>
                  <h3>Lightly Tinted Glass</h3>
                  <span className="matrix-meta">Sapphire & Iris Prism · Spectral Refraction</span>
                </div>
                <GlassPanel variant="tinted" className="matrix-card-content">
                  <div className="material-spec-details">
                    <p className="spec-desc">
                      Subtle chromatic prism dispersion adding ethereal blue-violet depth to directional surface light without concealing background details.
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
              SECTION 2: REBUILT LAYERED GLASS STACK (Task 5)
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <div className="section-heading">
              <div className="section-eyebrow">
                <Box size={16} /> MULTI-PLANE OPTICAL OCCLUSION
              </div>
              <h2>Layered Overlapping Glass Panels</h2>
              <p>
                True 3D physical separation across three Z-depth planes. The underlying high-contrast chart progressively diffuses through consecutive glass surfaces while contact shadows ground each elevated plane.
              </p>
            </div>

            <div className="layered-stack-stage">
              {/* Background Reference High-Contrast Graphic (Underneath all glass) */}
              <div className="stack-underlay-pattern">
                <div className="underlay-color-bars">
                  <div style={{ background: '#EF4444' }} />
                  <div style={{ background: '#F59E0B' }} />
                  <div style={{ background: '#10B981' }} />
                  <div style={{ background: '#06B6D4' }} />
                  <div style={{ background: '#3B82F6' }} />
                  <div style={{ background: '#8B5CF6' }} />
                </div>
                <div className="underlay-text-big">OPTICAL RESOLUTION 2026</div>
                <div className="underlay-radial-target" />
                <div className="underlay-stripe-band" />
              </div>

              {/* Glass Layer 1: Base Floor Panel (Z: 10px, Light Diffusion) */}
              <GlassPanel variant="panel" className="glass-layer layer-1">
                <div className="layer-badge">
                  <span className="layer-dot" /> Layer 01: Substratum Plane (Z: 10px • blur: 14px)
                </div>
                <div className="layer-content">
                  <h4>Atmospheric Base</h4>
                  <p>
                    First translucent pane receiving ambient illumination. Notice how the sharp geometric stripes beneath are gently softened while remaining clearly identifiable.
                  </p>
                </div>
              </GlassPanel>

              {/* Glass Layer 2: Mid Elevated Panel (Z: 40px, Medium Diffusion, Casts shadow on Layer 1) */}
              <div className="glass-layer layer-2 glass-3d-card">
                <div className="layer-badge">
                  <span className="layer-dot" style={{ backgroundColor: '#60A5FA' }} /> Layer 02: Intermediate Plane (Z: 40px • blur: 24px)
                </div>
                <div className="layer-content">
                  <h4>Dual Refractive Convergence</h4>
                  <p>
                    Elevated pane casting a realistic contact shadow directly onto Layer 01. In the overlapping zone, light diffuses through both layers consecutively.
                  </p>
                  <div className="layer-stats">
                    <GlassPill variant="accent" dot>Dual Occlusion</GlassPill>
                    <GlassPill>Contact Shadow: 16px</GlassPill>
                  </div>
                </div>
              </div>

              {/* Glass Layer 3: Apex Floating Card (Z: 80px, Heavy Diffusion, Casts shadow on Layer 2 & 1) */}
              <div className={`glass-layer layer-3 glass-3d-card ${enableTilt ? 'tilt-active' : ''}`}>
                <div className="layer-badge">
                  <span className="layer-dot" style={{ backgroundColor: '#A78BFA' }} /> Layer 03: Apex 3D Control Surface (Z: 80px • blur: 34px)
                </div>
                <div className="layer-content">
                  <h4>Triple Optical Overlap</h4>
                  <p>
                    Uppermost dimensional surface with full chamfer beveling and iridescent rim refraction. Background stripes transmit through all 3 tiers.
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
                    Engineered with React 19, TypeScript 5.7, and Vite 6. Features multi-stage CSS tokenization, directional softbox highlights, and hardware-accelerated transforms.
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
                    <span className="chunk-value">{thicknessAmount}px</span>
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
                    Calculated 45-degree angle reflection boundaries. Specular white top edge catches overhead key light while bottom border grounds the object with realistic contact occlusion.
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
              SECTION 6: DEDICATED 3D GLASS IMAGE FRAME & PB GLASS GEM (Task 8)
              ------------------------------------------------------------------- */}
          <section className="lab-section">
            <div className="section-heading">
              <div className="section-eyebrow">
                <Eye size={16} /> IDENTITY & SATELLITE SYSTEM
              </div>
              <h2>Dedicated 3D Glass Image Frame & PB Glass Gem</h2>
              <p>
                Visual frame with thick beveled borders, internal optical lens chamber, and a faceted thick glass PB identity block floating inside.
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
                  {/* Framed Graphic Representation with Crystalline PB Block */}
                  <div className="photo-placeholder-art">
                    <div className="portrait-geometric-rings" />
                    
                    {/* The Thick 3D Glass PB Identity Gem */}
                    <div className="portrait-glass-gem">
                      <span className="gem-initials">PB</span>
                    </div>

                    <div className="portrait-silhouette" style={{ position: 'absolute', bottom: '0', opacity: 0.35 }}>
                      <div className="silhouette-torso" style={{ width: '160px', height: '60px' }} />
                    </div>
                  </div>
                </GlassImageFrame>

                {/* Satellite Floating Glass Chips */}
                <GlassFloatingElement
                  icon={<Cpu size={16} />}
                  label="IT Engineering"
                  sublabel="SGGSIE&T Nanded"
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
                <h3>Phase 1 & 2 Refinement Readiness</h3>
              </div>
              <div className="summary-checklist-grid">
                <div className="check-item">
                  <div className="check-icon"><Check size={16} /></div>
                  <div className="check-text">
                    <strong>Genuine Background Transparency</strong>
                    <span>Neutral 5–15% opacity fills with real backdrop diffusion, eliminating heavy opaque card backgrounds.</span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon"><Check size={16} /></div>
                  <div className="check-text">
                    <strong>7-Layer 3D Physical Geometry</strong>
                    <span>Polished 45° chamfer bevels, simulated sidewalls, directional softbox highlights, and contact shadows.</span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon"><Check size={16} /></div>
                  <div className="check-text">
                    <strong>High-Contrast Neutral Studio</strong>
                    <span>Tested against resolution line gauges, Siemens star, and color charts to prove real material physics.</span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon"><Check size={16} /></div>
                  <div className="check-text">
                    <strong>8 Real-Time Sliders & 5 Presets</strong>
                    <span>Full control over blur, transparency, saturation, tint, edge sheen, bevels, thickness, and shadows.</span>
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
