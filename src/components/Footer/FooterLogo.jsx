import React from 'react';

const FooterLogo = () => {
  const title = "PITCH-GOV";

  return (
    <div className="footer-logo-container">
      <h1 className="footer-logo-text">
        {title.split('').map((char, i) => (
          <span key={i} className="footer-char-wrapper">
            <span className="footer-char">{char}</span>
          </span>
        ))}
      </h1>
    </div>
  );
};

export default FooterLogo;
