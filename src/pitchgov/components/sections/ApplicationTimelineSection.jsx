import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { applicationsList } from '../../data/startupData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ApplicationTimelineSection.css';

export default function ApplicationTimelineSection({ onSelectApplication }) {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="applications-section" ref={sectionRef}>
      {/* Section Header */}
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="04 — PIPELINE TRACKING"
          title="Your applications."
          subtitle="Keep track of every opportunity you’ve pursued and monitor real-time review progress by government evaluation boards."
        />
      </div>

      <div className="applications-list-container">
        {applicationsList.map((app, appIdx) => {
          const progressPercent = (app.currentStageIndex / (app.stages.length - 1)) * 100;
          const containerDelay = 150 + appIdx * 150;

          return (
            <div 
              key={app.id} 
              className={`application-card-surface reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${containerDelay}ms` }}
            >
              {/* Header */}
              <div className="app-card-header">
                <div className="app-title-group">
                  <span className="app-dept-tag">{app.department}</span>
                  <h3 className="app-opportunity-title">{app.opportunityTitle}</h3>
                </div>

                <div className={`app-status-badge ${app.badgeType}`}>
                  {app.statusBadge}
                </div>
              </div>

              {/* Progress Horizontal Timeline */}
              <div className="timeline-track-wrapper">
                {/* Connector Line Grows Visually via scaleX */}
                <div className="timeline-connector-line">
                  <div 
                    className="timeline-connector-progress reveal-line-grow" 
                    style={{ 
                      width: `${progressPercent}%`,
                      transform: isRevealed ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left center',
                      transition: 'transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)',
                      transitionDelay: `${containerDelay + 200}ms`
                    }}
                  />
                </div>

                {/* Stage Nodes Reveal Sequentially */}
                {app.stages.map((stg, stgIdx) => {
                  let isCompleted = stgIdx < app.currentStageIndex;
                  let isActive = stgIdx === app.currentStageIndex;
                  const nodeDelay = containerDelay + 200 + stgIdx * 120;

                  return (
                    <div 
                      key={stg.name} 
                      className={`timeline-node-col ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''} reveal-level-4 ${isRevealed ? 'is-revealed' : ''}`}
                      style={{ transitionDelay: `${nodeDelay}ms` }}
                    >
                      <div className="timeline-node-circle">
                        {isCompleted && <Check size={12} strokeWidth={3} />}
                        {isActive && <div style={{ width: 8, height: 8, backgroundColor: '#ffffff', borderRadius: '50%' }} />}
                      </div>
                      <span className="timeline-stage-name">{stg.name}</span>
                      <span className="timeline-stage-date">{stg.date}</span>
                    </div>
                  );
                })}
              </div>

              {/* Application Details Footer Bar */}
              <div className={`app-details-grid reveal-level-4 ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: `${containerDelay + 650}ms` }}>
                <div className="app-meta-block">
                  <span className="app-meta-lbl">Submitted</span>
                  <span className="app-meta-val">{app.submittedDate}</span>
                </div>

                <div className="app-meta-block">
                  <span className="app-meta-lbl">Last Update</span>
                  <span className="app-meta-val">{app.lastUpdate}</span>
                </div>

                <div className="app-meta-block">
                  <span className="app-meta-lbl">Next Step</span>
                  <span className="app-meta-val" style={{ color: 'var(--purple-primary)' }}>
                    {app.nextStep}
                  </span>
                </div>

                <button 
                  className="btn-secondary"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
                  onClick={() => onSelectApplication && onSelectApplication(app)}
                >
                  <span>VIEW APPLICATION</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
