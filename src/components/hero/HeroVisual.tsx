import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Laptop, UserCheck } from 'lucide-react';
import { GlassFloatingElement } from '../glass/GlassFloatingElement';

export interface HeroVisualProps {
  className?: string;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    // Controlled, restrained tilt (max ~7 deg)
    setTilt({
      x: Number((x * 14).toFixed(2)),
      y: Number((-y * 14).toFixed(2)),
    });
  };

  const handlePointerEnter = () => {
    if (!reducedMotion) setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // 3D Parallax Matrix
  const enclosureTransform = reducedMotion
    ? 'none'
    : `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${isHovered ? 1.015 : 1})`;

  const chamberTransform = reducedMotion
    ? 'none'
    : `translateZ(35px) translate3d(${tilt.x * 0.7}px, ${-tilt.y * 0.7}px, 0)`;

  const gemTransform = reducedMotion
    ? 'none'
    : `translateZ(55px) translate3d(${tilt.x * 1.1}px, ${-tilt.y * 1.1}px, 0)`;

  const satellite1Transform = reducedMotion
    ? 'none'
    : `translateZ(75px) translate3d(${tilt.x * 1.6}px, ${-tilt.y * 1.6}px, 0) rotate(-2.5deg)`;

  const satellite2Transform = reducedMotion
    ? 'none'
    : `translateZ(85px) translate3d(${tilt.x * 1.9}px, ${-tilt.y * 1.9}px, 0) rotate(2deg)`;

  const satellite3Transform = reducedMotion
    ? 'none'
    : `translateZ(65px) translate3d(${tilt.x * 1.4}px, ${-tilt.y * 1.4}px, 0) rotate(-1.5deg)`;

  return (
    <div
      ref={containerRef}
      className={`hero-visual-stage ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      aria-label="3D Frosted Glass Identity Enclosure"
    >
      {/* Environmental Caustic Light Field */}
      <div className="hero-visual-caustic-field" aria-hidden="true" />

      {/* Primary 3D Dimensional Glass Enclosure Slab */}
      <div
        className="hero-enclosure-slab"
        style={{ transform: enclosureTransform }}
      >
        {/* Overhead Specular Light Crescent (135° direction) */}
        <div className="enclosure-specular-crescent" aria-hidden="true" />

        {/* Polished Glass Sidewall Rim Highlight */}
        <div className="enclosure-sidewall-rim" aria-hidden="true" />

        {/* Internal Refractive Chamber (Sub-surface Optical Layer) */}
        <div
          className="enclosure-refractive-chamber"
          style={{ transform: chamberTransform }}
        >
          {/* Concentric Optical Lens Ripples */}
          <div className="chamber-lens-ripples" aria-hidden="true">
            <div className="lens-ripple ripple-outer" />
            <div className="lens-ripple ripple-mid" />
          </div>

          {/* PB Crystalline Glass Monogram Jewel */}
          <div
            className="pb-crystal-gem"
            style={{ transform: gemTransform }}
            title="PB Crystalline Monogram"
          >
            {/* Top Chamfer Specular Highlight */}
            <div className="gem-specular-facet" aria-hidden="true" />
            {/* Sapphire Translucent Core */}
            <div className="gem-sapphire-core">
              <span className="gem-monogram-initials">PB</span>
            </div>
            {/* Internal Caustic Reflection */}
            <div className="gem-caustic-glow" aria-hidden="true" />
          </div>

          {/* Portrait Status Capsule (Preserved Photo Aperture) */}
          <div
            className="portrait-status-capsule"
            title="Photo aperture reserved for verified portrait"
          >
            <span className="status-bead" aria-hidden="true" />
            <span>Portrait • Photo Pending</span>
          </div>

          {/* Sub-lens Reflection Gradient */}
          <div className="enclosure-bottom-bevel" aria-hidden="true" />
        </div>
      </div>

      {/* =======================================================================
          Floating 3D Optical Glass Satellite Chips (3 Elements)
          ======================================================================= */}
      
      {/* Satellite 1: CORE FOCUS / DSA & Web Systems (Top-Left) */}
      <div
        className="satellite-wrapper satellite-focus"
        style={{ transform: satellite1Transform }}
      >
        <GlassFloatingElement
          icon={<Terminal size={15} aria-hidden="true" />}
          label="CORE FOCUS"
          sublabel="DSA & Web Systems"
          className="hero-satellite-card"
        />
      </div>

      {/* Satellite 2: ENVIRONMENT / Linux & Modern Tools (Mid-Right) */}
      <div
        className="satellite-wrapper satellite-env"
        style={{ transform: satellite2Transform }}
      >
        <GlassFloatingElement
          icon={<Laptop size={15} aria-hidden="true" />}
          label="ENVIRONMENT"
          sublabel="Linux & Modern Tools"
          className="hero-satellite-card"
        />
      </div>

      {/* Satellite 3: IDENTITY / Pratik Bisen (Bottom-Left) */}
      <div
        className="satellite-wrapper satellite-identity"
        style={{ transform: satellite3Transform }}
      >
        <GlassFloatingElement
          icon={<UserCheck size={15} aria-hidden="true" />}
          label="IDENTITY"
          sublabel="Pratik Bisen"
          className="hero-satellite-card"
        />
      </div>
    </div>
  );
};
