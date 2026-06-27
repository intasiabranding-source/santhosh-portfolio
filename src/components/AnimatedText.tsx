import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split text into words to preserve layout structure
  const words = text.split(' ');
  
  // Total characters count for calculating progress range
  const totalLength = text.length;

  let globalCharIndex = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIdx) => {
        const chars = word.split('');
        const element = (
          <span key={wordIdx} className="inline-block mr-[0.25em] whitespace-nowrap">
            {chars.map((char, charIdx) => {
              const start = globalCharIndex / totalLength;
              const end = (globalCharIndex + 1) / totalLength;
              globalCharIndex++;

              return (
                <Character
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
        // Account for the space after the word
        globalCharIndex++;
        return element;
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  // Animates from 0.2 to 1
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to preserve layout and width */}
      <span className="opacity-0 select-none">{char}</span>
      {/* Absolute positioned animated span */}
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0 text-current"
      >
        {char}
      </motion.span>
    </span>
  );
};
