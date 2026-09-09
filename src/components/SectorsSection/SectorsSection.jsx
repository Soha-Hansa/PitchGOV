import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectorCard from './SectorCard';
import './SectorsSection.css';

gsap.registerPlugin(ScrollTrigger);

const SectorsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sectors-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      });

      gsap.from(".sectors-grid > div", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const governmentIcon = (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#BC4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"></path>
      <path d="M3 10h18"></path>
      <path d="M5 6l7-3 7 3"></path>
      <path d="M4 10v11"></path>
      <path d="M20 10v11"></path>
      <path d="M8 10v11"></path>
      <path d="M12 10v11"></path>
      <path d="M16 10v11"></path>
    </svg>
  );

  const startupIcon = (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  );

  return (
    <section ref={sectionRef} className="sectors-section" id="sectors">
      {/* Side Gradient Ambient Glows */}
      <div className="sectors-glow-left" />
      <div className="sectors-glow-right" />

      <div className="sectors-header">
        <h2 className="sectors-title">Built to Connect Two Sectors</h2>
      </div>

      <div className="sectors-grid">
        <SectorCard
          title="Government"
          description="Post challenges, discover vetted solutions, and streamline public procurement."
          bgColor="#E98B50"
          bgColorLight="#E2E2FF"
          textColorHover="#1E1B4B"
          boxShadowColor="rgba(233, 139, 80, 0.48)"
          icon={governmentIcon}
        />
        <SectorCard
          title="Startups"
          description="Access high-impact public sector tenders, present pitches, and scale rapidly."
          bgColor="#B8F9D3"
          bgColorLight="#E2FCED"
          textColorHover="#064E3B"
          boxShadowColor="rgba(184, 249, 211, 0.48)"
          icon={startupIcon}
        />
      </div>
    </section>
  );
};

export default SectorsSection;
