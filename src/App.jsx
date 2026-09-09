import { ReactLenis } from 'lenis/react';
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import './App.css';
import Preloader from './components/Preloader/Preloader';
import Nav from './components/navbar/Nav';
import Hero from './components/Herosection/Hero';
import ProblemSection from './components/ProblemSection/ProblemSection';
import SolutionSection from './components/SolutionSection/SolutionSection';
import AIMatchingSection from './components/AIMatchingSection/AIMatchingSection';
import SectorsSection from './components/SectorsSection/SectorsSection';
import ImpactSection from './components/ImpactSection/ImpactSection';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import DashboardApp from './pitchgov/DashboardApp';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const transitionRef = useRef(null);
  const transitionLogoRef = useRef(null);

  const handleNavigation = (toDashboard) => {
    // 1. Slide overlay UP from bottom
    gsap.to(transitionRef.current, {
      y: '0%',
      duration: 0.8,
      ease: 'expo.inOut',
      onComplete: () => {
        // Toggle the app view while fully obscured
        setShowDashboard(toDashboard);
        window.scrollTo(0, 0);
        
        // 2. Flash the logo
        gsap.fromTo(transitionLogoRef.current, 
          { scale: 0.8, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out',
            onComplete: () => {
              gsap.to(transitionLogoRef.current, { opacity: 0, duration: 0.3, delay: 0.1 });
              
              // 3. Slide overlay UP and away to reveal new page
              gsap.to(transitionRef.current, {
                y: '-100%',
                duration: 0.8,
                ease: 'expo.inOut',
                delay: 0.2,
                onComplete: () => {
                  // Reset overlay to bottom secretly
                  gsap.set(transitionRef.current, { y: '100%' });
                }
              });
            }
          }
        );
      }
    });
  };

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothTouch: false }}>
      <div className="app">
        <CustomCursor />
        
        {/* Sleek Transition Overlay */}
        <div className="page-transition-overlay" ref={transitionRef}>
          <h1 className="transition-logo" ref={transitionLogoRef}>PITCH-GOV</h1>
        </div>

        {showDashboard ? (
          <DashboardApp onBack={() => handleNavigation(false)} />
        ) : (
          <>
            <Preloader />
            <Nav onGetStarted={() => handleNavigation(true)} />
            <main>
              <Hero />
              <ProblemSection />
              <SolutionSection />
              <AIMatchingSection />
              <SectorsSection />
              <ImpactSection />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ReactLenis>
  );
}

export default App;
