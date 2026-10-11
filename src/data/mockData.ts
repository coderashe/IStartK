import { CompanyInfo, Service, Partner, Testimonial, TeamMember } from '../types/istart.ts';

export const COMPANY_INFO: CompanyInfo = {
  name: 'iStart Capital',
  tagline: "Engineering Zimbabwe's Digital Future",
  bannerHeadline: 'BUILD. INTEGRATE. GROW.',
  slogan: 'Premium ICT Solutions | Trusted by Business',
  address: 'Harare, Zimbabwe',
  email: 'hello@istart.co.zw',
  whatsappClean: '263772591965',
  whatsappDisplay: '+263 77 259 1965',
  linkedIn: 'https://linkedin.com/company/istart-capital',
  facebook: 'https://facebook.com/istartcapital',
  twitter: 'https://twitter.com/istartcapital',
  copyrightYear: 2025,
  founded: '2021',
  teamSize: '12+',
  projectsDelivered: 47,
  clientsServed: 31,
  stats: [
    { label: 'Projects Delivered', value: '47', icon: 'FolderCheck', suffix: '+' },
    { label: 'Clients Served', value: '31', icon: 'Users', suffix: '+' },
    { label: 'Years Operating', value: '4', icon: 'Calendar', suffix: '+' },
    { label: 'Uptime Guarantee', value: '99.9', icon: 'Activity', suffix: '%' },
  ],
  values: [
    {
      title: 'Precision Engineering',
      description: 'Every system we build is architected for scale, security, and long-term maintainability.',
      icon: 'Cpu',
    },
    {
      title: 'Client-First Delivery',
      description: 'We measure success by your business outcomes, not just code deployment.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Transparent Partnership',
      description: 'Clear timelines, honest pricing, and open communication at every project stage.',
      icon: 'Handshake',
    },
    {
      title: 'Local Expertise',
      description: "Deep understanding of Zimbabwe's payment ecosystem, regulations, and market dynamics.",
      icon: 'MapPin',
    },
  ],
};

