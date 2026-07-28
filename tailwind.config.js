/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F7F4EF',
          300: '#F0EBE3',
          400: '#E8E1D6',
        },
        ink: {
          900: '#181C20',
          800: '#1F2428',
          700: '#2A3036',
          600: '#3A4248',
          500: '#525B62',
          400: '#6B7480',
        },
        rust: {
          50: '#FDF2EF',
          100: '#FAE3DC',
          200: '#F4C7B8',
          300: '#ECA88F',
          400: '#E0835F',
          500: '#C84B31',
          600: '#B53D24',
          700: '#93301C',
          800: '#732818',
          900: '#5A2114',
        },
        sage: {
          400: '#8DAE9A',
          500: '#6B9A7B',
        },
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)',
        card: '0 4px 24px -8px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
        'rust-glow': '0 8px 30px -8px rgba(200,75,49,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
