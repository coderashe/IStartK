import React from 'react';
import { motion } from 'motion/react';
import { useParams, Navigate, Link } from 'react-router-dom';
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
  ChevronRight,
  Lightbulb,
  Rocket,
} from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel.tsx';
import { Badge } from '../components/ui/Badge.tsx';
import { GoldButton } from '../components/ui/GoldButton.tsx';
import { OutlineButton } from '../components/ui/OutlineButton.tsx';
import { TestimonialCard } from '../components/ui/TestimonialCard.tsx';
import { SERVICES, TESTIMONIALS, COMPANY_INFO } from '../data/mockData.ts';
import { buildWhatsAppUrl } from '../utils/whatsapp.ts';

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

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.icon] || Code2;
  const whatsappInquiryUrl = buildWhatsAppUrl(
    COMPANY_INFO.whatsappClean,
    `Hello iStart Capital! I would like to inquire about your ${service.title} service.`
  );

  // Filter 2 testimonials relevant or first two
  const relevantTestimonials = TESTIMONIALS.slice(0, 2);

  const serviceSteps = [
    {
      num: '01',
      title: 'Scoping & Architecture Workshop',
      icon: Lightbulb,
      desc: `Deep dive into your technical and business goals specifically for ${service.title.toLowerCase()}.`,
    },
    {
      num: '02',
      title: 'Design & Prototyping',
      icon: PenTool,
      desc: 'Interactive wireframes, data models, and API blueprints approved before engineering starts.',
    },
    {
      num: '03',
      title: 'Agile Implementation Sprints',
      icon: Code2,
      desc: 'Continuous delivery with regular staging environments, feedback loops, and automated tests.',
    },
    {
      num: '04',
      title: 'Production Handover & Support',
      icon: Rocket,
      desc: 'Flawless launch, team onboarding, comprehensive documentation, and warranty coverage.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full bg-white"
    >
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0d0d0d] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link to="/services" className="hover:text-emerald-400 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-[#D4AF37] font-semibold">{service.title}</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            {service.badge && <Badge text={service.badge} variant="gold" />}

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <IconComponent className="w-7 h-7" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                {service.title}
              </h1>
            </div>

            <p className="text-xl font-medium text-[#D4AF37] italic">"{service.tagline}"</p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/contact" state={{ service: service.id }}>
                <GoldButton className="px-8 py-3.5">Request a Proposal</GoldButton>
              </Link>
              <OutlineButton
                variant="emerald"
                href={whatsappInquiryUrl}
                target="_blank"
                className="px-8 py-3.5"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Chat on WhatsApp</span>
              </OutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <SectionLabel text="SERVICE OVERVIEW" align="left" />
                <h2 className="text-3xl font-black text-[#111111] mb-4">
                  Engineering Scope & Architectural Approach
                </h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                  {service.fullDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-3">
                  Core Technologies & Frameworks:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#F8F9FA] border border-gray-200 text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline & Price banner */}
              <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700/10 text-emerald-800 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-semibold">
                      Estimated Duration
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {service.estimatedTimeline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#B8960C] flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-semibold">
                      Pricing Starting At
                    </span>
                    <span className="text-base font-black text-[#D4AF37]">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col (5 cols): Deliverables Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#111111] rounded-3xl p-8 border border-[#2a2a2a] text-white shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-black uppercase tracking-wider text-white">
                    Deliverables Checklist
                  </h3>
                </div>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  Every engagement comes with a strict quality guarantee and verifiable output
                  documents:
                </p>

                <ul className="space-y-4">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 mt-8 border-t border-[#2a2a2a]">
                  <Link to="/contact" state={{ service: service.id }} className="block">
                    <GoldButton className="w-full py-3.5 text-xs">
                      Book Consultation for This Service
                    </GoldButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features grid */}
      <section className="bg-[#F8F9FA] py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="WHAT'S INCLUDED" align="center" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] text-center tracking-tight mb-14">
            Key Capabilities & Core Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature) => {
              const FeatIcon = iconMap[feature.icon] || Code2;
              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-t-4 hover:border-t-[#D4AF37] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                      <FeatIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process Steps */}
      <section className="bg-[#111111] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="DELIVERY PHASES" align="center" />
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center tracking-tight mb-14">
            How We Execute Your <span className="text-[#D4AF37]">Solution</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-[#181818] border border-[#2a2a2a] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-700/50 flex items-center justify-center">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-[#D4AF37] tracking-widest">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Related Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="CLIENT VALIDATION" align="center" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] text-center tracking-tight mb-12">
            Real Outcomes From Real Businesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relevantTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTASection */}
      <section className="bg-[#D4AF37] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#111111]">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Ready to get started with {service.title}?
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#111111]/85 mb-8 max-w-xl mx-auto">
            Book a complimentary 30-minute discovery consultation with our senior engineering
            leads in Harare.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" state={{ service: service.id }}>
              <button
                type="button"
                className="px-8 py-3.5 rounded-xl bg-[#111111] hover:bg-black text-white font-bold text-sm tracking-wide transition-colors cursor-pointer shadow-md"
              >
                Inquire About This Service
              </button>
            </Link>

            <OutlineButton
              variant="dark"
              href={whatsappInquiryUrl}
              target="_blank"
              className="px-8 py-3.5 text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>WhatsApp Consultation</span>
            </OutlineButton>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
