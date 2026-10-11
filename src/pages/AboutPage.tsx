import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  HeartHandshake,
  Handshake,
  MapPin,
  Code2,
  Network,
  Smartphone,
  TrendingUp,
  Linkedin,
  Quote,
} from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel.tsx';
import { GoldButton } from '../components/ui/GoldButton.tsx';
import { OutlineButton } from '../components/ui/OutlineButton.tsx';
import { StatCounter } from '../components/ui/StatCounter.tsx';
import { COMPANY_INFO, TEAM } from '../data/mockData.ts';

const valueIconMap: Record<string, React.ElementType> = {
  Cpu,
  HeartHandshake,
  Handshake,
  MapPin,
};

const teamIconMap: Record<string, React.ElementType> = {
  Code2,
  Network,
  Smartphone,
  TrendingUp,
};

export const AboutPage: React.FC = () => {
  const techItems = [
    'React 19',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'React Native',
    'Vite 8',
    'Tailwind CSS v4',
    'Docker',
    'REST APIs',
    'GraphQL',
    'EcoCash API',
    'Paynow SDK',
    'Redis',
    'GitHub Actions',
    'Vercel',
  ];

  const scrollToTeam = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('team');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full bg-white"
    >
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0d0d0d] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <SectionLabel text="OUR STORY" align="left" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Engineering Zimbabwe's <span className="text-[#D4AF37]">Digital Future</span>
          </h1>

          <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            <p>
              iStart Capital was founded in 2021 with a singular mission: to give Zimbabwean
              businesses access to the same calibre of software engineering and digital
              infrastructure that powers global enterprises. We saw a gap — local businesses
              were underserved by generic solutions that didn't account for Zimbabwe's unique
              payment ecosystem, connectivity constraints, and market dynamics. We built iStart
              Capital to close that gap.
            </p>
            <p>
              Today, we operate as a dedicated engineering unit delivering mission-critical web
              platforms, enterprise ERP bridges, payment gateways, and high-conversion B2B digital
              marketing. With over 47 systems delivered and an unyielding commitment to precision,
              our focus remains squarely on verifiable business outcomes for African
              enterprises.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <Link to="/contact">
              <GoldButton className="px-8 py-3.5">Work With Us</GoldButton>
            </Link>
            <OutlineButton
              variant="emerald"
              onClick={scrollToTeam}
              className="px-8 py-3.5 cursor-pointer"
            >
              Meet the Team
            </OutlineButton>
          </div>
        </div>
      </section>

      {/* 2. ValuesSection */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="WHAT DRIVES US" align="center" />
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111] text-center tracking-tight mb-4">
            Our Core <span className="text-emerald-700">Values</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-base sm:text-lg">
            Principles that guide every software architecture decision, client engagement, and
            deployment milestone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.values.map((val) => {
              const IconComp = valueIconMap[val.icon] || Cpu;
              return (
                <div
                  key={val.title}
                  className="bg-white border border-gray-200 border-l-4 border-l-[#D4AF37] rounded-2xl p-8 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-2">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                </div>
              );
            })}
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

      {/* 4. TeamSection */}
      <section id="team" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="THE TEAM" align="center" />
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111] text-center tracking-tight mb-4">
            Meet the <span className="text-[#D4AF37]">Engineers</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-base sm:text-lg">
            Harare-based architects, full-stack builders, and digital strategists committed to
            transforming African software standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => {
              const initials = member.name
                .split(' ')
                .map((n) => n[0])
                .join('');
              const MemberIcon = teamIconMap[member.icon] || Code2;

              return (
                <div
                  key={member.id}
                  className="bg-[#111111] border-t-2 border-t-[#D4AF37] border-x border-b border-[#2a2a2a] rounded-2xl p-6 text-center text-white flex flex-col justify-between shadow-lg"
                >
                  <div>
                    {/* Large Avatar */}
                    <div className="w-20 h-20 rounded-full bg-emerald-700 mx-auto flex items-center justify-center text-white text-2xl font-black mb-4 shadow-md border-2 border-white/10">
                      {initials}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-3">
                      {member.role}
                    </span>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">{member.bio}</p>
                  </div>

                  <div className="pt-4 border-t border-[#222222] flex items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center">
                      <MemberIcon className="w-4 h-4" />
                    </div>
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="w-8 h-8 rounded-lg bg-[#1a1a1a] hover:bg-emerald-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TechStackSection */}
      <section className="bg-[#111111] py-16 border-y border-[#222222] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <SectionLabel text="TECHNOLOGIES WE USE" align="center" />
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our <span className="text-[#D4AF37]">Tech Stack</span>
          </h2>
        </div>

        {/* Marquee loop */}
        <div className="overflow-hidden py-4 border-y border-[#2a2a2a] bg-[#0d0d0d]">
          <div className="animate-marquee flex gap-12 shrink-0">
            {[...techItems, ...techItems].map((item, i) => (
              <span
                key={i}
                className="text-[#D4AF37] font-bold text-lg sm:text-xl shrink-0 flex items-center gap-6"
              >
                <span>{item}</span>
                <span className="text-emerald-500 text-sm">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MissionSection */}
      <section className="bg-[#D4AF37] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#111111]">
          <Quote className="w-12 h-12 mx-auto text-[#111111]/40 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
            Our Mission
          </h2>
          <p className="text-xl sm:text-2xl font-bold italic text-[#111111] leading-relaxed max-w-3xl mx-auto mb-6">
            "To engineer world-class digital infrastructure for Zimbabwe's most ambitious
            businesses — making enterprise-grade technology accessible, affordable, and built
            for local realities."
          </p>
          <span className="text-sm font-semibold text-[#111111]/75 block">
            — Simba Marindwa, Founder & Lead Engineer
          </span>
        </div>
      </section>
    </motion.div>
  );
};
