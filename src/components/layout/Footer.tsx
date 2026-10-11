import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  MessageSquare,
  Phone,
  Linkedin,
  Facebook,
  Twitter,
} from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo.tsx';
import { COMPANY_INFO, SERVICES } from '../../data/mockData.ts';
import { buildWhatsAppUrl } from '../../utils/whatsapp.ts';

export const Footer: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsappClean,
    'Hello iStart Capital!'
  );

  return (
    <footer className="bg-[#0d0d0d] text-gray-300 border-t-2 border-[#D4AF37] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#222222]">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo size="lg" darkMode={true} />
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Zimbabwe's premier ICT consulting firm specializing in bespoke software
              development, seamless payment & ERP systems integration, and high-impact
              corporate digital strategy.
            </p>

            {/* Social Icons in emerald circles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-700 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-700 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-700 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-700 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-[#D4AF37] italic font-medium pt-1">
              Powered by iStart Capital
            </p>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors font-medium"
                >
                  All Capabilities Overview
                </Link>
              </li>
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  Partner Ecosystem
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#D4AF37] hover:underline font-semibold"
                >
                  Request a Quote →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Harare Office
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.whatsappClean}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Phone: {COMPANY_INFO.whatsappDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-500">
            Built with React 19 & Vite 8 · Engineering Zimbabwe's Digital Future
          </p>
        </div>
      </div>
    </footer>
  );
};
