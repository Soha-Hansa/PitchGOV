import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProblemSection.css';

import Pattern from './Pattern';
import SpinningText from './SpinningText';
import FlowDiagram from './FlowDiagram';

gsap.registerPlugin(ScrollTrigger);

function ProblemSection() {
  const sectionRef = useRef(null);
  const bgBoxRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Create a complex, scrubbed GSAP timeline tied to the scroll position
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%", // Animation starts when section is just peaking in
        end: "top 20%",   // Animation ends when section is near the top
        scrub: 1.5,       // Buttery smooth scrub with slight delay
      }
    });

    // 1. The Background Box morphs from a floating rounded card into the full-screen box
    tl.fromTo(bgBoxRef.current, 
      { 
        scale: 0.85, 
        borderRadius: "80px",
        opacity: 0,
        boxShadow: "0 40px 100px rgba(0,0,0,0.3)"
      },
      { 
        scale: 1, 
        borderRadius: "40px",
        opacity: 1,
        boxShadow: "0 0px 0px rgba(0,0,0,0)",
        ease: "power3.inOut" 
      }
    );

    // 2. The Text Elements stagger and float up one by one as the box expands
    const textElements = contentRef.current.querySelectorAll('.problem-left-text > *');
    
    tl.fromTo(textElements,
      { 
        y: 80, 
        opacity: 0, 
        scale: 0.95,
        filter: "blur(10px)"
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)",
        ease: "power2.out",
        duration: 1,
        stagger: 0.4 // This creates the sequential reveal animation!
      },
      "<0.2" // Starts slightly after the box begins expanding
    );

    // Cleanup ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="problem-section" ref={sectionRef}>
      <div className="problem-bg-box" ref={bgBoxRef}>
        <Pattern />
      </div>
      <div className="problem-content" ref={contentRef}>
        <div className="problem-left-text">
          <h2>
            Government has problems.<br />
            Startups build<SpinningText />
          </h2>
          <h3 className="problem-subtext">But they don't always find each other.</h3>
          <p className="problem-paragraph">
            Traditional procurement takes years, effectively locking out agile innovators. Meanwhile, emerging tech startups struggle to navigate the complex compliance maze. <strong>Pitch-Gov</strong> bridges this broken gap, connecting real public needs with cutting-edge solutions.
          </p>
        </div>
        <div className="problem-right-graphic">
          <FlowDiagram />
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
