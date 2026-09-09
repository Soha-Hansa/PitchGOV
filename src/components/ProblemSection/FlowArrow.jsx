import React from 'react';

export const FlowArrow = ({ direction = "right", label }) => {
  return (
    <div className={`arrow ${direction}-arrow`}>
      {label && <span className="arrow-label">{label}</span>}
      <div className="arrow-line">
        {direction === 'right' && (
          <svg viewBox="0 0 100 20" preserveAspectRatio="none">
            <path className="flowing-path" d="M0 10 H90" stroke="#b0b0c0" strokeWidth="2" strokeDasharray="4 4" />
            <polygon points="90,5 100,10 90,15" fill="#b0b0c0" />
          </svg>
        )}
        {direction === 'left' && (
          <svg viewBox="0 0 100 20" preserveAspectRatio="none">
            <path className="flowing-path" d="M100 10 H10" stroke="#b0b0c0" strokeWidth="2" strokeDasharray="4 4" />
            <polygon points="10,5 0,10 10,15" fill="#b0b0c0" />
          </svg>
        )}
      </div>
    </div>
  );
};

export const VerticalArrow = ({ label }) => {
  return (
    <div className="vertical-arrow">
      {label && <span className="arrow-label">{label}</span>}
      <svg width="20" height="40">
        <path className="flowing-path" d="M10 0 V30" stroke="#b0b0c0" strokeWidth="2" strokeDasharray="4 4" />
        <polygon points="5,30 10,40 15,30" fill="#b0b0c0" />
      </svg>
    </div>
  );
};
