import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 10v11m4-11v11m4-11v11" />
      </svg>
    ),
    title: 'Government Posts a Challenge',
    desc: 'Departments share real-world problems and requirements.',
    color: '#fff9ea',
    iconBg: '#ffedd5',
    iconColor: '#334155'
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="10" r="7" />
        <path d="m21 21-6-6M13 5l2-2m0 0 2 2m-2-2v6" />
      </svg>
    ),
    title: 'AI Finds Relevant Startups',
    desc: 'Our AI matches the challenge with the most relevant startups.',
    color: '#f8f4ff',
    iconBg: '#f3e8ff',
    iconColor: '#BC4F4F'
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
    title: 'Government Evaluates & Selects',
    desc: 'Departments review proposals, evaluate and shortlist the best solutions.',
    color: '#f8f4ff',
    iconBg: '#f3e8ff',
    iconColor: '#BC4F4F'
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22v-8m0 0a4 4 0 0 0-4-4h-1c2 0 4 2 4 4zm0 0a4 4 0 0 1 4-4h1c-2 0-4 2-4 4zM2 22h20" />
      </svg>
    ),
    title: 'Funding → Pilot → Impact',
    desc: 'Selected startups receive funding, implement pilots, and create measurable real-world impact.',
    color: '#f3e8ff',
    iconBg: '#e9d5ff',
    iconColor: '#BC4F4F'
  }
];

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Triggers when the section reaches 75% down the screen
          once: true
        }
      });

      // 1. Fade up the header text smoothly
      tl.from(".hiw-header h2, .hiw-header p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // 2. Stagger in the cards smoothly
      tl.from(".hiw-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.4"); // Overlap slightly with the header animation

      // 3. Fade in the arrows between cards
      tl.from(".hiw-arrow", {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4");

      // 4. Reveal the bottom loop gracefully
      tl.from(".hiw-bottom-loop", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="how-it-works-container">
      <div className="hiw-header">
        <h2>How It Works</h2>
        <p>From government challenges to real-world impact — in four simple steps.</p>
      </div>

      <div className="hiw-flow-wrapper">
        <div className="hiw-flow">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="hiw-card magnetic-target" style={{ backgroundColor: step.color }}>
                <div className="hiw-card-num">{step.num}</div>
                <div className="hiw-card-icon" style={{ backgroundColor: step.iconBg, color: step.iconColor }}>
                  {step.icon}
                </div>
                <h3 className="hiw-card-title">{step.title}</h3>
                <p className="hiw-card-desc">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hiw-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="hiw-bottom-loop">
          <div className="loop-pill">INNOVATION FOR A BETTER TOMORROW</div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
