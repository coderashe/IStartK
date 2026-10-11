import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GoldButton } from '../components/ui/GoldButton.tsx';
import { OutlineButton } from '../components/ui/OutlineButton.tsx';

export const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="min-h-[80vh] bg-[#0d0d0d] text-white flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Ambient gold glow behind 404 text */}
      <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl mx-auto space-y-6">
        <div className="font-black text-8xl sm:text-9xl text-[#D4AF37] tracking-tighter drop-shadow-lg select-none">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Page Not Found
        </h1>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          The page you're looking for doesn't exist, has been removed, or is temporarily
          unavailable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link to="/">
            <GoldButton className="px-8 py-3.5">Back to Home</GoldButton>
          </Link>
          <Link to="/services">
            <OutlineButton variant="emerald" className="px-8 py-3.5">
              View Our Services
            </OutlineButton>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
