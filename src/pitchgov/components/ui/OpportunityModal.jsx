import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, DollarSign, Calendar, MapPin, Building2, Send } from 'lucide-react';
import './OpportunityModal.css';

export default function OpportunityModal({ opportunity, onClose }) {
  const [hasApplied, setHasApplied] = useState(opportunity?.isApplied || false);

  if (!opportunity) return null;

  const handleApply = () => {
    setHasApplied(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-drawer" onClick={(e) => e.stopPropagation()} data-lenis-prevent="true">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {/* Category & Department */}
        <div className="modal-dept-category">
          <span className="modal-category-tag">{opportunity.category}</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{opportunity.department}</span>
        </div>

        <h2 className="modal-title">{opportunity.title}</h2>

        {/* AI Match Banner */}
        <div className="modal-match-hero-banner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--purple-primary)' }}>
              <Sparkles size={14} />
              <span>AI COMPATIBILITY MATCH</span>
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--purple-dark)' }}>
              {opportunity.matchScore}% Verified Alignment
            </div>
          </div>
          <div className="badge-match" style={{ fontSize: '0.95rem' }}>
            TOP MATCH
          </div>
        </div>

        {/* Key Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '2rem', backgroundColor: 'var(--bg-cream)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 600 }}>GRANT FUNDING</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>{opportunity.funding}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 600 }}>APPLICATION DEADLINE</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>{opportunity.deadline}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 600 }}>TARGET JURISDICTION</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)' }}>{opportunity.location || 'India'}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 600 }}>GRANT PROVIDER</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)' }}>{opportunity.grantProvider || 'Government Agency'}</div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="modal-section-block">
          <div className="modal-section-title">CHALLENGE OVERVIEW</div>
          <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
            {opportunity.description}
          </p>
        </div>

        {/* Requirements */}
        {opportunity.requirements && (
          <div className="modal-section-block">
            <div className="modal-section-title">TECHNICAL REQUIREMENTS</div>
            <ul className="modal-req-list">
              {opportunity.requirements.map((req, idx) => (
                <li key={idx} className="modal-req-item">
                  <CheckCircle2 size={16} color="var(--purple-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button */}
        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
          {hasApplied ? (
            <div className="applied-success-banner">
              <CheckCircle2 size={20} />
              <span>Proposal Submitted! Pitchgov AI has forwarded your EcoTech profile to the evaluation panel.</span>
            </div>
          ) : (
            <button 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}
              onClick={handleApply}
            >
              <Send size={18} />
              <span>Submit Proposal for this Challenge</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
