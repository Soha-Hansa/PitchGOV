/**
 * PITCHGOV CENTRAL COLOR CONTROL SYSTEM
 * 
 * Edit any hex code or RGB value in this file to globally change 
 * the entire Pitchgov design system color theme across all components.
 */

export const colors = {
  // Brand Primary Accents (From Official Pitchgov Landing Page & Swatch System)
  purplePrimary: '#7052C4',   // Pitchgov Electric Violet
  purpleHover: '#5C3FB2',     // Hover Violet
  purpleDeep: '#4A328E',      // Deep Royal Violet (Bottom Swatch)
  purpleDark: '#301E60',      // Deepest Charcoal Violet
  purpleGlow: 'rgba(74, 50, 142, 0.18)',

  // Surfaces & Background Canvas
  bgCanvas: '#F7F2FC',        // Soft background canvas
  bgCanvasSubtle: '#F2EAFA',  // Section background tint
  bgGridColor: 'rgba(112, 82, 196, 0.08)', // Fine tech grid line overlay
  
  // Surfaces (Noticeable Lighter Shade of Purple #714C96)
  surfaceWhite: '#FFFFFF',    // Crisp white for sidebar & navbar
  surfaceCard: '#D4C7EB',     // Noticeable lighter shade of purple (#714C96) for cards
  surfaceSubtle: '#C2B0E0',   // Deeper container tint

  // Soft Lavender Accents & Lilac
  lavenderSoft: '#C9B5E3',
  lavenderLight: '#D9CEEE',
  lilacLight: '#BFAADA',

  // Typography Hierarchy (Tuned for AAA Legibility on #D4C7EB Purple Cards)
  textDark: '#13092B',        // High-contrast deep navy charcoal for headings
  textBody: '#231845',        // Rich dark purple slate for body text
  textMuted: '#1E0280',       // High-contrast deep indigo for subtitles & metadata labels
  textSubtle: '#1E0280',      // Micro labels (Submitted, Last update, etc.)

  // Borders & Dividers
  borderLight: 'rgba(74, 50, 142, 0.18)',
  borderSubtle: 'rgba(17, 14, 27, 0.06)',
  borderStrong: 'rgba(74, 50, 142, 0.35)',

  // Functional Status Tokens
  statusSuccess: '#277D36',
  statusSuccessBg: '#EAF7EC',
  statusWarning: '#E65100',
  statusWarningBg: '#FFF3E0',
  statusInfo: '#7052C4',
  statusInfoBg: '#D9CEEE',

  // Shadows
  shadowSubtle: '0 2px 10px rgba(17, 14, 27, 0.03)',
  shadowCard: '0 4px 24px -4px rgba(70, 43, 143, 0.1), 0 2px 6px -1px rgba(17, 14, 27, 0.03)',
  shadowHover: '0 12px 36px -6px rgba(70, 43, 143, 0.18), 0 4px 12px -2px rgba(17, 14, 27, 0.04)',
  shadowModal: '0 24px 48px -12px rgba(45, 24, 99, 0.22)'
};

export default colors;
