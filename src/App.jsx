import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import Proposal from './components/Proposal';
import Success from './components/Success';

function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-pink-50 relative overflow-x-hidden p-4 sm:p-8">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {!isAccepted ? (
          <Proposal key="proposal" onAccept={() => setIsAccepted(true)} />
        ) : (
          <Success key="success" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
