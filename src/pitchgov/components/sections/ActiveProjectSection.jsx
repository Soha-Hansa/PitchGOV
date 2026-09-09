import React, { useState, useEffect } from 'react';
import { Check, Clock, DollarSign } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { activeProject } from '../../data/startupData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ActiveProjectSection.css';

function useCounterAnimation(targetValue, isRevealed, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // START ONLY when the metric card enters the viewport!
    if (!isRevealed) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - (1 - progress) * (1 - progress);
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

export default function ActiveProjectSection() {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="active-project-section" ref={sectionRef}>
      {/* Step 1: Header Reveal */}
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="05 — DEPLOYMENT & GOV IMPACT"
          title="From funding to impact."
          subtitle="Track active government pilot projects, milestone disbursements, and real-world municipal performance metrics."
        />
      </div>

      {/* Step 2: Project Header Info & Progress Bar Growth (0% -> 68% over 1100ms) */}
      <div className={`project-top-summary reveal-level-1 delay-150 ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="project-header-info">
          <span className="project-dept-label">{activeProject.govtPartner}</span>
          <h3 className="project-main-title">{activeProject.title}</h3>
          <div className="project-grant-badge">
            <DollarSign size={14} />
            <span>Funding: {activeProject.releasedAmount} / {activeProject.grantTotal} Released</span>
          </div>
        </div>

        <div className="project-progress-card">
          <div className="progress-header-row">
            <span className="overall-progress-title">Overall Progress ({activeProject.currentMilestone})</span>
            <span className="overall-progress-value">{activeProject.overallProgress}%</span>
          </div>
          <div className="project-bar-track">
            <div 
              className="project-bar-fill" 
              style={{ 
                width: isRevealed ? `${activeProject.overallProgress}%` : '0%',
                transition: 'width 1100ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: '300ms'
              }} 
            />
          </div>
          <div className="milestone-due-text">
            <Clock size={14} color="var(--purple-primary)" />
            <span>Next Milestone: {activeProject.nextMilestone} ({activeProject.dueDays} days remaining)</span>
          </div>
        </div>
      </div>

      {/* Step 3: Progressive Milestone Reveal (Completed -> Current -> Upcoming) */}
      <div className="roadmap-line-wrapper">
        {activeProject.roadmap.map((step, idx) => {
          const stepDelay = 350 + idx * 120;
          return (
            <div 
              key={step.label} 
              className={`roadmap-step-box ${step.status} reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${stepDelay}ms` }}
            >
              <div className="roadmap-step-top">
                <span className="roadmap-step-name">{step.label}</span>
                <div className="roadmap-icon-indicator">
                  {step.status === 'completed' && <Check size={14} strokeWidth={3} />}
                  {step.status === 'active' && '●'}
                  {step.status === 'upcoming' && '○'}
                </div>
              </div>
              <p className="roadmap-step-detail">{step.detail}</p>
            </div>
          );
        })}
      </div>

      {/* Step 4: Impact Metrics Reveal + Viewport-Triggered Number Counting */}
      <div className={`impact-kpis-grid reveal-level-1 delay-500 ${isRevealed ? 'is-revealed' : ''}`}>
        {activeProject.impactKPIs.map((kpi, idx) => (
          <KpiMetricCard 
            key={kpi.label} 
            kpi={kpi} 
            isRevealed={isRevealed} 
            delayMs={600 + idx * 100}
          />
        ))}
      </div>
    </section>
  );
}

function KpiMetricCard({ kpi, isRevealed, delayMs }) {
  // Starts counting ONLY when isRevealed is true
  const animatedValue = useCounterAnimation(kpi.value, isRevealed);

  return (
    <div 
      className={`impact-kpi-card reveal-level-4 ${isRevealed ? 'is-revealed' : ''}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="impact-number-wrap">
        <span>{kpi.prefix}</span>
        <span>{animatedValue.toLocaleString()}</span>
        <span>{kpi.suffix}</span>
      </div>
      <div className="impact-label">{kpi.label}</div>
      <div className="impact-detail">{kpi.detail}</div>
    </div>
  );
}
