import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aiMatchVideo from '../../../assets/videos/AImatch.mp4';

gsap.registerPlugin(ScrollTrigger);

const AIMatchingVideo = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    playVideo: () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 45,
          scale: 0.95,
          filter: "blur(8px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
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
    <div ref={containerRef} className="ai-match-video-container">
      <div className="ai-match-video-wrapper">
        <video 
          ref={videoRef}
          src={aiMatchVideo} 
          loop 
          muted 
          playsInline 
          className="ai-match-video"
        />
        <div className="ai-match-video-glow" />
      </div>
    </div>
  );
});

export default AIMatchingVideo;
