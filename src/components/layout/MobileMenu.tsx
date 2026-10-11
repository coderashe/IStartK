import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { X, MessageSquare, Linkedin, Facebook, Twitter, Phone } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo.tsx';
import { GoldButton } from '../ui/GoldButton.tsx';
import { COMPANY_INFO } from '../../data/mockData.ts';
import { buildWhatsAppUrl } from '../../utils/whatsapp.ts';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Partners', path: '/partners' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/' || location.pathname === '/iStartCapital/'
      : location.pathname.includes(path);

  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsappClean,
    'Hello iStart Capital! I would like to inquire about your ICT services.'
  );

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 overflow-y-auto"
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-6 border-b border-gray-100">
          <BrandLogo size="md" darkMode={false} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-5 py-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`text-2xl font-black transition-colors flex items-center justify-between py-2 border-b border-gray-50 ${
                  active ? 'text-emerald-700' : 'text-[#111111] hover:text-emerald-700'
                }`}
              >
                <span>{link.label}</span>
                {active && <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="pt-6 border-t border-gray-100 space-y-4">
        {/* Phone Contact */}
        <a
          href={`tel:${COMPANY_INFO.whatsappClean}`}
          className="flex items-center gap-2 text-sm font-semibold text-gray-700 py-1"
        >
          <Phone className="w-4 h-4 text-emerald-700" />
          <span>{COMPANY_INFO.whatsappDisplay}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 font-bold rounded-xl px-5 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white transition-colors text-sm shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Request a Quote Button */}
        <Link to="/contact" onClick={onClose} className="block">
          <GoldButton className="w-full py-3.5">Request a Quote</GoldButton>
        </Link>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href={COMPANY_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:text-emerald-700 hover:bg-gray-200 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={COMPANY_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:text-emerald-700 hover:bg-gray-200 transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={COMPANY_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:text-emerald-700 hover:bg-gray-200 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
