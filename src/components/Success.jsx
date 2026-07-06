import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Success = () => {
  useEffect(() => {
    // Fire confetti when component mounts
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="relative z-10 flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl w-[90%] max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
    >
      <div className="mb-6 w-48 h-48 sm:w-64 sm:h-64 relative">
        <img 
          src="/love-you.webp" 
          alt="Cute bears kissing and celebrating" 
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
      
      <h1 className="text-4xl sm:text-5xl font-bold text-rose-500 text-center mb-4">
        YAY!! ❤️
      </h1>
      <p className="text-gray-700 text-center text-lg sm:text-xl font-medium">
        You just made me the happiest person alive!
      </p>
    </motion.div>
  );
};

export default Success;
