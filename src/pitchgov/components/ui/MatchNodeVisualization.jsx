import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import './MatchNodeVisualization.css';

export default function MatchNodeVisualization({ data, isVisible }) {
  return (
    <div className={`match-node-viz-container animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="viz-title-row">
        <span className="viz-title-text">AI MATCH ENGINE ARCHITECTURE & DATA FLOW</span>
        <div className="viz-system-status">
          <div className="status-dot-pulse" />
          <span>REAL-TIME MATCH VERIFIED</span>
        </div>
      </div>

      <div className="viz-flow-wrapper">
        {/* Node 1: Govt Challenge */}
        <div className="viz-node-card">
          <span className="viz-node-header">INPUT NODE</span>
          <h4 className="viz-node-title">Municipal Requirement</h4>
          <div className="viz-pill-list">
            <span className="viz-subpill">Smart Waste Spec</span>
            <span className="viz-subpill">Karnataka Smart City</span>
          </div>
        </div>

        {/* Connector 1 */}
        <svg className="viz-connector-svg" viewBox="0 0 60 40">
          <path 
            d="M0 20 H60" 
            stroke="var(--purple-primary)" 
            strokeWidth="2" 
            className="line-path-dash" 
          />
        </svg>

        {/* Node 2: AI Match Engine */}
        <div className="viz-engine-box">
          <div className="viz-engine-icon">
            <Cpu size={22} color="#ffffff" />
          </div>
          <span className="viz-engine-title">PITCHGOV AI ENGINE v4.2</span>
          <span style={{ fontSize: '0.72rem', opacity: 0.85, fontFamily: 'var(--font-mono)' }}>
            Vector Embedding Alignment
          </span>
        </div>

        {/* Connector 2 */}
        <svg className="viz-connector-svg" viewBox="0 0 60 40">
          <path 
            d="M0 20 H60" 
            stroke="var(--purple-primary)" 
            strokeWidth="2" 
            className="line-path-dash" 
          />
        </svg>

        {/* Node 3: Startup Capability */}
        <div className="viz-node-card highlight-node">
          <span className="viz-node-header">TARGET NODE</span>
          <h4 className="viz-node-title">EcoTech Capabilities</h4>
          <div className="viz-pill-list">
            <span className="viz-subpill">Computer Vision Model</span>
            <span className="viz-subpill">IoT Telemetry Engine</span>
          </div>
        </div>
      </div>
    </div>
  );
}
