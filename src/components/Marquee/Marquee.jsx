import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Marquee.css';

// Reusable content block extracted to prevent re-mounting issues
const MarqueeContent = () => (
    <span className="marquee-content">
        ACCELERATE INNOVATION 
        <svg className="marquee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
        EMPOWER STARTUPS 
        <svg className="marquee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
        TRANSFORM GOVERNMENT 
        <svg className="marquee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 10v11m4-11v11m4-11v11" />
        </svg>
    </span>
);

const Marquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 40,
                ease: "none",
            });
        });
        
        return () => ctx.revert();
    }, []);

    return (
        <section className="marquee-container">
            <div ref={marqueeRef} className="marquee-track">
                {/* First half (50% width) */}
                <div className="marquee-half">
                    <MarqueeContent />
                    <MarqueeContent />
                </div>
                {/* Second half (duplicate for perfect seamless loop) */}
                <div className="marquee-half">
                    <MarqueeContent />
                    <MarqueeContent />
                </div>
            </div>
        </section>
    );
};

export default Marquee;
