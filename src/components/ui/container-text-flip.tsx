'use client';

import React, { useState, useEffect, useId } from 'react';

import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ['better', 'modern', 'beautiful', 'awesome'],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 200,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const textRef = React.useRef(null);

  // Calculate the maximum width needed for all words
  useEffect(() => {
    // Create a temporary span to measure text widths
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.fontSize = 'inherit';
    tempSpan.style.fontFamily = 'inherit';
    tempSpan.style.fontWeight = 'inherit';
    document.body.appendChild(tempSpan);

    // Find the maximum width among all words
    let maxTextWidth = 0;
    words.forEach(word => {
      tempSpan.textContent = word;
      const width = tempSpan.getBoundingClientRect().width;
      maxTextWidth = Math.max(maxTextWidth, width);
    });

    // Add some padding (10px on each side)
    setMaxWidth(maxTextWidth + 20);

    // Clean up
    document.body.removeChild(tempSpan);
  }, [words]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.span
      layout
      layoutId={`words-here-${id}`}
      style={{ width: `${maxWidth}px`, display: 'inline-block' }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn('relative text-base font-medium', className)}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: 'easeInOut',
        }}
        className={cn('inline-block', textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.span>
  );
}
