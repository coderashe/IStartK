import { ContactFormData } from '../types/istart.ts';

export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = cleanPhoneNumber(phone);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function formatServiceInquiry(serviceName: string, company: string, name: string): string {
  const companyStr = company.trim() ? company.trim() : 'our team';
  const nameStr = name.trim() ? name.trim() : 'a prospective partner';
  return `Hello iStart Capital 👋\n\nI'm *${nameStr}* from *${companyStr}*.\n\nI'm interested in your *${serviceName}* service and would like to discuss a potential project.\n\nCould we schedule a consultation call?\n\nThank you.`;
}

export function formatContactMessage(data: ContactFormData): string {
  const company = data.company?.trim() ? data.company.trim() : 'Not provided';
  const phone = data.phone?.trim() ? data.phone.trim() : 'Not provided';
  const budget = data.projectBudget?.trim() ? data.projectBudget.trim() : 'Not specified';
  const service = data.serviceInterest?.trim() ? data.serviceInterest.trim() : 'General Inquiry';

  return `Hello iStart Capital! 👋\n\n📋 *NEW PROJECT INQUIRY*\n─────────────────────\n👤 *Name:* ${data.fullName.trim()}\n🏢 *Company:* ${company}\n📧 *Email:* ${data.email.trim()}\n📞 *Phone:* ${phone}\n💼 *Service Interest:* ${service}\n💰 *Budget Range:* ${budget}\n📬 *Preferred Contact:* ${data.preferredContact}\n\n📝 *PROJECT DETAILS:*\n${data.message.trim()}\n\n_Sent via iStart Capital website contact form._`;
}
