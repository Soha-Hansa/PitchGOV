import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlowNode from './FlowNode';
import { FlowArrow, VerticalArrow } from './FlowArrow';

gsap.registerPlugin(ScrollTrigger);

const FlowDiagram = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Animates when diagram enters viewport
          toggleActions: "play none none reverse", // Reverses when scrolling back up!
        }
      });

      // Sequential logical reveal of the flowchart
      tl.from(".node-gov, .node-startups", {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.2, ease: "power3.out"
      })
      .from(".right-arrow, .left-arrow", {
        scaleX: 0, opacity: 0, duration: 0.5, stagger: 0.2, ease: "power2.out", transformOrigin: "center"
      }, "-=0.3")
      .from(".node-ai", {
        scale: 0.5, opacity: 0, duration: 0.7, ease: "back.out(1.7)"
      }, "-=0.2")
      .from(".center-flow .vertical-arrow:first-child", {
        scaleY: 0, opacity: 0, duration: 0.4, transformOrigin: "top", ease: "power2.out"
      }, "-=0.2")
      .from(".node-collab", {
        y: -30, opacity: 0, duration: 0.6, ease: "back.out(1.2)"
      }, "-=0.1")
      .from(".center-flow .vertical-arrow:last-of-type", {
        scaleY: 0, opacity: 0, duration: 0.4, transformOrigin: "top", ease: "power2.out"
      }, "-=0.2")
      .from(".node-impact", {
        y: -30, scale: 0.8, opacity: 0, duration: 0.7, ease: "back.out(1.5)"
      }, "-=0.1");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <DiagramWrapper ref={containerRef}>
      <div className="flow-container">
        {/* Top Row: Gov - AI - Startups */}
        <div className="row top-row">
          
          <FlowNode 
            className="node-gov"
            title="Government"
            subtitle="Real-world problems"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M21 21v-4"/><path d="M3 21v-4"/><path d="M5 17V9"/><path d="M19 17V9"/><path d="M9 17V9"/><path d="M15 17V9"/><path d="M12 9V5"/><path d="M12 5L3 9"/><path d="M12 5l9 4"/><path d="M14 5l-2-2-2 2"/></svg>}
          />

          <FlowArrow direction="right" label={<span>Post<br/>Challenges</span>} />

          <FlowNode 
            className="node-ai"
            title="AI Matching"
            subtitle="Right problems. Right startups."
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>}
          />

          <FlowArrow direction="left" label={<span>Submit<br/>Solutions</span>} />

          <FlowNode 
            className="node-startups"
            title="Startups"
            subtitle="Innovative solutions"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>}
          />
          
        </div>

        {/* Center Vertical Flow */}
        <div className="center-flow">
          <VerticalArrow label="Match" />

          <FlowNode 
            className="node-collab"
            title="Collaborate"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>}
          />

          <VerticalArrow />

          <FlowNode 
            className="node-impact"
            title="Greater Impact"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>}
          />
        </div>

      </div>
    </DiagramWrapper>
  );
}

const DiagramWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Scale down slightly to ensure it fits beautifully on smaller laptops */
  transform: scale(0.9);
  transform-origin: center;

  .flow-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
  }

  .top-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
    z-index: 10;
  }

  .node {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 1rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    min-width: 160px;
  }

  .node h4 {
    margin: 0.5rem 0 0 0;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .node p {
    margin: 0.25rem 0 0 0;
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }

  /* Specific Node Colors */
  .node-gov {
    background-color: #fdf6e3;
    color: #1a1a2e;
  }
  .node-gov .icon { color: #555; }

  .node-ai {
    background-color: #FFFBE6;
    color: #1a1a2e;
    min-width: 200px;
    transform: scale(1.1); /* Slightly larger */
  }
  .node-ai .icon { color: #E98B50; }

  .node-startups {
    background-color: #FFFBE6;
    color: #1a1a2e;
  }
  .node-startups .icon { color: #BC4F4F; }

  .node-collab {
    background-color: #F3CD97;
    color: #1a1a2e;
    padding: 1rem 3rem;
    border-radius: 8px;
    flex-direction: row;
    gap: 0.5rem;
  }
  .node-collab h4 { margin: 0; }
  .node-collab .icon { width: 24px; height: 24px; margin: 0; color: #BC4F4F; }

  .node-impact {
    background-color: #BC4F4F;
    color: #ffffff;
    padding: 1rem 3rem;
    border-radius: 8px;
    flex-direction: row;
    gap: 0.5rem;
  }
  .node-impact h4 { margin: 0; }
  .node-impact .icon { width: 24px; height: 24px; margin: 0; }

  /* Arrows */
  .arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 1rem;
    position: relative;
    top: -15px;
  }
  .arrow-line {
    width: 100%;
    height: 20px;
    display: flex;
  }
  .arrow-line svg {
    width: 100%;
    height: 100%;
  }

  .arrow-label {
    font-size: 0.75rem;
    color: #888;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 5px;
    text-align: center;
    white-space: nowrap;
  }

  .center-flow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .vertical-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
  }

  /* Note: Recreating the curved dotted arrows purely in HTML/SVG without exact dimensions is very fragile. 
     We are omitting the complex curved arrows for now to ensure perfect responsive layout of the core flowchart nodes. */
  .return-arrows {
    display: none; 
  }

  /* Cool flowing "Marching Ants" animation for the arrows */
  .flowing-path {
    animation: flowLine 1.5s linear infinite reverse;
  }
  
  @keyframes flowLine {
    to {
      stroke-dashoffset: 8;
    }
  }
`;

export default FlowDiagram;
