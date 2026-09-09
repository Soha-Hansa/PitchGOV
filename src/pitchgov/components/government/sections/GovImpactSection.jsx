import React, { useState, useEffect } from 'react';
import SectionHeading from '../../ui/SectionHeading';
import { govtImpactMetrics, govtSecondaryImpact } from '../../../data/governmentData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './GovImpactSection.css';

function useCounterAnimation(targetValue, isRevealed, duration = 1100) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isRevealed) return;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const val = targetValue % 1 !== 0 
        ? Number((easedProgress * targetValue).toFixed(1)) 
        : Math.floor(easedProgress * targetValue);
      setCount(val);

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

export default function GovImpactSection() {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.18 });

  return (
    <section className="gov-impact-section" ref={sectionRef}>
      {/* Header */}
      <div className={`reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <SectionHeading
          badge="06 — REAL-WORLD CITIZEN OUTCOMES"
          title="Measure what funding makes possible."
          subtitle="Track the real-world outcomes created by government and startup collaboration across municipal and state deployments."
        />
      </div>

      {/* Primary Impact Grid */}
      <div className={`gov-impact-primary-grid reveal-level-1 delay-150 ${isRevealed ? 'is-revealed' : ''}`}>
        {govtImpactMetrics.map((m, idx) => (
          <GovImpactCard 
            key={m.label} 
            metric={m} 
            isRevealed={isRevealed} 
            delayMs={200 + idx * 100} 
          />
        ))}
      </div>

      {/* Secondary Impact Grid */}
      <div className="gov-impact-secondary-grid">
        {govtSecondaryImpact.map((sec, idx) => (
          <div 
            key={sec.label} 
            className={`gov-sec-card reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
            style={{ transitionDelay: `${600 + idx * 100}ms` }}
          >
            <span className="gov-sec-val">{sec.value}</span>
            <span className="gov-sec-title">{sec.label}</span>
            <span className="gov-sec-desc">{sec.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function GovImpactCard({ metric, isRevealed, delayMs }) {
  const animatedValue = useCounterAnimation(metric.value, isRevealed);

  return (
    <div 
      className={`gov-impact-card reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="gov-impact-number-wrap">
        {metric.prefix && <span>{metric.prefix}</span>}
        <span>{animatedValue}</span>
        {metric.suffix && <span style={{ fontSize: '0.7em', color: 'var(--purple-primary)' }}>{metric.suffix}</span>}
      </div>
      <div className="gov-impact-lbl">{metric.label}</div>
      <div className="gov-impact-desc">{metric.detail}</div>
    </div>
  );
}
