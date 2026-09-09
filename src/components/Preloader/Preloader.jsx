import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const words = [
  "CONNECTING GOVERNMENT",
  "EMPOWERING STARTUPS",
  "AI-DRIVEN MATCHING",
  "REAL-WORLD IMPACT"
];

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // We create a timeline that handles the entire sequence
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        setHidden(true);
      }
    });

    // 1. Counter animation (0 to 100 over 3.2 seconds)
    let count = { val: 0 };
    tl.to(count, {
      val: 100,
      duration: 3.2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.floor(count.val).toString().padStart(3, '0');
        }
      }
    }, 0);

    // 2. Progress bar filling up
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 3.2,
      ease: "power3.inOut"
    }, 0);

    // 3. Staggered words animation
    const wordDuration = 3.2 / words.length;
    wordsRef.current.forEach((word, i) => {
      // Enter
      tl.fromTo(word, 
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        wordDuration * i
      );
      // Exit (if not the last word)
      if (i < words.length - 1) {
        tl.to(word, {
          yPercent: -100, opacity: 0, duration: 0.6, ease: "power3.in"
        }, wordDuration * (i + 1) - 0.2);
      }
    });

    // 4. Exit animations - the "slicing" reveal
    tl.to(containerRef.current.querySelector('.preloader-content'), {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: "power3.inOut"
    }, 3.5); // Start slightly after counter finishes

    tl.to(containerRef.current.querySelectorAll('.preloader-panel'), {
      scaleY: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.inOut",
      transformOrigin: "top" // Shrink upwards
    }, 3.6);

    return () => {
      tl.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="preloader-overlay" ref={containerRef}>
      {/* Background Slices for the exit reveal - Indian Flag */}
      <div className="preloader-panels">
        <div className="preloader-panel top-saffron"></div>
        <div className="preloader-panel middle-white"></div>
        <div className="preloader-panel bottom-green"></div>
      </div>
      
      <div className="preloader-content">
        {/* Brand */}
        <div className="preloader-brand">PITCHTANK</div>
        
        {/* Counter */}
        <div className="preloader-counter-wrapper">
          <div className="preloader-counter">
            <span ref={counterRef}>000</span>
            <span className="percent">%</span>
          </div>
        </div>

        {/* Dynamic morphing words */}
        <div className="preloader-words-wrapper">
          <div className="preloader-words-clip">
            {words.map((word, i) => (
              <div 
                className="preloader-word" 
                key={i} 
                ref={el => wordsRef.current[i] = el}
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom progress track */}
        <div className="preloader-progress-track">
          <div className="preloader-progress-fill" ref={progressRef}></div>
        </div>
      </div>
    </div>
  );
}
