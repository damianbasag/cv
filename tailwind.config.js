/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  safelist: ['bg-cyan-500','text-white','border-cyan-400','bg-slate-900','text-slate-300','border-steel-800','opacity-0','hidden','rotate-180'],
  darkMode: 'class',
  theme: {
      extend: {
          fontFamily: {
              sans: ['Inter', 'sans-serif'],
          },
          colors: {
              steel: {
                  50: '#f0f5fa',
                  100: '#e1ebf5',
                  200: '#c7d8eb',
                  300: '#9ebedd',
                  400: '#6d9dca',
                  500: '#487eb2',
                  600: '#346496',
                  700: '#2b507a',
                  800: '#264365',
                  900: '#233954',
                  950: '#111d2e'
              },
              industrial: {
                  base: '#0c121a',
                  card: '#141f2d',
                  border: '#233549',
                  cyan: '#00bdff',
                  accent: '#487eb2',
                  amber: '#f59e0b',
                  rose: '#f43f5e'
              }
          }
      }
  }
};
