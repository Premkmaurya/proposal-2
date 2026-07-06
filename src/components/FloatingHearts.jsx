import React from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  // Generate an array of 20 random hearts
  const hearts = Array.from({ length: 20 }).map((_, i) => {
    const size = Math.random() * 20 + 10; // 10px to 30px
    const left = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 5 + 5; // 5s to 10s
    const delay = Math.random() * 5; // 0s to 5s

    return { id: i, size, left, duration, delay };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-10%] text-pink-300 opacity-50 flex items-center justify-center"
          style={{ left: `${heart.left}%` }}
          animate={{
            y: ['0vh', '-120vh'],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width={heart.size} height={heart.size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
