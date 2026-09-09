import React, { useState, useEffect, useRef } from 'react';
import PitchgovLogo from '../../pitchgov/components/ui/PitchgovLogo';
import MiddleLinks from './MiddleLinks';
import RightBtn from './RightBtn';
import './Nav.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Nav({ onGetStarted }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger early for the white Problem box
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Detect when navbar enters the dark Solution section
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".solution-section",
        start: "top 80px", // When the dome reaches the navbar
        end: "bottom 80px", // When scrolling past solution section into AI match/video section
        onEnter: () => setIsDarkSection(true),
        onLeave: () => setIsDarkSection(false),
        onEnterBack: () => setIsDarkSection(true),
        onLeaveBack: () => setIsDarkSection(false),
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <header ref={navRef} className={`navbar ${isScrolled ? 'scrolled' : ''} ${isDarkSection ? 'dark-section' : ''}`}>
      <PitchgovLogo size="medium" />
      <MiddleLinks />
      <RightBtn onGetStarted={onGetStarted} />
    </header>
  );
}

export default Nav;
