import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import MatchCard from './MatchCard';

const AIMatchingDiagram = forwardRef((props, ref) => {
  const [pulseActive, setPulseActive] = useState(false);

  // Expose the setPulseActive function to the parent (GSAP timeline)
  useImperativeHandle(ref, () => ({
    startPulse: () => setPulseActive(true)
  }));

  return (
    <div className="ai-match-diagram">
      
      {/* 1. Source Node */}
      <div className="ai-node source-node">
        <div className="source-header">Government Requirement</div>
        <div className="source-title">AI-powered Waste Management</div>
        <div className="source-tags">
          <span className="source-tag">Environment</span>
          <span className="source-tag">AI/IoT</span>
        </div>
      </div>

      {/* Top CSS Line */}
      <div className="css-line top-line"></div>

      {/* 2. AI Engine Node */}
      <div className="engine-node-wrapper">
        <div className={`engine-core ${pulseActive ? 'pulse' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
          </svg>
          AI MATCHING
        </div>
      </div>

      {/* Bottom CSS Line */}
      <div className="css-line bottom-line"></div>

      {/* 3. Target Nodes */}
      <div className="ai-targets">
        <MatchCard 
          name="EcoTech"
          score="94%"
          isBestMatch={true}
          criteria={['AI/ML', 'IoT', 'Waste Management', 'Existing MVP']}
        />
        <MatchCard 
          name="GreenTech"
          score="87%"
          isBestMatch={false}
        />
      </div>

    </div>
  );
});

export default AIMatchingDiagram;
