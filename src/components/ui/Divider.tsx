import React from 'react';

export interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '' }) => (
  <div className={`section-divider ${className}`} />
);
