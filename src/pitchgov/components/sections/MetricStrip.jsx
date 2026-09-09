import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { overviewMetrics } from '../../data/startupData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './MetricStrip.css';

function useCounterAnimation(targetValue, isRevealed, duration = 900) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // START ONLY when the metric card enters the viewport!
    if (!isRevealed) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth ease out quad curve
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easedProgress * targetValue);
      setCount(currentVal);

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

export default function MetricStrip() {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.18 });

  return (
    <section className="hero-overview-section" ref={sectionRef}>
      {/* Editorial Header (Level 2 Heading reveal) */}
      <div className={`editorial-hero-header reveal-level-2 ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="editorial-badge">
          <Sparkles size={14} />
          <span>STARTUP INTELLIGENCE DASHBOARD</span>
        </div>
        <h2 className="hero-main-title">
          Built for the problems<br />that matter.
        </h2>
        <p className="hero-subtitle-text delay-100">
          Pitchgov continuously finds government opportunities that align with your startup’s capabilities, automating challenge discovery and grant alignment.
        </p>
      </div>

      {/* Horizontal Integrated Metric Strip (Level 1 Major Container) */}
      <div className={`horizontal-metric-strip reveal-level-1 delay-150 ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="metric-strip-accent" />

        {overviewMetrics.map((m, idx) => (
          <MetricColumn 
            key={m.id} 
            metric={m} 
            isRevealed={isRevealed} 
            delayClass={`delay-${(idx + 1) * 100}`}
          />
        ))}
      </div>
    </section>
  );
}

function MetricColumn({ metric, isRevealed, delayClass }) {
  // Number counting starts ONLY when isRevealed becomes true
  const animatedValue = useCounterAnimation(metric.value, isRevealed);

  return (
    <div className={`metric-col reveal-level-3 ${delayClass} ${isRevealed ? 'is-revealed' : ''}`}>
      <div className="metric-number-wrapper">
        {metric.prefix && <span className="metric-prefix">{metric.prefix}</span>}
        <span>{animatedValue}</span>
        {metric.suffix && <span className="metric-suffix">{metric.suffix}</span>}
      </div>
      <div className="metric-label-title">{metric.label}</div>
      <div className="metric-trend-tag">{metric.trend}</div>
    </div>
  );
}
