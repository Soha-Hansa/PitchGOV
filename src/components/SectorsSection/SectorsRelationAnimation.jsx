import React, { useState } from 'react';

const SectorsRelationAnimation = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const govtNodes = [
    { id: 'g1', label: 'Defense & Security', badge: 'AI Surveillance', target: 's2' },
    { id: 'g2', label: 'Urban Infrastructure', badge: 'Smart Mobility', target: 's3' },
    { id: 'g3', label: 'Environment & Waste', badge: 'Clean Tech', target: 's1' },
    { id: 'g4', label: 'Healthcare Systems', badge: 'Bio Analytics', target: 's4' },
  ];

  const startupNodes = [
    { id: 's1', label: 'EcoTech Solutions', badge: '98% Match • Waste AI', source: 'g3' },
    { id: 's2', label: 'Aegis Defense AI', badge: '94% Match • Security', source: 'g1' },
    { id: 's3', label: 'UrbanPulse Tech', badge: '91% Match • Smart City', source: 'g2' },
    { id: 's4', label: 'BioMed Dynamics', badge: '89% Match • Health AI', source: 'g4' },
  ];

  const isHighlighted = (id, connectedId) => {
    if (!hoveredNode) return false;
    return hoveredNode === id || hoveredNode === connectedId;
  };

  return (
    <div className="complex-neural-container">
      {/* Top System Bar */}
      <div className="neural-top-bar">
        <div className="system-status">
          <span className="live-dot"></span>
          SYS.AI_MATCH_ENGINE // ONLINE
        </div>
        <div className="vector-metrics">
          <span>VECTOR SIMILARITY: <strong>0.984</strong></span>
          <span className="divider">•</span>
          <span>LATENCY: <strong>12ms</strong></span>
        </div>
      </div>

      <div className="neural-graph-body">
        {/* Left Column: Government Nodes */}
        <div className="neural-column govt-column">
          <div className="column-header">
            <span className="column-icon">🏛️</span>
            <div>
              <h3>Government Procurement</h3>
              <p>Active Public Tender Demands</p>
            </div>
          </div>

          <div className="nodes-stack">
            {govtNodes.map((node) => {
              const active = isHighlighted(node.id, node.target);
              return (
                <div
                  key={node.id}
                  className={`complex-node govt-node-item ${active ? 'active-highlight' : ''}`}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="node-indicator"></div>
                  <div className="node-content">
                    <span className="node-title">{node.label}</span>
                    <span className="node-tag">{node.badge}</span>
                  </div>
                  <div className="node-port right-port"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center: Neural Core & SVG Cable Network */}
        <div className="neural-center-core">
          <svg className="neural-cables-svg" viewBox="0 0 300 320" fill="none">
            {/* Background Static Cables */}
            <path d="M 0 45 Q 150 160 300 125" stroke="rgba(188, 79, 79, 0.2)" strokeWidth="2" />
            <path d="M 0 125 Q 150 160 300 45" stroke="rgba(188, 79, 79, 0.2)" strokeWidth="2" />
            <path d="M 0 205 Q 150 160 300 205" stroke="rgba(188, 79, 79, 0.2)" strokeWidth="2" />
            <path d="M 0 285 Q 150 160 300 285" stroke="rgba(188, 79, 79, 0.2)" strokeWidth="2" />

            {/* Glowing Flow Cables */}
            <path 
              d="M 0 45 Q 150 160 300 125" 
              stroke="#BC4F4F" 
              strokeWidth="2.5" 
              strokeDasharray="8 8" 
              className="cable-flow-1"
              opacity={hoveredNode ? (isHighlighted('g1', 's2') ? '1' : '0.15') : '0.7'}
            />
            <path 
              d="M 0 125 Q 150 160 300 205" 
              stroke="#E98B50" 
              strokeWidth="2.5" 
              strokeDasharray="8 8" 
              className="cable-flow-2"
              opacity={hoveredNode ? (isHighlighted('g2', 's3') ? '1' : '0.15') : '0.7'}
            />
            <path 
              d="M 0 205 Q 150 160 300 45" 
              stroke="#10b981" 
              strokeWidth="2.5" 
              strokeDasharray="8 8" 
              className="cable-flow-3"
              opacity={hoveredNode ? (isHighlighted('g3', 's1') ? '1' : '0.15') : '0.7'}
            />
            <path 
              d="M 0 285 Q 150 160 300 285" 
              stroke="#E98B50" 
              strokeWidth="2.5" 
              strokeDasharray="8 8" 
              className="cable-flow-4"
              opacity={hoveredNode ? (isHighlighted('g4', 's4') ? '1' : '0.15') : '0.7'}
            />
          </svg>

          {/* Central AI Processor Core */}
          <div className="neural-ai-processor">
            <div className="processor-orbital-ring r1"></div>
            <div className="processor-orbital-ring r2"></div>
            <div className="processor-glow-bg"></div>
            <div className="processor-chip">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
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
            </div>
            <span className="processor-label">AI SYNAPSE</span>
          </div>
        </div>

        {/* Right Column: Startup Nodes */}
        <div className="neural-column startup-column">
          <div className="column-header">
            <span className="column-icon">🚀</span>
            <div>
              <h3>Startup Solutions</h3>
              <p>Vetted Innovation Index</p>
            </div>
          </div>

          <div className="nodes-stack">
            {startupNodes.map((node) => {
              const active = isHighlighted(node.id, node.source);
              return (
                <div
                  key={node.id}
                  className={`complex-node startup-node-item ${active ? 'active-highlight' : ''}`}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="node-port left-port"></div>
                  <div className="node-content">
                    <span className="node-title">{node.label}</span>
                    <span className="node-tag green">{node.badge}</span>
                  </div>
                  <div className="node-indicator green"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Information Ticker */}
      <div className="neural-bottom-bar">
        <div className="ticker-item">
          <span className="ticker-bullet">●</span> Semantic Match Engine Active
        </div>
        <div className="ticker-item">
          <span className="ticker-bullet">●</span> Automatic RFP Scoring
        </div>
        <div className="ticker-item">
          <span className="ticker-bullet">●</span> Direct Verification Protocol
        </div>
      </div>
    </div>
  );
};

export default SectorsRelationAnimation;
