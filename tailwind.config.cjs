/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    screens: {
      sm: '400px',
    },
    extend: {
      backgroundColor: {
        primary: '#ee7844',
        secondary: '#0020a2',
        light: '#f7f5fa',
      },
      textColor: {
        light: '#f7f5fa',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  important: '#root',
  corePlugins: {
    preflight: false,
  },
};
