import React, { useState, useEffect } from 'react';
import { Sparkles, Cpu, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';
import { aiShowcaseData } from '../../../data/governmentData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './GovAIMatchCenterpiece.css';

function useCounterAnimation(targetValue, isRevealed, duration = 1300) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isRevealed) return;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth cubic ease out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * targetValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(step);
  }, [targetValue, isRevealed, duration]);

  return count;
}

export default function GovAIMatchCenterpiece({ onSelectFullEvaluation }) {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  const candidate = aiShowcaseData.selectedCandidate;
  const animatedScore = useCounterAnimation(candidate.matchScore, isRevealed);

  return (
    <section className="gov-ai-centerpiece-section" ref={sectionRef}>
      {/* PHASE 01 — Editorial Header Entrance */}
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="03 — MAGNIFICENT AI MATCH ENGINE"
          title="Let AI find the right teams."
          subtitle="Pitchgov analyzes government requirements against startup capabilities, technology, experience, and readiness to identify the strongest potential matches."
        />
      </div>

      {/* Challenge Context Header Bar */}
      <div className={`ai-challenge-context-bar reveal-level-1 delay-100 ${isRevealed ? 'is-revealed' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Layers size={18} color="var(--purple-primary)" />
          <span className="ai-context-title">Target Challenge: {aiShowcaseData.challengeTitle}</span>
        </div>
        <div className="ai-context-pills">
          <span className="cap-badge reveal-level-4" style={{ backgroundColor: 'var(--lavender-soft)', color: 'var(--purple-deep)', fontWeight: 700 }}>
            {aiShowcaseData.analyzedStartupsCount} Startups Analyzed
          </span>
          <span className="cap-badge reveal-level-4 delay-100" style={{ backgroundColor: 'var(--status-success-bg)', color: 'var(--status-success)', fontWeight: 700 }}>
            {aiShowcaseData.strongMatchesCount} Strong Matches Found
          </span>
        </div>
      </div>

      {/* PHASES 02–05 — Master AI Node Flow & SVG Path Drawing Canvas */}
      <div className={`ai-hero-flow-canvas reveal-level-1 delay-200 ${isRevealed ? 'is-revealed' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <span className="text-label-mono">REAL-TIME MATCH EVALUATION FLOW</span>
          <span className="cap-badge" style={{ color: 'var(--status-success)', borderColor: 'rgba(39, 125, 54, 0.3)' }}>
            ● DECISION MATRIX VERIFIED
          </span>
        </div>

        <div className="ai-nodes-three-column">
          {/* Phase 01: Govt Requirement Node */}
          <div className={`ai-node-box reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '300ms' }}>
            <span className="ai-node-tag">GOVERNMENT INPUT NODE</span>
            <h4 className="ai-node-title">Smart Waste Spec</h4>
            <div className="ai-node-capabilities">
              <span className="cap-badge reveal-level-4 delay-100">IoT Fill Telemetry</span>
              <span className="cap-badge reveal-level-4 delay-150">Computer Vision Bin Stream</span>
              <span className="cap-badge reveal-level-4 delay-200">Municipal Fleet Dispatch</span>
            </div>
          </div>

          {/* Phase 03: SVG Connector 1 Drawing Path */}
          <svg className="ai-connector-svg-wrap" viewBox="0 0 70 50">
            <path 
              d="M0 25 H70" 
              stroke="var(--purple-primary)" 
              strokeWidth="2.5" 
              className={`dash-path-draw ${isRevealed ? 'is-drawn' : ''}`} 
              style={{ transitionDelay: '400ms' }}
            />
          </svg>

          {/* Phase 02: Central AI Analysis Engine Container */}
          <div className={`ai-core-analysis-box reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '450ms' }}>
            <div className="ai-core-icon-ring">
              <Cpu size={26} color="#ffffff" />
            </div>
            <span className="ai-core-title">PITCHGOV AI ENGINE v4.2</span>
            <span className="ai-core-subtitle">Vector Capability Match</span>
          </div>

          {/* Phase 03: SVG Connector 2 Drawing Path */}
          <svg className="ai-connector-svg-wrap" viewBox="0 0 70 50">
            <path 
              d="M0 25 H70" 
              stroke="var(--purple-primary)" 
              strokeWidth="2.5" 
              className={`dash-path-draw ${isRevealed ? 'is-drawn' : ''}`} 
              style={{ transitionDelay: '550ms' }}
            />
          </svg>

          {/* Phase 04-05: Dominant Top Matched Candidate (EcoTech) */}
          <div className={`ai-node-box dominant reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '600ms' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="ai-node-tag" style={{ color: 'var(--purple-deep)' }}>TOP CANDIDATE (94%)</span>
              <Sparkles size={14} color="var(--purple-primary)" />
            </div>
            <h4 className="ai-node-title">{candidate.name}</h4>
            <div className="ai-node-capabilities">
              {candidate.technologies.map((t, idx) => (
                <span key={idx} className="cap-badge" style={{ backgroundColor: 'var(--lavender-soft)', color: 'var(--purple-dark)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 06 — THE 94% MOMENT (Climax Reveal) */}
      <div className={`hero-score-banner reveal-level-1 ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '700ms' }}>
        <div className="hero-score-number-big">
          {animatedScore}%
        </div>
        <div className="hero-score-info">
          <div className="hero-score-badge">
            <Sparkles size={14} />
            <span>{candidate.matchRating}</span>
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)' }}>
            {candidate.name} ({candidate.stage})
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            Requested Pilot Grant: <strong>{candidate.requestedGrant}</strong> • Location: <strong>{candidate.location}</strong>
          </p>
        </div>
      </div>

      {/* PHASE 07 — Match Factor Progress Bars (0% -> target% over 1200ms) */}
      <div className="match-factors-grid">
        {candidate.fitMetrics.map((metric, idx) => (
          <div 
            key={metric.label} 
            className={`factor-item reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
            style={{ transitionDelay: `${800 + idx * 100}ms` }}
          >
            <div className="factor-header">
              <span className="factor-lbl">{metric.label}</span>
              <span className="factor-pct">{metric.score}%</span>
            </div>
            <div className="factor-track">
              <div 
                className="factor-fill" 
                style={{ 
                  width: isRevealed ? `${metric.score}%` : '0%',
                  transitionDelay: `${900 + idx * 100}ms`
                }}
              />
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{metric.desc}</span>
          </div>
        ))}
      </div>

      {/* PHASES 08–09 — AI Reasoning (Why This Startup vs Potential Gap) */}
      <div className={`ai-reasoning-cols reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '1100ms' }}>
        {/* Phase 08: Why This Startup */}
        <div className="ai-reason-card why-match">
          <div className="text-label-mono" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--purple-deep)' }}>
            <ShieldCheck size={18} />
            <span>WHY THIS STARTUP?</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {candidate.whyThisMatches.map((point, idx) => (
              <li 
                key={idx} 
                className={`reveal-level-4 ${isRevealed ? 'is-revealed' : ''}`}
                style={{ transitionDelay: `${1150 + idx * 100}ms`, display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-dark)' }}
              >
                <CheckCircle2 size={18} color="var(--purple-primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phase 09: Potential Gap Risk Caution */}
        <div className={`ai-reason-card gap-notes reveal-level-4 ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '1300ms' }}>
          <div className="text-label-mono" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--status-warning)' }}>
            <AlertTriangle size={18} />
            <span>POTENTIAL GAP IDENTIFIED</span>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            {candidate.potentialGap}
          </p>

          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <button 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={onSelectFullEvaluation}
            >
              <span>View Full AI Evaluation Dossier</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
