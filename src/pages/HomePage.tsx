import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Cpu,
  FolderCheck,
  Users,
  Code2,
  Activity,
  Lightbulb,
  PenTool,
  Rocket,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel.tsx';
import { GoldButton } from '../components/ui/GoldButton.tsx';
import { OutlineButton } from '../components/ui/OutlineButton.tsx';
import { ServiceCard } from '../components/ui/ServiceCard.tsx';
import { PartnerCard } from '../components/ui/PartnerCard.tsx';
import { TestimonialCard } from '../components/ui/TestimonialCard.tsx';
import { StatCounter } from '../components/ui/StatCounter.tsx';
import { COMPANY_INFO, SERVICES, PARTNERS, TESTIMONIALS } from '../data/mockData.ts';
import { buildWhatsAppUrl } from '../utils/whatsapp.ts';

export const HomePage: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsappClean,
    'Hello iStart Capital! I would like to schedule a project consultation.'
  );

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Scoping',
      icon: Lightbulb,
      description:
        'We conduct a thorough requirements workshop to map your business processes, technical constraints, and project objectives.',
      color: 'emerald',
    },
    {
      number: '02',
      title: 'Architecture & Design',
      icon: PenTool,
      description:
        'Our engineers design the system architecture, database schema, and UI/UX wireframes before writing a single line of code.',
      color: 'gold',
    },
    {
      number: '03',
      title: 'Build & Integrate',
      icon: Code2,
      description:
        'Agile sprint-based development with weekly demos, continuous integration, and transparent progress tracking.',
      color: 'emerald',
    },
    {
      number: '04',
      title: 'Deploy & Support',
      icon: Rocket,
      description:
        'Production deployment, staff training, documentation handover, and ongoing maintenance support packages.',
      color: 'gold',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full"
    >
      {/* 1. HeroSection */}
      <section className="relative min-h-[92vh] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0d0d0d] overflow-hidden flex items-center py-20 lg:py-24">
        {/* Ambient emerald glow top-left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 blur-[140px] rounded-full pointer-events-none" />
        {/* Ambient gold glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        {/* Subtle diagonal stripe texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 12px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left col (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Top pill badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1a1a1a]/90 border border-[#D4AF37]/40 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-black tracking-widest text-[#D4AF37] uppercase">
                  ZIMBABWE'S PREMIER ICT PARTNER
                </span>
              </div>

              {/* H1 lines */}
              <div className="space-y-1">
                <h1 className="text-white font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95]">
                  BUILD.
                </h1>
                <h1 className="text-white font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95]">
                  INTEGRATE.
                </h1>
                <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95] bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  GROW.
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-slate-300 text-lg sm:text-xl max-w-xl leading-relaxed">
                Premium ICT consulting, custom software development, and systems integration
                for Zimbabwe's most ambitious businesses.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact">
                  <GoldButton className="px-8 py-4 text-base">
                    Request a Free Consultation
                  </GoldButton>
                </Link>
                <Link to="/services">
                  <OutlineButton variant="emerald" className="px-8 py-4 text-base">
                    Explore Our Services
                  </OutlineButton>
                </Link>
              </div>

              {/* Trust strip row */}
              <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-slate-400 pt-4 border-t border-gray-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>47+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>31+ Clients Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>EcoCash & Card Integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Harare-Based Team</span>
                </div>
              </div>
            </div>

            {/* Right col (5 cols): Floating Stats Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#1a1a1a] border-2 border-[#D4AF37] rounded-3xl p-8 shadow-2xl gold-glow-lg text-white space-y-6 relative"
              >
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-white text-base">iStart Capital</h2>
                      <p className="text-[11px] text-gray-400">Enterprise Engineering</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700/50">
                    Active Projects
                  </span>
                </div>

                <div className="h-px bg-[#2a2a2a]" />

                {/* 4 stat rows */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 bg-[#141414] rounded-2xl border border-[#2a2a2a]/60">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-2">
                      <FolderCheck className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-gray-400 block">Projects Delivered</span>
                    <span className="text-2xl font-black text-[#D4AF37]">47+</span>
                  </div>

                  <div className="p-3.5 bg-[#141414] rounded-2xl border border-[#2a2a2a]/60">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-2">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-gray-400 block">Clients Served</span>
                    <span className="text-2xl font-black text-[#D4AF37]">31+</span>
                  </div>

                  <div className="p-3.5 bg-[#141414] rounded-2xl border border-[#2a2a2a]/60">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-2">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-gray-400 block">Tech Stack</span>
                    <span className="text-2xl font-black text-[#D4AF37]">12+</span>
                  </div>

                  <div className="p-3.5 bg-[#141414] rounded-2xl border border-[#2a2a2a]/60">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-2">
                      <Activity className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-gray-400 block">System Uptime</span>
                    <span className="text-2xl font-black text-[#D4AF37]">99.9%</span>
                  </div>
                </div>

                <div className="h-px bg-[#2a2a2a]" />

                <div>
                  <p className="text-xs text-gray-400 mb-3 text-center">
                    Ready to start your project with Zimbabwe's top engineering team?
                  </p>
                  <Link to="/contact" className="block">
                    <GoldButton className="w-full py-3.5">Get a Quote Today</GoldButton>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ServicesOverviewSection */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="WHAT WE DO" align="center" />
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111] text-center tracking-tight mb-4">
            Our Core <span className="text-emerald-700">Services</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14 text-base sm:text-lg">
            We deliver end-to-end digital capabilities designed to streamline operations,
            connect fragmented platforms, and accelerate business growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <OutlineButton variant="emerald" className="px-8 py-3.5">
                <span>View All Service Details</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </OutlineButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. StatsSection */}
      <section className="bg-[#111111] py-16 sm:py-20 border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} animate={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PartnersPreviewSection */}
      <section className="bg-[#F8F9FA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="POWERED BY THE ISTART NETWORK" align="center" />
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111] text-center tracking-tight mb-4">
            Our Partner <span className="text-[#D4AF37]">Ecosystem</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14 text-base sm:text-lg">
            We don't just build software — we build businesses. Our partner network showcases
            the platforms we've engineered and continue to support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <PartnerCard partner={partner} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" state={{ subject: 'partnership' }}>
              <OutlineButton variant="gold" className="px-8 py-3.5">
                Become a Network Partner
              </OutlineButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TestimonialsSection */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="CLIENT VOICES" align="center" />
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111] text-center tracking-tight mb-4">
            Trusted by <span className="text-emerald-700">Zimbabwe's</span> Best
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14 text-base sm:text-lg">
            Hear from industry leaders and entrepreneurs who rely on iStart Capital for their
            mission-critical software systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ProcessSection */}
      <section className="bg-[#111111] py-20 lg:py-28 border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="HOW WE WORK" align="center" />
          <h2 className="text-4xl sm:text-5xl font-black text-white text-center tracking-tight mb-16">
            Our <span className="text-[#D4AF37]">Delivery</span> Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isGold = step.color === 'gold';
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#161616] border border-[#2a2a2a] relative z-10"
                >
                  {/* Step Badge & Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg ${
                      isGold
                        ? 'bg-[#D4AF37] text-[#111111]'
                        : 'bg-emerald-700 text-white'
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <span
                    className={`text-xs font-black uppercase tracking-wider mb-2 ${
                      isGold ? 'text-[#D4AF37]' : 'text-emerald-400'
                    }`}
                  >
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTABannerSection */}
      <section className="bg-[#D4AF37] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#111111]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Ready to Engineer Your Digital Future?
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#111111]/85 max-w-2xl mx-auto mb-8">
            Join 31+ Zimbabwean businesses that trust iStart Capital to build, integrate, and
            grow their digital operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <button
                type="button"
                className="px-8 py-4 rounded-xl bg-[#111111] hover:bg-black text-white font-bold text-sm tracking-wide transition-colors cursor-pointer shadow-lg"
              >
                Start a Project
              </button>
            </Link>

            <OutlineButton
              variant="dark"
              href={whatsappUrl}
              target="_blank"
              className="px-8 py-4 text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>WhatsApp Us Now</span>
            </OutlineButton>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
