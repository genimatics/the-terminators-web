import React, { useEffect, useRef } from 'react';

type AnimatedHighlightTextProps = {
  text: string;
  className?: string;
};

const AnimatedHighlightText: React.FC<AnimatedHighlightTextProps> = ({ text, className }) => {
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let slideTimeout: NodeJS.Timeout;
    let holdTimeout: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;

    const startAnimation = () => {
      if (!highlightRef.current) {
        return;
      }

      highlightRef.current.style.transition = 'none';
      highlightRef.current.style.width = '0%';
      highlightRef.current.style.opacity = '1';

      slideTimeout = setTimeout(() => {
        if (!highlightRef.current) {
          return;
        }
        highlightRef.current.style.transition = 'width 0.5s linear';
        highlightRef.current.style.width = '100%';
      }, 50);

      holdTimeout = setTimeout(() => {
        if (!highlightRef.current) {
          return;
        }
        highlightRef.current.style.transition = 'opacity 1s linear';
        highlightRef.current.style.opacity = '0';
      }, 500 + 5000);

      restartTimeout = setTimeout(() => {
        startAnimation();
      }, 500 + 5000 + 1000 + 2000);
    };

    startAnimation();

    return () => {
      clearTimeout(slideTimeout);
      clearTimeout(holdTimeout);
      clearTimeout(restartTimeout);
    };
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        ref={highlightRef}
        className="absolute inset-0 origin-left bg-primary"
        style={{ zIndex: 0, width: '0%', opacity: 1 }}
      >
      </span>
      <span className="relative z-10 p-2">{text}</span>
    </span>
  );
};

export default AnimatedHighlightText;
