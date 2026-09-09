import React from 'react';
import './Footer.css';
import FooterSocial from './FooterSocial';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
    <footer className="footer-wrapper dark-section">
      <div className="footer-gradient-glow"></div>
      
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-info">
            <h2 className="footer-tagline">Empowering the Future of Government Tenders</h2>
            <p className="footer-subtext">Connecting innovative startups with government needs through AI-driven matchmaking and transparent pitching.</p>
            <FooterSocial />
          </div>
          <FooterLinks />
        </div>
        
        <div className="footer-bottom">
          <FooterLogo />
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Pitch-Gov. All rights reserved.</p>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
