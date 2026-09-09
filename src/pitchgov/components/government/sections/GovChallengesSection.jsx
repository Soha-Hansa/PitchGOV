import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import { activeGovtChallenges } from '../../../data/governmentData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import './GovChallengesSection.css';

export default function GovChallengesSection({ onSelectChallenge }) {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="gov-challenges-section" ref={sectionRef}>
      {/* Editorial Header */}
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="02 — ACTIVE CHALLENGE PIPELINE"
          title="Challenges currently in motion"
          subtitle="Government requirements actively attracting high-capability startup solvers across smart cities and rural programs."
        />
      </div>

      {/* Grid of Cards with Level 3 Entrance: translateY(45px) scale(0.98) -> translateY(0) scale(1) */}
      <div className="gov-challenges-grid">
        {activeGovtChallenges.map((ch, idx) => {
          const cardDelayMs = 150 + idx * 110;

          return (
            <div 
              key={ch.id} 
              className={`gov-challenge-card reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${cardDelayMs}ms` }}
            >
              <div>
                <div className="gov-card-top-row">
                  <span className="gov-card-dept-tag">{ch.department}</span>
                  <div className={`gov-status-pill ${ch.badgeType}`}>
                    {ch.status}
                  </div>
                </div>

                <h3 className="gov-card-title">{ch.title}</h3>
                <p className="gov-card-desc">{ch.description}</p>

                {/* Stat Bar */}
                <div className="gov-card-stats-row">
                  <div className="gov-stat-item">
                    <span className="gov-stat-label">AI Matched</span>
                    <span className="gov-stat-val" style={{ color: 'var(--purple-primary)' }}>
                      {ch.matchedStartupsCount} Startups
                    </span>
                  </div>
                  <div className="gov-stat-item">
                    <span className="gov-stat-label">Applications</span>
                    <span className="gov-stat-val">{ch.applicationsCount} Recv</span>
                  </div>
                  <div className="gov-stat-item">
                    <span className="gov-stat-label">Budget Grant</span>
                    <span className="gov-stat-val">{ch.budget}</span>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="gov-card-tech-tags">
                  {ch.techTags.map((tag, tIdx) => (
                    <span key={tIdx} className="gov-tech-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  className="btn-card-action"
                  onClick={() => onSelectChallenge && onSelectChallenge(ch)}
                >
                  <span>VIEW MATCHED TEAMS</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
