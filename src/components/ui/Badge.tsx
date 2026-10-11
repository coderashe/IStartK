import React from 'react';

export interface BadgeProps {
  text: string;
  variant?: 'gold' | 'emerald' | 'dark' | 'gray';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, variant = 'gray', className = '' }) => {
  const styles = {
    gold: 'bg-amber-50 text-[#B8960C] border border-[#D4AF37]',
    emerald: 'bg-emerald-700 text-white',
    dark: 'bg-[#111111] text-white',
    gray: 'bg-gray-100 text-gray-600',
  };

  return (
    <span
      className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full inline-block ${styles[variant]} ${className}`}
    >
      {text}
    </span>
  );
};
