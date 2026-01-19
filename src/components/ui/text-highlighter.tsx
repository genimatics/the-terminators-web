// 'use client';

// import type { ElementType } from 'react';
// import { useEffect, useImperativeHandle, useRef, useState } from 'react';
// import { cn } from '@/lib/utils';

// type TextHighlighterProps = {
//   children: React.ReactNode;
//   as?: ElementType;
//   triggerType?: 'hover' | 'ref' | 'inView' | 'auto';
//   className?: string;
// } & React.HTMLAttributes<HTMLElement>;

// export type TextHighlighterRef = {
//   animate: () => void;
//   reset: () => void;
// };

// export const TextHighlighter = (
//   { ref, children, as = 'span', triggerType = 'auto', className, ...props }: TextHighlighterProps & { ref?: React.RefObject<TextHighlighterRef | null> },
// ) => {
//   const componentRef = useRef<HTMLDivElement>(null);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useImperativeHandle(ref, () => ({
//     animate: () => setIsAnimating(true),
//     reset: () => setIsAnimating(false),
//   }));

//   // Auto trigger animation if triggerType="auto"
//   useEffect(() => {
//     if (triggerType === 'auto') {
//       setIsAnimating(true);
//     }
//   }, [triggerType]);

//   const ElementTag = as || 'span';

//   return (
//     <ElementTag ref={componentRef} {...props}>
//       <span className={cn('inline-block relative overflow-hidden', className)}>
//         {/* Highlight overlay */}
//         <span
//           className={cn(
//             'absolute inset-0 bg-primary opacity-0',
//             isAnimating && 'animate-highlight opacity-100',
//           )}
//         />
//         <span className="relative z-10">{children}</span>
//       </span>

//       <style jsx>
//         {`
//           @keyframes highlightMove {
//             0% { transform: translateX(-100%); }
//             50% { transform: translateX(0%); }
//             100% { transform: translateX(100%); }
//           }
//           .animate-highlight {
//             animation: highlightMove 5s linear infinite;
//           }
//         `}
//       </style>
//     </ElementTag>
//   );
// };

// TextHighlighter.displayName = 'TextHighlighter';
// export default TextHighlighter;
