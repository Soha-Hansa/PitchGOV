import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { Building2, ArrowRight } from 'lucide-react';
import './GovFinalSection.css';

export default function GovFinalSection({ onSwitchToStartupView }) {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className={`gov-final-section reveal-level-1 ${isRevealed ? 'is-revealed' : ''}`} ref={sectionRef}>
      <div className="final-cta-bg-glow" />

      <div className="gov-final-content">
        <h2 className={`gov-final-heading reveal-cta-heading ${isRevealed ? 'is-revealed' : ''}`}>
          Government challenges.<br />
          Startup innovation.<br />
          Measurable impact.
        </h2>

        <p className={`gov-final-subtext reveal-level-4 delay-120 ${isRevealed ? 'is-revealed' : ''}`}>
          One platform connecting public problems with the teams capable of solving them.
        </p>

        <div className={`reveal-level-4 delay-220 ${isRevealed ? 'is-revealed' : ''}`} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            className="btn-primary" 
            style={{ padding: '0.9rem 2rem', fontSize: '1rem', backgroundColor: '#FFFFFF', color: '#4A328E' }}
            onClick={onSwitchToStartupView}
          >
            <Building2 size={18} />
            <span>Switch to Startup Dashboard View</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
