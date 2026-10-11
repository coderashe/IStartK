import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Network,
  Share2,
  Monitor,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Wrench,
  CreditCard,
  GitMerge,
  RefreshCw,
  Zap,
  ShieldCheck,
  Target,
  PenTool,
  TrendingUp,
  Calendar,
  BarChart3,
  MessageSquare,
  CheckCircle2,
  Clock,
  DollarSign,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel.tsx';
import { Badge } from '../components/ui/Badge.tsx';
import { Divider } from '../components/ui/Divider.tsx';
import { GoldButton } from '../components/ui/GoldButton.tsx';
import { OutlineButton } from '../components/ui/OutlineButton.tsx';
import { SERVICES } from '../data/mockData.ts';
import { Service } from '../types/istart.ts';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Network,
  Share2,
  Monitor,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Wrench,
  CreditCard,
  GitMerge,
  RefreshCw,
  Zap,
  ShieldCheck,
  Target,
  PenTool,
  TrendingUp,
  Calendar,
  BarChart3,
  MessageSquare,
};

const serviceBestForMap: Record<string, string[]> = {
  'software-development': [
    'Custom web portals, admin panels, & ERP dashboards',
    'High-converting e-commerce with local Zimbabwean payments',
    'Cross-platform iOS and Android mobile applications',
  ],
  'systems-integration': [
    'Connecting EcoCash, Innbucks, and Paynow payment gateways',
    'Linking Sage, Pastel, SAP with modern web stores',
    'Automating real-time inventory and financial sync',
  ],
  'social-media-management': [
    'B2B corporate lead generation and authority building',
    'Executive LinkedIn positioning and regular thought leadership',
    'Targeted paid acquisition campaigns across Meta and LinkedIn',
  ],
};

const VisualPanel: React.FC<{ service: Service }> = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <div className="bg-[#111111] rounded-3xl p-8 sm:p-10 border border-[#2a2a2a] text-white flex flex-col justify-between shadow-xl min-h-[440px]">
      <div>
        <div className="w-16 h-16 rounded-2xl bg-emerald-700 text-white flex items-center justify-center mb-6 shadow-md">
          <IconComponent className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-black text-white tracking-tight mb-2">
          {service.title}
        </h3>
        <p className="text-[#D4AF37] italic text-sm font-medium mb-6">
          "{service.tagline}"
        </p>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider text-gray-400 block font-semibold mb-2.5">
            Key Technologies:
          </span>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#1a1a1a] border border-[#D4AF37]/40 text-[#D4AF37]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-4 border-t border-[#2a2a2a]">
        <div className="flex items-center justify-between text-xs text-gray-300">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Timeline: {service.estimatedTimeline}</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-[#D4AF37]">
            <DollarSign className="w-4 h-4 text-[#D4AF37]" />
            <span>{service.startingPrice}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link to="/contact" state={{ service: service.id }}>
            <GoldButton className="w-full text-xs py-3">Get a Quote</GoldButton>
          </Link>
          <Link to={`/services/${service.id}`}>
            <OutlineButton variant="emerald" className="w-full text-xs py-3">
              Full Details
            </OutlineButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ContentPanel: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="flex flex-col justify-between py-2 space-y-6">
      <div>
        {service.badge && (
          <div className="mb-3">
            <Badge text={service.badge} variant="emerald" />
          </div>
        )}
        <p className="text-gray-800 text-lg font-medium leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {service.features.map((feature) => {
            const FeatIcon = iconMap[feature.icon] || Code2;
            return (
              <div
                key={feature.title}
                className="p-4 rounded-xl bg-[#F8F9FA] border border-gray-100 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <FeatIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deliverables List */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-gray-700 mb-3">
            Key Deliverables Included:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServicesPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full bg-white"
    >
      {/* 1. Page hero */}
      <section className="bg-[#F8F9FA] border-b border-gray-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
            <Link to="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold">Services</span>
          </nav>

          <SectionLabel text="OUR CAPABILITIES" align="left" />
          <h1 className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight mb-4">
            Premium ICT <span className="text-emerald-700">Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
            Three core service pillars engineered to transform your business operations,
            digital presence, and technical infrastructure.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-[#111111] text-[#D4AF37] text-xs font-bold tracking-wide">
              ✦ 47+ Projects Delivered
            </span>
            <span className="px-4 py-2 rounded-full bg-[#111111] text-[#D4AF37] text-xs font-bold tracking-wide">
              ✦ 3 Core Service Pillars
            </span>
            <span className="px-4 py-2 rounded-full bg-[#111111] text-[#D4AF37] text-xs font-bold tracking-wide">
              ✦ 4+ Years Enterprise Experience
            </span>
          </div>
        </div>
      </section>

      {/* 2. Services detail section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={service.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {isEven ? (
                      <>
                        <VisualPanel service={service} />
                        <ContentPanel service={service} />
                      </>
                    ) : (
                      <>
                        <ContentPanel service={service} />
                        <VisualPanel service={service} />
                      </>
                    )}
                  </div>
                  {index < SERVICES.length - 1 && <Divider className="my-20" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ComparisonSection */}
      <section className="bg-[#F8F9FA] py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="DECISION GUIDE" align="center" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] text-center tracking-tight mb-14">
            Which Service Do You Need?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon] || Code2;
              const bullets = serviceBestForMap[service.id] || [];

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#111111] mb-2">{service.title}</h3>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-4">
                      Best For:
                    </span>

                    <ul className="space-y-2.5 mb-6 text-xs text-gray-700">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-4">
                    <div className="text-center">
                      <span className="text-xs text-gray-500 block">Starting Investment</span>
                      <span className="text-xl font-black text-[#D4AF37]">
                        {service.startingPrice}
                      </span>
                    </div>

                    <Link to="/contact" state={{ service: service.id }} className="block">
                      <GoldButton className="w-full py-3 text-xs">Inquire Now</GoldButton>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
