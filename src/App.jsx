import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import Proposal from './components/Proposal';
import Success from './components/Success';

function App() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleAccept = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS environment variables are missing. Continuing without sending an email.');
      setIsAccepted(true);
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: 'Jeni',
          from_name: 'Date Proposal',
          message: 'A sweet yes came in from the date proposal app.',
          reply_to: 'noreply@example.com',
        },
        publicKey
      );
      setIsAccepted(true);
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setIsAccepted(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-pink-50 relative overflow-x-hidden p-4 sm:p-8">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {!isAccepted ? (
          <Proposal key="proposal" onAccept={handleAccept} isSubmitting={isSending} />
        ) : (
          <Success key="success" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
