import React, { useState, useEffect } from 'react';
import { FolderCheck, Users, Calendar, Activity } from 'lucide-react';
import { CompanyStat } from '../../types/istart.ts';
import { useScrollReveal } from '../../hooks/useScrollReveal.ts';

export interface StatCounterProps {
  stat: CompanyStat;
  animate?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  FolderCheck,
  Users,
  Calendar,
  Activity,
};

export const StatCounter: React.FC<StatCounterProps> = ({ stat, animate = true }) => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [display, setDisplay] = useState(animate ? '0' : stat.value);

  useEffect(() => {
    if (!animate || !isVisible) return;
    const target = parseFloat(stat.value);
    if (isNaN(target)) {
      setDisplay(stat.value);
      return;
    }

    const isDecimal = stat.value.includes('.');
    let current = 0;
    const totalSteps = 40;
    const step = target / totalSteps;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setDisplay(stat.value);
        clearInterval(timer);
      } else {
        setDisplay(isDecimal ? current.toFixed(1) : String(Math.floor(current)));
      }
    }, 35);

    return () => clearInterval(timer);
  }, [isVisible, animate, stat.value]);

  const IconComponent = iconMap[stat.icon] || Activity;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#1a1a1a]/40 border border-[#2a2a2a]/60"
    >
      <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center text-emerald-400 mb-4 shadow-sm">
        <IconComponent className="w-6 h-6" />
      </div>
      <div className="text-4xl sm:text-5xl font-black text-[#D4AF37] tracking-tight flex items-baseline">
        <span>{display}</span>
        {stat.suffix && <span className="text-[#D4AF37] ml-0.5">{stat.suffix}</span>}
      </div>
      <span className="text-sm font-medium text-gray-400 mt-2">{stat.label}</span>
    </div>
  );
};
