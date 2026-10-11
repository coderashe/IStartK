import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  CheckCircle2,
  Send,
  MessageSquare,
  ShoppingBag,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel.tsx';
import { Badge } from '../components/ui/Badge.tsx';
import { GoldButton } from '../components/ui/GoldButton.tsx';
import { OutlineButton } from '../components/ui/OutlineButton.tsx';
import { PARTNERS, COMPANY_INFO } from '../data/mockData.ts';
import { formatServiceInquiry, buildWhatsAppUrl } from '../utils/whatsapp.ts';

const partnerIconMap: Record<string, React.ElementType> = {
  ShoppingBag,
  Wrench,
  Sparkles,
};

export const PartnersPage: React.FC = () => {
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = formatServiceInquiry(
      'Partnership Inquiry',
      partnerForm.company || 'Prospective Partner',
      partnerForm.name || 'Anonymous'
    );
    const fullMsg = partnerForm.message.trim()
      ? `${msg}\n\n*Proposal Note:*\n${partnerForm.message.trim()}`
      : msg;
    const url = buildWhatsAppUrl(COMPANY_INFO.whatsappClean, fullMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full bg-white"
    >
      {/* 1. Page hero */}
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0d0d0d] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel text="PARTNER NETWORK" align="left" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Powered by the <span className="text-[#D4AF37]">iStart Network</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8 leading-relaxed">
            Every partner in our ecosystem is a business we've built, integrated, or actively
            support. These aren't just clients — they're proof of what iStart Capital delivers.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-wide">
              ✦ 3 Active Commercial Partners
            </span>
            <span className="px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-wide">
              ✦ 3 Vital Zimbabwean Industries
            </span>
            <span className="px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-wide">
              ✦ Rapidly Expanding Ecosystem
            </span>
          </div>
        </div>
      </section>

      {/* 2. Partners grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="ACTIVE PARTNERS" align="center" />
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111] text-center tracking-tight mb-4">
            Our <span className="text-emerald-700">Partner</span> Platforms
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-base sm:text-lg">
            Explore live digital platforms architected by iStart Capital and powering commerce
            across Harare, Kadoma, and Karoi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNERS.map((partner) => {
              const IconComponent = partnerIconMap[partner.icon] || Sparkles;
              return (
                <div
                  key={partner.id}
                  className="bg-white border-t-[3px] border-t-[#D4AF37] border-x border-b border-gray-200 rounded-2xl p-8 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xs"
                        style={{ backgroundColor: partner.accentColor || '#198754' }}
                      >
                        <IconComponent className="w-7 h-7" />
                      </div>
                      {partner.badge && <Badge text={partner.badge} variant="gold" />}
                    </div>

                    <h3 className="text-2xl font-black text-[#111111] tracking-tight mb-1">
                      {partner.name}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                      {partner.category}
                    </span>
                    <p className="text-xs italic text-gray-500 font-semibold mb-4">
                      "{partner.tagline}"
                    </p>

                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {partner.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-8">
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

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <a
                      href={partner.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 font-bold rounded-xl px-5 py-3 bg-[#D4AF37] hover:bg-[#B8960C] text-[#111111] transition-colors cursor-pointer text-xs shadow-xs"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <Link
                      to="/contact"
                      state={{ subject: `Partnership: ${partner.name}` }}
                      className="block"
                    >
                      <OutlineButton variant="emerald" className="w-full py-2.5 text-xs">
                        Inquire About Partnership
                      </OutlineButton>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BecomePartnerSection */}
      <section className="bg-[#F8F9FA] py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col */}
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel text="EXPAND TOGETHER" align="left" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
                Join the iStart Partner Network
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                We believe in deep commercial alliances. When you partner with iStart Capital,
                you do not just receive custom software — you tap into our cross-promotional
                network, ongoing DevOps management, and strategic technological roadmap.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Custom enterprise platform engineered by iStart Capital</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Cross-marketing and co-branding across the network</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Ongoing technical support, security patching & maintenance</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Featured spot in our public partner ecosystem directory</span>
                </div>
              </div>
            </div>

            {/* Right Col: Mini Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-black text-[#111111]">
                    Submit Partnership Inquiry
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mb-6">
                  Opens directly in WhatsApp with your pre-formatted business proposal.
                </p>

                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tinashe Moyo"
                      value={partnerForm.name}
                      onChange={(e) =>
                        setPartnerForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="luxury-input text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Harare Retail Hub"
                        value={partnerForm.company}
                        onChange={(e) =>
                          setPartnerForm((prev) => ({ ...prev, company: e.target.value }))
                        }
                        className="luxury-input text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tinashe@company.co.zw"
                        value={partnerForm.email}
                        onChange={(e) =>
                          setPartnerForm((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="luxury-input text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                      Partnership Idea or Proposal
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe your venture and how you envision partnering with iStart Capital..."
                      value={partnerForm.message}
                      onChange={(e) =>
                        setPartnerForm((prev) => ({ ...prev, message: e.target.value }))
                      }
                      className="luxury-input text-sm resize-none"
                    />
                  </div>

                  <GoldButton type="submit" className="w-full py-3.5 text-xs">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Send Partnership Proposal via WhatsApp</span>
                  </GoldButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
