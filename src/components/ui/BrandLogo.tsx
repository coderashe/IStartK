import React from 'react';

export interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  darkMode?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  darkMode = false,
  className = '',
}) => {
  const markSizeClasses = {
    sm: 'w-7 h-7 text-xs rounded-md',
    md: 'w-9 h-9 text-sm rounded-lg',
    lg: 'w-11 h-11 text-base rounded-xl',
  };

  const titleSizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Monogram Box */}
      <div
        className={`${markSizeClasses[size]} bg-white border border-gray-200 shadow-sm flex items-center justify-center font-black relative shrink-0`}
      >
        <span className="text-emerald-700 font-extrabold tracking-tighter">iS</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] absolute top-1.5 right-1.5" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className={`font-black tracking-tight leading-none ${titleSizeClasses[size]}`}>
            <span className={darkMode ? 'text-white' : 'text-[#111111]'}>iStart</span>
            <span className="text-emerald-700 ml-1">Capital</span>
          </div>
          <span
            className={`text-[10px] tracking-tight font-medium italic mt-0.5 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Engineering Zimbabwe's Digital Future
          </span>
        </div>
      )}
    </div>
  );
};
