import React from 'react';

export interface SectionLabelProps {
  text: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  text,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      } gap-1.5 mb-4 ${className}`}
    >
      <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
        {text}
      </span>
      <div className="h-0.5 w-10 bg-gradient-to-r from-emerald-600 to-[#D4AF37] rounded-full" />
    </div>
  );
};
