import React from 'react';

const MatchCard = ({ name, score, isBestMatch, criteria }) => {
  // Generate a random-looking but deterministic gradient based on name
  const isEco = name.toLowerCase().includes('eco');
  const avatarGradient = isEco 
    ? 'linear-gradient(135deg, #10b981, #059669)' // Greenish for EcoTech
    : 'linear-gradient(135deg, #64748b, #475569)'; // Grayish for others

  return (
    <div className={`ai-node target-node ${isBestMatch ? 'best-match' : ''}`}>
      
      <div className="target-header">
        <div className="target-profile">
          <div className="target-avatar" style={{ background: avatarGradient }}>
            {name.charAt(0)}
          </div>
          <div className="target-name">{name}</div>
        </div>
        
        <div className={`target-score-badge ${!isBestMatch ? 'lower' : ''}`}>
          <span className="score-number">{score}</span>
          <span className="score-text">MATCH</span>
        </div>
      </div>
      
      {criteria && (
        <>
          <div className="target-divider"></div>
          <div className="target-criteria-grid">
            {criteria.map((item, index) => (
              <div key={index} className="criterion-badge criterion">
                <div className="criterion-icon-wrapper">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </>
      )}
      
      {/* Decorative background element for the best match */}
      {isBestMatch && (
        <div className="best-match-glow"></div>
      )}
    </div>
  );
};

export default MatchCard;
