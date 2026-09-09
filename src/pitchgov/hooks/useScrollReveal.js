import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for true IntersectionObserver scroll-triggered reveal animations.
 * Triggers REPEATEDLY every time the element enters/leaves the viewport.
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.2, rootMargin = '0px 0px -40px 0px' } = options;
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        } else {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin]);

  return [elementRef, isRevealed];
}