export const SERVICES: Service[] = [
  {
    id: 'software-development',
    category: 'software-development',
    title: 'Software Development',
    tagline: 'Custom Digital Systems Built for Scale',
    shortDescription:
      'From enterprise web portals to cross-platform mobile applications — we architect, build, and deploy production-grade software tailored to your business workflows.',
    fullDescription:
      'Our software development practice delivers end-to-end engineered software solutions for businesses ready to dominate their digital landscape. We design custom web systems, e-commerce architectures with local payment gateway integration, secure enterprise administrative portals, and native or cross-platform mobile apps for iOS and Android. Built with robust, modern technology stacks, our solutions are engineered for high concurrency, security, and effortless scalability.',
    features: [
      {
        title: 'Custom Web Systems',
        description:
          'Enterprise-grade web applications, admin portals, and client-facing platforms built with modern React and Node.js architectures.',
        icon: 'Monitor',
      },
      {
        title: 'E-Commerce Architectures',
        description:
          'Full-stack online stores with EcoCash, Innbucks, and Visa/Mastercard payment gateway integrations for the Zimbabwean market.',
        icon: 'ShoppingCart',
      },
      {
        title: 'Enterprise Portals',
        description:
          'Internal business management systems, HR platforms, inventory management, and custom ERP dashboards.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Mobile Applications',
        description:
          'Native iOS and Android apps plus cross-platform React Native solutions with offline-first capabilities.',
        icon: 'Smartphone',
      },
      {
        title: 'API Development',
        description:
          'RESTful and GraphQL API design, documentation, and third-party service integrations.',
        icon: 'Code2',
      },
      {
        title: 'Maintenance & Support',
        description:
          'Ongoing system monitoring, security patching, performance optimization, and feature enhancements.',
        icon: 'Wrench',
      },
    ],
    deliverables: [
      'Technical Architecture Document',
      'UI/UX Wireframes & Prototypes',
      'Source Code Repository Access',
      'Deployment & CI/CD Pipeline',
      'User Acceptance Testing Report',
      'Post-Launch Support Package',
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'React Native',
      'Vite',
      'Tailwind CSS',
      'Docker',
    ],
    icon: 'Code2',
    badge: 'Core Service',
    accentColor: '#198754',
    estimatedTimeline: '6–16 weeks',
    startingPrice: 'From $1,200',
  },
  {
    id: 'systems-integration',
    category: 'systems-integration',
    title: 'Systems Integration',
    tagline: 'Connecting Your Business Ecosystem Seamlessly',
    shortDescription:
      'We bridge the gap between your existing enterprise systems, payment gateways, and third-party APIs — eliminating data silos and automating critical business workflows.',
    fullDescription:
      'Modern businesses rely on diverse software tools that often do not communicate effectively. iStart Capital engineers intelligent middleware layers, webhooks, and secure API bridges that link your accounting software (such as Sage, Pastel, or SAP) directly with your e-commerce storefronts, mobile apps, and Zimbabwean payment processors like EcoCash, Innbucks, and Paynow. We modernize legacy platforms without costly total rewrites.',
    features: [
      {
        title: 'Payment Gateway Integration',
        description:
          'EcoCash, Innbucks, Paynow, DPO, Visa, and Mastercard merchant API connections for seamless transaction processing.',
        icon: 'CreditCard',
      },
      {
        title: 'ERP Connectivity',
        description:
          'Linking Sage, Pastel, SAP, and custom ERP systems with your e-commerce, CRM, and reporting platforms.',
        icon: 'Network',
      },
      {
        title: 'API Architecture',
        description:
          'Designing robust middleware layers that allow disparate systems to communicate reliably and securely.',
        icon: 'GitMerge',
      },
      {
        title: 'Legacy Modernization',
        description:
          'Wrapping and extending legacy systems with modern API layers without costly full rewrites.',
        icon: 'RefreshCw',
      },
      {
        title: 'Real-Time Sync',
        description:
          'Webhook-driven data pipelines ensuring inventory, orders, and customer data stay synchronized across all platforms.',
        icon: 'Zap',
      },
      {
        title: 'Security & Compliance',
        description:
          'PCI-DSS compliant integration patterns, encrypted data transit, and audit trail implementation.',
        icon: 'ShieldCheck',
      },
    ],
    deliverables: [
      'Integration Architecture Diagram',
      'API Documentation',
      'Test Environment Setup',
      'Data Migration Plan',
      'Security Audit Report',
      'Monitoring Dashboard',
    ],
    techStack: [
      'REST APIs',
      'GraphQL',
      'Webhooks',
      'EcoCash API',
      'Paynow SDK',
      'PostgreSQL',
      'Redis',
      'Node.js',
    ],
    icon: 'Network',
    badge: 'High Demand',
    accentColor: '#0F5132',
    estimatedTimeline: '3–10 weeks',
    startingPrice: 'From $800',
  },
  {
    id: 'social-media-management',
    category: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'B2B Digital Presence That Generates Leads',
    shortDescription:
      "Strategic corporate social media management focused on building authority, generating qualified B2B leads, and managing your brand's digital footprint across all major platforms.",
    fullDescription:
      'True corporate social media goes far beyond vanity metrics. We craft data-backed B2B content strategies designed to elevate executive branding, position your business as an industry thought leader on LinkedIn and Meta, run high-converting paid client acquisition campaigns, and manage customer communications with professionalism and speed.',
    features: [
      {
        title: 'B2B Brand Strategy',
        description:
          'Positioning your company as an industry authority through consistent, professional content aligned with your business objectives.',
        icon: 'Target',
      },
      {
        title: 'Content Creation',
        description:
          'Professional copywriting, graphic design, and short-form video production tailored for corporate audiences.',
        icon: 'PenTool',
      },
      {
        title: 'Lead Generation Campaigns',
        description:
          'Targeted paid social campaigns on LinkedIn and Facebook designed to generate qualified business inquiries.',
        icon: 'TrendingUp',
      },
      {
        title: 'Content Scheduling',
        description:
          'Automated multi-platform publishing calendars ensuring consistent brand presence without manual effort.',
        icon: 'Calendar',
      },
      {
        title: 'Analytics & Reporting',
        description:
          'Monthly performance reports with engagement metrics, reach data, lead attribution, and ROI analysis.',
        icon: 'BarChart3',
      },
      {
        title: 'Community Management',
        description:
          'Professional response management, reputation monitoring, and stakeholder engagement across all channels.',
        icon: 'MessageSquare',
      },
    ],
    deliverables: [
      'Social Media Audit Report',
      'Brand Voice & Style Guide',
      'Monthly Content Calendar',
      'Paid Campaign Setup',
      'Monthly Analytics Report',
      'Competitor Analysis',
    ],
    techStack: [
      'Meta Business Suite',
      'LinkedIn Campaign Manager',
      'Canva Pro',
      'Hootsuite',
      'Google Analytics',
      'Meta Ads API',
    ],
    icon: 'Share2',
    badge: 'New Offering',
    accentColor: '#D4AF37',
    estimatedTimeline: 'Ongoing Monthly',
    startingPrice: 'From $350/mo',
  },
];

