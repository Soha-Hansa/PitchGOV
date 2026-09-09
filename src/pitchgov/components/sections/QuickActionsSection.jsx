import React from 'react';
import { Search, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { quickActions } from '../../data/startupData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './QuickActionsSection.css';

export default function QuickActionsSection({ onActionClick }) {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.18 });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Search': return <Search size={20} />;
      case 'CheckCircle2': return <CheckCircle2 size={20} />;
      case 'FileText': return <FileText size={20} />;
      default: return <Search size={20} />;
    }
  };

  return (
    <section className="quick-actions-section" ref={sectionRef}>
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="06 — RECOMMENDED NEXT STEPS"
          title="What's next?"
          subtitle="Accelerate your grant application workflow with targeted actions."
        />
      </div>

      <div className="quick-actions-grid">
        {quickActions.map((action, idx) => {
          const cardDelayMs = 150 + idx * 100;
          return (
            <div 
              key={action.id} 
              className={`quick-action-card reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${cardDelayMs}ms` }}
              onClick={() => onActionClick && onActionClick(action)}
            >
              <div className="action-top-row">
                <div className="action-icon-pill">
                  {getIcon(action.icon)}
                </div>
                <span className="action-badge">{action.badge}</span>
              </div>

              <div>
                <h3 className="action-title">{action.title}</h3>
                <p className="action-subtitle">{action.subtitle}</p>
              </div>

              <div className="action-bottom-arrow">
                <span>PROCEED</span>
                <ArrowRight size={16} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
