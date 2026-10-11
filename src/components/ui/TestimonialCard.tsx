import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../../types/istart.ts';

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className = '',
}) => {
  return (
    <div
      className={`bg-[#F8F9FA] border border-gray-200 border-l-4 border-l-[#D4AF37] rounded-xl p-7 shadow-sm flex flex-col justify-between transition-all hover:shadow-md ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <Quote className="w-8 h-8 text-[#D4AF37] opacity-80" />
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-gray-800 italic text-base leading-relaxed mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-200/80">
        <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
          {testimonial.avatar}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-[#111111] text-sm leading-tight">
            {testimonial.clientName}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            {testimonial.clientTitle}, {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
};
