import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FinalCTASection.css';

export default function FinalCTASection({ onExploreClick, onViewMatchesClick }) {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className={`final-cta-section reveal-level-1 ${isRevealed ? 'is-revealed' : ''}`} ref={sectionRef}>
      <div className="final-cta-bg-glow" />

      <div className="final-cta-content">
        {/* Step 1: Heading @ 0ms (50px translateY) */}
        <h2 className={`final-cta-heading reveal-cta-heading ${isRevealed ? 'is-revealed' : ''}`}>
          Your solution.<br />
          Their challenge.<br />
          Real impact.
        </h2>

        {/* Step 2: Supporting text @ 120ms */}
        <p className={`final-cta-subtext reveal-level-4 delay-120 ${isRevealed ? 'is-revealed' : ''}`}>
          Keep exploring opportunities that can turn your startup’s capabilities into solutions for the public good.
        </p>

        {/* Step 3: CTA Buttons @ 220ms */}
        <div className={`final-cta-buttons reveal-level-4 delay-220 ${isRevealed ? 'is-revealed' : ''}`}>
          <button 
            className="btn-primary" 
            style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}
            onClick={onExploreClick}
          >
            <span>Explore Opportunities</span>
            <ArrowRight size={18} />
          </button>

          <button 
            className="btn-secondary" 
            style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}
            onClick={onViewMatchesClick}
          >
            <Sparkles size={17} color="#ffffff" />
            <span>View My Matches</span>
          </button>
        </div>
      </div>
    </section>
  );
}
