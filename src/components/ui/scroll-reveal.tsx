'use client';

import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 1.2,
  ease = 'power3.out',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    gsap.killTweensOf(element);

    gsap.set(element, {
      opacity: 0,
      y: 40,
    });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 60%',
        once: true,
        markers: false,
        onEnter: () => {
          setTimeout(() => {
            gsap.set(element, { clearProps: 'opacity,y' });
          }, (duration + delay) * 1000);
        },
      },
    });

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, [delay, duration, ease]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
