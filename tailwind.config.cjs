/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xxs: 12,
      xs: 14,
      sm: 16,
      md: 24,
      lg: 32,
      xl: 42,
      '2xl': 56,
    },
    colors: {
      'green-500': '#73FE42',
      'green-300': '#77FF85',
      'green-200': '#B5FFB4',
      'gray-900': '#202024',
      'gray-700': '#252525',
      'gray-500': '#7c7c8a',
      transparent: 'transparent',
      black: '#121214',
      white: '#fff',
    },
    extend: {
      fontFamily: {
        sans: 'Poppins',
      },
    },
  },
  plugins: [],
};
