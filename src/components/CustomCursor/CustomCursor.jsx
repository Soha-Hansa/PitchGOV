import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  // Cache previous values to prevent layout thrashing and redundant DOM writes
  const prevStyles = useRef({ width: '', height: '', borderRadius: '', borderColor: '', bg: '', mixBlend: '' });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Hide default cursor across the entire app
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let isSnap = false;
    let hoveredEl = null;
    let isActive = false;
    let animationFrameId;

    // Linear Interpolation helper for smooth physics
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    // Update mouse coordinates instantly
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      if (!cursorDot.current || !cursorRing.current) return;

      // 1. Move dot instantly (hardware accelerated)
      cursorDot.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate3d(-50%, -50%, 0) rotate(${isSnap ? 45 : -45}deg) scale(${isSnap ? 1.3 : 1})`;
      cursorDot.current.style.color = isSnap ? '#f4a261' : '#ffffff';
      cursorDot.current.style.mixBlendMode = isSnap ? 'normal' : 'difference';

      // Prepare target styles
      let targetWidth, targetHeight, targetRadius, targetBorder, targetBg, targetMixBlend;

      // Ensure hovered element still exists in the DOM
      if (hoveredEl && !document.body.contains(hoveredEl)) {
        isSnap = false;
        hoveredEl = null;
      }

      // 2. Compute Target position for the ring
      if (isSnap && hoveredEl) {
        // Call this only when needed. It is a bit heavy, but caching the CSS writes below helps immensely.
        const rect = hoveredEl.getBoundingClientRect();
        
        targetWidth = `${rect.width + 20}px`;
        targetHeight = `${rect.height + 15}px`;
        targetRadius = '12px';
        targetBorder = '#f4a261';
        targetBg = 'transparent';
        targetMixBlend = 'normal';
        
        // Calculate center of the target element
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;
        
        // Faster lerp for a snappy magnetic pull
        ringX = lerp(ringX, targetX, 0.15); 
        ringY = lerp(ringY, targetY, 0.15);
      } else {
        targetWidth = '40px';
        targetHeight = '40px';
        targetRadius = '50%';
        targetBorder = 'rgba(255, 255, 255, 0.6)';
        targetBg = 'transparent';
        targetMixBlend = 'difference';

        // Fluid trailing tracking
        ringX = lerp(ringX, mouseX, 0.08); 
        ringY = lerp(ringY, mouseY, 0.08);
      }

      // Optimize DOM writes: Only update inline styles if they actually changed
      const currentStyles = prevStyles.current;
      if (currentStyles.width !== targetWidth) {
        cursorRing.current.style.width = targetWidth;
        currentStyles.width = targetWidth;
      }
      if (currentStyles.height !== targetHeight) {
        cursorRing.current.style.height = targetHeight;
        currentStyles.height = targetHeight;
      }
      if (currentStyles.borderRadius !== targetRadius) {
        cursorRing.current.style.borderRadius = targetRadius;
        currentStyles.borderRadius = targetRadius;
      }
      if (currentStyles.borderColor !== targetBorder) {
        cursorRing.current.style.borderColor = targetBorder;
        currentStyles.borderColor = targetBorder;
      }
      if (currentStyles.bg !== targetBg) {
        cursorRing.current.style.backgroundColor = targetBg;
        currentStyles.bg = targetBg;
      }
      if (currentStyles.mixBlend !== targetMixBlend) {
        cursorRing.current.style.mixBlendMode = targetMixBlend;
        currentStyles.mixBlend = targetMixBlend;
      }

      // 3. Render Ring Position
      let ringTransform = `translate3d(${ringX}px, ${ringY}px, 0) translate3d(-50%, -50%, 0)`;
      
      // Append active scale shrink if the mouse is held down
      if (isActive) {
        ringTransform += ` scale(0.6)`;
      }
      
      cursorRing.current.style.transform = ringTransform;
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    // Event Delegation for hover states
    const interactiveSelectors = 'a, button, input, textarea, .cursor-pointer, .magnetic-target';

    const onMouseOver = (e) => {
      const target = e.target.closest(interactiveSelectors);
      if (target) {
        isSnap = true;
        hoveredEl = target;
      }
    };

    const onMouseOut = (e) => {
      const target = e.target.closest(interactiveSelectors);
      if (target) {
        isSnap = false;
        hoveredEl = null;
      }
    };

    const onMouseDown = () => { isActive = true; };
    const onMouseUp = () => { isActive = false; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Start physics loop
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <CursorRing 
        ref={cursorRing} 
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          borderColor: 'rgba(255, 255, 255, 0.6)',
          backgroundColor: 'transparent',
          mixBlendMode: 'difference',
          transition: 'width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out, border-color 0.3s ease, background-color 0.3s ease'
        }}
      />
      
      <CursorDot 
        ref={cursorDot} 
        style={{
          color: '#ffffff',
          mixBlendMode: 'difference',
          transition: 'color 0.3s ease'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 3c-1.1 0-7 .2-12 5.5-2.2 2.3-3.6 5.2-4.5 8.1L2 19c-.3.3-.3.8 0 1.1.1.1.3.2.5.2.2 0 .4-.1.6-.2l2.3-2.3c2.7-.8 5.7-2 8.1-4 5.3-4.8 5.5-10.8 5.5-10.8z"/>
        </svg>
      </CursorDot>
    </>
  );
};

const CursorRing = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border-width: 2px;
  border-style: solid;
  pointer-events: none;
  z-index: 9998;
  will-change: transform;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default CustomCursor;
