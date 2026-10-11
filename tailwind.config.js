/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-light': '#E8C84A',
        'gold-dark': '#B8960C',
        'emerald-brand': '#198754',
        'emerald-dark': '#0F5132',
        'luxury-dark': '#111111',
        'luxury-deeper': '#0d0d0d',
        'luxury-card': '#1a1a1a',
        'luxury-border': '#2a2a2a',
        'off-white': '#F8F9FA',
        'light-gray': '#F1F3F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
