import { ContactFormData, ContactFormErrors } from '../types/istart.ts';

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required';
  if (!data.email.trim()) errors.email = 'Email address is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Please enter a valid email address';
  if (data.phone && data.phone.replace(/\D/g, '').length < 8)
    errors.phone = 'Please enter a valid phone number';
  if (!data.serviceInterest)
    errors.serviceInterest = 'Please select a service area';
  if (!data.message.trim()) errors.message = 'Project description is required';
  else if (data.message.trim().length < 20)
    errors.message = 'Please provide at least 20 characters describing your project';
  return errors;
}

export function formatBudgetLabel(budget: string): string {
  const budgetMap: Record<string, string> = {
    under_500: 'Under $500',
    '500_1000': '$500 – $1,000',
    '1000_5000': '$1,000 – $5,000',
    '5000_15000': '$5,000 – $15,000',
    '15000_plus': '$15,000+',
    retainer: 'Ongoing Monthly Retainer',
  };
  return budgetMap[budget] || budget;
}
