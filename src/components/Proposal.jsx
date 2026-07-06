import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NO_TEXTS = [
  "No",
  "Are you sure?",
  "Really?",
  "Think again 🥺",
  "Please ❤️",
  "Last chance 😭",
  "Okay...Click Yes 😂"
];

const Proposal = ({ onAccept }) => {
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const yesButtonSize = noCount * 15 + 16;
  const noButtonSize = Math.max(16 - noCount * 1.5, 8); // Minimum size 8px

  const handleNoHoverOrClick = () => {
    // Generate random nearby position
    const randomX = Math.floor(Math.random() * 150) - 75; // -75px to 75px
    const randomY = Math.floor(Math.random() * 150) - 75; // -75px to 75px
    
    setNoPosition({ x: randomX, y: randomY });
    
    // Cycle through text but stop at the last one
    if (noCount < NO_TEXTS.length - 1) {
      setNoCount(noCount + 1);
    }
  };

  const getNoButtonText = () => {
    return NO_TEXTS[Math.min(noCount, NO_TEXTS.length - 1)];
  };

  return (
    <motion.div 
      className="relative z-10 flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl w-[90%] max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-6 w-56 h-56 sm:w-60 sm:h-60 relative">
        <img 
          src="/love-mochi.webp"
          alt="Cute mochi peach cat asking" 
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-2">
        Will you come to travel with me in life? ❤️
      </h1>
      <p className="text-gray-500 text-center mb-8 text-sm sm:text-base">
        (Don't you dare click No)
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <motion.button
          className="bg-rose-500 text-white font-bold rounded-full shadow-lg hover:bg-rose-600 transition-colors flex-shrink-0"
          style={{ fontSize: yesButtonSize, padding: `${yesButtonSize / 2}px ${yesButtonSize}px` }}
          onClick={onAccept}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ❤️ Yes
        </motion.button>
        
        <motion.button
          className="bg-gray-200 text-gray-700 font-bold rounded-full shadow hover:bg-gray-300 flex-shrink-0 absolute sm:relative"
          style={{ 
            fontSize: noButtonSize, 
            padding: `${noButtonSize / 2}px ${noButtonSize}px`,
            left: noPosition.x ? `${noPosition.x}px` : 'auto',
            top: noPosition.y ? `${noPosition.y}px` : 'auto'
          }}
          onClick={handleNoHoverOrClick}
          onMouseEnter={handleNoHoverOrClick}
        >
          💔 {getNoButtonText()}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Proposal;
