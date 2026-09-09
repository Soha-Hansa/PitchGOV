import React from 'react';
import RollText from '../common/RollText';
import './Nav.css';

function MiddleLinks() {
  return (
    <div className="nav-middle-links">
      <a href="#how-it-works">
        <RollText>How It Works</RollText>
      </a>
      <a href="#startups">
        <RollText>For Startups</RollText>
      </a>
      <a href="#government">
        <RollText>For Government</RollText>
      </a>
      <a href="#about">
        <RollText>About</RollText>
      </a>
    </div>
  );
}

export default MiddleLinks;
