import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import impactVideo from '../../assets/videos/impact.mp4';

gsap.registerPlugin(ScrollTrigger);

const ImpactVideo = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
          filter: "blur(6px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => {});
              }
            }
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="impact-video-container">
      <div className="impact-video-wrapper">
        <video 
          ref={videoRef}
          src={impactVideo} 
          loop 
          muted 
          playsInline 
          className="impact-video"
        />
        <div className="impact-video-glow" />
      </div>
    </div>
  );
};

export default ImpactVideo;
