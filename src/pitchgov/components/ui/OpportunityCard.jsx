import React from 'react';
import { ArrowRight, Sparkles, Clock, Coins } from 'lucide-react';
import './OpportunityCard.css';

export default function OpportunityCard({ opportunity, onSelect, className = '', style = {} }) {
  return (
    <div className={`opportunity-card ${className}`} style={style}>
      <div>
        {/* Top Meta Header */}
        <div className="card-top-header">
          <div className="card-category-dept">
            <span className="card-category">{opportunity.category}</span>
            <span className="card-dept">{opportunity.department}</span>
          </div>

          <div className="card-match-badge" title="AI Capability Alignment Score">
            <Sparkles size={13} />
            <span>{opportunity.matchScore}% MATCH</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="card-title">{opportunity.title}</h3>
        <p className="card-description">{opportunity.description}</p>

        {/* Tag pills */}
        <div className="card-tags-row">
          {opportunity.tags.map((tag, idx) => (
            <span key={idx} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Details */}
      <div className="card-footer">
        <div className="card-meta-group">
          <div className="card-meta-item">
            <span className="card-meta-label">Funding</span>
            <span className="card-meta-value">{opportunity.funding}</span>
          </div>
          <div className="card-meta-item">
            <span className="card-meta-label">Deadline</span>
            <span className="card-meta-value">{opportunity.deadline}</span>
          </div>
        </div>

        <button 
          className="btn-card-action"
          onClick={() => onSelect(opportunity)}
        >
          <span>VIEW OPPORTUNITY</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
