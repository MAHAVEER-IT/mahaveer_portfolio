/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        shimmer: 'shimmer 2s infinite',
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 15s ease infinite',
        gradientText: 'gradientText 5s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        shimmer: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gradientText: {
          to: { backgroundPosition: '200% center' },
        },
      },
      transitionDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
      },
      scale: {
        '200': '2',
      },
    },
  },
  plugins: [],
};