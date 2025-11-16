'use client';

import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Register ScrollTrigger plugin
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

/**
 * ScrollReveal Component
 *
 * A reusable component that animates children with smooth fade-in effect on scroll.
 * Animation triggers only once on first scroll (never repeats).
 * Uses GSAP + ScrollTrigger for smooth, performant animations with enhanced easing.
 *
 * @param children - React nodes to animate
 * @param className - Optional CSS classes
 * @param delay - Animation delay in seconds (default: 0)
 * @param duration - Animation duration in seconds (default: 1.2)
 * @param ease - GSAP easing function (default: 'power3.out')
 */
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

    // Set initial state (invisible with slight scale for smoother reveal)
    gsap.set(element, {
      opacity: 0,
      scale: 0.95,
    });

    // Create GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      gsap.to(element, {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          once: true, // Only trigger once - never repeats
          markers: false, // Set to true for debugging
        },
      });
    }, element);

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, [delay, duration, ease]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
