import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatCounter = ({ endValue, decimals = 0, prefix = '', suffix = '' }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };

    const trigger = ScrollTrigger.create({
      trigger: countRef.current,
      start: "top 85%",
      onEnter: () => animateCount(),
      onEnterBack: () => animateCount(),
    });

    function animateCount() {
      obj.val = 0;
      gsap.killTweensOf(obj);
      gsap.to(obj, {
        val: endValue,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
          }
        }
      });
    }

    return () => {
      trigger.kill();
      gsap.killTweensOf(obj);
    };
  }, [endValue, decimals, prefix, suffix]);

  return (
    <span ref={countRef} className="stat-number-animated">
      {prefix}0{suffix}
    </span>
  );
};

export default StatCounter;
