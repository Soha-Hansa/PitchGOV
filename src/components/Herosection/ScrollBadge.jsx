import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './ScrollBadge.css';

gsap.registerPlugin(ScrollToPlugin);

const ScrollBadge = ({ className = '' }) => {
  const handleScrollToProblem = () => {
    // Ultra-calm, relaxing scroll
    gsap.to(window, {
      duration: 2.5, // Even longer duration for a very slow, majestic scroll
      scrollTo: '.problem-section', // Make sure you have a section with this class in the future
      ease: 'sine.inOut' // 'sine' provides the gentlest, softest deceleration at the end
    });
  };

  return (
    <div 
      onClick={handleScrollToProblem}
      className={`scroll-badge-wrapper magnetic-target cursor-pointer ${className}`}
    >
      {/* Rotating Text Container */}
      <div className="scroll-badge-text-container">
        <svg
          viewBox="0 0 100 100"
          className="scroll-badge-svg"
        >
          <defs>
            <path
               id="circlePath"
               d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
             />
          </defs>
          <text className="scroll-badge-text" fill="currentColor">
            <textPath href="#circlePath" startOffset="0%" textLength="230">
              • HOW WE ROLL • SCROLL DOWN
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Circle & Down Arrow */}
      <div className="scroll-badge-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default ScrollBadge;
