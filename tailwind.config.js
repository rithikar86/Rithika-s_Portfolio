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
        obsidian: {
          950: '#F7F5F0',
          900: '#F2EFE9',
          800: '#FBF9F4',
          700: '#EFEBE2',
          600: '#E3DED3',
          500: '#CFC8BA',
          400: '#78716C',
          300: '#57534E',
          200: '#44403C',
          100: '#292524',
          50: '#1C1917',
        },
        emerald: {
          300: '#FCD34D',
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
        },
        amber: {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
        },
        sky: {
          300: '#FCD34D',
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
        },
        cyan: {
          300: '#FCD34D',
          400: '#F59E0B',
          500: '#D97706',
        },
        violet: {
          300: '#F6B37E',
          400: '#F4A261',
          500: '#E57C23',
          600: '#C05A12',
          700: '#9A4308',
        },
        orange: {
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        indigo: {
          300: '#F6B37E',
          400: '#F4A261',
          500: '#E57C23',
          600: '#C05A12',
        },
      },
      boxShadow: {
        glow: '0 0 40px -12px rgba(245,158,11,0.35)',
        'glow-emerald': '0 0 40px -12px rgba(245,158,11,0.25)',
        glass: '0 8px 32px rgba(0,0,0,0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'node-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(16,185,129,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(16,185,129,0)' },
        },
        'blob-drift': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'node-pulse': 'node-pulse 2s ease-in-out infinite',
        'blob-drift': 'blob-drift 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
