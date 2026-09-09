import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import OpportunityCard from '../ui/OpportunityCard';
import { recommendedOpportunities } from '../../data/startupData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './OpportunitySection.css';

export default function OpportunitySection({ onSelectOpportunity }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  const filters = ['ALL', 'ENVIRONMENT', 'AGRITECH', 'WATER & SANITATION', 'HEALTHCARE GOV'];

  const filteredOpportunities = recommendedOpportunities.filter((opp) => {
    if (selectedFilter === 'ALL') return true;
    return opp.category.toUpperCase() === selectedFilter.toUpperCase();
  });

  return (
    <section className="opportunity-section" ref={sectionRef}>
      {/* Editorial Header Sequence: Heading @ 0ms, Subtitle @ 100ms */}
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="02 — HIGH-ALIGNMENT DISCOVERY"
          title="Opportunities worth your attention."
          subtitle="Ranked by how closely they align with your startup's core capabilities, tech stack, and deployment readiness."
        />
      </div>

      {/* Filter Tabs @ 150ms */}
      <div className={`opportunity-filters-row reveal-level-4 delay-150 ${isRevealed ? 'is-revealed' : ''}`}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-chip ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid of Cards: Card 1 @ 200ms, Card 2 @ 300ms, Card 3 @ 400ms, Card 4 @ 500ms */}
      <div className="opportunities-grid">
        {filteredOpportunities.map((opp, idx) => {
          const cardDelayMs = 200 + idx * 100;
          return (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              onSelect={onSelectOpportunity}
              className={`reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${cardDelayMs}ms` }}
            />
          );
        })}
      </div>
    </section>
  );
}
