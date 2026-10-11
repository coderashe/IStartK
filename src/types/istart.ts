export type ServiceCategory =
  | 'software-development'
  | 'systems-integration'
  | 'social-media-management';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: ServiceFeature[];
  deliverables: string[];
  techStack: string[];
  icon: string;
  badge?: string;
  accentColor: string;
  estimatedTimeline: string;
  startingPrice: string;
}

export interface Partner {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  websiteUrl: string;
  icon: string;
  accentColor: string;
  badge?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  company: string;
  quote: string;
  rating: number;
  industry: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  icon: string;
  linkedIn?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: ServiceCategory | 'general' | '';
  projectBudget: string;
  message: string;
  preferredContact: 'email' | 'whatsapp' | 'call';
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
  serviceInterest?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  bannerHeadline: string;
  slogan: string;
  address: string;
  email: string;
  whatsappClean: string;
  whatsappDisplay: string;
  linkedIn: string;
  facebook: string;
  twitter: string;
  copyrightYear: number;
  founded: string;
  teamSize: string;
  projectsDelivered: number;
  clientsServed: number;
  stats: CompanyStat[];
  values: CompanyValue[];
}

export interface CompanyStat {
  label: string;
  value: string;
  icon: string;
  suffix?: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}
