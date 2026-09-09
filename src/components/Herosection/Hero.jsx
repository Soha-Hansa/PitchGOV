import React, { useEffect, useRef } from 'react';
import HeroVidedo from './herovidedo';
import ScrollBadge from './ScrollBadge';
import './Hero.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Dramatic disappearance animation for the Hero section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", // Starts pinning when hero hits the top
        end: "bottom top", // Ends when user has scrolled 100vh
        scrub: 1, // Smooth scrubbing
        pin: true, // Pin it to the screen!
        pinSpacing: false, // Don't add extra scroll space, let the ProblemSection slide directly over it
      }
    });

    tl.to(heroRef.current, {
      scale: 0.92,
      filter: "blur(15px)",
      ease: "power2.inOut"
    });

    return () => {
      // It's safer to only kill triggers attached to this component in a larger app, but this works well for our specific scroll hierarchy
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="hero-container" ref={heroRef}>
      <HeroVidedo />
      <div className="hero-content">
      </div>
      
      <div className="hero-scroll-wrapper">
        <ScrollBadge />
      </div>
    </section>
  );
}

export default Hero;

