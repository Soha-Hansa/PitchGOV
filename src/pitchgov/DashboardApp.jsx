import React, { useState, useEffect } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import GovDashboardLayout from './components/government/GovDashboardLayout';
import './index.css';

export default function DashboardApp({ onBack }) {
  // Check URL path or local state for active view
  const [activePortal, setActivePortal] = useState(() => {
    return window.location.pathname.startsWith('/government') ? 'government' : 'startup';
  });

  useEffect(() => {
    const handlePopState = () => {
      setActivePortal(window.location.pathname.startsWith('/government') ? 'government' : 'startup');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const switchPortal = (portal) => {
    setActivePortal(portal);
    const newPath = portal === 'government' ? '/government' : '/';
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pitchgov-app">
      {/* Floating Global Portal Toggle Bar */}
      <div 
        style={{
          position: 'fixed',
          top: '14px',
          right: '24px',
          zIndex: 150,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'var(--surface-card)',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-pill)',
          padding: '0.3rem 0.4rem',
          boxShadow: 'var(--shadow-hover)'
        }}
      >
        {onBack && (
          <button
            onClick={onBack}
            style={{
              background: 'transparent',
              color: 'var(--text-muted)',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              padding: '0.4rem 1rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginRight: '0.5rem'
            }}
          >
            ✕ CLOSE
          </button>
        )}
        <button
          onClick={() => switchPortal('startup')}
          style={{
            background: activePortal === 'startup' ? 'var(--purple-deep)' : 'transparent',
            color: activePortal === 'startup' ? '#ffffff' : 'var(--text-muted)',
            border: 'none',
            borderRadius: 'var(--radius-pill)',
            padding: '0.4rem 1rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          STARTUP DASHBOARD
        </button>

        <button
          onClick={() => switchPortal('government')}
          style={{
            background: activePortal === 'government' ? 'var(--purple-deep)' : 'transparent',
            color: activePortal === 'government' ? '#ffffff' : 'var(--text-muted)',
            border: 'none',
            borderRadius: 'var(--radius-pill)',
            padding: '0.4rem 1rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          GOVERNMENT PORTAL
        </button>
      </div>

      {activePortal === 'government' ? (
        <GovDashboardLayout onSwitchToStartupView={() => switchPortal('startup')} />
      ) : (
        <DashboardLayout />
      )}
    </div>
  );
}
