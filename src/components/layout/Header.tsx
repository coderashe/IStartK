import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Menu } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo.tsx';
import { GoldButton } from '../ui/GoldButton.tsx';
import { MobileMenu } from './MobileMenu.tsx';
import { COMPANY_INFO } from '../../data/mockData.ts';
import { buildWhatsAppUrl } from '../../utils/whatsapp.ts';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/iStartCapital/';
    }
    return location.pathname.includes(path);
  };

  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsappClean,
    'Hello iStart Capital! I would like to schedule a consultation.'
  );

  const announcementText =
    "✦ ZIMBABWE'S PREMIER ICT PARTNER ✦ CUSTOM SOFTWARE · SYSTEMS INTEGRATION · DIGITAL MARKETING ✦ REQUEST A FREE CONSULTATION TODAY ✦ ";

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#111111] text-[#D4AF37] text-xs font-semibold py-2 overflow-hidden border-b border-[#2a2a2a]">
        <div className="overflow-hidden whitespace-nowrap flex">
          <div className="animate-marquee flex gap-8 shrink-0">
            <span>{announcementText}</span>
            <span>{announcementText}</span>
            <span>{announcementText}</span>
            <span>{announcementText}</span>
          </div>
          <div className="animate-marquee flex gap-8 shrink-0" aria-hidden="true">
            <span>{announcementText}</span>
            <span>{announcementText}</span>
            <span>{announcementText}</span>
            <span>{announcementText}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="shrink-0">
          <BrandLogo size="md" darkMode={false} />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors pb-1 ${
              isActive('/')
                ? 'text-emerald-700 border-b-2 border-[#D4AF37]'
                : 'text-gray-700 hover:text-emerald-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`text-sm font-semibold transition-colors pb-1 ${
              isActive('/services')
                ? 'text-emerald-700 border-b-2 border-[#D4AF37]'
                : 'text-gray-700 hover:text-emerald-700'
            }`}
          >
            Services
          </Link>
          <Link
            to="/partners"
            className={`text-sm font-semibold transition-colors pb-1 ${
              isActive('/partners')
                ? 'text-emerald-700 border-b-2 border-[#D4AF37]'
                : 'text-gray-700 hover:text-emerald-700'
            }`}
          >
            Partners
          </Link>
          <Link
            to="/about"
            className={`text-sm font-semibold transition-colors pb-1 ${
              isActive('/about')
                ? 'text-emerald-700 border-b-2 border-[#D4AF37]'
                : 'text-gray-700 hover:text-emerald-700'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-semibold transition-colors pb-1 ${
              isActive('/contact')
                ? 'text-emerald-700 border-b-2 border-[#D4AF37]'
                : 'text-gray-700 hover:text-emerald-700'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA / Contact Info */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.whatsappClean}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-emerald-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>{COMPANY_INFO.whatsappDisplay}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Contact"
            className="w-9 h-9 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <Link to="/contact">
            <GoldButton className="py-2.5 px-5 text-xs">Request a Quote</GoldButton>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation"
            className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};
