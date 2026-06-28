/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:          '#DC2626',
        'primary-dark':   '#B91C1C',
        'primary-light':  '#FEF2F2',
        dark:             '#0A0A0A',
        'gray-body':      '#4B5563',
        'gray-secondary': '#9CA3AF',
        'gray-border':    '#E5E7EB',
        'gray-bg':        '#F9FAFB',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4rem)',  { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)',    { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-md': ['1.5rem',                    { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        content: '64rem',
      },
    },
  },
  plugins: [],
}
