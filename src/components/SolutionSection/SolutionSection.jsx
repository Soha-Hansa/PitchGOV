import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SolutionText from './SolutionText';
import SolutionBtn from './SolutionBtn';
import HowItWorks from './HowItWorks';
import Marquee from '../Marquee/Marquee';
import workflowVideo from '../../assets/videos/Workflow.mp4';
import './SolutionSection.css';

gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dome reveal effect
      gsap.set(container.current, {
        borderTopLeftRadius: "0% 0px",
        borderTopRightRadius: "0% 0px"
      });
      
      gsap.to(container.current, {
        borderTopLeftRadius: "50% 200px",
        borderTopRightRadius: "50% 200px",
        marginTop: "-200px", 
        paddingTop: "200px", 
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "top 50%",
          scrub: true
        }
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="solution-section">
      <div className="solution-bg"></div>
      <div className="solution-layout">
        {/* Top Split View */}
        <div className="solution-content-wrapper">
          <div className="solution-left-media">
            <video 
              src={workflowVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="workflow-video"
            />
          </div>
          <div className="solution-right-content">
            <SolutionText />
            <div className="btn-wrapper" style={{ marginTop: '3rem', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
              <SolutionBtn />
            </div>
          </div>
        </div>

        {/* Bottom How It Works Row */}
        <HowItWorks />
        
        {/* Full-width Marquee at the very bottom of the section */}
        <Marquee />
      </div>
    </section>
  );
};

export default SolutionSection;
