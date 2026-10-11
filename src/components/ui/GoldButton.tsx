import React from 'react';
import { motion } from 'motion/react';

export interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  children,
  onClick,
  href,
  target,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-bold rounded-xl px-6 py-3 bg-[#D4AF37] hover:bg-[#B8960C] text-[#111111] transition-colors cursor-pointer shadow-sm text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed';

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        onClick={onClick}
        className={`${baseClasses} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { y: 0 }}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
};
