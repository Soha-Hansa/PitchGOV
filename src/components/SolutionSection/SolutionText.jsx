import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SolutionText = () => {
  const container = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-up animation for the heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", 
          once: true
        },
        duration: 1,
        y: 40,
        opacity: 0,
        ease: "power3.out"
      });

      // Simple fade-up animation for the paragraph, slightly delayed
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%", 
          once: true
        },
        duration: 1,
        y: 40,
        opacity: 0,
        delay: 0.2,
        ease: "power3.out"
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="solution-text-container">
      <h2 ref={headingRef} className="solution-heading">
        <div className="solution-heading-row">
          <span>Bridge The <span className="highlight-text">Gap.</span></span>
        </div>
        <div className="solution-heading-row">
          <span>Accelerate <span className="highlight-text">Innovation.</span></span>
        </div>
      </h2>
      <p ref={paragraphRef} className="solution-paragraph">
        Pitch-Gov eliminates bureaucratic hurdles, replacing them with a streamlined, fast-tracked digital pipeline. We connect government needs directly with vetted startup innovations, ensuring rapid deployment and immense public impact.
      </p>
    </div>
  );
};

export default SolutionText;
