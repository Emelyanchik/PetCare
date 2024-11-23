/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'ping': 'ping 0.5s cubic-bezier(0, 0, 0.2, 1)',
        'float': 'float 1.5s ease-out forwards',
      },
    },
  },
  safelist: [
    'bg-pink-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-green-500',
  ],
  plugins: [],
};