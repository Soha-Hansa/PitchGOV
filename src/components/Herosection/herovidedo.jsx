import React from 'react';
import heroVideo from '../../assets/videos/HerosectionVideo.mp4';
import './Hero.css';

function HeroVidedo() {
  return (
    <div className="hero-video-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-video-overlay"></div>
    </div>
  );
}

export default HeroVidedo;
