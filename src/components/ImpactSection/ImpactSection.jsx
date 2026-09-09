import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImpactVideo from './ImpactVideo';
import StatCounter from './StatCounter';
import './ImpactSection.css';

gsap.registerPlugin(ScrollTrigger);

const ImpactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".impact-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      });

      gsap.from(".impact-stat-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: ".impact-stats-grid",
          start: "top 85%",
          once: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="impact-section" id="impact">
      <div className="impact-header">
        <div className="impact-subtitle">Real-World Scale</div>
        <h2 className="impact-title">Driving Measurable Impact</h2>
        <p className="impact-description">
          Accelerating government problem-solving while empowering innovative startups to scale rapidly across public sectors.
        </p>
      </div>

      <ImpactVideo />

      <div className="impact-stats-grid">
        <div className="impact-stat-card">
          <div className="stat-number">
            <StatCounter endValue={500} decimals={0} suffix="+" />
          </div>
          <div className="stat-label">Public Tenders Matched</div>
        </div>
        <div className="impact-stat-card">
          <div className="stat-number">
            <StatCounter endValue={98.4} decimals={1} suffix="%" />
          </div>
          <div className="stat-label">AI Matching Precision</div>
        </div>
        <div className="impact-stat-card">
          <div className="stat-number">
            <StatCounter endValue={3.5} decimals={1} suffix="x" />
          </div>
          <div className="stat-label">Faster Procurement</div>
        </div>
        <div className="impact-stat-card">
          <div className="stat-number">
            <StatCounter endValue={45} decimals={0} prefix="$" suffix="M+" />
          </div>
          <div className="stat-label">Capital Unlocked</div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
