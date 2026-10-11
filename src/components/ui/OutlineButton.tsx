import React, { useState } from 'react';
import { motion } from 'motion/react';

export interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'emerald' | 'dark' | 'gold';
  disabled?: boolean;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  onClick,
  href,
  target,
  className = '',
  type = 'button',
  variant = 'emerald',
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantStyles = {
    emerald: {
      default: 'border-emerald-700 text-emerald-700 bg-transparent',
      hover: 'bg-emerald-700 text-white border-emerald-700',
    },
    dark: {
      default: 'border-[#111111] text-[#111111] bg-transparent',
      hover: 'bg-[#111111] text-white border-[#111111]',
    },
    gold: {
      default: 'border-[#D4AF37] text-[#D4AF37] bg-transparent',
      hover: 'bg-[#D4AF37] text-[#111111] border-[#D4AF37]',
    },
  };

  const style = isHovered && !disabled ? variantStyles[variant].hover : variantStyles[variant].default;
  const baseClasses = `inline-flex items-center justify-center font-bold border-2 rounded-xl px-6 py-3 transition-colors duration-200 cursor-pointer text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed ${style}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { y: 0 }}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
};
