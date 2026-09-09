import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import { govtApplicationsList } from '../../../data/governmentData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { Sparkles, ArrowRight } from 'lucide-react';
import './GovApplicationsSection.css';

export default function GovApplicationsSection({ onReviewApplication }) {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="gov-apps-section" ref={sectionRef}>
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="04 — PROPOSAL REVIEW QUEUE"
          title="Applications requiring attention"
          subtitle="Review candidate startups responding to your published challenges and schedule panel evaluation sessions."
        />
      </div>

      <div className="gov-apps-list">
        {govtApplicationsList.map((app, idx) => {
          const cardDelayMs = 150 + idx * 100;
          const badgeDelayMs = cardDelayMs + 120;

          return (
            <div 
              key={app.id} 
              className={`gov-app-card-surface reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${cardDelayMs}ms` }}
            >
              <div className="gov-app-main-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className="gov-app-startup-name">{app.startupName}</span>
                  <div className="badge-match" style={{ fontSize: '0.78rem', padding: '0.25rem 0.65rem' }}>
                    <Sparkles size={12} />
                    <span>{app.matchScore}% MATCH</span>
                  </div>
                </div>
                <span className="gov-app-challenge-title">{app.challengeTitle}</span>
              </div>

              <div className="gov-app-metrics-group">
                <div className="gov-app-metric-unit">
                  <span className="gov-app-lbl">Grant Requested</span>
                  <span className="gov-app-val" style={{ color: 'var(--purple-primary)' }}>{app.requestedGrant}</span>
                </div>

                <div className="gov-app-metric-unit">
                  <span className="gov-app-lbl">Startup Stage</span>
                  <span className="gov-app-val">{app.stage}</span>
                </div>

                <div className="gov-app-metric-unit">
                  <span className="gov-app-lbl">Submitted</span>
                  <span className="gov-app-val">{app.submittedDate}</span>
                </div>

                <div 
                  className={`gov-status-pill ${app.badgeType} reveal-level-4 ${isRevealed ? 'is-revealed' : ''}`}
                  style={{ transitionDelay: `${badgeDelayMs}ms` }}
                >
                  {app.statusBadge}
                </div>
              </div>

              <button 
                className="btn-secondary"
                style={{ padding: '0.7rem 1.35rem', fontSize: '0.88rem' }}
                onClick={() => onReviewApplication && onReviewApplication(app)}
              >
                <span>REVIEW APPLICATION</span>
                <ArrowRight size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
