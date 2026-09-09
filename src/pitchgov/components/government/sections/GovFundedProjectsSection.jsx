import React from 'react';
import { Check, Clock, ShieldCheck } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';
import { govtFundedProject } from '../../../data/governmentData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './GovFundedProjectsSection.css';

export default function GovFundedProjectsSection() {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="gov-projects-section" ref={sectionRef}>
      {/* Header */}
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="05 — EXECUTION & MILESTONES"
          title="From selection to execution"
          subtitle="Track active government projects after grant approval, monitor milestone deliverables, and oversee capital disbursements."
        />
      </div>

      {/* Main Project Card Summary */}
      <div className={`gov-project-main-card reveal-level-1 delay-150 ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="gov-proj-header-info">
          <span className="gov-proj-dept-tag">{govtFundedProject.department}</span>
          <h3 className="gov-proj-title">{govtFundedProject.title}</h3>
          <div className="gov-proj-startup-badge">
            <ShieldCheck size={14} />
            <span>Awardee: {govtFundedProject.startupName} ({govtFundedProject.releasedAmount} / {govtFundedProject.totalGrant} Released)</span>
          </div>
        </div>

        <div className="gov-proj-progress-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)' }}>
              Overall Progress ({govtFundedProject.currentMilestone})
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--purple-primary)' }}>
              {govtFundedProject.overallProgress}%
            </span>
          </div>

          <div className="gov-bar-track">
            <div 
              className="gov-bar-fill" 
              style={{ 
                width: isRevealed ? `${govtFundedProject.overallProgress}%` : '0%',
                transition: 'width 1100ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: '300ms' 
              }} 
            />
          </div>

          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
            <Clock size={14} color="var(--purple-primary)" />
            <span>Next Milestone: {govtFundedProject.nextMilestone} ({govtFundedProject.dueDays} days remaining)</span>
          </div>
        </div>
      </div>

      {/* Progressive Milestone Roadmap Stepper */}
      <div className="gov-roadmap-grid">
        {govtFundedProject.roadmap.map((step, idx) => {
          const stepDelayMs = 350 + idx * 120;
          return (
            <div 
              key={step.label} 
              className={`gov-milestone-step-box ${step.status} reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${stepDelayMs}ms` }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>{step.label}</span>
                <div className={`roadmap-icon-indicator ${step.status}`}>
                  {step.status === 'completed' && <Check size={14} strokeWidth={3} />}
                  {step.status === 'active' && '●'}
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{step.detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
