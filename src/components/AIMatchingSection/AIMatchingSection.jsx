import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AIMatchingText from './components/AIMatchingText';
import AIMatchingDiagram from './components/AIMatchingDiagram';
import AIMatchingVideo from './components/AIMatchingVideo';
import './AIMatchingSection.css';

gsap.registerPlugin(ScrollTrigger);

const AIMatchingSection = () => {
  const sectionRef = useRef(null);
  const diagramRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true
        }
      });

      // 1. Text fades in
      tl.from(".ai-match-content h2, .ai-match-content p", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // 2. Source Node drops in
      tl.to(".source-node", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.5)"
      }, "-=0.4");

      // 3. Top Line draws down
      tl.to(".top-line", {
        scaleY: 1,
        duration: 0.4,
        ease: "power2.inOut"
      });

      // 4. AI Engine pops in
      tl.to(".engine-core", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          if (diagramRef.current) {
            diagramRef.current.startPulse();
          }
        }
      });

      // 5. Bottom Line draws down
      tl.to(".bottom-line", {
        scaleY: 1,
        duration: 0.4,
        ease: "power2.inOut"
      }, "-=0.1");

      // 6. Target nodes appear
      tl.to(".target-node", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.2)"
      });

      // 7. Scanning Effect: Criteria checkmarks appear sequentially
      tl.to(".criterion", {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ai-match-section">
      <div className="ai-match-container">
        <AIMatchingText />
        <AIMatchingDiagram ref={diagramRef} />
      </div>
      <AIMatchingVideo />
    </section>
  );
};

export default AIMatchingSection;
