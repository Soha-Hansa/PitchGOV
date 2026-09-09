import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { govtOverviewMetrics } from '../../../data/governmentData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './GovOverviewSection.css';

function useCounterAnimation(targetValue, isRevealed, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // START ONLY when the metric section enters the viewport!
    if (!isRevealed) return;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - (1 - progress) * (1 - progress);
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

export default function GovOverviewSection() {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.18 });

  return (
    <section className="gov-overview-section" ref={sectionRef}>
      {/* Opening Header Sequence */}
      <div className={`gov-hero-header reveal-level-1 ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="gov-badge-tag">
          <Shield size={14} />
          <span>GOVERNMENT INNOVATION COMMAND CENTER</span>
        </div>
        <h2 className="gov-main-title">
          Turn government challenges<br />into measurable impact.
        </h2>
        <p className="gov-subtitle-text delay-100">
          Monitor active challenges, discover capable startups, track funding, and measure real-world outcomes across public sector deployment programs.
        </p>
      </div>

      {/* 5-Metric Strip */}
      <div className={`gov-metrics-strip reveal-level-2 delay-150 ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="gov-metric-accent" />

        {govtOverviewMetrics.map((m, idx) => (
          <GovMetricColumn 
            key={m.id} 
            metric={m} 
            isRevealed={isRevealed}
            delayMs={200 + idx * 100} 
          />
        ))}
      </div>
    </section>
  );
}

function GovMetricColumn({ metric, isRevealed, delayMs }) {
  // Starts counting ONLY when isRevealed is true upon viewport entrance
  const animatedValue = useCounterAnimation(metric.value, isRevealed);

  return (
    <div 
      className={`gov-metric-col reveal-level-3 ${isRevealed ? 'is-revealed' : ''}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="gov-metric-value-wrap">
        {metric.prefix && <span>{metric.prefix}</span>}
        <span>{animatedValue}</span>
        {metric.suffix && <span style={{ fontSize: '0.7em', color: 'var(--purple-primary)' }}>{metric.suffix}</span>}
      </div>
      <div className="gov-metric-label">{metric.label}</div>
      <div className="gov-metric-trend">{metric.trend}</div>
    </div>
  );
}