export const PARTNERS: Partner[] = [
  {
    id: 'hp-shoes',
    name: 'H & P Shoes',
    tagline: "Harare's Premium Fashion Destination",
    description:
      "Premium ladies' footwear and contemporary designer clothing boutique operating in the heart of Harare. Powered by iStart Capital's e-commerce architecture.",
    category: 'Fashion & E-Commerce',
    websiteUrl: 'https://coderashe.github.io/HandP/',
    icon: 'ShoppingBag',
    accentColor: '#D4AF37',
    badge: 'E-Commerce Partner',
    tags: ['Fashion', 'Footwear', 'E-Commerce', 'Harare'],
  },
  {
    id: 'legendary-parts',
    name: 'Legendary Parts Center',
    tagline: "Zimbabwe's One-Stop Automotive Spares Shop",
    description:
      'Trusted automotive spare parts retailer with branches in Kadoma, Harare, and Karoi. Genuine OEM-spec parts for Japanese, European, and South African vehicles.',
    category: 'Automotive Retail',
    websiteUrl: 'https://coderashe.github.io/LegendaryParts/',
    icon: 'Wrench',
    accentColor: '#198754',
    badge: 'Retail Partner',
    tags: ['Automotive', 'Spare Parts', 'Kadoma', 'Harare'],
  },
  {
    id: 'chichi-tlc',
    name: 'Chichi TLC',
    tagline: 'Luxury Care. Elevated Living.',
    description:
      'A premium tender loving care brand offering luxury personal care products and lifestyle services. Sophisticated, elegant, and crafted for the discerning Zimbabwean consumer.',
    category: 'Luxury Lifestyle',
    websiteUrl: 'https://coderashe.github.io/ChichiTlc/',
    icon: 'Sparkles',
    accentColor: '#D4AF37',
    badge: 'Lifestyle Partner',
    tags: ['Luxury', 'Lifestyle', 'Personal Care', 'Premium'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'Tendai Moyo',
    clientTitle: 'CEO',
    company: 'Moyo Logistics Ltd',
    quote:
      'iStart Capital transformed our manual dispatch system into a fully automated web platform. The EcoCash integration alone saved us 3 hours of daily reconciliation work.',
    rating: 5,
    industry: 'Logistics',
    avatar: 'TM',
  },
  {
    id: 'testimonial-2',
    clientName: 'Rudo Chikwanda',
    clientTitle: 'Marketing Director',
    company: 'Chikwanda Retail Group',
    quote:
      'Their social media management team completely repositioned our brand on LinkedIn. We went from zero B2B inquiries to 12 qualified leads in the first month.',
    rating: 5,
    industry: 'Retail',
    avatar: 'RC',
  },
  {
    id: 'testimonial-3',
    clientName: 'Farai Mutasa',
    clientTitle: 'IT Manager',
    company: 'Mutasa Financial Services',
    quote:
      'The systems integration work connecting our Sage ERP to our online payment portal was flawless. Professional team, clear documentation, and delivered on time.',
    rating: 5,
    industry: 'Financial Services',
    avatar: 'FM',
  },
  {
    id: 'testimonial-4',
    clientName: 'Blessing Ncube',
    clientTitle: 'Founder',
    company: 'Ncube Tech Ventures',
    quote:
      "As a startup, we needed a partner who understood both the technical and business side. iStart Capital delivered our MVP in 8 weeks and it's been running without issues.",
    rating: 4,
    industry: 'Technology',
    avatar: 'BN',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'simba-marindwa',
    name: 'Simba Marindwa',
    role: 'Founder & Lead Engineer',
    bio: 'Full-stack architect with deep expertise in React ecosystems, payment gateway integrations, and enterprise system design for the Zimbabwean market.',
    icon: 'Code2',
    linkedIn: 'https://linkedin.com/company/istart-capital',
  },
  {
    id: 'tafadzwa-choto',
    name: 'Tafadzwa Choto',
    role: 'Systems Integration Lead',
    bio: 'Specialist in ERP connectivity, API middleware design, and legacy system modernization with 6+ years bridging enterprise software ecosystems.',
    icon: 'Network',
    linkedIn: 'https://linkedin.com/company/istart-capital',
  },
  {
    id: 'nyasha-banda',
    name: 'Nyasha Banda',
    role: 'Mobile & UI Engineer',
    bio: 'React Native developer and UI/UX designer focused on building performant, accessible mobile experiences for African markets.',
    icon: 'Smartphone',
    linkedIn: 'https://linkedin.com/company/istart-capital',
  },
  {
    id: 'chiedza-mupfumi',
    name: 'Chiedza Mupfumi',
    role: 'Digital Marketing Strategist',
    bio: 'B2B social media specialist with a track record of building corporate authority and generating qualified leads through strategic content campaigns.',
    icon: 'TrendingUp',
    linkedIn: 'https://linkedin.com/company/istart-capital',
  },
];
