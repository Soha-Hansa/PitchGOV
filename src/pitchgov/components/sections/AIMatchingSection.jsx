import React from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import MatchNodeVisualization from '../ui/MatchNodeVisualization';
import { aiMatchBreakdown } from '../../data/startupData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './AIMatchingSection.css';

export default function AIMatchingSection() {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="ai-matching-section" ref={sectionRef}>
      {/* STEP 1: Main Heading Reveals */}
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="03 — DEEP AI ALIGNMENT ENGINE"
          title="Why this opportunity matches you."
          subtitle={`Detailed capability analysis for "${aiMatchBreakdown.opportunityTitle}" based on multi-dimensional government requirement parsing.`}
        />
      </div>

      {/* STEP 2: Match Score Container & 94% Score Appears */}
      <div className={`ai-hero-match-box reveal-level-1 delay-150 ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="match-big-score">
          {aiMatchBreakdown.overallScore}%
        </div>
        <div className="match-rating-group">
          <div className="match-rating-badge">
            <Sparkles size={14} />
            <span>{aiMatchBreakdown.matchRating}</span>
          </div>
          <p className="match-rating-subtext">
            Top 2% compatibility rank among registered GovTech startups nationwide.
          </p>
        </div>
      </div>

      {/* STEP 3: Individual Progress Bars Animate 0% -> Target% over 1000ms ONLY on Viewport Reveal */}
      <div className="fit-matrix-grid">
        {aiMatchBreakdown.fitMetrics.map((metric, idx) => (
          <div 
            key={metric.label} 
            className={`fit-metric-item reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
            style={{ transitionDelay: `${250 + idx * 100}ms` }}
          >
            <div className="fit-metric-header">
              <span className="fit-metric-label">{metric.label}</span>
              <span className="fit-metric-score">{metric.score}%</span>
            </div>
            <div className="fit-progress-track">
              <div 
                className="fit-progress-fill" 
                style={{ 
                  width: isRevealed ? `${metric.score}%` : '0%',
                  transition: 'width 1100ms cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDelay: `${350 + idx * 100}ms`
                }}
              />
            </div>
            <span className="fit-metric-desc">{metric.description}</span>
          </div>
        ))}
      </div>

      {/* STEP 4: Editorial Columns & Sequential Why-Match Items */}
      <div className="match-editorial-columns">
        {/* Left Column: Why You Match */}
        <div className={`match-col-card why-match reveal-level-3 delay-400 ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="col-header-title">
            <ShieldCheck size={18} />
            <span>WHY YOU MATCH</span>
          </div>
          <ul className="why-match-list">
            {aiMatchBreakdown.whyYouMatch.map((point, idx) => (
              <li 
                key={idx} 
                className={`why-match-item reveal-level-4 ${isRevealed ? 'is-revealed' : ''}`}
                style={{ transitionDelay: `${500 + idx * 120}ms` }}
              >
                <CheckCircle2 size={18} className="check-icon-purple" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Potential Gap */}
        <div className={`match-col-card potential-gap reveal-level-3 delay-500 ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="col-header-title">
            <AlertTriangle size={18} />
            <span>POTENTIAL GAP</span>
          </div>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)' }}>
            {aiMatchBreakdown.potentialGap.title}
          </h4>
          <p className="gap-paragraph">
            {aiMatchBreakdown.potentialGap.description}
          </p>
        </div>
      </div>

      {/* Node Visualization */}
      <MatchNodeVisualization data={aiMatchBreakdown.visualizationNodes} isVisible={isRevealed} />
    </section>
  );
}
