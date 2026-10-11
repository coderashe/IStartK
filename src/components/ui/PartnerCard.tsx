import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Wrench, Sparkles, ExternalLink } from 'lucide-react';
import { Partner } from '../../types/istart.ts';
import { Badge } from './Badge.tsx';

export interface PartnerCardProps {
  partner: Partner;
  className?: string;
  showInquiryButton?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag,
  Wrench,
  Sparkles,
};

export const PartnerCard: React.FC<PartnerCardProps> = ({
  partner,
  className = '',
}) => {
  const IconComponent = iconMap[partner.icon] || Sparkles;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-white border-t-[3px] border-t-[#D4AF37] border-x border-b border-gray-200 rounded-2xl p-7 shadow-md flex flex-col justify-between transition-shadow hover:shadow-xl hover:shadow-amber-500/10 ${className}`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xs"
            style={{ backgroundColor: partner.accentColor || '#198754' }}
          >
            <IconComponent className="w-6 h-6" />
          </div>
          {partner.badge && <Badge text={partner.badge} variant="gold" />}
        </div>

        {/* Name & Category */}
        <div className="mb-3">
          <h3 className="text-xl font-black text-[#111111] tracking-tight">{partner.name}</h3>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mt-0.5">
            {partner.category}
          </span>
          {partner.tagline && (
            <p className="text-xs italic text-gray-500 mt-1 font-medium">{partner.tagline}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{partner.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {partner.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <a
        href={partner.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 font-bold rounded-xl px-5 py-3 bg-[#D4AF37] hover:bg-[#B8960C] text-[#111111] transition-colors cursor-pointer text-sm shadow-xs"
      >
        <span>Visit Partner Platform</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>
  );
};
