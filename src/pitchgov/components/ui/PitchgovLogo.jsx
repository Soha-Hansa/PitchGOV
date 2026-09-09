import React from 'react';
import './PitchgovLogo.css';

export default function PitchgovLogo({ size = 'medium', showTagline = false, className = '' }) {
  // Dimension presets
  let markWidth = 42;
  let markHeight = 42;
  let fontSize = '1.35rem';

  if (size === 'small') {
    markWidth = 32;
    markHeight = 32;
    fontSize = '1.1rem';
  } else if (size === 'large') {
    markWidth = 56;
    markHeight = 56;
    fontSize = '1.8rem';
  }

  return (
    <div className={`pitchgov-logo-brand ${className}`}>
      {/* Official Pitchgov Vector Emblem */}
      <div className="pitchgov-logo-symbol" style={{ width: markWidth, height: markHeight }}>
        <svg 
          viewBox="0 0 120 120" 
          width="100%" 
          height="100%" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pitchgovGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F3CD97" />
              <stop offset="50%" stopColor="#E98B50" />
              <stop offset="100%" stopColor="#BC4F4F" />
            </linearGradient>

            <linearGradient id="govPillarsGrad" x1="0" y1="60" x2="60" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E98B50" />
              <stop offset="100%" stopColor="#BC4F4F" />
            </linearGradient>
          </defs>

          {/* Main 'P' Loop Outer Ribbon */}
          <path 
            className="logo-solid-fill"
            d="M38 12 C68 12 108 24 108 52 C108 80 72 88 48 88 L38 88 L38 12 Z" 
            fill="url(#pitchgovGrad)" 
          />

          {/* Cutout Paper Airplane / Rocket Arrow inside 'P' */}
          <path 
            className="logo-cutout-fill"
            d="M48 64 L90 34 L66 48 L60 58 L48 64 Z" 
            fill="#FFFFFF" 
          />

          {/* Government Building Pillars at Bottom-Left Stem */}
          {/* Roof Pediment */}
          <path 
            className="logo-solid-fill"
            d="M12 56 L44 56 L28 42 Z" 
            fill="url(#govPillarsGrad)" 
          />
          {/* Architrave Beam */}
          <rect className="logo-solid-fill" x="14" y="58" width="28" height="5" rx="2" fill="url(#govPillarsGrad)" />
          {/* 3 Pillars */}
          <rect className="logo-solid-fill" x="17" y="66" width="6" height="24" rx="2" fill="url(#govPillarsGrad)" />
          <rect className="logo-solid-fill" x="25" y="66" width="6" height="24" rx="2" fill="url(#govPillarsGrad)" />
          <rect className="logo-solid-fill" x="33" y="66" width="6" height="24" rx="2" fill="url(#govPillarsGrad)" />
          {/* Base Plinth */}
          <rect className="logo-solid-fill" x="12" y="92" width="32" height="6" rx="3" fill="url(#govPillarsGrad)" />
        </svg>
      </div>

      {/* Wordmark & Optional Tagline */}
      <div className="pitchgov-logo-text-group">
        <div className="pitchgov-logo-wordmark" style={{ fontSize }}>
          <span className="wordmark-pitch">Pitch</span>
          <span className="wordmark-gov">gov</span>
        </div>
        {showTagline && (
          <div className="pitchgov-logo-tagline">
            Government Needs <span style={{ opacity: 0.5 }}>|</span> Startup Solutions
          </div>
        )}
      </div>
    </div>
  );
}
