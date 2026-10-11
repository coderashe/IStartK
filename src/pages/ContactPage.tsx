import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Twitter,
  AlertCircle,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel.tsx';
import { GoldButton } from '../components/ui/GoldButton.tsx';
import { OutlineButton } from '../components/ui/OutlineButton.tsx';
import { COMPANY_INFO } from '../data/mockData.ts';
import { ContactFormData, ContactFormErrors } from '../types/istart.ts';
import { validateContactForm } from '../utils/forms.ts';
import { formatContactMessage, buildWhatsAppUrl } from '../utils/whatsapp.ts';

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const locationState = location.state as { service?: string; subject?: string } | null;

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: (locationState?.service as any) || '',
    projectBudget: '',
    message: locationState?.subject ? `Inquiring regarding: ${locationState.subject}` : '',
    preferredContact: 'whatsapp',
  });

  const [touched, setTouched] = useState<Record<keyof ContactFormData, boolean>>({
    fullName: false,
    email: false,
    phone: false,
    company: false,
    serviceInterest: false,
    projectBudget: false,
    message: false,
    preferredContact: false,
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');

  useEffect(() => {
    if (locationState?.service) {
      setFormData((prev) => ({ ...prev, serviceInterest: locationState.service as any }));
    }
  }, [locationState?.service]);

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateContactForm({ ...formData });
    setErrors(validationErrors);
  };

  const setAllTouched = () => {
    setTouched(
      Object.fromEntries(
        Object.keys(touched).map((k) => [k, true])
      ) as Record<keyof ContactFormData, boolean>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAllTouched();
    const errs = validateContactForm(formData);
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      return;
    }

    const msg = formatContactMessage(formData);
    const url = buildWhatsAppUrl(COMPANY_INFO.whatsappClean, msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      id: 'faq-1',
      question: 'How long does a typical software project take?',
      answer:
        'Project timelines vary based on complexity. A standard web application takes 6–10 weeks. Enterprise systems with integrations typically run 12–16 weeks. We provide a detailed project timeline during our initial scoping session.',
    },
    {
      id: 'faq-2',
      question: 'Do you integrate with EcoCash and Innbucks?',
      answer:
        'Yes. EcoCash and Innbucks payment gateway integration is one of our core specializations. We work with Paynow, DPO, and direct merchant API connections to implement seamless local payment processing.',
    },
    {
      id: 'faq-3',
      question: 'What is your pricing structure?',
      answer:
        'We offer fixed-price project contracts for well-defined scopes and monthly retainer arrangements for ongoing development and social media management. All projects begin with a free scoping consultation.',
    },
    {
      id: 'faq-4',
      question: 'Do you work with startups or only established businesses?',
      answer:
        'We work with both. Several of our most successful projects have been MVPs for early-stage startups. We offer flexible payment structures for qualifying early-stage ventures.',
    },
    {
      id: 'faq-5',
      question: 'Can you maintain and update our existing system?',
      answer:
        "Absolutely. We offer maintenance retainer packages covering security updates, performance monitoring, feature additions, and technical support for systems we've built and third-party platforms.",
    },
    {
      id: 'faq-6',
      question: 'Where are you based and do you work remotely?',
      answer:
        'We are Harare-based and serve clients across Zimbabwe. We work both on-site for local clients and fully remotely for regional and international engagements.',
    },
  ];

  const whatsappDirectUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsappClean,
    'Hello iStart Capital!'
  );

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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel text="GET IN TOUCH" align="left" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Start Your <span className="text-[#D4AF37]">Project</span> Today
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Tell us about your project and we'll respond within 24 hours with a tailored
            consultation proposal.
          </p>
        </div>
      </section>

      {/* 2. Main content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left col (7 cols): Contact Form */}
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-black text-[#111111] mb-1">
                  Send Us a Project Brief
                </h2>
                <p className="text-xs text-gray-500">All fields marked * are required</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nyasha Mutasa"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                      }
                      onBlur={() => handleBlur('fullName')}
                      className={`luxury-input ${
                        touched.fullName && errors.fullName
                          ? 'border-red-500 ring-1 ring-red-500'
                          : ''
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="nyasha@business.co.zw"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      onBlur={() => handleBlur('email')}
                      className={`luxury-input ${
                        touched.email && errors.email
                          ? 'border-red-500 ring-1 ring-red-500'
                          : ''
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+263 77..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      onBlur={() => handleBlur('phone')}
                      className={`luxury-input ${
                        touched.phone && errors.phone
                          ? 'border-red-500 ring-1 ring-red-500'
                          : ''
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company or Organization"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, company: e.target.value }))
                      }
                      onBlur={() => handleBlur('company')}
                      className="luxury-input"
                    />
                  </div>
                </div>

                {/* Row 3: Service Interest */}
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                    Service Interest *
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        serviceInterest: e.target.value as any,
                      }))
                    }
                    onBlur={() => handleBlur('serviceInterest')}
                    className={`luxury-input cursor-pointer ${
                      touched.serviceInterest && errors.serviceInterest
                        ? 'border-red-500 ring-1 ring-red-500'
                        : ''
                    }`}
                  >
                    <option value="">Select a service area...</option>
                    <option value="software-development">Software Development</option>
                    <option value="systems-integration">Systems Integration</option>
                    <option value="social-media-management">Social Media Management</option>
                    <option value="general">General Inquiry / Partnership</option>
                  </select>
                  {touched.serviceInterest && errors.serviceInterest && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.serviceInterest}</span>
                    </p>
                  )}
                </div>

                {/* Row 4: Project Budget */}
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                    Project Budget
                  </label>
                  <select
                    value={formData.projectBudget}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, projectBudget: e.target.value }))
                    }
                    className="luxury-input cursor-pointer"
                  >
                    <option value="">Select budget range...</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 – $1,000">$500 – $1,000</option>
                    <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                    <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                    <option value="$15,000+">$15,000+</option>
                    <option value="Ongoing Monthly Retainer">Ongoing Monthly Retainer</option>
                  </select>
                </div>

                {/* Row 5: Preferred Contact Method */}
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, preferredContact: 'email' }))
                      }
                      className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        formData.preferredContact === 'email'
                          ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-xs'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, preferredContact: 'whatsapp' }))
                      }
                      className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        formData.preferredContact === 'whatsapp'
                          ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-xs'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, preferredContact: 'call' }))
                      }
                      className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        formData.preferredContact === 'call'
                          ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-xs'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Phone Call</span>
                    </button>
                  </div>
                </div>

                {/* Row 6: Message */}
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                    Project Description *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project, current challenges, and what you'd like to achieve..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    onBlur={() => handleBlur('message')}
                    className={`luxury-input resize-none ${
                      touched.message && errors.message
                        ? 'border-red-500 ring-1 ring-red-500'
                        : ''
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Row */}
                <div className="pt-2 space-y-3">
                  <GoldButton type="submit" className="w-full py-4 text-sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Send Project Brief via WhatsApp</span>
                  </GoldButton>
                  <p className="text-xs text-gray-500 text-center">
                    Your message will open in WhatsApp pre-formatted for our team.
                  </p>
                  <div className="text-center pt-2">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs text-emerald-700 hover:underline font-semibold"
                    >
                      Prefer email? Send to {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {/* Right col (5 cols): Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Direct Contact */}
              <div className="bg-[#111111] rounded-2xl p-6 text-white border border-[#2a2a2a] shadow-lg space-y-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#D4AF37]">
                  Direct Contact
                </h3>

                <div className="space-y-3.5 text-sm">
                  <a
                    href={`tel:${COMPANY_INFO.whatsappClean}`}
                    className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-400 block font-medium">
                        Call Our Office
                      </span>
                      <span className="font-bold text-white">{COMPANY_INFO.whatsappDisplay}</span>
                    </div>
                  </a>

                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-400 block font-medium">
                        Instant WhatsApp Chat
                      </span>
                      <span className="font-bold text-white">{COMPANY_INFO.whatsappDisplay}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-400 block font-medium">
                        Official Mailbox
                      </span>
                      <span className="font-bold text-white">{COMPANY_INFO.email}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Card 2: Office Location */}
              <div className="bg-[#111111] rounded-2xl p-6 text-white border border-[#2a2a2a] shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-wider text-[#D4AF37]">
                    Office Location
                  </h3>
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="font-bold text-lg text-white block">
                    {COMPANY_INFO.address}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">
                    Serving clients across Zimbabwe and the Southern African region.
                  </p>
                </div>
                <OutlineButton
                  variant="gold"
                  href="https://maps.google.com/?q=Harare,Zimbabwe"
                  target="_blank"
                  className="w-full text-xs py-2.5"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </OutlineButton>
              </div>

              {/* Card 3: Response Time */}
              <div className="bg-[#111111] rounded-2xl p-6 text-white border border-[#2a2a2a] shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-wider text-[#D4AF37]">
                    Response Time
                  </h3>
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="font-bold text-lg text-white block">Within 24 Hours</span>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>Mon–Fri: 8:00 AM – 6:00 PM CAT</p>
                  <p>Sat: 9:00 AM – 1:00 PM CAT</p>
                </div>

                <div className="pt-2">
                  <span className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Currently accepting new projects
                  </span>
                </div>
              </div>

              {/* Card 4: Connect Online */}
              <div className="bg-[#111111] rounded-2xl p-6 text-white border border-[#2a2a2a] shadow-lg">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#D4AF37] mb-4">
                  Connect Online
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-700 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-700 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-700 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQSection */}
      <section className="bg-[#F8F9FA] py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="COMMON QUESTIONS" align="center" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] text-center tracking-tight mb-14">
            Frequently Asked <span className="text-emerald-700">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-900 hover:text-emerald-700 transition-colors cursor-pointer text-base sm:text-lg"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ml-4 ${
                        isOpen ? 'rotate-180 text-emerald-700' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
