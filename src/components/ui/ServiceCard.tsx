import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code2, Network, Share2, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Service } from '../../types/istart.ts';
import { Badge } from './Badge.tsx';

export interface ServiceCardProps {
  service: Service;
  onLearnMore?: () => void;
  onInquire?: () => void;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Network,
  Share2,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onLearnMore,
  onInquire,
  className = '',
}) => {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-white border border-gray-200 hover:border-[#D4AF37] rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
            <IconComponent className="w-6 h-6" />
          </div>
          {service.badge && <Badge text={service.badge} variant="emerald" />}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-black text-[#111111] tracking-tight mb-1">
          {service.title}
        </h3>
        <p className="text-xs font-bold text-emerald-700 tracking-wide mb-3">
          {service.tagline}
        </p>

        {/* Short Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Tech Stack Pills (First 4) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-semibold bg-[#F8F9FA] text-gray-700 border border-gray-200 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {service.techStack.length > 4 && (
            <span className="text-[11px] font-semibold bg-gray-50 text-gray-500 border border-gray-200 px-2 py-1 rounded-md">
              +{service.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Timeline & Price */}
        <div className="flex items-center justify-between py-3 px-3.5 bg-[#F8F9FA] rounded-xl text-xs text-gray-600 mb-6 border border-gray-100">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>{service.estimatedTimeline}</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-gray-900">
            <DollarSign className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{service.startingPrice}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        {onLearnMore ? (
          <button
            type="button"
            onClick={onLearnMore}
            className="w-full inline-flex items-center justify-center gap-1 font-bold rounded-xl px-3 py-2.5 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-colors text-xs tracking-wide cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <Link
            to={`/services/${service.id}`}
            className="w-full inline-flex items-center justify-center gap-1 font-bold rounded-xl px-3 py-2.5 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-colors text-xs tracking-wide cursor-pointer text-center"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}

        {onInquire ? (
          <button
            type="button"
            onClick={onInquire}
            className="w-full inline-flex items-center justify-center font-bold rounded-xl px-3 py-2.5 bg-[#D4AF37] hover:bg-[#B8960C] text-[#111111] transition-colors text-xs tracking-wide cursor-pointer shadow-xs"
          >
            Get a Quote
          </button>
        ) : (
          <Link
            to="/contact"
            state={{ service: service.id }}
            className="w-full inline-flex items-center justify-center font-bold rounded-xl px-3 py-2.5 bg-[#D4AF37] hover:bg-[#B8960C] text-[#111111] transition-colors text-xs tracking-wide cursor-pointer shadow-xs text-center"
          >
            Get a Quote
          </Link>
        )}
      </div>
    </motion.div>
  );
};
